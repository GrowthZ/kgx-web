import React, { useEffect } from 'react';

const ArchitectureDesignPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thiết kế Kiến trúc Xanh - KGX - Không Gian Xanh";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white flex flex-col min-h-screen font-display antialiased transition-colors duration-300">
            <main className="flex-grow">
                {/* Section 1: Hero */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                            alt="Modern Architecture"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="text-accent font-black tracking-[0.4em] text-xs  mb-6 block">Premium Design</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.8]  tracking-normal">
                            Kiến Trúc <br /><span className="text-accent">Xanh Hiện Đại</span>
                        </h1>
                        <p className="text-white/80 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic mb-12">
                            "Kết hợp tinh tế giữa công năng sử dụng and mảng xanh kiến trúc, kiến tạo không gian sống tiện nghi and trong lành."
                        </p>
                        <button className="h-16 px-12 bg-white text-primary hover:bg-stone-50 text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2  tracking-widest">
                            Nhận tư vấn thiết kế
                        </button>
                    </div>
                </section>

                {/* Section 2: Principles */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-2xl md:text-4xl font-black text-primary dark:text-white  tracking-normal">Phong cách thiết kế</h2>
                            <div className="h-2 w-24 bg-accent mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { icon: 'home_work', title: 'Tối giản & Hiện đại', desc: 'Tận dụng ánh sáng tự nhiên and thông gió đối lưu để giảm thiểu năng lượng tiêu thụ.' },
                                { icon: 'landscape', title: 'Indoor-Outdoor Living', desc: 'Xóa nhòa ranh giới giữa không gian nội thất and thiên nhiên bên ngoài.' },
                                { icon: 'eco', title: 'Vật liệu sinh thái', desc: 'Ưu tiên các dòng vật liệu thân thiện môi trường, bền vững theo thời gian.' }
                            ].map((style, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="size-24 bg-stone-50 dark:bg-white/5 rounded-[32px] flex items-center justify-center mb-8 shadow-xl group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent transition-all duration-500">
                                        <span className="material-symbols-outlined text-3xl">{style.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4  tracking-normal">{style.title}</h3>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed italic">
                                        "{style.desc}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Split Content */}
                <section className="py-24 bg-stone-50 dark:bg-[#30352c] transition-colors">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="lg:w-1/2">
                                <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white dark:border-white/5 group">
                                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Architecture" className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 space-y-10">
                                <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white leading-[1.8]  tracking-normal">Kết nối <br />không gian sống</h2>
                                <p className="text-text-muted dark:text-gray-300 text-xl font-light leading-relaxed">
                                    Chúng tôi không chỉ thiết kế ngôi nhà, chúng tôi kiến tạo phong cách sống. Mỗi đường nét kiến trúc đều được tính toán để mang lại sự thoải mái tối ưu and cảm hứng mỗi ngày.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        'Tối ưu hóa công năng',
                                        'Giải pháp vi khí hậu',
                                        'Thẩm mỹ cao trọng',
                                        'Bền vững môi trường'
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="size-10 rounded-full bg-primary/10 dark:bg-accent/10 flex items-center justify-center text-primary dark:text-accent font-black">
                                                <span className="material-symbols-outlined text-sm">check</span>
                                            </div>
                                            <span className="text-lg font-bold text-text-main dark:text-white  tracking-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: CTA */}
                <section className="py-24 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                    <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-[1.8]  tracking-normal">
                            Kiến tạo tổ ấm xanh <br className="hidden md:block" /> của riêng bạn
                        </h2>
                        <p className="text-white/80 text-2xl mb-14 max-w-2xl font-light italic">
                            Liên hệ ngay để KGX đồng hành cùng bạn hiện thực hóa ý tưởng về một ngôi nhà xanh hiện đại.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8">
                            <button className="h-16 px-12 bg-accent text-white hover:bg-orange-600 text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2  tracking-widest flex items-center justify-center gap-4">
                                <span className="material-symbols-outlined font-black">call</span>
                                0868 462 462
                            </button>
                            <button className="h-16 px-12 bg-white text-primary text-lg font-black rounded-2xl shadow-2xl transition-all transform hover:-translate-y-2  tracking-widest">
                                Nhận báo giá ngay
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ArchitectureDesignPage;
