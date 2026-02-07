import React, { useState } from 'react';
import Modal from './Modal';
import MediaManager from './MediaManager';

interface MultiImageUploadProps {
    images: string[];
    onChange: (images: string[]) => void;
    label?: string;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
    images = [],
    onChange,
    label = 'Thư viện ảnh'
}) => {
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

    const handleAddImage = (url: string) => {
        if (!images.includes(url)) {
            onChange([...images, url]);
        }
        setIsMediaModalOpen(false);
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
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
                    {label} ({images.length})
                </label>
                <button
                    type="button"
                    onClick={() => setIsMediaModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-1.5 bg-admin-primary/10 text-admin-primary rounded-xl text-xs font-bold hover:bg-admin-primary hover:text-white transition-all shadow-sm"
                >
                    <span className="material-symbols-outlined text-base">add_photo_alternate</span>
                    Thêm ảnh từ thư viện
                </button>
            </div>

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

                {/* Empty State / Add Placeholder */}
                <button
                    type="button"
                    onClick={() => setIsMediaModalOpen(true)}
                    className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 hover:border-admin-primary/40 hover:text-admin-primary hover:bg-admin-primary/5 transition-all group"
                >
                    <span className="material-symbols-outlined text-3xl mb-1 group-hover:scale-110 transition-transform">add_circle</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Thêm ảnh</span>
                </button>
            </div>

            <Modal isOpen={isMediaModalOpen} onClose={() => setIsMediaModalOpen(false)}>
                <MediaManager
                    onSelect={handleAddImage}
                    onClose={() => setIsMediaModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default MultiImageUpload;
