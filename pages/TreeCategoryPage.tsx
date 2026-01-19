import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TREES, TREE_CATEGORIES } from '../constants';

const TreeCategoryPage: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const category = TREE_CATEGORIES.find(c => c.slug === categorySlug);
    const filteredTrees = TREES.filter(t => t.categorySlug === categorySlug);

    if (!category) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
                <h2 className="text-2xl font-bold text-olive">Không tìm thấy nhóm cây này</h2>
                <Link to="/san-pham" className="px-6 py-2 bg-primary text-white rounded-xl font-bold">
                    Quay lại danh sách sản phẩm
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background-light text-olive font-display antialiased flex flex-col min-h-screen">
            <main className="flex-grow flex flex-col">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-16 bg-[#fafcf8]">
                    <div className="container px-4 md:px-8">
                        <div className="flex flex-col gap-4">
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-sm text-olive/60 mb-4">
                                <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
                                <span>/</span>
                                <Link to="/san-pham" className="hover:text-primary transition-colors">Sản phẩm</Link>
                                <span>/</span>
                                <span className="text-primary font-bold">{category.name}</span>
                            </div>
                            <h1 className="text-primary text-4xl md:text-5xl font-black tracking-tight uppercase">
                                {category.name}
                            </h1>
                            <p className="text-olive/70 text-lg max-w-2xl leading-relaxed">
                                {category.desc}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tree Grid Section */}
                <section className="w-full py-16">
                    <div className="container px-4 md:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredTrees.length > 0 ? (
                                filteredTrees.map((tree) => (
                                    <Link
                                        key={tree.slug}
                                        to={`/san-pham/${tree.slug}`}
                                        className="group flex flex-col bg-white border border-[#eef4e7] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2"
                                    >
                                        <div className="w-full aspect-square overflow-hidden relative">
                                            <div
                                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url("${tree.image}")` }}
                                            ></div>
                                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <div className="p-6 flex flex-col gap-3 flex-grow bg-white">
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-olive text-xl font-bold leading-tight group-hover:text-primary transition-colors uppercase">
                                                    {tree.name}
                                                </h3>
                                                <p className="text-primary/60 text-xs font-bold italic truncate">
                                                    {tree.scientificName}
                                                </p>
                                            </div>
                                            <p className="text-olive/70 text-sm font-normal line-clamp-2 leading-relaxed">
                                                {tree.description}
                                            </p>
                                            <div className="mt-auto pt-4 flex items-center justify-between">
                                                <span className="text-primary text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    Chi tiết
                                                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                                </span>
                                                <div className="p-2 bg-primary/5 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined text-sm">potted_plant</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <div className="size-20 bg-primary/5 text-primary/30 flex items-center justify-center rounded-full mx-auto mb-6">
                                        <span className="material-symbols-outlined text-4xl">inventory_2</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-olive">Đang cập nhật danh sách cây</h3>
                                    <p className="text-olive/50 mt-2">Dữ liệu cho nhóm này đang được bộ phận kỹ sư cây xanh KGX chuẩn bị.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Lead Gen Section (Optional) */}
                {filteredTrees.length > 0 && (
                    <section className="w-full bg-[#f1f4ed] py-20">
                        <div className="container px-4 md:px-8">
                            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-primary/10 border border-[#eef4e7] overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                                    <div className="flex flex-col gap-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full w-fit">
                                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                                            <span className="text-primary text-xs font-black uppercase tracking-wider">Tư vấn chọn cây</span>
                                        </div>
                                        <h2 className="text-primary text-3xl md:text-4xl font-black leading-tight">
                                            Bạn cần số lượng lớn <br />cho dự án công trình?
                                        </h2>
                                        <p className="text-olive/70 text-lg leading-relaxed max-w-lg">
                                            KGX cung cấp cây công trình, cây bóng mát chất lượng cao với số lượng lớn, hỗ trợ vận chuyển và thi công trồng cây trọn gói
                                            đảm bảo tỷ lệ sống 100%.
                                        </p>
                                        <div className="flex flex-wrap gap-4 pt-2">
                                            <button className="h-14 px-8 bg-primary hover:bg-primary-dark text-white rounded-2xl font-black shadow-xl shadow-primary/20 transition-all transform hover:-translate-y-1">
                                                NHẬN BÁO GIÁ DỰ ÁN
                                            </button>
                                            <button className="h-14 px-8 border-2 border-primary text-primary hover:bg-primary/5 rounded-2xl font-black transition-all flex items-center gap-2">
                                                <span className="material-symbols-outlined">call</span>
                                                0868 462 462
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJNu7LVBJAJ-yF_YEY-0HUEoDursgqWjAXgQ_IsR-D9ZgAgekvMX57fZMkjFD8M9i8srZhaFguPW4QoWSrt_NfqyRGh2xXDx8gGhaLpC-IDxwQg-L-1Q4mLoSITGBQ4BmTJTb4svPDm5K50GGrUNfsHwaPyN4NGqQcY7ZGQOU64DBUWewLjXP1G67Mf-zRDmYaSs_BGYG40t0jNtCsJXg7OmNXu2lQVChiUHMfZYQcjSFfC2vpBKqmvEUpXx7tSr4SZCAG53YQHJQ"
                                            alt="KGX Landscape Nursery"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default TreeCategoryPage;
