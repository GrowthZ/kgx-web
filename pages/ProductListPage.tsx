import React from 'react';
import { Link } from 'react-router-dom';
import { TREES, TREE_CATEGORIES } from '../constants';

const ProductListPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-text-main antialiased overflow-x-hidden">
            <main className="relative w-full py-12 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 w-fit">
                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wide">Giải pháp cây xanh chuyên nghiệp</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main">
                            Sản phẩm &amp; cây xanh <br />
                            <span className="text-primary">phục vụ công trình</span>
                        </h1>
                        <p className="text-lg text-gray-600 font-normal leading-relaxed max-w-lg">
                            Chúng tôi không chỉ bán cây, chúng tôi cung cấp giải pháp cảnh quan bền vững dựa trên khí hậu, thổ nhưỡng và ngân sách của dự án.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button className="h-12 px-8 rounded-xl bg-primary text-white text-base font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform hover:-translate-y-0.5">
                                Tư vấn chọn cây
                            </button>
                            <button className="h-12 px-8 rounded-xl border-2 border-secondary bg-transparent text-text-main text-base font-bold hover:bg-secondary transition-colors">
                                Gọi 0868 462 462
                            </button>
                        </div>
                    </div>
                    <div className="relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-black/10 z-10"></div>
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5wEckiGcnevV9aG3fhqH7CwfnuJ1yb_EztMrtvPu5dC7n3QruaCUXdx7IQp86spz8oEQlq5L853QHELRHn1B23APLWT0g37DPA93NvKtDyCCccK3brDJ2dsPiqK5yUts6DlyMcKx2T6e_ovP-Fjv0UPXh3t1cQaZnOk9JijFyuELsNR7Xu4YuNVT8tdPU2hhZOLsEVJCA7vPaY1nD1bCIbLVyP9B7iY2zE_JKarYUU9-XgvQzUEdyrTv8J-zNdB1cXn0a3JbKYCE')" }}></div>
                        <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur rounded-lg p-4 shadow-lg max-w-[240px]">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-primary">local_shipping</span>
                                <span className="text-sm font-bold">Vận chuyển toàn quốc</span>
                            </div>
                            <p className="text-xs text-gray-500">Đảm bảo an toàn cây trồng đến tận chân công trình.</p>
                        </div>
                    </div>
                </div>

                {/* Principles Section */}
                <section className="py-16 bg-white border-y border-[#eef4e7] mt-20">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-text-main mb-4">Nguyên tắc tư vấn cây xanh</h2>
                                <p className="text-gray-600">Tiêu chuẩn lựa chọn khắt khe dựa trên 4 yếu tố cốt lõi để đảm bảo sự bền vững cho công trình.</p>
                            </div>
                            <a className="text-primary font-bold flex items-center hover:underline" href="#">
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
                                <div key={idx} className="group flex flex-col p-6 rounded-2xl border border-[#eef4e7] bg-[#fafcf8] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
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
                <section className="py-16 md:py-24 bg-[#fafcf8]">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Danh mục sản phẩm</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-text-main mt-3 mb-4">Các nhóm cây &amp; dịch vụ chủ lực</h2>
                            <p className="text-gray-600">Đa dạng chủng loại từ cây công trình bóng mát đến cây trang trí nội thất cao cấp.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {TREE_CATEGORIES.map((category) => (
                                <Link
                                    key={category.slug}
                                    to={`/san-pham/nhom/${category.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden border border-[#eef4e7] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                                        <div
                                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                            style={{ backgroundImage: `url('${category.image}')` }}
                                        ></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-text-main mb-2">{category.name}</h3>
                                        <p className="text-sm text-gray-500 mb-4 line-clamp-3">{category.desc}</p>
                                        <span className="inline-flex items-center text-primary font-bold text-sm hover:underline">
                                            Xem nhóm cây <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Trees Section */}
                <section className="py-16 md:py-24 bg-white border-b border-[#eef4e7]">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex justify-between items-end mb-12 px-4">
                            <div>
                                <h2 className="text-3xl font-bold text-text-main">Danh mục cây tiêu biểu</h2>
                                <p className="text-gray-600 mt-2">Các loại cây bàng, cây bóng mát và cây công trình chất lượng cao.</p>
                            </div>
                            <Link to="/san-pham" className="text-primary font-bold hover:underline flex items-center">
                                Xem tất cả <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                            {TREES.map((tree) => (
                                <Link
                                    key={tree.slug}
                                    to={`/san-pham/${tree.slug}`}
                                    className="group flex flex-col gap-4"
                                >
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                                        <div
                                            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                                            style={{ backgroundImage: `url('${tree.image}')` }}
                                        ></div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors uppercase">
                                            {tree.name}
                                        </h3>
                                        <p className="text-sm text-text-muted italic">{tree.scientificName}</p>
                                        <div className="mt-3 flex items-center text-primary text-xs font-bold uppercase tracking-wider">
                                            Xem chi tiết <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Real-world Applications */}
                <section className="py-16 bg-white">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-text-main mb-3">Ứng dụng thực tế</h2>
                            <p className="text-gray-600">Hình ảnh cây xanh được triển khai tại các công trình tiêu biểu.</p>
                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPZqQlutCqTjvyW2Pci8Iwis1AYA7SWv7MG2Fzc8L1-0RXaspoV3NuvsluPfVaqhsbbMuastJGvv4b-x9mwo-_F3lG3CZ1S1lZZpEE9mEIso3MuXqpY7ryhbDp_jPaScNtmF3bfAIpvNHrEMwS0uPkfFTGywvF5Qlsp36jbYbnk1hS6fbLOGLzHUgvxZxeGZkHFKg-dStfgQ0kwCM3MyihNtgdVXwTVQ1ikocRGxkopHVmuBp7Ah07uw7ciP6NAHONTVw51ELo8Co')" }}></div>
                                </div>
                                <div className="lg:w-1/2 w-full flex flex-col justify-center px-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="h-[2px] w-10 bg-primary"></div>
                                        <span className="text-sm font-bold text-primary uppercase">Biệt thự &amp; Resort</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-main mb-4">Nâng tầm không gian nghỉ dưỡng</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Với các dự án nghỉ dưỡng, cây xanh không chỉ là trang trí mà là linh hồn của kiến trúc. Chúng tôi lựa chọn các loại cây tạo bóng mát lớn, cây hoa rực rỡ và cây bụi tạo hình để mang lại cảm giác thư thái, sang trọng.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-[#fafcf8]">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-text-main mb-10">Câu hỏi thường gặp</h2>
                        <div className="flex flex-col gap-4">
                            {[
                                { q: 'Tiêu chuẩn chọn cây cho công trình là gì?', a: 'Chúng tôi chọn cây dựa trên: sức khỏe bộ rễ, độ tuổi của cây, sự thích nghi với khí hậu địa phương và hình dáng tán cây đảm bảo tính thẩm mỹ theo thiết kế.' },
                                { q: 'Chính sách bảo hành cây như thế nào?', a: 'KGX bảo hành sống cho cây công trình trong vòng 30-60 ngày tùy loại cây và điều kiện hợp đồng.' }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-white rounded-xl border border-[#eef4e7] overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                                        <h3 className="font-bold text-text-main group-open:text-primary transition-colors">{faq.q}</h3>
                                        <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductListPage;
