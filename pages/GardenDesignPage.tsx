import React, { useEffect } from 'react';

const GardenDesignPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thiết kế Cảnh quan Sân vườn - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white flex flex-col min-h-screen font-display antialiased transition-colors duration-300">
            <main className="flex-grow">
                {/* Section 1: Hero */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070&auto=format&fit=crop"
                            alt="Garden Design"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="text-accent font-black tracking-[0.4em] text-xs uppercase mb-6 block drop-shadow-lg">Artistic Landscape</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight uppercase tracking-tight drop-shadow-2xl">
                            Kiến Tạo <br /><span className="text-accent">Sân Vườn Đẳng Cấp</span>
                        </h1>
                        <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic mb-12 drop-shadow-md">
                            "Chúng tôi mang đến giải pháp thiết kế độc bản, kết hợp hài hòa giữa phong thủy and ngôn ngữ kiến trúc hiện đại."
                        </p>
                        <button className="h-16 px-12 bg-white text-primary hover:bg-stone-50 text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 uppercase tracking-widest">
                            Liên hệ thiết kế
                        </button>
                    </div>
                </section>

                {/* Section 2: Philosophy */}
                <section className="py-24 bg-white dark:bg-background-dark transition-colors">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-accent font-black tracking-widest text-sm uppercase mb-4 block">Design Philosophy</span>
                                <h2 className="text-4xl md:text-5xl font-black text-primary dark:text-white leading-tight uppercase tracking-tight mb-8">TỐI ƯU TRẢI NGHIỆM <br />SỐNG XANH</h2>
                                <p className="text-text-muted dark:text-gray-300 text-xl font-light leading-relaxed mb-10">
                                    Mỗi khu vườn không chỉ là mảng xanh, mà là một tác phẩm nghệ thuật phản chiếu cá tính and gu thẩm mỹ của gia chủ.
                                </p>
                                <div className="space-y-8">
                                    {[
                                        { icon: 'balance', title: 'Hài hòa Phong thủy', desc: 'Bố trí cảnh quan bổ trợ vượng khí and tài lộc cho gia chủ.' },
                                        { icon: 'eco', title: 'Cây xanh bền vững', desc: 'Lựa chọn loại cây phù hợp vi khí hậu and dễ chăm sóc.' },
                                        { icon: 'auto_awesome', title: 'Thẩm mỹ độc bản', desc: 'Mỗi khu vườn là một câu chuyện riêng, không trùng lặp.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="size-14 rounded-full bg-primary/10 dark:bg-white/5 flex items-center justify-center text-primary dark:text-accent group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent transition-all duration-500 shadow-xl border border-primary/20 dark:border-white/10 shrink-0">
                                                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-text-main dark:text-white uppercase tracking-tight">{item.title}</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm mt-1 leading-relaxed italic">"{item.desc}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="rounded-[80px] overflow-hidden shadow-2xl border-8 border-stone-50 dark:border-white/5 group">
                                    <img src="https://images.unsplash.com/photo-1599110906885-b0244991395c?q=80&w=2070&auto=format&fit=crop" alt="Garden Philosophy" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
                                </div>
                                <div className="absolute -top-10 -right-10 size-48 bg-accent rounded-full border-8 border-white dark:border-background-dark z-20 flex items-center justify-center p-6 text-center shadow-2xl rotate-12">
                                    <p className="text-white font-black text-sm uppercase tracking-widest leading-tight">Giải pháp <br />toàn diện</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: CTA */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight uppercase tracking-tight">
                            Bắt đầu hành trình <br className="hidden md:block" /> kiến tạo không gian xanh
                        </h2>
                        <p className="text-white/80 text-2xl mb-14 max-w-2xl font-light italic">
                            Liên hệ ngay để KGX tư vấn and lên concept thiết kế cho khu vườn của bạn.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full">
                            <button className="w-full sm:w-auto px-12 py-6 bg-accent hover:bg-orange-600 text-white text-xl font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 uppercase tracking-widest flex items-center justify-center gap-4">
                                <span className="material-symbols-outlined font-black">edit_note</span>
                                ĐĂNG KÝ TƯ VẤN THIẾT KẾ
                            </button>
                            <button className="w-full sm:w-auto px-12 py-6 bg-white text-primary text-xl font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2 uppercase tracking-widest">
                                0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default GardenDesignPage;
