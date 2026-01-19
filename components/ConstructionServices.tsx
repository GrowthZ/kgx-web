import React from 'react';
import { Link } from 'react-router-dom';

const ConstructionServices: React.FC = () => {
  const services = [
    {
      title: "Thi công Sân vườn",
      subtitle: "Biệt thự, nhà phố, Penhouse",
      icon: "grass",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLDSsV4Cg0BNHCfEMfC4fAFFDBWhBZeEpbGpgiP3PLofhzxKLbjIwu-JrCqYqL-P8w9NLQvzw9gwewiU6-FDEER8CeBkKs04qXM16cDArYsmBuxIHoqOk-hRSRlWBs4_djpDh0B6zclzkRNXrI2RYSSowTW5NbxJDyw5gmM7nisnALnKb9zlcq7LeWzAQPThQPbeUIE_AFZegoEpSbw8jSJ5COMzbmUbEP_8_a5YNhyCIodB74h2ee6-G77lh8m9RNm7ZzYMnK3ug",
    },
    {
      title: "Duy tu & Bảo dưỡng",
      subtitle: "Chăm sóc định kỳ chuyên nghiệp",
      icon: "content_cut",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8jvmzOcthG3-CuMBoBEzAPWN2_6K_6nN1Yt0snIQgzl5r8A4fHXZJl2nxoa9rGMhKgBo8efgHPb7bO18j-l4smbRaI-pbd_m1_tW9qmc9pnG0NVci82_U0QJO0-ufLzuG0_FWnp-ceoJGD3o6hlsKhoRFDwBGmtNQHSrEQdT-ZjkyJuAYLYG20_BitSMpPrcrPeKc-tUiW4mlJZKpc7uhkTDXC-h3VoZ7v-El5SZIgQzLL43Dp9MwLgf2-dHxrMhog8_ksAGsMnQ",
    },
    {
      title: "Nuôi cấy mô",
      subtitle: "Công nghệ cao, giống cây sạch bệnh",
      icon: "biotech",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL0XN5PXtxHU5eNRxlYVqVuXJB5We-mascVeourqBaqPkRuWSlGwFFgNmL5NKglrAAJJYhHM_3-q95W31-h-hJ7fc5_LTL_nj4Rjyf5NOsyEHMd8m5TIZBqQb-fIWrBdq0UEIdI278TUNg1UvKZJ9BGtqDOJQgHhJw3fjnAC78WL6LxrtcefSnNoON7lB42uLsAi70-35AYydfAWjxY4sD2Dl5rCurXsWg3nSMudMgIZH0AuxQsgii_9MNVOuSQd4snDPjnpWQ3yc",
    },
    {
      title: "Tường cây xanh",
      subtitle: "Giải pháp xanh cho đô thị",
      icon: "filter_hdr",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaIrnvIyavFPEgQR6pnY0UDABq2iUbEGtvqd80jBH3azzBYvdzzqsnvUdqqDIYxysjnex9hN8ig36sGGPNc5AtZvUdeoedv9Zew4N8VIRrx4B4NkNw09FS_x36-54W5ROewMIs5O3GV7dVbnP4pJU0XK4DpFzkp4z9szTbW1bSYxhkzyWS9Pb3k-TJFIDON1ESKB9hI-npGesRBCdtNf_uAyd0vL8PHF9fusJGIWNPZE2b01asipamuAe3kbmQDuSihq2k8gi6auw"
    }
  ];

  return (
    <section className="py-20 bg-olive text-white relative">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Chất lượng hàng đầu
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 mb-4">
            Dịch vụ Thi công Chuyên nghiệp
          </h2>
          <p className="text-white/70">
            Đội ngũ kỹ sư, nghệ nhân lành nghề cùng trang thiết bị hiện đại, cam
            kết mang lại công trình chất lượng và thẩm mỹ cao nhất.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to="/dich-vu"
              className={`group relative h-64 rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary transition-all block ${index === 3 ? 'lg:hidden xl:block' : ''}`}
            >
              <img
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                src={service.image}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  {service.subtitle}
                </p>
                <div className="absolute top-4 right-4 bg-primary p-2 rounded-lg">
                  <span className="material-symbols-outlined text-white">
                    {service.icon}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/dich-vu" className="inline-flex h-12 px-8 rounded-xl bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base items-center justify-center transition-all">
            Xem toàn bộ dịch vụ thi công
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConstructionServices;