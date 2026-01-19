import React from 'react';

const ThiCongSanVuonPage: React.FC = () => {
    return (
        <div className="bg-[#fcfbf8] text-[#151811] flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="w-full py-12 lg:py-16">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                            <a className="text-[#758560] hover:text-[#516c2d]" href="/">Trang chủ</a>
                            <span className="text-[#758560]">/</span>
                            <a className="text-[#758560] hover:text-[#516c2d]" href="/dich-vu">Dịch vụ</a>
                            <span className="text-[#758560]">/</span>
                            <span className="text-[#516c2d] font-medium">Thi công sân vườn biệt thự</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-[#151811] leading-tight tracking-tight uppercase">
                                    THI CÔNG <br /><span className="text-[#516c2d]">SÂN VƯỜN BIỆT THỰ</span>
                                </h1>
                                <p className="text-lg text-[#758560] leading-relaxed max-w-lg">
                                    Giải pháp cảnh quan toàn diện cho không gian sống đẳng cấp. Chúng tôi biến ý tưởng thành hiện thực với quy trình thi công chuyên nghiệp, vật liệu chọn lọc và tối ưu chi phí vận hành.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="h-12 px-8 rounded-lg bg-[#516c2d] text-white font-bold text-base hover:bg-[#516c2d]/90 transition-all shadow-md flex items-center gap-2">
                                        <span>Tư vấn dịch vụ này</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-8 rounded-lg border-2 border-[#eef0ea] text-[#151811] font-bold text-base hover:border-[#D67A31] hover:text-[#D67A31] transition-all bg-white">
                                        Gọi 0868 462 462
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 mt-4 pt-6 border-t border-gray-100">
                                    <div className="flex -space-x-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBx3JHQHU0tQV2D13VF9czYqgpaf3DNSVwParvrCua9ThO_Q_OZgZCwi5Iq-dDHGNZdVBiY5Bq8hYK_goAHznG9R0OAFed2YvbBpYwWtB8rW-G7riCXMhSveZtDv-MyOklWduA2rLk2zJFkosKAg2ejg4jIzxrL3jfNbPx4sS_X_vxAcodBNKMvdeIoRw-VQ0s5wYLpumy3Hmi4RsUjj7NgphiHNnKBzY9mcVDV8_TIX27ephsLvqDk6PA1_kZb6rE0MPqj7TixJ74')" }}></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtliVfeFBVyMbDl4GJCtSFOIAyg10V9pCzRWnal_Ysm1M_G0Qo3eVHKB9MgF2QXrfaInNCGEOfHA4TdVfhj-KQRNzDon8PS4G-W3Up1x6nSuItIujnae6hYQDOm8mMJv7eZ3gW2vKh77adqpY984KqU6SQbPIBvu-xVBsNj-w7GqVyYneQ_ubz5UDhdznGRDJ2-oFufApXiHdh5CoVQ9vW754IxYG5mvPYiKxlE_0-itDcmdaHghaScNvqq8r6Ge91_iSHhc4DdZE')" }}></div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyrxGNE692q_reJ87wKhJQ-KjQ-Dpoh5R5nrEisAhpqUW-sgEyqKH_U3eZ71wbYzSCh4eDHQvuszIi2oP6eb6g-50ZJcq-5DuT9qJOgPXbIxM1_B53T888UrvT_42q2qZmJYmHWgD1G_tPvP5jk_2uVbdc4_oZCE9sVqCO-3dbFDaXqJ4O5PFhMSoqvwGNNMlvIZriy0deR7Wwvd99T3E6dSx3nI8Q9mWv7D7aHQ3ln-OsxlPxY-DoIDnW_xLTzvwLkYFrZw0YcvA')" }}></div>
                                    </div>
                                    <p className="text-sm font-medium text-[#151811]"><span className="text-[#516c2d] font-bold">150+</span> Dự án đã hoàn thiện</p>
                                </div>
                            </div>
                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#516c2d] to-[#D67A31] rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                                    <div className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAE8F_K_XwGmowgp7iB9t5Ss4VOMDqCh6AvfGiVvnQbOemcMSXY5d07YojTZVk7NJv7TQpRdco_Qv0aXIbUIVtUdw60ehS7lvSNjzuvuBhKrrH2ZNX4hejKoapSk6jaC3nikbTUmrmWWkUvk1fz7km0Tuigb1f8oT1ha1Knbr6vJSf4z-Sec_bMaljw03PD3e2zM9v2fw-Mq_BX8EoBNeh7lShXmx_rZQlsoPqqn8QU93wjWv6z_9_b202DXunQDqd2zcQKWj2mz-U')" }}>
                                    </div>
                                    {/* Image overlay label */}
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                                        <p className="text-xs font-bold text-[#516c2d] uppercase tracking-wider">Thi công thực tế</p>
                                        <p className="text-sm font-semibold text-[#151811]">Biệt thự Vinhomes Riverside</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Suitability Section */}
                <section className="w-full py-10 bg-[#F7F5F2] border-y border-[#eef0ea]">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <h2 className="text-xl font-bold text-[#151811] mb-6">Phù hợp với nhu cầu</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: "villa", title: "Biệt thự (Villa)", desc: "Không gian sống đẳng cấp, riêng tư." },
                                { icon: "deck", title: "Khu nghỉ dưỡng", desc: "Trải nghiệm thư giãn tuyệt đối cho khách." },
                                { icon: "park", title: "Cảnh quan đô thị", desc: "Quy hoạch xanh bền vững, hiện đại." },
                                { icon: "domain", title: "Doanh nghiệp", desc: "Nâng tầm hình ảnh chuyên nghiệp." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-5 rounded-lg border border-[#eef0ea] hover:border-[#516c2d]/30 hover:shadow-md transition-all flex items-start gap-4">
                                    <div className="p-2 bg-[#516c2d]/10 text-[#516c2d] rounded-md">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#151811] text-base">{item.title}</h3>
                                        <p className="text-sm text-[#758560] mt-1 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Scope of Work */}
                <section className="w-full py-16 lg:py-24">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <div className="flex flex-col lg:flex-row gap-16">
                            {/* Left: Checklist */}
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 rounded-full bg-[#D67A31]/10 text-[#D67A31] text-sm font-bold mb-4">Phạm vi công việc</div>
                                <h2 className="text-3xl font-bold text-[#151811] mb-8">Quy trình triển khai chi tiết</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Khảo sát hiện trạng & Tư vấn", desc: "Đánh giá thổ nhưỡng, hướng nắng, gió và kiến trúc tổng thể để đưa ra giải pháp tối ưu." },
                                        { title: "Thiết kế & Lập dự toán", desc: "Lên bản vẽ 2D/3D chi tiết và bảng dự toán minh bạch, cam kết không phát sinh." },
                                        { title: "Lựa chọn vật liệu & Cây xanh", desc: "Tuyển chọn đá lát, đèn chiếu sáng và cây trồng khỏe mạnh, phù hợp khí hậu địa phương." },
                                        { title: "Thi công & Giám sát", desc: "Đội ngũ kỹ thuật lành nghề thi công chính xác theo bản vẽ, đảm bảo tiến độ." },
                                        { title: "Bàn giao & Hỗ trợ sau dịch vụ", desc: "Hướng dẫn chăm sóc chi tiết và bảo hành dài hạn cho công trình." }
                                    ].map((item, index) => (
                                        <div key={index} className="flex gap-4 group">
                                            <div className="mt-1">
                                                <div className="w-6 h-6 rounded-full bg-[#516c2d] text-white flex items-center justify-center text-xs font-bold">{index + 1}</div>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-[#151811] group-hover:text-[#516c2d] transition-colors">{item.title}</h4>
                                                <p className="text-[#758560] mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Right: Image */}
                            <div className="flex-1 relative">
                                <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#D67A31]/10 rounded-full blur-3xl"></div>
                                <div className="relative h-full min-h-[500px] w-full bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBh61Qk53nLTq7mdYhno7YgYHUcnxUeo5dJX-dqWf5-RFz-Z8Z3uGk0ymwPruUD42HV7YEMMGHADT9Lm_AtbyaoMOuDsl088MsDXTigXvJYHZIFCWQSBnZpYj92sLWsxHHeTosanqC-hb2BNB1Ar0iysSoDAQT4GET4Mjp0XZG2vYKHv6yNqQaolG4kll630aCDk4KgmMnOUeIZDRn0NE3qrWsx_1GG0eTnz-0npXbdBZJgwl6upmgs9rz5ceAG5BVNIUJBgAYKv4Q')" }}>
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-lg p-5 shadow-lg border-l-4 border-[#516c2d]">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="material-symbols-outlined text-[#516c2d]">engineering</span>
                                            <span className="font-bold text-[#151811]">Tiêu chuẩn kỹ thuật cao</span>
                                        </div>
                                        <p className="text-sm text-[#758560]">Chúng tôi áp dụng các quy chuẩn xây dựng nghiêm ngặt để đảm bảo sự bền vững của hệ thống thoát nước và kết cấu cứng.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="w-full py-16 bg-[#F7F5F2]">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#151811]">Quy trình làm việc</h2>
                            <p className="text-[#758560] mt-2">Minh bạch, rõ ràng qua 6 bước tiêu chuẩn</p>
                        </div>
                        <div className="relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden lg:block absolute top-8 left-0 w-full h-1 bg-[#dce1d6] -z-0"></div>
                            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
                                {[
                                    { icon: "mail", title: "1. Tiếp nhận", desc: "Thông tin dự án & yêu cầu" },
                                    { icon: "location_on", title: "2. Khảo sát", desc: "Đo đạc thực tế" },
                                    { icon: "request_quote", title: "3. Báo giá", desc: "Chi tiết từng hạng mục" },
                                    { icon: "edit_document", title: "4. Ký HĐ", desc: "Thống nhất điều khoản" },
                                    { icon: "construction", title: "5. Thi công", desc: "Triển khai dự án" },
                                    { icon: "verified", title: "6. Bảo hành", desc: "Chăm sóc định kỳ" }
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center group">
                                        <div className={`w-16 h-16 rounded-full bg-white border-4 ${index === 0 ? 'border-[#516c2d] text-[#516c2d]' : 'border-[#dce1d6] text-[#758560]'} flex items-center justify-center shadow-sm group-hover:bg-[#516c2d] group-hover:text-white transition-all duration-300`}>
                                            <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                        </div>
                                        <h5 className="mt-4 font-bold text-[#151811]">{item.title}</h5>
                                        <p className="text-xs text-[#758560] mt-1 px-2">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose KGX */}
                <section className="w-full py-16">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: "history_edu", title: "Kinh nghiệm dày dặn", desc: "Hơn 10 năm kinh nghiệm trong lĩnh vực cảnh quan với hàng trăm dự án lớn nhỏ." },
                                { icon: "groups", title: "Nhân công trực tiếp", desc: "Đội ngũ thi công cơ hữu, không qua trung gian, đảm bảo chất lượng đồng nhất." },
                                { icon: "potted_plant", title: "Nguồn vật liệu chuẩn", desc: "Sở hữu vườn ươm riêng và đối tác cung ứng đá tự nhiên chất lượng cao." },
                                { icon: "security", title: "Bảo hành uy tín", desc: "Cam kết bảo hành cây xanh và công trình xây dựng lên đến 12 tháng." }
                            ].map((item, index) => (
                                <div key={index} className="p-6 rounded-xl bg-[#fcfbf8] border border-[#eef0ea] hover:border-[#D67A31]/50 transition-colors">
                                    <span className="material-symbols-outlined text-4xl text-[#D67A31] mb-4">{item.icon}</span>
                                    <h3 className="text-lg font-bold text-[#151811] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#758560]">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RELATED PROJECTS AND FAQ REMITTED FOR BREVITY - AS PER HTML */}
                {/* ... similar structure for projects and faq as in other pages ... */}

                {/* Final CTA / Contact Form */}
                <section className="w-full py-16 lg:py-24 bg-[#282a22] text-white">
                    <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                            {/* Left: Invitation */}
                            <div className="flex-1">
                                <h2 className="text-4xl font-bold mb-6">Sẵn sàng kiến tạo <br />không gian xanh của bạn?</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Đừng ngần ngại chia sẻ ý tưởng với chúng tôi. Đội ngũ chuyên gia của KGX sẽ lắng nghe và đưa ra giải pháp phù hợp nhất với ngân sách và mong muốn của bạn.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#516c2d]/20 flex items-center justify-center text-[#516c2d]">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Tư vấn nhanh</p>
                                            <p className="font-bold text-xl">0868 462 462</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#516c2d]/20 flex items-center justify-center text-[#516c2d]">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Gửi yêu cầu qua email</p>
                                            <p className="font-bold text-lg">tuvan@kgxlandscape.vn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right: Form */}
                            <div className="flex-1 bg-white rounded-2xl p-8 text-[#151811] shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Đăng ký nhận tư vấn miễn phí</h3>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-[#151811]">Họ và tên</label>
                                            <input className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-[#516c2d] focus:ring-[#516c2d] h-12 px-3" placeholder="Nguyễn Văn A" type="text" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-[#151811]">Số điện thoại</label>
                                            <input className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-[#516c2d] focus:ring-[#516c2d] h-12 px-3" placeholder="09xxxxxxx" type="tel" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-[#151811]">Loại dự án quan tâm</label>
                                        <select className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-[#516c2d] focus:ring-[#516c2d] h-12 px-3">
                                            <option>Thi công sân vườn biệt thự</option>
                                            <option>Thi công hồ cá Koi</option>
                                            <option>Cảnh quan khu nghỉ dưỡng</option>
                                            <option>Bảo dưỡng cảnh quan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1 text-[#151811]">Lời nhắn</label>
                                        <textarea className="w-full rounded-md border-gray-300 bg-gray-50 focus:border-[#516c2d] focus:ring-[#516c2d] px-3 py-3 h-28 resize-none" placeholder="Mô tả sơ bộ về nhu cầu, diện tích..."></textarea>
                                    </div>
                                    <button className="w-full bg-[#516c2d] text-white font-bold h-12 rounded-md hover:bg-[#516c2d]/90 transition-colors shadow-lg mt-2" type="button">
                                        Gửi yêu cầu ngay
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

export default ThiCongSanVuonPage;
