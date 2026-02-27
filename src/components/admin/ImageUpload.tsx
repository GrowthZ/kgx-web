import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import ImageCropper from './ImageCropper';
import { uploadToR2 } from '../../lib/r2Service';

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

    return (
        <>
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={pick} />
            <div
                className={`relative rounded-2xl overflow-hidden border-2 border-dashed transition-all group cursor-pointer ${value ? 'border-transparent' : 'border-slate-200 hover:border-admin-primary/50'} ${uploading ? 'opacity-60 pointer-events-none' : ''} ${aspect || 'aspect-[4/3]'}`}
                onClick={() => inputRef.current?.click()}
            >
                {uploading && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                        <div className="size-8 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
                    </div>
                )}
                {value ? (
                    <>
                        <img src={value} className="w-full h-full object-cover" alt={label} />
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-white text-2xl mb-1">add_photo_alternate</span>
                            <span className="text-white text-[10px] font-bold tracking-widest">Thay đổi ảnh</span>
                        </div>
                    </>
                ) : (
                    <div className="size-full flex flex-col items-center justify-center text-slate-300 gap-2">
                        <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                        <p className="text-xs font-bold tracking-widest text-slate-400">{label}</p>
                    </div>
                )}
            </div>
            {cropSrc && (
                <ImageCropper src={cropSrc} onCrop={crop} onCancel={() => setCropSrc(null)} title={`Chỉnh sửa - ${label}`} />
            )}
        </>
    );
};
