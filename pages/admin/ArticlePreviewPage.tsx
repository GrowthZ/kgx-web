import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCTA from '../../components/FloatingCTA';
import ArticlePreviewRenderer, { ArticlePreviewDraft } from '../../src/components/admin/ArticlePreviewRenderer';

const ArticlePreviewPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const draftId = searchParams.get('draft');
    const [draft, setDraft] = useState<ArticlePreviewDraft | null>(null);
    const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);

    const storageKey = useMemo(() => (draftId ? `article-preview:${draftId}` : ''), [draftId]);

    const readDraft = (): ArticlePreviewDraft | null => {
        if (!storageKey) return null;

        if (!draftId) return null;

        try {
            const raw = localStorage.getItem(storageKey);
            if (!raw) return null;
            return JSON.parse(raw) as ArticlePreviewDraft;
        } catch (error) {
            console.error('Read preview draft error:', error);
            return null;
        }
    };

    useEffect(() => {
        const syncDraft = () => {
            const nextDraft = readDraft();
            setDraft(nextDraft);
            setLastUpdatedAt(new Date());
        };

        syncDraft();

        const handleStorage = (event: StorageEvent) => {
            if (event.key === storageKey) {
                syncDraft();
            }
        };

        const interval = window.setInterval(syncDraft, 1000);
        window.addEventListener('storage', handleStorage);

        return () => {
            window.clearInterval(interval);
            window.removeEventListener('storage', handleStorage);
        };
    }, [storageKey]);

    if (!draft) {
        return (
            <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
                <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center">
                    <div className="size-14 mx-auto rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-3xl">warning</span>
                    </div>
                    <h1 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy dữ liệu xem trước</h1>
                    <p className="text-sm text-slate-500 mb-6">
                        Bản nháp xem trước đã hết hạn hoặc chưa được tạo. Vui lòng quay lại form bài viết và mở xem trước lại.
                    </p>
                    <Link
                        to="/admin/articles"
                        className="inline-flex h-11 px-6 rounded-xl bg-admin-primary text-white items-center justify-center font-bold text-sm"
                    >
                        Về quản lý bài viết
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-background-light">
            <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
                <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold tracking-widest text-slate-400">XEM TRƯỚC TAB MỚI</p>
                        <h2 className="text-sm md:text-base font-bold text-slate-800">Mô phỏng hiển thị bài viết ngoài website (realtime)</h2>
                        {lastUpdatedAt && (
                            <p className="text-[10px] text-slate-400 font-semibold mt-1">
                                Cập nhật lần cuối: {lastUpdatedAt.toLocaleTimeString('vi-VN')}
                            </p>
                        )}
                    </div>
                    <Link
                        to="/admin/articles"
                        className="h-10 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-bold inline-flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-base">arrow_back</span>
                        Quay lại admin
                    </Link>
                </div>
            </header>
            <Header />
            <main className="flex-grow">
                <ArticlePreviewRenderer draft={draft} />
            </main>
            <FloatingCTA />
            <Footer />
        </div>
    );
};

export default ArticlePreviewPage;
