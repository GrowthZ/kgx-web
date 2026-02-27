import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesService, Article } from '../src/services/articlesService';
import ImageWithFallback from '../components/ImageWithFallback';

/**
 * Safely format a date value from Firestore.
 * Handles: Firestore Timestamp, JS Date, number, ISO string.
 */
const formatDate = (value: any): string => {
    if (!value) return '';
    try {
        // Firestore Timestamp has a toDate() method
        const date = typeof value.toDate === 'function'
            ? value.toDate()
            : new Date(value.seconds ? value.seconds * 1000 : value);
        if (isNaN(date.getTime())) return '';
        return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch {
        return '';
    }
};

const ArticleDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [article, setArticle] = useState<Article | null>(null);
    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchArticleData();
        }
    }, [slug]);

    const fetchArticleData = async () => {
        try {
            setLoading(true);
            const data = await articlesService.getArticleBySlug(slug!);
            setArticle(data);

            if (data) {
                const allArticles = await articlesService.getAllArticles();
                const filtered = allArticles
                    .filter(a => a.category === data.category && a.slug !== data.slug && a.published)
                    .slice(0, 3);
                setRelatedArticles(filtered);
            }
        } catch (error) {
            console.error('Error fetching article:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleShareFacebook = () => {
        let url = window.location.href;
        // FB Sharer không thể cào dữ liệu từ localhost. Nếu đang ở môi trường dev, tạm dùng domain thật để test.
        if (url.includes('localhost') || url.includes('127.0.0.1')) {
            url = url.replace(/https?:\/\/(localhost|127\.0\.0\.1):\d+/, 'https://kgxvn.vn');
        }
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light">
                <div className="size-16 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-slate-400 font-bold text-sm mt-4 tracking-widest">Đang tải bài viết...</p>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light">
                <h2 className="text-2xl font-bold text-olive mb-4">Không tìm thấy bài viết</h2>
                <Link to="/tin-tuc" className="text-primary font-bold hover:underline">Quay lại danh sách tin tức</Link>
            </div>
        );
    }

    return (
        <div className="bg-background-light text-[#151b0e] font-display min-h-screen pb-20">
            {/* Hero Section */}
            <header className="max-w-[860px] mx-auto pt-8 md:pt-12 px-4 md:px-6">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap gap-1.5 text-sm font-medium mb-5 text-gray-500">
                    <Link className="hover:text-primary transition-colors" to="/">Trang chủ</Link>
                    <span className="text-gray-300">/</span>
                    <Link className="hover:text-primary transition-colors" to="/tin-tuc">Tin tức</Link>
                    <span className="text-gray-300">/</span>
                    <span className="text-primary">{article.category}</span>
                </nav>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
                    {article.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        <span className="flex h-8 items-center rounded-full bg-primary/10 px-3 text-primary text-xs font-semibold">
                            {article.category}
                        </span>
                        <span className="flex h-8 items-center rounded-full bg-gray-100 px-3 text-gray-600 text-xs font-medium gap-1.5">
                            <span className="material-symbols-outlined text-sm">calendar_today</span>
                            {formatDate(article.createdAt)}
                        </span>
                        <span className="flex h-8 items-center rounded-full bg-gray-100 px-3 text-gray-600 text-xs font-medium gap-1.5">
                            <span className="material-symbols-outlined text-sm">person</span>
                            {article.author || 'KGX'}
                        </span>
                    </div>

                    <button
                        onClick={handleShareFacebook}
                        className="flex h-8 items-center rounded-full bg-[#1877F2] hover:bg-[#1864D9] transition-colors px-3.5 text-white text-xs font-medium gap-1.5 shadow-sm"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Chia sẻ
                    </button>
                </div>

                <p className="text-base md:text-lg text-gray-600 border-l-4 border-primary pl-4 md:pl-6 py-2 italic mb-8">
                    {article.excerpt}
                </p>

                <div className="aspect-[16/9] w-full bg-gray-200 rounded-xl overflow-hidden mb-10 shadow-md">
                    <ImageWithFallback alt={article.title} className="w-full h-full object-cover" src={article.featuredImage} showLightbox />
                </div>
            </header>

            {/* Article Content — full width, no sidebar */}
            <main className="max-w-[860px] mx-auto px-4 md:px-6 mb-20">
                <div
                    className="prose prose-lg max-w-none text-base md:text-lg text-gray-700 leading-relaxed
                        prose-headings:font-bold prose-headings:text-gray-900
                        prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                        prose-img:rounded-xl prose-img:shadow-md prose-img:w-full
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-primary prose-blockquote:not-italic prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
                        prose-pre:rounded-xl prose-pre:text-sm
                        prose-table:text-sm"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-bold text-gray-900">Bài viết hữu ích? Hãy chia sẻ cho mọi người!</p>
                    <button
                        onClick={handleShareFacebook}
                        className="flex h-10 items-center justify-center rounded-lg bg-[#1877F2] hover:bg-[#1864D9] transition-colors px-6 text-white text-sm font-bold gap-2 shadow-md w-full sm:w-auto"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Chia sẻ lên Facebook
                    </button>
                </div>
            </main>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-20 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl md:text-2xl font-bold tracking-normal text-primary">Bài viết liên quan</h2>
                        <Link className="text-primary font-bold flex items-center gap-1 hover:underline text-sm" to="/tin-tuc">
                            Xem tất cả <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                        {relatedArticles.map((post, idx) => (
                            <Link key={idx} to={`/tin-tuc/${post.slug}`} className="group cursor-pointer">
                                <div className="aspect-video rounded-xl overflow-hidden mb-3 shadow-sm border border-gray-100">
                                    <img alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.featuredImage} />
                                </div>
                                <span className="text-[11px] font-bold text-primary/70 uppercase tracking-widest mb-1 block">{post.category}</span>
                                <h3 className="font-bold text-base md:text-lg mb-1.5 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                                <p className="text-xs text-gray-400 mt-2">{formatDate(post.createdAt)}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ArticleDetailPage;
