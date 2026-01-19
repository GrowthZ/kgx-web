import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 font-display transition-colors duration-300">
            <main className="max-w-[1200px] mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-black text-charcoal dark:text-white leading-[1.1] tracking-tight">
                            Kiến thức &amp; <br /><span className="text-primary">Tin tức cảnh quan</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                            Chia sẻ kinh nghiệm thực tế về thiết kế và thi công cảnh quan, mang lại giá trị bền vững cho không gian sống của bạn. Nơi hội tụ kiến thức chuyên sâu cho chủ đầu tư và gia chủ.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center gap-2">
                                Khám phá ngay <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 blur-2xl group-hover:bg-primary/20 transition-all"></div>
                        <div className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl shadow-2xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFA2058_G9sc4h34_kea3fUgu9ApiPcBS23RxZXbvKn9_ZqxfCCcoaGBgLYtO4kh2hZGr7kqxN4nmXl_IHkiW0_wWB9peISPI4eQpf0mNk8sI_LhvLdvjSk74_B3VJRVKm_1wSzJhrQThvuYL_7fD5spev6NsGQtYKTwQ0PWGDUG6OHvgHDmvSqjerNNR94-iREdlV8PKN2HLWYBf4pUeRUwNDBr28ZjcPlZuBBPgM4uZv0WhddTwRv0K3mwXhRpWz1pyF9hvi4CY')" }}>
                        </div>
                    </div>
                </section>

                {/* Filter Tabs */}
                <div className="sticky top-20 z-40 bg-background-light dark:bg-background-dark py-4 mb-12 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {['Tất cả', 'Kiến thức cây xanh', 'Thiết kế cảnh quan', 'Thi công & bảo dưỡng', 'Dự án thực tế', 'Tin tức KGX'].map((tab, idx) => (
                            <a key={idx} className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${idx === 0 ? 'bg-primary text-white' : 'text-gray-500 hover:text-primary dark:text-gray-400 font-semibold'}`} href="#">{tab}</a>
                        ))}
                    </div>
                </div>

                {/* Highlight Section */}
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full"></span>
                    Bài viết tiêu điểm
                </h2>
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {/* Large Featured Card */}
                    <div className="lg:col-span-2 group">
                        <div className="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                            <div className="aspect-video bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDP19osqeyigtVUV6OT8LZYku7lQYGwJkHcGW7J6lNANQxehV4wM7EU-byUHMRsMGrOtlyozUD4ZHd4ILx0vSA7I20ufGbFXHNG78yZ2CEW-Tb2lEiMzeoUGQmF-xpYmbKxgleTn5anTYvkTQbzDzownqeF_gRQzz7a_XaErZWSu-nwcuSkld4TcY8e38h0WofF8Qy6Nv-VFy1bWaTO2kVAegPh7KxGJyG6QYCDmklvBSU4aeo7gHGYAz0vrdoBTjP_FvBmWcTBMV8')" }}>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex gap-3 mb-4">
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Xu hướng</span>
                                    <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">calendar_today</span> 24 Tháng 5, 2024
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">Xu hướng thiết kế cảnh quan bền vững năm 2024</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                                    Tìm hiểu cách kết hợp các loại cây bản địa và giải pháp tưới tiêu thông minh để tạo nên không gian xanh tiết kiệm chi phí vận hành. Trong năm 2024, tính bền vững không chỉ là xu hướng mà còn là yếu tố bắt buộc trong các công trình hiện đại...
                                </p>
                                <Link className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" to="/chi-tiet-bai-viet">
                                    Xem chi tiết <span className="material-symbols-outlined">chevron_right</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Small Cards */}
                    <div className="flex flex-col gap-6">
                        {[
                            { title: '5 loại cây phong thủy mang lại tài lộc cho biệt thự', cat: 'Kiến thức cây xanh', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5GJ2SX-QSXlDHDuOUM-X-pcf7QWSBdJ3tMZTmfr8fNC5iptTM_3EO5hTsEVN0JqyoDcDk3QceJLhqeaxMAm25LtBTZ6son62bmZoy25UH6yxvDuwsQm-hEfl-b1R_Hp91_wTZVbD-z_Fd4wy8fZlTkIU8q9m-WgXzO1z3YZ5YjtxhTrP2jITEjLb-vOL2AE9VMgZYcn5B6NW9gAsJ90OTXk60i0PwESJfT4W9DOoa63BAFeoHtQIrsi7m0tELhk5ol12i6Xf0HZs' },
                            { title: 'Quy trình thi công sân vườn chuyên nghiệp từ A-Z', cat: 'Thi công & Bảo dưỡng', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGQDTf274JYc66e94emqKD-MhfEUXd93o7W4jEmhwlxN7nbbhWOrD4Xxiq3pzYxtONFudP8UeNxtbxbIpKBTWo1-WNjkqeqK7QUNXn3PwJeTlf-JxOU0EpdSRudeqW3VVWaaM6dhXcRJfQAdiROuR_vTy8G9q7c76d84LAa75Oax37lLOFrWRVrwe1W59ourN7K1bCNUiYzpen5Bfx6Qjlser-2jHDV6wNjOH4uueRaAY_zPmsrtzTOgk71ggPZ3QpdjhxdeIFgnA' },
                            { title: 'Giải pháp xử lý nước hồ cá koi trong vắt quanh năm', cat: 'Dự án thực tế', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY7uKXp7N3MPGVElR3hwVoRVEACTTq7MQvMeUg7_3aVD7ntMVIAwg3A4Wytt3hznNigK6jgAd-nAHRkgIs_ueaCi_6vNGTyEPmJ1NLYhk-kC0J8Nx7xJBooP90k_0zRn3VjBx7PEbWFGlFwnjdbMdkemQBk-aTBw5pfrLgKLqX4zJAjcixqU3dMBUQecieD7wFEI-YAicplUfog5CWHvgB-OaTE6A5qRzGaL6e2DE9ZNwxp5k0GN3xzamoQ7se6-8ycd0dZFjCzQM' }
                        ].map((item, idx) => (
                            <div key={idx} className="group flex gap-4 items-start bg-white dark:bg-charcoal p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
                                <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${item.img}')` }}></div>
                                <div>
                                    <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors mb-2 line-clamp-2">{item.title}</h4>
                                    <span className="text-[10px] text-gray-400 font-bold uppercase">{item.cat}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Main Article Grid */}
                <h2 className="text-2xl font-bold mb-8">Tất cả bài viết</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {/* Post Card 1, 2, 3 wrapped in Link */}
                    {[
                        { title: 'Nghệ thuật chiếu sáng cảnh quan: Biến khu vườn thành kiệt tác', cat: 'Thiết kế', date: '10/05/2024', desc: 'Ánh sáng không chỉ để thấy đường đi mà còn là ngôn ngữ của cảm xúc. Khám phá cách bố trí đèn hiệu ứng cho sân vườn sang trọng.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbLkxb_StVEo67PPyNFxQj0Df9zKSTSt-NY689MdEr2aHhArzQBgY7gM1XwAyY7wSsUuZjt59jc5ZIJAFMjpxjOXMeXTGOWuTQpSRctwFLW9gQO8369km9_DoRGb-Ld3LtclncC0BZ1pZiJRChJXSORHpd0OJTw_Q63CFhdFdFGw1FrIPtzfmIFfmlElB_1XcjM_IyFXIVjzYN9feR1bmDNyrcTsfJE_IWZwKB7nd3cbQYyC8VJNKYy5Lv4HCS-tW60vljmwg1npU' },
                        { title: 'Lựa chọn vật liệu đá tự nhiên cho lối đi sân vườn bền đẹp', cat: 'Kỹ thuật', date: '08/05/2024', desc: 'Đá bazan, đá cubic hay đá tổ ong? Phân tích ưu nhược điểm của các loại đá tự nhiên phổ biến nhất hiện nay.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9AB-ZabFtfO_vWNrHWVzVqLZT9hHKoUsHqDRKqhFZciLn8Yl-4Qk5_Gv1kpXw6b-Scb_QihL3p_vaX1UVs0fsf_uNR8uzv_oy7mZJMj77wwgp-W0sqJaGl-5s3hbhbhJ_jJW-B1MzWVXBR1k-bDlE4diB6nULa8rXvQAEsJ5g72aBhJSt_ROp3R2iivgurGf4odNaJnUW1Xygq2tEwb0DI3SH5yelm0bI36oQl-U21JEM5noOCSP9g6txEpd4CWTm8pf00up8sMo' },
                        { title: 'Lịch trình chăm sóc cây xanh mùa nắng nóng cho gia chủ bận rộn', cat: 'Bảo dưỡng', date: '05/05/2024', desc: 'Tần suất tưới nước, bón phân và cắt tỉa định kỳ để duy trì vẻ đẹp nguyên bản cho công trình cảnh quan của bạn.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHyFn5nz5mGMBjdUTVdJFDe1ikANAzD3JdrU4j_W89hdASsXYdHEPmcQ1HPoiBbLHdghT7JIJzFPMAfAsu7iANnFTP2uO2K-hZynfZtAWoAqAf8qivKT_OYMcj3A-yt8WtQmTZbbgujTElXtMYHl3HjDC3a2tWjnCbbdRWS-20Ky2VuJ4E2yPi14Q4Z44H0rnskOEw1dpE3t0UNGtnb9dNyS0y8BAW8vv0sCi2yDnNDGV4t6DIxQg7vllChE7oTHJ-wQ-UD-keq1I' }
                    ].map((post, idx) => (
                        <Link key={idx} to="/chi-tiet-bai-viet" className="bg-white dark:bg-charcoal rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800">
                            <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url('${post.img}')` }}></div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2 py-1 rounded">{post.cat}</span>
                                    <span className="text-[11px] text-gray-400">{post.date}</span>
                                </div>
                                <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">{post.desc}</p>
                                <span className="text-sm font-bold text-primary inline-flex items-center gap-1 hover:underline">Xem chi tiết <span className="material-symbols-outlined text-xs">open_in_new</span></span>
                            </div>
                        </Link>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default ArticlesPage;
