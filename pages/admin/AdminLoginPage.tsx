import React, { useState } from 'react';
import { useAuth } from '../../src/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const AdminLoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        setLoading(true);

        try {
            await login(email, password);
            toast.success('Đăng nhập thành công!');
            navigate('/admin');
        } catch (error: any) {
            console.error('Login error:', error);

            let errorMessage = 'Đăng nhập thất bại';

            if (error.code === 'auth/invalid-credential') {
                errorMessage = 'Email hoặc mật khẩu không đúng';
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = 'Tài khoản không tồn tại';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Mật khẩu không đúng';
            } else if (error.code === 'auth/too-many-requests') {
                errorMessage = 'Quá nhiều lần thử. Vui lòng thử lại sau';
            }

            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-admin-bg-light flex items-center justify-center p-6 font-sans antialiased">
            <Toaster position="top-center" />

            <div className="max-w-md w-full">
                {/* Brand Logo */}
                <div className="flex flex-col items-center mb-10">
                    <div className="bg-admin-primary size-14 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-admin-primary/20 mb-4 transition-transform hover:scale-105 duration-300">
                        <span className="material-symbols-outlined text-3xl">architecture</span>
                    </div>
                    <h1 className="text-2xl font-bold text-[#0c1d1d] tracking-tight">KGX ADMIN</h1>
                    <div className="h-0.5 w-10 bg-admin-secondary mt-2 rounded-full"></div>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/60 p-10 border border-slate-100">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-slate-800">Chào mừng trở lại</h2>
                        <p className="text-sm text-slate-500 mt-1">Đăng nhập để quản trị hệ thống KGX VN</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                                Email Quản trị
                            </label>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-admin-primary transition-colors">
                                    mail
                                </span>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl text-sm focus:bg-white focus:border-admin-primary focus:ring-4 focus:ring-admin-primary/10 transition-all outline-none"
                                    placeholder="admin@kgxvn.vn"
                                    disabled={loading}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between ml-1">
                                <label htmlFor="password" className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    Mật khẩu
                                </label>
                                <a href="#" className="text-xs font-bold text-admin-primary hover:underline">Quên?</a>
                            </div>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-admin-primary transition-colors">
                                    lock
                                </span>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-transparent rounded-2xl text-sm focus:bg-white focus:border-admin-primary focus:ring-4 focus:ring-admin-primary/10 transition-all outline-none"
                                    placeholder="••••••••"
                                    disabled={loading}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-admin-primary hover:brightness-110 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-admin-primary/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
                        >
                            {loading ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    <span>Đang xác thực...</span>
                                </>
                            ) : (
                                <>
                                    <span>VÀO HỆ THỐNG</span>
                                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 flex items-center justify-center gap-4 border-t border-slate-50 pt-8">
                        <a href="/" className="text-xs font-bold text-slate-400 hover:text-admin-primary transition-colors flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">home</span>
                            Trang chủ
                        </a>
                        <span className="text-slate-200">|</span>
                        <span className="text-xs font-medium text-slate-400">v2.0.4 Admin Portal</span>
                    </div>
                </div>

                {/* Status Indicator */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MÁY CHỦ TRỰC TUYẾN</span>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
