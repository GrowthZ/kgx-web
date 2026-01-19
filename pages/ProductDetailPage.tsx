import React from 'react';

const ProductDetailPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
            <main className="w-full flex flex-col items-center">
                {/* Hero Section with Breadcrumbs */}
                <section className="w-full max-w-[1440px] px-4 sm:px-10 py-6 sm:py-10">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 text-sm mb-6 px-4">
                        <a className="text-text-muted hover:text-primary font-medium" href="/">Trang chủ</a>
                        <span className="text-text-muted">/</span>
                        <a className="text-text-muted hover:text-primary font-medium" href="/danh-sach-san-pham">Sản phẩm</a>
                        <span className="text-text-muted">/</span>
                        <span className="text-primary font-bold">Cây Bàng Đài Loan</span>
                    </div>
                    {/* Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1 px-4 lg:pl-10">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[#151b0e] text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em]">
                                    CÂY BÀNG <br className="hidden sm:block" />ĐÀI LOAN
                                </h1>
                                <h2 className="text-text-muted text-lg font-medium leading-relaxed max-w-xl">
                                    Loại cây phù hợp cho sân vườn và công trình đô thị. Đặc biệt thích hợp với khí hậu Việt Nam, tạo bóng mát và cảnh quan hiện đại với tán lá xếp tầng độc đáo.
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <button className="flex h-12 px-6 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl items-center justify-center transition-colors shadow-lg shadow-primary/20">
                                    Tư vấn sử dụng cây này
                                </button>
                                <button className="flex h-12 px-6 bg-[#eef3e8] hover:bg-[#dfe8d4] text-[#151b0e] text-base font-bold rounded-xl items-center justify-center transition-colors">
                                    Gọi 0868 462 462
                                </button>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-square order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzaSo1ry6GLkQiGLhgY0wbYavsIsnVbkfV3CJJ7yXO2Rt-gPab1vMQHU0snqJwp2YEZcgZLU4c7_Jm81eOHjOmozGZokqwMc2x2-7iIIkAw9NSe6Z109nQoakCqASLZr5hRbhiwYog9EUGnAPnOcbjjzWJIvq1QeiGpOs-5eRQc1cCNd_EWJ1egXN6t5rYOH9ndjco9WsMmRLD99zeFxkjk6ne9Cpz5TwOdYpAWkySHH9exjI94u0Z2FdeeLOzXG1oRTGWXOm93Ps')" }}></div>
                        </div>
                    </div>
                </section>

                {/* Plant Facts Section */}
                <section className="w-full max-w-[1200px] px-4 py-12">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eef3e8]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined">info</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#151b0e]">Thông tin kỹ thuật</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    { label: 'Tên thường gọi', value: 'Bàng Đài Loan (Bàng lá nhỏ)' },
                                    { label: 'Tên khoa học', value: 'Terminalia mantaly', italic: true },
                                    { label: 'Nhóm cây', value: 'Cây bóng mát / Cây công trình' },
                                    { label: 'Chiều cao trưởng thành', value: '10m - 20m' },
                                    { label: 'Tốc độ sinh trưởng', value: 'Nhanh', icon: 'trending_up' },
                                    { label: 'Nhu cầu ánh sáng', value: 'Ưa sáng toàn phần', icon: 'light_mode' },
                                    { label: 'Nhu cầu nước', value: 'Trung bình', icon: 'water_drop' },
                                    { label: 'Đặc điểm lá', value: 'Lá nhỏ, tán xếp tầng đẹp mắt' }
                                ].map((fact, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 border-t border-dashed border-[#dde6d1] pt-3">
                                        <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">{fact.label}</p>
                                        <div className="flex items-center gap-2">
                                            {fact.icon && <span className={`material-symbols-outlined text-sm ${fact.icon === 'water_drop' ? 'text-blue-500' : fact.icon === 'light_mode' ? 'text-accent' : 'text-primary'}`}>{fact.icon}</span>}
                                            <p className={`text-[#151b0e] font-medium ${fact.italic ? 'italic' : ''}`}>{fact.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full lg:w-1/3 aspect-[4/5] rounded-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIO_9AZigZOBXUhaL8sE3x6Jz5zdGWFvvd0UEcicjMxja8dQAMOn9yAGIXKPIFkNfItSDkXMktIVofH6nn2rKfG3LZe101J4R90RbWHFRhN42NnHft38U7qDcfvrYtopcJGEwuDwa3fV3_cWuj8zUQM3CBj4P7c-AYRtE2y3paFPiqg87_FFYPxLvC5GSTN_mwGm6LhO376r9Z0C5QxRz7_Bpm1iRhCqh_Hf4KPMkeJUz4zhgIPjb4uDdVPSx5UtO0evWvNa_HZRE')" }}></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="text-white text-sm font-medium">Chi tiết lá và tán cây</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pros & Cons */}
                <section className="w-full max-w-[1200px] px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">thumb_up</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary">Ưu điểm nổi bật</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    { title: 'Dáng cây đẹp tự nhiên', desc: 'Tán xếp tầng như chiếc ô, không cần cắt tỉa cầu kỳ vẫn đẹp.' },
                                    { title: 'Thích nghi tốt', desc: 'Phù hợp hoàn hảo với khí hậu nhiệt đới gió mùa tại Việt Nam.' },
                                    { title: 'Ít sâu bệnh', desc: 'Cây khỏe mạnh, ít tốn công chăm sóc và bảo vệ thực vật.' },
                                    { title: 'Tuổi thọ cao', desc: 'Là cây thân gỗ lâu năm, giá trị cảnh quan tăng theo thời gian.' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                        <div>
                                            <strong className="block text-[#151b0e]">{item.title}</strong>
                                            <span className="text-text-muted text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Cons / Considerations */}
                        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="size-10 rounded-full bg-orange-400 flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-600">Lưu ý khi trồng</h3>
                            </div>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    { title: 'Khoảng cách trồng', desc: 'Rễ cây phát triển mạnh, nên trồng cách công trình xây dựng tối thiểu 3-4m.' },
                                    { title: 'Rụng lá theo mùa', desc: 'Cây có thể rụng lá vào mùa đông (miền Bắc), cần dọn dẹp vệ sinh.' },
                                    { title: 'Chăm sóc giai đoạn đầu', desc: 'Cần cọc chống chắc chắn khi mới trồng để tránh đổ ngã do gió bão.' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-orange-400 mt-0.5">error</span>
                                        <div>
                                            <strong className="block text-[#151b0e]">{item.title}</strong>
                                            <span className="text-text-muted text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Care Instructions */}
                <section className="w-full bg-[#f1f4ed] py-16">
                    <div className="max-w-[1200px] mx-auto px-4">
                        <h2 className="text-3xl font-bold text-[#151b0e] mb-10 text-center">Hướng dẫn chăm sóc</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'water_drop', title: 'Tưới nước', desc: 'Tưới 2-3 lần/tuần vào sáng sớm hoặc chiều mát. Đảm bảo thoát nước tốt.' },
                                { icon: 'compost', title: 'Bón phân', desc: 'Sử dụng phân NPK định kỳ 3 tháng/lần để kích thích ra lá và rễ.' },
                                { icon: 'content_cut', title: 'Cắt tỉa', desc: 'Cắt bỏ cành khô, cành gầm thấp mỗi năm 1 lần để nâng cao tán.' },
                                { icon: 'pest_control', title: 'Sâu bệnh', desc: 'Kiểm tra sâu ăn lá vào mùa xuân. Phun thuốc sinh học nếu cần.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-[#eef3e8]">
                                    <div className="text-primary"><span className="material-symbols-outlined text-3xl">{item.icon}</span></div>
                                    <h4 className="font-bold text-[#151b0e]">{item.title}</h4>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductDetailPage;
