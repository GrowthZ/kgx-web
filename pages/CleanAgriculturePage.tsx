import React, { useEffect } from 'react';

const CleanAgriculturePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thi công Nông nghiệp sạch - KGX - Không Gian Xanh";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#151712] dark:text-white antialiased min-h-screen flex flex-col transition-colors duration-300">
            <main className="flex-grow w-full flex flex-col items-center">
                {/* Intro Header */}
                <section className="w-full pt-20 pb-12 px-6 max-w-[1200px]">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <span className="text-primary dark:text-accent font-black text-sm tracking-[0.4em] ">Dịch vụ chuyên sâu</span>
                        <h1 className="text-3xl md:text-5xl font-black text-[#151712] dark:text-white leading-[1.8]  tracking-normal">
                            Thi công <br className="hidden md:block" /><span className="text-primary dark:text-accent">Nông nghiệp sạch</span>
                        </h1>
                        <p className="text-text-muted dark:text-gray-400 mt-6 max-w-2xl text-xl font-light leading-relaxed italic">
                            "Kiến tạo môi trường canh tác bền vững với công nghệ nhà màng and hệ thống kiểm soát vi khí hậu tiên tiến."
                        </p>
                    </div>
                </section>

                {/* Section 1: Specialized Characteristics */}
                <section className="w-full py-16 px-6 max-w-[1200px]">
                    <div className="flex items-center gap-6 mb-16">
                        <h3 className="text-2xl font-black  tracking-widest text-[#151712] dark:text-white flex-shrink-0">
                            Đặc thù thi công
                        </h3>
                        <div className="h-px bg-primary/10 dark:bg-white/10 grow"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            {
                                icon: 'engineering',
                                title: 'Kỹ thuật thi công cao',
                                desc: 'Ứng dụng công nghệ nhà màng đa khẩu độ, hệ khung thép chịu lực cường độ cao and vật liệu che phủ tiên tiến (Israel/Japan). Đảm bảo kết cấu vững chắc trước gió bão, tối ưu hóa độ bền lên đến 10-15 năm.'
                            },
                            {
                                icon: 'thermostat',
                                title: 'Kiểm soát vi khí hậu',
                                desc: 'Thiết lập hệ thống khép kín: tự động điều chỉnh nhiệt độ, độ ẩm and ánh sáng. Ngăn chặn côn trùng tuyệt đối, giảm thiểu 90% việc sử dụng thuốc bảo vệ thực vật.'
                            }
                        ].map((card, i) => (
                            <div key={i} className="group relative flex flex-col gap-8 p-10 rounded-[40px] bg-white dark:bg-[#34382e] shadow-2xl border border-primary/5 dark:border-white/5 hover:border-primary/20 transition-all duration-700">
                                <div className="size-20 rounded-2xl bg-stone-50 dark:bg-white/5 flex items-center justify-center text-primary dark:text-accent group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent transition-all duration-500 shadow-xl">
                                    <span className="material-symbols-outlined text-3xl font-black">{card.icon}</span>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-2xl font-black text-[#151712] dark:text-white  tracking-normal">{card.title}</h4>
                                    <p className="text-text-muted dark:text-gray-400 leading-relaxed text-base italic leading-relaxed">
                                        "{card.desc}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: KGX Solutions */}
                <section className="w-full py-24 px-6 bg-white dark:bg-[#30352c] border-y border-primary/5 dark:border-white/5 transition-colors">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="flex flex-col gap-12 order-2 lg:order-1">
                                <div className="space-y-6">
                                    <span className="text-accent font-black tracking-[0.3em] text-xs  block">Giải pháp tối ưu</span>
                                    <h4 className="text-3xl md:text-4xl font-black text-[#151712] dark:text-white  tracking-normal leading-[1.8]">Canh tác <br />& tự động hóa</h4>
                                    <p className="text-text-muted dark:text-gray-300 text-xl font-light leading-relaxed">
                                        KGX cung cấp giải pháp trọn gói từ khâu thiết kế đến vận hành, giúp tối ưu năng suất cây trồng trên từng mét vuông đất.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-10">
                                    {[
                                        { title: 'Thủy canh & tưới nhỏ giọt', desc: 'Công nghệ tưới chính xác từ Israel, tiết kiệm 40-60% nước and phân bón.' },
                                        { title: 'Nhà màng công nghệ cao', desc: 'Kết cấu vòm hở hoặc kín, lưới cắt nắng tự động, quạt đối lưu không khí.' },
                                        { title: 'Cảm biến & IoT', desc: 'Hệ thống châm phân tự động (Fertigation), giám sát EC/pH qua ứng dụng 24/7.' }
                                    ].map((sol, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="size-12 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-accent flex items-center justify-center flex-shrink-0 border-2 border-primary/20 dark:border-white/20 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent transition-all duration-500">
                                                <span className="material-symbols-outlined text-lg font-black">check</span>
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-black text-[#151712] dark:text-white tracking-normal">{sol.title}</h5>
                                                <p className="text-sm text-[#5c6655] dark:text-gray-400 mt-2 font-medium italic">"{sol.desc}"</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-primary/10 dark:border-white/10">
                                    <button className="h-14 px-8 bg-primary dark:bg-accent text-white font-black  text-xs tracking-widest rounded-xl shadow-2xl hover:shadow-primary/30 transition-all">
                                        Xem thông số kỹ thuật
                                    </button>
                                </div>
                            </div>
                            <div className="relative order-1 lg:order-2 h-[540px] lg:h-[640px] w-full rounded-[48px] overflow-hidden shadow-2xl border-8 border-stone-50 dark:border-white/5 group">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10 opacity-60"></div>
                                <div className="w-full h-full bg-center bg-cover transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsRGcrwpnYNiisnis_GuI83PLmY80vfNjRKgPDz5TMbOT6kr2pEKkWbaiJpfZVwn5_hhFlEFXsCkicRr8krR6My7pUqhD3Lspdjou0oc8fJkXZ_5t4_g3LIFePyevW5U2bn07g-bOVW4W2jsMXIWAPst7jJ3CQVnn6TpNx9Yl09Tulf1BqbrqrfS4AAqTL2zLTAG0Ys2EfpvV7o31yDthtrSeh9Bavwb9MdLkkKYrtIU5a_i9YwhX_nRooU-rQj_VC1JsBejQjz8I")' }}></div>
                                <div className="absolute bottom-10 left-10 right-10 z-20 bg-white/95 dark:bg-black/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border-l-[12px] border-accent">
                                    <span className="text-xs font-black text-accent  tracking-[0.4em] block mb-3">Dự án tiêu biểu</span>
                                    <p className="text-2xl font-black text-primary dark:text-white  tracking-normal">Hệ thống nhà màng Farmstay <br />Hòa Bình - 2.5ha</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Final CTA */}
                <section className="w-full py-24 px-6 bg-primary relative overflow-hidden transition-colors">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
                    <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-[1.8]  max-w-4xl tracking-normal">
                            Cần giải pháp thi công <br className="hidden md:block" /> nông nghiệp sạch chuyên nghiệp?
                        </h2>
                        <p className="text-white/90 text-2xl mb-14 max-w-3xl font-light italic leading-relaxed">
                            "Liên hệ ngay với đội ngũ kỹ sư KGX để được khảo sát and tư vấn phương án tối ưu nhất cho khu vườn của bạn."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full">
                            <button className="w-full sm:w-auto px-12 py-6 bg-accent hover:bg-orange-600 text-white text-xl font-black rounded-2xl shadow-2xl shadow-orange-500/30 transition-all transform hover:-translate-y-2  tracking-widest flex items-center justify-center gap-4">
                                Yêu cầu tư vấn ngay
                            </button>
                            <button className="w-full sm:w-auto px-12 py-6 bg-white text-primary text-xl font-black rounded-2xl hover:bg-stone-50 transition-all shadow-2xl  tracking-widest transform hover:-translate-y-2">
                                Nhận báo giá
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default CleanAgriculturePage;
