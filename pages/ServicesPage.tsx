import React from 'react';

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-dark">
            <main className="flex flex-col w-full max-w-[1440px] mx-auto overflow-hidden">
                {/* Hero Section */}
                <section className="relative px-4 md:px-10 py-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <div className="flex flex-col gap-3">
                                <span className="text-primary font-bold tracking-wider uppercase text-sm">Chuyên nghiệp &amp; Tận tâm</span>
                                <h1 className="text-[#161c0d] text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                    Dịch vụ thi công cảnh quan trọn gói
                                </h1>
                                <h2 className="text-gray-600 text-base md:text-lg font-normal leading-relaxed mt-2">
                                    Thi công đúng thiết kế - Chuẩn kỹ thuật - Bảo dưỡng chuyên nghiệp. Đội ngũ kỹ sư giàu kinh nghiệm, trang thiết bị hiện đại đảm bảo tiến độ và chất lượng cho mọi công trình.
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-primary text-[#161c0d] text-base font-bold hover:bg-primary-dark transition-colors">
                                    Xem hồ sơ năng lực
                                </button>
                                <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-white border border-[#eef4e7] text-[#161c0d] text-base font-bold hover:bg-gray-50 transition-colors">
                                    Tư vấn ngay
                                </button>
                            </div>
                            <div className="flex gap-8 mt-4 pt-6 border-t border-gray-100">
                                <div>
                                    <p className="text-3xl font-black text-[#161c0d]">10+</p>
                                    <p className="text-sm text-gray-500">Năm kinh nghiệm</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-[#161c0d]">500+</p>
                                    <p className="text-sm text-gray-500">Dự án hoàn thành</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-[#161c0d]">100%</p>
                                    <p className="text-sm text-gray-500">Hài lòng</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEJieVG_g_XHV7pOz8ACK8XBW-8zNoI3ouoilY0EdthFtIc92I_h1q5qd6ju9kMosrOHyBmaC3y12vjWpMBB47uTTjvBhysC2bMTTScEtribQqxOt_vSMIZhl849xuBnYM1-hjDsPwAiF6fNhrC6ry9y1T3s-B4nfR-SUYdez73HguB86gWpOYH0R22tWBJ4EPBXKzChjAXsU_KsQfPZI7kDRU13uhsSnhejlEcNfrF7megnAiu_Th7cOH7GdztEZEjDH6oCoR524')" }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </section>

                {/* Target Audience Section */}
                <section className="px-4 md:px-10 py-16 bg-white">
                    <div className="text-center mb-12">
                        <h2 className="text-[#161c0d] text-3xl font-bold mb-4">Đối tượng khách hàng</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Chúng tôi cung cấp giải pháp cảnh quan toàn diện cho đa dạng các loại hình dự án, từ tư nhân đến công cộng.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="flex flex-col bg-[#fcfdfb] border border-[#eef4e7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined">villa</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#161c0d]">Biệt thự &amp; Tư gia</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Kiến tạo không gian sống xanh, đẳng cấp và riêng tư cho các biệt thự, nhà vườn.</p>
                            </div>
                            <div className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCW0nQ5yJMDc4QuZ4nRdggEF5tDPgpUtm4Nh9znbRpj-ESjNs8IDXRrXmN2HDXeOa-OLwXAS3vFiv8kash0MJIR1o-_5qY04kroiB1iFkh0AjhrA8ArZ80uyhs1y5SacUGP0ChXxRGF0sbsdI9ZRfH1GkJwY_yESTFQSAK1rVPsp0nVffx2chsllArlsXViYfUSbYXgXfQy_bhu9Fr9MMq7XdEUuPrKhafd_etG2teD4rls5zFDDHEomadJ607JP1DoyvFAhypKoqo')" }}></div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col bg-[#fcfdfb] border border-[#eef4e7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined">pool</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#161c0d]">Resort &amp; Khách sạn</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Cảnh quan nghỉ dưỡng sinh thái, tạo điểm nhấn thu hút du khách và nâng tầm trải nghiệm.</p>
                            </div>
                            <div className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCX3qA82DDNK4NT3MT1ybra6n0bKKXdxjcP-Zn3OOgpQaLlDAXqQt_4SPjVNagwfB2-sAPAMha_zeF_yrdL2ZCY-E7ufZb74yQvpWtJixDm42mPBk7ajUtA1rn-TO9Uz0cR7zIZp0BZ17s0hW7L0Z0ihtg59LXM3uZhtAMCwQh85hejCIvqCFt0Phg1lWY8sFeDJZvs9kK-aIyf9K0DT_2T1ISlTYEmj_trmqH6eaDFFhnmUeMt1YYXKu1pU2jKD97FBVRoMzIkvNs')" }}></div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col bg-[#fcfdfb] border border-[#eef4e7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined">apartment</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#161c0d]">Khu Đô thị</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Thi công công viên, cảnh quan đường phố, khu vui chơi chung cư đảm bảo tiến độ.</p>
                            </div>
                            <div className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCv_k4rVoMlBQFdv0qPQc9bpH1mHUg3CbIFpDIsJ2w_5rvhVH9y-QwC2bPXWdvvhNJv1akD9bgJ4NF8MQdi9Hn7yBgQyCSbhxDTE2eIoPiikNmbcByQYLDv_1k4rmw9xOgdlEDHUyoeBX8ebrKYLVl5-jarFjg0t8tZ4xn78_VrNjVYnTSEPOZNz1DdVyUM2qylAk3QbtJv2YkArWjbMRU4oKXtqv5dHdR4Uxps1JsIb8O3697ary8O_rNoV_x9X8f2QMb_25Vfu0E')" }}></div>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col bg-[#fcfdfb] border border-[#eef4e7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                                    <span className="material-symbols-outlined">factory</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#161c0d]">KCN &amp; Nhà máy</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Giải pháp xanh hóa khu công nghiệp, giảm thiểu bụi và tạo môi trường làm việc tích cực.</p>
                            </div>
                            <div className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAc7E8gFlkwOBC7Gnu5EAm-rZjvrRRu1Ac0noPowjxMz5J7i7y37xrESxtmsvHzDcxxgn_J1DnXY3Q51SZZmobfWypmrOI39xM_Z9YI9MCfP1rwC5zZPAjC5PiTiLeJtukoL8wzx4Ia7K5Tu9vocGAkahcvyNpMogmhaoPpTEJKZylBeTVOkaxHpejQ4KulOOTkHJPQNl_DTTjB2BHsH6IOn0i2qlcyjdA76bufc8ZrWBNY3y0U70Ph8gCiFkSx5FGf26HsY8RIF94')" }}></div>
                        </div>
                    </div>
                </section>

                {/* Construction Categories Section */}
                <section className="px-4 md:px-10 py-16 bg-[#f7f8f5]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <h2 className="text-[#161c0d] text-3xl font-bold mb-2">Hạng mục thi công chính</h2>
                            <p className="text-gray-500">Dịch vụ đa dạng đáp ứng mọi yêu cầu kỹ thuật khắt khe nhất.</p>
                        </div>
                        <button className="text-primary font-bold flex items-center hover:underline">
                            Xem tất cả dịch vụ <span className="material-symbols-outlined ml-1">arrow_forward</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* S1 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                            <div className="h-48 rounded-xl bg-cover bg-center mb-4" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_JAcY-w0BCJWklSOxQte-ZzWzg_8r2V7_Zz5R_3c1U7FixKdlGMKOvRp5-AAdvVt_dIC2ZMG0RjrDFh0I5M9LTmM-5IaG-tQwjzg6Y5kttZoHiydJlvq9Tdn4_YMrxsYhT7a28ZLTEySYMYHll_29gMfGOGnZ7k7esdwp5j8aYinDupfk3Va9AP0paR2UzDxc4tlyCAvy71bO06uSOpMFRG_wc01P5wuyH9imttHl8jQC052CHeyDDG_wTrSthTKdKGbJN9KCoqw')" }}></div>
                            <h3 className="text-lg font-bold text-[#161c0d] mb-2">Thi công sân vườn</h3>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-3">Thiết kế và thi công sân vườn trọn gói, tiểu cảnh, hồ cá koi, đài phun nước nghệ thuật.</p>
                            <a className="text-sm font-semibold text-primary inline-flex items-center" href="#">Chi tiết <span className="material-symbols-outlined text-sm ml-1">chevron_right</span></a>
                        </div>
                        {/* S2 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                            <div className="h-48 rounded-xl bg-cover bg-center mb-4" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxP40ijO69wPd4UAY-_ZEG4o_Rwvf1EiDKJxZvHVtnuEROuJDVY0P0oxDOAe-bHGnAVVw7wkhP_EQdvsYLnN3_FEaxkUtGqwOvap3Jeo-6jS9pagWZnSElGI8Sc8LX4g-XMylPymmIvdcFz1sb7uBj4BGHy2u3ja7Q2wIDhKjuppB44fnorD9La7QfZwCHVpspkkIGDIU1PsKL-17T2WQxFBIYsxvkyVDzcgBw9XLW_87kXP42ez3FGCXmzQ0dLtwMY7dmVHzV56o')" }}></div>
                            <h3 className="text-lg font-bold text-[#161c0d] mb-2">Chăm sóc &amp; Bảo dưỡng</h3>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-3">Dịch vụ cắt tỉa, bón phân, phòng trừ sâu bệnh định kỳ giúp cảnh quan luôn xanh tốt.</p>
                            <a className="text-sm font-semibold text-primary inline-flex items-center" href="#">Chi tiết <span className="material-symbols-outlined text-sm ml-1">chevron_right</span></a>
                        </div>
                        {/* S3 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                            <div className="h-48 rounded-xl bg-cover bg-center mb-4" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDpKl5pR-n2ocKMs2G70vTo5sZM5T3dpfqG8jOPPt4iJZ9tyV-BuY_YIFxLFWVriopto6GHAIH_kwaotyIeY009ihzlWzfzRfi8zUna6QAueWvRGD8zUTxQdekdj_82nI5SQa3gwdUQWEOjsA5RSX5tsBQxwVYOXvV50hfvA87LYahHcEbDKVfnMCegQbIXR2lsnSOZk2tDqPyEWtHtPr3IwykxOYFY_N7etmaGXlBkySxWeFfZuO7CDWQ7OFtT0aZNoSDi5DS_JYA')" }}></div>
                            <h3 className="text-lg font-bold text-[#161c0d] mb-2">Cung cấp cây bóng mát</h3>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-3">Hệ thống vườn ươm quy mô lớn, cung cấp cây công trình, cây bóng mát đa dạng kích thước.</p>
                            <a className="text-sm font-semibold text-primary inline-flex items-center" href="#">Chi tiết <span className="material-symbols-outlined text-sm ml-1">chevron_right</span></a>
                        </div>
                        {/* S4 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all">
                            <div className="h-48 rounded-xl bg-cover bg-center mb-4" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvx7qglDBZax8oKR36jSnYKAS6QjJAadzTemOK0ld9RQFhLNm_arbP9XA2AHLqWsfS-Bowg6EgRTdyZXz0hZJTWgPRnG1dF_16rVf0Itxq52x8MSe6AF4H4THQYR_rTL824sZt_JPoAb8pqK4nDtzv35LlVQpnALFnZsGtKbwZx0H-8zsjTzowLZuJdmaaUH6m0KGStaAm8JTl1gBzMmv-p5aHaHw9M3jQpWXpnDfQVthrRRnIvTYNXYLW-ZJ5LyCe7XraK5Dezog')" }}></div>
                            <h3 className="text-lg font-bold text-[#161c0d] mb-2">Giải pháp xanh thông minh</h3>
                            <p className="text-sm text-gray-500 mb-3 line-clamp-3">Thi công vườn tường đứng, vườn trên mái, hệ thống tưới tự động tiết kiệm nước.</p>
                            <a className="text-sm font-semibold text-primary inline-flex items-center" href="#">Chi tiết <span className="material-symbols-outlined text-sm ml-1">chevron_right</span></a>
                        </div>
                        {/* More services... */}
                    </div>
                </section>

                {/* Process Steps */}
                <section className="px-4 md:px-10 py-16 bg-[#161c0d] text-white">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Quy trình làm việc</span>
                        <h2 className="text-3xl font-bold">6 Bước triển khai dự án</h2>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                            {[
                                { step: '01', title: 'Tiếp nhận', desc: 'Ghi nhận yêu cầu, tư vấn sơ bộ' },
                                { step: '02', title: 'Khảo sát', desc: 'Đo đạc hiện trạng, lên ý tưởng' },
                                { step: '03', title: 'Báo giá', desc: 'Lập dự toán & Ký hợp đồng' },
                                { step: '04', title: 'Thi công', desc: 'Triển khai theo tiến độ cam kết' },
                                { step: '05', title: 'Bàn giao', desc: 'Nghiệm thu & Hướng dẫn' },
                                { step: '06', title: 'Bảo hành', desc: 'Chăm sóc & Duy trì cảnh quan' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col lg:items-center text-left lg:text-center group">
                                    <div className="size-16 rounded-full bg-gray-800 border-2 border-gray-600 group-hover:border-primary group-hover:bg-primary transition-colors flex items-center justify-center text-xl font-bold mb-4 mx-0 lg:mx-auto">
                                        {item.step}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lead Form Section */}
                <section className="px-4 md:px-10 py-16 bg-[#eef4e7]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                        <div className="lg:col-span-7">
                            <h2 className="text-[#161c0d] text-3xl font-bold mb-2">Đăng ký tư vấn miễn phí</h2>
                            <p className="text-gray-500 mb-8">Để lại thông tin, đội ngũ kỹ sư KGX sẽ liên hệ khảo sát và báo giá trong vòng 24h.</p>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                                    <input className="w-full rounded-xl border-gray-200 bg-[#fafcf8] h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Nguyễn Văn A" type="text" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                                    <input className="w-full rounded-xl border-gray-200 bg-[#fafcf8] h-12 px-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="09xxxxxxx" type="tel" />
                                </div>
                                {/* More form fields... */}
                                <div className="col-span-1 md:col-span-2">
                                    <button className="w-full rounded-xl bg-primary hover:bg-primary-dark text-[#161c0d] font-bold h-14 transition-colors text-lg shadow-md" type="button">Gửi yêu cầu ngay</button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-center bg-[#161c0d] rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary blur-[60px] opacity-20 rounded-full"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Liên hệ trực tiếp</h3>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="size-10 rounded-full bg-gray-800 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Hotline 24/7</h4>
                                        <p className="text-2xl font-bold text-primary">0868 462 462</p>
                                    </div>
                                </div>
                                {/* More contact info... */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServicesPage;
