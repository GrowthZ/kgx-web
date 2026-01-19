import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MasterPlanningPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thiết kế quy hoạch cảnh quan - KGX";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white antialiased">
            <main className="flex flex-col items-center">
                {/* Section 1: Strategic Role (Hero) */}
                <section className="w-full flex justify-center py-16 md:py-24 bg-background-light dark:bg-[#30352c]">
                    <div className="w-full max-w-[1200px] px-5 md:px-10">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                            {/* Text Content */}
                            <div className="flex-1 flex flex-col gap-6 text-left">
                                <div className="space-y-4">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full dark:bg-white/10 dark:text-white">Tổng quan dịch vụ</span>
                                    <h1 className="text-text-main dark:text-white text-4xl md:text-5xl font-black leading-[1.15] tracking-tight">
                                        VAI TRÒ CỦA <br className="hidden md:block" />QUY HOẠCH CẢNH QUAN
                                    </h1>
                                    <p className="text-text-muted dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed max-w-[540px]">
                                        Đảm bảo sự hài hòa tổng thể, kiểm soát vi khí hậu và gia tăng giá trị dài hạn cho các dự án quy mô lớn ngay từ giai đoạn khởi tạo. Chúng tôi kiến tạo những không gian sống bền vững, nơi thiên nhiên và kiến trúc giao hòa.
                                    </p>
                                </div>
                                <div className="pt-2">
                                    <button className="group inline-flex items-center justify-center h-12 px-6 bg-primary text-white text-base font-bold rounded-xl transition-all hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                        <span>Tìm hiểu quy trình</span>
                                        <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                            {/* Image Content */}
                            <div className="flex-1 w-full">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group border border-primary/10 dark:border-white/10">
                                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                                    <img
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0pZYP2yqfBK4Qly9OjzvOAdLDpQYWdS9BJXk5fZsttYIsL7rsbbS-4njmKdZ4gT2kjWwh73BYrFtO_XezOFODljlziBpVlKSZd8srtXOVKMQqcK4RN6Zc3K4pYi6MY3pSJNVe82xQDBl4pntiT9tihTyUtb_DInKcgBrus67hg23TBF01hF_90mPg-jj15uaoxB8vWGn4SP-BmwO9C0Akp0NwQzR7mQngy7mLHVD_IYYLfp1L4xpc0NtYWkPLzDcEnfh4U0vkgmk"
                                        alt="Master Planning"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Floating Caption */}
                                    <div className="absolute bottom-6 left-6 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg border-l-4 border-accent shadow-lg max-w-[280px]">
                                        <p className="text-xs font-bold text-text-main dark:text-white uppercase tracking-wide">Tầm nhìn quy hoạch</p>
                                        <p className="text-sm text-text-muted dark:text-gray-300 mt-1">Kết nối không gian xanh và hạ tầng đô thị hiện đại.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Core Solutions */}
                <section className="w-full flex justify-center py-20 bg-[#f4f6f3] dark:bg-background-dark">
                    <div className="w-full max-w-[1200px] px-5 md:px-10">
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col gap-3 max-w-[720px]">
                                <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase">
                                    GIẢI PHÁP KGX TRIỂN KHAI
                                </h2>
                                <p className="text-text-muted dark:text-gray-400 text-lg font-normal leading-relaxed">
                                    Cách tiếp cận toàn diện và chuyên sâu cho từng dự án, tập trung vào tính khả thi và thẩm mỹ bền vững.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                                {[
                                    { icon: 'hub', title: 'Giao thông – Cây xanh – Mặt nước', desc: 'Hệ thống hạ tầng kỹ thuật tích hợp đồng bộ, đảm bảo lưu thông liền mạch và cân bằng hệ sinh thái tự nhiên.' },
                                    { icon: 'map', title: 'Phân khu chức năng', desc: 'Tối ưu hóa quy hoạch sử dụng đất, bố trí tiện ích hợp lý dựa trên phân tích địa hình và nhu cầu sử dụng thực tế.' },
                                    { icon: 'timeline', title: 'Triển khai theo giai đoạn', desc: 'Chiến lược đầu tư hiệu quả theo từng chu kỳ phát triển, giảm thiểu rủi ro và tối đa hóa dòng vốn cho chủ đầu tư.' }
                                ].map((item, i) => (
                                    <div key={i} className="group flex flex-col gap-5 p-8 rounded-2xl bg-white dark:bg-[#3a4035] border border-primary/10 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="size-14 rounded-xl bg-background-light dark:bg-white/10 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight group-hover:text-primary dark:group-hover:text-white transition-colors">{item.title}</h3>
                                            <div className="h-0.5 w-12 bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-500"></div>
                                            <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Suitable Projects */}
                <section className="w-full flex justify-center py-20 bg-background-light dark:bg-[#30352c]">
                    <div className="w-full max-w-[1200px] px-5 md:px-10">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-primary/10 dark:border-white/10 pb-6">
                                <h2 className="text-text-main dark:text-white text-3xl font-bold tracking-tight uppercase">CÁC LOẠI DỰ ÁN PHÙ HỢP</h2>
                                <Link to="/du-an" className="text-primary dark:text-white font-bold text-sm hover:underline flex items-center gap-1 group">
                                    Xem tất cả dự án
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { category: 'RESIDENTIAL', title: 'Khu dân cư sinh thái', desc: 'Quy hoạch không gian sống hài hòa, chú trọng mảng xanh và tiện ích cộng đồng.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfzAqQTyERUFiYkAvRxXSwduFBMqYg-A2lTISwFgRI7ZF9ouMUMHiewlLrJN9S799_Lu45IBUKmdAojy8nciDyiueV9VAPjZ7wR_ZrBgW8J6YLrf4dEoKSvQkhiw_uwDMh_KUnUrteDLVmMTdL-Btrbd5E-6U2kighyqqk9GNdoQv4uOaPd4byFckaAh7omkBg46ebWaxnt4d-L4I0dTI7iMFwHeJ6MgaEd6sG64oMDUNcfCsBp2LQN9aWBaDgte6H7nyHpbs1tck' },
                                    { category: 'URBAN', title: 'Khu đô thị mới', desc: 'Tổ hợp đô thị hiện đại bền vững với hạ tầng giao thông thông minh.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvH_XmGMfLCE7xFxam5VkJbdf0aO0cs3oRCdQISa4jLQ57mhhSQM5SkqRg3QW-T_9y9EgZCN9CZ4y2E2iT7p-jE5KD9cPNpKwt3qnAg9xRjHg0MVCnXc0iJqdXBJFrj0mOnQtO7hWD9xIW5thGccWDjBVpIdGGeAlGKt1gLGo4cU4Xaq_nIhWIwPxKiVaxa9BsE2tqwp0lSgcOXxg_DgY3V52Glt3TxEkev-E0UF00_WgfEg0zAUijmyzXduGGwct3B_X2XkO3mHU' },
                                    { category: 'RESORT', title: 'Khu nghỉ dưỡng cao cấp', desc: 'Resort nghỉ dưỡng hòa nhập tuyệt đối với bối cảnh thiên nhiên bản địa.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3KExroP_3BPOfyu8rc5SzzgjPXN9DANzf9pVPKq6QB-YPylAnxpCeDMIaBYJER9fm_BCuIyrwLhKfWyYURKhqK1rCxxHCnsFy7dvCdJ-5WudqvS3nuVfNB7IEgQi3Hxbp54NrFbgi1DkRAGsSA3Xvm9iLJ_IMb6RiIFYgO5N1dOEGvr3-oZk0fOWT9tsS9LTyjMdKsCkwuhIzNjFFQ5V0iig5-pj88LBestwwJXWG2qj4oKjyhasUE-cZ2R0tzL7n0zdK9UnWwDc' }
                                ].map((project, i) => (
                                    <div key={i} className="flex flex-col gap-4 group cursor-pointer">
                                        <div className="overflow-hidden rounded-2xl relative aspect-[3/2] border border-primary/10 dark:border-white/10">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-primary shadow-sm">
                                                {project.category}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-text-main dark:text-white text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                            <p className="text-text-muted dark:text-gray-400 text-sm">{project.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Deliverables */}
                <section className="w-full flex justify-center py-20 bg-[#fafbf9] dark:bg-background-dark">
                    <div className="w-full max-w-[1200px] px-5 md:px-10">
                        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
                            <div className="flex-1 flex flex-col gap-8 w-full">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase">
                                        SẢN PHẨM BÀN GIAO
                                    </h2>
                                    <p className="text-text-muted dark:text-gray-400 text-base">Bộ hồ sơ kỹ thuật chi tiết, đảm bảo tính pháp lý và thi công chính xác.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { icon: 'check_circle', title: 'Mặt bằng tổng thể (Masterplan)', desc: 'Bản vẽ quy hoạch không gian, phân khu chức năng và định hướng giao thông.' },
                                        { icon: 'forest', title: 'Chiến lược cây xanh', desc: 'Danh mục cây trồng phù hợp thổ nhưỡng, bản đồ phân bố và chỉ dẫn chăm sóc.' },
                                        { icon: 'architecture', title: 'Nguyên tắc thi công', desc: 'Hướng dẫn chi tiết về vật liệu, cốt cao độ và giải pháp kỹ thuật.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#3a4035] border border-primary/10 dark:border-white/10 shadow-sm">
                                            <div className="mt-1 min-w-[24px] text-accent">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-text-main dark:text-white font-bold text-lg">{item.title}</h4>
                                                <p className="text-text-muted dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-primary/10 dark:border-white/10">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKyyufTo63MQpqNjHx6x-zH8ATmu4obthZeFSCIh0GUdnzs2wxMFt3pjq5Bz_e5HMTfEnsHS4bzKDzLblKrCBahvia41IZlkJFvGa3alsxCrxRPE1T_E4yjxGSNvXCZ33IJhMHI7Vd68ef_HVB3ZCbVV247o9iV0mWV8Uiws8nEeFMh8x9memH6RTpuExkBjjN24xSv0iSkzyisqhxhSnWA_6hn05wygieiLn8mT3FvRlgx7h3eKy03-yFjQzUsuvODM4DOdkqhoM" alt="Technical Standards" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                        <div className="text-white">
                                            <p className="font-mono text-sm opacity-80 mb-1">PROJECT ID: KGX-2024</p>
                                            <p className="font-bold text-lg uppercase">TIÊU CHUẨN KỸ THUẬT QUỐC TẾ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5: CTA Banner */}
                <section className="w-full py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto rounded-3xl bg-primary relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 text-center md:text-left">
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Cần giải pháp quy hoạch xanh cho dự án của bạn?</h2>
                                <p className="text-white/80 text-lg">Để lại thông tin để chuyên gia KGX tư vấn giải pháp hiệu quả và bền vững nhất.</p>
                            </div>
                            <div className="shrink-0">
                                <button className="h-14 px-8 rounded-xl bg-accent hover:bg-orange-500 text-white text-lg font-bold shadow-xl transition-all flex items-center gap-2">
                                    <span>Nhận tư vấn quy hoạch</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MasterPlanningPage;
