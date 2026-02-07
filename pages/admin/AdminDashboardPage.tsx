import React from 'react';
import AdminLayout from '../../src/components/admin/AdminLayout';

const AdminDashboardPage: React.FC = () => {
    const stats = [
        { icon: 'visibility', label: 'Tổng Lưu lượng', value: '42,840', trend: '+14.2%', color: 'bg-admin-primary/10', textColor: 'text-admin-primary', trendUp: true },
        { icon: 'ads_click', label: 'Tổng Lượt Click', value: '12,504', trend: '+8.1%', color: 'bg-admin-secondary/10', textColor: 'text-admin-secondary', trendUp: true },
        { icon: 'conversion_path', label: 'Tỷ lệ Chuyển đổi', value: '3.24%', trend: '-0.4%', color: 'bg-emerald-100', textColor: 'text-emerald-600', trendUp: false },
        { icon: 'contact_support', label: 'Yêu cầu Mới', value: '452', trend: '+21%', color: 'bg-blue-100', textColor: 'text-blue-600', trendUp: true },
    ];

    return (
        <AdminLayout>
            <div className="space-y-8">
                {/* Dashboard Header */}
                <div className="flex flex-wrap justify-between items-center gap-6 pb-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">Tổng quan Phân tích</h2>
                        <p className="text-slate-500 mt-1">Chỉ số hiệu suất thời gian thực cho Nền tảng Kỹ thuật số KGX VN.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-3 pl-4 pr-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold shadow-sm hover:border-admin-primary/50 transition-all min-w-[240px] justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-admin-primary">calendar_month</span>
                                <span className="text-slate-700">01 Th10, 2023 - 31 Th10, 2023</span>
                            </div>
                            <span className="material-symbols-outlined text-slate-400">expand_more</span>
                        </button>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-admin-primary text-white rounded-xl text-sm font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all">
                            <span className="material-symbols-outlined text-lg">ios_share</span>
                            Xuất báo cáo
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border-2 border-transparent hover:border-admin-primary/20 transition-all shadow-sm relative overflow-hidden group">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`size-12 rounded-xl ${stat.color} ${stat.textColor} flex items-center justify-center`}>
                                    <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                                </div>
                                <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${stat.trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                                    <span className="material-symbols-outlined text-sm mr-0.5">{stat.trendUp ? 'trending_up' : 'trending_down'}</span>
                                    {stat.trend}
                                </span>
                            </div>
                            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</h3>
                            <p className="text-3xl font-extrabold text-slate-900 mt-1">{stat.value}</p>
                            <p className="text-[10px] text-slate-400 mt-2">Giai đoạn 01 Th10 - 31 Th10</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Chart */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all border-l-4 border-l-admin-primary">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-slate-900">Xu hướng Tương tác</h3>
                                    <span className="px-2 py-0.5 bg-admin-primary/10 text-admin-primary text-[10px] font-bold rounded">PHẠM VI TRỰC TIẾP</span>
                                </div>
                                <p className="text-xs text-slate-400">Phân tích lưu lượng và lượt click trong khoảng thời gian đã chọn</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-admin-primary"></span>
                                    <span className="text-xs font-medium text-slate-500">Lưu lượng</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2 rounded-full bg-admin-secondary"></span>
                                    <span className="text-xs font-medium text-slate-500">Click</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex-1 relative min-h-[350px]">
                            <div className="absolute inset-x-6 bottom-16 h-48">
                                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                                    <defs>
                                        <linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: "rgba(0,138,138,0.2)", stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: "rgba(0,138,138,0)", stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,15 V40 H0 Z" fill="url(#grad)" />
                                    <path d="M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,15" fill="none" stroke="#008a8a" strokeWidth="0.5" />
                                    <path d="M0,38 Q10,35 20,37 T40,28 T60,32 T80,22 T100,25" fill="none" stroke="#f3a812" strokeDasharray="1 1" strokeWidth="0.5" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-between h-48 mb-8">
                                <div className="border-b border-slate-100 w-full h-px"></div>
                                <div className="border-b border-slate-100 w-full h-px"></div>
                                <div className="border-b border-slate-100 w-full h-px"></div>
                                <div className="border-b border-slate-100 w-full h-px"></div>
                            </div>
                            <div className="flex justify-between px-2 text-[10px] font-bold text-slate-400 uppercase">
                                <span>01 Th10</span>
                                <span>07 Th10</span>
                                <span>14 Th10</span>
                                <span>21 Th10</span>
                                <span>31 Th10</span>
                            </div>
                        </div>
                    </div>

                    {/* Top Content */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="p-6 border-b border-slate-100">
                            <h3 className="font-bold text-slate-900">Bài viết Xem nhiều nhất</h3>
                            <p className="text-xs text-slate-400">Dựa trên dữ liệu từ 01 Th10 - 31 Th10</p>
                        </div>
                        <div className="p-6 space-y-5 flex-1">
                            {[
                                { title: 'Mẫu Biệt thự Hiện đại 2024', views: '4.2k', likes: '892', trend: '+18%', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=200' },
                                { title: 'Giải pháp Văn phòng Xanh', views: '3.8k', likes: '450', trend: '+12%', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200' },
                                { title: 'Top 10 Resort Nghỉ dưỡng', views: '2.5k', likes: '312', trend: '+5%', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=200' },
                                { title: 'Nội thất Penthouse', views: '1.9k', likes: '240', trend: '+22%', img: 'https://images.unsplash.com/photo-1600607687940-c52af096999a?auto=format&fit=crop&q=80&w=200' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="size-14 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                                        <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-bold text-slate-800 truncate">{item.title}</h4>
                                        <div className="flex items-center gap-3 mt-1">
                                            <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                                                <span className="material-symbols-outlined text-sm">visibility</span> {item.views}
                                            </span>
                                            <span className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
                                                <span className="material-symbols-outlined text-sm">favorite</span> {item.likes}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-bold text-emerald-600">{item.trend}</div>
                                        <div className="text-[10px] text-slate-400">tăng trưởng</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
                            <a className="text-xs font-bold text-admin-primary hover:underline" href="/admin/articles">Xem tất cả bài viết</a>
                        </div>
                    </div>
                </div>

                {/* SEO Rankings */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="font-bold text-slate-900">Xếp hạng Từ khóa SEO</h3>
                        <button className="text-xs font-bold text-slate-400 hover:text-admin-primary transition-colors flex items-center gap-1">
                            Xem Bộ lọc <span className="material-symbols-outlined text-sm">filter_list</span>
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest">Từ khóa</th>
                                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest text-center">Lượt Tìm kiếm</th>
                                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest text-center">Vị trí</th>
                                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest text-center">Tỷ lệ Click</th>
                                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-500 uppercase tracking-widest text-right">Chuyển đổi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { kw: 'thiết kế biệt thự', vol: '18,245', pos: '1.4', ctr: '4.2%', conv: '156', color: 'bg-blue-50 text-blue-600' },
                                    { kw: 'kiến trúc hiện đại', vol: '12,110', pos: '2.8', ctr: '6.5%', conv: '89', color: 'bg-indigo-50 text-indigo-600' },
                                    { kw: 'công ty kiến trúc uy tín', vol: '8,450', pos: '3.2', ctr: '3.1%', conv: '124', color: 'bg-orange-50 text-orange-600' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`size-8 rounded-lg ${row.color} flex items-center justify-center`}>
                                                    <span className="material-symbols-outlined text-lg">search</span>
                                                </div>
                                                <span className="text-sm font-semibold">{row.kw}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center text-sm font-medium">{row.vol}</td>
                                        <td className="px-6 py-4 text-center text-sm text-slate-500">{row.pos}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="bg-admin-primary h-full" style={{ width: row.ctr }}></div>
                                                </div>
                                                <span className="text-xs font-bold">{row.ctr}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right text-sm font-bold text-admin-primary">{row.conv}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboardPage;
