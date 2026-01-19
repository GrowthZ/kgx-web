import React, { useEffect } from 'react';

const LargeTreeInstallationPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thi công Cây Công Trình Kích Thước Lớn - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-white dark:bg-background-dark text-[#151711] dark:text-gray-100 flex flex-col min-h-screen font-display antialiased selection:bg-primary/20 transition-colors duration-300">
            <main className="flex-grow">
                {/* Section 1: Challenges (Intro) */}
                <section className="py-20 bg-stone-50 dark:bg-[#30352c] border-b border-[#eef0ea] dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="text-accent font-black tracking-widest text-xs uppercase mb-4 block">Thách thức & Giải pháp</span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-tight mb-8 uppercase tracking-tight">
                            KỸ THUẬT THI CÔNG <br /><span className="text-primary dark:text-accent">CÂY CÔNG TRÌNH</span> ĐẠI THỤ
                        </h1>
                        <p className="text-text-muted dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
                            Thi công cây đại thụ đòi hỏi sự chính xác tuyệt đối, thiết bị chuyên dụng and kinh nghiệm xử lý rủi ro để đảm bảo tỉ lệ sống 100%.
                        </p>
                    </div>
                </section>

                {/* Section 2: Cards */}
                <section className="py-12 bg-white dark:bg-background-dark">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: 'forest', title: 'Kích thước & Trọng tải', desc: 'Xử lý các cây có đường kính gốc trên 50cm, trọng tải lên đến hàng chục tấn đòi hỏi tính toán chịu lực chính xác.' },
                                { icon: 'settings_suggest', title: 'Yêu cầu kỹ thuật cao', desc: 'Bảo vệ bầu rễ nguyên vẹn, xử lý đất trồng chuyên biệt and hệ thống thoát nước ngầm phức tạp.' },
                                { icon: 'warning', title: 'Kiểm soát rủi ro an toàn', desc: 'Thi công trong môi trường đô thị chật hẹp với máy móc hạng nặng, đòi hỏi quy trình an toàn nghiêm ngặt.' }
                            ].map((card, i) => (
                                <div key={i} className="group bg-stone-50 dark:bg-[#3a4035] p-10 rounded-3xl border border-transparent hover:border-primary/20 dark:hover:border-accent/30 shadow-card hover:shadow-2xl transition-all duration-500 relative overflow-hidden text-center">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary dark:bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                    <div className="size-20 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-primary dark:text-white mb-8 mx-auto group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-white transition-colors duration-500 shadow-sm">
                                        <span className="material-symbols-outlined text-4xl">{card.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-text-main dark:text-white mb-4 uppercase tracking-tight">{card.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed text-sm">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Solutions (Split) */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2 flex flex-col gap-10 order-2 lg:order-1">
                                <div>
                                    <span className="text-primary dark:text-accent font-black tracking-widest text-sm uppercase mb-3 block">Phương pháp KGX</span>
                                    <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white leading-tight mb-8 uppercase tracking-tight">
                                        GIẢI PHÁP TRIỂN KHAI <br /> TOÀN DIỆN
                                    </h2>
                                    <p className="text-text-muted dark:text-gray-300 text-lg leading-relaxed font-light">
                                        Chúng tôi không chỉ trồng cây, chúng tôi kiến tạo hệ sinh thái bền vững cho công trình của bạn với quy trình kỹ thuật chuẩn quốc tế.
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { title: 'Tuyển chọn từ vườn ươm', desc: 'Cây được dưỡng ủ kỹ, bộ rễ tôm phát triển mạnh trước khi đưa ra công trường.' },
                                        { title: 'Hố trồng & Xử lý đất', desc: 'Đào hố rộng, thay thế đất màu mỡ, bổ sung phân vi sinh and hệ thống ống thông khí rễ.' },
                                        { title: 'Neo giằng chịu lực cao', desc: 'Sử dụng cáp lụa, cọc thép hoặc khung chống chuyên dụng đảm bảo cây đứng vững trước mưa bão.' }
                                    ].map((sol, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="mt-1 size-10 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center shrink-0 text-primary dark:text-white border border-primary/20 dark:border-white/20">
                                                <span className="material-symbols-outlined text-xl font-bold">check</span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-text-main dark:text-white uppercase tracking-tight">{sol.title}</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm mt-1 leading-relaxed">{sol.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2">
                                <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] group border-8 border-background-light dark:border-white/5">
                                    <img alt="Crane lifting tree" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaCABkhb2HERE7XKQxW99GDj03koPHsTYCj8PcPn5CXjz5cB_0LLHiGeVCd6hW1ukcC0Nxl1QZ5csHUz44verFYYKJH30ykuocYb9SWtVlVE-tyrp4f09SGB5Fe33icbDX7ytheMmTePWp7JIaGEBnG5sjpYHYu5ZRjdimmnr2JjGbny0-SCsPThYDYuuEuxVZhXWvDhTf0UOyiOmH0aaZzefSlHOmZFs2OaVSgR2bY8z5_V_6LhtLcwmxR5k7OOmH2vnM3a-oaNo" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80"></div>
                                    <div className="absolute bottom-10 left-10 p-4 border-l-4 border-accent text-white">
                                        <p className="text-xs font-black uppercase tracking-widest text-accent mb-2">Dự án tiêu biểu</p>
                                        <p className="text-xl font-bold leading-snug">Hệ thống cẩu tự hành 25 tấn <br /> tại dự án KĐT Ecopark.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Workflow */}
                <section className="py-24 bg-background-light dark:bg-[#30352c]">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-primary dark:text-accent font-black uppercase tracking-[0.4em] text-xs mb-4 block">Standardized Workflow</span>
                            <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white uppercase tracking-tight">QUY TRÌNH TRIỂN KHAI</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { step: '01', icon: 'local_shipping', title: 'Vận chuyển chuyên dụng', desc: 'Sử dụng xe siêu trường siêu trọng, ràng buộc mềm chống va đập and mất nước thân cây.' },
                                { step: '02', icon: 'engineering', title: 'Cẩu lắp an toàn', desc: 'Đội ngũ kỹ thuật điều phối cẩu, căn chỉnh hướng cây phong thủy and độ thẳng đứng tuyệt đối.' },
                                { step: '03', icon: 'agriculture', title: 'Trồng & Cố định', desc: 'Lấp đất tầng, tưới kích rễ, chống cọc neo giữ and che chắn thân cây chống nắng.' }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="size-28 bg-white dark:bg-[#3a4035] rounded-full flex items-center justify-center mb-8 shadow-xl relative transition-transform duration-500 group-hover:-translate-y-2 border-4 border-stone-50 dark:border-white/5">
                                        <span className="material-symbols-outlined text-4xl text-primary dark:text-accent">{step.icon}</span>
                                        <div className="absolute -top-2 -right-2 size-10 bg-primary dark:bg-accent text-white rounded-full flex items-center justify-center font-black text-sm shadow-lg">{step.step}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: CTA Banner */}
                <section className="bg-primary py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-4xl leading-tight uppercase tracking-tight">
                            Đảm bảo an toàn and thẩm mỹ cho dự án cây lớn
                        </h2>
                        <p className="text-white/80 text-xl mb-12 max-w-2xl font-light">
                            Liên hệ ngay với KGX để nhận tư vấn giải pháp kỹ thuật and báo giá chi tiết cho công trình của bạn.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <button className="h-16 px-12 bg-white text-primary hover:bg-stone-50 text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1 uppercase tracking-widest">
                                Nhận báo giá ngay
                            </button>
                            <button className="h-16 px-12 bg-accent text-white hover:bg-orange-600 text-lg font-black rounded-2xl shadow-2xl shadow-orange-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 uppercase tracking-widest">
                                <span className="material-symbols-outlined font-black">call</span>
                                0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LargeTreeInstallationPage;
