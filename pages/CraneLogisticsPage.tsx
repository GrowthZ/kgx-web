import React, { useEffect } from 'react';

const CraneLogisticsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Vận tải & Cẩu tự hành - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white flex flex-col min-h-screen font-display antialiased transition-colors duration-300">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-6 max-w-[1200px] mx-auto text-center">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent text-xs font-black tracking-widest uppercase mb-6 border border-accent/10">Dịch vụ chuyên nghiệp</span>
                    <h1 className="text-4xl md:text-6xl font-black text-primary dark:text-white leading-tight max-w-4xl mx-auto mb-8 uppercase tracking-tight">
                        Dịch vụ vận tải & <br /><span className="text-accent">cẩu tự hành</span>
                    </h1>
                    <p className="text-xl text-text-sub dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Giải pháp logistics chuyên sâu cho ngành cảnh quan, đảm bảo an toàn tuyệt đối cho cây xanh and vật tư công trình.
                    </p>
                </section>

                {/* Section 1: Operational Needs */}
                <section className="py-20 px-6 max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="h-px bg-primary/10 dark:bg-white/10 flex-1"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-primary dark:text-white text-center uppercase tracking-widest px-4">Nhu cầu thực tế</h2>
                        <div className="h-px bg-primary/10 dark:bg-white/10 flex-1"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                title: 'Di chuyển cây lớn',
                                desc: 'Đảm bảo an toàn tuyệt đối cho bộ rễ and thân cây. Giảm thiểu rủi ro dập nát, gãy cành trong quá trình di dời các cây cổ thụ, cây đại thụ từ vườn ươm đến công trình.',
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF-lY0XcDspqUPQICrZfJCYJPFQR6SckHJVW5RqGP61PEFQzo97P5jsabZl0xObb3fItW-Cbf-VE-TelJAHonnHiP1-TcUonCMyf4yk_PnwaK2hgb1HAvLBMG7CWp1Gd_u1ttW_k-M3k4JXSL0XQhBL4AqAnnTmTFL3Ng9NGog8B4IQ6dyhMIVduAt_o2MvveoF4lyRmCabyAGCSYZDhq4xirbPgncdd5Eb-7fidaMXSf4z_m0AXT38tpefbUuAL2ywEU7ztIJ4IY',
                                tag: 'Bảo vệ cây'
                            },
                            {
                                title: 'Thi công nhanh & chính xác',
                                desc: 'Tối ưu hóa thời gian thi công nhờ thiết bị cơ giới hiện đại. Đảm bảo đặt cây đúng vị trí thiết kế, xoay hướng cây chính xác đến từng centimet tại công trường.',
                                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO9x4etjVaMM9xr4O8F1CkpHpLoT_nXaSa2VSVSImp1uhcmlYA93yMGxTI3vT2GTp2sO8Y5TdngLFA4a3ykf9_58iK7nJYNuhIlpzG1UxWuIuwbJj3vuZiKWvqReRxTkjSKXTgPSpPcQLixmYRilEua372UrgXBGRuV2xjNNbfUrUcZ62KqRZvVd3akKOj9vY1c6RytQqifUKU0CQgoqJpr2Qahpw6i5Fy1aqzKJS5o-QmKoMmXsERBRgR_fyGVb9-o1gF9J8h_jY',
                                tag: 'Tiến độ'
                            }
                        ].map((card, i) => (
                            <div key={i} className="group bg-white dark:bg-[#3a4035] rounded-[40px] overflow-hidden shadow-2xl hover:shadow-primary/10 transition-all duration-700 border border-primary/5 dark:border-white/5">
                                <div className="aspect-[16/9] w-full bg-stone-100 dark:bg-black/20 relative overflow-hidden">
                                    <img alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={card.image} />
                                    <div className="absolute top-8 left-8 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-xl px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl border border-white/20">
                                        <span className="material-symbols-outlined text-accent text-sm font-black">verified</span>
                                        <span className="text-[10px] font-black text-primary dark:text-accent uppercase tracking-[0.2em]">{card.tag}</span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-3xl font-black text-primary dark:text-white mb-4 group-hover:text-accent transition-colors uppercase tracking-tight">{card.title}</h3>
                                    <p className="text-text-sub dark:text-gray-400 leading-relaxed mb-8 italic">
                                        "{card.desc}"
                                    </p>
                                    <button className="flex items-center text-primary dark:text-accent font-black text-sm uppercase tracking-widest group-hover:translate-x-4 transition-all">
                                        XEM QUY TRÌNH <span className="material-symbols-outlined text-xl ml-2">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Equipment Fleet */}
                <section className="py-24 bg-stone-50 dark:bg-[#30352c] transition-colors">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="order-2 lg:order-1">
                                <span className="text-accent font-black tracking-[0.3em] text-xs uppercase mb-4 block">Năng lực thiết bị</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-8 leading-tight uppercase tracking-tight">
                                    Hệ thống thiết bị <br />tự hành tiêu chuẩn
                                </h2>
                                <p className="text-text-sub dark:text-gray-300 mb-12 text-xl font-light leading-relaxed">
                                    KGX sở hữu đội ngũ xe cẩu tự hành and phương tiện vận tải chuyên dụng đa dạng tải trọng, được bảo trì định kỳ để sẵn sàng đáp ứng mọi yêu cầu khắt khe.
                                </p>
                                <div className="space-y-8">
                                    {[
                                        { icon: 'local_shipping', title: 'Đa dạng tải trọng', desc: 'Hệ thống xe cẩu từ 3.5 tấn đến 15 tấn, xe đầu kéo sơ mi rơ moóc phù hợp mọi cung đường.' },
                                        { icon: 'engineering', title: 'Vận hành chuyên nghiệp', desc: 'Đội ngũ lái xe and vận hành cẩu giàu kinh nghiệm, có đầy đủ chứng chỉ an toàn lao động.' },
                                        { icon: 'verified_user', title: 'An toàn tuyệt đối', desc: 'Trang bị đầy đủ cáp vải, đai mềm chuyên dụng để nâng hạ cây, không gây tổn hại vỏ cây.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="flex-shrink-0 size-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center text-primary dark:text-accent shadow-xl border border-primary/10 dark:border-white/10 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent transition-all duration-500">
                                                <span className="material-symbols-outlined text-3xl font-black">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="font-black text-text-main dark:text-white text-xl uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-text-sub dark:text-gray-400 text-sm mt-2 leading-relaxed italic">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-14">
                                    <button className="h-16 px-10 border-4 border-primary dark:border-accent text-primary dark:text-white hover:bg-primary dark:hover:bg-accent hover:text-white font-black rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-sm">
                                        Tải hồ sơ năng lực
                                    </button>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative">
                                <div className="relative rounded-[48px] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5 group">
                                    <img alt="Equipment" className="w-full h-auto object-cover aspect-[4/5] transform group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_h3rce2UPHuxS7ejE-NDqivkKkfENIAxoDn5_4KQIt4gp63IFogDMDQLtMsGo8XgQ1FwVcoOUKNUzhNJxp1WSmNdfMnlhXqP4PkOT0Mu14pRJWHZ0DNzqZ1heHp-vrzY6PwmLu6PthSLgDnMAXHikDsV5t1apoybuLBGKzFVIBEzwnS_TRAfT4Zb2G4dV5VIF3AsY7SvTGkdc-kyQpVa2M6oGvL39zxF334TeWHSg5ZaBtSf1ZX4Z1kclAKKpI0qD83pVeyzHaEQ" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-10 left-10 right-10 bg-white/95 dark:bg-black/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-l-[12px] border-accent">
                                        <p className="text-xs font-black uppercase text-accent tracking-[0.3em] mb-3">Dự án tiêu biểu</p>
                                        <p className="text-xl font-bold leading-tight text-primary dark:text-white uppercase tracking-tight">Di dời cây cổ thụ tại <br />KĐT Ecopark Hưng Yên</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: CTA Banner */}
                <section className="py-24 bg-primary relative overflow-hidden transition-colors">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #ffffff 20px, #ffffff 40px)' }}></div>
                    <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] uppercase max-w-4xl tracking-tight">
                            Hỗ trợ thi công với <br className="hidden md:block" /> hệ thống xe cẩu chuyên dụng
                        </h2>
                        <p className="text-white/80 text-xl mb-14 max-w-2xl font-light italic leading-relaxed">
                            "Liên hệ ngay với KGX để nhận tư vấn phương án vận chuyển and thi công tối ưu nhất cho dự án của bạn."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full">
                            <button className="w-full sm:w-auto px-12 py-6 bg-accent hover:bg-orange-600 text-white text-xl font-black rounded-2xl shadow-2xl shadow-orange-500/30 transition-all transform hover:-translate-y-2 uppercase tracking-widest flex items-center justify-center gap-4">
                                <span className="material-symbols-outlined font-black">call</span>
                                YÊU CẦU DỊCH VỤ VẬN TẢI
                            </button>
                            <button className="w-full sm:w-auto px-12 py-6 bg-white text-primary text-xl font-black rounded-2xl hover:bg-stone-50 transition-all shadow-2xl uppercase tracking-widest transform hover:-translate-y-2">
                                0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CraneLogisticsPage;
