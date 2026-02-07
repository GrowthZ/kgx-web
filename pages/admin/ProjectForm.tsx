import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { projectsService, Project } from '../../src/services/projectsService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import MediaManager from '../../src/components/admin/MediaManager';
import Modal from '../../src/components/admin/Modal';
import MultiImageUpload from '../../src/components/admin/MultiImageUpload';
import RichTextEditor from '../../src/components/admin/RichTextEditor';

const schema = yup.object().shape({
    title: yup.string().required('Tên dự án là bắt buộc'),
    slug: yup.string().required('Slug là bắt buộc'),
    category: yup.string().required('Danh mục là bắt buộc'),
    location: yup.string().required('Địa điểm là bắt buộc'),
    client: yup.string().required('Tên khách hàng là bắt buộc'),
    year: yup.string().required('Năm thực hiện là bắt buộc'),
    area: yup.string().required('Diện tích/Quy mô là bắt buộc'),
    description: yup.string().optional(),
    image: yup.string().required('Ảnh đại diện là bắt buộc'),
    images: yup.array().of(yup.string()).optional(),
    filterCategory: yup.string().optional(),
    displayCategory: yup.string().optional(),
});

const ProjectForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
    const [mediaTarget, setMediaTarget] = useState<'image' | null>(null);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            slug: '',
            category: 'thiet-ke',
            location: '',
            client: '',
            year: new Date().getFullYear().toString(),
            area: '',
            description: '',
            image: '',
            images: [],
            filterCategory: 'thiet-ke',
            displayCategory: 'Thiết kế',
        }
    });

    const watchImage = watch('image');
    const watchImages = watch('images') || [];
    const watchDescription = watch('description') || '';

    useEffect(() => {
        if (id) {
            fetchProject();
        }
    }, [id]);

    const fetchProject = async () => {
        try {
            setLoading(true);
            const project = await projectsService.getById(id!);
            if (project) {
                Object.keys(project).forEach(key => {
                    if (key !== 'id') {
                        setValue(key as any, (project as any)[key]);
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching project:', error);
            toast.error('Lỗi khi tải thông tin dự án');
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            // Ensure filterCategory and displayCategory are set if not manually touched
            if (!data.filterCategory) data.filterCategory = data.category;
            if (!data.displayCategory) {
                data.displayCategory = data.category === 'thiet-ke' ? 'Thiết kế' :
                    data.category === 'thi-cong' ? 'Thi công' : 'Cảnh quan';
            }

            if (id) {
                await projectsService.update(id, data);
                toast.success('Cập nhật dự án thành công');
            } else {
                await projectsService.create(data);
                toast.success('Tạo dự án mới thành công');
            }
            navigate('/admin/projects');
        } catch (error) {
            console.error('Error saving project:', error);
            toast.error('Lỗi khi lưu dự án');
        } finally {
            setLoading(false);
        }
    };

    const handleMediaSelect = (url: string) => {
        if (mediaTarget === 'image') {
            setValue('image', url);
        }
        setIsMediaModalOpen(false);
        setMediaTarget(null);
    };

    return (
        <AdminLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fadeIn pb-20">
                {/* Fixed Action Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20 bg-admin-bg/80 backdrop-blur-md py-4 border-b border-slate-100">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-tight">
                            {id ? 'Chỉnh sửa Dự án' : 'Thêm Dự án mới'}
                        </h1>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                            {id ? `ID: ${id}` : 'Điền đầy đủ thông tin bên dưới'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/projects')}
                            className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all"
                        >
                            Hủy bỏ
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-2.5 bg-admin-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-2"
                        >
                            {loading && <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                            <span className="material-symbols-outlined text-lg">{id ? 'save' : 'add_circle'}</span>
                            {id ? 'Lưu thay đổi' : 'Tạo dự án'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Basic Info Card */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-admin-primary">info</span>
                                Thông tin cơ bản
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Tên dự án</label>
                                    <input
                                        {...register('title')}
                                        type="text"
                                        placeholder="VD: Biệt thự vườn hiện đại"
                                        className={`w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-2 transition-all font-medium ${errors.title ? 'border-rose-100 focus:border-rose-400' : 'border-transparent focus:border-admin-primary/20'}`}
                                    />
                                    {errors.title && <p className="text-xs text-rose-500 font-bold ml-1">{errors.title.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Slug (URL)</label>
                                    <input
                                        {...register('slug')}
                                        type="text"
                                        placeholder="biet-thu-vuon-hien-dai"
                                        className={`w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-2 transition-all font-medium ${errors.slug ? 'border-rose-100 focus:border-rose-400' : 'border-transparent focus:border-admin-primary/20'}`}
                                    />
                                    {errors.slug && <p className="text-xs text-rose-500 font-bold ml-1">{errors.slug.message}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Danh mục</label>
                                    <select
                                        {...register('category')}
                                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                                    >
                                        <option value="thiet-ke">Thiết kế</option>
                                        <option value="thi-cong">Thi công</option>
                                        <option value="canh-quan">Cảnh quan</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Năm</label>
                                    <input
                                        {...register('year')}
                                        type="text"
                                        placeholder="2024"
                                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Diện tích / Quy mô</label>
                                    <input
                                        {...register('area')}
                                        type="text"
                                        placeholder="500m2 / 2 tầng"
                                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Khách hàng</label>
                                    <input
                                        {...register('client')}
                                        type="text"
                                        placeholder="Anh Trần Đình A"
                                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Địa điểm</label>
                                    <input
                                        {...register('location')}
                                        type="text"
                                        placeholder="Quận 9, TP. Thủ Đức"
                                        className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Rich Text Editor */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <RichTextEditor
                                label="Mô tả dự án"
                                value={watchDescription}
                                onChange={(val) => setValue('description', val)}
                            />
                        </div>

                        {/* Gallery Section */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                            <MultiImageUpload
                                label="Thư viện ảnh dự án"
                                images={watchImages}
                                onChange={(imgs) => setValue('images', imgs)}
                            />
                        </div>
                    </div>

                    {/* Sidebar Form Content */}
                    <div className="space-y-8">
                        {/* Featured Image Card */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-admin-primary">image</span>
                                Ảnh đại diện
                            </h3>

                            <div
                                className={`relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-dashed transition-all group cursor-pointer ${watchImage ? 'border-transparent' : 'border-slate-200 hover:border-admin-primary/50'}`}
                                onClick={() => { setMediaTarget('image'); setIsMediaModalOpen(true); }}
                            >
                                {watchImage ? (
                                    <>
                                        <img src={watchImage} className="w-full h-full object-cover" alt="Preview" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center backdrop-blur-[2px]">
                                            <span className="material-symbols-outlined text-white text-4xl mb-2">photo_library</span>
                                            <span className="text-white text-xs font-bold uppercase tracking-widest">Thay đổi ảnh</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="size-full flex flex-col items-center justify-center text-slate-300 gap-3">
                                        <div className="size-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner">
                                            <span className="material-symbols-outlined text-4xl">add_photo_alternate</span>
                                        </div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Chọn ảnh đại diện</p>
                                    </div>
                                )}
                            </div>
                            {errors.image && <p className="text-xs text-rose-500 font-bold text-center mt-2">{errors.image.message}</p>}
                            <p className="text-[10px] text-slate-400 font-medium text-center italic">Đề xuất tỉ lệ 4:3 hoặc 16:9 cho ảnh đại diện</p>
                        </div>

                        {/* Additional Settings */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-admin-primary">settings</span>
                                Cài đặt hiển thị
                            </h3>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nhãn danh mục</label>
                                <input
                                    {...register('displayCategory')}
                                    type="text"
                                    placeholder="Thiết kế kiến trúc"
                                    className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                                />
                                <p className="text-[10px] text-slate-400 ml-1">VD: Thiết kế biệt thự, Thi công cảnh quan...</p>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-admin-primary">
                                            <span className="material-symbols-outlined text-lg">star</span>
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">Dự án tiêu biểu</span>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-admin-primary"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <Modal isOpen={isMediaModalOpen} onClose={() => setIsMediaModalOpen(false)}>
                <MediaManager
                    onSelect={handleMediaSelect}
                    onClose={() => setIsMediaModalOpen(false)}
                />
            </Modal>
        </AdminLayout>
    );
};

export default ProjectForm;
