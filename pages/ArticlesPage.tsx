import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articlesService, Article } from '../src/services/articlesService';

const ArticlesPage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('Tất cả');

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const data = await articlesService.getAllArticles();
            // Only show published articles to users
            setArticles(data.filter(a => a.published));
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredArticles = articles.filter(article => {
        if (activeTab === 'Tất cả') return true;
        return article.category === activeTab;
    });

    const featuredArticle = filteredArticles[0];
    const sideArticles = filteredArticles.slice(1, 4);
    const gridArticles = filteredArticles.slice(4);

    return (
        <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display transition-colors duration-300">
            <main className="max-w-[1200px] mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-black text-charcoal dark:text-white leading-[1.1] tracking-tight">
                            Kiến thức &amp; <br /><span className="text-primary">Tin tức cảnh quan</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                            Chia sẻ kinh nghiệm thực tế về thiết kế và thi công cảnh quan, mang lại giá trị bền vững cho không gian sống của bạn. Nơi hội tụ kiến thức chuyên sâu cho chủ đầu tư và gia chủ.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        <div className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl shadow-2xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFA2058_G9sc4h34_kea3fUgu9ApiPcBS23RxZXbvKn9_ZqxfCCcoaGBgLYtO4kh2hZGr7kqxN4nmXl_IHkiW0_wWB9peISPI4eQpf0mNk8sI_LhvLdvjSk74_B3VJRVKm_1wSzJhrQThvuYL_7fD5spev6NsGQtYKTwQ0PWGDUG6OHvgHDmvSqjerNNR94-iREdlV8PKN2HLWYBf4pUeRUwNDBr28ZjcPlZuBBPgM4uZv0WhddTwRv0K3mwXhRpWz1pyF9hvi4CY')" }}>
                        </div>
                    </div>
                </section>

                {/* Filter Tabs */}
                <div className="sticky top-20 z-40 bg-background-light dark:bg-background-dark py-4 mb-12 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {['Tất cả', 'Tin tức', 'Kiến thức', 'Xu hướng', 'Dự án'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary dark:text-gray-400'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                        <div className="size-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                        <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải bài viết...</p>
                    </div>
                ) : articles.length === 0 ? (
                    <div className="py-20 text-center text-slate-400">Chưa có bài viết nào được đăng.</div>
                ) : (
                    <>
                        {/* Highlight Section */}
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            Bài viết mới nhất
                        </h2>
                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                            {/* Large Featured Card */}
                            {featuredArticle && (
                                <Link to={`/tin-tuc/${featuredArticle.slug}`} className="lg:col-span-2 group">
                                    <div className="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col cursor-pointer">
                                        <div className="aspect-video bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url('${featuredArticle.featuredImage}')` }}>
                                        </div>
                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex gap-3 mb-4">
                                                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{featuredArticle.category}</span>
                                                <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-xs">calendar_today</span>
                                                    {featuredArticle.publishedAt ? new Date(featuredArticle.publishedAt.seconds * 1000).toLocaleDateString('vi-VN') : ''}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors uppercase">{featuredArticle.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                                {featuredArticle.excerpt}
                                            </p>
                                            <div className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Xem chi tiết <span className="material-symbols-outlined">chevron_right</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}
                            {/* Sidebar Small Cards */}
                            <div className="flex flex-col gap-6">
                                {sideArticles.map((item, idx) => (
                                    <Link key={idx} to={`/tin-tuc/${item.slug}`} className="group flex gap-4 items-start bg-white dark:bg-charcoal p-4 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
                                        <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${item.featuredImage}')` }}></div>
                                        <div>
                                            <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2 uppercase">{item.title}</h4>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">{item.category}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Main Article Grid */}
                        {gridArticles.length > 0 && (
                            <>
                                <h2 className="text-2xl font-bold mb-8">Các bài viết khác</h2>
                                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                                    {gridArticles.map((post, idx) => (
                                        <Link key={idx} to={`/tin-tuc/${post.slug}`} className="group bg-white dark:bg-charcoal rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 cursor-pointer">
                                            <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url('${post.featuredImage}')` }}></div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-center mb-3">
                                                    <span className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2 py-1 rounded">{post.category}</span>
                                                    <span className="text-[11px] text-gray-400">
                                                        {post.publishedAt ? new Date(post.publishedAt.seconds * 1000).toLocaleDateString('vi-VN') : ''}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors uppercase">{post.title}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                                                <span className="text-sm font-bold text-primary inline-flex items-center gap-1 hover:underline">Xem chi tiết <span className="material-symbols-outlined text-xs">open_in_new</span></span>
                                            </div>
                                        </Link>
                                    ))}
                                </section>
                            </>
                        )}
                    </>
                )}
            </main>
        </div>
    );
};

export default ArticlesPage;
