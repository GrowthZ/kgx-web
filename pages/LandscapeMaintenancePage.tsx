import React, { useEffect } from 'react';

const LandscapeMaintenancePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Dịch vụ Bảo dưỡng Cảnh quan - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 antialiased selection:bg-primary/20">
            <main className="w-full flex flex-col">
                {/* Page Hero */}
                <div className="w-full bg-background-light dark:bg-[#30352c] pt-16 pb-12 transition-colors">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-widest">
                                <span className="h-px w-8 bg-accent"></span>
                                <span>Dịch vụ chuyên nghiệp</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-primary dark:text-white tracking-tight leading-tight uppercase">
                                Chăm sóc & <br className="hidden md:block" />Bảo dưỡng Cảnh quan
                            </h1>
                            <p className="mt-4 max-w-2xl text-xl text-text-muted dark:text-gray-300 leading-relaxed font-light">
                                Giữ gìn vẻ đẹp bền vững cho không gian xanh của bạn với quy trình chăm sóc chuẩn kỹ thuật từ đội ngũ chuyên gia KGX.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 1: The Need */}
                <section className="py-20 bg-white dark:bg-background-dark relative overflow-hidden transition-colors">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="mx-auto max-w-[1200px] px-6 relative z-10">
                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6 uppercase tracking-tight">
                                Vì sao cảnh quan cần được <span className="text-primary dark:text-accent underline decoration-accent/30 decoration-8 underline-offset-8">bảo dưỡng?</span>
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg leading-relaxed">Cảnh quan đẹp không chỉ ở thiết kế ban đầu mà phụ thuộc 80% vào quá trình chăm sóc sau thi công chuyên nghiệp.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { color: 'red', icon: 'potted_plant', title: 'Cây chết sau thi công', desc: 'Cây xanh dễ bị suy yếu, vàng lá and chết hàng loạt nếu không được theo dõi độ ẩm, dinh dưỡng and bén rễ đúng kỹ thuật ngay sau giai đoạn trồng mới.' },
                                { color: 'orange', icon: 'person_alert', title: 'Thiếu người chuyên môn', desc: 'Bảo vệ, tạp vụ thường thiếu kiến thức nông nghiệp, dẫn đến việc tưới sai cách, bón phân quá liều hoặc cắt tỉa làm hỏng dáng cây.' }
                            ].map((card, i) => (
                                <div key={i} className="group flex flex-col md:flex-row gap-8 p-10 rounded-3xl bg-background-light dark:bg-[#3a4035] border border-primary/10 dark:border-white/5 hover:border-primary/30 dark:hover:border-accent/30 hover:shadow-2xl transition-all duration-500">
                                    <div className="shrink-0">
                                        <div className={`size-20 rounded-2xl bg-${card.color}-50 dark:bg-white/5 flex items-center justify-center text-${card.color}-500 dark:text-white group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                            <span className="material-symbols-outlined text-4xl">{card.icon}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-2xl font-bold text-text-main dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors uppercase tracking-tight">{card.title}</h3>
                                        <p className="text-text-muted dark:text-gray-400 leading-relaxed text-base italic">"{card.desc}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: Services Provided */}
                <section className="py-24 bg-background-light dark:bg-[#30352c] transition-colors">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className="flex flex-col gap-10 order-2 lg:order-1">
                                <div>
                                    <span className="text-accent dark:text-accent font-black tracking-widest text-sm uppercase mb-4 block">Giải pháp toàn diện</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white mb-6 uppercase leading-tight">Dịch vụ KGX <br />cung cấp</h2>
                                    <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed">
                                        Chúng tôi mang đến quy trình chăm sóc khép kín, đảm bảo cây xanh luôn phát triển khỏe mạnh and duy trì thẩm mỹ như thiết kế ban đầu.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        { title: 'Cắt tỉa & Tạo dáng', desc: 'Duy trì form dáng chuẩn, loại bỏ cành khô, lá già.' },
                                        { title: 'Bón phân & Cải tạo đất', desc: 'Cung cấp dinh dưỡng phù hợp, xới đất định kỳ.' },
                                        { title: 'Xử lý sâu bệnh', desc: 'Phun thuốc sinh học, xử lý kịp thời mầm bệnh.' },
                                        { title: 'Thay thế cây yếu', desc: 'Bảo hành cây trồng, thay thế ngay để đảm bảo thẩm mỹ.' }
                                    ].map((service, i) => (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex items-center gap-3 text-primary dark:text-accent font-black">
                                                <span className="material-symbols-outlined text-base">check_circle</span>
                                                <h4 className="text-lg uppercase tracking-tight">{service.title}</h4>
                                            </div>
                                            <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t border-primary/10 dark:border-white/10">
                                    <button className="h-14 px-8 rounded-xl bg-primary dark:bg-accent text-white font-black uppercase text-sm tracking-widest hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                        Xem quy trình chi tiết
                                    </button>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute -inset-6 bg-accent/10 rounded-[40px] -z-10 rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                                <div className="relative overflow-hidden rounded-[32px] shadow-2xl aspect-[4/5] border-8 border-white dark:border-white/10">
                                    <img alt="Professional maintenance" className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfeZ51n4XNikFCyNs-WxoVFZ7D5GaEyc6HLze0IOvTvRcC_Xj_uidtyAF5snzDT3lAZdTvs2GKr455PU9U-eFTI7zPtL2stXiLGj5-4RspYa0UKWvF82L1DeapjTNbeFVQb1PYK-9XQYtQKN2RnPgNxgIOWs-ECEBVbzo9v0Pv3qYiuckerJbRiuHBq-mWPnqy83ynW-rn06oNVZzQg75KIhpAG0hqUSz9-zycYlVSjKDASNd9d21oBiQ1I9csyP8xbWhbG0Vz6ZI" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined fill-1 text-accent text-4xl">verified</span>
                                            <div className="flex flex-col">
                                                <span className="text-lg font-black uppercase tracking-tight">Kỹ thuật viên chuyên nghiệp</span>
                                                <span className="text-sm opacity-80 uppercase tracking-widest">&gt; 5 năm kinh nghiệm</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Target Audience */}
                <section className="py-24 bg-white dark:bg-background-dark transition-colors border-y border-primary/5 dark:border-white/5">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="flex flex-col items-center text-center mb-16">
                            <span className="text-primary dark:text-accent font-black uppercase tracking-[0.3em] text-xs mb-4">Gói dịch vụ</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white uppercase tracking-tight">Đối tượng phù hợp</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { tag: 'Biệt thự', title: 'Khu dân cư & Biệt thự', desc: 'Chăm sóc sân vườn tư gia, đảm bảo không gian sạch sẽ, an toàn and thẩm mỹ cho gia đình.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXQrRM0XOxfcMWBa2OaDJZdv4GI2zCHb5_TL4ZSZ4j_zpSO1jyJ-byErsStWrS8lThcMmp1hjBFoQoDU5QHQbLGrPILc4wISdrDGyGkRVRyk5LRKOGCcHM18rQal0HT-0Lyb9mp_c6OdnZgrHm5GgXWtbt0U1mDEXNm8Sp1UCQ3KZBK6mn1MHFqqZVsBG49KnKEE_-PT2y8HNvCQ9xWkisgZLUlMhoJbxwHNeJ9Kfx6hAqX3-e0z6Efkmcr-IFvCL1npx6YQsjrQs' },
                                { tag: 'Resort', title: 'Resort & Nghỉ dưỡng', desc: 'Duy trì cảnh quan đẳng cấp 5 sao, tạo ấn tượng mạnh mẽ cho du khách ngay từ cái nhìn đầu tiên.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByrqbc23G0BAlAP39UcPX-L46tAK498DPrezDgqRdA5rYhwRf3SKELzlDBU-M0UwdxosQr61O9tRwhu0ss7NIKsz7JE6zWNTE3ia8OHtMZFFehEX4P_XlX45Bd-oyIIl_cBF0SgNXna_V3NaZajbiTsth9fC1TXiasrInVZc7m3YY73k1sTAsY7IyqhSjvGMLZoIHA2ZztOT0YdUv_edUPxnZj1zRT5WtA1CEJa8XgC37nTa8FT94N6_MSDDPXT0Ii7IKDqzaKB44' },
                                { tag: 'Doanh nghiệp', title: 'Doanh nghiệp & Nhà xưởng', desc: 'Tạo môi trường làm việc xanh, chuyên nghiệp, nâng cao hình ảnh thương hiệu trong mắt đối tác.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8PNTa9k3nxlNRaHFnXF4HZy0RifqZwrtnXHBfXy5oneroF9mFA2QYsQpkVsucIKRRhJ1dwi6eMi_2bgS7emO1PeZbmkm-C3UQwtJ1nHjpIWhxhfLkijBk9qXK7NkNIaj_VbmMzEGiy5nqsS6bNLjL1VKp7iH0L9HzKzObDoWiLO0sgaXFHzTfvhC99ZgDQ08hDdHpk-PYUqGRqdNCgW0w3cKWoOaW0m1Bjr-e0tJrUm5TpQv42jfigsRNK5n2RdYTCylS9mdDrGM' }
                            ].map((item, i) => (
                                <div key={i} className="group relative bg-background-light dark:bg-[#3a4035] rounded-[32px] overflow-hidden border border-primary/10 dark:border-white/5 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    <div className="h-64 overflow-hidden relative">
                                        <img alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={item.image} />
                                        <div className="absolute top-6 right-6 px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                            {item.tag}
                                        </div>
                                    </div>
                                    <div className="p-8 pb-10">
                                        <h3 className="text-xl font-bold text-text-main dark:text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: CTA Banner */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-15 mix-blend-overlay">
                        <img alt="Nature texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOySifLaU1R_871r-aSW8Bm4IDhG9N5gyC5tyzcLbhkB2A3f-zleFL4kEH6Z-GSWRW4mfBOHhElYByjJWC0rHzSO5VmvJp9f6thvhdV-jPxIqEJtCMJYJSbOPAQ6UOCFSpWBzBKJdAWm1WtCR9NKbJWo2KIFabbvhWNHcKYiSyE3y9c4LJOb0ZFXE5CK7y3sEMT7poTtzZiRVOXVGE-iUSmPyMFMDWi7WDNQ_63E9E19jWmmGcUkE6oX4s6ZwV4Y_Tnapx5fwyz3g" />
                    </div>
                    <div className="mx-auto max-w-[1200px] px-6 relative z-10 text-center flex flex-col items-center">
                        <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8">KGX Vietnam</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] uppercase max-w-4xl tracking-tight">
                            Duy trì mảng xanh <br className="hidden md:block" /> luôn bền đẹp cùng KGX
                        </h2>
                        <p className="text-white/80 max-w-2xl mb-12 text-xl leading-relaxed font-light">
                            Liên hệ ngay để được khảo sát hiện trạng miễn phí and nhận phương án bảo dưỡng tối ưu nhất cho công trình của bạn.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="h-16 px-10 bg-accent hover:bg-orange-600 text-white font-black rounded-2xl text-lg transition-all shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                <span className="material-symbols-outlined font-black">calendar_month</span>
                                NHẬN TƯ VẤN BẢO DƯỠNG
                            </button>
                            <button className="h-16 px-10 bg-white text-primary font-black rounded-2xl text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                <span className="material-symbols-outlined font-black text-accent">call</span>
                                0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LandscapeMaintenancePage;
