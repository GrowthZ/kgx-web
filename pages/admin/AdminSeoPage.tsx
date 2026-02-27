import { useState, useEffect } from 'react';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { collection, getDocs, query, orderBy, where, Timestamp } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface SeoItem { title: string; url: string; metaTitle?: string; metaDesc?: string; hasimage: boolean; score: number; issues: string[]; }

// ─── Score Badge ──────────────────────────────────────────────────────────────
const ScoreBadge = ({ score }: { score: number }) => {
    const color = score >= 80 ? 'bg-emerald-100 text-emerald-700' : score >= 50 ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700';
    const label = score >= 80 ? 'Tốt' : score >= 50 ? 'Cần cải thiện' : 'Kém';
    return <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${color}`}>{score} — {label}</span>;
};

// ─── Score evaluation ─────────────────────────────────────────────────────────
const evalSeoScore = (item: { title?: string; excerpt?: string; featuredImage?: string; content?: string; slug?: string }) => {
    const issues: string[] = [];
    let score = 100;

    if (!item.title || item.title.length < 10) { issues.push('Tiêu đề quá ngắn (< 10 ký tự)'); score -= 20; }
    else if (item.title.length > 70) { issues.push('Tiêu đề quá dài (> 70 ký tự)'); score -= 5; }

    if (!item.excerpt || item.excerpt.length < 50) { issues.push('Meta description quá ngắn (< 50 ký tự)'); score -= 20; }
    else if (item.excerpt.length > 160) { issues.push('Meta description quá dài (> 160 ký tự)'); score -= 5; }

    if (!item.featuredImage) { issues.push('Thiếu ảnh đại diện (Open Graph image)'); score -= 20; }

    if (!item.content || item.content.replace(/<[^>]+>/g, '').length < 300) { issues.push('Nội dung quá ngắn (< 300 từ)'); score -= 15; }

    if (!item.slug || item.slug.length > 60) { issues.push('Slug URL quá dài hoặc thiếu'); score -= 10; }

    return { score: Math.max(0, score), issues };
};

// ─── Stat Card ─────────────────────────────────────────────────────────────────
const StatCard = ({ label, value, icon, color }: { label: string; value: string | number; icon: string; color: string }) => (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div className={`size-12 rounded-xl flex items-center justify-center ${color}`}>
            <span className="material-symbols-outlined text-xl">{icon}</span>
        </div>
        <div>
            <p className="text-2xl font-black text-slate-800">{value}</p>
            <p className="text-xs font-bold text-slate-400 tracking-wide">{label}</p>
        </div>
    </div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const AdminSeoPage = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<'all' | 'good' | 'warn' | 'bad'>('all');
    const [dataType, setDataType] = useState<'articles' | 'products'>('articles');

    useEffect(() => { loadData(); }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const [artSnap, prodSnap] = await Promise.all([
                getDocs(query(collection(db, 'articles'), orderBy('createdAt', 'desc'))),
                getDocs(query(collection(db, 'products'), orderBy('createdAt', 'desc'))),
            ]);
            setArticles(artSnap.docs.map(d => ({ id: d.id, ...d.data() })));
            setProducts(prodSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const rawItems = dataType === 'articles' ? articles : products;
    const seoItems: SeoItem[] = rawItems.map(item => {
        const { score, issues } = evalSeoScore({
            title: item.name || item.title,
            excerpt: item.excerpt || item.description,
            featuredImage: item.image || item.featuredImage,
            content: item.content || item.description,
            slug: item.slug,
        });
        return {
            title: item.name || item.title,
            url: dataType === 'articles' ? `/tin-tuc/${item.slug}` : `/san-pham/${item.slug}`,
            metaTitle: item.title || item.name,
            metaDesc: item.excerpt || item.description,
            hasimage: !!(item.image || item.featuredImage),
            score,
            issues,
        };
    });

    const filtered = seoItems.filter(i => {
        if (filter === 'good') return i.score >= 80;
        if (filter === 'warn') return i.score >= 50 && i.score < 80;
        if (filter === 'bad') return i.score < 50;
        return true;
    });

    const avgScore = seoItems.length ? Math.round(seoItems.reduce((a, b) => a + b.score, 0) / seoItems.length) : 0;
    const goodCount = seoItems.filter(i => i.score >= 80).length;
    const warnCount = seoItems.filter(i => i.score >= 50 && i.score < 80).length;
    const badCount = seoItems.filter(i => i.score < 50).length;

    return (
        <AdminLayout>
            <div className="space-y-8">
                {/* Header */}
                <div className="pb-6 border-b border-slate-100">
                    <h2 className="text-2xl font-extrabold text-slate-900">Hiệu suất SEO</h2>
                    <p className="text-slate-500 mt-1 text-sm">Phân tích SEO on-page cho bài viết và sản phẩm — phát hiện vấn đề cần cải thiện.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StatCard label="Điểm TB" value={loading ? '—' : avgScore} icon="analytics" color="text-blue-600 bg-blue-50" />
                    <StatCard label="Tốt (≥80)" value={loading ? '—' : goodCount} icon="check_circle" color="text-emerald-600 bg-emerald-50" />
                    <StatCard label="Cần cải thiện" value={loading ? '—' : warnCount} icon="warning" color="text-amber-600 bg-amber-50" />
                    <StatCard label="Kém (<50)" value={loading ? '—' : badCount} icon="error" color="text-rose-600 bg-rose-50" />
                </div>

                {/* Score meter */}
                {!loading && seoItems.length > 0 && (
                    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                        <div className="relative size-28 shrink-0">
                            <svg className="size-28 -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="10" />
                                <circle cx="50" cy="50" r="42" fill="none"
                                    stroke={avgScore >= 80 ? '#10b981' : avgScore >= 50 ? '#f59e0b' : '#f43f5e'}
                                    strokeWidth="10" strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 42}`}
                                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - avgScore / 100)}`}
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-2xl font-black text-slate-800">{avgScore}</span>
                                <span className="text-[10px] font-bold text-slate-400 tracking-wide">/ 100</span>
                            </div>
                        </div>
                        <div className="flex-1 space-y-3 w-full">
                            {[
                                { label: 'Tốt', count: goodCount, total: seoItems.length, color: 'bg-emerald-500' },
                                { label: 'Cần cải thiện', count: warnCount, total: seoItems.length, color: 'bg-amber-400' },
                                { label: 'Kém', count: badCount, total: seoItems.length, color: 'bg-rose-400' },
                            ].map(({ label, count, total, color }) => (
                                <div key={label} className="flex items-center gap-3">
                                    <span className="text-xs font-bold text-slate-500 w-28 shrink-0">{label}</span>
                                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: total ? `${(count / total) * 100}%` : '0%' }} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 w-8 text-right">{count}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Filter bar */}
                <div className="flex flex-wrap items-center gap-3">
                    {/* Type switcher */}
                    <div className="flex gap-1 p-1 bg-slate-100 rounded-xl">
                        {(['articles', 'products'] as const).map(t => (
                            <button key={t} onClick={() => setDataType(t)}
                                className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${dataType === t ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                {t === 'articles' ? 'Bài viết' : 'Sản phẩm'}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-1 p-1 bg-slate-100 rounded-xl ml-auto">
                        {([['all', 'Tất cả'], ['good', '✅ Tốt'], ['warn', '⚠️ Cảnh báo'], ['bad', '❌ Kém']] as const).map(([val, lbl]) => (
                            <button key={val} onClick={() => setFilter(val)}
                                className={`px-3 py-2 rounded-lg font-bold text-xs transition-all ${filter === val ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                {lbl}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="p-20 text-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-admin-primary mx-auto mb-4" />
                            <p className="text-slate-400 text-sm font-medium">Đang phân tích SEO...</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="p-20 text-center text-slate-400">
                            <span className="material-symbols-outlined text-4xl mb-4 block">search_off</span>
                            <p className="font-bold">Không có kết quả</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-slate-50">
                            {filtered.map((item, i) => (
                                <div key={i} className="p-5 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex flex-wrap items-start gap-3 mb-3">
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-slate-800 truncate text-sm">{item.title}</p>
                                            <p className="text-xs text-slate-400 mt-0.5">{item.url}</p>
                                        </div>
                                        <ScoreBadge score={item.score} />
                                    </div>
                                    {/* Mini bars */}
                                    <div className="grid grid-cols-3 gap-3 mb-3">
                                        {[
                                            { label: 'Tiêu đề', ok: !!(item.metaTitle && item.metaTitle.length >= 10 && item.metaTitle.length <= 70) },
                                            { label: 'Mô tả', ok: !!(item.metaDesc && item.metaDesc.length >= 50 && item.metaDesc.length <= 160) },
                                            { label: 'Ảnh OG', ok: item.hasimage },
                                        ].map(({ label, ok }) => (
                                            <div key={label} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold ${ok ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                                <span className="material-symbols-outlined text-sm">{ok ? 'check_circle' : 'radio_button_unchecked'}</span>
                                                {label}
                                            </div>
                                        ))}
                                    </div>
                                    {item.issues.length > 0 && (
                                        <ul className="space-y-1">
                                            {item.issues.map((issue, j) => (
                                                <li key={j} className="flex items-start gap-1.5 text-xs text-amber-700">
                                                    <span className="material-symbols-outlined text-sm text-amber-400 shrink-0 mt-0.5">warning</span>
                                                    {issue}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminSeoPage;
