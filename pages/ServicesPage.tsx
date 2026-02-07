import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesService, Service } from '../src/services/servicesService';

const ServicesPage: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const data = await servicesService.getAllServices();
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };

    const designServices = services.filter(s => s.category === 'thiet-ke');
    const constructionServices = services.filter(s => s.category === 'thi-cong');

    return (
        <div className="bg-white text-[#2F3E28] font-display antialiased overflow-x-hidden">
            <main className="flex flex-col w-full">
                {/* Hero Section */}
                <section className="relative bg-[#f7f9f5] py-16 lg:py-24 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f2f7ed] skew-x-12 translate-x-32 z-0 opacity-50"></div>
                    <div className="container mx-auto px-4 md:px-10 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#dde8ce] w-fit shadow-sm">
                                <span className="size-2 rounded-full bg-[#84da0b] animate-pulse"></span>
                                <span className="text-xs font-bold text-[#2F3E28] tracking-wider ">Đối tác cảnh quan tin cậy</span>
                            </div>
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.8] text-[#2F3E28] tracking-normal">
                                KGX – Thiết kế & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84da0b] to-[#4A5D41]">Thi công Cảnh quan</span> Trọn Gói
                            </h1>
                            <p className="text-lg text-[#2F3E28]/70 font-medium leading-relaxed max-w-lg">
                                Chuyên nghiệp - Tận tâm - Sáng tạo. Chúng tôi mang đến giải pháp không gian sống xanh đẳng cấp, bền vững cho ngôi nhà và dự án của bạn.
                            </p>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center gap-3 text-[#2F3E28] font-semibold">
                                    <span className="material-symbols-outlined text-[#84da0b]">check_circle</span>
                                    Thi công giống thiết kế 3D đến 99%
                                </li>
                                <li className="flex items-center gap-3 text-[#2F3E28] font-semibold">
                                    <span className="material-symbols-outlined text-[#84da0b]">check_circle</span>
                                    Bảo hành cây xanh dài hạn & tận tâm
                                </li>
                                <li className="flex items-center gap-3 text-[#2F3E28] font-semibold">
                                    <span className="material-symbols-outlined text-[#84da0b]">check_circle</span>
                                    Minh bạch chi phí, không phát sinh
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button className="h-12 px-8 rounded-xl bg-[#84da0b] hover:bg-[#6cb309] text-white font-bold text-base shadow-lg shadow-[#84da0b]/30 transition-all flex items-center gap-2">
                                    Nhận báo giá
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                                <Link to="/du-an" className="h-12 px-8 rounded-xl bg-white border border-[#dde8ce] text-[#2F3E28] font-bold text-base hover:bg-gray-50 transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined">grid_view</span>
                                    Xem dự án
                                </Link>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                                        <img alt="Landscape garden design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtruZZe5E9qOuY8VA_OD3MbkaBpl07HN7HB6plccajlO82GeIYXvPJVo-j58NB9AlCGqj1g6d6Ag0sMb4AZtKkxgu1QOM927eLGGkx-dCbEiEn3VQ8XQBdGeLWJXkCz4JTdmFg-nhXb64JRMjjQWE5K_CoQcAp18x5SE-gY7t4IgLuUCw4ETu-8V2JzhCqzsa1n-8U4Nyyg5wnsOhGXughX1UQIgnkw_ueIqTcKmEEwOfRcGBzvM2KkreNcAyZJN65xRVTkUih-8c" />
                                    </div>
                                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                                        <img alt="Detail landscape element" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9LLNw_gJiFTvsKNAdy4PrNKQPKYV2QWB87gw5smyDJW7Ole_QbgHWkvM8c1KGEjBEnc8IJykQ_NBnJctyGI7ezWocQRVjbnzPcu2N4kmDpYxciIndkJYzBVDy3KSWdRq064mlxUXnfM0PWRvg7Yq6bhQDb5XnDhnb-um1GNIuBHirb_wtNfM61LdFTLPQS70d2qdhtpItBVv8V2HSPPMT2n1fv3t12QoAyuhiViYr0g89CvSeULmuwfQMrr7MApZo0HtgxYBYxSw" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                                        <img alt="Pool landscape" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBucw8W_ydtZfvKMOV89FfmqBQhdW31vnp6VglFKr_zT1u-p4GdpeoU1Ef-HLUIrduoYMTqFzKJG5uAQFp1APpMj52HXKG3znaYKsTteayk6t_UbR8xSZLSbVcwVYe2jnwqf1HE_QpfP9OEQLAltuplODBc-j06jwzI54UAPitArCoEv4DhJGVuh0DYxn8_534lHzc_OMk0epekjL1OHvnYBx3IuxLqzPolrU_ehKOusQBsj2KQaEFf00TqX_paU7zvAkAHX85VOpg" />
                                    </div>
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                                        <img alt="Construction process" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYHqKnLB5ak_oy9mpLdwMqg2VmnbCcqO4PkRW9UsfQfeWC0vvqOXqhXqUN0EOQWILLFmm0IVgY8LWFl9Q3uJnzSbDtlIslN7gQKm6uRplTkEoB4POXDL_O6NxctV0C1WEzCz5MNN8bZP_PCE5GUtWrHcYTmbAO5vXJC3dr0WlPeH-kLDXjJFG0BbqSk4hvYiLhQ9dbScxPoW6TDgInDC8doJwBr2t3zTyIQ_v84ai0LGOeuT2DJxnFLzz-9GSPOkOHs9EsW_yLQps" />
                                    </div>
                                </div>
                            </div>
                            {/* Floating badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white flex flex-col items-center text-center">
                                <span className="text-3xl font-black text-[#84da0b]">10+</span>
                                <span className="text-xs font-bold text-[#2F3E28]  mt-1">Năm kinh nghiệm</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className="border-y border-[#dde8ce] bg-white">
                    <div className="container mx-auto px-4 md:px-10 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: 'chat', label: 'Tư vấn rõ ràng', sub: 'Giải pháp tối ưu nhất' },
                                { icon: 'architecture', label: 'Thi công chuẩn', sub: 'Cam kết giống 3D 100%' },
                                { icon: 'payments', label: 'Minh bạch chi phí', sub: 'Không phát sinh' },
                                { icon: 'verified_user', label: 'Bảo hành dài hạn', sub: 'Hỗ trợ trọn đời' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    <div className="size-12 rounded-full bg-[#f2f7ed] flex items-center justify-center text-[#84da0b] group-hover:bg-[#84da0b] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#2F3E28] text-sm md:text-base">{item.label}</h3>
                                        <p className="text-xs text-[#2F3E28]/60">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                        <div className="size-12 border-4 border-slate-100 border-t-[#84da0b] rounded-full animate-spin"></div>
                        <p className="text-slate-400 font-bold text-sm mt-4  tracking-widest">Đang tải dịch vụ...</p>
                    </div>
                ) : (
                    <>
                        {/* Design Services Section */}
                        <section className="py-20 bg-white">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                                    <div>
                                        <span className="text-[#84da0b] font-bold  tracking-widest text-sm">Lĩnh vực hoạt động</span>
                                        <h2 className="text-2xl md:text-3xl font-black text-[#2F3E28] mt-2">Dịch vụ Thiết kế</h2>
                                    </div>
                                </div>
                                <div className="grid lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {designServices.map((service, idx) => (
                                            <Link key={idx} to={`/dich-vu/thiet-ke/${service.slug}`} className="group bg-white p-6 rounded-xl border border-[#eef4e7] hover:border-[#84da0b] hover:shadow-lg transition-all cursor-pointer">
                                                <div className="size-14 rounded-2xl overflow-hidden mb-4 border border-[#eef4e7]">
                                                    <img src={service.image} className="size-full object-cover group-hover:scale-110 transition-transform duration-500" alt={service.title} />
                                                </div>
                                                <h3 className="text-xl font-bold text-[#2F3E28] mb-2 group-hover:text-[#84da0b] transition-colors ">{service.title}</h3>
                                                <p className="text-sm text-[#2F3E28]/60 line-clamp-3">{service.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Construction Services Section */}
                        <section className="py-20 bg-[#2F3E28] text-white relative">
                            <div className="container mx-auto px-4 md:px-10">
                                <div className="text-center mb-16 max-w-3xl mx-auto">
                                    <span className="text-[#84da0b] font-bold  tracking-widest text-sm">Chất lượng hàng đầu</span>
                                    <h2 className="text-2xl md:text-3xl font-black mt-2 mb-4 ">Dịch vụ Thi công Chuyên nghiệp</h2>
                                    <p className="text-white/70">Đội ngũ kỹ sư, nghệ nhân lành nghề cùng trang thiết bị hiện đại, cam kết mang lại công trình chất lượng và thẩm mỹ cao nhất.</p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {constructionServices.map((item, idx) => (
                                        <Link key={idx} to={`/dich-vu/thi-cong/${item.slug}`} className="group relative h-72 rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#84da0b] transition-all">
                                            <img alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src={item.image} />
                                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                                <h3 className="text-xl font-bold mb-1  tracking-normal">{item.title}</h3>
                                                <p className="text-sm text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all line-clamp-2">{item.description}</p>
                                                <div className="absolute top-4 right-4 bg-[#84da0b] p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-white">construction</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                )}
                <section className="py-20 bg-[#f7f9f5]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="text-center mb-16">
                            <span className="text-[#84da0b] font-bold  tracking-widest text-sm">Quy trình làm việc</span>
                            <h2 className="text-2xl md:text-3xl font-black text-[#2F3E28] mt-2">6 Bước Triển Khai Chuyên Nghiệp</h2>
                        </div>
                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                                {[
                                    { n: 1, title: 'Tiếp nhận', sub: 'Thông tin & yêu cầu' },
                                    { n: 2, title: 'Khảo sát', sub: 'Hiện trạng thực tế' },
                                    { n: 3, title: 'Thiết kế', sub: 'Concept & 3D' },
                                    { n: 4, title: 'Báo giá', sub: 'Chi tiết & Hợp đồng' },
                                    { n: 5, title: 'Thi công', sub: 'Giám sát chặt chẽ' },
                                    { n: 6, title: 'Bảo hành', sub: 'Chăm sóc sau bán' }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-center group">
                                        <div className="size-16 rounded-full bg-white border-4 border-[#eef4e7] group-hover:border-[#84da0b] flex items-center justify-center text-[#2F3E28] font-bold text-xl shadow-sm mb-4 transition-colors z-10 relative">
                                            {step.n}
                                        </div>
                                        <h3 className="font-bold text-[#2F3E28] mb-2">{step.title}</h3>
                                        <p className="text-xs text-[#2F3E28]/60">{step.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-[#f7f9f5]">
                    <div className="container mx-auto px-4 md:px-10 max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-black text-[#2F3E28]">Câu hỏi thường gặp</h2>
                            <p className="text-[#2F3E28]/60 mt-2">Giải đáp những thắc mắc phổ biến của khách hàng về dịch vụ của KGX</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: 'Chi phí thiết kế cảnh quan được tính như thế nào?', a: 'Chi phí thiết kế thường được tính theo m2 diện tích thiết kế, dao động tùy thuộc vào độ phức tạp và phong cách yêu cầu. Với các dự án thi công trọn gói, KGX thường có chính sách ưu đãi hoặc miễn phí thiết kế.' },
                                { q: 'Thời gian thi công một sân vườn biệt thự mất bao lâu?', a: 'Thời gian thi công phụ thuộc vào quy mô và hạng mục công việc. Thông thường, một sân vườn biệt thự từ 100-300m2 sẽ mất khoảng 15-25 ngày để hoàn thiện phần cứng và trồng cây.' },
                                { q: 'Chế độ bảo hành cây xanh của KGX như thế nào?', a: 'Chúng tôi bảo hành cây xanh từ 1-3 tháng tùy loại cây và điều kiện chăm sóc. Đối với cây bóng mát lớn, thời gian bảo hành có thể lên đến 6 tháng. KGX cũng cung cấp gói dịch vụ chăm sóc định kỳ sau bảo hành.' },
                                { q: 'KGX có nhận thi công ở các tỉnh xa không?', a: 'Có, KGX hoạt động trên toàn quốc. Chúng tôi có trụ sở tại Thái Nguyên và các đội ngũ thi công lưu động sẵn sàng phục vụ các dự án ở các tỉnh thành lân cận và cả nước.' }
                            ].map((faq, idx) => (
                                <div key={idx} className="bg-white rounded-xl p-6 border border-[#dde8ce] shadow-sm">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-bold text-[#2F3E28] cursor-pointer list-none">
                                            <span>{faq.q}</span>
                                            <span className="transition group-open:rotate-180">
                                                <span className="material-symbols-outlined">expand_more</span>
                                            </span>
                                        </summary>
                                        <div className="text-[#2F3E28]/70 text-sm mt-3 group-open:animate-fadeIn leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="bg-[#2F3E28] rounded-3xl p-8 lg:p-12 text-white relative shadow-2xl overflow-hidden">
                            <div className="absolute -top-24 -right-24 size-64 bg-[#84da0b]/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-24 -left-24 size-64 bg-[#84da0b]/20 rounded-full blur-3xl"></div>
                            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <span className="text-[#84da0b] font-bold  tracking-widest text-sm">Liên hệ ngay</span>
                                    <h2 className="text-2xl md:text-3xl font-black mt-2 mb-6">Đăng ký tư vấn miễn phí</h2>
                                    <p className="text-white/80 mb-8 leading-relaxed">
                                        Để lại thông tin dự án của bạn, đội ngũ chuyên gia của KGX sẽ liên hệ tư vấn giải pháp và báo giá sơ bộ trong vòng 24h.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[#84da0b]">location_on</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Trụ sở chính</h4>
                                                <p className="text-white/70 text-sm">TP. Thái Nguyên, Tỉnh Thái Nguyên, Việt Nam</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[#84da0b]">call</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Hotline 24/7</h4>
                                                <p className="text-[#F2994A] font-bold text-xl">0868 462 462</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-[#84da0b]">mail</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Email</h4>
                                                <p className="text-white/70 text-sm">contact@kgxlandscape.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 lg:p-8 text-[#2F3E28]">
                                    <h3 className="font-bold text-xl mb-6">Thông tin dự án</h3>
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold  text-[#2F3E28]/60">Họ và tên</label>
                                                <input className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none transition-all" placeholder="Nhập họ tên" type="text" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold  text-[#2F3E28]/60">Số điện thoại</label>
                                                <input className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none transition-all" placeholder="Nhập SĐT" type="tel" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold  text-[#2F3E28]/60">Loại dự án</label>
                                                <select className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none transition-all">
                                                    <option>Biệt thự sân vườn</option>
                                                    <option>Resort / Khách sạn</option>
                                                    <option>Hồ cá Koi</option>
                                                    <option>Khác</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-semibold  text-[#2F3E28]/60">Khu vực</label>
                                                <select className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none transition-all">
                                                    <option>Miền Bắc</option>
                                                    <option>Miền Trung</option>
                                                    <option>Miền Nam</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold  text-[#2F3E28]/60">Ghi chú thêm</label>
                                            <textarea className="w-full p-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none transition-all h-24 resize-none" placeholder="Mô tả sơ bộ về yêu cầu của bạn..."></textarea>
                                        </div>
                                        <button className="w-full h-12 bg-[#84da0b] hover:bg-[#6cb309] text-white font-bold rounded-lg shadow-lg shadow-[#84da0b]/30 transition-all mt-2" type="button">
                                            Gửi thông tin
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServicesPage;
