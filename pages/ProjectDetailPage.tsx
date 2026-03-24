import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsService, Project } from '../src/services/projectsService';
import ImageWithFallback from '../components/ImageWithFallback';
import SEO from '../src/components/SEO';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProjectDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    useEffect(() => {
        if (slug) {
            fetchProject();
        }
    }, [slug]);

    const fetchProject = async () => {
        try {
            setLoading(true);
            const data = await projectsService.getProjectBySlug(slug!);
            setProject(data);
        } catch (error) {
            console.error('Error fetching project:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleShareFacebook = () => {
        let url = window.location.href;
        if (url.includes('localhost') || url.includes('127.0.0.1')) {
            url = url.replace(/https?:\/\/(localhost|127\.0\.0\.1):\d+/, 'https://kgxvn.vn');
        }
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=400');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light">
                <div className="size-16 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-slate-400 font-bold text-sm mt-4  tracking-widest">Đang tải thông tin dự án...</p>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light">
                <h2 className="text-2xl font-bold text-olive mb-4">Không tìm thấy dự án</h2>
                <Link to="/du-an" className="text-primary font-bold hover:underline">Quay lại danh sách dự án</Link>
            </div>
        );
    }

    const allImages = [project.image, ...(project.images || [])].filter(Boolean);

    // Prepare text for SEO - strip HTML tags from description if needed, and truncate
    const plainDescription = project.description ? project.description.replace(/<[^>]+>/g, '').substring(0, 155) + '...' : "";
    const seoDesc = project.seoDescription || plainDescription;

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
            <SEO
                title={project.title}
                description={seoDesc}
                image={project.image}
                type="article"
            />
            <main className="w-full flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full max-w-[1280px] px-5 xl:px-20 py-10 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap gap-2 text-sm font-medium">
                                <Link className="text-text-light hover:text-primary" to="/">Trang chủ</Link>
                                <span className="text-text-light">/</span>
                                <Link className="text-text-light hover:text-primary" to="/du-an">Dự án</Link>
                                <span className="text-text-light">/</span>
                                <span className="text-olive font-semibold">{project.title}</span>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-3xl lg:text-4xl font-black text-olive leading-relaxed md:leading-loose tracking-normal ">
                                    {project.title}
                                </h1>
                                <div
                                    className="text-lg lg:text-xl text-text-light font-normal max-w-[500px] prose prose-slate"
                                    dangerouslySetInnerHTML={{ __html: project.description || '' }}
                                />
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <a href="#images" className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
                                    <span>Xem thư viện ảnh</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </a>
                                <Link to="/lien-he" className="bg-white flex items-center justify-center border-2 border-[#eef4e7] hover:border-primary text-olive font-bold px-8 py-3.5 rounded-xl transition-all hover:bg-[#fafcf8]">
                                    Tư vấn ngay
                                </Link>
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer" onClick={() => setLightboxIndex(0)}>
                                <ImageWithFallback isBackground className="w-full h-full transition-transform duration-700 hover:scale-105" src={project.image} alt={project.title} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Facts */}
                <section className="w-full bg-[#f2f7ec] border-y border-[#deecd0]">
                    <div className="max-w-[1280px] mx-auto px-5 xl:px-20 py-8 space-y-0">
                        {/* Row 1: Khách hàng + Địa điểm */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x-2 divide-[#deecd0] border-b-2 border-[#deecd0]">
                            <div className="flex items-center gap-4 py-5 sm:pr-8">
                                <span className="inline-flex items-center justify-center size-9 rounded-full bg-white border border-[#deecd0] text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[18px]">person</span>
                                </span>
                                <div>
                                    <p className="text-text-light text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5">Khách hàng</p>
                                    <p className="text-olive font-bold leading-snug">{project.client || '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 py-5 sm:pl-8">
                                <span className="inline-flex items-center justify-center size-9 rounded-full bg-white border border-[#deecd0] text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                </span>
                                <div>
                                    <p className="text-text-light text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5">Địa điểm</p>
                                    <p className="text-olive font-bold leading-snug">{project.location || '—'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Hạng mục + Quy mô + Thời gian */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x-2 divide-[#deecd0]">
                            <div className="flex items-center gap-4 py-5 sm:pr-8">
                                <span className="inline-flex items-center justify-center size-9 rounded-full bg-white border border-[#deecd0] text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[18px]">yard</span>
                                </span>
                                <div>
                                    <p className="text-text-light text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5">Hạng mục</p>
                                    <p className="text-olive font-bold leading-snug">{project.displayCategory || project.category || '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 py-5 sm:px-8">
                                <span className="inline-flex items-center justify-center size-9 rounded-full bg-white border border-[#deecd0] text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[18px]">square_foot</span>
                                </span>
                                <div>
                                    <p className="text-text-light text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5">Quy mô</p>
                                    <p className="text-olive font-bold leading-snug">{project.area || project.scale || '—'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 py-5 sm:pl-8">
                                <span className="inline-flex items-center justify-center size-9 rounded-full bg-white border border-[#deecd0] text-primary shrink-0">
                                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                                </span>
                                <div>
                                    <p className="text-text-light text-[10px] font-bold uppercase tracking-[0.12em] mb-0.5">Thời gian</p>
                                    <p className="text-olive font-bold leading-snug">{project.year || project.completionTime || '—'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="w-full max-w-[800px] mx-auto px-5 prose prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </section>

                {/* Video Embed: YouTube or Facebook */}
                {project.youtubeUrl && (() => {
                    const url = project.youtubeUrl!;
                    const isFacebook = /facebook\.com|fb\.watch/.test(url);
                    const isYoutube = /youtu\.be|youtube\.com/.test(url);

                    let embedSrc = url;
                    if (isYoutube) {
                        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([-\w]{11})/);
                        const videoId = match ? match[1] : '';
                        embedSrc = videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : url;
                    } else if (isFacebook) {
                        embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&mute=0`;
                    }

                    return (
                        <section className="w-full max-w-[1280px] mx-auto px-5 xl:px-20 py-12 space-y-6">
                            <h2 className="text-olive text-2xl font-bold border-b border-[#eef4e7] pb-4 flex items-center gap-3">
                                <span className={`inline-flex items-center justify-center size-10 rounded-full ${isFacebook ? 'bg-blue-100 text-[#1877F2]' : 'bg-red-100 text-red-600'}`}>
                                    {isFacebook ? (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg>
                                    )}
                                </span>
                                Video dự án
                            </h2>
                            <div className={`relative w-full rounded-2xl overflow-hidden shadow-xl bg-black ${isFacebook ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'}`}>
                                <iframe
                                    src={embedSrc}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    scrolling="no"
                                    title={`Video: ${project.title}`}
                                />
                            </div>
                        </section>
                    );
                })()}

                {/* Gallery */}
                <section id="images" className="w-full max-w-[1280px] mx-auto px-5 xl:px-20 py-16 lg:py-24 space-y-8">
                    <h2 className="text-olive text-2xl font-bold border-b border-[#eef4e7] pb-4">Hình ảnh dự án</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        {project.images && project.images.map((img, idx) => (
                            <div key={idx} onClick={() => setLightboxIndex(idx + 1)} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative cursor-pointer">
                                <ImageWithFallback src={img} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`${project.title} - ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-[#eef4e7] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="font-bold text-olive">Bạn thích dự án này? Hãy chia sẻ cho mọi người!</p>
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
                </section>

                {/* CTA & Form Section */}
                <section className="w-full bg-[#f2f7ec] py-16 lg:py-20">
                    <div className="max-w-[1280px] mx-auto px-5 xl:px-20 text-center">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl max-w-3xl mx-auto flex flex-col items-center">
                            <span className="text-primary font-bold tracking-wider text-sm mb-2 ">Liên hệ với chúng tôi</span>
                            <h2 className="text-2xl lg:text-3xl font-black text-olive mb-6 leading-relaxed md:leading-loose">Nhận tư vấn cho dự án tương tự?</h2>
                            <p className="text-text-light text-lg mb-8 max-w-xl text-center">
                                Để lại thông tin, kiến trúc sư của KGX sẽ liên hệ tư vấn giải pháp thiết kế &amp; thi công cảnh quan tối ưu nhất cho ngôi nhà của bạn.
                            </p>
                            <Link to="/lien-he" className="h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold text-base rounded-xl transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-1 transform">
                                Đăng ký tư vấn ngay
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <Lightbox
                    index={lightboxIndex}
                    open={lightboxIndex >= 0}
                    close={() => setLightboxIndex(-1)}
                    slides={allImages.map((img) => ({ src: img }))}
                />
            </main>
        </div>
    );
};

export default ProjectDetailPage;
