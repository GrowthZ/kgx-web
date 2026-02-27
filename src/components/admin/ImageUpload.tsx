import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ImageCropper from './ImageCropper';
import { uploadToR2 } from '../../lib/r2Service';
import Modal from './Modal';
import MediaManager from './MediaManager';

export const useImageUpload = (onDone: (url: string) => void) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [cropSrc, setCropSrc] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

    const pick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setCropSrc(ev.target?.result as string);
        reader.readAsDataURL(file);
        e.target.value = '';
    };

    const crop = async (blob: Blob) => {
        try {
            setUploading(true);
            const url = await uploadToR2(blob);
            onDone(url);
            toast.success('Tải ảnh lên thành công');
        } catch {
            toast.error('Lỗi khi upload ảnh');
        } finally {
            setUploading(false);
            setCropSrc(null);
        }
    };

    return { inputRef, cropSrc, setCropSrc, uploading, pick, crop };
};

export const ImagePicker = ({ value, onChange, label, aspect }: { value: string; onChange: (url: string) => void; label: string; aspect?: string }) => {
    const { inputRef, cropSrc, setCropSrc, uploading, pick, crop } = useImageUpload(onChange);
    const [isMediaOpen, setIsMediaOpen] = useState(false);

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-400 tracking-widest">{label}</label>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        disabled={uploading}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-admin-primary hover:text-admin-primary transition-all shadow-sm disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-sm">upload</span>
                        Upload Mới
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsMediaOpen(true)}
                        disabled={uploading}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-admin-primary/10 text-admin-primary rounded-lg text-xs font-bold hover:bg-admin-primary/20 transition-all disabled:opacity-50"
                    >
                        <span className="material-symbols-outlined text-sm">perm_media</span>
                        Thư viện
                    </button>
                </div>
            </div>

            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={pick} />

            <div
                className={`relative rounded-2xl overflow-hidden border-2 border-dashed transition-all group cursor-pointer bg-slate-50 min-h-[120px] ${value ? 'border-transparent' : 'border-slate-200 hover:border-admin-primary/50'} ${uploading ? 'opacity-70 pointer-events-none' : ''} ${aspect || 'aspect-[4/3]'}`}
                onClick={() => !uploading && inputRef.current?.click()}
            >
                {uploading && (
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center z-10 gap-2">
                        <div className="size-8 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
                        <span className="text-[10px] font-bold text-admin-primary tracking-widest">ĐANG TẢI LÊN...</span>
                    </div>
                )}

                {value ? (
                    <>
                        <img src={value} className="w-full h-full object-cover" alt={label} />
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-white text-3xl">cloud_upload</span>
                            <span className="text-white text-[10px] font-bold tracking-widest text-center px-4">NHẤP ĐỂ TẢI ẢNH MỚI LÊN</span>
                        </div>
                    </>
                ) : (
                    <div className="size-full flex flex-col items-center justify-center text-slate-300 gap-3">
                        <div className="size-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-admin-primary/5 group-hover:text-admin-primary group-hover:border-admin-primary/20 transition-all">
                            <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                        </div>
                        <p className="text-[10px] font-bold tracking-widest text-slate-400 group-hover:text-admin-primary transition-colors">NHẤP ĐỂ CHỌN ẢNH</p>
                    </div>
                )}
            </div>

            {cropSrc && (
                <ImageCropper src={cropSrc} onCrop={crop} onCancel={() => setCropSrc(null)} title={`Chỉnh sửa - ${label}`} />
            )}

            <Modal isOpen={isMediaOpen} onClose={() => setIsMediaOpen(false)}>
                <MediaManager
                    allowSelection={true}
                    onSelect={(url) => {
                        onChange(url);
                        setIsMediaOpen(false);
                    }}
                    onClose={() => setIsMediaOpen(false)}
                />
            </Modal>
        </div>
    );
};
