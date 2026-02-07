import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import catalogData from '../src/data/catalog-plants.json';

interface Plant {
    id: string;
    name: string;
    categoryId: string;
    colors: string[] | null;
    note?: string;
    image: string | null;
}

interface Category {
    id: string;
    name: string;
    description: string;
}

const CatalogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');

    const categories = catalogData.categories as Category[];
    const plants = catalogData.plants as Plant[];

    const filteredPlants = useMemo(() => {
        return plants.filter((plant) => {
            const matchesCategory = selectedCategory === 'all' || plant.categoryId === selectedCategory;
            const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [plants, selectedCategory, searchTerm]);

    const getCategoryName = (categoryId: string): string => {
        const category = categories.find((c) => c.id === categoryId);
        return category?.name || categoryId;
    };

    const getCategoryColor = (categoryId: string): string => {
        const colors: Record<string, string> = {
            'cay-bonsai': 'bg-amber-100 text-amber-700 border-amber-200',
            'cay-co-hoa': 'bg-pink-100 text-pink-700 border-pink-200',
            'cay-la-mau': 'bg-emerald-100 text-emerald-700 border-emerald-200',
            'cay-la-mon': 'bg-purple-100 text-purple-700 border-purple-200',
        };
        return colors[categoryId] || 'bg-gray-100 text-gray-700 border-gray-200';
    };

    const categoryStats = useMemo(() => {
        const stats: Record<string, number> = { all: plants.length };
        categories.forEach((cat) => {
            stats[cat.id] = plants.filter((p) => p.categoryId === cat.id).length;
        });
        return stats;
    }, [plants, categories]);

    return (
        <div className="bg-[#f7f8f5] dark:bg-[#1a2210] font-display text-[#161c0d] antialiased overflow-x-hidden min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-12 md:py-20 px-4 md:px-10 max-w-[1440px] mx-auto">
                <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#75c20a]/10 w-fit mx-auto">
                        <span className="material-symbols-outlined text-[#75c20a] text-sm">eco</span>
                        <span className="text-[#75c20a] text-xs font-bold tracking-wide">Catalog cây cảnh</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-normal text-[#161c0d]">
                        Bộ sưu tập <span className="text-[#75c20a]">cây cảnh</span>
                    </h1>
                    <p className="text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
                        Khám phá bộ sưu tập cây cảnh đa dạng với hơn {plants.length} loại cây từ nhiều danh mục khác nhau,
                        từ cây bonsai nghệ thuật đến cây lá màu trang trí.
                    </p>
                </div>
            </section>

            {/* Company Info */}
            <section className="py-8 bg-white border-y border-[#eef4e7]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#75c20a]">business</span>
                            <span className="font-semibold">{catalogData.company.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#75c20a]">call</span>
                            <span>{catalogData.company.hotline}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#75c20a]">language</span>
                            <span>{catalogData.company.website}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-[#f7f8f5]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    {/* Search */}
                    <div className="mb-6">
                        <div className="relative max-w-md mx-auto">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                search
                            </span>
                            <input
                                type="text"
                                placeholder="Tìm kiếm cây cảnh..."
                                className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#dee0d7] bg-white text-sm focus:border-[#75c20a] focus:ring-1 focus:ring-[#75c20a] outline-none transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === 'all'
                                    ? 'bg-[#75c20a] text-white shadow-lg shadow-[#75c20a]/20'
                                    : 'bg-white border border-[#dee0d7] text-gray-600 hover:border-[#75c20a] hover:text-[#75c20a]'
                                }`}
                        >
                            Tất cả ({categoryStats.all})
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === category.id
                                        ? 'bg-[#75c20a] text-white shadow-lg shadow-[#75c20a]/20'
                                        : 'bg-white border border-[#dee0d7] text-gray-600 hover:border-[#75c20a] hover:text-[#75c20a]'
                                    }`}
                            >
                                {category.name} ({categoryStats[category.id]})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Description */}
            {selectedCategory !== 'all' && (
                <section className="py-6 bg-white border-y border-[#eef4e7]">
                    <div className="max-w-[1440px] mx-auto px-4 md:px-10 text-center">
                        <h2 className="text-xl font-bold text-[#161c0d] mb-2">
                            {getCategoryName(selectedCategory)}
                        </h2>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                            {categories.find((c) => c.id === selectedCategory)?.description}
                        </p>
                    </div>
                </section>
            )}

            {/* Plants Grid */}
            <section className="py-12 bg-[#f7f8f5]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    {filteredPlants.length === 0 ? (
                        <div className="text-center py-16">
                            <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">
                                search_off
                            </span>
                            <h3 className="text-xl font-bold text-gray-500 mb-2">Không tìm thấy kết quả</h3>
                            <p className="text-gray-400">Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-sm text-gray-500">
                                    Hiển thị <span className="font-bold text-[#161c0d]">{filteredPlants.length}</span> sản phẩm
                                </p>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                {filteredPlants.map((plant) => (
                                    <div
                                        key={plant.id}
                                        className="group bg-white rounded-xl border border-[#eef4e7] overflow-hidden hover:shadow-lg hover:shadow-[#75c20a]/10 hover:border-[#75c20a]/30 transition-all duration-300"
                                    >
                                        {/* Plant Image Placeholder */}
                                        <div className="relative h-32 bg-gradient-to-br from-[#eef4e7] to-[#d4e7c5] flex items-center justify-center overflow-hidden">
                                            <span className="material-symbols-outlined text-4xl text-[#75c20a]/40 group-hover:scale-110 transition-transform duration-300">
                                                potted_plant
                                            </span>
                                            {/* Category Badge */}
                                            <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold border ${getCategoryColor(plant.categoryId)}`}>
                                                {getCategoryName(plant.categoryId).replace('Cây ', '')}
                                            </div>
                                        </div>
                                        {/* Plant Info */}
                                        <div className="p-3">
                                            <h3 className="font-bold text-sm text-[#161c0d] mb-1 line-clamp-2 group-hover:text-[#75c20a] transition-colors">
                                                {plant.name}
                                            </h3>
                                            {plant.colors && plant.colors.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {plant.colors.slice(0, 3).map((color, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded"
                                                        >
                                                            {color}
                                                        </span>
                                                    ))}
                                                    {plant.colors.length > 3 && (
                                                        <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">
                                                            +{plant.colors.length - 3}
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                            {plant.note && (
                                                <p className="text-[10px] text-gray-400 mt-1">{plant.note}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white border-t border-[#eef4e7]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                    <div className="bg-gradient-to-r from-[#75c20a]/10 to-[#5da300]/10 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#161c0d] mb-4">
                            Cần tư vấn chọn cây?
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Liên hệ với chúng tôi để được hỗ trợ lựa chọn cây phù hợp với không gian và nhu cầu của bạn.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/lien-he"
                                className="h-12 px-8 rounded-xl bg-[#75c20a] text-white text-base font-bold shadow-xl shadow-[#75c20a]/20 hover:bg-[#5da300] transition-all inline-flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">mail</span>
                                Liên hệ tư vấn
                            </Link>
                            <a
                                href={`tel:${catalogData.company.hotline.replace(/\s/g, '')}`}
                                className="h-12 px-8 rounded-xl border-2 border-[#75c20a] bg-transparent text-[#75c20a] text-base font-bold hover:bg-[#75c20a]/10 transition-colors inline-flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">call</span>
                                Gọi {catalogData.company.hotline}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CatalogPage;
