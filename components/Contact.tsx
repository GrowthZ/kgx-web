import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="py-20 bg-background-light overflow-hidden">
      <div className="container">
        <div className="bg-olive rounded-3xl p-8 lg:p-16 text-white relative shadow-2xl overflow-hidden text-center max-w-4xl mx-auto">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 size-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 size-64 bg-primary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-primary font-bold tracking-widest text-sm mb-4">
              Liên hệ ngay
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Đăng ký tư vấn miễn phí
            </h2>
            <p className="text-white/80 mb-10 leading-relaxed max-w-2xl text-lg">
              Để lại thông tin dự án của bạn, đội ngũ chuyên gia của KGX sẽ liên
              hệ tư vấn giải pháp kỹ thuật, thiết kế và báo giá sơ bộ trong vòng 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <Link to="/lien-he" className="flex items-center justify-center gap-2 h-14 px-10 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                <span>Gửi yêu cầu ngay</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="tel:0868462462" className="flex items-center justify-center gap-2 h-14 px-10 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all">
                <span className="material-symbols-outlined">call</span>
                <span>Gọi 0868 462 462</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;