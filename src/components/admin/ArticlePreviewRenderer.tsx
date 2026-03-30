import ImageWithFallback from '../../../components/ImageWithFallback';

export interface ArticlePreviewDraft {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    category: string;
    author: string;
    published: boolean;
    previewDate: string;
}

interface ArticlePreviewRendererProps {
    draft: ArticlePreviewDraft;
    compact?: boolean;
}

const ArticlePreviewRenderer: React.FC<ArticlePreviewRendererProps> = ({ draft, compact = false }) => {
    return (
        <article className="bg-background-light text-[#151b0e] font-display min-h-full">
            <header className="max-w-[860px] mx-auto pt-8 md:pt-12 px-4 md:px-6">
                <nav className="flex flex-wrap gap-1.5 text-sm font-medium mb-5 text-gray-500">
                    <span>Trang chủ</span>
                    <span className="text-gray-300">/</span>
                    <span>Tin tức</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-primary">{draft.category || 'Tin tức'}</span>
                </nav>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
                    {draft.title || 'Tiêu đề bài viết sẽ hiển thị ở đây'}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <span className="flex h-8 items-center rounded-full bg-primary/10 px-3 text-primary text-xs font-semibold">
                            {draft.category || 'Tin tức'}
                        </span>
                        <span className="flex h-8 items-center rounded-full bg-gray-100 px-3 text-gray-600 text-xs font-medium gap-1.5">
                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                            {draft.previewDate}
                        </span>
                        <span className="flex h-8 items-center rounded-full bg-gray-100 px-3 text-gray-600 text-xs font-medium gap-1.5">
                            <span className="material-symbols-outlined text-sm">person</span>
                            {draft.author || 'Admin'}
                        </span>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${draft.published ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {draft.published ? 'ĐÃ XUẤT BẢN' : 'BẢN NHÁP'}
                    </span>
                </div>

                <p className="text-base md:text-lg text-gray-600 border-l-4 border-primary pl-4 md:pl-6 py-2 italic mb-8">
                    {draft.excerpt || 'Mô tả ngắn (excerpt) sẽ hiển thị ở khu vực này.'}
                </p>

                <div className="aspect-[16/9] w-full bg-gray-200 rounded-xl overflow-hidden mb-10 shadow-md">
                    {draft.featuredImage ? (
                        <ImageWithFallback
                            alt={draft.title || 'Ảnh đại diện bài viết'}
                            className="w-full h-full object-cover"
                            src={draft.featuredImage}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-medium">
                            Ảnh đại diện sẽ hiển thị ở đây
                        </div>
                    )}
                </div>
            </header>

            <main className={`max-w-[860px] mx-auto px-4 md:px-6 ${compact ? 'pb-12' : 'pb-20'}`}>
                {draft.content ? (
                    <div
                        className="tiptap-content"
                        dangerouslySetInnerHTML={{ __html: draft.content }}
                    />
                ) : (
                    <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-400 text-sm font-medium">
                        Nội dung bài viết chưa có. Hãy nhập nội dung ở editor để xem trước.
                    </div>
                )}

                <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-400 font-medium break-all">
                    URL xem trước: /tin-tuc/{draft.slug || 'slug-bai-viet'}
                </div>
            </main>
        </article>
    );
};

export default ArticlePreviewRenderer;
