import React, { useState, useEffect } from 'react';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { projectTypesService, ProjectType } from '../../src/services/projectTypesService';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../src/components/admin/ConfirmDialog';
import Modal from '../../src/components/admin/Modal';

const AdminProjectTypesPage: React.FC = () => {
    const [projectTypes, setProjectTypes] = useState<ProjectType[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingType, setEditingType] = useState<ProjectType | null>(null);
    const [formData, setFormData] = useState({ name: '', slug: '', order: 0 });
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        fetchProjectTypes();
    }, []);

    const fetchProjectTypes = async () => {
        try {
            setLoading(true);
            const data = await projectTypesService.getAllProjectTypes();
            setProjectTypes(data);
        } catch (error) {
            console.error('Error fetching project types:', error);
            toast.error('Lỗi khi tải danh sách loại dự án');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenModal = (type?: ProjectType) => {
        if (type) {
            setEditingType(type);
            setFormData({ name: type.name, slug: type.slug, order: type.order || 0 });
        } else {
            setEditingType(null);
            setFormData({ name: '', slug: '', order: projectTypes.length });
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingType(null);
        setFormData({ name: '', slug: '', order: 0 });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim()) {
            toast.error('Vui lòng nhập tên loại dự án');
            return;
        }

        setIsSubmitting(true);
        try {
            if (editingType && editingType.id) {
                await projectTypesService.updateProjectType(editingType.id, formData);
                toast.success('Cập nhật loại dự án thành công');
            } else {
                await projectTypesService.createProjectType(formData);
                toast.success('Thêm loại dự án thành công');
            }
            handleCloseModal();
            fetchProjectTypes();
        } catch (error) {
            console.error('Error saving project type:', error);
            toast.error('Lỗi khi lưu loại dự án');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await projectTypesService.deleteProjectType(deleteId);
            toast.success('Đã xóa loại dự án');
            setProjectTypes(projectTypes.filter(p => p.id !== deleteId));
        } catch (error) {
            console.error('Error deleting project type:', error);
            toast.error('Lỗi khi xóa loại dự án');
        } finally {
            setDeleteId(null);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-8 animate-fadeIn">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-normal">Quản lý Loại Dự Án</h1>
                        <p className="text-slate-500 font-medium mt-1">Quản lý danh mục/tab phân loại của dự án (VD: Biệt thự, Resort...)</p>
                    </div>
                    <button
                        onClick={() => handleOpenModal()}
                        className="flex items-center justify-center gap-2 bg-admin-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        Thêm mới
                    </button>
                </div>

                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                            <div className="size-12 border-4 border-slate-100 border-t-admin-primary rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-bold text-sm mt-4 tracking-widest">Đang tải...</p>
                        </div>
                    ) : projectTypes.length === 0 ? (
                        <div className="py-20 flex flex-col items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-5xl mb-4">category</span>
                            <p className="font-bold tracking-widest text-sm">Chưa có loại dự án nào</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 tracking-widest">Tên loại dự án</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 tracking-widest">Slug</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400 tracking-widest text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {projectTypes.map((type) => (
                                        <tr key={type.id} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <p className="font-bold text-slate-800">{type.name}</p>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className="text-sm font-medium text-slate-500">{type.slug}</span>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button
                                                        onClick={() => handleOpenModal(type)}
                                                        className="size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-admin-primary hover:text-white transition-all shadow-sm"
                                                        title="Sửa"
                                                    >
                                                        <span className="material-symbols-outlined text-lg font-bold">edit</span>
                                                    </button>
                                                    <button
                                                        onClick={() => setDeleteId(type.id!)}
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
                </div>
            </div>

            {/* Modal Update / Add */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} maxWidth="max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col h-full bg-white">
                    <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
                        <h2 className="text-lg font-bold text-slate-800">
                            {editingType ? 'Sửa Loại Dự Án' : 'Thêm Loại Dự Án Mới'}
                        </h2>
                        <button type="button" onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 tracking-widest ml-1">Tên hiển thị</label>
                            <input
                                autoFocus
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                type="text"
                                placeholder="VD: Biệt thự, Resort..."
                                className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 tracking-widest ml-1">Slug (Tùy chọn)</label>
                            <input
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                type="text"
                                placeholder="Để trống tự động tạo"
                                className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium"
                            />
                        </div>
                    </div>
                    <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 mt-auto">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="px-6 py-2.5 rounded-xl font-bold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2.5 rounded-xl font-bold bg-admin-primary text-white shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
                        >
                            {isSubmitting && <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                            Lưu 
                        </button>
                    </div>
                </form>
            </Modal>

            <ConfirmDialog
                isOpen={!!deleteId}
                title="Xóa loại dự án?"
                message="Hành động này không thể hoàn tác. Các dự án đang gán loại này có thể bị mất bộ lọc tương ứng trên trang chủ dự án (nếu dựa theo tên này)."
                onConfirm={handleDelete}
                onCancel={() => setDeleteId(null)}
                type="danger"
            />
        </AdminLayout>
    );
};

export default AdminProjectTypesPage;
