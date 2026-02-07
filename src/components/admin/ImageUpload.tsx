import React, { useState } from 'react';

interface ImageUploadProps {
    onImageSelected: (file: File) => void;
    currentImage?: string;
    label?: string;
    aspectRatio?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onImageSelected,
    currentImage,
    label = 'Hình ảnh',
    aspectRatio = 'aspect-video',
}) => {
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processFile(file);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith('image/')) {
            processFile(file);
        }
    };

    const processFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        onImageSelected(file);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                {label}
            </label>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`relative ${aspectRatio} w-full border-2 border-dashed rounded-3xl overflow-hidden transition-all duration-300 group ${isDragging
                    ? 'border-admin-primary bg-admin-primary/5'
                    : 'border-slate-200 hover:border-admin-primary/50 bg-slate-50/50'
                    }`}
            >
                {preview ? (
                    <div className="relative w-full h-full">
                        <img
                            src={preview}
                            alt="Preview"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
                            <label className="cursor-pointer bg-white text-slate-800 px-6 py-2.5 rounded-2xl font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                Thay đổi ảnh
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </label>
                        </div>
                    </div>
                ) : (
                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer p-8">
                        <div className="size-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-admin-primary group-hover:text-white transition-all duration-300">
                            <span className="material-symbols-outlined text-3xl">cloud_upload</span>
                        </div>
                        <span className="text-sm font-bold text-slate-700 mb-1">Kéo thả hình ảnh hoặc click</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PNG, JPG, WEBP (tối đa 5MB)</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                )}
            </div>
        </div>
    );
};

export default ImageUpload;
