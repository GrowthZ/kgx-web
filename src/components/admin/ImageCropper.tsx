import React, { useRef, useState } from 'react';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface ImageCropperProps {
    src: string;
    aspectRatio?: number;
    onCrop: (blob: Blob) => void;
    onCancel: () => void;
    title?: string;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
    src,
    aspectRatio,
    onCrop,
    onCancel,
    title = 'Cắt ảnh'
}) => {
    const cropperRef = useRef<ReactCropperElement>(null);

    const handleCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            cropper.getCroppedCanvas({
                maxWidth: 2000,
                maxHeight: 2000,
                fillColor: '#fff',
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high',
            }).toBlob((blob) => {
                if (blob) {
                    onCrop(blob);
                }
            }, 'image/jpeg', 0.9);
        }
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col max-h-[90vh] overflow-hidden border border-slate-200">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <span className="material-symbols-outlined text-admin-primary">crop</span>
                        {title}
                    </h3>
                    <button
                        onClick={onCancel}
                        className="size-10 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-400 transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div className="bg-slate-900 p-4 flex-1 overflow-hidden">
                    <Cropper
                        src={src}
                        style={{ height: '100%', width: '100%' }}
                        initialAspectRatio={aspectRatio}
                        aspectRatio={aspectRatio}
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                    />
                </div>

                <div className="p-6 border-t border-slate-100 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <p className="text-xs text-slate-400 font-medium hidden sm:block">
                            Sử dụng chuột hoặc cảm ứng để điều chỉnh vùng cắt
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onCancel}
                            className="px-6 py-2.5 text-slate-600 font-bold text-sm hover:bg-slate-50 rounded-xl transition-all"
                        >
                            Hủy bỏ
                        </button>
                        <button
                            onClick={handleCrop}
                            className="px-8 py-2.5 bg-admin-primary text-white font-bold text-sm rounded-xl shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all"
                        >
                            Hoàn tất & Lưu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCropper;
