import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-background-light overflow-hidden">
      <div className="container">
        <div className="bg-olive rounded-3xl p-8 lg:p-12 text-white relative shadow-2xl overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 size-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 size-64 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <span className="text-primary font-bold  tracking-widest text-sm">
                Liên hệ ngay
              </span>
              <h2 className="text-2xl md:text-3xl font-black mt-2 mb-6">
                Đăng ký tư vấn miễn phí
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Để lại thông tin dự án của bạn, đội ngũ chuyên gia của KGX sẽ liên
                hệ tư vấn giải pháp và báo giá sơ bộ trong vòng 24h.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Trụ sở chính</h4>
                    <p className="text-white/70 text-sm">
                      TP. Thái Nguyên, Tỉnh Thái Nguyên, Việt Nam
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      call
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hotline 24/7</h4>
                    <p className="text-accent font-bold text-xl">0868 462 462</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      mail
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-white/70 text-sm">
                      contact@kgxlandscape.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 text-olive">
              <h3 className="font-bold text-xl mb-6">Thông tin dự án</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold  text-olive/60">
                      Họ và tên
                    </label>
                    <input
                      className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Nhập họ tên"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold  text-olive/60">
                      Số điện thoại
                    </label>
                    <input
                      className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Nhập SĐT"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold  text-olive/60">
                      Loại dự án
                    </label>
                    <select className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>Biệt thự sân vườn</option>
                      <option>Resort / Khách sạn</option>
                      <option>Hồ cá Koi</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold  text-olive/60">
                      Khu vực
                    </label>
                    <select className="w-full h-11 px-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                      <option>Miền Bắc</option>
                      <option>Miền Trung</option>
                      <option>Miền Nam</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold  text-olive/60">
                    Ghi chú thêm
                  </label>
                  <textarea
                    className="w-full p-4 rounded-lg bg-[#f7f9f5] border border-[#dde8ce] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all h-24 resize-none"
                    placeholder="Mô tả sơ bộ về yêu cầu của bạn..."
                  ></textarea>
                </div>
                <button
                  className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all mt-2"
                  type="button"
                >
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;