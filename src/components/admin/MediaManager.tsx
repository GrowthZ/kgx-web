import React, { useState, useEffect } from 'react';
import { listStorageFiles, StorageFile, StorageFolder, uploadImage, deleteImage } from '../../lib/firebaseService';
import toast from 'react-hot-toast';
import ImageCropper from './ImageCropper';
import { uploadToCloudinary } from '../../lib/cloudinaryService';

interface MediaManagerProps {
    onSelect?: (url: string) => void;
    onClose?: () => void;
    allowSelection?: boolean;
}

const MediaManager: React.FC<MediaManagerProps> = ({
    onSelect,
    onClose,
    allowSelection = true
}) => {
    const [path, setPath] = useState('');
    const [files, setFiles] = useState<StorageFile[]>([]);
    const [folders, setFolders] = useState<StorageFolder[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedFile, setSelectedFile] = useState<StorageFile | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [cropSource, setCropSource] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'all' | 'images' | 'others'>('all');

    useEffect(() => {
        loadMedia();
    }, [path]);

    const loadMedia = async () => {
        try {
            setLoading(true);
            const data = await listStorageFiles(path);
            setFolders(data.folders);
            setFiles(data.files);
        } catch (error) {
            console.error('Error loading media:', error);
            toast.error('Lỗi khi tải thư viện media');
        } finally {
            setLoading(false);
        }
    };

    const handleFolderClick = (folderPath: string) => {
        setPath(folderPath);
        setSelectedFile(null);
    };

    const handleBack = () => {
        const parts = path.split('/').filter(p => p !== '');
        parts.pop();
        setPath(parts.join('/'));
        setSelectedFile(null);
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setCropSource(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            // Upload directly for non-images
            await doUpload(file);
        }
    };

    const doUpload = async (fileBlob: Blob | File) => {
        try {
            setIsUploading(true);

            // Upload to Cloudinary instead of Firebase
            const url = await uploadToCloudinary(fileBlob);

            toast.success('Upload lên Cloudinary thành công');

            // If used in selection mode, auto-select the new upload
            if (onSelect) {
                onSelect(url);
            } else {
                // If not in selection mode, we might want to refresh, 
                // but Cloudinary doesn't show up in the Firebase list.
                // For now, let's just refresh the current path list.
                loadMedia();
            }
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('Lỗi khi upload lên Cloudinary');
        } finally {
            setIsUploading(false);
            setCropSource(null);
        }
    };

    const handleDelete = async (file: StorageFile) => {
        if (!window.confirm(`Bạn có chắc muốn xóa file "${file.name}"?`)) return;

        try {
            await deleteImage(file.url);
            toast.success('Đã xóa file');
            loadMedia();
            if (selectedFile?.path === file.path) setSelectedFile(null);
        } catch (error) {
            console.error('Delete error:', error);
            toast.error('Lỗi khi xóa file');
        }
    };

    const filteredFiles = files.filter(file => {
        if (activeTab === 'images') return file.type.startsWith('image/');
        if (activeTab === 'others') return !file.type.startsWith('image/');
        return true;
    });

    return (
        <div className="flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
            {/* Header */}
            <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="material-symbols-outlined text-admin-primary">perm_media</span>
                        Thư viện Media
                    </h2>
                    <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>
                    <div className="flex bg-slate-50 p-1 rounded-xl">
                        {(['all', 'images', 'others'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === tab
                                    ? 'bg-white text-admin-primary shadow-sm'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                {tab === 'all' ? 'Tất cả' : tab === 'images' ? 'Hình ảnh' : 'Tệp khác'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <label className="cursor-pointer bg-admin-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 flex items-center gap-2 transition-all">
                        <span className="material-symbols-outlined text-lg">upload</span>
                        Upload
                        <input type="file" onChange={handleUpload} className="hidden" />
                    </label>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="size-10 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-400 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Breadcrumbs & Actions */}
            <div className="px-8 py-3 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
                    <button
                        onClick={() => setPath('')}
                        className={`text-xs font-bold px-2 py-1 rounded-md hover:bg-slate-100 ${path === '' ? 'text-admin-primary' : 'text-slate-500'}`}
                    >
                        Root
                    </button>
                    {path.split('/').filter(Boolean).map((part, idx, arr) => (
                        <React.Fragment key={idx}>
                            <span className="text-slate-300 material-symbols-outlined text-sm">chevron_right</span>
                            <button
                                onClick={() => handleFolderClick(arr.slice(0, idx + 1).join('/'))}
                                className={`text-xs font-bold px-2 py-1 rounded-md hover:bg-slate-100 whitespace-nowrap ${idx === arr.length - 1 ? 'text-admin-primary' : 'text-slate-500'}`}
                            >
                                {part}
                            </button>
                        </React.Fragment>
                    ))}
                </div>
                {path && (
                    <button onClick={handleBack} className="text-xs font-bold text-slate-400 hover:text-admin-primary flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Quay lại
                    </button>
                )}
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-8 bg-slate-50/20">
                    {loading ? (
                        <div className="h-full flex flex-col items-center justify-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-admin-primary"></div>
                            <p className="mt-4 text-slate-400 text-sm font-medium">Đang tải media...</p>
                        </div>
                    ) : folders.length === 0 && files.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-5xl mb-4">folder_open</span>
                            <p className="text-sm font-bold  tracking-widest">Thư mục trống</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                            {/* Folders */}
                            {folders.map(folder => (
                                <button
                                    key={folder.path}
                                    onClick={() => handleFolderClick(folder.path)}
                                    className="flex flex-col items-center group gap-2"
                                >
                                    <div className="size-full aspect-square bg-white rounded-2xl border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-admin-primary/50 group-hover:text-admin-primary transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">folder</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 truncate w-full text-center px-1">
                                        {folder.name}
                                    </span>
                                </button>
                            ))}

                            {/* Files */}
                            {filteredFiles.map(file => {
                                const isSelected = selectedFile?.path === file.path;
                                const isImage = file.type.startsWith('image/');
                                return (
                                    <div
                                        key={file.path}
                                        onClick={() => setSelectedFile(file)}
                                        onDoubleClick={() => allowSelection && onSelect?.(file.url)}
                                        className={`flex flex-col items-center group gap-2 cursor-pointer transition-all ${isSelected ? 'scale-[1.05]' : ''}`}
                                    >
                                        <div className={`relative size-full aspect-square rounded-2xl overflow-hidden border-2 transition-all shadow-sm ${isSelected ? 'border-admin-primary ring-4 ring-admin-primary/10' : 'border-white hover:border-slate-200'
                                            }`}>
                                            {isImage ? (
                                                <img src={file.url} className="w-full h-full object-cover" alt={file.name} loading="lazy" />
                                            ) : (
                                                <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-300">
                                                    <span className="material-symbols-outlined text-3xl">description</span>
                                                </div>
                                            )}
                                            {isSelected && (
                                                <div className="absolute top-2 right-2 size-6 bg-admin-primary text-white rounded-full flex items-center justify-center shadow-md">
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                            )}
                                        </div>
                                        <span className={`text-[10px] font-bold truncate w-full text-center px-1  tracking-normaler ${isSelected ? 'text-admin-primary' : 'text-slate-500'}`}>
                                            {file.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Sidebar Info */}
                {selectedFile && (
                    <div className="w-72 border-l border-slate-100 bg-white p-6 overflow-y-auto hidden lg:block animate-in slide-in-from-right duration-300">
                        <h3 className="text-xs font-extrabold text-slate-400  tracking-widest mb-6">Chi tiết Tệp tin</h3>

                        <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 mb-6 bg-slate-50">
                            {selectedFile.type.startsWith('image/') ? (
                                <img src={selectedFile.url} className="w-full h-full object-contain" alt="Preview" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <span className="material-symbols-outlined text-5xl">draft</span>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Tên tệp</label>
                                <p className="text-sm font-bold text-slate-800 break-all">{selectedFile.name}</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Loại</label>
                                <p className="text-xs text-slate-600">{selectedFile.type}</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Dung lượng</label>
                                <p className="text-xs text-slate-600">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Cập nhật lần cuối</label>
                                <p className="text-xs text-slate-600">{new Date(selectedFile.updatedAt).toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col gap-3">
                            {allowSelection && (
                                <button
                                    onClick={() => onSelect?.(selectedFile.url)}
                                    className="w-full py-2.5 bg-admin-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all"
                                >
                                    Chọn tệp này
                                </button>
                            )}
                            <button
                                onClick={() => handleDelete(selectedFile)}
                                className="w-full py-2.5 border border-rose-100 text-rose-600 hover:bg-rose-50 rounded-xl text-sm font-bold mb-2 transition-all"
                            >
                                Xóa tệp vĩnh viễn
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Selection Footer (Mobile/Selection mode) */}
            {selectedFile && allowSelection && (
                <div className="lg:hidden p-4 border-t border-slate-100 bg-white">
                    <button
                        onClick={() => onSelect?.(selectedFile.url)}
                        className="w-full py-3 bg-admin-primary text-white rounded-xl text-sm font-bold"
                    >
                        Chọn: {selectedFile.name}
                    </button>
                </div>
            )}

            {/* Cropper Modal */}
            {cropSource && (
                <ImageCropper
                    src={cropSource}
                    onCrop={doUpload}
                    onCancel={() => setCropSource(null)}
                    title="Chỉnh sửa ảnh trước khi tải lên"
                />
            )}

            {/* Upload Overlay */}
            {isUploading && (
                <div className="fixed inset-0 z-[120] bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-admin-primary"></div>
                    <p className="mt-4 font-bold text-slate-700">Đang tải tệp tin lên...</p>
                </div>
            )}
        </div>
    );
};

export default MediaManager;
