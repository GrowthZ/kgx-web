import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b2210] text-white/60 pt-20 pb-10 border-t border-white/10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
              <img src="/src/media/logo-kgx.png" alt="KGX Logo" className="h-10 w-auto object-contain" />
              <h2 className="text-xl font-bold tracking-normal">
                KGX - Không Gian Xanh
              </h2>
            </Link>
            <p className="text-sm leading-relaxed">
              Đơn vị tiên phong trong lĩnh vực thiết kế và thi công cảnh quan công
              nghệ cao. Mang không gian xanh đến từng ngôi nhà Việt.
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a
                className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Giới thiệu", to: "/gioi-thieu" },
                { label: "Dịch vụ Thiết kế", to: "/dich-vu/thiet-ke" },
                { label: "Dịch vụ Thi công", to: "/dich-vu/thi-cong" },
                { label: "Dự án tiêu biểu", to: "/du-an" },
                { label: "Tin tức & Sự kiện", to: "/tin-tuc" },
                { label: "Tuyển dụng", to: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary transition-colors" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Dịch vụ</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Thiết kế Sân vườn", to: "/dich-vu/thiet-ke/thiet-ke-canh-quan-san-vuon" },
                { label: "Thi công Sân vườn", to: "/dich-vu/thi-cong/thi-cong-canh-quan-san-vuon" },
                { label: "Thiết kế Quy hoạch", to: "/dich-vu/thiet-ke/thiet-ke-quy-hoach" },
                { label: "Chăm sóc bảo dưỡng", to: "/dich-vu/thi-cong/cham-soc-canh-quan" },
                { label: "Cung cấp cây xanh", to: "/san-pham" },
              ].map((link) => (
                <li key={link.label}>
                  <Link className="hover:text-primary transition-colors" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5">
                  location_on
                </span>
                <span>TP. Thái Nguyên, Tỉnh Thái Nguyên</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <span className="text-white font-bold">0868 462 462</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <span>khonggianxanhthainguyen@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2024 KGX - Không Gian Xanh. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition-colors" href="#">
              Chính sách bảo mật
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;