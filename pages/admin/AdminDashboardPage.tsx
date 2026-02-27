import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { collection, getDocs, query, orderBy, limit, where, Timestamp } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';

// ─── Types ────────────────────────────────────────────────────────────────────
interface DashStats { articles: number; products: number; projects: number; contacts: number; newContacts: number; }
interface RecentContact { id: string; name: string; phone: string; email: string; service?: string; createdAt: any; }
interface RecentArticle { id: string; title: string; slug: string; featuredImage?: string; createdAt: any; published: boolean; }

// ─── Helpers ──────────────────────────────────────────────────────────────────
const fmtDate = (ts: any): string => {
    if (!ts) return '—';
    const d = ts?.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const fmtRelative = (ts: any): string => {
    if (!ts) return '—';
    const d = ts?.toDate ? ts.toDate() : new Date(ts);
    const diff = Math.floor((Date.now() - d.getTime()) / 60000);
    if (diff < 1) return 'Vừa xong';
    if (diff < 60) return `${diff} phút trước`;
    if (diff < 1440) return `${Math.floor(diff / 60)} giờ trước`;
    return `${Math.floor(diff / 1440)} ngày trước`;
};

// ─── Mini Stat Card ───────────────────────────────────────────────────────────
const StatCard = ({ icon, label, value, color, textColor, to, loading }: {
    icon: string; label: string; value: number; color: string; textColor: string; to: string; loading: boolean;
}) => (
    <Link to={to} className="bg-white p-6 rounded-2xl border-2 border-transparent hover:border-admin-primary/20 transition-all shadow-sm relative overflow-hidden group block">
        <div className="flex items-center justify-between mb-4">
            <div className={`size-12 rounded-xl ${color} ${textColor} flex items-center justify-center`}>
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            <span className="material-symbols-outlined text-slate-300 group-hover:text-admin-primary transition-colors text-xl">arrow_forward</span>
        </div>
        <p className="text-slate-500 text-xs font-bold tracking-wider">{label}</p>
        {loading ? (
            <div className="h-8 w-16 bg-slate-100 rounded-lg animate-pulse mt-1" />
        ) : (
            <p className="text-3xl font-extrabold text-slate-900 mt-1">{value.toLocaleString('vi-VN')}</p>
        )}
    </Link>
);

// ─── Main Component ────────────────────────────────────────────────────────────
const AdminDashboardPage = () => {
    const [stats, setStats] = useState<DashStats>({ articles: 0, products: 0, projects: 0, contacts: 0, newContacts: 0 });
    const [recentContacts, setRecentContacts] = useState<RecentContact[]>([]);
    const [recentArticles, setRecentArticles] = useState<RecentArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const today = new Date();

    useEffect(() => { loadDashboard(); }, []);

    const loadDashboard = async () => {
        try {
            setLoading(true);

            // Count threshold: contacts created in last 7 days
            const sevenDaysAgo = new Date();
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
            const threshold = Timestamp.fromDate(sevenDaysAgo);

            const [artSnap, prodSnap, projSnap, contactSnap, newContactSnap, recentContactSnap, recentArtSnap] = await Promise.all([
                getDocs(query(collection(db, 'articles'))),
                getDocs(query(collection(db, 'products'))),
                getDocs(query(collection(db, 'projects'))),
                getDocs(query(collection(db, 'contacts'))),
                getDocs(query(collection(db, 'contacts'), where('createdAt', '>=', threshold))),
                getDocs(query(collection(db, 'contacts'), orderBy('createdAt', 'desc'), limit(5))),
                getDocs(query(collection(db, 'articles'), orderBy('createdAt', 'desc'), limit(5))),
            ]);

            setStats({
                articles: artSnap.size,
                products: prodSnap.size,
                projects: projSnap.size,
                contacts: contactSnap.size,
                newContacts: newContactSnap.size,
            });

            setRecentContacts(recentContactSnap.docs.map(d => ({ id: d.id, ...d.data() } as RecentContact)));
            setRecentArticles(recentArtSnap.docs.map(d => ({ id: d.id, ...d.data() } as RecentArticle)));
        } catch (e) {
            console.error('Dashboard load error:', e);
        } finally {
            setLoading(false);
        }
    };

    const statCards = [
        { icon: 'description', label: 'Bài viết', value: stats.articles, color: 'bg-admin-primary/10', textColor: 'text-admin-primary', to: '/admin/articles' },
        { icon: 'inventory_2', label: 'Sản phẩm', value: stats.products, color: 'bg-emerald-100', textColor: 'text-emerald-600', to: '/admin/products' },
        { icon: 'apartment', label: 'Dự án', value: stats.projects, color: 'bg-violet-100', textColor: 'text-violet-600', to: '/admin/projects' },
        { icon: 'contact_support', label: 'Yêu cầu tư vấn', value: stats.contacts, color: 'bg-amber-100', textColor: 'text-amber-600', to: '/admin/contacts' },
    ];

    return (
        <AdminLayout>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-normal text-slate-900">Bảng điều khiển</h2>
                        <p className="text-slate-500 mt-1 text-sm">
                            {today.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
                        </p>
                    </div>
                    <button onClick={loadDashboard} className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
                        <span className="material-symbols-outlined text-lg">refresh</span> Làm mới
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {statCards.map(c => <StatCard key={c.label} {...c} loading={loading} />)}
                </div>

                {/* New contacts badge */}
                {!loading && stats.newContacts > 0 && (
                    <Link to="/admin/contacts"
                        className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl hover:bg-amber-100 transition-colors">
                        <span className="material-symbols-outlined text-amber-500 text-xl">notifications_active</span>
                        <span className="text-sm font-bold text-amber-800">
                            Có <strong>{stats.newContacts}</strong> yêu cầu tư vấn mới trong 7 ngày qua — nhấn để xem
                        </span>
                        <span className="material-symbols-outlined text-amber-400 ml-auto">arrow_forward</span>
                    </Link>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ── Recent contacts ── */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-slate-900">Yêu cầu tư vấn gần đây</h3>
                                <p className="text-xs text-slate-400 mt-0.5">5 liên hệ mới nhất từ khách hàng</p>
                            </div>
                            <Link to="/admin/contacts" className="text-xs font-bold text-admin-primary hover:underline flex items-center gap-1">
                                Tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="flex-1">
                            {loading ? (
                                <div className="p-6 space-y-4">
                                    {[1, 2, 3].map(i => <div key={i} className="h-14 bg-slate-50 rounded-xl animate-pulse" />)}
                                </div>
                            ) : recentContacts.length === 0 ? (
                                <div className="p-12 text-center text-slate-400">
                                    <span className="material-symbols-outlined text-4xl mb-3 block">inbox</span>
                                    <p className="text-sm font-medium">Chưa có yêu cầu tư vấn nào</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-slate-50">
                                    {recentContacts.map(c => (
                                        <div key={c.id} className="px-6 py-4 hover:bg-slate-50/50 transition-colors flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-gradient-to-br from-admin-primary/20 to-admin-primary/40 flex items-center justify-center shrink-0 text-admin-primary font-extrabold text-sm">
                                                {(c.name || '?').charAt(0).toUpperCase()}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-slate-800 text-sm truncate">{c.name}</p>
                                                <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                                                    <span>{c.phone}</span>
                                                    {c.service && <><span>·</span><span className="truncate">{c.service}</span></>}
                                                </p>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <span className="text-[11px] font-bold text-slate-400">{fmtRelative(c.createdAt)}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── Recent articles ── */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-slate-900">Bài viết gần đây</h3>
                                <p className="text-xs text-slate-400 mt-0.5">5 bài viết mới nhất</p>
                            </div>
                            <Link to="/admin/articles" className="text-xs font-bold text-admin-primary hover:underline flex items-center gap-1">
                                Tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="flex-1">
                            {loading ? (
                                <div className="p-6 space-y-4">
                                    {[1, 2, 3].map(i => <div key={i} className="h-14 bg-slate-50 rounded-xl animate-pulse" />)}
                                </div>
                            ) : recentArticles.length === 0 ? (
                                <div className="p-12 text-center text-slate-400">
                                    <span className="material-symbols-outlined text-4xl mb-3 block">article</span>
                                    <p className="text-sm font-medium">Chưa có bài viết nào</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-slate-50">
                                    {recentArticles.map(a => (
                                        <Link key={a.id} to={`/admin/articles/edit/${a.id}`}
                                            className="px-5 py-4 hover:bg-slate-50/50 transition-colors flex items-center gap-3 group">
                                            <div className="size-10 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                                                {a.featuredImage
                                                    ? <img src={a.featuredImage} alt={a.title} className="w-full h-full object-cover" />
                                                    : <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                        <span className="material-symbols-outlined text-lg">image</span>
                                                    </div>
                                                }
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-bold text-slate-800 text-xs truncate group-hover:text-admin-primary transition-colors">{a.title}</p>
                                                <div className="flex items-center gap-2 mt-0.5">
                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${a.published ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                                        {a.published ? 'Đã xuất bản' : 'Nháp'}
                                                    </span>
                                                    <span className="text-[10px] text-slate-400">{fmtDate(a.createdAt)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="p-4 border-t border-slate-100 text-center">
                            <Link to="/admin/articles/new" className="text-xs font-bold text-admin-primary hover:underline flex items-center justify-center gap-1">
                                <span className="material-symbols-outlined text-sm">add_circle</span> Viết bài mới
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Thêm sản phẩm', icon: 'add_circle', to: '/admin/products/new', color: 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100' },
                        { label: 'Viết bài mới', icon: 'edit_note', to: '/admin/articles/new', color: 'text-blue-600 bg-blue-50 hover:bg-blue-100' },
                        { label: 'Hiệu suất SEO', icon: 'monitoring', to: '/admin/seo', color: 'text-violet-600 bg-violet-50 hover:bg-violet-100' },
                        { label: 'Cài đặt', icon: 'settings', to: '/admin/settings', color: 'text-slate-600 bg-slate-100 hover:bg-slate-200' },
                    ].map(l => (
                        <Link key={l.to} to={l.to} className={`${l.color} rounded-2xl p-5 flex items-center gap-3 font-bold text-sm transition-all`}>
                            <span className="material-symbols-outlined">{l.icon}</span> {l.label}
                        </Link>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminDashboardPage;
