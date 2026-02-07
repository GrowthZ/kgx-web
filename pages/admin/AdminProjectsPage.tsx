import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { projectsService, Project } from '../../src/services/projectsService';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../src/components/admin/ConfirmDialog';

const AdminProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        fetchProjects();
    }, [selectedCategory]);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const data = await projectsService.getAllProjects(selectedCategory === 'all' ? undefined : selectedCategory);
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            toast.error('Lỗi khi tải danh sách dự án');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await projectsService.deleteProject(deleteId);
            toast.success('Đã xóa dự án thành công');
            setProjects(projects.filter(p => p.id !== deleteId));
        } catch (error) {
            console.error('Error deleting project:', error);
            toast.error('Lỗi khi xóa dự án');
        } finally {
            setDeleteId(null);
        }
    };

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [
        { id: 'all', name: 'Tất cả dự án' },
        { id: 'thiet-ke', name: 'Thiết kế' },
        { id: 'thi-cong', name: 'Thi công' },
        { id: 'canh-quan', name: 'Cảnh quan' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-8 animate-fadeIn">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-normal">Quản lý Dự án</h1>
                        <p className="text-slate-500 font-medium mt-1">Quản lý các dự án thiết kế và thi công của KGX</p>
                    </div>
                    <Link
                        to="/admin/projects/new"
                        className="flex items-center justify-center gap-2 bg-admin-primary text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
                    >
                        <span className="material-symbols-outlined">add_circle</span>
                        Thêm dự án mới
                    </Link>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-admin-primary transition-colors">search</span>
                        <input
                            type="text"
                            placeholder="Tìm kiếm theo tên dự án, địa điểm..."
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 text-sm font-medium transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat.id
                                        ? 'bg-admin-primary text-white shadow-md'
                                        : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Table */}
                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                            <div className="size-12 border-4 border-slate-100 border-t-admin-primary rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-bold text-sm mt-4  tracking-widest">Đang tải dự án...</p>
                        </div>
                    ) : filteredProjects.length === 0 ? (
                        <div className="py-20 flex flex-col items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-5xl mb-4">inventory_2</span>
                            <p className="font-bold  tracking-widest text-sm">Không tìm thấy dự án nào</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Dự án</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Phân loại</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Địa điểm / Năm</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {filteredProjects.map((project) => (
                                        <tr key={project.id} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex-shrink-0">
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="size-full object-cover transition-transform group-hover:scale-110 duration-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800 group-hover:text-admin-primary transition-colors">{project.title}</p>
                                                        <p className="text-xs text-slate-400 font-medium">{project.client || 'Khách hàng ẩn danh'}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black  tracking-widest ${project.category === 'thiet-ke' ? 'bg-blue-100 text-blue-600' :
                                                        project.category === 'thi-cong' ? 'bg-orange-100 text-orange-600' :
                                                            'bg-admin-primary/10 text-admin-primary'
                                                    }`}>
                                                    {project.displayCategory || project.category}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold text-slate-700">{project.location}</span>
                                                    <span className="text-xs font-medium text-slate-400">{project.year || 'N/A'}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        to={`/admin/projects/edit/${project.id}`}
                                                        className="size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-admin-primary hover:text-white transition-all shadow-sm"
                                                        title="Sửa"
                                                    >
                                                        <span className="material-symbols-outlined text-lg font-bold">edit</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => setDeleteId(project.id!)}
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

                    {/* Footer / Pagination Placeholder */}
                    <div className="px-8 py-5 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between">
                        <p className="text-[10px] font-black text-slate-400  tracking-widest">
                            Hiển thị {filteredProjects.length} dự án
                        </p>
                    </div>
                </div>
            </div>

            <ConfirmDialog
                isOpen={!!deleteId}
                title="Xóa dự án?"
                message="Hành động này không thể hoàn tác. Dự án và tất cả hình ảnh liên quan sẽ bị xóa vĩnh viễn."
                onConfirm={handleDelete}
                onCancel={() => setDeleteId(null)}
                type="danger"
            />
        </AdminLayout>
    );
};

export default AdminProjectsPage;
