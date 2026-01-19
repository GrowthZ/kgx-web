import React, { useEffect } from 'react';

const RooftopGardenPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thiết kế vườn trên mái - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased">
            <main className="flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full max-w-[1200px] px-4 md:px-8 pt-16 pb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-400 mb-2 uppercase font-bold tracking-wider">
                            <span>Dịch vụ</span>
                            <span className="material-symbols-outlined text-xs">chevron_right</span>
                            <span className="text-primary dark:text-accent">Thiết kế cảnh quan</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-text-main dark:text-white leading-tight uppercase">
                            THIẾT KẾ <br /><span className="text-primary dark:text-accent">VƯỜN TRÊN MÁI</span>
                        </h1>
                        <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mt-4 leading-relaxed font-light">
                            Giải pháp kỹ thuật chuyên sâu cho không gian xanh trên cao, đảm bảo kết cấu an toàn and hệ sinh thái bền vững.
                        </p>
                    </div>
                </section>

                {/* Section 1: Challenges */}
                <section className="w-full max-w-[1200px] px-4 md:px-8 py-16">
                    <h2 className="text-2xl font-black uppercase tracking-tight mb-12 border-l-8 border-primary pl-6 dark:text-white">
                        Bài toán thách thức của vườn trên mái
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: 'crop_square', title: 'Hạn chế diện tích', desc: 'Không gian hẹp đòi hỏi sự tối ưu hóa cao độ trong bố trí.' },
                            { icon: 'water_drop', title: 'Lo ngại thấm nước', desc: 'Nguy cơ thấm dột là nỗi lo lớn nhất, cần giải pháp 5-7 lớp.' },
                            { icon: 'weight', title: 'Tải trọng mái', desc: 'Kết cấu tòa nhà cần chịu được sức nặng đất ẩm and cây lớn.' },
                            { icon: 'construction', title: 'Chi phí bảo trì', desc: 'Môi trường trên cao khắc nghiệt khiến cây dễ chết nếu sai kỹ thuật.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-[#3a4035] p-8 rounded-2xl border border-primary/10 dark:border-white/10 shadow-soft hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                                <div className="size-14 rounded-xl bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl font-bold">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Technical Principles */}
                <section className="w-full bg-white dark:bg-background-dark py-20 border-y border-primary/10 dark:border-white/10">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-12 border-l-8 border-accent pl-6 dark:text-white">
                            Nguyên tắc thiết kế kỹ thuật từ KGX
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="flex flex-col gap-8 order-2 lg:order-1">
                                <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                                    KGX tiếp cận thiết kế vườn trên mái từ góc độ kỹ thuật xây dựng trước khi tính đến thẩm mỹ, đảm bảo công trình bền vững theo thời gian.
                                </p>
                                <ul className="flex flex-col gap-6">
                                    {[
                                        { icon: 'shield', title: 'Kết cấu & Chống thấm tuyệt đối', desc: 'Sử dụng màng chống thấm chịu rễ cây and lớp bảo vệ bê tông chuyên dụng.' },
                                        { icon: 'waves', title: 'Hệ thống thoát nước 3 lớp', desc: 'Tấm thoát nước cell, vải địa kỹ thuật and lớp đá nhẹ kỹ thuật.' },
                                        { icon: 'forest', title: 'Cây chịu nắng & Rễ an toàn', desc: 'Tuyển chọn các giống cây chịu gió mạnh, nắng gắt and rễ chùm an toàn.' },
                                        { icon: 'flight', title: 'Giảm tải trọng đất trồng', desc: 'Sử dụng đất thể nhẹ (đất nung, tro trấu, xơ dừa) thay vì đất thịt.' }
                                    ].map((list, i) => (
                                        <li key={i} className="flex items-start gap-5">
                                            <div className="shrink-0 size-10 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center text-primary dark:text-white mt-1">
                                                <span className="material-symbols-outlined text-xl font-bold">{list.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-text-main dark:text-white text-lg">{list.title}</h4>
                                                <p className="text-sm text-text-muted dark:text-gray-400 mt-1 leading-relaxed">{list.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6">
                                    <button className="h-14 px-10 rounded-xl bg-primary text-white text-base font-black uppercase transition-all hover:bg-primary/90 shadow-xl shadow-primary/20">
                                        Xem chi tiết giải pháp kỹ thuật
                                    </button>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMsAKUyzXgDerWDSaF7BqfMNwUv-A227hiZP9TPCNOaVvo6CMJLTQIrfYxvAMbBDz-xi3G4ZiSlf3tsyufEvJh9hYgs1k8_tXsgFyevJsXkfubfjGbP4gFZuWOkxM_vCc-JbjewDev2yMBMzsXRQy1rzMIlt15Yx4bUwxJBYqI6Gk_wWhi5mmlIBI50MaK-0JQw4rXOpJianwyuTZLuKZTUrRIlmWW3jMeOvcsFYyxgmphA5nmz-8JS7faigr3VkxGYbtWwKxRsAk" alt="Technical Layout" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="bg-white/95 dark:bg-black/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 max-w-xs shadow-2xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="material-symbols-outlined text-primary font-bold">layers</span>
                                            <span className="text-xs font-black text-primary uppercase tracking-widest">Cấu tạo tiêu chuẩn</span>
                                        </div>
                                        <div className="space-y-3">
                                            {['Lớp thực vật chuyên dụng', 'Đất trồng thể nhẹ', 'Vải địa & Hệ thống thoát Cell', 'Chống thấm & Bê tông mái'].map((layer, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="size-2 rounded-full bg-primary"></div>
                                                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{layer}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: CTA Banner */}
                <section className="w-full py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-10">
                            <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
                                    Tư vấn thiết kế vườn trên mái phù hợp kết cấu
                                </h2>
                                <p className="text-white/80 text-xl leading-relaxed">
                                    Đừng để rủi ro ảnh hưởng đến ngôi nhà của bạn. Hãy để chuyên gia KGX khảo sát and đưa ra giải pháp an toàn nhất.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                                <button className="h-14 px-10 rounded-xl bg-white text-primary text-lg font-black uppercase hover:bg-gray-100 transition-all shadow-2xl">
                                    Nhận tư vấn ngay
                                </button>
                                <button className="h-14 px-10 rounded-xl bg-accent text-white text-lg font-black uppercase hover:bg-accent/90 transition-all shadow-2xl">
                                    HOTLINE 0868 462 462
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default RooftopGardenPage;
