import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesService, Service } from '../src/services/servicesService';
import ImageWithFallback from '../components/ImageWithFallback';

const GardenConstructionPage: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const data = await servicesService.getAllServices('thi-cong');
                setServices(data);
            } catch (error) {
                console.error('Error fetching construction services:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="bg-[#f7f8f5] text-[#161c0d] font-body antialiased pt-20">
            <main className="flex flex-col w-full max-w-[1440px] mx-auto overflow-hidden">
                {/* Hero Section */}
                <section className="relative px-4 md:px-10 py-12 md:py-20 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6 max-w-2xl">
                            <div className="flex flex-col gap-3">
                                <span className="text-[#84da0b] font-bold tracking-wider uppercase text-sm">Chuyên nghiệp & Tận tâm</span>
                                <h1 className="text-[#161c0d] text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                                    Dịch vụ thi công cảnh quan trọn gói
                                </h1>
                                <p className="text-gray-600 text-base md:text-lg font-normal leading-relaxed mt-2">
                                    Thi công đúng thiết kế - Chuẩn kỹ thuật - Bảo dưỡng chuyên nghiệp. Đội ngũ kỹ sư giàu kinh nghiệm, trang thiết bị hiện đại đảm bảo tiến độ và chất lượng cho mọi công trình.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <button className="flex items-center justify-center rounded-xl h-12 px-6 bg-[#84da0b] text-[#161c0d] text-base font-bold hover:bg-[#75c20a] transition-colors">
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
                        {[
                            { title: 'Biệt thự & Tư gia', desc: 'Kiến tạo không gian sống xanh, đẳng cấp và riêng tư cho các biệt thự, nhà vườn.', icon: 'villa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW0nQ5yJMDc4QuZ4nRdggEF5tDPgpUtm4Nh9znbRpj-ESjNs8IDXRrXmN2HDXeOa-OLwXAS3vFiv8kash0MJIR1o-_5qY04kroiB1iFkh0AjhrA8ArZ80uyhs1y5SacUGP0ChXxRGF0sbsdI9ZRfH1GkJwY_yESTFQSAK1rVPsp0nVffx2chsllArlsXViYfUSbYXgXfQy_bhu9Fr9MMq7XdEUuPrKhafd_etG2teD4rls5zFDDHEomadJ607JP1DoyvFAhypKoqo' },
                            { title: 'Resort & Khách sạn', desc: 'Cảnh quan nghỉ dưỡng sinh thái, tạo điểm nhấn thu hút du khách và nâng tầm trải nghiệm.', icon: 'pool', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX3qA82DDNK4NT3MT1ybra6n0bKKXdxjcP-Zn3OOgpQaLlDAXqQt_4SPjVNagwfB2-sAPAMha_zeF_yrdL2ZCY-E7ufZb74yQvpWtJixDm42mPBk7ajUtA1rn-TO9Uz0cR7zIZp0BZ17s0hW7L0Z0ihtg59LXM3uZhtAMCwQh85hejCIvqCFt0Phg1lWY8sFeDJZvs9kK-aIyf9K0DT_2T1ISlTYEmj_trmqH6eaDFFhnmUeMt1YYXKu1pU2jKD97FBVRoMzIkvNs' },
                            { title: 'Khu Đô thị', desc: 'Thi công công viên, cảnh quan đường phố, khu vui chơi chung cư đảm bảo tiến độ.', icon: 'apartment', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv_k4rVoMlBQFdv0qPQc9bpH1mHUg3CbIFpDIsJ2w_5rvhVH9y-QwC2bPXWdvvhNJv1akD9bgJ4NF8MQdi9Hn7yBgQyCSbhxDTE2eIoPiikNmbcByQYLDv_1k4rmw9xOgdlEDHUyoeBX8ebrKYLVl5-jarFjg0t8tZ4xn78_VrNjVYnTSEPOZNz1DdVyUM2qylAk3QbtJv2YkArWjbMRU4oKXtqv5dHdR4Uxps1JsIb8O3697ary8O_rNoV_x9X8f2QMb_25Vfu0E' },
                            { title: 'KCN & Nhà máy', desc: 'Giải pháp xanh hóa khu công nghiệp, giảm thiểu bụi và tạo môi trường làm việc tích cực.', icon: 'factory', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc7E8gFlkwOBC7Gnu5EAm-rZjvrRRu1Ac0noPowjxMz5J7i7y37xrESxtmsvHzDcxxgn_J1DnXY3Q51SZZmobfWypmrOI39xM_Z9YI9MCfP1rwC5zZPAjC5PiTiLeJtukoL8wzx4Ia7K5Tu9vocGAkahcvyNpMogmhaoPpTEJKZylBeTVOkaxHpejQ4KulOOTkHJPQNl_DTTjB2BHsH6IOn0i2qlcyjdA76bufc8ZrWBNY3y0U70Ph8gCiFkSx5FGf26HsY8RIF94' }
                        ].map((card, idx) => (
                            <div key={idx} className="flex flex-col bg-[#fcfdfb] border border-[#eef4e7] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group">
                                <div className="p-6 flex flex-col gap-4 flex-1">
                                    <div className="size-12 rounded-full bg-[#84da0b]/20 flex items-center justify-center text-[#84da0b] mb-2">
                                        <span className="material-symbols-outlined">{card.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#161c0d]">{card.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                                </div>
                                <div className="h-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${card.img}')` }}></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Construction Categories Section */}
                <section className="px-4 md:px-10 py-16 bg-[#f7f8f5]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <h2 className="text-[#161c0d] text-3xl font-bold mb-2">Hạng mục thi công chính</h2>
                            <p className="text-gray-500">Dịch vụ đa dạng đáp ứng mọi yêu cầu kỹ thuật khắt khe nhất.</p>
                        </div>
                        <Link className="text-[#84da0b] font-bold flex items-center hover:underline" to="/dich-vu">
                            Xem tất cả dịch vụ <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {loading ? (
                            <div className="col-span-full py-20 flex flex-col items-center justify-center">
                                <div className="size-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                                <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải danh mục...</p>
                            </div>
                        ) : services.length === 0 ? (
                            <div className="col-span-full py-10 text-center text-gray-400">Không tìm thấy hạng mục nào.</div>
                        ) : services.map((service, idx) => (
                            <Link key={service.slug} to={`/dich-vu/${service.slug}`} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all block group">
                                <div className="h-48 rounded-xl bg-cover bg-center mb-4 transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: `url('${service.image}')` }}></div>
                                <h3 className="text-lg font-bold text-[#161c0d] mb-2 group-hover:text-[#84da0b] transition-colors">{service.title}</h3>
                                <p className="text-sm text-gray-500 mb-3 line-clamp-3">{service.description}</p>
                                <span className="text-sm font-semibold text-[#84da0b] inline-flex items-center">Chi tiết <span className="material-symbols-outlined text-sm ml-1">chevron_right</span></span>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Scope & Image Section */}
                <section className="px-4 md:px-10 py-16 bg-white overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-[#161c0d] text-3xl font-bold mb-8">Phạm vi công việc & Quy chuẩn</h2>
                            <ul className="space-y-6">
                                {[
                                    { title: 'Chuẩn bị mặt bằng', desc: 'Dọn dẹp, san lấp, xử lý đất nền, định vị hố trồng theo thiết kế.' },
                                    { title: 'Cung cấp vật tư & Cây xanh', desc: 'Tuyển chọn cây khỏe mạnh, đúng chủng loại, kích thước và phẩm chất.' },
                                    { title: 'Thi công trồng & Lắp đặt', desc: 'Trồng cây, lắp đặt hệ thống tưới, chiếu sáng, lát đá lối đi.' },
                                    { title: 'Hoàn thiện chi tiết', desc: 'Vệ sinh công nghiệp, cắt tỉa tạo hình, phủ nền trang trí.' },
                                    { title: 'Bàn giao & Nghiệm thu', desc: 'Hướng dẫn vận hành, ký biên bản nghiệm thu khối lượng.' },
                                    { title: 'Bảo hành & Bảo dưỡng', desc: 'Cam kết bảo hành cây trồng, hỗ trợ kỹ thuật trọn đời.' }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 size-6 rounded-full bg-[#84da0b] flex items-center justify-center text-white shrink-0">
                                            <span className="material-symbols-outlined text-sm">check</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#161c0d]">{item.title}</h4>
                                            <p className="text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="aspect-square rounded-full bg-[#f7f8f5] absolute -top-10 -right-10 z-0"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img alt="Composite image of landscape construction" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBduK6ocRq45yKGE5aIdXUoqhRNSSMrG5_lsM4yrE28fuJey1WWvJCqhNY_DZtkq9fbftXCHXTvEiWM8rxrFHLHaNHdXvcx8hwOapwJ8xY2RCMAxJwaUQWzSf9DpS4fD9tbPDswdxLHTubQg0WbpHWT9hgKTdsfotHauLaYbCBRC14dwYzn2cTcFT1oGdBfgTyoGwhK5PzwY-jR3cMihSEAbPOR6PKbv41PR25AkVmqSeMC6J3gsgYCgSwuvoytvDUoyQJUo_NjZWY" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="px-4 md:px-10 py-16 bg-[#161c0d] text-white overflow-hidden">
                    <div className="text-center mb-16">
                        <span className="text-[#84da0b] font-bold tracking-widest uppercase text-xs mb-2 block">Quy trình làm việc</span>
                        <h2 className="text-3xl font-bold">6 Bước triển khai dự án</h2>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2 z-0"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                            {[
                                { n: '01', title: 'Tiếp nhận', desc: 'Ghi nhận yêu cầu, tư vấn sơ bộ' },
                                { n: '02', title: 'Khảo sát', desc: 'Đo đạc hiện trạng, lên ý tưởng' },
                                { n: '03', title: 'Báo giá', desc: 'Lập dự toán & Ký hợp đồng' },
                                { n: '04', title: 'Thi công', desc: 'Triển khai theo tiến độ cam kết' },
                                { n: '05', title: 'Bàn giao', desc: 'Nghiệm thu & Hướng dẫn' },
                                { n: '06', title: 'Bảo hành', desc: 'Chăm sóc & Duy trì cảnh quan' }
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col lg:items-center text-left lg:text-center group">
                                    <div className={`size-16 rounded-full bg-gray-800 border-2 ${idx === 0 ? 'border-[#84da0b]' : 'border-gray-600'} group-hover:bg-[#84da0b] transition-colors flex items-center justify-center text-xl font-bold mb-4 mx-0 lg:mx-auto`}>{step.n}</div>
                                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 rounded-xl overflow-hidden h-64 w-full relative">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCN-fVQfEDZZphyaVdEB3ZACfPCLhP2quR-gnsvSqOTuU6GLFJmYiAhflNpMXXJkwqCSLfmohJM2dOsfRoQm6ClsrjQuhBfpRalS7Z7eA5AdnUomgf2RWWIpua_qsoYfwh6eQICUgM2Cl96NgoGp_vGXhXG1SwlekTZKOyDXUlBGdOQKYmqs2AZdwgzYPdFSIbPGGFDKn39GATv5txh4qKMV3vQnc79SjrUQ-FONbwlQVb9p1jvc4h6KR9Bq2w--4K5E9GWKtZj8wU')" }}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-xl md:text-2xl font-medium max-w-3xl text-center px-4">"Chúng tôi đặt chất lượng và sự hài lòng của khách hàng làm thước đo giá trị cốt lõi."</p>
                        </div>
                    </div>
                </section>

                {/* Commitments Section */}
                <section className="px-4 md:px-10 py-16 bg-[#fafcf8]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="h-full min-h-[400px] rounded-2xl bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFd_p9Tjqmsqq3xsEW5V1uRNkVvozsTrZols8LUPDatSubpVFUIhMlxjXGwmdMdrVJLoC5fnqKj9ddmh1Y-5oICGtm9qZDHDnSKQUMdbJ0u2wBXLaSIJR84J7d6AIvFha8McLFRV7T9HzIyYPcs_CinZrliJy0uzWyfv273jvDArh49IDrW2TJ9K-zivHbuahY_vPMOiBwhCFg9evZe-RlRBmAXYMOPuT3oepT8MttBmamtpAaEHkibBlENGe-_38qeJvy-5aHtE4')" }}></div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-[#161c0d] text-3xl font-bold mb-8">Cam kết chất lượng</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Thi công đúng thiết kế', desc: 'Tuân thủ 100% bản vẽ kỹ thuật và chủng loại vật tư đã thống nhất.' },
                                    { title: 'Đúng tiến độ', desc: 'Quy trình quản lý chặt chẽ, đảm bảo bàn giao đúng thời hạn.' },
                                    { title: 'Minh bạch chi phí', desc: 'Báo giá chi tiết, không phát sinh chi phí ngoài hợp đồng.' },
                                    { title: 'Bảo hành dài hạn', desc: 'Chính sách bảo hành cây xanh và công trình xây dựng rõ ràng.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#84da0b]">
                                        <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="px-4 md:px-10 py-16 bg-white">
                    <div className="flex justify-between items-end mb-10">
                        <h2 className="text-[#161c0d] text-3xl font-bold">Dự án tiêu biểu</h2>
                        <Link className="text-sm font-bold text-[#161c0d] hover:text-[#84da0b] transition-colors" to="/du-an">Xem tất cả dự án →</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Vinhomes Riverside Villa', sub: 'Biệt thự - Hà Nội', scale: '500m2', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXzGPvZmX0VAS-GGv2deDFpKBk04I3y4neE8vGWCa_J_GudrF8KtarBjpTCYailRd0CUvxySRfePJmJCZXU5EPmNGGLKhz1w_vGYu63xB844E8wqeTolks2Z9bkSA9WDb-5vOzBgQS51SuaY_oUU47eso1Vrca1qUiY689nb0cWOgbWP7JeESB2DNppCqSazxfp0Sro1bMXKZXwbGzRgbRVL0F6-IbCy_-u-2NfkfYbJBPbQaB9IU1hFBbWsRjiFcNJN7X2nz-Uds' },
                            { title: 'Ha Long Bay Resort', sub: 'Resort - Quảng Ninh', scale: '2.5ha', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0PrbyfNFFEJgXP3qtafiSmNOeISC6z_D24q77e48KDo75ztNd1Qt4VagwnNTVORdVeQmc7oMM-qQmShD6g-T0qU2e7hKWJQ9cK_c_Q_re0Ewk7kLUNt0aUieIXtHyTW5F5hVBiv3CZZ6QK8HZ82qlFAQ3lNvHwA7WtorSm7n9iBgI9H77aiFI7OCpSPJ0c01id3xpLnffsJCgC-3jbZcEiRXgJ_timRjeF3UbH4eJNxk52WvU6dkIPhCz2nI-zrL3wFA1vqe4iPU' },
                            { title: 'Samsung Green Factory', sub: 'KCN - Bắc Ninh', scale: '10ha', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDjtVvpA-xUuI7K1bFnUJDD0lWthYgu_MmcLhVMPYiYlFFumUkAAJLMjcktf8e83bNXNMD4SmJpwyQZBG84KQFHprccywZQKdKotDjZeehGPP80HuegV8MYt0hQr1iomHIb1Z008e3J_A4lsCdzHrWP1PeX-qQOhO8ZxysjS-EK__yH2M5JTgD5GOmHPBiDtMFzHfPvxxCpc8MIEBIpP8MO15r4EJLwWR_domhK2AoosdL70jEcyGgH9GVVD0274es6fB8J1ytUIw' },
                            { title: 'Dragon Bridge Penthouse', sub: 'Penthouse - Đà Nẵng', scale: '120m2', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCTWQ2fGM89z6TkpuYpaA3oodlMRTkrMAFOOWEF-lwXR8E80U6P0mIfNJ-Y_hLkQxnTQA7fOnALU6odDOmMiq4dzJbzO1fNAS48gHviGVgXjtMJeUWcRzce2RqTpgZXod_zWGkosVGlwZeVXkqb5OqyFHhyBeSpwi1awoq_hJ9iAuvXEgpO11Dc1ayg8PKfOOQotW2r5QZU0qSnZEcynxesyHKXX2iDfx5Iz5YVvNowfbFEdAIYYavbV59zxo83eXsSsKuy2ykGJk' },
                            { title: 'Techcombank Head Office', sub: 'Văn phòng - TP.HCM', scale: '800m2', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZd0Jq8k4lFFkeTqcjU-4yGbGYXjj8Vu8qkcywIm0nH0DWYb_3QCM8gclajpaLXevvUyNc-t9CTvRJr2i7YnG3_hWmssP1IjXw0l9ZjXcOwYNQSxoAAXc5X2-JeyPuSq1fQj7XuFJNRk2cnj-RQzj-7auBQNQ_xx8YT6z2aP7OamzoI0i2gsVs7p8ErmhHJrEMVPeMV6ZTB7SZys6oU9kID3H89zbwPafQXzOSGVDUTwIlg_M_RJoXoq8yt9TmDL_TvUzQWf7m7ac' },
                            { title: 'Serena Eco Farm', sub: 'Farmstay - Hòa Bình', scale: '5ha', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6A2H9SqMLV-IeDyvbIqMEYkQgsZQLS_uogv4zQ_gQA_dNjN3u8apqVHEiCvk17Eolv-kD5LkLAtOGyYgHfdG4uyvOPiVDIPbUj7EeBkzF_2VqtfGxYo7w6ywWKiwHctrcXrGgLytOHeYdp-X6bj8vw8LM2aw4eeUmnmrTi6Ffy8vPexhDPTTmsBNWmKeAnGyRNmjt6i8Lt-R650IxQgd0VHpBcid7Ktw8SGzKZi3_L1JM03c33eqQ-WvlPCL0qU6hsOMLu0ZTAK4' }
                        ].map((project, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
                                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${project.img}')` }}></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs font-bold text-[#84da0b] uppercase tracking-wider">{project.sub}</span>
                                    <h3 className="text-xl font-bold text-[#161c0d] group-hover:text-[#84da0b] transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-500">Quy mô: {project.scale}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Lead Form & Contact */}
                <section className="px-4 md:px-10 py-16 bg-[#eef4e7]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
                        <div className="lg:col-span-7">
                            <h2 className="text-[#161c0d] text-3xl font-bold mb-2">Đăng ký tư vấn miễn phí</h2>
                            <p className="text-gray-500 mb-8">Để lại thông tin, đội ngũ kỹ sư KGX sẽ liên hệ khảo sát và báo giá trong vòng 24h.</p>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                                    <input className="w-full rounded-xl border border-gray-200 bg-[#fafcf8] h-12 px-4 focus:ring-2 focus:ring-[#84da0b] focus:border-transparent outline-none transition-all" placeholder="Nguyễn Văn A" type="text" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                                    <input className="w-full rounded-xl border border-gray-200 bg-[#fafcf8] h-12 px-4 focus:ring-2 focus:ring-[#84da0b] focus:border-transparent outline-none transition-all" placeholder="09xxxxxxx" type="tel" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Loại công trình</label>
                                    <select className="w-full rounded-xl border border-gray-200 bg-[#fafcf8] h-12 px-4 focus:ring-2 focus:ring-[#84da0b] focus:border-transparent outline-none transition-all text-gray-600">
                                        <option>Biệt thự sân vườn</option>
                                        <option>Resort / Khách sạn</option>
                                        <option>Nhà máy / KCN</option>
                                        <option>Khác</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Hạng mục quan tâm</label>
                                    <select className="w-full rounded-xl border border-gray-200 bg-[#fafcf8] h-12 px-4 focus:ring-2 focus:ring-[#84da0b] focus:border-transparent outline-none transition-all text-gray-600">
                                        <option>Thi công mới</option>
                                        <option>Cải tạo</option>
                                        <option>Bảo dưỡng</option>
                                        <option>Cung cấp cây</option>
                                    </select>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Lời nhắn</label>
                                    <textarea className="w-full rounded-xl border border-gray-200 bg-[#fafcf8] p-4 h-32 focus:ring-2 focus:ring-[#84da0b] focus:border-transparent outline-none transition-all resize-none" placeholder="Mô tả sơ bộ về yêu cầu của bạn..."></textarea>
                                </div>
                                <div className="col-span-1 md:col-span-2">
                                    <button className="w-full rounded-xl bg-[#84da0b] hover:bg-[#75c20a] text-[#161c0d] font-bold h-14 transition-colors text-lg shadow-md" type="button">Gửi yêu cầu ngay</button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-center bg-[#161c0d] rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#84da0b] blur-[60px] opacity-20 rounded-full"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">Liên hệ trực tiếp</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-gray-800 flex items-center justify-center text-[#84da0b] shrink-0">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Văn phòng Thái Nguyên</h4>
                                            <p className="text-gray-400 text-sm">Số 123, Đường Lương Ngọc Quyến, TP. Thái Nguyên, Tỉnh Thái Nguyên</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-gray-800 flex items-center justify-center text-[#84da0b] shrink-0">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Hotline 24/7</h4>
                                            <p className="text-2xl font-bold text-[#84da0b]">0868 462 462</p>
                                            <p className="text-gray-400 text-sm mt-1">Hỗ trợ kỹ thuật: 0988 888 888</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="size-10 rounded-full bg-gray-800 flex items-center justify-center text-[#84da0b] shrink-0">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Email</h4>
                                            <p className="text-gray-400 text-sm">contact@kgx.vn</p>
                                            <p className="text-gray-400 text-sm">duan@kgx.vn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default GardenConstructionPage;
