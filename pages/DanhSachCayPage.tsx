import React from 'react';

const DanhSachCayPage: React.FC = () => {
    return (
        <div className="bg-[#fafbf9] text-[#161712] font-sans antialiased flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col">
                {/* Section 1: Plant Listing */}
                <section className="w-full py-8 md:py-12">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                        {/* Headline */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[#3b4224] text-3xl md:text-4xl font-bold tracking-tight">Danh sách cây cảnh quan</h1>
                            <p className="text-[#7a8165] text-base max-w-2xl">
                                Tuyển chọn các loại cây bóng mát, cây công trình chất lượng cao phù hợp với khí hậu Việt Nam.
                            </p>
                        </div>
                        {/* Plant Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Cây Bàng Đài Loan", desc: "Cây bóng mát, tán tầng đẹp, phù hợp cảnh quan đô thị và sân vườn.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDXCloWTRqxzRvA9KmIpUhtorVytcL8L1q6ur13jk3eV6-__urGSENP_oTy3JpoaBnPy5b8TcHSNrboLUjakVhsPnP5QXa_qI_n3xal9gHQk2N4JUyxbJTQ7RvY5hmmoGvJxovB8jv7Ml1MXGJ9hw7QL3Aq5AB8G0ciJFmFA2YmH4pDuFOSwLGm0O5x9ekSwPegljWLx9WL9guSmkxw7XWFWyyiPQ7r6a70NJotF9ubyLzl4tneErvK9qZipO_9BzFr9I4ERDQN-w" },
                                { name: "Cây Sao Đen", desc: "Cây gỗ lớn, thân thẳng tắp, thường trồng lấy bóng mát đường phố.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPUb-1I00p34OgIgP8-9DliUld_fZvez4Ez6YkWIED5C8EOPFmB3SBah-TemRQ6tQyE4ObaXE600LVEIMewx0kVK05EyRYPQRKsAUstqlcZFM_sht59z0eZTVAmQLoohQgM6PMwtPQqVlMdVzYOABExXC9ZpNeDKyJ3kDwLse-9NLry7HI5NAj9q4F7lBMl6zG53_lNUgu2wSMUBWSh1Pv3k0QmLoXkjRJPGfbyI07fLE3YQdDjEveK1veYuBIjyX4ceQqhq2Dfa0" },
                                { name: "Cây Giáng Hương", desc: "Hoa vàng rực rỡ, gỗ quý, tạo cảnh quan đẹp và sang trọng.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6v2d8lt7tI37XV6MPDvVKcc5yD9UpLMFRRNQWF7_8zinlrOs8qjyWDhitD7K33lLrVVDboRkqiwphm9Qr9DLVw3Ct1tOv1omVrlcZnsqoDFLGafh5DyDQtZZyifFiovsg6c8MBCE4TAbU8gAmUJokPACCDxHmdUPbGZvfzYHDOV0VBbhoq_rgYenAEKMTmwN4f8vGPO7_Iu1jV67VWcswtAZ-V9ttvATvmxIj7RByvNtwSRMTX0g2VYHr6-xiOM45yN7Zk-izELI" },
                                { name: "Cây Lộc Vừng", desc: "Nằm trong tứ quý sanh sung tùng lộc, hoa đỏ rủ xuống rất đẹp.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJNu7LVBJAJ-yF_YEY-0HUEoDursgqWjAXgQ_IsR-D9ZgAgekvMX57fZMkjFD8M9i8srZhaFguPW4QoWSrt_NfqyRGh2xXDx8gGhaLpC-IDxwQg-L-1Q4mLoSITGBQ4BmTJTb4svPDm5K50GGrUNfsHwaPyN4NGqQcY7ZGQOU64DBUWewLjXP1G67Mf-zRDmYaSs_BGYG40t0jNtCsJXg7OmNXu2lQVChiUHMfZYQcjSFfC2vpBKqmvEUpXx7tSr4SZCAG53YQHJQ" },
                                { name: "Cây Ngọc Lan", desc: "Hương thơm ngào ngạt, hoa trắng tinh khiết, mang lại sự thư thái.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMSsEENJ4WEXF3alIWzc0TBrf6oy2lfbMmco9nxlKbR2uAEoTgRM0yYH8hC9vbbKn8iFy-xcv4gkGSEx1_PkgbHnbDBooA6ZDYGMk5xMhwkbKoFjoJ2qBAbhp6cZ5TKgACnOTDgG-cEUDMJ589dWtgxVstovGdsKYNpV0byIn17BQ5k-6AyFycR7HOUSvJgoe4muUTPT73Yo1zxq6WZzJZKm7ZmUXUfX1ZlGgI4OwRQD_T2UZRv0OIbTJvd-m_6wDOCuGzWcWMp38" },
                                { name: "Cây Tùng Bách", desc: "Dáng thế uy nghiêm, xanh quanh năm, biểu tượng của sự trường thọ.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeWtN0X4kr2xnNdmaEFgILxWPK65Zu4lvGmhQR4c1Uvlbcs9VvYdy3HFAgmxM9FY2NcdQWGJrOiVC21ZNUhYgZ9XSGLo7TVMtDiBtrbQwg8bVVINsbq8_Eax9LPaB6XHrBXIdLJQbdnR_3KDLv450ZH-h_WEADx4feRMQTOauLbF01XgonCCs56txB5OnLuj4ZQbFBajOOT1VU-QZUoHjDm-lR4J0lbuCwNYB88cSdeKkTItPAtoutO7jGOD0dz0DYWr7AKD3BjI4" },
                                { name: "Cây Hoàng Nam", desc: "Dáng tháp cao vút, lá rủ xuống, thường trồng làm hàng rào, lối đi.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLvnYIN0c_fkYlnahNE4nHeOebu34H45MlZmx_RUxO-CrYebnpSZtJsQ99VenHiShItj69K7YOSHt8oP5ihtUPBz9MX_AvFtZTOaliITSicKV013OCEX710zD9OTJd23D0KSHN5irICBWY6bjOLUW7JPEN2Fhm4vkIgZOw0GJB14PrvGgKvpWFbLxbG7jEd7aU_4rPOki5TBgqSwgh7L2rRjSSDZ0JAbXFBhvz2CJQe4MMjZ3EM239RBddSba9ioo0ZrD4MifqC4Q" },
                                { name: "Cây Osaka Đỏ", desc: "Sắc đỏ rực rỡ, thu hút mọi ánh nhìn, tạo điểm nhấn cho công trình.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwREzou0NBoRxAKGzNYE1if3m0lRC1ZM9IrWodTkR5P5q_loTyAjrZINFa5eo0ZlhIviykxfOvYS2bbxrP-evbT6wZyfCzJY2Sibz1oLUondtXIMMZLLiTcz63t_VpdK8TrG54xKiSXKlOOQS_UcNLA3cXCx9qk4s4rYyxuZ5hhIqvk2NfXniIIgekEhjU0sypZI48pvuvaFpBiA50E8ChruZ0B-rMmtyrfDSbAcysNGA-Nsy2yGLIe7HexlcQb1P_aDnbwv4kbeg" }
                            ].map((plant, index) => (
                                <div key={index} className="group flex flex-col bg-white border border-[#dee0d7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                    <div className="w-full aspect-square bg-gray-100 overflow-hidden relative">
                                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url("${plant.image}")` }}>
                                        </div>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <div className="p-4 flex flex-col gap-2 flex-grow">
                                        <h3 className="text-[#161712] text-lg font-bold leading-tight group-hover:text-[#3b4224] transition-colors">{plant.name}</h3>
                                        <p className="text-[#7a8165] text-sm font-normal line-clamp-2">{plant.desc}</p>
                                        <div className="mt-auto pt-2">
                                            <span className="text-[#3b4224] text-sm font-bold inline-flex items-center gap-1 group-hover:underline cursor-pointer">
                                                Xem chi tiết
                                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Pagination (Simulated) */}
                        <div className="flex justify-center pt-8">
                            <nav className="flex gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-gray-400 hover:text-[#3b4224] hover:border-[#3b4224] transition-colors disabled:opacity-50">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#3b4224] text-white font-bold">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-[#161712] hover:text-[#3b4224] hover:border-[#3b4224] transition-colors">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-[#161712] hover:text-[#3b4224] hover:border-[#3b4224] transition-colors">3</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#dee0d7] text-[#161712] hover:text-[#3b4224] hover:border-[#3b4224] transition-colors">
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
                                    <span className="text-[#FF9326] font-bold tracking-wider text-sm uppercase">Tư vấn chuyên sâu</span>
                                    <h2 className="text-[#3b4224] text-3xl md:text-4xl font-black leading-tight">
                                        Bạn cần tư vấn chọn cây phù hợp cho công trình?
                                    </h2>
                                    <p className="text-[#4e5440] text-lg leading-relaxed max-w-lg">
                                        Đội ngũ kỹ sư KGX sẽ hỗ trợ khảo sát thực tế, phân tích thổ nhưỡng và đề xuất phương án cây xanh tối ưu nhất cho ngân sách của bạn.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="h-12 px-6 rounded-lg bg-[#FF9326] hover:bg-[#e6821f] text-white font-bold text-base transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                                        <span>Nhận tư vấn chọn cây</span>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-6 rounded-lg border-2 border-[#3b4224] text-[#3b4224] hover:bg-[#3b4224] hover:text-white font-bold text-base transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">call</span>
                                        <span>Gọi 0868 462 462</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-[#7a8165]">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 bg-cover"
                                                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqUJBV4wcXYy47vRkBX-gfQBonbVLvPdqyIsmyUWqOpc3rS2qJ-7Tur5gUl3s-dwcIsfVnTNjsLpkFovYQULa536unbpGKf5mn59gq_c-7aalhsNUvrU_10N61uWVeNnZgBKAI6qJ_g2dKG_wyukBthXVwtbsk94fIQWIYud6EJeOM3eU5TEkSjrKm59lggmYXJjeKyfsu71h6iDWv0YOgyqwEl9PaTRiajkt77r9rLluHKFnXPkJvLNorbAvhsVMJ4_x3DATNnZU')` }}></div>
                                        ))}
                                    </div>
                                    <p>Hơn 500+ khách hàng đã tin tưởng</p>
                                </div>
                            </div>
                            {/* Right: Quick Form */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#dee0d7]">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xl font-bold text-[#3b4224]">Gửi yêu cầu nhanh</h3>
                                    <div className="flex flex-col gap-4">
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Họ và tên</span>
                                            <input className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-[#3b4224] focus:ring-1 focus:ring-[#3b4224] outline-none transition-all placeholder:text-gray-400" placeholder="Nhập họ tên của bạn" type="text" />
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Số điện thoại</span>
                                            <input className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-[#3b4224] focus:ring-1 focus:ring-[#3b4224] outline-none transition-all placeholder:text-gray-400" placeholder="Ví dụ: 0912 345 678" type="tel" />
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Loại công trình (Tùy chọn)</span>
                                            <select className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-[#3b4224] focus:ring-1 focus:ring-[#3b4224] outline-none transition-all text-[#161712]">
                                                <option disabled selected value="">Chọn loại công trình</option>
                                                <option value="biet-thu">Sân vườn Biệt thự</option>
                                                <option value="khu-do-thi">Khu đô thị / Resort</option>
                                                <option value="nha-may">Nhà máy / KCN</option>
                                                <option value="khac">Khác</option>
                                            </select>
                                        </label>
                                    </div>
                                    <button className="mt-2 h-12 w-full rounded-lg bg-[#FF9326] hover:bg-[#e6821f] text-white font-bold text-base transition-colors shadow-md">
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

export default DanhSachCayPage;
