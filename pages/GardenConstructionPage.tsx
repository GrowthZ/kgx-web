import React from 'react';
import { Link } from 'react-router-dom';

const GardenConstructionPage: React.FC = () => {
    return (
        <div className="bg-white text-[#2F3E28] font-display antialiased overflow-x-hidden pt-20 lg:pt-24">
            <main className="flex flex-col w-full">
                {/* Hero Section */}
                <section className="relative h-[65vh] lg:h-[75vh] flex items-center overflow-hidden">
                    <img alt="Thi công cảnh quan sân vườn chuyên nghiệp" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLDSsV4Cg0BNHCfEMfC4fAFFDBWhBZeEpbGpgiP3PLofhzxKLbjIwu-JrCqYqL-P8w9NLQvzw9gwewiU6-FDEER8CeBkKs04qXM16cDArYsmBuxIHoqOk-hRSRlWBs4_djpDh0B6zclzkRNXrI2RYSSowTW5NbxJDyw5gmM7nisnALnKb9zlcq7LeWzAQPThQPbeUIE_AFZegoEpSbw8jSJ5COMzbmUbEP_8_a5YNhyCIodB74h2ee6-G77lh8m9RNm7ZzYMnK3ug" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F3E28]/95 via-[#2F3E28]/40 to-transparent"></div>
                    <div className="container mx-auto px-4 md:px-10 relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84da0b] text-white text-xs font-bold uppercase tracking-widest mb-6">
                                <span className="material-symbols-outlined text-sm">construction</span>
                                Thi công trọn gói
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                                Thi công <span className="text-[#84da0b]">Cảnh quan</span> <br />
                                & Sân vườn Chuyên nghiệp
                            </h1>
                            <p className="text-lg md:text-xl text-white/80 font-medium mb-10 max-w-2xl">
                                Đơn vị thực thi hàng đầu với cam kết "Giống 99% thiết kế". Chúng tôi sở hữu đội ngũ nghệ nhân lành nghề, vườn ươm quy mô và quy trình giám sát chặt chẽ.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="h-14 px-10 rounded-2xl bg-[#84da0b] hover:bg-[#6cb309] text-white font-black transition-all shadow-xl shadow-[#84da0b]/40 flex items-center gap-3 text-lg">
                                    Nhận báo giá dự án
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <button className="h-14 px-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black border-2 border-white/30 backdrop-blur-xl transition-all text-lg">
                                    Công trình thực tế
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Target Audience (Specific to Construction) */}
                <section className="py-16 bg-white border-b border-[#dde8ce]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: 'Cam kết giống thiết kế', val: '99%', icon: 'brush' },
                                { label: 'Bảo hành cây xanh', val: '90 Ngày', icon: 'energy_savings_leaf' },
                                { label: 'Năng lực thực thi', val: '50+ Team', icon: 'groups' },
                                { label: 'Dự án đã hoàn thành', val: '500+', icon: 'check_circle' }
                            ].map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center">
                                    <div className="size-12 rounded-xl bg-[#f2f7ed] flex items-center justify-center text-[#84da0b] mb-4">
                                        <span className="material-symbols-outlined">{stat.icon}</span>
                                    </div>
                                    <span className="text-3xl font-black text-[#2F3E28]">{stat.val}</span>
                                    <span className="text-sm font-bold text-[#2F3E28]/50 uppercase mt-1 tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Main Construction Categories */}
                <section className="py-24 bg-[#f7f9f5]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-black text-[#2F3E28] mb-4">Hạng mục thi công chính</h2>
                            <p className="text-[#2F3E28]/60 font-medium text-lg">Chúng tôi thực hiện trọn gói mọi hạng mục từ phần thô đến trang trí cây xanh chi tiết nhất.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Xây dựng phần thô cảnh quan', desc: 'San lấp mặt bằng, xây hệ thống thoát nước, xây bể cá, lắp đặt hệ thống lọc và các cấu kiện kiến trúc trang trí.', icon: 'foundation' },
                                { title: 'Trồng & Chăm sóc cây xanh', desc: 'Cung cấp và trồng các loại cây bóng mát, cây hoa, thảm cỏ theo đúng chủng loại và vị trí trong bản vẽ thiết kế.', icon: 'forest' },
                                { title: 'Lắp đặt hệ thống tưới tự động', desc: 'Tư vấn và lắp đặt hệ thống tưới phun sương, tưới nhỏ giọt thông minh giúp tiết kiệm nước và thời gian chăm sóc.', icon: 'opacity' },
                                { title: 'Hệ thống chiếu sáng sân vườn', desc: 'Đi dây và lắp đặt đèn hắt cây, đèn lối đi, đèn mặt hồ đảm bảo thẩm mỹ và an toàn điện ngoài trời.', icon: 'light' },
                                { title: 'Thi công hồ cá Koi & Tiểu cảnh', desc: 'Nghệ thuật sắp đặt đá, thác nước và xử lý hệ thống vi sinh cho hồ cá chuyên nghiệp.', icon: 'water_drop' },
                                { title: 'Bảo dưỡng định kỳ trọn gói', desc: 'Dịch vụ cắt tỉa, bón phân, phòng trừ sâu bệnh sau khi bàn giao để sân vườn luôn xanh tốt.', icon: 'support_agent' }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl border border-[#dde8ce] hover:border-[#84da0b] hover:shadow-2xl hover:-translate-y-2 transition-all group">
                                    <div className="size-14 rounded-2xl bg-[#f2f7ed] flex items-center justify-center text-[#84da0b] mb-6 group-hover:bg-[#84da0b] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#2F3E28] mb-4">{item.title}</h3>
                                    <p className="text-[#2F3E28]/60 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Construction Standards Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img alt="Công nhân thi công cảnh quan tay nghề cao" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYHqKnLB5ak_oy9mpLdwMqg2VmnbCcqO4PkRW9UsfQfeWC0vvqOXqhXqUN0EOQWILLFmm0IVgY8LWFl9Q3uJnzSbDtlIslN7gQKm6uRplTkEoB4POXDL_O6NxctV0C1WEzCz5MNN8bZP_PCE5GUtWrHcYTmbAO5vXJC3dr0WlPeH-kLDXjJFG0BbqSk4hvYiLhQ9dbScxPoW6TDgInDC8doJwBr2t3zTyIQ_v84ai0LGOeuT2DJxnFLzz-9GSPOkOHs9EsW_yLQps" />
                                </div>
                                <div className="absolute -bottom-10 -right-10 bg-[#84da0b] p-8 rounded-3xl text-white shadow-xl hidden lg:block">
                                    <p className="text-5xl font-black mb-1">100%</p>
                                    <p className="text-sm font-bold uppercase tracking-widest opacity-80">Nghiệm thu đạt chuẩn</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl font-black text-[#2F3E28] mb-8">Tiêu chuẩn & Cam kết thi công</h2>
                                <div className="space-y-8">
                                    {[
                                        { title: 'Chất lượng vật liệu & Cây xanh', desc: 'Toàn bộ cây xanh được tuyển chọn kỹ từ vườn ươm, đảm bảo không sâu bệnh, dáng đẹp. Vật liệu xây dựng đúng chủng loại quy định.' },
                                        { title: 'Kỹ thuật thi công chuẩn xác', desc: 'Sử dụng máy móc hiện đại kết hợp bàn tay nghệ nhân. Các hạng mục chống thấm, lọc nước được test kỹ 48h trước khi nghiệm thu.' },
                                        { title: 'Đảm bảo tiến độ dự án', desc: 'Quy trình thi công khoa học, báo cáo tiến độ hàng ngày qua hình ảnh/video cho khách hàng. Cam kết bàn giao đúng hạn.' },
                                        { title: 'An toàn & Vệ sinh môi trường', desc: 'Đội ngũ thi công có bảo hộ đầy đủ. Dọn dẹp sạch sẽ công trường sau mỗi ngày làm việc và sau khi hoàn thiện bàn giao.' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-6 group">
                                            <div className="shrink-0 size-6 rounded-full border-2 border-[#84da0b] flex items-center justify-center mt-1 group-hover:bg-[#84da0b] transition-colors">
                                                <div className="size-2 rounded-full bg-[#84da0b] group-hover:bg-white transition-colors"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-[#2F3E28] mb-2">{item.title}</h4>
                                                <p className="text-[#2F3E28]/60 leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6-step Process (Simplified for Construction) */}
                <section className="py-24 bg-[#2F3E28] text-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black mb-4 text-[#84da0b]">Quy trình thực thi thực tế</h2>
                            <p className="text-white/60">Từ bản vẽ 3D đến hiện thực chỉ trong 6 bước</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                            {[
                                { step: '01', title: 'Khảo sát kỹ', desc: 'Đo đạc diện tích, hướng nắng, hướng gió.' },
                                { step: '02', title: 'Chốt vật tư', desc: 'Duyệt cây xanh & vật liệu thực tế tại vườn.' },
                                { step: '03', title: 'Thi công thô', desc: 'Hệ thống điện nước, cốt nền, xây dựng thô.' },
                                { step: '04', title: 'Phần mềm', desc: 'Trồng cây lớn, cây bụi, trang trí tiểu cảnh.' },
                                { step: '05', title: 'Vận hành', desc: 'Setup hệ thống lọc, máy bơm, hệ thống đèn.' },
                                { step: '06', title: 'Bàn giao', desc: 'Hướng dẫn chăm sóc & ký biên bản nghiệm thu.' }
                            ].map((step, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                                    <span className="text-4xl font-black text-[#84da0b]/50 block mb-4">{step.step}</span>
                                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                    <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Construction Projects */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                            <div>
                                <h2 className="text-4xl font-black text-[#2F3E28]">Công trình thực tế</h2>
                                <p className="text-[#2F3E28]/60 mt-2">Hình ảnh được chụp trực tiếp tại dự án sau khi hoàn thiện</p>
                            </div>
                            <Link to="/du-an" className="h-12 px-8 rounded-xl bg-[#f2f7ed] text-[#84da0b] font-bold flex items-center gap-2 hover:bg-[#84da0b] hover:text-white transition-all">
                                Xem tất cả dự án <span className="material-symbols-outlined">center_focus_strong</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuBLDSsV4Cg0BNHCfEMfC4fAFFDBWhBZeEpbGpgiP3PLofhzxKLbjIwu-JrCqYqL-P8w9NLQvzw9gwewiU6-FDEER8CeBkKs04qXM16cDArYsmBuxIHoqOk-hRSRlWBs4_djpDh0B6zclzkRNXrI2RYSSowTW5NbxJDyw5gmM7nisnALnKb9zlcq7LeWzAQPThQPbeUIE_AFZegoEpSbw8jSJ5COMzbmUbEP_8_a5YNhyCIodB74h2ee6-G77lh8m9RNm7ZzYMnK3ug',
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuC8jvmzOcthG3-CuMBoBEzAPWN2_6K_6nN1Yt0snIQgzl5r8A4fHXZJl2nxoa9rGMhKgBo8efgHPb7bO18j-l4smbRaI-pbd_m1_tW9qmc9pnG0NVci82_U0QJO0-ufLzuG0_FWnp-ceoJGD3o6hlsKhoRFDwBGmtNQHSrEQdT-ZjkyJuAYLYG20_BitSMpPrcrPeKc-tUiW4mlJZKpc7uhkTDXC-h3VoZ7v-El5SZIgQzLL43Dp9MwLgf2-dHxrMhog8_ksAGsMnQ',
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuDaIrnvIyavFPEgQR6pnY0UDABq2iUbEGtvqd80jBH3azzBYvdzzqsnvUdqqDIYxysjnex9hN8ig36sGGPNc5AtZvUdeoedv9Zew4N8VIRrx4B4NkNw09FS_x36-54W5ROewMIs5O3GV7dVbnP4pJU0XK4DpFzkp4z9szTbW1bSYxhkzyWS9Pb3k-TJFIDON1ESKB9hI-npGesRBCdtNf_uAyd0vL8PHF9fusJGIWNPZE2b01asipamuAe3kbmQDuSihq2k8gi6auw',
                                'https://lh3.googleusercontent.com/aida-public/AB6AXuBucw8W_ydtZfvKMOV89FfmqBQhdW31vnp6VglFKr_zT1u-p4GdpeoU1Ef-HLUIrduoYMTqFzKJG5uAQFp1APpMj52HXKG3znaYKsTteayk6t_UbR8xSZLSbVcwVYe2jnwqf1HE_QpfP9OEQLAltuplODBc-j06jwzI54UAPitArCoEv4DhJGVuh0DYxn8_534lHzc_OMk0epekjL1OHvnYBx3IuxLqzPolrU_ehKOusQBsj2KQaEFf00TqX_paU7zvAkAHX85VOpg'
                            ].map((img, idx) => (
                                <div key={idx} className="aspect-[3/4] rounded-2xl overflow-hidden group">
                                    <img alt="Project gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={img} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Combined Commitments & Lead Form */}
                <section className="py-24 bg-[#f7f9f5]">
                    <div className="container mx-auto px-4 md:px-10">
                        <div className="bg-[#2F3E28] rounded-[3rem] p-8 lg:p-16 text-white relative shadow-3xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#84da0b]/10 blur-[100px]"></div>
                            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                                <div>
                                    <h2 className="text-4xl font-black mb-8">Bạn cần thi công ngay?</h2>
                                    <p className="text-white/70 mb-10 text-lg leading-relaxed">
                                        Chúng tôi sẵn sàng cử chuyên gia đến khảo sát hiện trạng và tư vấn báo giá miễn phí trong vòng 24h. Cam kết không phát sinh chi phí sau khi đã ký hợp đồng.
                                    </p>
                                    <div className="space-y-6 mb-10">
                                        {[
                                            { icon: 'task_alt', text: 'Bảo hành cây sống khỏe 1 đổi 1 trong 90 ngày.' },
                                            { icon: 'task_alt', text: 'Bảo hành kỹ thuật xây dựng lên đến 2 năm.' },
                                            { icon: 'task_alt', text: 'Hỗ trợ kỹ thuật chăm sóc trọn đời qua Hotline.' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <span className="material-symbols-outlined text-[#84da0b]">{item.icon}</span>
                                                <span className="font-bold">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl w-fit">
                                        <p className="text-sm opacity-60 mb-1 uppercase tracking-widest font-bold">Hotline thi công 24/7</p>
                                        <p className="text-3xl font-black text-[#84da0b]">0868.462.462</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-[#2F3E28]">
                                    <h3 className="text-2xl font-black mb-6">Đăng ký khảo sát & Báo giá</h3>
                                    <form className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase opacity-40">Họ và tên khách hàng</label>
                                            <input className="w-full h-12 px-5 rounded-xl bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none" placeholder="Nhập họ tên" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase opacity-40">Số điện thoại liên hệ</label>
                                            <input className="w-full h-12 px-5 rounded-xl bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none" placeholder="Nhập SĐT" type="tel" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase opacity-40">Địa chỉ công trình</label>
                                            <input className="w-full h-12 px-5 rounded-xl bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none" placeholder="Ví dụ: KĐT Vinhomes, TP. Thái Nguyên" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase opacity-40">Ghi chú dự án</label>
                                            <textarea className="w-full p-5 rounded-xl bg-[#f7f9f5] border border-[#dde8ce] focus:border-[#84da0b] focus:ring-1 focus:ring-[#84da0b] outline-none h-24 resize-none" placeholder="Mô tả sơ bộ nhu cầu thi công..."></textarea>
                                        </div>
                                        <button className="w-full h-14 bg-[#84da0b] hover:bg-[#6cb309] text-white font-black rounded-xl shadow-xl shadow-[#84da0b]/30 transition-all text-lg mt-4 flex items-center justify-center gap-3">
                                            Gửi yêu cầu ngay
                                            <span className="material-symbols-outlined">send</span>
                                        </button>
                                    </form>
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
