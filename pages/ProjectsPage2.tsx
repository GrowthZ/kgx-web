import React from 'react';

const ProjectsPage2: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
            <main className="w-full flex flex-col items-center">
                {/* Hero Section */}
                <section className="w-full max-w-[1280px] px-5 xl:px-20 py-10 lg:py-16">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap gap-2 text-sm font-medium">
                                <a className="text-text-light hover:text-primary" href="/">Trang chủ</a>
                                <span className="text-text-light">/</span>
                                <a className="text-text-light hover:text-primary" href="/du-an">Dự án</a>
                                <span className="text-text-light">/</span>
                                <span className="text-olive font-semibold">Biệt thự Thái Nguyên</span>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-black text-olive leading-[1.15] tracking-tight">
                                    BIỆT THỰ SINH THÁI <br className="hidden lg:block" /> THÁI NGUYÊN
                                </h1>
                                <p className="text-lg lg:text-xl text-text-light font-normal max-w-[500px]">
                                    Thiết kế &amp; Thi công trọn gói cảnh quan sân vườn và hồ cá Koi đẳng cấp, mang thiên nhiên vào từng nhịp sống.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-xl shadow-primary/30 flex items-center gap-2">
                                    <span>Xem thư viện ảnh</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                                <button className="bg-white border-2 border-[#eef4e7] hover:border-primary text-olive font-bold px-8 py-3.5 rounded-xl transition-all hover:bg-[#fafcf8]">
                                    Tư vấn ngay
                                </button>
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
                                <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAimvrVvoWzueM3h6Bb-jcDDPFx0MlgDMbJn3JOQ7ZlB_p1n4m3DpTzgOlV-y7lZsM1tzApXaUp7TV_ALUfoiXVkaER-8fm7nwLxo1JmV1vmURXNgp9jG0qTfsS4yxXMzi64BelhHx4D5iTXJv7jux4Y0nvdL2AqsLZ60Ln2uiiJ-abxgjhFXRUMFDF38Ham9G7kuOwrp-dh06zGTyn2oNh8NPChDnTWTRSE7ofa-dKdkkoIHCSSFPMrbwJ_eYYmCzuRDxU7wiDPU0')" }}></div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl z-[-1]"></div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-[-1]"></div>
                        </div>
                    </div>
                </section>

                {/* Project Facts */}
                <section className="w-full bg-[#f2f7ec] py-12 border-y border-[#eef4e7]">
                    <div className="max-w-[1280px] mx-auto px-5 xl:px-20">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                            {/* Item 1 */}
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Địa điểm</p>
                                    <p className="text-olive text-lg font-bold leading-tight">Thái Nguyên</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">home_work</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Loại hình</p>
                                    <p className="text-olive text-lg font-bold leading-tight">Biệt thự</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">yard</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Hạng mục</p>
                                    <p className="text-olive text-lg font-bold leading-tight">Sân vườn &amp; Hồ Koi</p>
                                </div>
                            </div>
                            {/* Item 4 */}
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">square_foot</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Quy mô</p>
                                    <p className="text-olive text-lg font-bold leading-tight">500m²</p>
                                </div>
                            </div>
                            {/* Item 5 */}
                            <div className="flex flex-col gap-3 group">
                                <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm border border-[#eef4e7]">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <p className="text-text-light text-sm font-medium mb-1">Thời gian</p>
                                    <p className="text-olive text-lg font-bold leading-tight">3 tháng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Highlights & Story */}
                <section className="w-full max-w-[1280px] mx-auto px-5 xl:px-20 py-16 lg:py-24 space-y-24">
                    {/* Highlights */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-olive text-3xl lg:text-4xl font-bold mb-4">Điểm nổi bật của dự án</h2>
                                <p className="text-text-light text-lg">
                                    Dự án tập trung vào việc kiến tạo không gian xanh hài hòa với kiến trúc hiện đại, giải quyết các vấn đề về địa hình dốc và tối ưu hóa khí hậu địa phương.
                                </p>
                            </div>
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[20px]">landscape</span>
                                    </span>
                                    <div>
                                        <h3 className="text-olive font-bold text-lg">Địa hình giật cấp</h3>
                                        <p className="text-text-light">Xử lý địa hình dốc bằng giải pháp giật cấp tạo cảnh quan đa tầng, tăng chiều sâu cho không gian.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[20px]">forest</span>
                                    </span>
                                    <div>
                                        <h3 className="text-olive font-bold text-lg">Hệ thực vật bản địa</h3>
                                        <p className="text-text-light">Ưu tiên sử dụng 80% cây trồng phù hợp thổ nhưỡng Thái Nguyên để cây phát triển bền vững, ít công chăm sóc.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[20px]">water_drop</span>
                                    </span>
                                    <div>
                                        <h3 className="text-olive font-bold text-lg">Công nghệ lọc hồ Koi</h3>
                                        <p className="text-text-light">Hệ thống lọc Drum Filter tự động 100%, đảm bảo nước trong vắt và môi trường sống tốt nhất cho cá.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="flex-shrink-0 size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[20px]">balance</span>
                                    </span>
                                    <div>
                                        <h3 className="text-olive font-bold text-lg">Phong thủy tụ tài</h3>
                                        <p className="text-text-light">Bố trí tiểu cảnh nước ở vị trí Minh Đường tụ thủy, mang lại tài lộc và vượng khí cho gia chủ.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Highlight Image */}
                        <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDppciueAYd_vRh8d9fJ1UYHQIFxwuIgpNnEC9wT-C7gJivgkSYDj3Z_uU9XbFg93AVfsc6ZpF_1E7rqyjdLp7JJCxTS6UGNVUiXuJx5bY0GEoPOzbam6r6ZsUrmiK-G8KX7Qub7zofnbLb_XX_3kP_pogenD6AlcDFx2TgMfYMarBD5aZgAeqqjPxaDq8_vE18eq-m1FZqCpxOnLDZOInag2P9eFTb0uYUzCcrDbeSl2hjvrJak__0qy2YKy1tVlv7OPfssxLs8_g')" }}></div>
                        </div>
                    </div>
                    {/* Gallery with Masonry Grid */}
                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#eef4e7] pb-4">
                            <h2 className="text-olive text-3xl font-bold">Hình ảnh dự án</h2>
                            {/* Tabs */}
                            <div className="flex gap-1 overflow-x-auto no-scrollbar pb-1">
                                <button className="px-5 py-2 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap">Tổng quan</button>
                                <button className="px-5 py-2 rounded-full bg-transparent hover:bg-[#f2f7ec] text-text-light hover:text-olive font-medium text-sm transition-colors whitespace-nowrap">Chi tiết</button>
                                <button className="px-5 py-2 rounded-full bg-transparent hover:bg-[#f2f7ec] text-text-light hover:text-olive font-medium text-sm transition-colors whitespace-nowrap">Thi công</button>
                                <button className="px-5 py-2 rounded-full bg-transparent hover:bg-[#f2f7ec] text-text-light hover:text-olive font-medium text-sm transition-colors whitespace-nowrap">Hoàn thiện</button>
                            </div>
                        </div>
                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[250px]">
                            {/* Large item */}
                            <div className="lg:col-span-2 lg:row-span-2 rounded-xl overflow-hidden shadow-sm group relative">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJRwSb9FIziUKvQzoeELL272EoiGE3wa4GRFMtLkDZmPtH_UUzOnFzkeB2-W6QkgQfIEXS5MaxIJAdNxPau4aI19S4FKJkHNzAx4mTio7-n4BcX4lfzMudollFvQXE5BLLNYMD8_he7VhL82xb2LA2Q0x1m7FZTXUcQTmvPDj9TASnXi7PNg6cibFx8qs90UWJEuxigLuoIxgVXnsuY2gRA7ShO0xaCppYgRyLa2gAAvAnpTO8R0d8bjPWlaVWupQ-FGF3Yr-YxA4')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-medium">Toàn cảnh sân vườn nhìn từ trên cao</span>
                                </div>
                            </div>
                            {/* Small items */}
                            <div className="rounded-xl overflow-hidden shadow-sm group relative">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLkOe0rpXUAFZsz68O_pxQcwhQ7b3BU6TgMH5rwakIVM7QMZrkgmuvL7vPpPyQ2QeZd2Br_iDRHgjZVLaKe4emch7a-AKgCHnSlUJWjZ_SJrt4eqys8e6E8L2CrHzuG4sPE7o3rLmmMUq8qpbJYWT6WVvllszG7KsVo3qejdskVUGA7ti5DdTmdVGAZ0Sknwnc6wqiHXWSBRw58iTkjZRfwaUtyssWxKQ4PfQhfgnq78c_3ZHbtJU2XUY7GndbdBtkK9rNone21Q4')" }}></div>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-sm group relative">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBox3DPlW2RCk2XqgVk2IPB4npUWqZHZIQoBcIGSj3Z6D9fH7YKxvi3Sd6mKLkuSh8PiV0plbDcGWwQYS0v9h5w-wLMdTClNRgKq5c9vA0sfpFnjc8JDffDTxKKEqP4_2H2VqdeDT0zxNpDXF5sQV6nLYgjQc5Z9IevkQQ705va7gvIrULULJ3RXiX8JTjfiyZUzp-TJrKtQ-op24CQ9teM556qgPIZcryZ3kAYaWgt12OCebyFtuYFNUzlFHMf8kH0ZSMNBhiYmzA')" }}></div>
                            </div>
                            {/* Wide item bottom */}
                            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-sm group relative">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArL7VO1fs22Rvr8-4fzXdNgTyUvxz3qa3JxwZOOCBjVvjM3hXSovB5lAuHYXJGpjCIOtwgOf6lz5dCcmShyR3bVs-V520gj60WJJxvVfNltCiOx_NMhlFXomQ2VpaaRtZQhXDDX0j9GadlweWL2IQ7LQ12wr4BL8C5k59AVxwsdxXUtC3_tXRZpQyPKErHDViUuyoZCYVTUTVN36HyMDTZNAvSRMDT8r7CHM2z-6vycgxquyntUvb60Pna1oampt7XGW_3KJe8ALA')" }}></div>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-sm group relative">
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPpIKak8Gn2dnbyheedADLLljeKRk3TJxYmuuxdofPLNFWv1cat0C9uf0_ArGfDxN2p7efPQsYigun5jK7Rrzceb8sYL9F2-HEvPHPayg3l3BaxRjqFx2GkkLkt78KeFyd4EPNsCv5xAt5-nTrkiVguxGjIgYStIjGRayjRZaNd40nk5Bttc1pPJleVeg_1OjChgvlleYBM-DOFTw2qf36UNXe4VayX09-96FCR4wTqt3mQbj21uxAjr4wvFAvgh0ePv-Mzh5kQ7c')" }}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA & Form Section */}
                <section className="w-full bg-[#f2f7ec] py-16 lg:py-20">
                    <div className="max-w-[1280px] mx-auto px-5 xl:px-20">
                        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row gap-12 lg:gap-20">
                            {/* Text */}
                            <div className="flex-1 flex flex-col justify-center">
                                <span className="text-primary font-bold tracking-wider text-sm mb-2 uppercase">Liên hệ với chúng tôi</span>
                                <h2 className="text-3xl lg:text-4xl font-black text-olive mb-6 leading-tight">Nhận tư vấn cho dự án tương tự?</h2>
                                <p className="text-text-light text-lg mb-8">
                                    Để lại thông tin, kiến trúc sư của KGX sẽ liên hệ tư vấn giải pháp thiết kế &amp; thi công cảnh quan tối ưu nhất cho ngôi nhà của bạn.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-text-light font-medium uppercase">Hotline 24/7</p>
                                            <p className="text-xl font-bold text-olive">0868 462 462</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-text-light font-medium uppercase">Email</p>
                                            <p className="text-xl font-bold text-olive">info@kgx.vn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Form */}
                            <div className="flex-1 max-w-lg">
                                <form className="flex flex-col gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Họ và tên</label>
                                        <input className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Nhập họ tên của bạn" type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Số điện thoại</label>
                                        <input className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Nhập số điện thoại" type="tel" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-olive mb-2">Nội dung tư vấn</label>
                                        <textarea className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Mô tả sơ bộ nhu cầu của bạn..."></textarea>
                                    </div>
                                    <button className="mt-2 w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2" type="button">
                                        Gửi yêu cầu tư vấn
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProjectsPage2;
