import React from 'react';
import { Link } from 'react-router-dom';
import { TREES } from '../constants';

const ProductListingPage: React.FC = () => {
    return (
        <div className="bg-background-light text-[#161712] font-display antialiased flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col">
                {/* Section 1: Plant Listing */}
                <section className="w-full py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                        {/* Headline */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-primary text-3xl md:text-4xl font-bold tracking-tight">Danh sách cây cảnh quan</h1>
                            <p className="text-[#7a8165] text-base max-w-2xl">
                                Tuyển chọn các loại cây bóng mát, cây công trình chất lượng cao phù hợp với khí hậu Việt Nam.
                            </p>
                        </div>

                        {/* Plant Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {TREES.map((tree) => (
                                <Link
                                    key={tree.slug}
                                    to={`/san-pham/${tree.slug}`}
                                    className="group flex flex-col bg-white border border-[#dee0d7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-full aspect-square bg-gray-100 overflow-hidden relative">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url("${tree.image}")` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <div className="p-4 flex flex-col gap-2 flex-grow">
                                        <h3 className="text-[#161712] text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                            {tree.name}
                                        </h3>
                                        <p className="text-[#7a8165] text-sm font-normal line-clamp-2">
                                            {tree.description}
                                        </p>
                                        <div className="mt-auto pt-2">
                                            <span className="text-primary text-sm font-bold inline-flex items-center gap-1 group-hover:underline">
                                                Xem chi tiết
                                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination (Simulated) */}
                        <div className="flex justify-center pt-8">
                            <nav className="flex gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-gray-400 hover:text-primary hover:border-primary transition-colors">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-[#161712] hover:text-primary hover:border-primary transition-colors">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-[#161712] hover:text-primary hover:border-primary transition-colors">3</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-[#161712] hover:text-primary hover:border-primary transition-colors">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </section>

                {/* Section 2: CTA & Lead Gen */}
                <section className="w-full bg-[#f2f3f0] py-16 mt-auto border-t border-[#dee0d7]">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Text & Actions */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <span className="text-accent font-bold tracking-wider text-sm uppercase">Tư vấn chuyên sâu</span>
                                    <h2 className="text-primary text-3xl md:text-4xl font-black leading-tight">
                                        Bạn cần tư vấn chọn cây phù hợp cho công trình?
                                    </h2>
                                    <p className="text-[#4e5440] text-lg leading-relaxed max-w-lg">
                                        Đội ngũ kỹ sư KGX sẽ hỗ trợ khảo sát thực tế, phân tích thổ nhưỡng và đề xuất phương án cây xanh tối ưu nhất cho ngân sách của bạn.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="h-12 px-6 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                                        <span>Nhận tư vấn chọn cây</span>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-6 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">call</span>
                                        <span>Gọi 0868 462 462</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-[#7a8165]">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqUJBV4wcXYy47vRkBX-gfQBonbVLvPdqyIsmyUWqOpc3rS2qJ-7Tur5gUl3s-dwcIsfVnTNjsLpkFovYQULa536unbpGKf5mn59gq_c-7aalhsNUvrU_10N61uWVeNnZgBKAI6qJ_g2dKG_wyukBthXVwtbsk94fIQWIYud6EJeOM3eU5TEkSjrKm59lggmYXJjeKyfsu71h6iDWv0YOgyqwEl9PaTRiajkt77r9rLluHKFnXPkJvLNorbAvhsVMJ4_x3DATNnZU')" }}></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnNbDkgT6yT2pwj56tHvGAOgh49yqPo2nrev5DulVyL1jGrvldvWTYHb3KXQdiQReIV4y4ERkyz_ZfBIMzMbv4abjQGzLzShhtpa1C5GHm7zzxTkTPLHjAOQQE8y7KU-ieZK4SvUClzdUV1I9wzYr1fzOv6htyXRm1BoKJrULXbUhw07r7bflBl4S22YYXHkb0xjYkTf0uue6noyju0ePvJ95iL_XdhMqOUl4-VZeqHi47zOwhM6x0pKAT9GOJ-crMTbydAYRrHUw')" }}></div>
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoYCYUb6bN1B6pTQIg47j5jbuz4TfmRLLCUH-1jxBUZ9m2EC2iyQ9s98SdHQvOgDt8JlipYadhAdZgbT51X6bPLTk1shFkoIGovk0Vjr6EUyaptvaS0geixP2_NlMnAGX5sz88z12NfYnKQ4PNHWoHxdl5q1G8CnWC72XIpBZ8vNv-U-Er1xtyoWnkyAC-bpxvUJm1d1BIIWXVbWFoa291HsY0VUxppKDu5APlo6rpQ3KIvQJw-VyZz1VSyb5Lxbk8rDrmtT5U-ew')" }}></div>
                                    </div>
                                    <p>Hơn 500+ khách hàng đã tin tưởng</p>
                                </div>
                            </div>
                            {/* Right: Quick Form */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#dee0d7]">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xl font-bold text-primary">Gửi yêu cầu nhanh</h3>
                                    <div className="flex flex-col gap-4">
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Họ và tên</span>
                                            <input className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" placeholder="Nhập họ tên của bạn" type="text" />
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Số điện thoại</span>
                                            <input className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" placeholder="Ví dụ: 0912 345 678" type="tel" />
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Loại công trình (Tùy chọn)</span>
                                            <select className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#161712]">
                                                <option disabled selected value="">Chọn loại công trình</option>
                                                <option value="biet-thu">Sân vườn Biệt thự</option>
                                                <option value="khu-do-thi">Khu đô thị / Resort</option>
                                                <option value="nha-may">Nhà máy / KCN</option>
                                                <option value="khac">Khác</option>
                                            </select>
                                        </label>
                                    </div>
                                    <button className="mt-2 h-12 w-full rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-colors shadow-md">
                                        GỬI YÊU CẦU NGAY
                                    </button>
                                    <p className="text-xs text-center text-[#7a8165]">
                                        Chúng tôi cam kết bảo mật thông tin của bạn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductListingPage;
