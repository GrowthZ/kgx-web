import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsService, Project } from '../src/services/projectsService';
import ImageWithFallback from '../components/ImageWithFallback';
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

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
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
                                <p className="text-lg lg:text-xl text-text-light font-normal max-w-[500px]">
                                    {project.description}
                                </p>
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
                <section className="w-full bg-[#f2f7ec] py-12 border-y border-[#eef4e7]">
                    <div className="max-w-[1280px] mx-auto px-5 xl:px-20">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Địa điểm</p>
                                    <p className="text-olive text-lg font-bold leading-normal">{project.location}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">home_work</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Loại hình</p>
                                    <p className="text-olive text-lg font-bold leading-normal ">{project.category}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">yard</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Hạng mục</p>
                                    <p className="text-olive text-lg font-bold leading-normal">{project.type || 'Sân vườn & Hồ Koi'}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">square_foot</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Quy mô</p>
                                    <p className="text-olive text-lg font-bold leading-normal">{project.scale || 'Updating'}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Thời gian</p>
                                    <p className="text-olive text-lg font-bold leading-normal">{project.completionTime || 'Updating'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="w-full max-w-[800px] mx-auto px-5 py-16 prose prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </section>

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
