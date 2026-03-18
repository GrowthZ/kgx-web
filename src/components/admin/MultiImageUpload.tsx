import React, { FC, useRef, useState } from 'react';
import ImageCropper from './ImageCropper';
import { uploadToR2 } from '../../lib/r2Service';
import toast from 'react-hot-toast';
import Modal from './Modal';
import MediaManager from './MediaManager';

interface MultiImageUploadProps {
    images: string[];
    onChange: (images: string[]) => void;
    label?: string;
}

const MultiImageUpload: FC<MultiImageUploadProps> = ({
    images = [],
    onChange,
    label = 'Thư viện ảnh'
}) => {
    const singleInputRef = useRef<HTMLInputElement>(null);
    const multiInputRef = useRef<HTMLInputElement>(null);
    const [cropSrc, setCropSrc] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState<{ done: number; total: number } | null>(null);
    const [isMediaOpen, setIsMediaOpen] = useState(false);

    // Single file pick → open cropper
    const handleSinglePick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setCropSrc(ev.target?.result as string);
        reader.readAsDataURL(file);
        e.target.value = '';
    };

    // After crop — upload single cropped blob
    const handleCropDone = async (blob: Blob) => {
        try {
            setUploading(true);
            const url = await uploadToR2(blob);
            if (!images.includes(url)) {
                onChange([...images, url]);
            }
            toast.success('Tải ảnh lên thành công');
        } catch {
            toast.error('Lỗi khi upload ảnh');
        } finally {
            setUploading(false);
            setCropSrc(null);
        }
    };

    // Multi-file pick → upload all directly (no cropping for batch)
    const handleMultiPick = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []) as File[];
        e.target.value = '';
        if (files.length === 0) return;

        setUploading(true);
        setUploadProgress({ done: 0, total: files.length });

        const newUrls: string[] = [];
        for (let i = 0; i < files.length; i++) {
            try {
                const url = await uploadToR2(files[i]);
                if (!images.includes(url) && !newUrls.includes(url)) {
                    newUrls.push(url);
                }
                setUploadProgress({ done: i + 1, total: files.length });
            } catch {
                toast.error(`Lỗi khi upload: ${files[i].name}`);
            }
        }

        if (newUrls.length > 0) {
            onChange([...images, ...newUrls]);
            toast.success(`Đã tải lên ${newUrls.length} ảnh thành công`);
        }
        setUploading(false);
        setUploadProgress(null);
    };

    const handleRemoveImage = (index: number) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        onChange(newImages);
    };

    const moveImage = (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === images.length - 1) return;

        const newImages = [...images];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        [newImages[index], newImages[targetIndex]] = [newImages[targetIndex], newImages[index]];
        onChange(newImages);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="text-[10px] font-extrabold text-slate-400 tracking-widest ml-1">
                    {label} ({images.length})
                </label>
                <div className="flex items-center gap-2">
                    {/* Upload nhiều ảnh cùng lúc */}
                    <button
                        type="button"
                        onClick={() => multiInputRef.current?.click()}
                        disabled={uploading}
                        className="flex items-center gap-2 px-4 py-1.5 bg-admin-primary/10 text-admin-primary rounded-xl text-xs font-bold hover:bg-admin-primary hover:text-white transition-all shadow-sm disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-base">photo_library</span>
                        Chọn nhiều ảnh
                    </button>
                    {/* Chọn từ Media Manager */}
                    <button
                        type="button"
                        onClick={() => setIsMediaOpen(true)}
                        disabled={uploading}
                        className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all shadow-sm disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-base">perm_media</span>
                        Thư viện
                    </button>
                </div>
            </div>

            {/* Upload progress bar */}
            {uploadProgress && (
                <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 tracking-widest">
                        <span>ĐANG TẢI LÊN...</span>
                        <span>{uploadProgress.done}/{uploadProgress.total}</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-admin-primary rounded-full transition-all duration-300"
                            style={{ width: `${(uploadProgress.done / uploadProgress.total) * 100}%` }}
                        />
                    </div>
                </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.map((url, index) => (
                    <div key={url + index} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                        <img src={url} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={`Gallery ${index}`} />

                        {/* Overlay Controls */}
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-2 backdrop-blur-[1px]">
                            <div className="flex items-center gap-1.5">
                                <button
                                    type="button"
                                    onClick={() => moveImage(index, 'up')}
                                    className="p-1.5 bg-white text-slate-600 rounded-lg hover:text-admin-primary transition-all disabled:opacity-30"
                                    disabled={index === 0}
                                >
                                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="p-1.5 bg-white text-rose-600 rounded-lg hover:bg-rose-50 transition-all"
                                >
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => moveImage(index, 'down')}
                                    className="p-1.5 bg-white text-slate-600 rounded-lg hover:text-admin-primary transition-all disabled:opacity-30"
                                    disabled={index === images.length - 1}
                                >
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        {/* Index Badge */}
                        <div className="absolute top-2 left-2 size-5 bg-white/90 text-[10px] font-bold text-slate-700 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm ring-1 ring-black/5">
                            {index + 1}
                        </div>
                    </div>
                ))}

                {/* Add Placeholder — single file with crop */}
                <button
                    type="button"
                    onClick={() => singleInputRef.current?.click()}
                    disabled={uploading}
                    className={`aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 transition-all group ${uploading ? 'opacity-50 pointer-events-none' : 'hover:border-admin-primary/40 hover:text-admin-primary hover:bg-admin-primary/5'}`}
                >
                    <span className="material-symbols-outlined text-2xl mb-1 group-hover:scale-110 transition-transform">add_circle</span>
                    <span className="text-[10px] font-bold tracking-widest">Thêm ảnh</span>
                </button>
            </div>

            {/* Single file input (triggers cropper) */}
            <input ref={singleInputRef} type="file" accept="image/*" className="hidden" onChange={handleSinglePick} />
            {/* Multi file input (direct upload, no crop) */}
            <input ref={multiInputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleMultiPick} />

            {cropSrc && (
                <ImageCropper src={cropSrc} onCrop={handleCropDone} onCancel={() => setCropSrc(null)} title={`Chỉnh sửa - ${label}`} />
            )}

            {/* Media Manager Modal */}
            <Modal isOpen={isMediaOpen} onClose={() => setIsMediaOpen(false)}>
                <MediaManager
                    allowSelection={true}
                    onSelect={(url) => {
                        if (!images.includes(url)) {
                            onChange([...images, url]);
                        }
                        setIsMediaOpen(false);
                    }}
                    onClose={() => setIsMediaOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default MultiImageUpload;
