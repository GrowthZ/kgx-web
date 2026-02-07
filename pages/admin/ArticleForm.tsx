import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { articlesService, Article } from '../../src/services/articlesService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import MediaManager from '../../src/components/admin/MediaManager';
import Modal from '../../src/components/admin/Modal';
import RichTextEditor from '../../src/components/admin/RichTextEditor';

const schema = yup.object().shape({
    title: yup.string().required('Tiêu đề bài viết là bắt buộc'),
    slug: yup.string().required('Slug là bắt buộc'),
    excerpt: yup.string().required('Mô tả ngắn là bắt buộc').max(300, 'Không nên quá 300 ký tự'),
    content: yup.string().required('Nội dung bài viết là bắt buộc'),
    featuredImage: yup.string().required('Ảnh đại diện bài viết là bắt buộc'),
    category: yup.string().optional(),
    author: yup.string().optional(),
    published: yup.boolean().default(false),
});

const ArticleForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            featuredImage: '',
            category: 'Tin tức',
            author: 'Admin',
            published: false,
        }
    });

    const watchFeaturedImage = watch('featuredImage');
    const watchContent = watch('content') || '';

    useEffect(() => {
        if (id) {
            fetchArticle();
        }
    }, [id]);

    const fetchArticle = async () => {
        try {
            setLoading(true);
            const article = await articlesService.getById(id!);
            if (article) {
                Object.keys(article).forEach(key => {
                    if (key !== 'id') {
                        setValue(key as any, (article as any)[key]);
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching article:', error);
            toast.error('Lỗi khi tải thông tin bài viết');
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            if (id) {
                await articlesService.update(id, data);
                if (data.published) await articlesService.publishArticle(id, true);
                toast.success('Cập nhật bài viết thành công');
            } else {
                await articlesService.createArticle(data);
                toast.success('Tạo bài viết mới thành công');
            }
            navigate('/admin/articles');
        } catch (error) {
            console.error('Error saving article:', error);
            toast.error('Lỗi khi lưu bài viết');
        } finally {
            setLoading(false);
        }
    };

    const handleMediaSelect = (url: string) => {
        setValue('featuredImage', url);
        setIsMediaModalOpen(false);
    };

    return (
        <AdminLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fadeIn pb-20">
                {/* Fixed Action Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20 bg-admin-bg/80 backdrop-blur-md py-4 border-b border-slate-100">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-normal">
                            {id ? 'Chỉnh sửa Bài viết' : 'Soạn thảo Bài viết mới'}
                        </h1>
                        <p className="text-xs text-slate-400 font-bold  tracking-widest mt-1">
                            {id ? `Đang chỉnh sửa bài viết ID: ${id}` : 'Xây dựng nội dung chất lượng cho KGX'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => navigate('/admin/articles')}
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
                            <span className="material-symbols-outlined text-lg">{id ? 'save' : 'publish'}</span>
                            {id ? 'Lưu bài viết' : 'Đăng bài viết'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content (Editor) */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400  tracking-widest ml-1">Tiêu đề bài viết</label>
                                <input
                                    {...register('title')}
                                    type="text"
                                    placeholder="VD: Xu hướng thiết kế nội thất 2024"
                                    className={`w-full px-5 py-4 bg-slate-50 rounded-2xl border-2 transition-all text-xl font-bold ${errors.title ? 'border-rose-100 focus:border-rose-400' : 'border-transparent focus:border-admin-primary/20'}`}
                                />
                                {errors.title && <p className="text-xs text-rose-500 font-bold ml-1">{errors.title.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400  tracking-widest ml-1">Slug (URL)</label>
                                <input
                                    {...register('slug')}
                                    type="text"
                                    placeholder="xu-huong-thiet-ke-2024"
                                    className="w-full px-5 py-3 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium text-slate-600 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400  tracking-widest ml-1">Mô tả ngắn (Excerpt)</label>
                                <textarea
                                    {...register('excerpt')}
                                    rows={3}
                                    placeholder="Tóm tắt ngắn gọn nội dung bài viết..."
                                    className={`w-full px-5 py-4 bg-slate-50 rounded-2xl border-2 transition-all font-medium resize-none ${errors.excerpt ? 'border-rose-100 focus:border-rose-400' : 'border-transparent focus:border-admin-primary/20'}`}
                                />
                                {errors.excerpt && <p className="text-xs text-rose-500 font-bold ml-1">{errors.excerpt.message}</p>}
                            </div>
                        </div>

                        {/* Editor Card */}
                        <div className="bg-white rounded-[2rem] p-4 sm:p-8 border border-slate-100 shadow-sm">
                            <RichTextEditor
                                label="Nội dung chi tiết"
                                value={watchContent}
                                onChange={(val) => setValue('content', val)}
                            />
                            {errors.content && <p className="text-xs text-rose-500 font-bold mt-2 ml-1">{errors.content.message}</p>}
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-8">
                        {/* Publish Status */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-admin-primary">settings</span>
                                Xuất bản
                            </h3>

                            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="size-8 bg-white rounded-lg flex items-center justify-center shadow-sm text-admin-primary">
                                        <span className="material-symbols-outlined text-lg">visibility</span>
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">Công khai</span>
                                </div>
                                <div className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        {...register('published')}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-admin-primary"></div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-2">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-400  tracking-widest ml-1">Danh mục</label>
                                    <select
                                        {...register('category')}
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-admin-primary/20 font-bold text-sm"
                                    >
                                        <option value="Tin tức">Tin tức</option>
                                        <option value="Kiến thức">Kiến thức</option>
                                        <option value="Xu hướng">Xu hướng</option>
                                        <option value="Dự án">Dự án</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-400  tracking-widest ml-1">Tác giả</label>
                                    <input
                                        {...register('author')}
                                        type="text"
                                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-admin-primary/20 font-bold text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Featured Image Card */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-admin-primary">image</span>
                                Ảnh đại diện
                            </h3>

                            <div
                                className={`relative aspect-video rounded-2xl overflow-hidden border-2 border-dashed transition-all group cursor-pointer ${watchFeaturedImage ? 'border-transparent' : 'border-slate-200 hover:border-admin-primary/50'}`}
                                onClick={() => setIsMediaModalOpen(true)}
                            >
                                {watchFeaturedImage ? (
                                    <>
                                        <img src={watchFeaturedImage} className="w-full h-full object-cover" alt="Featured" />
                                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center backdrop-blur-[2px]">
                                            <span className="material-symbols-outlined text-white text-2xl mb-1">photo_library</span>
                                            <span className="text-white text-[10px] font-bold  tracking-widest">Thay đổi ảnh</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="size-full flex flex-col items-center justify-center text-slate-300 gap-2">
                                        <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                                        <p className="text-[10px] font-bold  tracking-widest text-slate-400">Chọn ảnh tiêu đề</p>
                                    </div>
                                )}
                            </div>
                            {errors.featuredImage && <p className="text-xs text-rose-500 font-bold text-center mt-2">{errors.featuredImage.message}</p>}
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

export default ArticleForm;
