import React, { useState, useEffect } from 'react';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { contactService, ContactInquiry } from '../../src/services/contactService';
import toast from 'react-hot-toast';
import ConfirmDialog from '../../src/components/admin/ConfirmDialog';

const AdminContactsPage: React.FC = () => {
    const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            setLoading(true);
            const data = await contactService.getAllInquiries();
            setInquiries(data);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
            toast.error('Lỗi khi tải danh sách liên hệ');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        try {
            await contactService.deleteInquiry(deleteId);
            toast.success('Đã xóa yêu cầu liên hệ');
            setInquiries(inquiries.filter(i => i.id !== deleteId));
            if (selectedInquiry?.id === deleteId) setSelectedInquiry(null);
        } catch (error) {
            console.error('Error deleting inquiry:', error);
            toast.error('Lỗi khi xóa yêu cầu');
        } finally {
            setDeleteId(null);
        }
    };

    const updateStatus = async (id: string, status: 'read' | 'responded') => {
        try {
            await contactService.updateInquiryStatus(id, status);
            setInquiries(inquiries.map(i => i.id === id ? { ...i, status } : i));
            if (selectedInquiry?.id === id) setSelectedInquiry({ ...selectedInquiry, status });
            toast.success('Đã cập nhật trạng thái');
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error('Lỗi khi cập nhật trạng thái');
        }
    };

    return (
        <AdminLayout>
            <div className="space-y-8 animate-fadeIn">
                {/* Header Section */}
                <div>
                    <h1 className="text-2xl font-black text-slate-800 tracking-normal">Quản lý Liên hệ</h1>
                    <p className="text-slate-500 font-medium mt-1">Quản lý các yêu cầu tư vấn và tin nhắn từ khách hàng</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* List Area */}
                    <div className="xl:col-span-2 space-y-4">
                        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                            {loading ? (
                                <div className="py-20 flex flex-col items-center justify-center">
                                    <div className="size-12 border-4 border-slate-100 border-t-admin-primary rounded-full animate-spin"></div>
                                    <p className="text-slate-400 font-bold text-sm mt-4  tracking-widest">Đang tải dữ liệu...</p>
                                </div>
                            ) : inquiries.length === 0 ? (
                                <div className="py-20 flex flex-col items-center justify-center text-slate-300">
                                    <span className="material-symbols-outlined text-5xl mb-4">mail</span>
                                    <p className="font-bold  tracking-widest text-sm">Chưa có liên hệ nào</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-slate-50">
                                                <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Khách hàng</th>
                                                <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Trạng thái</th>
                                                <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest">Thời gian</th>
                                                <th className="px-8 py-5 text-[10px] font-black text-slate-400  tracking-widest text-right">Thao tác</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {inquiries.map((inquiry) => (
                                                <tr
                                                    key={inquiry.id}
                                                    className={`group cursor-pointer transition-colors ${selectedInquiry?.id === inquiry.id ? 'bg-admin-primary/5' : 'hover:bg-slate-50/50'}`}
                                                    onClick={() => setSelectedInquiry(inquiry)}
                                                >
                                                    <td className="px-8 py-5">
                                                        <div className="flex flex-col">
                                                            <span className={`text-sm font-bold ${inquiry.status === 'new' ? 'text-slate-900' : 'text-slate-600'}`}>
                                                                {inquiry.name}
                                                            </span>
                                                            <span className="text-xs text-slate-400">{inquiry.phone}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black  tracking-widest ${inquiry.status === 'new' ? 'bg-rose-100 text-rose-600' :
                                                                inquiry.status === 'read' ? 'bg-blue-100 text-blue-600' :
                                                                    'bg-green-100 text-green-600'
                                                            }`}>
                                                            {inquiry.status === 'new' ? 'Mới' : inquiry.status === 'read' ? 'Đã xem' : 'Đã phản hồi'}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5">
                                                        <span className="text-xs font-bold text-slate-500">
                                                            {inquiry.createdAt ? new Date(inquiry.createdAt.seconds * 1000).toLocaleString('vi-VN') : '---'}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-right">
                                                        <button
                                                            onClick={(e) => { e.stopPropagation(); setDeleteId(inquiry.id!); }}
                                                            className="size-8 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-rose-500 hover:text-white transition-all ml-auto"
                                                        >
                                                            <span className="material-symbols-outlined text-base">delete</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Detail Area */}
                    <div className="xl:col-span-1">
                        {selectedInquiry ? (
                            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 space-y-8 sticky top-24 animate-in slide-in-from-right duration-300">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-slate-800">Chi tiết tin nhắn</h3>
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black  tracking-widest ${selectedInquiry.status === 'new' ? 'bg-rose-100 text-rose-600' :
                                                selectedInquiry.status === 'read' ? 'bg-blue-100 text-blue-600' :
                                                    'bg-green-100 text-green-600'
                                            }`}>
                                            {selectedInquiry.status === 'new' ? 'Tin chưa xem' : selectedInquiry.status === 'read' ? 'Đã xem' : 'Đã phản hồi'}
                                        </span>
                                    </div>
                                    <div className="h-px bg-slate-50"></div>
                                </div>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Họ tên</label>
                                            <p className="text-sm font-bold text-slate-700">{selectedInquiry.name}</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Số điện thoại</label>
                                            <p className="text-sm font-bold text-slate-700 hover:text-admin-primary transition-colors cursor-pointer">{selectedInquiry.phone}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Email</label>
                                        <p className="text-sm font-bold text-slate-700">{selectedInquiry.email}</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-bold text-slate-400  tracking-widest block mb-1">Nội dung / Chủ đề</label>
                                        <p className="text-sm font-bold text-slate-800 bg-slate-50 p-4 rounded-2xl italic leading-relaxed">
                                            "{selectedInquiry.message}"
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4">
                                    {selectedInquiry.status !== 'responded' && (
                                        <button
                                            onClick={() => updateStatus(selectedInquiry.id!, 'responded')}
                                            className="w-full py-3 bg-admin-primary text-white rounded-2xl font-bold text-sm shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-lg">check_circle</span>
                                            Đánh dấu đã phản hồi
                                        </button>
                                    )}
                                    {selectedInquiry.status === 'new' && (
                                        <button
                                            onClick={() => updateStatus(selectedInquiry.id!, 'read')}
                                            className="w-full py-3 bg-blue-50 text-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-100 transition-all"
                                        >
                                            Đánh dấu đã xem
                                        </button>
                                    )}
                                    <a
                                        href={`tel:${selectedInquiry.phone}`}
                                        className="w-full py-3 border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-lg">call</span>
                                        Gọi điện cho khách
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-12 flex flex-col items-center justify-center text-slate-300 text-center space-y-4">
                                <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-3xl">ads_click</span>
                                </div>
                                <p className="text-xs font-bold  tracking-widest max-w-[150px]">Chọn một yêu cầu để xem chi tiết</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <ConfirmDialog
                isOpen={!!deleteId}
                title="Xóa liên hệ?"
                message="Bạn có chắc chắn muốn xóa vĩnh viễn yêu cầu liên hệ này không?"
                onConfirm={handleDelete}
                onCancel={() => setDeleteId(null)}
                type="danger"
            />
        </AdminLayout>
    );
};

export default AdminContactsPage;
