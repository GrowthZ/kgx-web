import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../services';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const data = slug ? SERVICES_DATA[slug] : null;

    useEffect(() => {
        if (data) {
            window.scrollTo(0, 0);
            document.title = data.metaTitle;
        }
    }, [data]);

    if (!data) {
        // Fallback to home if slug not found, or could show 404
        return <Navigate to="/dich-vu" replace />;
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white flex flex-col min-h-screen w-full overflow-x-hidden">
            <main className="flex-1 w-full flex flex-col items-center">

                {/* Hero Section */}
                <section className="w-full bg-white dark:bg-[#30352c] border-b border-primary/10 dark:border-white/10">
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-16 md:py-24">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                            <div className="flex-1 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 dark:bg-white/10 dark:text-white">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    {data.hero.subtitle}
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-primary dark:text-white">
                                    {data.hero.title}
                                </h1>
                                <p className="text-lg md:text-xl text-text-muted dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
                                    {data.hero.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2">
                                        <span>{data.hero.ctaLabel || 'Nhận tư vấn ngay'}</span>
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-8 rounded-lg border-2 border-primary/10 text-text-main dark:text-white font-bold text-base hover:border-primary transition-all bg-white dark:bg-white/5">
                                        Hotline: 0868 462 462
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-black/10 z-10"></div>
                                    <img
                                        src={data.hero.image}
                                        alt={data.metaTitle}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20 bg-white/95 dark:bg-[#1a1c16]/90 backdrop-blur-md px-4 py-3 rounded-lg border-l-4 border-accent shadow-lg max-w-[280px]">
                                        <p className="text-xs font-bold text-primary uppercase tracking-wide">Thực tế dự án</p>
                                        <p className="text-sm dark:text-gray-200 mt-1">Kiến tạo giá trị bền vững cho mọi công trình.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {data.sections.map((section, index) => {
                    switch (section.type) {
                        case 'problem':
                            return (
                                <section key={index} className="w-full bg-background-light dark:bg-background-dark py-20">
                                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                                        <div className="text-center mb-16">
                                            <span className="text-primary font-bold text-sm tracking-widest uppercase block mb-2">{section.subtitle}</span>
                                            <h2 className="text-3xl font-black text-text-main dark:text-white uppercase">{section.title}</h2>
                                            {section.description && <p className="mt-4 text-text-muted dark:text-gray-400 max-w-2xl mx-auto">{section.description}</p>}
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            {section.items?.map((item, i) => (
                                                <div key={i} className="bg-white dark:bg-[#3a4035] p-8 rounded-2xl shadow-sm border border-primary/10 dark:border-white/10 hover:shadow-xl transition-all group">
                                                    <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 transition-transform">
                                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                                    </div>
                                                    <h4 className="text-xl font-bold mb-3 text-text-main dark:text-white">{item.title}</h4>
                                                    <p className="text-text-muted dark:text-gray-300 leading-relaxed text-sm">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            );

                        case 'core':
                            return (
                                <section key={index} className="w-full bg-white dark:bg-[#30352c] py-20 border-y border-primary/5 dark:border-white/5">
                                    <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                                        <div className="flex flex-col gap-12">
                                            <div className="flex flex-col gap-3 max-w-2xl">
                                                {section.subtitle && <span className="text-primary font-bold text-sm tracking-widest uppercase">{section.subtitle}</span>}
                                                <h2 className="text-3xl md:text-4xl font-black text-primary dark:text-white uppercase tracking-tight">
                                                    {section.title}
                                                </h2>
                                                {section.description && <p className="text-text-muted dark:text-gray-300 text-lg">{section.description}</p>}
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                                                {section.items?.map((item, i) => (
                                                    <div key={i} className="group flex flex-col gap-5 p-8 rounded-2xl bg-white dark:bg-[#3a4035] border border-primary/10 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                                        <div className="size-14 rounded-xl bg-background-light dark:bg-white/10 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                            <span className="material-symbols-outlined text-[32px]">{item.icon}</span>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">{item.title}</h3>
                                                            <div className="h-0.5 w-12 bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-500"></div>
                                                            <p className="text-text-muted dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );

                        case 'deliverables':
                            return (
                                <section key={index} className="w-full flex justify-center py-20 bg-background-light dark:bg-background-dark">
                                    <div className="w-full max-w-[1200px] px-4 md:px-8">
                                        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
                                            <div className="flex-1 flex flex-col gap-8 w-full">
                                                <div className="flex flex-col gap-3">
                                                    <h2 className="text-primary dark:text-white text-3xl md:text-4xl font-black tracking-tight leading-tight uppercase">
                                                        {section.title}
                                                    </h2>
                                                    {section.description && <p className="text-text-muted dark:text-gray-400 text-base">{section.description}</p>}
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    {section.items?.map((item, i) => (
                                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#3a4035] border border-primary/10 dark:border-white/10 shadow-sm">
                                                            <div className="mt-1 min-w-[24px] text-accent">
                                                                <span className="material-symbols-outlined">{item.icon}</span>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-text-main dark:text-white font-bold text-lg">{item.title}</h4>
                                                                <p className="text-text-muted dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex-1 w-full">
                                                <div className="relative w-full aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-primary/10 dark:border-white/10">
                                                    <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                                                        <div className="text-white">
                                                            <p className="font-mono text-sm opacity-80 mb-1">STANDARD SERVICE</p>
                                                            <p className="font-bold text-lg uppercase">Tiêu chuẩn chất lượng KGX</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );

                        case 'workflow':
                            return (
                                <section key={index} className="w-full py-20 bg-white dark:bg-[#30352c] border-y border-primary/5 dark:border-white/5">
                                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
                                        <h2 className="text-3xl font-black text-text-main dark:text-white mb-16 uppercase">{section.title}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                            {section.items?.map((item, i) => (
                                                <div key={i} className="flex flex-col items-center group">
                                                    <div className="size-20 rounded-full bg-primary/10 dark:bg-white/5 flex items-center justify-center text-primary dark:text-white text-2xl font-black mb-6 border-4 border-white dark:border-[#3a4035] shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                                                        {i + 1}
                                                    </div>
                                                    <h4 className="text-lg font-bold text-text-main dark:text-white mb-2">{item.title}</h4>
                                                    <p className="text-sm text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            );

                        case 'cta':
                            return null; // Handle below main content

                        default:
                            return null;
                    }
                })}

                {/* Final CTA Banner */}
                <section className="w-full py-20 px-4 md:px-8 bg-background-light dark:bg-background-dark">
                    <div className="max-w-[1200px] mx-auto rounded-3xl bg-primary relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 text-center md:text-left">
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Bạn muốn giải pháp tối ưu cho dự án của mình?</h2>
                                <p className="text-white/80 text-lg">Để lại thông tin để chuyên gia KGX tư vấn giải pháp hiệu quả và bền vững nhất.</p>
                            </div>
                            <div className="shrink-0">
                                <button className="h-14 px-8 rounded-xl bg-accent hover:bg-orange-500 text-white text-lg font-bold shadow-xl transition-all flex items-center gap-2">
                                    <span>Nhận tư vấn ngay</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p className="text-white/60 text-xs mt-3 text-center md:text-left">Hotline: 0868 462 462</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceDetailPage;
