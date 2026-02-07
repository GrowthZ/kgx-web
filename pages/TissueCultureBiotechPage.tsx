import React, { useEffect } from 'react';

const TissueCultureBiotechPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Nuôi cấy mô Công nghệ cao - KGX Biotech";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white flex flex-col min-h-screen font-display antialiased transition-colors duration-300">
            <main className="flex-grow">
                {/* Section 1: Hero */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1581093191605-a1d30f5ec66c?q=80&w=2070&auto=format&fit=crop"
                            alt="Lab Research"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="text-accent font-black tracking-[0.6em] text-xs  mb-6 block drop-shadow-lg">Scientific Innovation</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.8]  tracking-normal drop-shadow-2xl">
                            Nuôi Cấy Mô <br /><span className="text-accent">Công Nghệ Cao</span>
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic mb-12 drop-shadow-md">
                            "Nhân giống cây trồng sạch bệnh, chất lượng cao with công nghệ nuôi cấy mô tiên tiến nhất hiện nay."
                        </p>
                    </div>
                </section>

                {/* Section 2: Core Advantages */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-primary dark:text-white  tracking-normaler">Ưu điểm vượt trội</h2>
                            <p className="text-text-muted dark:text-gray-400 mt-4 text-xl font-light">Lợi thế cạnh tranh từ phòng Lab hiện đại của KGX.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { icon: 'biotech', title: 'Nhân giống quy mô lớn', desc: 'Đảm bảo cung ứng số lượng lớn cây giống đồng nhất về chất lượng for các dự án lớn.' },
                                { icon: 'bug_report', title: 'Kháng sâu bệnh', desc: 'Cây giống được nuôi trong môi trường vô trùng tuyệt đối, loại bỏ hoàn toàn mầm bệnh.' },
                                { icon: 'speed', title: 'Rút ngắn thời gian', desc: 'Tăng tốc quá trình sinh trưởng so with phương pháp truyền thống, đáp ứng tiến độ công trình.' }
                            ].map((adv, i) => (
                                <div key={i} className="bg-stone-50 dark:bg-[#34382e] p-12 rounded-[48px] text-center group border border-transparent hover:border-accent/20 transition-all duration-700 shadow-xl hover:-translate-y-4">
                                    <div className="size-24 bg-white dark:bg-white/5 rounded-3xl flex items-center justify-center mb-8 shadow-inner mx-auto group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                        <span className="material-symbols-outlined text-4xl">{adv.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-text-main dark:text-white mb-4  tracking-normal">{adv.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed italic">
                                        "{adv.desc}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Professional Lab */}
                <section className="py-24 bg-stone-50 dark:bg-[#30352c] transition-colors overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
                                <div>
                                    <span className="text-primary dark:text-accent font-black tracking-widest text-sm  mb-4 block">Our Laboratory</span>
                                    <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white leading-[1.8]  tracking-normal">Tiêu chuẩn <br />vô trùng tuyệt đối</h2>
                                </div>
                                <p className="text-text-muted dark:text-gray-300 text-xl font-light leading-relaxed">
                                    Phòng thí nghiệm của KGX được trang bị hệ thống lọc khí HEPA, tủ cấy vi sinh Clean Bench and hệ thống kiểm soát nhiệt độ nghiêm ngặt, đảm bảo môi trường lý tưởng for sự phát triển của mô thực vật.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        'Hệ thống chiếu sáng quang phổ chuyên biệt',
                                        'Môi trường nuôi cấy MS chuẩn quốc tế',
                                        'Quy trình kiểm soát chất lượng 5 bước',
                                        'Đội ngũ thạc sĩ, kỹ sư sinh học giàu kinh nghiệm'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center group">
                                            <div className="size-8 rounded-full bg-accent/10 dark:bg-white/10 flex items-center justify-center text-accent dark:text-white group-hover:scale-125 transition-transform">
                                                <span className="material-symbols-outlined text-xs font-black">check</span>
                                            </div>
                                            <span className="text-lg font-bold text-text-main dark:text-white  tracking-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative order-1 lg:order-2">
                                <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5 rotate-3 hover:rotate-0 transition-transform duration-1000 group">
                                    <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" alt="Lab Work" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20"></div>
                                </div>
                                <div className="absolute -bottom-10 -left-10 size-40 bg-accent rounded-[40px] shadow-2xl z-20 flex items-center justify-center text-white rotate-[-12deg] border-4 border-white/20">
                                    <div className="text-center">
                                        <p className="text-3xl font-black">100%</p>
                                        <p className="text-[10px] font-black  tracking-widest">Sạch bệnh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: CTA */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px), linear-gradient(-45deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-[1.8]  tracking-normal">
                            Đột phá nông nghiệp <br className="hidden md:block" /> từ tế bào
                        </h2>
                        <p className="text-white/80 text-2xl mb-14 max-w-3xl font-light italic">
                            Liên hệ with KGX Biotech for được tư vấn giải pháp nhân giống công nghệ cao for dự án hoặc trang trại của bạn.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <button className="h-16 px-12 bg-accent text-white hover:bg-orange-600 text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2  tracking-widest flex items-center justify-center gap-4">
                                <span className="material-symbols-outlined font-black">biotech</span>
                                Yêu cầu tư vấn
                            </button>
                            <button className="h-16 px-12 bg-white text-primary text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2  tracking-widest">
                                0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TissueCultureBiotechPage;
