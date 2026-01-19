import React, { useEffect } from 'react';

const GardenConstructionPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thi công Sân vườn Biệt thự - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased">
            <main className="flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full py-12 lg:py-16 bg-white dark:bg-[#30352c]">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
                            <span className="text-text-muted dark:text-gray-400">Trang chủ</span>
                            <span className="text-text-muted dark:text-gray-400">/</span>
                            <span className="text-text-muted dark:text-gray-400">Dịch vụ</span>
                            <span className="text-text-muted dark:text-gray-400">/</span>
                            <span className="text-primary dark:text-white font-medium">Thi công sân vườn biệt thự</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-text-main dark:text-white leading-tight tracking-tight uppercase">
                                    THI CÔNG <br /><span className="text-primary dark:text-accent">SÂN VƯỜN BIỆT THỰ</span>
                                </h1>
                                <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed max-w-lg">
                                    Giải pháp cảnh quan toàn diện cho không gian sống đẳng cấp. Chúng tôi biến ý tưởng thành hiện thực với quy trình thi công chuyên nghiệp, vật liệu chọn lọc và tối ưu chi phí vận hành.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2">
                                        <span>Tư vấn dịch vụ này</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-8 rounded-lg border-2 border-primary/10 dark:border-white/10 text-text-main dark:text-white font-bold text-base hover:border-primary transition-all bg-white dark:bg-white/5">
                                        Gọi 0868 462 462
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-primary/10 dark:border-white/10">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#3a4035] bg-gray-200 overflow-hidden shadow-sm">
                                                <img
                                                    src={`https://i.pravatar.cc/150?u=kgx${i}`}
                                                    alt="Specialist"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm font-medium text-text-main dark:text-white">
                                        <span className="text-primary dark:text-accent font-bold">150+</span> Dự án đã hoàn thiện
                                    </p>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-primary/10 dark:border-white/10">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE8F_K_XwGmowgp7iB9t5Ss4VOMDqCh6AvfGiVvnQbOemcMSXY5d07YojTZVk7NJv7TQpRdco_Qv0aXIbUIVtUdw60ehS7lvSNjzuvuBhKrrH2ZNX4hejKoapSk6jaC3nikbTUmrmWWkUvk1fz7km0Tuigb1f8oT1ha1Knbr6vJSf4z-Sec_bMaljw03PD3e2zM9v2fw-Mq_BX8EoBNeh7lShXmx_rZQlsoPqqn8QU93wjWv6z_9_b202DXunQDqd2zcQKWj2mz-U"
                                        alt="Garden Construction Reality"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border-l-4 border-accent">
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider">Thi công thực tế</p>
                                        <p className="text-sm font-semibold text-text-main dark:text-white">Biệt thự Vinhomes Riverside</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Suitability Section */}
                <section className="w-full py-16 bg-background-light dark:bg-background-dark border-y border-primary/10 dark:border-white/10">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <h2 className="text-2xl font-black text-text-main dark:text-white uppercase mb-8">PHÙ HỢP VỚI NHU CẦU</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'villa', title: 'Biệt thự (Villa)', desc: 'Không gian sống đẳng cấp, riêng tư.' },
                                { icon: 'deck', title: 'Khu nghỉ dưỡng', desc: 'Trải nghiệm thư giãn tuyệt đối cho khách.' },
                                { icon: 'park', title: 'Cảnh quan đô thị', desc: 'Quy hoạch xanh bền vững, hiện đại.' },
                                { icon: 'domain', title: 'Doanh nghiệp', desc: 'Nâng tầm hình ảnh chuyên nghiệp.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-[#3a4035] p-6 rounded-2xl border border-primary/10 dark:border-white/10 hover:shadow-xl transition-all flex items-start gap-4 group">
                                    <div className="p-3 bg-primary/10 text-primary dark:bg-white/10 dark:text-white rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-main dark:text-white text-lg">{item.title}</h3>
                                        <p className="text-sm text-text-muted dark:text-gray-400 mt-1 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="w-full py-20 bg-white dark:bg-[#30352c]">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-bold mb-4 uppercase">Phạm vi công việc</div>
                                <h2 className="text-3xl font-black text-text-main dark:text-white mb-10 uppercase">Quy trình triển khai chi tiết</h2>
                                <div className="space-y-8">
                                    {[
                                        { step: 1, title: 'Khảo sát hiện trạng & Tư vấn', desc: 'Đánh giá thổ nhưỡng, hướng nắng, gió and kiến trúc tổng thể.' },
                                        { step: 2, title: 'Thiết kế & Lập dự toán', desc: 'Lên bản vẽ 2D/3D chi tiết and bảng dự toán minh bạch.' },
                                        { step: 3, title: 'Lựa chọn vật liệu & Cây xanh', desc: 'Tuyển chọn đá lát, đèn chiếu sáng and cây trồng khỏe mạnh.' },
                                        { step: 4, title: 'Thi công & Giám sát', desc: 'Đội ngũ kỹ thuật lành nghề thi công chính xác theo bản vẽ.' },
                                        { step: 5, title: 'Bàn giao & Hỗ trợ', desc: 'Hướng dẫn chăm sóc chi tiết and bảo hành dài hạn.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5 group">
                                            <div className="mt-1">
                                                <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black shadow-lg">
                                                    {item.step}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-text-muted dark:text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                                <div className="relative h-full min-h-[500px] w-full bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden border border-primary/10 dark:border-white/10">
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh61Qk53nLTq7mdYhno7YgYHUcnxUeo5dJX-dqWf5-RFz-Z8Z3uGk0ymwPruUD42HV7YEMMGHADT9Lm_AtbyaoMOuDsl088MsDXTigXvJYHZIFCWQSBnZpYj92sLWsxHHeTosanqC-hb2BNB1Ar0iysSoDAQT4GET4Mjp0XZG2vYKHv6yNqQaolG4kll630aCDk4KgmMnOUeIZDRn0NE3qrWsx_1GG0eTnz-0npXbdBZJgwl6upmgs9rz5ceAG5BVNIUJBgAYKv4Q"
                                        alt="Technical Supervision"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-black/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-l-4 border-primary">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="material-symbols-outlined text-primary font-bold">engineering</span>
                                            <span className="font-bold text-text-main dark:text-white text-lg">Tiêu chuẩn kỹ thuật cao</span>
                                        </div>
                                        <p className="text-sm text-text-muted dark:text-gray-300">Chúng tôi áp dụng các quy chuẩn xây dựng nghiêm ngặt để đảm bảo sự bền vững của hệ thống thoát nước and kết cấu cứng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="w-full py-20 bg-background-light dark:bg-background-dark border-t border-primary/10 dark:border-white/10">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: 'history_edu', title: 'Kinh nghiệm dày dặn', desc: 'Hơn 10 năm kinh nghiệm trong lĩnh vực cảnh quan.' },
                                { icon: 'groups', title: 'Nhân công trực tiếp', desc: 'Đội ngũ thi công cơ hữu, không qua trung gian.' },
                                { icon: 'potted_plant', title: 'Nguồn vật liệu chuẩn', desc: 'Sở hữu vườn ươm riêng and đối tác cung ứng uy tín.' },
                                { icon: 'security', title: 'Bảo hành uy tín', desc: 'Cam kết bảo hành cây xanh and công trình lên đến 12 tháng.' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-4 group">
                                    <div className="text-accent">
                                        <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white">{item.title}</h3>
                                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="w-full py-16 bg-[#282a22] text-white">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                            <div className="flex-1">
                                <h2 className="text-4xl font-black mb-6 leading-tight uppercase">Sẵn sàng kiến tạo <br />không gian xanh của bạn?</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Đừng ngần ngại chia sẻ ý tưởng with chúng tôi. Đội ngũ chuyên gia của KGX sẽ lắng nghe and đưa ra giải pháp phù hợp nhất with ngân sách and mong muốn của bạn.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Tư vấn nhanh</p>
                                            <p className="font-bold text-xl">0868 462 462</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Email</p>
                                            <p className="font-bold text-lg">tuvan@kgx.vn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0">
                                <button className="h-16 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-white text-lg font-black shadow-2xl transition-all transform hover:scale-105">
                                    ĐĂNG KÝ TƯ VẤN NGAY
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default GardenConstructionPage;
