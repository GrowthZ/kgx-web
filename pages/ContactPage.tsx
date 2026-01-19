import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-[#f8f8f6] text-[#181b0d] flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-[#1d2210] overflow-hidden py-16 lg:py-24">
                    {/* Abstract Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#a4d411 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Hero Content */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a4d411]/20 rounded-full w-fit">
                                        <span className="size-2 rounded-full bg-[#a4d411] animate-pulse"></span>
                                        <span className="text-[#a4d411] text-xs font-bold uppercase tracking-wider">Tư vấn miễn phí</span>
                                    </div>
                                    <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                                        LIÊN HỆ & NHẬN <br />
                                        <span className="text-[#a4d411]">TƯ VẤN DỰ ÁN</span>
                                    </h1>
                                    <p className="text-gray-300 text-lg max-w-lg">
                                        Giải pháp cảnh quan toàn diện, thi công chuyên nghiệp và bảo hành dài hạn cho mọi công trình của bạn.
                                    </p>
                                </div>
                                {/* Trust Bullets */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#a4d411]/20 text-[#a4d411]">
                                            <span className="material-symbols-outlined text-xl">check</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">Đúng nhu cầu, đúng ngân sách</h4>
                                            <p className="text-gray-400 text-sm">Tối ưu chi phí với các gói giải pháp linh hoạt.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#a4d411]/20 text-[#a4d411]">
                                            <span className="material-symbols-outlined text-xl">description</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">Báo giá minh bạch, chi tiết</h4>
                                            <p className="text-gray-400 text-sm">Không phát sinh chi phí ẩn trong quá trình thực hiện.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#a4d411]/20 text-[#a4d411]">
                                            <span className="material-symbols-outlined text-xl">handshake</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">Đồng hành trọn đời</h4>
                                            <p className="text-gray-400 text-sm">Bảo hành, bảo trì và chăm sóc cảnh quan dài hạn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-[#a4d411]/20 rounded-2xl blur-lg transition-all duration-500 group-hover:bg-[#a4d411]/40"></div>
                                <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                                    <img alt="Professional construction team discussing plans on a sunny outdoor site" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDepEpyRCQ3CfhBb4Yy7PAn169OBaHTb_AwPJyGwqw8DUVoJJ2rS5qGsSWefeEd_l27E_VIAe9R8IlzxHfgTIe3mfSt12gHAwlFiRKzo-Hd1R1BV1jgGyLOcHGbV2HIVv1OXoC9sC66mD4ygnN0B8aX6XQRidGicJTqZrq0DWfLPT1L6VokiAN_FZQ7I_tP1VMW5cvoDRecuzbl4i5hFQluGcdJjF5qtqG-idQ_5-8mslB3OP5oIoLeDE1ANZiUsGXgwLE9a7n1lCA" />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[200px] border border-gray-100">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                        <span className="material-symbols-outlined">emoji_events</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Kinh nghiệm</p>
                                        <p className="text-[#1d2210] font-bold text-lg">10+ Năm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-16 md:py-24 bg-[#f8f8f6]">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Left Column: Form (7 cols) */}
                            <div className="lg:col-span-7">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#1d2210] mb-2">Gửi thông tin dự án</h2>
                                        <p className="text-gray-600">Hãy để lại thông tin, đội ngũ kỹ sư của KGX sẽ liên hệ tư vấn trong vòng 30 phút.</p>
                                    </div>
                                    <form action="#" className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="name">Họ và tên *</label>
                                                <input className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none" id="name" placeholder="Nguyễn Văn A" type="text" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="phone">Số điện thoại *</label>
                                                <input className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none" id="phone" placeholder="0912 xxx xxx" type="tel" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                                            <input className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none" id="email" placeholder="example@gmail.com" type="email" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="project-type">Loại công trình</label>
                                                <div className="relative">
                                                    <select className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none appearance-none cursor-pointer" id="project-type">
                                                        <option>Biệt thự sân vườn</option>
                                                        <option>Khu nghỉ dưỡng (Resort)</option>
                                                        <option>Quán Cafe / Nhà hàng</option>
                                                        <option>Công trình công cộng</option>
                                                        <option>Khác</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                        <span className="material-symbols-outlined">expand_more</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="location">Khu vực</label>
                                                <input className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none" id="location" placeholder="Ví dụ: Thái Nguyên, Hà Nội..." type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-gray-700">Nhu cầu dịch vụ</label>
                                            <div className="flex flex-wrap gap-4">
                                                <label className="inline-flex items-center gap-2 cursor-pointer group">
                                                    <input className="w-5 h-5 rounded border-gray-300 text-[#a4d411] focus:ring-[#a4d411]/20 transition-all" type="checkbox" />
                                                    <span className="text-sm text-gray-600 group-hover:text-[#a4d411] transition-colors">Thiết kế cảnh quan</span>
                                                </label>
                                                <label className="inline-flex items-center gap-2 cursor-pointer group">
                                                    <input className="w-5 h-5 rounded border-gray-300 text-[#a4d411] focus:ring-[#a4d411]/20 transition-all" type="checkbox" />
                                                    <span className="text-sm text-gray-600 group-hover:text-[#a4d411] transition-colors">Thi công trọn gói</span>
                                                </label>
                                                <label className="inline-flex items-center gap-2 cursor-pointer group">
                                                    <input className="w-5 h-5 rounded border-gray-300 text-[#a4d411] focus:ring-[#a4d411]/20 transition-all" type="checkbox" />
                                                    <span className="text-sm text-gray-600 group-hover:text-[#a4d411] transition-colors">Bảo dưỡng định kỳ</span>
                                                </label>
                                                <label className="inline-flex items-center gap-2 cursor-pointer group">
                                                    <input className="w-5 h-5 rounded border-gray-300 text-[#a4d411] focus:ring-[#a4d411]/20 transition-all" type="checkbox" />
                                                    <span className="text-sm text-gray-600 group-hover:text-[#a4d411] transition-colors">Cung cấp vật tư</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700" htmlFor="message">Lời nhắn chi tiết</label>
                                            <textarea className="w-full p-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none resize-none" id="message" placeholder="Mô tả sơ bộ về ý tưởng, diện tích hoặc ngân sách dự kiến..." rows={4}></textarea>
                                        </div>
                                        <button className="w-full h-14 bg-[#a4d411] hover:bg-[#8cb60e] text-[#1d2210] font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" type="button">
                                            <span>Gửi yêu cầu tư vấn</span>
                                            <span className="material-symbols-outlined">send</span>
                                        </button>
                                        <p className="text-xs text-center text-gray-500">Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.</p>
                                    </form>
                                </div>
                            </div>
                            {/* Right Column: Info & Sidebar (5 cols) */}
                            <div className="lg:col-span-5 space-y-8">
                                {/* Contact Info Card */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-[#1d2210] mb-6">Thông tin liên hệ</h3>
                                    <div className="space-y-6">
                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1d2210]">
                                                <span className="material-symbols-outlined">location_on</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Trụ sở chính</p>
                                                <p className="text-base text-[#1d2210] font-medium leading-relaxed">
                                                    Số 123, Đường Lương Ngọc Quyến, TP. Thái Nguyên, Tỉnh Thái Nguyên
                                                </p>
                                            </div>
                                        </div>
                                        {/* Email */}
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1d2210]">
                                                <span className="material-symbols-outlined">mail</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Email hỗ trợ</p>
                                                <a className="text-base text-[#1d2210] font-medium hover:text-[#a4d411] transition-colors" href="mailto:contact@kgx.vn">
                                                    contact@kgx.vn
                                                </a>
                                            </div>
                                        </div>
                                        {/* Working Hours */}
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1d2210]">
                                                <span className="material-symbols-outlined">schedule</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Giờ làm việc</p>
                                                <p className="text-base text-[#1d2210] font-medium">
                                                    Thứ 2 - Thứ 7: 8:00 - 17:30
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-6 border-gray-100" />
                                    <div className="grid grid-cols-2 gap-3">
                                        <a className="flex flex-col items-center justify-center p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors group" href="tel:0868462462">
                                            <span className="material-symbols-outlined text-[#f59e0b] text-3xl mb-1 group-hover:scale-110 transition-transform">call</span>
                                            <span className="text-xs font-semibold text-orange-800 uppercase">Gọi ngay</span>
                                            <span className="text-sm font-bold text-[#f59e0b]">0868 462 462</span>
                                        </a>
                                        <a className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group" href="#">
                                            <span className="material-symbols-outlined text-blue-600 text-3xl mb-1 group-hover:scale-110 transition-transform">chat</span>
                                            <span className="text-xs font-semibold text-blue-800 uppercase">Chat Zalo</span>
                                            <span className="text-sm font-bold text-blue-600">KGX Connect</span>
                                        </a>
                                    </div>
                                </div>
                                {/* Trust Box */}
                                <div className="bg-gradient-to-br from-[#1d2210] to-[#2c331a] rounded-2xl shadow-lg p-6 md:p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <span className="material-symbols-outlined text-9xl">verified_user</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-4 relative z-10">Tại sao chọn KGX?</h3>
                                    <ul className="space-y-4 relative z-10">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#a4d411] mt-0.5">star</span>
                                            <span className="text-sm text-gray-200">Top 10 đơn vị thi công cảnh quan uy tín miền Bắc.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#a4d411] mt-0.5">engineering</span>
                                            <span className="text-sm text-gray-200">Đội ngũ kỹ sư & nghệ nhân {'>'} 5 năm kinh nghiệm.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#a4d411] mt-0.5">inventory_2</span>
                                            <span className="text-sm text-gray-200">Sở hữu vườn ươm 5000m² tại Thái Nguyên.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative h-[400px] bg-gray-100 group">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw8SasX9gVvVGgET9Ue9oONNT4OOJgBfIw560lb_QnUCUJST2d7bRf7gYdYy-Kgvj0w4-SW89wf9zTayxJ40TzOEPPsp_3DhQ1FH_6jPwpeSPWOLyFeswiKm9Qrh6Af3Tp_SEJ2KVaqMZwNRlLPCOGWLC98YwwL4Zd14PiJWnhlyhJVf6QExKLXW_bT77iGiEaI6vUxlW-xjusN2oEuxjEUIWa9VbonIBlScjkg4OMduXksmkL-zldtKPh7jGh3VYUQrJKW0DaI44')" }}>
                        <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    {/* Map Overlay Card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4">
                        <div className="bg-white p-6 rounded-2xl shadow-2xl text-center transform transition-transform hover:scale-105 duration-300">
                            <div className="size-16 bg-[#a4d411]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#a4d411]">
                                <span className="material-symbols-outlined text-3xl">map</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1d2210] mb-2">Phục vụ toàn quốc</h3>
                            <p className="text-gray-500 text-sm mb-4">
                                Dù trụ sở tại Thái Nguyên, KGX sẵn sàng thực hiện các dự án quy mô lớn trên khắp 63 tỉnh thành.
                            </p>
                            <button className="text-[#a4d411] font-bold text-sm hover:underline">Xem chỉ đường trên Google Maps</button>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-[800px] mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#1d2210] mb-4">Câu hỏi thường gặp</h2>
                            <p className="text-gray-600">Giải đáp nhanh những thắc mắc của bạn về quy trình làm việc của KGX</p>
                        </div>
                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">Bao lâu thì tôi nhận được báo giá?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    Thông thường, sau khi tiếp nhận thông tin và khảo sát sơ bộ (online hoặc offline), KGX sẽ gửi báo giá khái toán trong vòng 24h. Với các dự án lớn cần bóc tách khối lượng chi tiết, thời gian là 3-5 ngày làm việc.
                                </div>
                            </details>
                            {/* FAQ Item 2 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">KGX có hỗ trợ khảo sát tận nơi không?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    Có. Chúng tôi khuyến khích việc khảo sát thực địa để đánh giá chính xác hiện trạng đất, hướng nắng, gió và thổ nhưỡng. Chi phí khảo sát sẽ được hoàn lại 100% khi ký hợp đồng thi công.
                                </div>
                            </details>
                            {/* FAQ Item 3 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">Quy trình bảo hành cây xanh như thế nào?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    KGX bảo hành cây bóng mát trong vòng 3-6 tháng và cây bụi trong vòng 1 tháng kể từ ngày nghiệm thu. Nếu cây chết do lỗi kỹ thuật trồng hoặc sâu bệnh có sẵn, chúng tôi sẽ thay thế miễn phí 1 đổi 1.
                                </div>
                            </details>
                            {/* FAQ Item 4 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">Chi phí thiết kế được tính ra sao?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    Chi phí thiết kế được tính dựa trên diện tích (m2) và phong cách thiết kế. Đơn giá dao động từ 80.000đ - 250.000đ/m2. Đặc biệt, KGX giảm 50-100% phí thiết kế khi khách hàng ký hợp đồng thi công trọn gói.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="py-20 bg-[#1d2210] relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a4d411]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
                    <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Kiến tạo không gian sống mơ ước</h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">Đừng ngần ngại chia sẻ ý tưởng của bạn. Chúng tôi ở đây để hiện thực hóa nó thành những khu vườn tuyệt tác.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 h-14 bg-[#a4d411] hover:bg-[#8cb60e] text-[#1d2210] font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(164,212,17,0.3)] hover:shadow-[0_0_30px_rgba(164,212,17,0.5)]">
                                Đăng ký tư vấn ngay
                            </button>
                            <button className="w-full sm:w-auto px-8 h-14 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold rounded-xl transition-all hover:bg-white/5">
                                Xem hồ sơ năng lực
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
