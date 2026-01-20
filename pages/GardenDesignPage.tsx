import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../services';
import ImageWithFallback from '../components/ImageWithFallback';

const GardenDesignPage: React.FC = () => {
    const designServices = Object.values(SERVICES_DATA).filter(s => s.type === 'design');

    return (
        <div className="bg-[#fafcf8] text-[#1b2210] font-body overflow-x-hidden antialiased pt-20">
            <main className="flex flex-col w-full">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-12 lg:py-20">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            {/* Text Content */}
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f97316]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f97316]">
                                    <span className="size-2 rounded-full bg-[#f97316]"></span>
                                    Chuyên nghiệp & Tận tâm
                                </div>
                                <h1 className="text-4xl font-black leading-[1.15] tracking-tight text-[#3a4d2e] sm:text-5xl lg:text-6xl">
                                    Dịch vụ thiết kế <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84da0b] to-green-600">cảnh quan xanh</span>
                                </h1>
                                <p className="text-lg leading-relaxed text-gray-600 max-w-lg">
                                    Giải pháp thiết kế bài bản, nghiên cứu kỹ lưỡng không gian, địa hình và tối ưu ngân sách cho khách hàng. Chúng tôi kiến tạo không gian sống hòa hợp với thiên nhiên.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#3a4d2e] px-8 text-base font-bold text-white shadow-xl shadow-[#3a4d2e]/20 transition-transform hover:-translate-y-1 hover:bg-[#2f3d25]">
                                        Tư vấn ngay
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-8 text-base font-bold text-[#3a4d2e] transition-colors hover:border-[#84da0b] hover:text-[#84da0b] hover:bg-green-50">
                                        <span className="material-symbols-outlined text-xl">folder_open</span>
                                        Xem hồ sơ năng lực
                                    </button>
                                </div>
                            </div>
                            {/* Image Content */}
                            <div className="relative group">
                                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#84da0b]/20 to-[#f97316]/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border-4 border-white shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                                    <img alt="Detailed technical masterplan landscape rendering with green spaces" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjA0XcveRV1S5rDUktH6EydeH9ww_UWc3Fm2V3YJZ8c9PfuUYQ_ciMpCg9sa4XhS9OJFtKGeUOnqJETqKHEnxBSsD0HDwAZxXUleigTE1OWrMGGEd45xFxorh6aSdq48bpAYYUXudqct7bbcBphg_8vzQ-O0RlVL55Jy2nzN4D4o1gxZ91R5NV3zOKZP6JZ33yR1dUBuuf1QvM0zftphNUF00ReUfppMVtxEiIrTJTT9xH5P9EUfHzNBdVL6Qa0g3tFagXKcfTCDs" />
                                    <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 rounded-lg bg-white/90 p-3 backdrop-blur-md">
                                        <span className="material-symbols-outlined text-[#f97316]">architecture</span>
                                        <div>
                                            <p className="text-xs font-bold text-gray-500 uppercase">Quy hoạch</p>
                                            <p className="text-sm font-bold text-[#3a4d2e]">Masterplan 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audience Section */}
                <section className="bg-[#f3f6f1] py-16 lg:py-24">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="mb-12 flex flex-col items-center text-center">
                            <h2 className="text-3xl font-bold text-[#3a4d2e] sm:text-4xl">Đối tượng khách hàng</h2>
                            <div className="mt-2 h-1 w-20 rounded-full bg-[#84da0b]"></div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: 'Biệt thự', desc: 'Thiết kế cảnh quan sân vườn đẳng cấp cho biệt thự tư nhân, villa nghỉ dưỡng.', icon: 'villa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDySjJdMQfCOZi5NIv5GAEkVMWw81ADBNfXptPXg7Wm_RWO2TznoRhp3QbiI52ZpoGP53Cnp6XT2_ylxe2CLfuCRfBoNYohG0QaX5fwhsQorcdPDmUJl8VaP5EXTEfNxkA3J--H0TPa8h-iknuNxl2PTVajgY-rn_Z1GQ1f9JPtWT-PVzhdG7JJjahCoR62YaIhing9Wmt661YxovMiA2XTlrs4KYnwj-e8JN8An_o3RbfftrZ3WKN9_YaKZUTQ3vr7q7Xbxj0Q2Js' },
                                { title: 'Resort', desc: 'Quy hoạch tổng thể cảnh quan khu nghỉ dưỡng, khách sạn cao cấp, homestay.', icon: 'deck', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Y2PlDjrwWd1EvO7QPhoH2Iu8m7HJWdmSfPUZLVi7E3NG58XHtliyjPV7ofetOtbZe92VItZtgHPTUmP5w5CKvEvcumwvkaA41KCgjmUEe1HKNtJ_Vi1V_7miophN4gInIgcGQnGu05LAPaZOmcHBCJ923cQab3r-qipQLkAsAOhuFO6IuSEPXf1ycviw_iRoT8PW9211rBWTZ1fnli5hev9VvRNyrFSZ0Y6qBojeoAuKa9EL7BSXpXT5IQccFpWSrY3L7HxeoMY' },
                                { title: 'Đô thị', desc: 'Cảnh quan công viên, khu dân cư, quảng trường và các công trình công cộng.', icon: 'apartment', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnPUdOFyxqKBq4A9GbhydvLttilfcuMxiqHtY-zK20QQKjhFmbwaN3rBHAUTT8bZsB1CiR-lIl5Q_IJ393LnFIG-vgcPBO-JpWqr-9sj9nWQC-yyeqTAbxSVbo8Sm9ms7js7BdjRFIHc00ngwvYHcoF_gj40AiJJjXWeGBeU6qnV9PHpQhB8LWEZVhfg-GL-myGL4avT2FmBPe9pSQ5og9ue8Fz7TlHBZuAhYcdlzM3QZ1_DeCu6Q5_pXq38LiPBJ-c5kRJmvMgZ0' },
                                { title: 'Doanh nghiệp', desc: 'Cảnh quan nhà máy, khu công nghiệp, văn phòng xanh tạo môi trường làm việc.', icon: 'domain', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr4aGFXp0sGjU3VW10P6xvWWby05jl8mH_ZG6L1mfPEF6xBUpUNZDGI5uestREyu5L5fT00NFBAjbW5xZqKt-IqKIjLghOobi6LDVQLRGd5eA10i1vuHNM6SuQx_pyv_V1As-ZMrfRvnGd1cZGdSaanVJTeu3WlNsPaa-FPs0sFey5N3H2n1n9fy21C27DXFkulnJ_JZvJgLtaB_92SJa_eQevUT05XJ5ijjTxXzkT3zWgRCbDDTvLOnEbCOW6ykQw3kz0HWFKCaA' }
                            ].map((card, idx) => (
                                <div key={idx} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                                    <div>
                                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-green-50 text-[#3a4d2e] group-hover:bg-[#3a4d2e] group-hover:text-[#84da0b] transition-colors">
                                            <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-[#3a4d2e]">{card.title}</h3>
                                        <p className="text-sm text-gray-500">{card.desc}</p>
                                    </div>
                                    <div className="mt-6 aspect-[2/1] w-full overflow-hidden rounded-lg bg-gray-100">
                                        <img className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={card.title} src={card.img} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="py-16 lg:py-24">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-[#3a4d2e] sm:text-4xl">Danh mục dịch vụ</h2>
                                <p className="mt-2 text-gray-600">Khám phá các giải pháp thiết kế chuyên sâu của KGX Landscape</p>
                            </div>
                            <Link className="group flex items-center gap-1 font-bold text-[#84da0b] hover:text-[#6cb609]" to="/dich-vu">
                                Xem tất cả dịch vụ
                                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {designServices.map((service, idx) => (
                                <Link key={idx} to={`/dich-vu/thiet-ke/${service.slug}`} className="group relative h-[380px] overflow-hidden rounded-2xl bg-gray-900 cursor-pointer">
                                    <ImageWithFallback className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110" alt={service.metaTitle} src={service.hero.image} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{service.hero.title}</h3>
                                        <p className="text-gray-300 text-sm line-clamp-3 mb-4">{service.hero.description}</p>
                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-[#84da0b]">
                                            Xem chi tiết <span className="material-symbols-outlined text-base">arrow_forward</span>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Scope of Work Section */}
                <section className="bg-[#3a4d2e] text-white py-16 lg:py-24 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#84da0b]/10 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-[#f97316]/10 blur-3xl"></div>
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 relative z-10">
                        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-3xl font-bold mb-8">Phạm vi công việc</h2>
                                <div className="grid gap-4">
                                    {[
                                        { n: 1, title: 'Khảo sát hiện trạng', desc: 'Đo đạc, đánh giá thổ nhưỡng, khí hậu và hiện trạng công trình.' },
                                        { n: 2, title: 'Phân tích nhu cầu & Ngân sách', desc: 'Tư vấn giải pháp phù hợp nhất với mong muốn và tài chính.' },
                                        { n: 3, title: 'Concept 2D & Ý tưởng', desc: 'Lên phương án mặt bằng, định hướng phong cách chủ đạo.' },
                                        { n: 4, title: '3D Rendering', desc: 'Phối cảnh 3D trực quan, sống động từng góc nhìn.' },
                                        { n: 5, title: 'Hồ sơ kỹ thuật thi công', desc: 'Bản vẽ chi tiết điện nước, kết cấu, cây xanh.' },
                                        { n: 6, title: 'Dự toán chi phí', desc: 'Bảng khối lượng và dự toán thi công chi tiết, minh bạch.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#84da0b] text-[#3a4d2e] font-bold">{item.n}</div>
                                            <div>
                                                <h4 className="font-bold text-lg">{item.title}</h4>
                                                <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative">
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl">
                                    <img className="h-full w-full object-cover" alt="Professional architect drawing blueprints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG7iDuS7h9BU_8uz5NU0G61C7hkgv_yYeG9STpgDAVWOmDCH3fvrD_k42LwhyaKisrklnh0QbOF8xgoaQAYmKxxuyGleAmssIrwdpcKlvYVpU9-FXOb33GmmFHkYnapx5PE62yCBVG1JOQnRAcWvuIiopd5Pjj2jlC8-j1aR1nJuNqE8N8MZIdGiNueHqBkDZVDnZIrYZ2ACFGd0hFIm_74cExCfF7Vr3VhXEsWJAD09wsiuKOvLiDewXIS1-OJPjE0Hno2KS7GDw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a4d2e]/80 to-transparent"></div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-[240px] hidden md:block">
                                    <p className="text-[#3a4d2e] font-bold text-lg">"Chính xác từng chi tiết"</p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                                            <img className="h-full w-full object-cover" alt="Lead architect" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaI0kHim63Y43_nJsCd8wva9pXPf3cDndxiTe9DiUqjdndHLwWVh-k-D122rCwumAHAsaUYGFTXYx62BogQoFhQl0hhduZrfxz8XkxaD3GzzVrSKMVDkQp_LVpyYyQu1RHM21oW4gNKrESjhqDZVOeNLNbWWYk-U00mRPRevw8KTC_pXrVor3NDyqb9h6NAoJIJWZsueRlIfj2ehFpwAolGqeBbBjv6tX-OPILNsR_VShryxIwXys5zTy3M5Pu01EEAJKEJtqEHUg" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#3a4d2e]">KTS. Nguyễn Văn A</p>
                                            <p className="text-[10px] text-gray-500">Giám đốc thiết kế</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-16 lg:py-24 bg-[#fafcf8]">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="mb-16 text-center">
                            <h2 className="text-3xl font-bold text-[#3a4d2e] sm:text-4xl">Quy trình làm việc</h2>
                            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Quy trình 5 bước chuyên nghiệp, minh bạch giúp khách hàng dễ dàng theo dõi tiến độ dự án.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-gray-200 lg:block"></div>
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
                                {[
                                    { icon: 'chat', title: 'Tiếp nhận', desc: 'Thông tin & yêu cầu' },
                                    { icon: 'explore', title: 'Khảo sát', desc: 'Đo đạc thực tế' },
                                    { icon: 'architecture', title: 'Phương án', desc: 'Concept & 3D' },
                                    { icon: 'edit_note', title: 'Chỉnh sửa', desc: 'Hoàn thiện hồ sơ' },
                                    { icon: 'verified', title: 'Bàn giao', desc: 'Hồ sơ kỹ thuật' }
                                ].map((step, idx) => (
                                    <div key={idx} className="group flex flex-col items-center text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white border-4 border-gray-100 text-[#3a4d2e] shadow-lg group-hover:border-[#84da0b] group-hover:bg-[#84da0b] group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-[#3a4d2e]">{step.title}</h3>
                                        <p className="text-sm text-gray-500">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-16 rounded-2xl bg-[#eef4e7] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8">
                            <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-md">
                                <img className="h-full w-full object-cover" alt="Meeting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVV-jn5QF9y2beTKP9RRsyvs1YGkQtIpilWoQxcPYsgxPcdfogjaGBdtQLOWdn8wK8UI0dUjJ-LOKkF49nshkVph7Jpe0HiE3_gPB01k8YqSK3Cp9MrHitTpEEhTXZCMHzx_7St1bjQUcz0844hllPQWI8d8enL09ReLne-SeczVrtyAS4MIXxbeu3TIXuSucCmtGlW6kzsd-Tu6xNoHqI1lE9HCQwkwQyi7hrHfCPbti-pGvZSv3ezly5v065xMI3cJEA9DqJFOo" />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-2xl font-bold text-[#3a4d2e] mb-4">Cam kết chất lượng</h3>
                                <p className="text-gray-700 mb-6">Đội ngũ KGX Landscape luôn làm việc với tinh thần trách nhiệm cao nhất. Chúng tôi cam kết tiến độ bàn giao và chất lượng hồ sơ thiết kế đạt chuẩn quốc tế.</p>
                                <ul className="space-y-3">
                                    {[
                                        'Tư vấn nhiệt tình 24/7',
                                        'Minh bạch trong mọi khâu',
                                        'Hỗ trợ giám sát tác giả'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-[#84da0b]">check_circle</span>
                                            <span className="font-medium text-[#3a4d2e]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                <section className="py-16 lg:py-24">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="mb-12 text-center">
                            <span className="font-bold text-[#f97316] uppercase tracking-wider text-sm">Dự án tiêu biểu</span>
                            <h2 className="mt-2 text-3xl font-bold text-[#3a4d2e] sm:text-4xl">Các dự án đã thực hiện</h2>
                        </div>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: 'Ecopark Villa Garden', cat: 'Biệt thự', desc: 'Thiết kế cảnh quan sân vườn biệt thự đảo phong cách nhiệt đới.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm8EYglRdsxXCe9D141QeFpykEGlSzyGDWf85MbJrl0GDNbaiJV-BcSzM_h6yINRBEsMLhzRks0u2zHM-9v9JdjOxmq_JITiAriK_adcU0hjMaN9SP-d3EPROZk7mQN0jy4Qc98Yxbbb7-sxXQlOimKyNtT0-tUzIDvzsOekmYpbNtPdfZEdfPATK-72UE3si7t5207lypn4LH7oo4nTvqR87B1JEsq3KgEALlNKXa2FRYSOzDho5_j7fBx0v6ytCTE2VtIRw7r0Y' },
                                { title: 'Flamingo Dai Lai Resort', cat: 'Resort', desc: 'Quy hoạch cảnh quan khu nghỉ dưỡng cao cấp ven hồ.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVssFCSrOuPDJdcKB9ZSVghsetR97qJIGEgYwQszIfpvVlVwPYOl9C2xDkNVYDj0JPubbUAZoYLxVf3F5ubjP2CVjBS9H471q9i1a8ttTJKvSop9IB7oyXB9NL1OoPcQCpb5FhgGpIk4ih8ka93Gjye6ddUdAkQJmAOKJdZHNvVYfYo90oPdQOuYQB3t4mLWLNahwK0SZ7_LIa9sr1t0Hb_v4I2gPl-ais4nlfWRzjeS_Bm7UygQHZ_xQ847crXZJCGe0rS8sZ2T8' },
                                { title: 'Skyline Penthouse', cat: 'Rooftop', desc: 'Vườn thượng uyển trên cao với hồ cá Koi và chòi nghỉ.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7rNt40YI6DkiVq5QfCL4jzDuLO9z2hOpjkwn0NVlVo65yd4eT9tn9AcFZKCYuHCcjASgpNP9EaQBTqVH7GH1ZSGGbwsOeCEQbRQUaIdkt126-fOsYeCTSUqJToSjo6tcY46F6gSjvbrytw7Ed9gfP1mvwMpU8o9hC6hkT4-p-dNESb-vYhxwAz-N3DkjIQcCOvNME5gVyZsMAElJKZ_xDmJrOE2C-QTJWj2RAWwI2JpmzOtNy0rH_4cFMaPKMK9stryJBKGBHghY' },
                                { title: 'VSIP Industrial Park', cat: 'Khu công nghiệp', desc: 'Thiết kế cảnh quan xanh cho khu công nghiệp hiện đại.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7JJUxGR3xa5CrBgjiCEus_uWE4437Ll6-w1-6x6X66TeH4dM09y-rTlveKHFCjeZGS4SOgSbp8V4xWvoFiT1_lQtSh-tmR6mJ0XEeFY8F4ZVUbfzCXMafXzvfP8_P5OGfDqya5Nre_e8CHMtxN2zgP2Jw7OGO2MDl6Ea0LEbqkjO4Q3yz1Z8xgRWn0KKgcps_082EqBa8G4kqbuQcN6w1bh5PHjl1gY43yiHSTOCoBRiMY5CuogovGchIHgW6R_nMEg_ZcTR3l3s' },
                                { title: 'Ba Vi Farmstay', cat: 'Farmstay', desc: 'Cảnh quan nông trại kết hợp nghỉ dưỡng sinh thái.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj29NVl8SNQc1EfZ6XvW-262puYhfudmi1s8cwOL8T9ba9RSeY3B319JAs9V_EUgvUfNM1dL7fJCFt9BjH2W3DZMlqarghvScLuMzg_j7SRHFQ5wRJXEHkYmnCX0bTOlkflQqhO-VfHDVCSZOOm33n-BJzJ_NFV2gZaWSKZ58A9s6fnAXQa-Vpnz4Ic6s2cMHVGkmM907Uy-NymIbVoMy-oP1WgHobOSeNRjp9FT1UqF2K1JSiwZxgNWMj8e3kgLWtDkZValAG4Qo' },
                                { title: 'Green Wall Office', cat: 'Vườn tường', desc: 'Thi công tường cây xanh cho văn phòng tập đoàn công nghệ.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJdQa4uknig2WiPVaHxGZI7IS8G7JMTabiVlT9TjULq6PfRSvWCm0BPDGNphMhP-OfCMHE1bqN2CGrqwzd2vi5NQfioJo6DLY45fHHULHcvYfyBy4TDgINqkHmwbo6ZSN3GySmKTuN4mZjsjf5z1bhKqIoQXOcvo0jSVT8_4trih1AVi5dfKid0JkwNZPVBmIujj-Hqj8BSg5bLZ-sJrN-quN74tUMS9o_OshObJWYlRVevjlL9wrOQMHvW9j6JzVZLYOpMOyU4d8' }
                            ].map((project, idx) => (
                                <div key={idx} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-xl">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt={project.title} src={project.img} />
                                        <div className="absolute top-4 left-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-[#3a4d2e] backdrop-blur-sm">{project.cat}</div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="text-xl font-bold text-[#3a4d2e] group-hover:text-[#84da0b] transition-colors">{project.title}</h3>
                                        <p className="mt-2 text-sm text-gray-500 mb-4 flex-1">{project.desc}</p>
                                        <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#84da0b]" to="/du-an">
                                            Xem chi tiết <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <Link to="/du-an">
                                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#3a4d2e] bg-transparent px-8 text-base font-bold text-[#3a4d2e] transition-colors hover:bg-[#3a4d2e] hover:text-white">
                                    Xem tất cả dự án
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="bg-[#3a4d2e]/5 py-16 lg:py-24">
                    <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
                        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                            <div className="grid lg:grid-cols-5">
                                {/* Form */}
                                <div className="p-8 lg:col-span-3 lg:p-12">
                                    <h2 className="mb-2 text-3xl font-bold text-[#3a4d2e]">Đăng ký tư vấn miễn phí</h2>
                                    <p className="mb-8 text-gray-500">Để lại thông tin, kiến trúc sư của chúng tôi sẽ liên hệ lại trong vòng 24h.</p>
                                    <form className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1 block text-sm font-bold text-[#3a4d2e]">Họ và tên</label>
                                                <input className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-[#84da0b] focus:ring-[#84da0b]" placeholder="Nhập họ tên của bạn" type="text" />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-bold text-[#3a4d2e]">Số điện thoại</label>
                                                <input className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-[#84da0b] focus:ring-[#84da0b]" placeholder="09xx xxx xxx" type="tel" />
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1 block text-sm font-bold text-[#3a4d2e]">Loại hình</label>
                                                <select className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-[#84da0b] focus:ring-[#84da0b]">
                                                    <option>Biệt thự sân vườn</option>
                                                    <option>Resort / Khách sạn</option>
                                                    <option>Rooftop / Ban công</option>
                                                    <option>Dự án công nghiệp</option>
                                                    <option>Khác</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-bold text-[#3a4d2e]">Khu vực</label>
                                                <select className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-[#84da0b] focus:ring-[#84da0b]">
                                                    <option>Miền Bắc</option>
                                                    <option>Miền Trung</option>
                                                    <option>Miền Nam</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="mb-1 block text-sm font-bold text-[#3a4d2e]">Nội dung yêu cầu</label>
                                            <textarea className="w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-sm focus:border-[#84da0b] focus:ring-[#84da0b]" placeholder="Mô tả sơ bộ về nhu cầu thiết kế, diện tích..." rows={4}></textarea>
                                        </div>
                                        <button className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#84da0b] py-4 text-base font-bold text-white shadow-lg shadow-[#84da0b]/30 transition-all hover:bg-[#6cb609] hover:shadow-[#84da0b]/50" type="button">
                                            Gửi yêu cầu tư vấn
                                        </button>
                                    </form>
                                </div>
                                {/* Contact Info */}
                                <div className="bg-[#3a4d2e] p-8 text-white lg:col-span-2 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#3a4d2e] opacity-10"></div>
                                    <div className="relative z-10">
                                        <h3 className="mb-6 text-2xl font-bold">Thông tin liên hệ</h3>
                                        <div className="mb-8 space-y-6">
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                                    <span className="material-symbols-outlined text-[#84da0b]">location_on</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold">Trụ sở chính</p>
                                                    <p className="text-sm text-gray-300 leading-relaxed mt-1">Số 123, Đường Hoàng Văn Thụ, TP. Thái Nguyên, Tỉnh Thái Nguyên</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                                    <span className="material-symbols-outlined text-[#84da0b]">call</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold">Hotline 24/7</p>
                                                    <p className="text-xl font-black text-[#84da0b] mt-1">0868 462 462</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                                                    <span className="material-symbols-outlined text-[#84da0b]">mail</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold">Email</p>
                                                    <p className="text-sm text-gray-300 mt-1">info@kgxlandscape.vn</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-auto">
                                            <p className="mb-3 text-sm font-bold">Kết nối với chúng tôi</p>
                                            <div className="flex gap-3">
                                                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#84da0b] hover:text-white" href="#">
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                                                </a>
                                                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#84da0b] hover:text-white" href="#">
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg>
                                                </a>
                                                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#84da0b] hover:text-white" href="#">
                                                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>
                                                </a>
                                            </div>
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

export default GardenDesignPage;
