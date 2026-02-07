import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesService, Service } from '../src/services/servicesService';

const DesignServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await servicesService.getAllServices();
      // Filter to show specific services if needed, here we'll just take the top ones related to design
      const designServices = data.filter(s =>
        s.title.toLowerCase().includes('thiết kế')
      ).slice(0, 4);
      setServices(designServices);
    } catch (error) {
      console.error('Error fetching design services:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;

  return (
    <section className="py-20 bg-background-light">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Lĩnh vực hoạt động
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-olive mt-2">
              Dịch vụ Thiết kế
            </h2>
          </div>
          <Link
            className="text-olive font-bold hover:text-primary transition-colors flex items-center gap-2"
            to="/dich-vu"
          >
            Xem tất cả dịch vụ{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: Service Cards */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/dich-vu/${service.slug}`}
                className="group bg-white p-6 rounded-xl border border-[#eef4e7] hover:border-primary hover:shadow-lg transition-all cursor-pointer block"
              >
                <div className="size-12 bg-[#f2f7ed] rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{service.icon || 'architecture'}</span>
                </div>
                <h3 className="text-xl font-bold text-olive mb-2 group-hover:text-primary transition-colors uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-olive/60 line-clamp-2">
                  {service.description || 'Giải pháp kiến trúc cảnh quan chuyên sâu.'}
                </p>
              </Link>
            ))}
          </div>
          {/* Right: Site Plan Image */}
          <div className="lg:col-span-5 relative h-full min-h-[400px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl group">
              <img
                alt="Landscape architectural site plan blueprint"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMEVL2EEZQdx-krYSKADnIc7Va6RTZBx4LW5bdNwxooMY5cDjNl3fnkVowUc20t1UNfpdady6Y6TJvYw8LGTiqa9w_YyVF2_tOqqFsXnLiFXCK8X46MsSv4uDsDo405zlWziTqpfFDZsPRGH_gHYypcnYx87j7B2yyqsdj1xmmI2ViXRRnv19lSBmjOIxjie-GI10mCuXQTQLeMxyKa9zRuGiKNxjLaVU5iDMbe5nJCigLu_zf00G2KTeEMly5LZzi9FWlck8y0gU"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-sm font-medium uppercase opacity-80 mb-1">
                    Dự án tiêu biểu
                  </p>
                  <h3 className="text-2xl font-bold uppercase">Khu đô thị Eco Green</h3>
                  <p className="text-sm opacity-90 mt-2">
                    Quy hoạch 2023 - Diện tích 5ha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignServices;