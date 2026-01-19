import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TREES } from '../constants';

const ProductDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const tree = TREES.find(t => t.slug === slug);

    if (!tree) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
                <h2 className="text-2xl font-bold text-olive">Không tìm thấy thông tin cây</h2>
                <Link to="/san-pham" className="px-6 py-2 bg-primary text-white rounded-xl font-bold">
                    Quay lại danh sách
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-white transition-colors duration-200">
            <main className="w-full flex flex-col items-center">
                {/* Hero Section with Breadcrumbs */}
                <section className="w-full max-w-[1440px] px-4 sm:px-10 py-6 sm:py-10">
                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap gap-2 text-sm mb-6 px-4">
                        <Link className="text-text-muted hover:text-primary font-medium" to="/">Trang chủ</Link>
                        <span className="text-text-muted">/</span>
                        <Link className="text-text-muted hover:text-primary font-medium" to="/san-pham">Sản phẩm</Link>
                        <span className="text-text-muted">/</span>
                        <Link className="text-text-muted hover:text-primary font-medium" to={`/san-pham/nhom/${tree.categorySlug}`}>
                            {tree.category}
                        </Link>
                        <span className="text-text-muted">/</span>
                        <span className="text-primary font-bold">{tree.name}</span>
                    </div>
                    {/* Hero Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1 px-4 lg:pl-10">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[#151b0e] text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em] uppercase">
                                    {tree.name}
                                </h1>
                                <h2 className="text-text-muted text-lg font-medium leading-relaxed max-w-xl">
                                    {tree.description}
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-2">
                                <button className="flex h-12 px-6 bg-primary hover:bg-primary-dark text-white text-base font-bold rounded-xl items-center justify-center transition-colors shadow-lg shadow-primary/20">
                                    Tư vấn sử dụng cây này
                                </button>
                                <button className="flex h-12 px-6 bg-[#eef3e8] hover:bg-[#dfe8d4] text-[#151b0e] text-base font-bold rounded-xl items-center justify-center transition-colors">
                                    Gọi 0868 462 462
                                </button>
                            </div>
                            <div className="flex items-center gap-4 mt-4 text-sm text-text-muted">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                    ))}
                                </div>
                                <p>Đã được tin dùng bởi +120 khách hàng tháng này</p>
                            </div>
                        </div>
                        {/* Hero Image */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-square order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${tree.image}')` }}></div>
                            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold text-primary shadow-lg">
                                Dự án thực tế
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plant Facts Section */}
                <section className="w-full max-w-[1200px] px-4 py-12">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#eef3e8]">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined">info</span>
                            </div>
                            <h2 className="text-2xl font-bold text-[#151b0e]">Thông tin kỹ thuật</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                {[
                                    { label: 'Tên thường gọi', value: tree.name },
                                    { label: 'Tên khoa học', value: tree.scientificName, italic: true },
                                    { label: 'Nhóm cây', value: tree.category },
                                    { label: 'Chiều cao trưởng thành', value: tree.height },
                                    { label: 'Tốc độ sinh trưởng', value: tree.growth, icon: 'trending_up' },
                                    { label: 'Nhu cầu ánh sáng', value: tree.light, icon: 'light_mode' },
                                    { label: 'Nhu cầu nước', value: tree.water, icon: 'water_drop' },
                                    { label: 'Đặc điểm lá', value: tree.leaves }
                                ].map((fact, idx) => (
                                    <div key={idx} className="flex flex-col gap-1 border-t border-dashed border-[#dde6d1] pt-3">
                                        <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">{fact.label}</p>
                                        <div className="flex items-center gap-2">
                                            {fact.icon && <span className={`material-symbols-outlined text-sm ${fact.icon === 'water_drop' ? 'text-blue-500' : fact.icon === 'light_mode' ? 'text-accent' : 'text-primary'}`}>{fact.icon}</span>}
                                            <p className={`text-[#151b0e] font-medium ${fact.italic ? 'italic' : ''}`}>{fact.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full lg:w-1/3 aspect-[4/5] rounded-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${tree.macroImage}')` }}></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="text-white text-sm font-medium">Chi tiết lá và tán cây</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pros & Cons */}
                <section className="w-full max-w-[1200px] px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">thumb_up</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary">Ưu điểm nổi bật</h3>
                            </div>
                            <ul className="space-y-4">
                                {tree.pros.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                                        <div>
                                            <strong className="block text-[#151b0e]">{item.title}</strong>
                                            <span className="text-text-muted text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Cons / Considerations */}
                        <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="size-10 rounded-full bg-orange-400 flex items-center justify-center text-white">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                                <h3 className="text-xl font-bold text-orange-600">Lưu ý khi trồng</h3>
                            </div>
                            <ul className="space-y-4 relative z-10">
                                {tree.cons.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-orange-400 mt-0.5">error</span>
                                        <div>
                                            <strong className="block text-[#151b0e]">{item.title}</strong>
                                            <span className="text-text-muted text-sm">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Care Instructions */}
                <section className="w-full bg-[#f1f4ed] py-16">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-[#151b0e] mb-10 text-center">Hướng dẫn chăm sóc</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tree.care.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-4 p-6 bg-white rounded-xl border border-[#eef3e8]">
                                    <div className="text-primary"><span className="material-symbols-outlined text-3xl">{item.icon}</span></div>
                                    <h4 className="font-bold text-[#151b0e]">{item.title}</h4>
                                    <p className="text-sm text-text-muted">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProductDetailPage;
