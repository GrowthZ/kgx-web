import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articlesService, Article } from '../src/services/articlesService';

const ArticleDetailPage: React.FC = () => {
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
                // Fetch related articles (same category, different slug)
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

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light">
                <div className="size-16 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải bài viết...</p>
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
        <div className="bg-background-light dark:bg-background-dark text-[#151b0e] font-display min-h-screen pb-20">
            {/* Hero Section */}
            <header className="max-w-[1200px] mx-auto pt-12 px-6">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap gap-2 text-sm font-medium mb-6">
                    <Link className="text-gray-500 hover:text-primary" to="/">Trang chủ</Link>
                    <span className="text-gray-400">/</span>
                    <Link className="text-gray-500 hover:text-primary" to="/tin-tuc">Tin tức</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-primary uppercase">{article.category}</span>
                </nav>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl text-gray-900 dark:text-white uppercase">
                    {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                    <div className="flex h-9 items-center rounded-full bg-primary/10 px-4 text-primary text-sm font-semibold uppercase">
                        {article.category}
                    </div>
                    <div className="flex h-9 items-center rounded-full bg-gray-100 px-4 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm mr-2">calendar_today</span>
                        {article.createdAt instanceof Date ? article.createdAt.toLocaleDateString('vi-VN') : new Date(article.createdAt).toLocaleDateString('vi-VN')}
                    </div>
                    <div className="flex h-9 items-center rounded-full bg-gray-100 px-4 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm mr-2">person</span>
                        Tác giả: {article.author || 'KGX'}
                    </div>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 border-l-4 border-primary pl-6 py-2 italic mb-10">
                    {article.excerpt}
                </p>
                <div className="aspect-[21/9] w-full bg-gray-200 rounded-xl overflow-hidden mb-12 shadow-lg">
                    <img alt={article.title} className="w-full h-full object-cover" src={article.featuredImage} />
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-12 mb-20">
                <article className="col-span-12 lg:col-span-8">
                    <div className="prose prose-lg max-w-none text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: article.content }} />
                </article>

                {/* Sidebar */}
                <aside className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">trending_up</span>
                            Tin mới nhất
                        </h4>
                        <div className="space-y-4">
                            {relatedArticles.map((item, idx) => (
                                <div key={idx}>
                                    <Link className="block group" to={`/tin-tuc/${item.slug}`}>
                                        <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2 uppercase">{item.title}</p>
                                        <span className="text-xs text-gray-400">
                                            {item.createdAt instanceof Date ? item.createdAt.toLocaleDateString('vi-VN') : new Date(item.createdAt).toLocaleDateString('vi-VN')}
                                        </span>
                                    </Link>
                                    {idx < relatedArticles.length - 1 && <hr className="my-4 border-gray-100 dark:border-gray-700" />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden group">
                        <img alt="Banner tư vấn" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0XdZ2e8n1fQofeTMFt5n8xPaPj00J3dYeaC6pK0ua1fKJYdv5ftyHTIEA5KztMqCENIpaLmP96T8xh3KAtJT_fF1WDtNZqI1BCcxENSya9bfXSbE-tFtHF0Awsi9i2gGcBeZ0fD4jK8dgnPUuug-8oEljPsHrvZ8mIHkS6Xm3cWtKp6mohxQ37IdhBsjIK2EZicuHPkW_PMGTPUKyn22BezMiP5_K1BT7Lf7WmtY5b9BaYxkZsSz8dlPZPfg4oprJNfDEYL0Uhi0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                            <h5 className="text-xl font-bold mb-2">Đăng ký nhận báo giá dự án nhanh nhất</h5>
                            <button className="bg-accent hover:bg-accent/90 text-white w-full py-3 rounded-lg font-bold transition-all">Gửi yêu cầu ngay</button>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
                <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-primary">Bài viết liên quan</h2>
                        <Link className="text-primary font-bold flex items-center gap-2 hover:underline" to="/tin-tuc">
                            Xem tất cả <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedArticles.map((post, idx) => (
                            <Link key={idx} to={`/tin-tuc/${post.slug}`} className="group cursor-pointer">
                                <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-100 dark:border-gray-800">
                                    <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.featuredImage} />
                                </div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors uppercase line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ArticleDetailPage;
