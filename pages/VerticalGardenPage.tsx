import React, { useEffect } from 'react';

const VerticalGardenPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Thiết kế Vườn thẳng đứng - KGX Landscape";
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#141613] dark:text-gray-100 antialiased selection:bg-primary/20">
            <main className="w-full overflow-x-hidden">
                {/* Section 1: Context (Intro) */}
                <section className="bg-background-light dark:bg-[#30352c] py-20 lg:py-28 px-4 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="flex flex-col gap-12 lg:gap-16">
                            <div className="max-w-[760px]">
                                <span className="text-accent text-sm font-bold tracking-wider uppercase mb-3 block">Bối cảnh đô thị</span>
                                <h1 className="text-[#141613] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl lg:text-6xl uppercase">
                                    KHI KHÔNG GIAN NGANG<br className="hidden md:block" /> <span className="text-primary dark:text-accent">KHÔNG CÒN</span>
                                </h1>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                                {[
                                    { icon: 'apartment', title: 'Thách thức đô thị', desc: 'Mật độ xây dựng cao tạo áp lực lớn lên không gian sống, biến những khoảng xanh trở nên xa xỉ trong các đô thị lớn.' },
                                    { icon: 'deceased', title: 'Thiếu diện tích cây xanh', desc: 'Diện tích đất tự nhiên ngày càng thu hẹp, khiến việc trồng cây theo phương pháp truyền thống trở nên bất khả thi.' },
                                    { icon: 'trending_up', title: 'Nhu cầu giải pháp xanh', desc: 'Xu hướng chuyển dịch sang tìm kiếm những mảng xanh theo phương thẳng đứng, tận dụng tường rào and mặt đứng tòa nhà.' }
                                ].map((card, i) => (
                                    <div key={i} className="flex flex-col gap-4 border-l-2 border-[#dbded9] dark:border-white/10 pl-6 py-2 group hover:border-primary dark:hover:border-accent transition-colors duration-300">
                                        <span className="material-symbols-outlined text-[#707b6b] dark:text-gray-400 text-4xl group-hover:text-primary dark:group-hover:text-accent transition-colors">{card.icon}</span>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#141613] dark:text-white mb-2">{card.title}</h3>
                                            <p className="text-[#707b6b] dark:text-gray-400 text-base leading-relaxed">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Engineering Focus */}
                <section className="bg-[#f2f2f0] dark:bg-background-dark py-20 px-4 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="mb-14 text-center max-w-3xl mx-auto">
                            <h2 className="text-primary dark:text-white tracking-tight text-3xl font-black leading-tight uppercase mb-4">Vườn thẳng đứng không chỉ là treo cây</h2>
                            <p className="text-[#707b6b] dark:text-gray-400 text-lg">Đó là sự kết hợp chính xác giữa kỹ thuật xây dựng, công nghệ tưới tiêu and kiến thức thực vật học.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'grid_4x4', title: 'Hệ khung chịu lực', items: ['Kết cấu thép mạ kẽm', 'Chống ăn mòn, rỉ sét', 'Tải trọng >50kg/m²'] },
                                { icon: 'water_drop', title: 'Hệ tưới tự động', items: ['Tưới nhỏ giọt Israel', 'Timer hẹn giờ tự động', 'Van cân bằng áp lực'] },
                                { icon: 'light_mode', title: 'Ánh sáng quang hợp', items: ['Đèn chuyên dụng Growlight', 'Quang phổ phù hợp cây', 'Đảm bảo cây sống trong nhà'] },
                                { icon: 'build', title: 'Khả năng bảo trì', items: ['Module tháo lắp dễ dàng', 'Hệ thống thoát nước riêng', 'Tiếp cận chăm sóc nhanh'] }
                            ].map((tech, i) => (
                                <div key={i} className="bg-white dark:bg-[#3a4035] p-8 rounded-xl shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 dark:hover:border-white/10">
                                    <div className="bg-primary/10 dark:bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center text-primary dark:text-white mb-6">
                                        <span className="material-symbols-outlined">{tech.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#141613] dark:text-white mb-3">{tech.title}</h3>
                                    <ul className="text-[#707b6b] dark:text-gray-400 text-sm space-y-2 list-disc list-inside">
                                        {tech.items.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3: KGX Solutions */}
                <section className="bg-background-light dark:bg-[#30352c] py-20 px-4 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-[1200px]">
                        <h2 className="text-primary dark:text-white tracking-tight text-3xl font-black leading-tight uppercase mb-10 text-left">Giải pháp từ KGX</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[500px]">
                            <div className="relative overflow-hidden rounded-2xl group h-[300px] lg:h-full shadow-md">
                                <img alt="Irrigation integration" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0HkG5bKQCIAJIUmxpaLTCJt2kKEHUMPk2yd3UWORJm4-6ZVSdS2by5VO-6wo3f5xUz9SbP70bfti-IPutrEHIdBJqoRpQ1VXDBP0_fXqkUSByeNej_04cho6e46Rt5GD04PiCP4T-lRgMgeyvCUi2IKo4lVgNMnvTl6mQvYyJIxCoLui_lE2NdFPKCST3DxwzHHI0yJPE8yKfS70JKWBWpq-UeZSbuBl01dRsq-jaczuNJnE4YoU6b0pxB5Yg_Wo2E9n6Am30G1w" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-2xl font-bold mb-1 uppercase">Công nghệ tích hợp</h3>
                                    <p className="text-white/80 text-sm">Hệ thống tưới âm tường thẩm mỹ & hiệu quả cao.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                                {[
                                    { icon: 'view_module', title: 'Module dễ thay thế', desc: 'Thay cây hỏng chỉ trong 30 giây mà không ảnh hưởng kết cấu.' },
                                    { icon: 'wb_sunny', title: 'Cây phù hợp ánh sáng', desc: 'Khảo sát đo lux ánh sáng để chọn loại cây bền vững nhất.' },
                                    { icon: 'design_services', title: 'Thiết kế dễ bảo trì', desc: 'Lối đi kỹ thuật and vị trí van nước được tính toán kỹ.' },
                                    { icon: 'valve', title: 'Kiểm soát nước & rễ', desc: 'Màng ngăn rễ thông minh chống thấm tường tuyệt đối.' }
                                ].map((sol, i) => (
                                    <div key={i} className="bg-[#f2f2f0] dark:bg-background-dark p-6 rounded-xl flex flex-col justify-between hover:bg-[#ebebe9] dark:hover:bg-[#32362d] transition-colors border border-transparent dark:border-white/5">
                                        <div className="text-primary dark:text-accent mb-2">
                                            <span className="material-symbols-outlined text-3xl">{sol.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#141613] dark:text-white uppercase tracking-tight">{sol.title}</h4>
                                            <p className="text-[#707b6b] dark:text-gray-400 text-sm mt-1 leading-relaxed">{sol.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Applications */}
                <section className="bg-white dark:bg-background-dark py-20 px-4 sm:px-6 lg:px-10 border-t border-[#edeeec] dark:border-white/5">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="flex justify-between items-end mb-10">
                            <h2 className="text-primary dark:text-white tracking-tight text-3xl font-black leading-tight uppercase">Ứng dụng phổ biến</h2>
                            <button className="hidden sm:inline-flex items-center text-primary dark:text-accent font-bold hover:underline">
                                Xem tất cả dự án <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { tag: 'Nhà ở', title: 'Căn hộ & Biệt thự', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD26RqiXdGjTCJE_qHSUYHzc6dvqj1F3Tgxl661H-t-2JI9K-o0O657Ehp7azcaq8ur0dfQjYhPSKw0QOGTYdFcnfW0DoaOPWjyf8TBoQdNQ6mrgykEfZWS4ekuxV9fRrb47ZHSWWmdMgO-EU8yjp_BVyJN6DCKvqZnmX4ZN4RVZodQzHMOqkOUUmL8JwNaDNsv3Er2Mw-q21pfSQ_DFWi17Kd9frHnSoh5jhZ99HgO-1Dj6iioMW_Ry5xfviRab0nneKb1c-bobu0' },
                                { tag: 'Văn phòng', title: 'Không gian làm việc', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCojrZMwOMxQKZN2ZGzEVihqSB7s5NZvfqvCV8FeAHrwuWF11AKDQj0y6ZEuKlygSJMDTTIT4vMdpFrzOCauLXnpctI-ltNbES-GodqG4byL9n1pJKDQ13UurpawGxsJxBrQ63PpTVSFnIJufvC0mDBF97_L68sWIObpVPUKMArIE77zLTxm7LiwffcziqSvfmZD-yg6OnBzjCLkjwj_A90HSUjcikav0QRa5CRv3gJcgGExz_OIHCw3yKILh275k1SpF4yWSM5ATQ' },
                                { tag: 'Dịch vụ', title: 'Nhà hàng & Cafe', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgj2MXHTrkniZCKRn7rT1Po8b2h1Z01zNMhIvI_DQFAlx5_zJtnmf4_-ZezaoHLAgOY8sZbFsFkFdyGpO40Nd5anH09D6RzjEf60vJoRk3u2cmDXLIz2oG4Brjtq8VcXAndockc4BJMjUI6nFngVfjyNU7LRrCKZZ-tDRbuECbkoHJ61ZQ1fodQaKk4OlXU25jgWhOkFINL9blzAQzfv9fP-8vaeekSuCw-S-NXZ2mo1jwwqelrv5hMNJ56bAOqBvVW-9QxQPVLBg' },
                                { tag: 'Công cộng', title: 'Dự án & Tòa nhà', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWRkKQFFHbJ20sFuk4mokJ-p9opKufmMqVWEvPtFsbqPUNd-hcc70oyB0z1iX0VcpUanLZ0s-1IIscwBAhXnHHtDZeN-cgpNUGVdG-DEHWbynnyjQ_hzDkqtf29KTeemo4hJ_Wjo2r2N1AiyAlioAVdBygB_XIvfUIKv0T2edITGvOnfxo-0iO6KNcXbLV1665zQLJgzBuieCe5FtJiKMnMbWkYlrgc2Lpksp2ddjP38gi0f5H0LUWnrwvwueH1bjFxzWE70qGx9E' }
                            ].map((app, i) => (
                                <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
                                    <img alt={app.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={app.image} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="text-accent text-xs font-bold uppercase tracking-wider mb-1 block">{app.tag}</span>
                                        <h3 className="text-white font-bold text-lg uppercase">{app.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Common Mistakes */}
                <section className="bg-neutral-50 dark:bg-[#30352c] py-20 px-4 sm:px-6 lg:px-10">
                    <div className="mx-auto max-w-[1200px]">
                        <h2 className="text-[#141613] dark:text-white tracking-tight text-3xl font-black leading-tight uppercase mb-10 text-center">Những sai lầm thường gặp</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'potted_plant', title: 'Chọn sai cây', desc: 'Sử dụng cây ngoại thất cho nội thất hoặc ngược lại, dẫn đến cây chết hàng loạt sau 2 tuần.' },
                                { icon: 'opacity', title: 'Hệ tưới kém', desc: 'Tưới không đều, chỗ úng chỗ khô, hoặc rò rỉ nước làm hỏng tường and sàn gỗ.' },
                                { icon: 'handyman', title: 'Khó bảo dưỡng', desc: 'Thiết kế khung cố định không module, không thể thay cây khi cần thiết.' },
                                { icon: 'attach_money', title: 'Chi phí phát sinh', desc: 'Giá rẻ ban đầu nhưng tốn kém chi phí thay cây liên tục do hệ thống không đạt chuẩn.' }
                            ].map((mistake, i) => (
                                <div key={i} className="border-t-4 border-accent bg-white dark:bg-background-dark p-6 shadow-sm rounded-b-lg">
                                    <div className="flex items-center gap-3 mb-4 text-accent">
                                        <span className="material-symbols-outlined">{mistake.icon}</span>
                                        <h3 className="font-bold text-[#141613] dark:text-white uppercase text-sm tracking-tight">{mistake.title}</h3>
                                    </div>
                                    <p className="text-sm text-[#707b6b] dark:text-gray-400 leading-relaxed">{mistake.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 6: CTA */}
                <section className="bg-primary text-white py-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <svg className="h-full w-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.5,18.7C51.6,29.3,41.8,38.7,31.2,46.2C20.6,53.7,9.3,59.3,-1.2,61C-11.7,62.7,-22.3,60.5,-33.4,54.2C-44.5,48,-56.1,37.6,-63.3,24.4C-70.5,11.2,-73.3,-4.9,-68.3,-19.1C-63.3,-33.3,-50.5,-45.6,-38.2,-54.1C-25.9,-62.7,-14.1,-67.4,0.9,-68.7C15.9,-69.9,34.5,-73,42.7,-62.9Z" fill="#FFFFFF" transform="translate(100 100)"></path>
                        </svg>
                    </div>
                    <div className="mx-auto max-w-[1000px] relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase">Tư vấn giải pháp vườn thẳng đứng hợp công trình</h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">Đội ngũ kỹ sư KGX sẽ khảo sát hiện trạng, đo đạc ánh sáng and đề xuất phương án tối ưu nhất cho không gian của bạn.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-accent hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-2">
                                NHẬN TƯ VẤN MIỄN PHÍ
                                <span className="material-symbols-outlined font-bold">arrow_forward</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined font-bold">call</span>
                                0868 462 462
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default VerticalGardenPage;
