import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesService, Service } from '../src/services/servicesService';
import ImageWithFallback from './ImageWithFallback';

const ConstructionServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await servicesService.getAllServices();
      // Filter to show specific services if needed, here we'll just take the top ones related to construction
      const constructionServices = data.filter(s =>
        s.title.toLowerCase().includes('thi công') ||
        s.title.toLowerCase().includes('bảo dưỡng') ||
        s.title.toLowerCase().includes('nuôi cấy') ||
        s.title.toLowerCase().includes('tường cây')
      ).slice(0, 4);
      setServices(constructionServices);
    } catch (error) {
      console.error('Error fetching construction services:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return null;

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
              key={service.slug}
              to={`/dich-vu/${service.slug}`}
              className={`group relative h-64 rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary transition-all block ${index === 3 ? 'lg:hidden xl:block' : ''}`}
            >
              <ImageWithFallback
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                src={service.image}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all font-medium">
                  {service.description || 'Dịch vụ chuyên nghiệp'}
                </p>
                <div className="absolute top-4 right-4 bg-primary p-2 rounded-lg">
                  <span className="material-symbols-outlined text-white">
                    {(service.icon || 'engineering').replace(/^rn_/, '')}
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