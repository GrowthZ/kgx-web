import React, { useEffect } from 'react';

const ResortParkDesignPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thiết kế Resort & Công viên - KGX - Không Gian Xanh";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#151612] dark:text-gray-100 antialiased transition-colors duration-300">
            <main className="flex flex-col items-center">
                {/* Section 1: Hero Intro */}
                <section className="w-full pt-16 pb-12 bg-white dark:bg-[#30352c]">
                    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
                        <div className="max-w-3xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white text-xs font-bold  tracking-wider mb-4">Dịch vụ Cảnh Quan</span>
                            <h2 className="text-3xl md:text-4xl font-black tracking-normal text-[#151612] dark:text-white mb-6 leading-[1.8] ">
                                Thiết kế khu nghỉ dưỡng & <br /><span className="text-primary dark:text-accent">Công viên bền vững</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                                Tối ưu vận hành - Trải nghiệm bền vững - Cảnh quan xanh mát. Chúng tôi kiến tạo không gian nơi thiên nhiên and tiện ích hòa quyện hoàn hảo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Characteristics */}
                <section className="w-full py-16 bg-white dark:bg-background-dark border-y border-primary/10 dark:border-white/10">
                    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
                        <div className="mb-12">
                            <h3 className="text-2xl font-black text-[#151612] dark:text-white  tracking-normal flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent"></span>
                                Đặc thù thiết kế cảnh quan Resort
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: 'sentiment_satisfied', title: 'Trải nghiệm người dùng', desc: 'Thiết kế không chỉ là hình ảnh mà là hành trình cảm xúc của du khách xuyên suốt không gian.' },
                                { icon: 'alt_route', title: 'Dòng di chuyển', desc: 'Phân luồng logic đảm bảo sự riêng tư tuyệt đối cho khách hàng and sự thuận tiện tối đa cho vận hành.' },
                                { icon: 'construction', title: 'Khả năng bảo trì', desc: 'Lựa chọn giải pháp vật liệu địa phương and hệ thống cây xanh bền vững, giảm thiểu chi phí chăm sóc.' }
                            ].map((item, i) => (
                                <div key={i} className="group flex flex-col p-8 bg-stone-50 dark:bg-[#3a4035] rounded-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-primary/5 dark:border-white/5">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
                                    </div>
                                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-white/10 text-primary dark:text-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-[#151612] dark:text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: Principles */}
                <section className="w-full py-20 bg-background-light dark:bg-[#30352c]">
                    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="flex flex-col gap-8 order-2 lg:order-1">
                                <div>
                                    <h3 className="text-sm font-bold text-accent  tracking-widest mb-2">Giá trị cốt lõi</h3>
                                    <h2 className="text-2xl md:text-3xl font-black text-[#151612] dark:text-white leading-[1.8] mb-6 ">
                                        Nguyên tắc KGX áp dụng
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed">
                                        Chúng tôi không chạy theo xu hướng nhất thời. Thiết kế của KGX tập trung vào tính hiệu quả and vẻ đẹp trường tồn with thời gian.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        { title: 'Ít nhưng chất', desc: 'Tinh gọn chi tiết thừa, tập trung ngân sách vào chất lượng vật liệu and những điểm nhấn đắt giá.' },
                                        { title: 'Dễ vận hành', desc: 'Tối ưu hóa quy trình quản lý, bố trí kho bãi, đường nước and điện thông minh.' },
                                        { title: 'Giảm phụ thuộc nhân công', desc: 'Sử dụng công nghệ tưới tự động giúp tiết kiệm chi phí nhân sự lên đến 30%.' }
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                                                    <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-[#151612] dark:text-white mb-1">{point.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{point.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 h-full">
                                <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-primary/10 dark:border-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7S8MdDwlzJKJxN4RJ99Qix7CLMIZL8PBsA1g2i9-mxK-GreW9IGmSUJT-LvA5yILs-PYcyTPJE9GmkthkDEpr5GHBA-h9eZ_LWVsBros7HhgH9hct8q6rbPp6syZ8YtIc27VUxcuxxoqq6OHaRyLM-Yq5sVoyteBjTU9Sv4Ge6meDDWyvqMTTgBg44eBFYw8_UuQ-D256mhRO5vnaVPv8hneymVILm6ljgoeyfdhEe-ch-kg1_3Jzy95mEdidrtDN3yMo3yBccIE" alt="Resort Design" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                        <div className="bg-white/95 backdrop-blur dark:bg-black/80 p-4 rounded-lg shadow-lg border-l-4 border-accent max-w-xs">
                                            <p className="text-xs font-bold text-gray-500 dark:text-gray-400  mb-1">Dự án tiêu biểu</p>
                                            <p className="text-sm font-bold text-[#151612] dark:text-white">Flamingo Đại Lải Resort - Khu biệt thự hồ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Scope of Work */}
                <section className="w-full py-16 bg-white dark:bg-background-dark border-t border-primary/10 dark:border-white/10">
                    <div className="mx-auto max-w-[1200px] px-4 md:px-8">
                        <h2 className="text-2xl font-black text-[#151612] dark:text-white tracking-normal leading-[1.8]  mb-12">Phạm vi thiết kế chi tiết</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: 'Hệ thống lối đi', desc: 'Thiết kế cốt nền, vật liệu lát sàn chống trượt and chiếu sáng dẫn hướng.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj_KzRXEDLN1IwZvAtI5mqmk-wg2zsAHvh7m4hpfkjTPdgXGT26StzqcMfM3ESS-7FuNeBiiK7p1beFHnXLdkrCfKWT7SCT_dpBIbp5uE4KDPuSAiTMPt8vojPQMBpf0sS_6JSnOAiUbrqSs1BqGkafk26fvYhQu0ql-3Nk9ZeP1EQBWVt_mVi4V6NpBSxgYyZkv-nM_RW7SuEuKSScAa6fViUwV3QR-jBr2xq51SAUNPee2n3fHOOC9lxScE9aydKS5YJQxiyh2I' },
                                { title: 'Không gian nghỉ', desc: 'Bố trí chòi nghỉ (Gazebo), ghế đá nghệ thuật and các điểm check-in.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_gD_eozkXx0EQrPsEcNGOwr9MTZ6Cl3Cipn6yzyXFI3R-DhndjwpuQ4Unc_GPv9KtH3yVz5fmke53XrjI67-7woeBCJRA_oBRcp9iXQKlXW9_Hpr5ErW6wACyas74QbaFFDmarjjs5YhPgm0yy4YW1P7e0HfFsF_BsIsxCcTuZTsROaw1x5gc7nAYwuEDnJmd1nHhKXkyNuZX6hLoj4LsanugHdEwr3r2dbicWxLQ1PGFcO-FHFUOvGXylYvVt5FN0T95lyxmJEM' },
                                { title: 'Cây xanh & Mặt nước', desc: 'Quy hoạch tầng tán cây bóng mát, thảm cỏ and hồ điều hòa vi khí hậu.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtIjtT5f5GRpsoFh5PgV0Na4meYJJKW-MRtz-BxconVKgEr58ICPl6hu_aALnwLx1-3pVf15L0RKRToIb5Fcs3SxP2FuYgL9htnccoi65nt74KULu38LmDeuNO3e9Y0W7xHO6GyOFhPKN-NSYPvTgW9ZXz8wdJ99fwIwRlNJ0sqr6PtteUDPdzy2el3sto7PZG6lLxySLWMleRG0Krj1NVFfeWmm0xbbg4oBRjPj7lM8YaQQklcOVCRqjSlavM-sD4Pz2f6H04wJ4' }
                            ].map((item, i) => (
                                <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-primary/10 dark:border-white/10 shadow-lg">
                                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="w-12 h-1 bg-accent mb-4"></div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="w-full py-20 bg-primary relative overflow-hidden">
                    <div className="mx-auto max-w-[1200px] px-4 md:px-8 relative z-10 text-center">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-[1.8] ">
                            Bạn cần giải pháp cảnh quan tối ưu <br className="hidden md:block" /> cho khu nghỉ dưỡng?
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Hãy để KGX đồng hành cùng bạn kiến tạo những không gian đẳng cấp, nơi giá trị đầu tư sinh lời bền vững theo thời gian.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-accent hover:bg-orange-600 transition-colors text-white text-lg font-black px-10 py-5 rounded-2xl shadow-2xl hover:shadow-accent/40 transform hover:-translate-y-1">
                                Nhận tư vấn thiết kế
                            </button>
                            <button className="bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white text-lg font-black px-10 py-5 rounded-2xl backdrop-blur-sm transition-all">
                                Gọi 0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ResortParkDesignPage;
