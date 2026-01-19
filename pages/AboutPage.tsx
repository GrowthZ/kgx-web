import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-[#f3f3f2] text-[#151711] font-sans antialiased overflow-x-hidden selection:bg-[#546a2f]/20 selection:text-[#546a2f]">
            <main>
                {/* Signature Hero Section */}
                <section className="container py-6 md:py-8">
                    <div className="relative w-full min-h-[640px] flex items-center justify-center rounded-2xl overflow-hidden group shadow-2xl shadow-[#546a2f]/10">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDz6wpyBrBtODxk3GDYOp8v06VkClAox7Hz3sdFzyeCSk5o45mPBrNyyqAHXkvedMrv7RtyhjGJ1I-AFxOkO0N_Bs4xtrbXMAVZmUhXovnrM_TWwYMMIOpqXrtcBdxUazjlDzMlcKnS55FdocSXdsZGFm8VETAED3iJGr2KvVyeiXf4FX5pXW3iE0NU94KuOuDLVd5yBrqbgC6xdDscnWDFjBOSRkMKYKdt_xsGqIbz_2gZwoDLHNWNuQgawmULTvOLr58VdqYn5uc')" }}
                        >
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 max-w-4xl">
                            <span className="inline-block py-1 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm">
                                KGX Landscape
                            </span>
                            <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
                                TỰ HÀO <br /><span className="text-white/90">KHÔNG GIAN VIỆT</span>
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl font-normal max-w-3xl mb-10 leading-relaxed drop-shadow-md">
                                Thiết kế - Thi công - Tư vấn cảnh quan. <br className="hidden md:block" />Kiến tạo không gian sống hài hòa với khí hậu và văn hóa bản địa.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/du-an" className="bg-[#546a2f] hover:bg-[#435525] text-white px-10 py-4 rounded-xl text-base font-bold transition-all shadow-[0_4px_20px_-4px_rgba(84,106,47,0.5)] flex items-center justify-center gap-2 group/btn">
                                    Khám phá dự án
                                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center gap-2">
                                    Xem hồ sơ năng lực
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Origin Story Section */}
                <section className="container py-24 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Text Column */}
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-3">
                                <span className="w-16 h-[3px] bg-[#E9724C]"></span>
                                <span className="text-[#546a2f] font-bold uppercase tracking-widest text-sm">Câu chuyện khởi nguồn</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black text-[#151711] leading-[1.1] tracking-tight">
                                Từ đất công trường <br className="hidden lg:block" />đến nét vẽ kỹ thuật
                            </h2>
                            <div className="space-y-6 text-[#151711]/80 text-lg leading-relaxed font-light">
                                <p>
                                    Xuất phát từ nhu cầu thực tế tại công trường, KGX thấu hiểu sâu sắc giá trị của một không gian sống xanh đúng nghĩa. Chúng tôi không bắt đầu từ những bản vẽ hào nhoáng trên giấy, mà từ mùi đất, từ những viên đá ong và từ cái nắng gió đặc trưng của khí hậu nhiệt đới.
                                </p>
                                <p className="font-medium text-[#151711]">
                                    Mỗi dự án của KGX là kết quả của quá trình lắng nghe thổ nhưỡng và câu chuyện của gia chủ, để tạo nên những khu vườn không chỉ đẹp mà còn "sống" bền bỉ với thời gian.
                                </p>
                            </div>
                            <div className="pt-6">
                                <button className="text-[#546a2f] font-bold border-b-2 border-[#546a2f]/20 pb-1 hover:border-[#546a2f] transition-colors flex items-center gap-2 text-lg">
                                    Xem lịch sử hình thành
                                    <span className="material-symbols-outlined text-xl">history_edu</span>
                                </button>
                            </div>
                        </div>
                        {/* Image Collage Column */}
                        <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="space-y-4 lg:space-y-6 pt-12 lg:pt-16">
                                <div className="rounded-2xl overflow-hidden h-64 bg-gray-200 shadow-xl">
                                    <img alt="Hand drawn landscape sketch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfnDRi0HB_sZgtasDk4Ken7CZguEH3rdyeX0EKof1CRbnQCKUFpG1RvR4eVYHa9g2s7aGRZm1VW7rfmiuPQflSu1Vsa4KtU6SI2-ktXEFWrWHuMoBJKZYyzzL-yi-h3ED2ZXN0gF_sgn3Qq7yWSdbAtR4IElessulr1MAwxbsR5tjRJLjjo0zAP8r0VoihLruDI0Eo9SvGu1oPvV90xz5TEA6BmWTBqG05umi4HFn72PZDzu5HxrssrucFhSyNAwsVJbOYqYuJYI8" />
                                </div>
                                <div className="rounded-2xl overflow-hidden h-48 bg-gray-200 shadow-xl">
                                    <img alt="Worker hands planting in soil" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNqQhUKmgLseE23XdFxi-OXlVKIklARijjox3ytzhNLqHVWuxTstqtv77uDYA0UnyYIheGVS2nPcJcedJqnt8qncoDZiytnPErg5ZJWpbwdursRcJah51pdzgj8ropb52H8dn7SyIf7SsRnHDWCytviZBIbxz3yYFjDQK9ecMq5yslpqqExZX13-xXmaaX-m3xYVX7ilw3UrN38pGDBnatWYzZ9zL6QTRB8eJTFHVsQ60_ISkqoONJ2pFXE6gpJC6xgJ47gKCzRhQ" />
                                </div>
                            </div>
                            <div className="space-y-4 lg:space-y-6">
                                <div className="rounded-2xl overflow-hidden h-48 bg-gray-200 shadow-xl">
                                    <img alt="Surveying a green field" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-R0eGrO21V5TbWzWp4fi7zXot7ied0RRKvmxgdMLFcwNgWlMWzbrsVXM8-T_SRFk05yb7-PpqDQcv3fCc0pszU_MlCc4INEr-TZKEz7t5HARHSHOiaSHFTSBamSEFCrCMrR1TVVJCFVIEw1Icpmx_kVGh52jD-qWWnA5kl4dDqOOwxA28TC_h4UWInkg2NRmulBF6mqS9762PYtQ_OOnl8f8bAyeyhmeZTdgCLvPiKZHM4mFE2dbC8o5UwklOyuukrB45lgf7hY" />
                                </div>
                                <div className="rounded-2xl overflow-hidden h-64 bg-gray-200 shadow-xl">
                                    <img alt="Garden construction site with stones" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ibwdixdV3gplYeBSdnKaYvBV-k5Bbt4VYOnmxcAfOwMF3jptqrlSUlNSzv3jbFEeHIx8yHQUM9G3r9LnF8wYYtdq4roWDTr6gZOeo5jlXkPAyoUxVz4yXg0UGn-laoQZL_QOApE8uMbAZB0H9vlybewihPyFYaS7Wsw79llvtoJa-D-GkZ1ci0E1aVxoj-B7elcc991N1OJMBQPRg3vGRPCv2qEis_9JMOdc3Bosj3LO1_Qn5iM52B--B_wUB8ZVOIPe0u1pDnI" />
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-[#E9724C]/10 rounded-full blur-[80px]"></div>
                        </div>
                    </div>
                </section>

                {/* Who We Are Section */}
                <section className="w-full bg-white py-24 border-y border-[#eef0ea]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 bg-[#F8F9FA] rounded-[2rem] overflow-hidden shadow-sm border border-gray-100">
                            <div className="lg:col-span-7 relative min-h-[500px]">
                                <img alt="Team discussion on site" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACpVDv_Xsu8-Ov-yQ81Db9dtcwQN1ozDe4nk6xC4-hXJ49Io_qdJUrIAJGMc-GFrw8tHyqPX61PzH6X5cKmAoClAxxui4hQVSV4L7f1QLUiqzjDtE7UmJBEoaYPhNGncww2JWIIjtDTqU77PxfTfDfQe-h_9yK-cH0UIU3sbBAyIeUowzn_td8OCPkhkpvs2DtWeqsjV4duRJ63div6PS4kZYBoQBUEN9mh5BGxlyHp-OkML1X2ExblCFXROom3DHE3_xxAVZKjJs" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden"></div>
                            </div>
                            <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center bg-white lg:bg-transparent">
                                <span className="text-[#E9724C] font-bold uppercase tracking-wider text-xs mb-4">Đội ngũ chuyên gia</span>
                                <h3 className="text-4xl font-bold text-[#151711] mb-6">Kỹ thuật & Am hiểu</h3>
                                <p className="text-gray-600 mb-10 leading-relaxed">
                                    Chúng tôi là những chuyên gia kỹ thuật với sự thấu hiểu sâu sắc về thổ nhưỡng và văn hóa Việt Nam. Tại KGX, mỗi thành viên đều mang trong mình tình yêu với thiên nhiên và kỷ luật trong công việc.
                                </p>
                                <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                                    <div className="flex flex-col border-l-4 border-[#546a2f]/20 pl-4">
                                        <span className="text-4xl font-black text-[#546a2f]">10+</span>
                                        <span className="text-sm font-medium text-gray-500 mt-1">Năm kinh nghiệm</span>
                                    </div>
                                    <div className="flex flex-col border-l-4 border-[#546a2f]/20 pl-4">
                                        <span className="text-4xl font-black text-[#546a2f]">150+</span>
                                        <span className="text-sm font-medium text-gray-500 mt-1">Dự án hoàn thiện</span>
                                    </div>
                                    <div className="flex flex-col border-l-4 border-[#546a2f]/20 pl-4">
                                        <span className="text-4xl font-black text-[#546a2f]">100%</span>
                                        <span className="text-sm font-medium text-gray-500 mt-1">Hài lòng</span>
                                    </div>
                                    <div className="flex flex-col border-l-4 border-[#546a2f]/20 pl-4">
                                        <span className="text-4xl font-black text-[#546a2f]">24/7</span>
                                        <span className="text-sm font-medium text-gray-500 mt-1">Hỗ trợ kỹ thuật</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="container py-24">
                    <div className="flex flex-col items-center text-center mb-20">
                        <span className="text-[#546a2f] font-bold uppercase tracking-wider text-sm mb-4 block">Triết lý thiết kế</span>
                        <h2 className="text-4xl lg:text-6xl font-bold text-[#151711] max-w-4xl leading-tight">
                            Tôn trọng tự nhiên, <br /> từ chối sự sao chép
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#546a2f]/5 p-10 rounded-2xl border border-[#546a2f]/10 hover:border-[#546a2f]/30 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#546a2f] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">forest</span>
                            </div>
                            <h4 className="text-2xl font-bold text-[#151711] mb-4">Thuận theo tự nhiên</h4>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Ưu tiên sử dụng cây bản địa, vật liệu địa phương để đảm bảo sức sống bền bỉ và giảm thiểu tác động môi trường.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:border-[#546a2f]/30 transition-colors shadow-xl shadow-gray-100/50 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#546a2f]/5 rounded-bl-full -mr-8 -mt-8"></div>
                            <div className="w-14 h-14 bg-[#546a2f] rounded-xl flex items-center justify-center text-white mb-8 shadow-lg shadow-[#546a2f]/20 group-hover:scale-110 transition-transform relative z-10">
                                <span className="material-symbols-outlined text-3xl">fingerprint</span>
                            </div>
                            <h4 className="text-2xl font-bold text-[#151711] mb-4 relative z-10">Bản sắc riêng biệt</h4>
                            <p className="text-gray-600 text-base leading-relaxed relative z-10">
                                Mỗi khu vườn là một câu chuyện riêng, không có sự lặp lại hay sao chép vô hồn từ các thiết kế phương Tây không phù hợp.
                            </p>
                        </div>
                        <div className="bg-[#546a2f]/5 p-10 rounded-2xl border border-[#546a2f]/10 hover:border-[#546a2f]/30 transition-colors group">
                            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#546a2f] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">wb_sunny</span>
                            </div>
                            <h4 className="text-2xl font-bold text-[#151711] mb-4">Thích ứng khí hậu</h4>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Giải pháp thiết kế thông minh giúp điều hòa vi khí hậu, chắn nắng, đón gió, phù hợp với thời tiết nhiệt đới ẩm gió mùa.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Activities (5 Columns) */}
                <section className="bg-[#546a2f] py-28 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
                    <div className="container relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-3">Lĩnh vực hoạt động</h2>
                                <p className="text-white/60 font-medium text-xl">Giải pháp toàn diện cho không gian xanh</p>
                            </div>
                            <button className="border border-white/30 hover:bg-white hover:text-[#546a2f] px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2">
                                Xem hồ sơ năng lực
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { icon: "architecture", title: "Thiết kế", desc: "Quy hoạch tổng thể và thiết kế chi tiết cảnh quan sân vườn, resort." },
                                { icon: "engineering", title: "Thi công", desc: "Triển khai xây dựng chính xác theo bản vẽ với đội ngũ nghệ nhân lành nghề." },
                                { icon: "forum", title: "Tư vấn", desc: "Đánh giá hiện trạng, tư vấn phong thủy và giải pháp cây trồng phù hợp." },
                                { icon: "local_shipping", title: "Cung ứng", desc: "Cung cấp cây xanh, vật tư, đá nghệ thuật chất lượng cao từ vườn ươm." },
                                { icon: "spa", title: "Chăm sóc", desc: "Dịch vụ bảo dưỡng, cắt tỉa định kỳ để duy trì vẻ đẹp bền vững." }
                            ].map((item, index) => (
                                <div key={index} className="group bg-white/5 hover:bg-white/10 border border-white/10 p-6 rounded-2xl transition-all cursor-pointer flex flex-col h-full">
                                    <span className="material-symbols-outlined text-5xl mb-6 text-[#E9724C] font-light">{item.icon}</span>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-sm text-white/70 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow (6 steps) */}
                <section className="container py-28 overflow-hidden">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#151711]">Quy trình làm việc chuyên nghiệp</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute top-[48px] left-0 w-full h-[2px] bg-gray-200 hidden lg:block -z-10"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                            {[
                                { step: "01", title: "Tiếp nhận", desc: "Lắng nghe nhu cầu và khảo sát hiện trạng.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkh-OPEXbsVM5vBfhgBC7OaSsmroY75Hhx5uKIUKZv_CIB0g9Oa7At-w4NOYjnffA7pSifgUYciAJ2NSiOkwq3qtvu2gTH9rvuuXu47Y93w-DpP9EotCuIzDJFYe2DjWD53UpurKzjhq6TtsmOVigQNWHykJ24gSKdZN0jnQ1cjzEsSEQXP3saGKcR1rk1tEnHSuWteFRF6bxzM2Q6fY2_1jDuLhvJ0s_b4xaoRdHH0Gi76k9MIg-PjFej7R8DRtSVqU_Yz13WViY" },
                                { step: "02", title: "Ý tưởng", desc: "Phác thảo Concept và định hướng phong cách.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0zeDd7mu6MsGQdNTOWfxDOKqGvMpGEowduAHXvhNfJY_hBIpwOCBJ8DUdww96IahsByDGy6y1_MT7xBPNQrGtLN1zz-Koe7GFVf2C7I8cOXdGGJsNAZ6lehgKezXpyZagXbKxh7cJOiSAYiNazbmeZ7Lg8i4XodpEQWIn3-P9sWLFO72hFBAMTWZzeZnhA9di2c_uEtOjN6I5I5aIZltTD9IPJu4kdlhdlmsSQRpGXmNdJf5fCEjJzHgUjRpZxeHpv-6R22tbbE" },
                                { step: "03", title: "Thiết kế", desc: "Hoàn thiện bản vẽ kỹ thuật và 3D chi tiết.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgRvj4umuhdQpopU3_Hl1kJvmaYID-unBFTCbhUunkxj1on9EqSBZXboffJNbbLTZtHKfxYcXL1_ASpj-elchpW8_M4g6W6MFz6GpBgWgcO7q0c3J5ms8xSkGv-hdMDM_lMNVJzEkeVO5mDt0UwrkHM2mzHT2qB_oNL-cMLAyf1ggEpCnDa2NQggo7W9Y2Uz6vn0zVKMfVujMogKx2xcYhgA1CjQYIAFvwIph4y74xiQ4HATElW0PAGwcWE2fPmhdKP73GA3bYqEI" },
                                { step: "04", title: "Báo giá", desc: "Dự toán chi tiết và ký kết hợp đồng.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1zGsElBrlBzm6OE_lndsxRXvKkyLCb_MM_3Yylad_NLizqjOHJZP7x3OuGbTLUh0Qc1IbHbMBVB-1D9kxMTTDwXTcGIDHOiP2PTh1A3l8uKThmcawonMEQc4JfDNymboFP4z6U7QFMPZsHFJKwgKb8Am5u-GYPba2XEG8pUF2X54eMtDtHEE84JsdqaCJgukdVXIao_pnBdiqbeYEt4Wzok6nQXLAfW2rT4SyJioI2HGS-Pp1YyPlmQaC2fFtjTgu2XRa4iQTPPA" },
                                { step: "05", title: "Thi công", desc: "Triển khai giám sát và thi công tại công trình.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB99Q9Y6t564OkAGx_5s_w2jaAOe3i-E1lYib3oklY-FuOEgH5n__MTCwgscTXmBdX_SoQexHdl5D3cEV3IYjKzVU-RhaaKVqp8lP9SuYrHBPTqMOZsDf1dILs1QItkCa1ntg7c2qhxa1abcw0f2eE-0KQXAJZqh7KRthuqRUPkO10xmlybw89jRY2LmF7vTOWkgCwwhjwpX5YBUI3aE25ikkaTdnZjqbKXyYsJE0eqzU76VhDkay34Wu1puXe2xLLhr0H2-2fJ08E" },
                                { step: "06", title: "Bàn giao", desc: "Nghiệm thu, hướng dẫn và bảo hành.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKhrKmWRw86Eor8uTOHlFNH4LbGZjLanZZ_EMrJl0ukeQr0UAMRMCGx4zUE9CZmgLDTeFJ-0tyOOa-FU8Z7ytgT_mYaQFFo21Os4SeNK1LhFBZqRzPLLSqysXm2fMRik996xzqKmHtZjs0yIN9NlHUPlpUuZJPezNtk_pVmPHl3oYWVHlp9q81WWHHw9PfvL-szr9-dZcaCTvErizW_Kg9_OPHQAMLLNFjPSST-ZbyfvSdS8t8flu06jTXKdAfCnVGF0c72a2Gyv8" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center lg:items-start lg:text-left group cursor-default">
                                    <div className="w-24 h-24 rounded-full border-[6px] border-[#f3f3f2] bg-gray-100 mb-6 relative overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
                                        <img alt={item.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500" src={item.img} />
                                        <div className="absolute inset-0 bg-[#546a2f]/30 flex items-center justify-center font-black text-white text-2xl group-hover:bg-[#546a2f]/10 transition-all">{item.step}</div>
                                    </div>
                                    <h4 className="text-lg font-bold text-[#151711] mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="container py-20 bg-white rounded-[2.5rem] mb-12 shadow-sm border border-gray-100">
                    <div className="text-center mb-16">
                        <span className="text-[#546a2f] font-bold uppercase tracking-wider text-sm mb-3 block">Giá trị cốt lõi</span>
                        <h2 className="text-3xl font-bold text-[#151711]">Kim chỉ nam hành động</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "verified", title: "Thực tế", desc: "Giải pháp khả thi, không vẽ vời xa rời thực tại." },
                            { icon: "visibility", title: "Rõ ràng", desc: "Minh bạch trong báo giá, vật liệu và quy trình." },
                            { icon: "eco", title: "Bền vững", desc: "Hướng tới giá trị lâu dài cho công trình và môi trường." },
                            { icon: "handshake", title: "Trách nhiệm", desc: "Đồng hành cùng khách hàng ngay cả sau khi bàn giao." }
                        ].map((item, index) => (
                            <div key={index} className="aspect-square bg-[#F8F9FA] rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#546a2f] transition-colors duration-500 cursor-default">
                                <span className="material-symbols-outlined text-4xl text-[#546a2f] group-hover:text-white transition-colors">{item.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-black text-[#151711] group-hover:text-white mb-2 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Commitments & Collage */}
                <section className="container py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="grid grid-cols-2 gap-4 h-[560px]">
                            <div className="bg-gray-200 rounded-2xl overflow-hidden col-span-2 row-span-2 relative group">
                                <img alt="Koi pond" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWK9XERlcrEtNPxzh6Vy57gCpQlCRQy5suYP-KZCFtsNlIRDjEECwKZ295gR24MAFvpTcrMi7jrNz09gFPxfkuY7nMgdP48-gLvY3I9M2LVJgR9qlac8Gmoa8ZfX0zMe7S-sQbtrTN254PbnKUOY9EcKy_UlFlEZ0o5xOXGst4Y1-MHKRKZsawA1RtXzZSCCQ0eQJm8OGkbIwXWySzrNfJT08xt33HEvbw6MfUUL0IQxwaCd0u2VTHqZQ_sQT1GOearciNj1pF-s0" />
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-xs font-bold uppercase tracking-wide">Dự án biệt thự Ecopark</div>
                            </div>
                            <div className="bg-gray-200 rounded-2xl overflow-hidden relative group">
                                <img alt="Vertical garden" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnWw69ZvJAv2Hf9zpcEy3ygjCDt0BOOo9o5-3RA2JwTJ2D28lF7bxrCMPHLABpej0f5DZ3SiC59C_4BPZBBcB08feLP05LOjRVuFgd5G7ir8ljojW4lX8DenTxYFQ2SnnWCLpgQkKKYuP_vdirqv-rF2f70OOz4pgjwIdXH7IGTJ0R-haO__y8n0RdIDCfAwVV_KEAkZLjwJQxfAfFIbbu3YppdQcC3Pe5LlERAVutubC1YM_y6fvhpQeM7KD1fOyJunlLL16O1FY" />
                            </div>
                            <div className="bg-gray-200 rounded-2xl overflow-hidden relative group">
                                <img alt="Patio stone work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWzALJwUBrhit8G-yXh3yKCufKjhK18PUuewql3LeL1lkR8De3JB9zX72cMcWYDNRO8aQjm3Z0PIZddQDk2aGWNsoH0Dwt9ucEtN3JIQY2eVBjOEgF53WKkki2V6Bx6IWTdmcVV8BHPfFpyLX3hcEMWvDuNovt30_5suZEVclRBm9eNALZGuyNh_upq5-z26a9TSITERrcd7Nvv68fiCNZKdomuoarbk9Z5MtBTP0v_X4GTfB_bLVnywWJk7M0km3Xtjet2_4g8k" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <h2 className="text-3xl lg:text-5xl font-bold text-[#151711]">Cam kết chất lượng <br />từ KGX Landscape</h2>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E9724C]/10 flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[#E9724C]">check</span>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-[#151711]">Đúng tiến độ</h5>
                                        <p className="text-gray-600 mt-1">Cam kết bàn giao đúng hạn, không gây ảnh hưởng đến kế hoạch của gia chủ.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E9724C]/10 flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[#E9724C]">check</span>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-[#151711]">Đúng vật liệu</h5>
                                        <p className="text-gray-600 mt-1">Sử dụng đúng chủng loại cây và vật tư như đã thỏa thuận trong hợp đồng.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E9724C]/10 flex items-center justify-center mt-1">
                                        <span className="material-symbols-outlined text-[#E9724C]">check</span>
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-bold text-[#151711]">Không phát sinh</h5>
                                        <p className="text-gray-600 mt-1">Báo giá trọn gói, kiểm soát chi phí chặt chẽ, không có chi phí ẩn.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="w-full bg-[#151711] text-white py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#546a2f]/30 to-transparent"></div>
                    <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Sẵn sàng kiến tạo <br /><span className="text-[#546a2f]">không gian mơ ước?</span></h2>
                            <p className="text-gray-400 text-xl mb-10 font-light">Hãy để KGX đồng hành cùng bạn tạo nên những mảng xanh giá trị và bền vững.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#546a2f] hover:bg-[#435525] text-white px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-lg shadow-[#546a2f]/20 text-center">
                                    Nhận tư vấn miễn phí
                                </button>
                                <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all text-center flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">call</span>
                                    Liên hệ 0868 462 462
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <div className="text-[240px] font-black text-white/5 leading-none select-none tracking-tighter">KGX</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
