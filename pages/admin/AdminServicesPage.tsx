import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { servicesService, Service } from '../../src/services/servicesService';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../src/components/admin/ConfirmDialog';

const AdminServicesPage: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const data = await servicesService.getAllServices();
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
            toast.error('Lỗi khi tải danh sách dịch vụ');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await servicesService.deleteService(deleteId);
            toast.success('Đã xóa dịch vụ thành công');
            setServices(services.filter(s => s.id !== deleteId));
        } catch (error) {
            console.error('Error deleting service:', error);
            toast.error('Lỗi khi xóa dịch vụ');
        } finally {
            setDeleteId(null);
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-8 animate-fadeIn">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-normal">Quản lý Dịch vụ</h1>
                        <p className="text-slate-500 font-medium mt-1">Quản lý các giải pháp thiết kế và thi công</p>
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden text-right">
                    {loading ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                            <div className="size-12 border-4 border-slate-100 border-t-admin-primary rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-bold text-sm mt-4  tracking-widest">Đang tải dịch vụ...</p>
                        </div>
                    ) : services.length === 0 ? (
                        <div className="py-20 flex flex-col items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-5xl mb-4">settings_suggest</span>
                            <p className="font-bold  tracking-widest text-sm">Chưa có dịch vụ nào</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto text-left">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-50">
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Dịch vụ</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Danh mục</th>
                                        <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {services.map((service) => (
                                        <tr key={service.id} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-14 rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex-shrink-0">
                                                        <img
                                                            src={service.image}
                                                            alt={service.title}
                                                            className="size-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-800 group-hover:text-admin-primary transition-colors">{service.title}</p>
                                                        <p className="text-xs text-slate-400 font-medium truncate max-w-xs">{service.description}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black  tracking-widest ${service.category === 'thiet-ke' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
                                                    }`}>
                                                    {service.category === 'thiet-ke' ? 'Thiết kế' : 'Thi công'}
                                                </span>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        to={`/admin/services/edit/${service.id}`}
                                                        className="size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-admin-primary hover:text-white transition-all shadow-sm"
                                                    >
                                                        <span className="material-symbols-outlined text-lg font-bold">edit</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => setDeleteId(service.id!)}
                                                        className="size-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-rose-500 hover:text-white transition-all shadow-sm"
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

            <ConfirmDialog
                isOpen={!!deleteId}
                title="Xóa dịch vụ?"
                message="Dữ liệu này rất quan trọng. Bạn có chắc chắn muốn xóa không?"
                onConfirm={handleDelete}
                onCancel={() => setDeleteId(null)}
                type="danger"
            />
        </AdminLayout>
    );
};

export default AdminServicesPage;
