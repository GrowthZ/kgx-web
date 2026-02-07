import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsService, Product } from '../src/services/productsService';
import { TREE_CATEGORIES } from '../constants';

const TreeCategoryPage: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const category = TREE_CATEGORIES.find(c => c.slug === categorySlug);

    useEffect(() => {
        if (categorySlug) {
            fetchProducts();
        }
    }, [categorySlug]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await productsService.getAllProducts(categorySlug!);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products by category:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!category) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 bg-background-light">
                <h2 className="text-2xl font-bold text-primary">Không tìm thấy nhóm cây này</h2>
                <Link to="/san-pham/danh-sach" className="px-6 py-2 bg-primary text-white rounded-lg font-bold">
                    Quay lại danh sách sản phẩm
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background-light text-[#161712] font-display antialiased flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col">
                {/* Section 1: Plant Listing */}
                <section className="w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
                        {/* Headline */}
                        <div className="flex flex-col gap-2">
                            <h1 className="text-primary text-3xl md:text-4xl font-bold tracking-tight">
                                {category.name}
                            </h1>
                            <p className="text-[#text-muted] text-base max-w-2xl leading-relaxed">
                                {category.desc}
                            </p>
                        </div>

                        {loading ? (
                            <div className="py-20 flex flex-col items-center justify-center">
                                <div className="size-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                                <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải sản phẩm...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {products.length > 0 ? (
                                    products.map((tree) => (
                                        <Link
                                            key={tree.slug}
                                            to={`/san-pham/${tree.slug}`}
                                            className="group flex flex-col bg-white border border-[#dee0d7] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="w-full aspect-square bg-gray-100 overflow-hidden relative">
                                                <div
                                                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                    style={{ backgroundImage: `url("${tree.image}")` }}
                                                ></div>
                                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                            </div>
                                            <div className="p-4 flex flex-col gap-2 flex-grow">
                                                <h3 className="text-[#161712] text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                                                    {tree.name}
                                                </h3>
                                                <p className="text-[#7a8165] text-sm font-normal line-clamp-2">
                                                    {tree.description}
                                                </p>
                                                <div className="mt-auto pt-2">
                                                    <span className="text-primary text-sm font-bold inline-flex items-center gap-1 group-hover:underline">
                                                        Xem chi tiết
                                                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="col-span-full py-20 text-center border-2 border-dashed border-[#dee0d7] rounded-xl bg-white/50">
                                        <div className="size-16 bg-primary/5 text-primary/30 flex items-center justify-center rounded-full mx-auto mb-4">
                                            <span className="material-symbols-outlined text-3xl">inventory_2</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary">Đang cập nhật danh sách cây</h3>
                                        <p className="text-[#7a8165] mt-2">Dữ liệu cho nhóm này đang được bộ phận kỹ thuật KGX chuẩn bị.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                {/* Section 2: CTA & Lead Gen */}
                <section className="w-full bg-[#f2f3f0] py-16 mt-auto border-t border-[#dee0d7]">
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Text & Actions */}
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <span className="text-accent font-bold tracking-wider text-sm uppercase">Tư vấn chuyên sâu</span>
                                    <h2 className="text-primary text-3xl md:text-4xl font-black leading-tight">
                                        Bạn cần tư vấn chọn cây phù hợp cho công trình?
                                    </h2>
                                    <p className="text-[#4e5440] text-lg leading-relaxed max-w-lg">
                                        Đội ngũ kỹ sư KGX sẽ hỗ trợ khảo sát thực tế, phân tích thổ nhưỡng và đề xuất phương án cây xanh tối ưu nhất cho ngân sách của bạn.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="h-12 px-6 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2">
                                        <span>Nhận tư vấn chọn cây</span>
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </button>
                                    <button className="h-12 px-6 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base transition-colors flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">call</span>
                                        <span>Gọi 0868 462 462</span>
                                    </button>
                                </div>
                            </div>
                            {/* Right: Quick Form */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#dee0d7]">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xl font-bold text-primary">Gửi yêu cầu nhanh</h3>
                                    <div className="flex flex-col gap-4">
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Họ và tên</span>
                                            <input className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" placeholder="Nhập họ tên của bạn" type="text" />
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Số điện thoại</span>
                                            <input className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" placeholder="Ví dụ: 0912 345 678" type="tel" />
                                        </label>
                                        <label className="flex flex-col gap-1.5">
                                            <span className="text-[#161712] text-sm font-semibold">Loại công trình (Tùy chọn)</span>
                                            <select className="h-12 px-4 rounded-lg bg-[#fafbf9] border-[#dee0d7] focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[#161712]">
                                                <option disabled selected value="">Chọn loại công trình</option>
                                                <option value="biet-thu">Sân vườn Biệt thự</option>
                                                <option value="khu-do-thi">Khu đô thị / Resort</option>
                                                <option value="nha-may">Nhà máy / KCN</option>
                                                <option value="khac">Khác</option>
                                            </select>
                                        </label>
                                    </div>
                                    <button className="mt-2 h-12 w-full rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-colors shadow-md">
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

export default TreeCategoryPage;
