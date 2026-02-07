import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { productsService, Product } from '../../src/services/productsService';
import toast from 'react-hot-toast';
import { TREE_CATEGORIES } from '../../constants';

const AdminProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        loadProducts();
    }, [selectedCategory]);

    const loadProducts = async () => {
        try {
            setLoading(true);
            const categorySlug = selectedCategory === 'all' ? undefined : selectedCategory;
            const data = await productsService.getAllProducts(categorySlug);
            setProducts(data);
        } catch (error) {
            console.error('Error loading products:', error);
            toast.error('Lỗi khi tải danh sách sản phẩm');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string, name: string) => {
        if (!window.confirm(`Bạn có chắc muốn xóa sản phẩm "${name}"?`)) {
            return;
        }

        try {
            await productsService.deleteProduct(id);
            toast.success('Xóa sản phẩm thành công');
            loadProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            toast.error('Lỗi khi xóa sản phẩm');
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.scientificName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="space-y-8">
                {/* Header Section */}
                <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-normal text-slate-900">Quản lý Sản phẩm</h2>
                        <p className="text-slate-500 mt-1">Quản lý danh sách cây xanh và hệ thống sản phẩm KGX VN.</p>
                    </div>
                    <Link
                        to="/admin/products/new"
                        className="flex items-center gap-2 bg-admin-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all active:scale-[0.98]"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Thêm sản phẩm
                    </Link>
                </div>

                {/* Filters Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-admin-primary transition-colors">
                            search
                        </span>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tìm kiếm theo tên sản phẩm hoặc tên khoa học..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:border-admin-primary focus:ring-4 focus:ring-admin-primary/10 transition-all outline-none shadow-sm"
                        />
                    </div>
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-admin-primary transition-colors z-10">
                            category
                        </span>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full pl-12 pr-10 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:border-admin-primary focus:ring-4 focus:ring-admin-primary/10 transition-all outline-none shadow-sm appearance-none relative"
                        >
                            <option value="all">Tất cả danh mục</option>
                            {TREE_CATEGORIES.map((cat) => (
                                <option key={cat.slug} value={cat.slug}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            expand_more
                        </span>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="p-20 text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-admin-primary mx-auto"></div>
                            <p className="mt-4 text-slate-500 font-medium">Đang tải dữ liệu...</p>
                        </div>
                    ) : filteredProducts.length === 0 ? (
                        <div className="p-20 text-center">
                            <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                                <span className="material-symbols-outlined text-3xl">inventory_2</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-800">Không tìm thấy sản phẩm</h3>
                            <p className="text-slate-500 mt-2">Vui lòng kiểm tra lại bộ lọc hoặc thêm sản phẩm mới.</p>
                            <Link
                                to="/admin/products/new"
                                className="inline-flex items-center gap-2 mt-6 text-admin-primary font-bold hover:underline"
                            >
                                <span className="material-symbols-outlined text-xl">add_circle</span>
                                Thêm sản phẩm đầu tiên
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="px-8 py-5 text-[11px] font-extrabold text-slate-500  tracking-widest">Sản phẩm</th>
                                        <th className="px-6 py-5 text-[11px] font-extrabold text-slate-500  tracking-widest text-center">Danh mục</th>
                                        <th className="px-6 py-5 text-[11px] font-extrabold text-slate-500  tracking-widest text-center">Chiều cao</th>
                                        <th className="px-6 py-5 text-[11px] font-extrabold text-slate-500  tracking-widest text-center">Tốc độ</th>
                                        <th className="px-8 py-5 text-[11px] font-extrabold text-slate-500  tracking-widest text-right">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="size-14 rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-sm">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="font-bold text-slate-900 truncate">{product.name}</p>
                                                        <p className="text-xs text-slate-400 italic mt-0.5 truncate">{product.scientificName}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-center">
                                                <span className="inline-flex px-3 py-1.5 text-[11px] font-bold bg-admin-primary/10 text-admin-primary rounded-full  tracking-wider">
                                                    {product.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 text-center text-sm font-medium text-slate-600">
                                                {product.height}
                                            </td>
                                            <td className="px-6 py-5 text-center text-sm font-medium text-slate-600">
                                                {product.growth}
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <Link
                                                        to={`/admin/products/${product.id}`}
                                                        className="size-10 flex items-center justify-center text-slate-400 hover:text-admin-primary hover:bg-admin-primary/10 rounded-xl transition-all"
                                                        title="Chỉnh sửa"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">edit</span>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(product.id!, product.name)}
                                                        className="size-10 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                                                        title="Xóa"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer Info */}
                {!loading && filteredProducts.length > 0 && (
                    <div className="flex items-center justify-between px-2">
                        <p className="text-xs font-bold text-slate-400  tracking-widest">
                            HIỂN THỊ {filteredProducts.length} KẾT QUẢ
                            {searchQuery && ` CHO "${searchQuery}"`}
                        </p>
                        <div className="flex items-center gap-2">
                            <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 disabled:opacity-30" disabled>
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="size-10 flex items-center justify-center rounded-xl bg-admin-primary text-white font-bold text-xs">1</button>
                            <button className="size-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 disabled:opacity-30" disabled>
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminProductsPage;
