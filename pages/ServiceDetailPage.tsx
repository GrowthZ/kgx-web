import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesService, Service } from '../src/services/servicesService';
import ImageWithFallback from '../components/ImageWithFallback';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            fetchServiceData();
        }
    }, [slug]);

    const fetchServiceData = async () => {
        try {
            setLoading(true);
            const data = await servicesService.getServiceBySlug(slug!);
            setService(data);
            if (data) {
                window.scrollTo(0, 0);
                document.title = `${data.title} - KGX Landscape`;
            }
        } catch (error) {
            console.error('Error fetching service:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light">
                <div className="size-16 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải dịch vụ...</p>
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background-light px-6 text-center">
                <h2 className="text-2xl font-bold text-olive mb-4">Không tìm thấy dịch vụ</h2>
                <Link to="/dich-vu" className="text-primary font-bold hover:underline">Quay lại danh sách dịch vụ</Link>
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="w-full py-12 lg:py-16">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                            <Link className="text-text-muted hover:text-primary" to="/">Trang chủ</Link>
                            <span className="text-text-muted">/</span>
                            <Link className="text-text-muted hover:text-primary" to="/dich-vu">Dịch vụ</Link>
                            <span className="text-text-muted">/</span>
                            <span className="text-primary font-medium">{service.title}</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-text-main leading-tight tracking-tight uppercase">
                                    {service.title}
                                </h1>
                                <p className="text-lg text-text-muted leading-relaxed max-w-lg">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-soft flex items-center gap-2">
                                        <span>Tư vấn dịch vụ này</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-8 rounded-lg border-2 border-[#eef0ea] text-text-main font-bold text-base hover:border-secondary hover:text-secondary transition-all bg-white">
                                        Gọi 0868 462 462
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-gray-100">
                                    <div className="flex -space-x-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop')" }}></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop')" }}></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop')" }}></div>
                                    </div>
                                    <p className="text-sm font-medium text-text-main"><span className="text-primary font-bold">150+</span> Dự án đã hoàn thiện</p>
                                </div>
                            </div>
                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                                    <ImageWithFallback isBackground className="w-full h-full transition-transform duration-700 hover:scale-105" src={service.image} alt={service.title} />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider">Thi công thực tế</p>
                                        <p className="text-sm font-semibold text-text-main">Chất lượng KGX Landscape</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Suitability Section - Static for now as it's common */}
                <section className="w-full py-10 bg-surface border-y border-[#eef0ea]">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <h2 className="text-xl font-bold text-text-main mb-6 uppercase tracking-tight">Dịch vụ phù hợp với</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: 'villa', title: 'Biệt thự (Villa)', desc: 'Không gian sống đẳng cấp, riêng tư.' },
                                { icon: 'deck', title: 'Khu nghỉ dưỡng', desc: 'Trải nghiệm thư giãn tuyệt đối cho khách.' },
                                { icon: 'park', title: 'Cảnh quan đô thị', desc: 'Quy hoạch xanh bền vững, hiện đại.' },
                                { icon: 'domain', title: 'Doanh nghiệp', desc: 'Nâng tầm hình ảnh chuyên nghiệp.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-5 rounded-lg border border-[#eef0ea] hover:border-primary/30 hover:shadow-md transition-all flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 text-primary rounded-md">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-main text-base">{item.title}</h3>
                                        <p className="text-sm text-text-muted mt-1 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Dynamic Content Sections */}
                {service.sections?.map((section, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <section key={idx} className={`w-full py-16 lg:py-24 ${!isEven ? 'bg-surface' : 'bg-white'}`}>
                            <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                                <div className={`flex flex-col lg:flex-row gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className="flex-1">
                                        <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4 uppercase tracking-wider">
                                            {section.title}
                                        </div>
                                        {section.subtitle && (
                                            <p className="text-secondary font-bold text-sm mb-2 uppercase tracking-widest">{section.subtitle}</p>
                                        )}
                                        <h2 className="text-3xl font-bold text-text-main mb-6 uppercase tracking-tight leading-tight">
                                            {section.title}
                                        </h2>
                                        {section.description && (
                                            <p className="text-lg text-text-muted mb-8 leading-relaxed">
                                                {section.description}
                                            </p>
                                        )}

                                        {section.items && section.items.length > 0 ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex gap-4 items-start">
                                                        {item.icon && (
                                                            <div className="p-2 bg-primary/10 text-primary rounded-lg shrink-0">
                                                                <span className="material-symbols-outlined text-xl">
                                                                    {item.icon.replace(/^rn_/, '')}
                                                                </span>
                                                            </div>
                                                        )}
                                                        <div>
                                                            <h4 className="font-bold text-text-main mb-1">{item.title}</h4>
                                                            <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : section.content ? (
                                            <div className="prose prose-lg max-w-none text-text-muted mt-6"
                                                dangerouslySetInnerHTML={{ __html: section.content }} />
                                        ) : null}
                                    </div>
                                    <div className="flex-1 relative">
                                        <div className={`absolute -top-4 ${!isEven ? '-left-4' : '-right-4'} w-32 h-32 bg-secondary/10 rounded-full blur-3xl`}></div>
                                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                            <ImageWithFallback
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                                src={section.image || service.image}
                                                alt={section.title}
                                            />
                                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-lg p-5 shadow-lg border-l-4 border-primary transform transition-transform duration-500 hover:translate-y-[-5px]">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="material-symbols-outlined text-primary">verified</span>
                                                    <span className="font-bold text-text-main">Tiêu chuẩn KGX Landscape</span>
                                                </div>
                                                <p className="text-sm text-text-muted">Đảm bảo tính kỹ thuật and thẩm mỹ cao nhất trong từng công đoạn triển khai.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* Why Choose KGX - Generic */}
                <section className="w-full py-16 bg-white">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'history_edu', title: 'Kinh nghiệm dày dặn', desc: 'Hơn 10 năm kinh nghiệm trong lĩnh vực cảnh quan với hàng trăm dự án lớn nhỏ.' },
                                { icon: 'groups', title: 'Nhân công trực tiếp', desc: 'Đội ngũ thi công cơ hữu, không qua trung gian, đảm bảo chất lượng đồng nhất.' },
                                { icon: 'potted_plant', title: 'Nguồn vật liệu chuẩn', desc: 'Sở hữu vườn ươm riêng và đối tác cung ứng đá tự nhiên chất lượng cao.' },
                                { icon: 'security', title: 'Bảo hành uy tín', desc: 'Cam kết bảo hành cây xanh và công trình xây dựng lên đến 12 tháng.' }
                            ].map((feature, i) => (
                                <div key={i} className="p-6 rounded-xl bg-background-light border border-[#eef0ea] hover:border-secondary/50 transition-colors">
                                    <span className="material-symbols-outlined text-4xl text-secondary mb-4">{feature.icon}</span>
                                    <h3 className="text-lg font-bold text-text-main mb-2 uppercase text-sm tracking-wide">{feature.title}</h3>
                                    <p className="text-sm text-text-muted">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA / Contact Form */}
                <section className="w-full py-16 lg:py-24 bg-[#282a22] text-white">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                            <div className="flex-1 text-left">
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">Sẵn sàng kiến tạo <br />không gian xanh của bạn?</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Đừng ngần ngại chia sẻ ý tưởng với chúng tôi. Đội ngũ chuyên gia của KGX sẽ lắng nghe và đưa ra giải pháp phù hợp nhất với ngân sách và mong muốn của bạn.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Tư vấn nhanh</p>
                                            <p className="font-bold text-xl">0868 462 462</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Gửi yêu cầu qua email</p>
                                            <p className="font-bold text-lg">tuvan@kgxlandscape.vn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white rounded-2xl p-8 text-text-main shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 tracking-tight uppercase">Đăng ký nhận tư vấn miễn phí</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="text-left">
                                            <label className="block text-sm font-medium mb-1 text-text-main">Họ và tên</label>
                                            <input className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary h-12 px-3 text-text-main" placeholder="Nguyễn Văn A" type="text" />
                                        </div>
                                        <div className="text-left">
                                            <label className="block text-sm font-medium mb-1 text-text-main">Số điện thoại</label>
                                            <input className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary h-12 px-3 text-text-main" placeholder="09xxxxxxx" type="tel" />
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <label className="block text-sm font-medium mb-1 text-text-main">Loại dự án quan tâm</label>
                                        <select className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary h-12 px-3 text-text-main">
                                            <option>{service.title}</option>
                                            <option>Thi công sân vườn biệt thự</option>
                                            <option>Thi công hồ cá Koi</option>
                                            <option>Cảnh quan khu nghỉ dưỡng</option>
                                            <option>Bảo dưỡng cảnh quan</option>
                                        </select>
                                    </div>
                                    <div className="text-left">
                                        <label className="block text-sm font-medium mb-1 text-text-main">Lời nhắn</label>
                                        <textarea className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary px-3 py-3 h-28 resize-none text-text-main" placeholder="Mô tả sơ bộ về nhu cầu, diện tích..."></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-white font-bold h-14 rounded-md hover:bg-primary/90 transition-colors shadow-lg mt-2 uppercase tracking-wide" type="button">
                                        Gửi yêu cầu ngay
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

export default ServiceDetailPage;
