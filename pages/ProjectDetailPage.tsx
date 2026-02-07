import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsService, Project } from '../src/services/projectsService';
import ImageWithFallback from '../components/ImageWithFallback';

const ProjectDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

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
                                <h1 className="text-3xl lg:text-4xl font-black text-olive leading-[1.8] tracking-normal ">
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
                                <button className="bg-white border-2 border-[#eef4e7] hover:border-primary text-olive font-bold px-8 py-3.5 rounded-xl transition-all hover:bg-[#fafcf8]">
                                    Tư vấn ngay
                                </button>
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
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
                            <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                                <ImageWithFallback src={img} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`${project.title} - ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA & Form Section */}
                <section className="w-full bg-[#f2f7ec] py-16 lg:py-20">
                    <div className="max-w-[1280px] mx-auto px-5 xl:px-20">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row gap-12 lg:gap-20">
                            <div className="flex-1 flex flex-col justify-center">
                                <span className="text-primary font-bold tracking-wider text-sm mb-2 ">Liên hệ với chúng tôi</span>
                                <h2 className="text-2xl lg:text-3xl font-black text-olive mb-6 leading-[1.8]">Nhận tư vấn cho dự án tương tự?</h2>
                                <p className="text-text-light text-lg mb-8">
                                    Để lại thông tin, kiến trúc sư của KGX sẽ liên hệ tư vấn giải pháp thiết kế &amp; thi công cảnh quan tối ưu nhất cho ngôi nhà của bạn.
                                </p>
                            </div>
                            <div className="flex-1 max-w-lg">
                                <form className="flex flex-col gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Họ và tên</label>
                                        <input className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Nhập họ tên của bạn" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Số điện thoại</label>
                                        <input className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Nhập số điện thoại" type="tel" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Nội dung tư vấn</label>
                                        <textarea className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Mô tả sơ bộ nhu cầu của bạn..."></textarea>
                                    </div>
                                    <button className="mt-2 w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2" type="button">
                                        Gửi yêu cầu tư vấn
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProjectDetailPage;
