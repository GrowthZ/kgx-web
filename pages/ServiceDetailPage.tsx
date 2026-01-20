import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES_DATA } from '../services';
import ImageWithFallback from '../components/ImageWithFallback';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ category?: string; slug: string }>();
    const data = slug ? SERVICES_DATA[slug] : null;

    useEffect(() => {
        if (data) {
            window.scrollTo(0, 0);
            document.title = data.metaTitle;
        }
    }, [data]);

    if (!data) {
        return <Navigate to="/dich-vu" replace />;
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
                            <span className="text-primary font-medium">{data.metaTitle.split(' - ')[0]}</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-text-main leading-tight tracking-tight uppercase">
                                    {data.hero.title}
                                </h1>
                                <p className="text-lg text-text-muted leading-relaxed max-w-lg">
                                    {data.hero.description}
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-soft flex items-center gap-2">
                                        <span>{data.hero.ctaLabel || 'Tư vấn dịch vụ này'}</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-8 rounded-lg border-2 border-[#eef0ea] text-text-main font-bold text-base hover:border-secondary hover:text-secondary transition-all bg-white">
                                        Gọi 0868 462 462
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-gray-100">
                                    <div className="flex -space-x-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx3JHQHU0tQV2D13VF9czYqgpaf3DNSVwParvrCua9ThO_Q_OZgZCwi5Iq-dDHGNZdVBiY5Bq8hYK_goAHznG9R0OAFed2YvbBpYwWtB8rW-G7riCXMhSveZtDv-MyOklWduA2rLk2zJFkosKAg2ejg4jIzxrL3jfNbPx4sS_X_vxAcodBNKMvdeIoRw-VQ0s5wYLpumy3Hmi4RsUjj7NgphiHNnKBzY9mcVDV8_TIX27ephsLvqDk6PA1_kZb6rE0MPqj7TixJ74')" }}></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtliVfeFBVyMbDl4GJCtSFOIAyg10V9pCzRWnal_Ysm1M_G0Qo3eVHKB9MgF2QXrfaInNCGEOfHA4TdVfhj-KQRNzDon8PS4G-W3Up1x6nSuItIujnae6hYQDOm8mMJv7eZ3gW2vKh77adqpY984KqU6SQbPIBvu-xVBsNj-w7GqVyYneQ_ubz5UDhdznGRDJ2-oFufApXiHdh5CoVQ9vW754IxYG5mvPYiKxlE_0-itDcmdaHghaScNvqq8r6Ge91_iSHhc4DdZE')" }}></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyrxGNE692q_reJ87wKhJQ-KjQ-Dpoh5R5nrEisAhpqUW-sgEyqKH_U3eZ71wbYzSCh4eDHQvuszIi2oP6eb6g-50ZJcq-5DuT9qJOgPXbIxM1_B53T888UrvT_42q2qZmJYmHWgD1G_tPvP5jk_2uVbdc4_oZCE9sVqCO-3dbFDaXqJ4O5PFhMSoqvwGNNMlvIZriy0deR7Wwvd99T3E6dSx3nI8Q9mWv7D7aHQ3ln-OsxlPxY-DoIDnW_xLTzvwLkYFrZw0YcvA')" }}></div>
                                    </div>
                                    <p className="text-sm font-medium text-text-main"><span className="text-primary font-bold">150+</span> Dự án đã hoàn thiện</p>
                                </div>
                            </div>
                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                                    <ImageWithFallback isBackground className="w-full h-full transition-transform duration-700 hover:scale-105" src={data.hero.image} alt={data.metaTitle} />
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider">Thi công thực tế</p>
                                        <p className="text-sm font-semibold text-text-main">Chất lượng KGX Landscape</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Suitability Section - Generic mapping or fallback */}
                <section className="w-full py-10 bg-surface border-y border-[#eef0ea]">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <h2 className="text-xl font-bold text-text-main mb-6 uppercase">Phù hợp với nhu cầu</h2>
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

                {/* Data Driven Sections */}
                {data.sections.map((section, idx) => {
                    if (section.type === 'core' || section.type === 'deliverables' || section.type === 'problem') {
                        return (
                            <section key={idx} className="w-full py-16 lg:py-24">
                                <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                                    <div className={`flex flex-col lg:flex-row gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                        <div className="flex-1">
                                            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4 uppercase tracking-wider">
                                                {section.title}
                                            </div>
                                            <h2 className="text-3xl font-bold text-text-main mb-8 uppercase tracking-tight leading-tight">
                                                {section.description || 'Giải pháp triển khai chi tiết'}
                                            </h2>
                                            <div className="space-y-6">
                                                {section.items?.map((item, i) => (
                                                    <div key={i} className="flex gap-4 group">
                                                        <div className="mt-1">
                                                            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                                                                {i + 1}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors">{item.title}</h4>
                                                            <p className="text-text-muted mt-1">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-1 relative">
                                            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                                            <ImageWithFallback isBackground className="relative h-full min-h-[400px] w-full bg-cover bg-center rounded-lg shadow-xl" src={section.image || data.hero.image} alt={section.title || ''}>
                                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-lg p-5 shadow-lg border-l-4 border-primary">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="material-symbols-outlined text-primary">engineering</span>
                                                        <span className="font-bold text-text-main">Tiêu chuẩn kỹ thuật cao</span>
                                                    </div>
                                                    <p className="text-sm text-text-muted">Chúng tôi áp dụng các quy chuẩn thi công nghiêm ngặt để đảm bảo sự bền vững của công trình.</p>
                                                </div>
                                            </ImageWithFallback>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    }

                    if (section.type === 'workflow') {
                        return (
                            <section key={idx} className="w-full py-16 bg-surface">
                                <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                                    <div className="text-center mb-12">
                                        <h2 className="text-3xl font-bold text-text-main uppercase tracking-tight">{section.title || 'Quy trình làm việc'}</h2>
                                        <p className="text-text-muted mt-2">Minh bạch, rõ ràng qua các bước tiêu chuẩn</p>
                                    </div>
                                    <div className="relative">
                                        <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-[#dce1d6] -z-0"></div>
                                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
                                            {section.items?.map((item, i) => (
                                                <div key={i} className="flex flex-col items-center text-center group">
                                                    <div className={`w-16 h-16 rounded-full bg-white border-4 ${i === 0 ? 'border-primary text-primary' : 'border-[#dce1d6] text-text-muted'} flex items-center justify-center shadow-sm group-hover:border-primary group-hover:text-primary transition-all duration-300`}>
                                                        <span className="material-symbols-outlined text-2xl">
                                                            {['mail', 'location_on', 'request_quote', 'edit_document', 'construction', 'verified'][i] || 'task'}
                                                        </span>
                                                    </div>
                                                    <h5 className="mt-4 font-bold text-text-main uppercase text-sm">{i + 1}. {item.title}</h5>
                                                    <p className="text-xs text-text-muted mt-1 px-2">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    }
                    return null;
                })}

                {/* Why Choose KGX - Generic */}
                <section className="w-full py-16">
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
                            <div className="flex-1">
                                <h2 className="text-4xl font-bold mb-6 tracking-tight">Sẵn sàng kiến tạo <br />không gian xanh của bạn?</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Đừng ngần ngại chia sẻ ý tưởng với chúng tôi. Đội ngũ chuyên gia của KGX sẽ lắng nghe và đưa ra giải pháp phù hợp nhất với ngân sách và mong muốn của bạn.
                                </p>
                                <div className="flex flex-col gap-4">
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
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-text-main">Họ và tên</label>
                                            <input className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary h-12 px-3" placeholder="Nguyễn Văn A" type="text" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-text-main">Số điện thoại</label>
                                            <input className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary h-12 px-3" placeholder="09xxxxxxx" type="tel" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-text-main">Loại dự án quan tâm</label>
                                        <select className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary h-12 px-3">
                                            <option>{data.metaTitle.split(' - ')[0]}</option>
                                            <option>Thi công sân vườn biệt thự</option>
                                            <option>Thi công hồ cá Koi</option>
                                            <option>Cảnh quan khu nghỉ dưỡng</option>
                                            <option>Bảo dưỡng cảnh quan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-text-main">Lời nhắn</label>
                                        <textarea className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-primary focus:ring-primary px-3 py-3 h-28 resize-none" placeholder="Mô tả sơ bộ về nhu cầu, diện tích..."></textarea>
                                    </div>
                                    <button className="w-full bg-primary text-white font-bold h-12 rounded-md hover:bg-primary/90 transition-colors shadow-lg mt-2 uppercase tracking-wide" type="button">
                                        Gửi yêu cầu ngay
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
};

export default ServiceDetailPage;
