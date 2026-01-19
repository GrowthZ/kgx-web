import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetailPage: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#151b0e] font-display">
            {/* Hero Section */}
            <header className="max-w-[1200px] mx-auto pt-12 px-6">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap gap-2 text-sm font-medium mb-6">
                    <Link className="text-gray-500 hover:text-primary" to="/">Trang chủ</Link>
                    <span className="text-gray-400">/</span>
                    <Link className="text-gray-500 hover:text-primary" to="/tin-tuc">Tin tức</Link>
                    <span className="text-gray-400">/</span>
                    <span className="text-primary uppercase">Kiến thức cây xanh</span>
                </nav>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl text-gray-900 dark:text-white">
                    5 TIÊU CHÍ CHỌN CÂY CÔNG TRÌNH PHÙ HỢP KHÍ HẬU MIỀN BẮC
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                    <div className="flex h-9 items-center rounded-full bg-primary/10 px-4 text-primary text-sm font-semibold">
                        Kiến thức cây xanh
                    </div>
                    <div className="flex h-9 items-center rounded-full bg-gray-100 px-4 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm mr-2">calendar_today</span>
                        15/10/2023
                    </div>
                    <div className="flex h-9 items-center rounded-full bg-gray-100 px-4 text-gray-600 text-sm font-medium">
                        <span className="material-symbols-outlined text-sm mr-2">person</span>
                        Tác giả: KGX
                    </div>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 border-l-4 border-primary pl-6 py-2 italic mb-10">
                    Việc lựa chọn cây xanh cho công trình tại miền Bắc đòi hỏi sự am hiểu sâu sắc về thời tiết 4 mùa rõ rệt. Bài viết này KGX sẽ chia sẻ các tiêu chí kỹ thuật quan trọng nhất.
                </p>
                <div className="aspect-[21/9] w-full bg-gray-200 rounded-xl overflow-hidden mb-12 shadow-lg">
                    <img alt="Công viên cây xanh hiện đại" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeVv1ElqpdTUlUbcvGxBKSzc2Yqe43kBrlqCKMCLMigIuooJC-QQ0qf3gY6NqIR4U4gyUMQDOopHJHFge6D84LLSK5KyE3CnmCcr5nLb4WusSexLY8tTzVj0sxRLMpASk1i83t_qf-iRZgHv5Yag1to0-tjM0lpBzwnFsF1vdtdiZWfk97Tz5G1OxCalfREJJfTXFZnqmZjMn15bNKEqE-30hXNHf6nM86zmivg5PYbg80DSUTJSzA6365ujpzLXk0qdRHtw43sUA" />
                </div>
            </header>

            {/* Main Content Grid */}
            <main className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-12 mb-20">
                <article className="col-span-12 lg:col-span-8">
                    <div className="prose prose-lg max-w-none text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <h2 className="text-2xl font-bold text-[#151b0e] mt-8 mb-4">Vì sao cần quan tâm đến thổ nhưỡng?</h2>
                        <p className="mb-6">Khí hậu miền Bắc Việt Nam có đặc thù phân hóa rõ rệt: mùa hè nóng ẩm, mưa nhiều và mùa đông lạnh khô, thậm chí có sương muối. Đây là thử thách không nhỏ cho việc duy trì sự sống và vẻ đẹp của cây công trình.</p>
                        <p className="mb-6">Thổ nhưỡng miền Bắc thường là đất thịt pha, đất phù sa hoặc đất đồi rừng tùy khu vực. Việc kiểm tra độ pH và khả năng thoát nước của đất là bước tiên quyết trước khi quyết định chủng loại cây.</p>

                        <div className="my-10 rounded-xl overflow-hidden shadow-md">
                            <img alt="Vườn ươm cây xanh quy mô" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB8dnWNuEgiEecqtNRzNJEV98zl4IL8Xe7HHpdDkF2fHrbr_3e5EzWg8IoYLb8qd7Cs1WncNGKrFMy63FeLGM9S-FP2WMrthsxEKv6cCwBXkZ7qAH6e-kSYpe1JbILa1uGxwyohfywSahf-GnGv01F6UafrWv_oIXNzhYHZBC1V5tWiJQc9t8jQGD14Ygnuaetm-m-lBVYz0W5o4-aHT-YC_jizyYQoFAvidjQ4pnztOTJA7rYGNks5WQZ6VFCvm__rgu40rdFzYg" />
                            <p className="text-sm text-center text-gray-500 py-3 bg-gray-50 italic">Hệ thống vườn ươm KGX đảm bảo cây giống thuần chủng khí hậu bản địa.</p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#151b0e] mt-8 mb-4">5 Tiêu chí kỹ thuật hàng đầu</h2>
                        <p className="mb-6">Dựa trên kinh nghiệm thực chiến từ hơn 500 dự án cảnh quan, KGX đúc kết 5 tiêu chí vàng:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Khả năng chịu hạn và chịu lạnh:</strong> Ưu tiên các loại cây có bộ rễ sâu, lá dày.</li>
                            <li><strong>Tốc độ sinh trưởng:</strong> Cần cân đối giữa cây phát triển nhanh (che bóng) và cây chậm (ổn định cấu trúc).</li>
                            <li><strong>Tính an toàn:</strong> Rễ không làm hư hại công trình ngầm, cành dẻo dai chống chịu bão.</li>
                            <li><strong>Thẩm mỹ bền vững:</strong> Cây ít rụng lá, hoa nở theo mùa đặc trưng.</li>
                            <li><strong>Dễ bảo trì:</strong> Giảm thiểu chi phí cắt tỉa và phòng trừ sâu bệnh.</li>
                        </ul>

                        <div className="my-10 p-8 bg-gray-100 border-l-8 border-primary rounded-r-xl">
                            <div className="flex items-center gap-2 mb-4 text-primary">
                                <span className="material-symbols-outlined font-bold">lightbulb</span>
                                <h3 className="text-xl font-bold m-0 text-primary">Kinh nghiệm từ KGX</h3>
                            </div>
                            <p className="text-gray-700 italic m-0">
                                Đối với các công trình ven biển miền Bắc (Hải Phòng, Quảng Ninh), hãy ưu tiên các loài cây chịu mặn và gió mạnh như Phi lao, Tra làm chiếu hoặc Cọ dầu. Đừng quên gia cố cọc chống bằng gỗ vững chắc ít nhất 2 năm đầu tiên.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#151b0e] mt-8 mb-4">Quy trình thi công tiêu chuẩn</h2>
                        <p className="mb-6">Không chỉ dừng lại ở việc chọn cây, quy trình hạ thổ và chăm sóc những tháng đầu chiếm 70% tỉ lệ thành công. Việc sử dụng phân bón hữu cơ vi sinh kết hợp hệ thống tưới tự động là giải pháp tối ưu cho các công trình hiện đại.</p>

                        <div className="my-10 rounded-xl overflow-hidden shadow-md">
                            <img alt="Thi công cảnh quan dự án" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUYmyy811L6iPZJlLjsOo6ClqnMYsuNROKB3TzwGHbJT2Kx3hZuupEL2Y8G1BoPA8vnVFbw1ekhJ9I6RqDwzX2tl2cM7BHPUytLiKA22jxDr_wnYdS3t48SdIFXgFGqBGfdTsJFVBZujXXQ10PuPMZsmMNYbpqU0IvmR74ezAx4VscTXmGYLrkydPW-FPNIcwuOddH9I8l8PANtTp77sB596dp0cjBKo-FOEBovdcTKQD88A0NeWzTG10wMMdNQmPLI7_vJ9s89Dc" />
                        </div>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">trending_up</span>
                            Xem nhiều nhất
                        </h4>
                        <div className="space-y-4">
                            {[
                                { title: 'Xu hướng thiết kế sân vườn biệt thự năm 2024', time: '2 ngày trước' },
                                { title: 'Cách chăm sóc cây bóng mát trong mùa bão lũ', time: '1 tuần trước' },
                                { title: 'Top 10 loại cây phong thủy cho sảnh văn phòng', time: '15/09/2023' }
                            ].map((item, idx) => (
                                <div key={idx}>
                                    <a className="block group" href="#">
                                        <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">{item.title}</p>
                                        <span className="text-xs text-gray-400">{item.time}</span>
                                    </a>
                                    {idx < 2 && <hr className="my-4 border-gray-100 dark:border-gray-700" />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden group">
                        <img alt="Banner tư vấn" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0XdZ2e8n1fQofeTMFt5n8xPaPj00J3dYeaC6pK0ua1fKJYdv5ftyHTIEA5KztMqCENIpaLmP96T8xh3KAtJT_fF1WDtNZqI1BCcxENSya9bfXSbE-tFtHF0Awsi9i2gGcBeZ0fD4jK8dgnPUuug-8oEljPsHrvZ8mIHkS6Xm3cWtKp6mohxQ37IdhBsjIK2EZicuHPkW_PMGTPUKyn22BezMiP5_K1BT7Lf7WmtY5b9BaYxkZsSz8dlPZPfg4oprJNfDEYL0Uhi0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                            <h5 className="text-xl font-bold mb-2">Đăng ký nhận báo giá dự án nhanh nhất</h5>
                            <button className="bg-accent hover:bg-accent/90 text-white w-full py-3 rounded-lg font-bold transition-all">Gửi yêu cầu ngay</button>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Related Articles */}
            <section className="max-w-[1200px] mx-auto px-6 py-20 border-t border-gray-100">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold uppercase tracking-tight text-primary">Bài viết liên quan</h2>
                    <Link className="text-primary font-bold flex items-center gap-2 hover:underline" to="/tin-tuc">
                        Xem tất cả <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { slug: 'phong-thuy-tung-la-han', title: 'Ý nghĩa phong thủy của Tùng La Hán trong cảnh quan', desc: 'Tùng La Hán không chỉ là cây cảnh quý mà còn mang lại sinh khí và sự thịnh vượng...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYx_vS31glR2uC6Qxau3ZTShIBGRQK2EcUL9tk9-v9ed6WmHnPpxuNlXsGzHKBgpkefdVVuzOCeRntRCxu2HvYKdG3ewuT0ugRZh7KiNC9l71goK0r8XdxUPa_upc2qutRVMSz0md_r0FKObg3l1pAmhRuhUOmHYoLUEwQQu7OPMYAqexxKyUW4ZkCxrE88uZAiCUkZh6oLv1TT1ZikXXUVkQ4WHlJ6d5jCF4gpOxlIkXiv6vlXQ4fh-mwivztXNA7UmkiHvptgnc' },
                        { slug: '7-loi-thiet-ke-san-vuon', title: '7 Lỗi thường gặp khi tự thiết kế sân vườn mini', desc: 'Việc ham quá nhiều chi tiết hoặc chọn sai loại đất thường dẫn đến sự thất bại...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhz01OTtfLPJiDGZDw00OtXRCqh6jeBFeh-LRdsV2IT_d3MauBvbvPRNRpDHALxXXqDeytbaVAg8pUC1wQvqgBnd4ToX-TCwyaEAzgQwhnJRbHHnhrZVr6tygV6N2Ld-Wf1XKd7HCPdenDOCld-gglOey93sUqWczxN5S316nhaFwSf-tMmjpzVQhpSq_sWp5hP4oJQpOdBABGNkGeMo3HVlytpoLXeJKLUl8Hn4vL_ADWEqZyN3hW9nQ2PMi259IP3cBwEqhU3Yc' },
                        { slug: 'lich-trinh-bon-phan', title: 'Lịch trình bón phân định kỳ cho cây thân gỗ lớn', desc: 'Cây công trình cần chế độ dinh dưỡng khác biệt so với cây cảnh trong chậu...', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDjzPLpvZOxB8ETpNrVJWMgxdMHP0GC3zS7uI3IEvqNYY56qHOvjwJas_OPTfnlMJb1B8daZ5XrRfyGKMBi5NzSnYzo4w9jlOifA2nmMhB9FU4ox3rOtI7oQF3oykZyP4EWTAf93fY5TItTVK_OEREk4adLIiUMHwRJFD0qwA6HwsXwnXOfSWZcSzYh3GtjEkNQHaSaVC-nvBnBQ9Z4VIGsbp_LjebxW34fhZG-qt1IrJATuqx3MsOue65LXW2QJ_JI1J9oyPjdpQ' }
                    ].map((post, idx) => (
                        <Link key={idx} to={`/tin-tuc/${post.slug}`} className="group cursor-pointer">
                            <div className="aspect-video rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-100 dark:border-gray-800">
                                <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={post.img} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors uppercase">{post.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">{post.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ArticleDetailPage;
