import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsService, Product } from '../src/services/productsService';
import { TREE_CATEGORIES } from '../constants';
import ImageWithFallback from '../components/ImageWithFallback'; // Make sure ImageWithFallback is imported!

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
                            <h1 className="text-primary text-2xl md:text-3xl font-bold tracking-normal">
                                {category.name}
                            </h1>
                            <p className="text-[#text-muted] text-base max-w-2xl leading-relaxed">
                                {category.desc}
                            </p>
                        </div>

                        {loading ? (
                            <div className="py-20 flex flex-col items-center justify-center">
                                <div className="size-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                                <p className="text-slate-400 font-bold text-sm mt-4  tracking-widest">Đang tải sản phẩm...</p>
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
                                                <h3 className="text-[#161712] text-lg font-bold leading-[1.8] group-hover:text-primary transition-colors">
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
                                            <span className="material-symbols-outlined text-2xl">inventory_2</span>
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
                    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                        <span className="text-accent font-bold tracking-wider text-sm mb-4">Tư vấn chuyên sâu</span>
                        <h2 className="text-primary text-2xl md:text-3xl font-black leading-[1.8] mb-4">
                            Bạn cần tư vấn chọn cây phù hợp cho công trình?
                        </h2>
                        <p className="text-[#4e5440] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                            Đội ngũ kỹ sư KGX sẽ hỗ trợ khảo sát thực tế, phân tích thổ nhưỡng và đề xuất phương án cây xanh tối ưu nhất cho ngân sách của bạn.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <Link to="/lien-he" className="h-12 px-8 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-base transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                                <span>Nhận tư vấn chọn cây ngay</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <a href="tel:0868462462" className="h-12 px-8 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">call</span>
                                <span>Gọi 0868 462 462</span>
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-4 text-sm text-[#7a8165]">
                            <div className="flex -space-x-2">
                                <ImageWithFallback src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <ImageWithFallback src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                <ImageWithFallback src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                            </div>
                            <p>Hơn 500+ khách hàng đã tin tưởng</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TreeCategoryPage;
