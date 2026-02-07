import React, { useEffect } from 'react';

const GreenConsultingPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Tư vấn Giải pháp Xanh - KGX - Không Gian Xanh";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white font-display antialiased overflow-x-hidden transition-colors duration-300">
            <main className="flex-grow">
                {/* Section 1: Customer Dilemmas */}
                <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="mb-16 text-center max-w-3xl mx-auto">
                            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent text-xs font-black tracking-widest mb-6 border border-primary/10 dark:border-accent/10">VẤN ĐỀ THƯỜNG GẶP</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#161811] dark:text-white leading-[1.8]  tracking-normal">
                                KHI BẠN CHƯA CÓ <br className="hidden sm:block" /> PHƯƠNG ÁN RÕ RÀNG
                            </h1>
                            <p className="mt-6 text-text-muted dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed">Chúng tôi thấu hiểu những băn khoăn của bạn khi bắt đầu kiến tạo không gian xanh cho ngôi nhà của mình.</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2">
                            {[
                                {
                                    icon: 'question_mark',
                                    title: 'Chưa xác định rõ nhu cầu',
                                    desc: 'Bạn muốn có không gian xanh nhưng chưa biết phong cách nào phù hợp, bố trí ra sao để hài hòa với kiến trúc hiện tại?',
                                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQN55--7pwzXncInJr7gLQL9QMxXgd3VCA82ZitOgq6fDYXKb-UIu9xEQwRLIMNA3lwaZFrNJ6Y4ge-c2SdA8cAoDMM0biwvJdUEuLVAoRdTkwTyx5AxuHZKDT_cIHF-RY_g_H4pH3hITAvaz-5Y8vU-tOrPslAZQgaguIKM0ah_3nW1MV6pEfhmQHcoJlUO9F_mnWuvVoU9j268wD2phZDWLkFhXs8R2mET-pccmg-lBXIvXC1maru9sW6rdj05YWreshRYwrrU'
                                },
                                {
                                    icon: 'account_balance_wallet',
                                    title: 'Ngân sách triển khai hạn chế',
                                    desc: 'Bạn lo lắng chi phí làm sân vườn quá cao and chưa biết cách phân bổ ngân sách để đạt hiệu quả tốt nhất?',
                                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6PZgTxUhN7tDFcsbh8N3Uu7OELPXoupYdtUvJSsx0kQ6YRy872rgCQ7xaMpFbSw5cE_7WEAcDxahmrW-RWdPIeVIrH7DUKE5Yt43Bt95lonvG57chOK4lp_drcjqflImZD331Fy326zLNDz_-CnjiuXmuhwUZHh24hdpr9guqRYAko3irtvaiHxnG2fZMMWKniYQOXvoxaU5cuZSKI78ZHve0USGtei0exjNJfgtgT-Hjsaw_wavXvodG1W9TBoWevoesBZRdiIQ'
                                }
                            ].map((card, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-[40px] h-[540px] shadow-2xl transition-all hover:-translate-y-2 duration-700">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url("${card.image}")` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col items-start gap-4">
                                        <div className="size-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-4 transition-transform group-hover:rotate-12">
                                            <span className="material-symbols-outlined text-white text-2xl">{card.icon}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white leading-[1.8]  tracking-normal">{card.title}</h3>
                                        <p className="text-gray-300 font-medium leading-relaxed italic">
                                            "{card.desc}"
                                        </p>
                                        <button className="mt-6 flex items-center gap-3 text-sm font-black text-accent  tracking-widest hover:text-white transition-colors group/btn">
                                            TÌM HIỂU THÊM <span className="material-symbols-outlined text-base group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: Methodology */}
                <section className="py-24 bg-white dark:bg-background-dark border-y border-primary/5 dark:border-white/5 transition-colors">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div className="flex flex-col gap-10 order-2 lg:order-1">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-black text-[#161811] dark:text-white mb-8  leading-[1.8] tracking-normal">
                                        Cách KGX tư vấn <br /><span className="text-primary dark:text-accent">giải pháp cho bạn</span>
                                    </h2>
                                    <p className="text-text-muted dark:text-gray-400 mb-10 text-xl font-light leading-relaxed">
                                        Quy trình làm việc chuyên nghiệp của chúng tôi đảm bảo mọi giải pháp đưa ra đều dựa trên thực tế and nhu cầu của bạn.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-10">
                                    {[
                                        { num: '1', title: 'Khảo sát thực tế (Site Survey)', desc: 'Đội ngũ chuyên gia đến tận nơi để đo đạc, đánh giá hiện trạng đất, hướng nắng, hướng gió and hệ sinh thái xung quanh.' },
                                        { num: '2', title: 'Phân tích điều kiện tự nhiên', desc: 'Tổng hợp dữ liệu để tìm ra các loại cây trồng phù hợp nhất, đảm bảo cây sinh trưởng tốt and ít tốn công chăm sóc.' },
                                        { num: '3', title: 'Đề xuất giải pháp tối ưu', desc: 'Đưa ra phương án thiết kế and thi công cân đối giữa thẩm mỹ, công năng and ngân sách dự kiến của gia chủ.' }
                                    ].map((step, i) => (
                                        <div key={i} className="flex gap-8 group">
                                            <div className="flex-shrink-0 flex flex-col items-center">
                                                <div className="size-16 rounded-full bg-primary/10 dark:bg-white/5 text-primary dark:text-accent flex items-center justify-center text-2xl font-black border-4 border-primary/20 dark:border-white/10 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent transition-all duration-500 shadow-lg">
                                                    {step.num}
                                                </div>
                                                {i < 2 && <div className="w-0.5 grow bg-primary/10 dark:bg-white/5 my-4"></div>}
                                            </div>
                                            <div className="pb-4">
                                                <h3 className="text-2xl font-bold text-[#161811] dark:text-white mb-3  tracking-normal">{step.title}</h3>
                                                <p className="text-text-muted dark:text-gray-400 leading-relaxed font-light italic">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative order-1 lg:order-2 h-[600px] lg:h-[700px] w-full rounded-[48px] overflow-hidden shadow-2xl border-8 border-stone-50 dark:border-white/5">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6_Lc8puQk3eU7fvHcGE9-w_bOZf6h_fK72sn272aiHQ0jMgyM63ufFwhTe3b_Ycg42fi_j3yV3_4bYINaH1cIT6HKaRhaFPQKWYfC-Tk6Fr2fzrynebdq737kxXkA-hoDo_3FvqnldpfSOv5Z9z4vSbpw86AWap6uwncs4C9CRzLfXnPkGzypNbp8ap6S40wPfcHpm-P7oMmfjIU-0AQ61Rvt3PjxLV1yDmerWNDxMJP2wx6kSLfwY266NL_Kb_vMcuNBDQmBxX4")' }}></div>
                                <div className="absolute bottom-10 left-10 right-10 bg-white/95 dark:bg-black/80 backdrop-blur-xl p-8 rounded-3xl border-l-[12px] border-accent shadow-2xl">
                                    <div className="flex items-start gap-5">
                                        <span className="material-symbols-outlined text-primary dark:text-accent text-4xl">verified</span>
                                        <div>
                                            <p className="text-2xl font-black text-[#161811] dark:text-white  tracking-normal">Cam kết chất lượng</p>
                                            <p className="text-sm text-text-muted dark:text-gray-400 mt-2 leading-relaxed">Mỗi dự án đều được giám sát trực tiếp bởi chuyên gia &gt;10 năm kinh nghiệm.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Final CTA */}
                <section className="relative py-24 px-6 lg:px-8 bg-primary overflow-hidden transition-colors">
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="relative mx-auto max-w-[1000px] text-center flex flex-col items-center">
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-10 leading-[1.8]  tracking-normal">
                            Hãy để KGX giúp bạn tìm ra <br /><span className="text-accent underline decoration-white/20 underline-offset-8">giải pháp xanh</span>
                        </h2>
                        <p className="text-white/90 text-2xl mb-14 max-w-3xl font-light italic leading-relaxed">
                            "Đừng để những lo ngại về ngân sách hay ý tưởng ngăn cản bạn tận hưởng cuộc sống xanh. Liên hệ ngay để được tư vấn miễn phí 100%."
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center w-full">
                            <button className="w-full sm:w-auto px-12 py-6 bg-white text-primary text-xl font-black rounded-2xl hover:bg-stone-50 transition-all shadow-2xl shadow-white/10  tracking-widest transform hover:-translate-y-2">
                                ĐĂNG KÝ TƯ VẤN NGAY
                            </button>
                            <button className="w-full sm:w-auto px-12 py-6 bg-accent text-white border-2 border-white/20 text-xl font-black rounded-2xl hover:shadow-2xl shadow-orange-500/30 transition-all flex items-center justify-center gap-4  tracking-widest transform hover:-translate-y-2">
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

export default GreenConsultingPage;
