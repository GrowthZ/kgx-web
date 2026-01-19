import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-background-off py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f2f7ed] skew-x-12 translate-x-32 z-0 opacity-50 pointer-events-none"></div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#dde8ce] w-fit shadow-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-olive tracking-wider uppercase">
              Đối tác cảnh quan tin cậy
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-olive tracking-tight">
            KGX – Thiết kế &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-olive-light">
              Thi công Cảnh quan
            </span>{" "}
            Trọn Gói
          </h1>
          <p className="text-lg text-olive/70 font-medium leading-relaxed max-w-lg">
            Chuyên nghiệp - Tận tâm - Sáng tạo. Chúng tôi mang đến giải pháp không
            gian sống xanh đẳng cấp, bền vững cho ngôi nhà và dự án của bạn.
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "Thi công giống thiết kế 3D đến 99%",
              "Bảo hành cây xanh dài hạn & tận tâm",
              "Minh bạch chi phí, không phát sinh",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-olive font-semibold">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/dich-vu" className="h-12 px-8 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
              Nhận báo giá
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
            <Link to="/du-an" className="h-12 px-8 rounded-xl bg-white border border-[#dde8ce] text-olive font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">grid_view</span>
              Xem dự án
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 translate-y-8">
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  alt="Landscape garden design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtruZZe5E9qOuY8VA_OD3MbkaBpl07HN7HB6plccajlO82GeIYXvPJVo-j58NB9AlCGqj1g6d6Ag0sMb4AZtKkxgu1QOM927eLGGkx-dCbEiEn3VQ8XQBdGeLWJXkCz4JTdmFg-nhXb64JRMjjQWE5K_CoQcAp18x5SE-gY7t4IgLuUCw4ETu-8V2JzhCqzsa1n-8U4Nyyg5wnsOhGXughX1UQIgnkw_ueIqTcKmEEwOfRcGBzvM2KkreNcAyZJN65xRVTkUih-8c"
                />
              </div>
              <div
                className="aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  alt="Detail landscape element"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9LLNw_gJiFTvsKNAdy4PrNKQPKYV2QWB87gw5smyDJW7Ole_QbgHWkvM8c1KGEjBEnc8IJykQ_NBnJctyGI7ezWocQRVjbnzPcu2N4kmDpYxciIndkJYzBVDy3KSWdRq064mlxUXnfM0PWRvg7Yq6bhQDb5XnDhnb-um1GNIuBHirb_wtNfM61LdFTLPQS70d2qdhtpItBVv8V2HSPPMT2n1fv3t12QoAyuhiViYr0g89CvSeULmuwfQMrr7MApZo0HtgxYBYxSw"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div
                className="aspect-square rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  alt="Pool landscape"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBucw8W_ydtZfvKMOV89FfmqBQhdW31vnp6VglFKr_zT1u-p4GdpeoU1Ef-HLUIrduoYMTqFzKJG5uAQFp1APpMj52HXKG3znaYKsTteayk6t_UbR8xSZLSbVcwVYe2jnwqf1HE_QpfP9OEQLAltuplODBc-j06jwzI54UAPitArCoEv4DhJGVuh0DYxn8_534lHzc_OMk0epekjL1OHvnYBx3IuxLqzPolrU_ehKOusQBsj2KQaEFf00TqX_paU7zvAkAHX85VOpg"
                />
              </div>
              <div
                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  alt="Construction process"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYHqKnLB5ak_oy9mpLdwMqg2VmnbCcqO4PkRW9UsfQfeWC0vvqOXqhXqUN0EOQWILLFmm0IVgY8LWFl9Q3uJnzSbDtlIslN7gQKm6uRplTkEoB4POXDL_O6NxctV0C1WEzCz5MNN8bZP_PCE5GUtWrHcYTmbAO5vXJC3dr0WlPeH-kLDXjJFG0BbqSk4hvYiLhQ9dbScxPoW6TDgInDC8doJwBr2t3zTyIQ_v84ai0LGOeuT2DJxnFLzz-9GSPOkOHs9EsW_yLQps"
                />
              </div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white flex flex-col items-center text-center animate-[bounce_3s_infinite]">
            <span className="text-4xl font-black text-primary">10+</span>
            <span className="text-xs font-bold text-olive uppercase mt-1">
              Năm kinh nghiệm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;