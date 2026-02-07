import React from 'react';
import { Link } from 'react-router-dom';
import { TREE_CATEGORIES } from '../constants';

const ProductListPage: React.FC = () => {
    return (
        <div className="bg-[#f7f8f5] dark:bg-[#1a2210] font-display text-[#161c0d] antialiased overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative w-full py-12 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#75c20a]/10 w-fit">
                            <span className="material-symbols-outlined text-[#75c20a] text-sm">verified</span>
                            <span className="text-[#75c20a] text-xs font-bold  tracking-wide">Giải pháp cây xanh chuyên nghiệp</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.8] tracking-normal text-[#161c0d]">
                            Sản phẩm &amp; cây xanh <br />
                            <span className="text-[#75c20a]">phục vụ công trình</span>
                        </h1>
                        <p className="text-lg text-gray-600 font-normal leading-relaxed max-w-lg">
                            Chúng tôi không chỉ bán cây, chúng tôi cung cấp giải pháp cảnh quan bền vững dựa trên khí hậu, thổ nhưỡng và ngân sách của dự án.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button className="h-12 px-8 rounded-xl bg-[#75c20a] text-white text-base font-bold shadow-xl shadow-[#75c20a]/20 hover:bg-[#5da300] transition-all transform hover:-translate-y-0.5">
                                Tư vấn chọn cây
                            </button>
                            <button className="h-12 px-8 rounded-xl border-2 border-[#eef4e7] bg-transparent text-[#161c0d] text-base font-bold hover:bg-[#eef4e7] transition-colors">
                                Gọi 0868 462 462
                            </button>
                        </div>
                        <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-green-300 to-green-600"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-600"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-600"></div>
                                </div>
                            </div>
                            <p>Được tin dùng bởi <strong>500+</strong> đối tác dự án</p>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-black/10 z-10"></div>
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5wEckiGcnevV9aG3fhqH7CwfnuJ1yb_EztMrtvPu5dC7n3QruaCUXdx7IQp86spz8oEQlq5L853QHELRHn1B23APLWT0g37DPA93NvKtDyCCccK3brDJ2dsPiqK5yUts6DlyMcKx2T6e_ovP-Fjv0UPXh3t1cQaZnOk9JijFyuELsNR7Xu4YuNVT8tdPU2hhZOLsEVJCA7vPaY1nD1bCIbLVyP9B7iY2zE_JKarYUU9-XgvQzUEdyrTv8J-zNdB1cXn0a3JbKYCE')" }}></div>
                        <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg max-w-[240px]">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-[#75c20a]">local_shipping</span>
                                <span className="text-sm font-bold">Vận chuyển toàn quốc</span>
                            </div>
                            <p className="text-xs text-gray-500">Đảm bảo an toàn cây trồng đến tận chân công trình.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-16 bg-white border-y border-[#eef4e7]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl font-bold text-[#161c0d] mb-4">Nguyên tắc tư vấn cây xanh</h2>
                            <p className="text-gray-600">Tiêu chuẩn lựa chọn khắt khe dựa trên 4 yếu tố cốt lõi để đảm bảo sự bền vững cho công trình.</p>
                        </div>
                        <a className="text-[#75c20a] font-bold flex items-center hover:underline" href="#">
                            Xem quy trình chi tiết <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: 'architecture', title: 'Đúng công năng', desc: 'Phù hợp mục đích sử dụng, che bóng mát hoặc trang trí thẩm mỹ của dự án.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK5xSxwLSzSzvBjEVaU--IxO1mh7LCiLsRqsuPJP14ET5cPa0tOfKTID6f47hGJuCIwIOEjQd6LHCjeZD7DCIShjzx-qb3VZ6p968WZqdOaaJQjxTmVm-cLZgn8FsPm9XQj83_qnatJZKLwp3f1yz1_SJtfUljsxDQjH0eBbHUtWcN2QvpOWgY9TION9teYiz8LcSL4NucuMM_Vh3L1pmYi44TDP8Dj9HvL7eFeGtV53GO6Q_-DaNLJvXOp-kmu-xlBP3zlBaKjDU' },
                            { icon: 'thermostat', title: 'Thích nghi khí hậu', desc: 'Lựa chọn cây bản địa hoặc cây đã thuần dưỡng để phát triển tốt nhất.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_yK7X7vAAE6e6xYu_kGd1JIkdMu597bChS83PMhFAMPPbPhDt79mMCOZ73zIew9fudmI6LkAeV5XjUyJxhNnRk5iwB631jyghqOciqr4iZKprOQC14l9Q7rFckobyvEECXYWwQR-lnIJ-k5dFVHEUOijqsLc06lxMfaZbsfTUEN8KwjS6L4m5CFFWTR1Od9H-1aqcpT-bgf5SCEueq5ZDRO0NAcmPvDUrp8QMo5D7I-S0PBI0c43CiJ0LiANjJ1OeGoObZ7A-z0o' },
                            { icon: 'content_cut', title: 'Dễ chăm sóc', desc: 'Tối ưu chi phí vận hành, cắt tỉa và bảo dưỡng cho chủ đầu tư.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8EUfxNnRk-zjLHJjmD0p_XtVUqRtKSa_ZCpk4aYC592XBMAP1rp_5tznEn1-SMnk7HZWFc9RUPXm1_-DIVz46hvBmCRPMJE56V-PbknBdTSUiMQIIPuJVDSI1hd_rLBwjf5JGEqpCNnz3ikrI0Nsonddd0R31d8VGs7Q08LHs7vx33PSZ6D2bnMkrob4X81akOHqrfUaqXOvLiWnO_qv8XhaR0Bj0t93r1szo6IBaM3lGEvoidcCo9E78t5mokJ0n5Wt_NeivBIw' },
                            { icon: 'landscape', title: 'Đồng bộ cảnh quan', desc: 'Tạo nên tổng thể hài hòa, chuyên nghiệp và nâng tầm giá trị công trình.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPHwwMjmyJUCN_-YdFvTncaCdVZqnJsIxO84s6PkslqUK2-HE7YX2Oy8jJ13kcsEGy-bNdeKqlBwdbD-wK603l_-BRI7Z9g1GL2idl_aO8R49RaVldTg8mV-rHp9C_R9s2ToY62W7R3OKsoW_v5Gr2gVcB6JUQ2bvvpA0pJY3TNLtyDBYECd9qpKUTiyX0d92UdFrXm2fHIWernsjtSB0wcxiE9AXNE2PrIYkTserY2FrE3vk_wAOIt4rTObgJ_voX_Mul9XXyomw' }
                        ].map((item, idx) => (
                            <div key={idx} className="group flex flex-col p-6 rounded-2xl border border-[#eef4e7] bg-[#f7f8f5] hover:border-[#75c20a]/50 hover:shadow-lg hover:shadow-[#75c20a]/5 transition-all">
                                <div className="w-12 h-12 rounded-full bg-[#75c20a]/10 flex items-center justify-center text-[#75c20a] mb-4 group-hover:bg-[#75c20a] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-3">{item.desc}</p>
                                <div className="mt-auto h-32 w-full rounded-lg bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${item.img}')` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 md:py-24 bg-[#f7f8f5]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[#75c20a] font-bold tracking-wider  text-sm">Danh mục sản phẩm</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#161c0d] mt-3 mb-4">Các nhóm cây &amp; dịch vụ chủ lực</h2>
                        <p className="text-gray-600">Đa dạng chủng loại từ cây công trình bóng mát đến cây trang trí nội thất cao cấp.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TREE_CATEGORIES.map((category) => (
                            <Link
                                key={category.slug}
                                to={`/san-pham/nhom/${category.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden border border-[#eef4e7] hover:shadow-xl hover:shadow-[#75c20a]/10 transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                    <div
                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                        style={{ backgroundImage: `url('${category.image}')` }}
                                    ></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#161c0d] mb-2">{category.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-3">{category.desc}</p>
                                    <span className="inline-flex items-center text-[#75c20a] font-bold text-sm hover:underline">
                                        Xem nhóm cây <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Real-world Applications */}
            <section className="py-16 bg-white">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-[#161c0d] mb-3">Ứng dụng thực tế</h2>
                        <p className="text-gray-600">Hình ảnh cây xanh được triển khai tại các công trình tiêu biểu.</p>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPZqQlutCqTjvyW2Pci8Iwis1AYA7SWv7MG2Fzc8L1-0RXaspoV3NuvsluPfVaqhsbbMuastJGvv4b-x9mwo-_F3lG3CZ1S1lZZpEE9mEIso3MuXqpY7ryhbDp_jPaScNtmF3bfAIpvNHrEMwS0uPkfFTGywvF5Qlsp36jbYbnk1hS6fbLOGLzHUgvxZxeGZkHFKg-dStfgQ0kwCM3MyihNtgdVXwTVQ1ikocRGxkopHVmuBp7Ah07uw7ciP6NAHONTVw51ELo8Co')" }}></div>
                            </div>
                            <div className="lg:w-1/2 w-full flex flex-col justify-center px-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-[2px] w-10 bg-[#75c20a]"></div>
                                    <span className="text-sm font-bold text-[#75c20a] ">Biệt thự &amp; Resort</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#161c0d] mb-4">Nâng tầm không gian nghỉ dưỡng</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Với các dự án nghỉ dưỡng, cây xanh không chỉ là trang trí mà là linh hồn của kiến trúc. Chúng tôi lựa chọn các loại cây tạo bóng mát lớn, cây hoa rực rỡ và cây bụi tạo hình để mang lại cảm giác thư thái, sang trọng.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="material-symbols-outlined text-[#75c20a] text-base">check_circle</span>
                                        Cây bóng mát tán rộng
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="material-symbols-outlined text-[#75c20a] text-base">check_circle</span>
                                        Hệ thống thảm cỏ Nhật
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
                            <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfFNLwXOz1lWKbbgpDGU5Pntl5pogFuIHBBJzpz72bJvra7p9QdJqC-4qh3lth5n0zJ6ePOKuxAEdm06nPpUEGcV3HgILpPmadyi41fduX_cM11id14rakZ6reUlib5-2dflLFhskcCG2cdwimLzYEIQfkE0U3_tNoXfxxwxiH3lW2vjOzCNPY-JuOGXYPMutitIjcHGxrPr126giXGIDZqal_So55p7nHRgmQeH3X-FKyJgIK4HQsQXIGZxsyVUBy1-tg1pVCD7o')" }}></div>
                            </div>
                            <div className="lg:w-1/2 w-full flex flex-col justify-center px-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-[2px] w-10 bg-[#75c20a]"></div>
                                    <span className="text-sm font-bold text-[#75c20a] ">Đô thị &amp; Văn phòng</span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#161c0d] mb-4">Xanh hóa không gian làm việc</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Giải pháp cây xanh cho văn phòng và khu đô thị tập trung vào khả năng lọc bụi, giảm tiếng ồn và ít tốn công chăm sóc. Sự hiện diện của mảng xanh giúp tăng hiệu suất làm việc và giảm căng thẳng.
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="material-symbols-outlined text-[#75c20a] text-base">check_circle</span>
                                        Cây nội thất lọc không khí
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="material-symbols-outlined text-[#75c20a] text-base">check_circle</span>
                                        Tường cây xanh (Green wall)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-[#f7f8f5]">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-[#161c0d] mb-10">Câu hỏi thường gặp</h2>
                    <div className="flex flex-col gap-4">
                        {[
                            { q: 'Tiêu chuẩn chọn cây cho công trình là gì?', a: 'Chúng tôi chọn cây dựa trên: sức khỏe bộ rễ, độ tuổi của cây, sự thích nghi với khí hậu địa phương và hình dáng tán cây đảm bảo tính thẩm mỹ theo thiết kế. Tất cả cây đều được dưỡng tại vườn ươm KGX trước khi xuất vườn.' },
                            { q: 'Chính sách bảo hành cây như thế nào?', a: 'KGX bảo hành sống cho cây công trình trong vòng 30-60 ngày tùy loại cây và điều kiện hợp đồng. Đối với gói dịch vụ thi công trọn gói kèm bảo dưỡng, thời gian bảo hành có thể lên đến 12 tháng.' },
                            { q: 'Có cung cấp số lượng lớn cho dự án không?', a: 'Có. KGX sở hữu hệ thống vườn ươm vệ tinh và mạng lưới liên kết rộng, đảm bảo nguồn cung ổn định cho các dự án quy mô lớn như khu đô thị, công viên, resort.' },
                            { q: 'KGX có nhận chăm sóc bảo dưỡng định kỳ không?', a: 'Chúng tôi cung cấp gói dịch vụ "Chăm sóc & Bảo dưỡng" định kỳ bao gồm: cắt tỉa, bón phân, phòng trừ sâu bệnh và kiểm tra hệ thống tưới, giúp chủ đầu tư an tâm về cảnh quan sau thi công.' },
                            { q: 'Ngân sách dự trù như thế nào là phù hợp?', a: 'Ngân sách phụ thuộc vào mật độ trồng, kích thước cây và chủng loại. Hãy liên hệ với đội ngũ tư vấn của KGX để nhận bảng dự toán chi tiết tối ưu nhất cho mức đầu tư của bạn.' }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl border border-[#eef4e7] overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                    <h3 className="font-bold text-[#161c0d] group-open:text-[#75c20a] transition-colors">{faq.q}</h3>
                                    <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="py-16 bg-white border-t border-[#eef4e7]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="bg-[#eef4e7]/30 rounded-3xl p-6 md:p-12 overflow-hidden relative border border-[#eef4e7]/50">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#75c20a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                            {/* Form */}
                            <div className="flex flex-col gap-6">
                                <div className="mb-2">
                                    <h2 className="text-2xl font-bold text-[#161c0d]">Đăng ký tư vấn miễn phí</h2>
                                    <p className="text-gray-600 mt-2">Để lại thông tin, chuyên gia cây xanh của chúng tôi sẽ liên hệ lại trong vòng 24h.</p>
                                </div>
                                <form className="flex flex-col gap-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-sm font-semibold text-[#161c0d]">Họ và tên</label>
                                            <input className="h-12 rounded-xl border-[#dee0d7] bg-white px-4 text-sm focus:border-[#75c20a] focus:ring-[#75c20a] outline-none" placeholder="Nhập họ tên của bạn" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-sm font-semibold text-[#161c0d]">Số điện thoại</label>
                                            <input className="h-12 rounded-xl border-[#dee0d7] bg-white px-4 text-sm focus:border-[#75c20a] focus:ring-[#75c20a] outline-none" placeholder="09xx xxx xxx" type="tel" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-sm font-semibold text-[#161c0d]">Loại dự án</label>
                                            <select className="h-12 rounded-xl border-[#dee0d7] bg-white px-4 text-sm focus:border-[#75c20a] focus:ring-[#75c20a] outline-none">
                                                <option>Biệt thự / Nhà phố</option>
                                                <option>Resort / Khách sạn</option>
                                                <option>Văn phòng / Tòa nhà</option>
                                                <option>Công viên / Công cộng</option>
                                                <option>Khác</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-sm font-semibold text-[#161c0d]">Khu vực</label>
                                            <select className="h-12 rounded-xl border-[#dee0d7] bg-white px-4 text-sm focus:border-[#75c20a] focus:ring-[#75c20a] outline-none">
                                                <option>Miền Bắc</option>
                                                <option>Miền Trung</option>
                                                <option>Miền Nam</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-[#161c0d]">Nhu cầu cụ thể</label>
                                        <div className="flex flex-wrap gap-3 mt-1">
                                            {['Thiết kế cảnh quan', 'Cung cấp cây xanh', 'Chăm sóc & bảo dưỡng'].map((niche) => (
                                                <label key={niche} className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg border border-[#dee0d7] hover:border-[#75c20a] transition-colors">
                                                    <input className="rounded text-[#75c20a] focus:ring-[#75c20a]" type="checkbox" />
                                                    <span className="text-sm">{niche}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-sm font-semibold text-[#161c0d]">Ghi chú thêm</label>
                                        <textarea className="rounded-xl border-[#dee0d7] bg-white px-4 py-3 text-sm focus:border-[#75c20a] focus:ring-[#75c20a] outline-none" placeholder="Mô tả sơ bộ về yêu cầu của bạn..." rows={3}></textarea>
                                    </div>
                                    <button className="mt-2 h-12 w-full md:w-auto md:self-start px-8 rounded-xl bg-[#75c20a] text-white font-bold hover:bg-[#5da300] transition-colors shadow-lg shadow-[#75c20a]/20" type="button">
                                        Gửi yêu cầu tư vấn
                                    </button>
                                </form>
                            </div>
                            {/* Contact Info */}
                            <div className="flex flex-col justify-between h-full bg-white rounded-2xl p-8 shadow-sm border border-[#eef4e7]">
                                <div className="flex flex-col gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#161c0d] mb-4">Thông tin liên hệ</h3>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex items-start gap-3">
                                                <div className="size-8 rounded-full bg-[#eef4e7] flex items-center justify-center shrink-0 text-[#75c20a]">
                                                    <span className="material-symbols-outlined text-lg">location_on</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#161c0d]">Trụ sở chính</p>
                                                    <p className="text-sm text-gray-600">Số 123, Đường Lương Ngọc Quyến, TP. Thái Nguyên</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="size-8 rounded-full bg-[#eef4e7] flex items-center justify-center shrink-0 text-[#75c20a]">
                                                    <span className="material-symbols-outlined text-lg">call</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#161c0d]">Hotline 24/7</p>
                                                    <p className="text-sm text-gray-600">0868 462 462</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="size-8 rounded-full bg-[#eef4e7] flex items-center justify-center shrink-0 text-[#75c20a]">
                                                    <span className="material-symbols-outlined text-lg">mail</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#161c0d]">Email</p>
                                                    <p className="text-sm text-gray-600">tuvan@kgxlandscape.vn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden relative">
                                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-Ik2OhR_Z1ngqrZz7dTbqjCRUwISIx93ePP0jc8NUX3y8yROf62M6_lTqs1m2FKNjeU51bz3n-vMN0l89EUh0IGmgef375nuvCJYaEELoDa1FfTgDUa4JdcZ48bLmE0J4ua81fVMRABTC34sCouwOCz-Fn2U_V3Q4UrIcQ5o_cpe-JvpUVECOcn8EUmU9BuorCywUETjgpex-_A8RSiOplb-Wo3IGJWu1nM5ULBU4Q5WRwGUURCT-QsruWFDJx9knL7ZVEB1J6lY')" }}></div>
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                                            <button className="bg-white px-4 py-2 rounded-lg text-xs font-bold shadow-md hover:bg-gray-50 text-[#161c0d]">Xem bản đồ</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductListPage;
