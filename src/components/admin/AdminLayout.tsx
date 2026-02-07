import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const { user, logout } = useAuth();
    const location = useLocation();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Đăng xuất thành công');
        } catch (error) {
            toast.error('Lỗi khi đăng xuất');
        }
    };

    const menuItems = [
        { icon: 'dashboard', label: 'Bảng điều khiển', path: '/admin' },
        { icon: 'inbox', label: 'Tư vấn', path: '/admin/contacts' },
        { icon: 'inventory_2', label: 'Sản phẩm', path: '/admin/products' },
        { icon: 'apartment', label: 'Dự án', path: '/admin/projects' },
        { icon: 'description', label: 'Bài viết Content', path: '/admin/articles' },
        { icon: 'design_services', label: 'Dịch vụ', path: '/admin/services' },
        { icon: 'monitoring', label: 'Hiệu suất SEO', path: '/admin/seo' },
        { icon: 'group', label: 'Quản lý Đội ngũ', path: '/admin/team' },
        { icon: 'settings', label: 'Cài đặt', path: '/admin/settings' },
    ];

    const isActive = (path: string) => {
        if (path === '/admin') {
            return location.pathname === path;
        }
        return location.pathname.startsWith(path);
    };

    const activeItemLabel = menuItems.find((item) => isActive(item.path))?.label || 'Tổng quan';

    return (
        <div className="flex min-h-screen bg-admin-bg-light font-sans text-[#0c1d1d] antialiased">
            {/* Sidebar */}
            <aside className="w-72 border-r border-slate-200 bg-white flex flex-col fixed h-full z-20">
                <div className="p-6 flex flex-col gap-8 h-full">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="bg-admin-primary size-10 rounded-xl flex items-center justify-center text-white shadow-lg shadow-admin-primary/20">
                            <span className="material-symbols-outlined text-2xl">architecture</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[#0c1d1d] text-lg font-bold leading-[1.8]">KGX VN</h1>
                            <p className="text-admin-primary text-[10px] font-bold  tracking-widest">Cổng Phân Tích</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-col gap-1 grow">
                        {menuItems.map((item, index) => (
                            <React.Fragment key={item.path}>
                                {index === 5 && <div className="my-4 border-t border-slate-100"></div>}
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive(item.path)
                                        ? 'bg-admin-primary text-white shadow-md shadow-admin-primary/20'
                                        : 'text-slate-500 hover:bg-slate-100'
                                        }`}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    <span className={`text-sm ${isActive(item.path) ? 'font-semibold' : 'font-medium'}`}>
                                        {item.label}
                                    </span>
                                </Link>
                            </React.Fragment>
                        ))}
                    </nav>

                    {/* Logout */}
                    <div className="flex flex-col gap-1">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors w-full text-left"
                        >
                            <span className="material-symbols-outlined text-xl">logout</span>
                            <span className="text-sm font-semibold">Đăng xuất</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-72">
                {/* Header */}
                <header className="h-16 bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200 px-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-400  tracking-wider">
                        <span>Quản trị viên</span>
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                        <span className="text-slate-700">{activeItemLabel}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                            <span className="size-2 rounded-full bg-emerald-500"></span>
                            <span className="text-[11px] font-bold text-slate-600">Máy chủ trực tuyến</span>
                        </div>

                        <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                            <button className="relative text-slate-500 hover:text-admin-primary transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute -top-1 -right-1 size-4 bg-admin-secondary text-[10px] text-white flex items-center justify-center rounded-full font-bold">4</span>
                            </button>
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col text-right">
                                    <span className="text-sm font-bold leading-normal">Admin User</span>
                                    <span className="text-[10px] text-admin-primary font-bold ">Quản trị viên</span>
                                </div>
                                <div className="size-9 rounded-full bg-cover bg-center border-2 border-admin-primary/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')" }}></div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
