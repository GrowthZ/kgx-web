import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { articlesService, Article } from '../../src/services/articlesService';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../src/components/admin/ConfirmDialog';

const AdminArticlesPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const data = await articlesService.getAllArticles();
            setArticles(data);
        } catch (error) {
            console.error('Error fetching articles:', error);
            toast.error('Lỗi khi tải danh sách bài viết');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await articlesService.deleteArticle(deleteId);
            toast.success('Đã xóa bài viết thành công');
            setArticles(articles.filter(a => a.id !== deleteId));
        } catch (error) {
            console.error('Error deleting article:', error);
            toast.error('Lỗi khi xóa bài viết');
        } finally {
            setDeleteId(null);
        }
    };

    const togglePublish = async (article: Article) => {
        try {
            const newStatus = !article.published;
            await articlesService.publishArticle(article.id!, newStatus);
            setArticles(articles.map(a => a.id === article.id ? { ...a, published: newStatus } : a));
            toast.success(newStatus ? 'Đã xuất bản bài viết' : 'Đã gỡ bài viết');
        } catch (error) {
            console.error('Error toggling publish status:', error);
            toast.error('Lỗi khi thay đổi trạng thái');
        }
    };

    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="space-y-8 animate-fadeIn">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-800 tracking-tight">Quản lý Bài viết</h1>
                        <p className="text-slate-500 font-medium mt-1">Tin tức, kiến thức và xu hướng thiết kế</p>
                    </div>
                    <Link
                        to="/admin/articles/new"
                        className="flex items-center justify-center gap-2 bg-admin-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
                    >
                        <span className="material-symbols-outlined">edit_note</span>
                        Viết bài mới
                    </Link>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="relative group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-admin-primary transition-colors">search</span>
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tiêu đề bài viết..."
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 text-sm font-medium transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Content Table */}
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                            <div className="size-12 border-4 border-slate-100 border-t-admin-primary rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải bài viết...</p>
                        </div>
                    ) : filteredArticles.length === 0 ? (
                        <div className="py-20 flex flex-col items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-6xl mb-4">article</span>
                            <p className="font-bold uppercase tracking-widest text-sm">Chưa có bài viết nào</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Tên bài viết</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Trạng thái</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Ngày đăng</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {filteredArticles.map((article) => (
                                        <tr key={article.id} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-16 rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex-shrink-0">
                                                        <img
                                                            src={article.featuredImage}
                                                            alt={article.title}
                                                            className="size-full object-cover transition-transform group-hover:scale-110 duration-500"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0 max-w-md">
                                                        <p className="font-bold text-slate-800 group-hover:text-admin-primary transition-colors truncate">{article.title}</p>
                                                        <p className="text-xs text-slate-400 font-medium truncate">{article.excerpt}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <button
                                                    onClick={() => togglePublish(article)}
                                                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${article.published
                                                            ? 'bg-green-100 text-green-600 hover:bg-green-200'
                                                            : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                                                        }`}
                                                >
                                                    {article.published ? 'Công khai' : 'Bản nháp'}
                                                </button>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className="text-xs font-bold text-slate-500">
                                                    {article.publishedAt ? new Date(article.publishedAt.seconds * 1000).toLocaleDateString('vi-VN') : '---'}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2 text-right">
                                                    <Link
                                                        to={`/admin/articles/edit/${article.id}`}
                                                        className="size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-admin-primary hover:text-white transition-all shadow-sm"
                                                        title="Sửa"
                                                    >
                                                        <span className="material-symbols-outlined text-lg font-bold">edit</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => setDeleteId(article.id!)}
                                                        className="size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
                                                        title="Xóa"
                                                    >
                                                        <span className="material-symbols-outlined text-lg font-bold">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="px-8 py-5 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            Tổng cộng {filteredArticles.length} bài viết
                        </p>
                    </div>
                </div>
            </div>

            <ConfirmDialog
                isOpen={!!deleteId}
                title="Xóa bài viết?"
                message="Bạn sắp xóa hoàn toàn bài viết này. Hành động này không thể hoàn tác."
                onConfirm={handleDelete}
                onCancel={() => setDeleteId(null)}
                type="danger"
            />
        </AdminLayout>
    );
};

export default AdminArticlesPage;
