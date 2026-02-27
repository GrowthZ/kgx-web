import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { productsService, Product } from '../../src/services/productsService';
import { useForm, useFieldArray, Control } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import ImageCropper from '../../src/components/admin/ImageCropper';
import { uploadToR2 } from '../../src/lib/r2Service';
import { TREE_CATEGORIES } from '../../constants';

// Vietnamese slug generator
const toSlug = (str: string): string =>
    str.toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '').trim()
        .replace(/[\s]+/g, '-').replace(/-+/g, '-');

const schema = yup.object().shape({
    name: yup.string().required('Tên sản phẩm là bắt buộc'),
    slug: yup.string().required('Slug là bắt buộc'),
    scientificName: yup.string().required('Tên khoa học là bắt buộc'),
    categorySlug: yup.string().required('Danh mục là bắt buộc'),
    category: yup.string().required(),
    height: yup.string().required('Chiều cao là bắt buộc'),
    growth: yup.string().required('Tốc độ sinh trưởng là bắt buộc'),
    light: yup.string().required('Nhu cầu ánh sáng là bắt buộc'),
    water: yup.string().required('Nhu cầu nước là bắt buộc'),
    leaves: yup.string().required('Đặc điểm lá là bắt buộc'),
    description: yup.string().required('Mô tả sản phẩm là bắt buộc'),
    image: yup.string().required('Ảnh chính là bắt buộc'),
    macroImage: yup.string().optional(),
    pros: yup.array().of(yup.object({ title: yup.string().required(), desc: yup.string().required() })).optional(),
    cons: yup.array().of(yup.object({ title: yup.string().required(), desc: yup.string().required() })).optional(),
    care: yup.array().of(yup.object({ icon: yup.string().optional(), title: yup.string().required(), desc: yup.string().required() })).optional(),
});

// ─── Reusable image upload hook ───────────────────────────────────────────────
const useImageUpload = (onDone: (url: string) => void) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [cropSrc, setCropSrc] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

    const pick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => setCropSrc(ev.target?.result as string);
        reader.readAsDataURL(file);
        e.target.value = '';
    };

    const crop = async (blob: Blob) => {
        try {
            setUploading(true);
            const url = await uploadToR2(blob);
            onDone(url);
            toast.success('Tải ảnh lên thành công');
        } catch {
            toast.error('Lỗi khi upload ảnh');
        } finally {
            setUploading(false);
            setCropSrc(null);
        }
    };

    return { inputRef, cropSrc, setCropSrc, uploading, pick, crop };
};

// ─── ImagePicker component ─────────────────────────────────────────────────────
const ImagePicker = ({ value, onChange, label, aspect }: { value: string; onChange: (url: string) => void; label: string; aspect?: string }) => {
    const { inputRef, cropSrc, setCropSrc, uploading, pick, crop } = useImageUpload(onChange);

    return (
        <>
            <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={pick} />
            <div
                className={`relative rounded-2xl overflow-hidden border-2 border-dashed transition-all group cursor-pointer ${value ? 'border-transparent' : 'border-slate-200 hover:border-admin-primary/50'} ${uploading ? 'opacity-60 pointer-events-none' : ''} ${aspect || 'aspect-[4/3]'}`}
                onClick={() => inputRef.current?.click()}
            >
                {uploading && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                        <div className="size-8 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
                    </div>
                )}
                {value ? (
                    <>
                        <img src={value} className="w-full h-full object-cover" alt={label} />
                        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-white text-2xl mb-1">add_photo_alternate</span>
                            <span className="text-white text-[10px] font-bold tracking-widest">Thay đổi ảnh</span>
                        </div>
                    </>
                ) : (
                    <div className="size-full flex flex-col items-center justify-center text-slate-300 gap-2">
                        <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                        <p className="text-xs font-bold tracking-widest text-slate-400">{label}</p>
                    </div>
                )}
            </div>
            {cropSrc && (
                <ImageCropper src={cropSrc} onCrop={crop} onCancel={() => setCropSrc(null)} title={`Chỉnh sửa - ${label}`} />
            )}
        </>
    );
};

// ─── Input styles ──────────────────────────────────────────────────────────────
const inputCls = 'w-full px-4 py-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium text-sm';
const labelCls = 'text-[10px] font-bold text-slate-400 tracking-widest ml-1 block mb-1';

// ─── Main Form ─────────────────────────────────────────────────────────────────
const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

    const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: '',
            slug: '',
            scientificName: '',
            categorySlug: TREE_CATEGORIES[0].slug,
            category: TREE_CATEGORIES[0].name,
            height: '',
            growth: 'Trung bình',
            light: '',
            water: '',
            leaves: '',
            description: '',
            image: '',
            macroImage: '',
            pros: [{ title: '', desc: '' }],
            cons: [{ title: '', desc: '' }],
            care: [{ icon: 'water_drop', title: '', desc: '' }],
        }
    });

    const { fields: prosFields, append: appendPro, remove: removePro } = useFieldArray({ control, name: 'pros' });
    const { fields: consFields, append: appendCon, remove: removeCon } = useFieldArray({ control, name: 'cons' });
    const { fields: careFields, append: appendCare, remove: removeCare } = useFieldArray({ control, name: 'care' });

    const watchName = watch('name');
    const watchImage = watch('image');
    const watchMacroImage = watch('macroImage');
    const watchCategorySlug = watch('categorySlug');

    // Auto-generate slug from name (new products only, until manually edited)
    useEffect(() => {
        if (!id && !slugManuallyEdited && watchName) {
            setValue('slug', toSlug(watchName), { shouldValidate: false });
        }
    }, [watchName, id, slugManuallyEdited]);

    // Sync category display name when slug changes
    useEffect(() => {
        const cat = TREE_CATEGORIES.find(c => c.slug === watchCategorySlug);
        if (cat) setValue('category', cat.name);
    }, [watchCategorySlug]);

    // Load existing product for edit
    useEffect(() => {
        if (id) fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const product = await productsService.getById(id!);
            if (product) {
                Object.keys(product).forEach(key => {
                    if (key !== 'id') setValue(key as any, (product as any)[key]);
                });
                setSlugManuallyEdited(true); // Don't auto-overwrite slug on edit
            }
        } catch {
            toast.error('Lỗi khi tải thông tin sản phẩm');
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            // Clean up empty array items
            data.pros = (data.pros || []).filter((p: any) => p.title?.trim());
            data.cons = (data.cons || []).filter((c: any) => c.title?.trim());
            data.care = (data.care || []).filter((c: any) => c.title?.trim());

            if (id) {
                await productsService.updateProduct(id, data);
                toast.success('Cập nhật sản phẩm thành công');
            } else {
                await productsService.createProduct(data);
                toast.success('Tạo sản phẩm mới thành công');
            }
            navigate('/admin/products');
        } catch (error) {
            console.error('Save error:', error);
            toast.error('Lỗi khi lưu sản phẩm');
        } finally {
            setLoading(false);
        }
    };

    const CARE_ICONS = ['water_drop', 'wb_sunny', 'compost', 'content_cut', 'pest_control', 'thermostat', 'cleaning_services', 'yard'];
    const GROWTH_OPTIONS = ['Rất chậm', 'Chậm', 'Trung bình', 'Nhanh', 'Rất nhanh'];

    return (
        <AdminLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fadeIn pb-20">
                {/* Sticky Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20 bg-admin-bg/80 backdrop-blur-md py-4 border-b border-slate-100">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-normal">
                            {id ? 'Chỉnh sửa Sản phẩm' : 'Thêm Sản phẩm mới'}
                        </h1>
                        <p className="text-xs text-slate-400 font-bold tracking-widest mt-1">
                            {id ? `ID: ${id}` : 'Điền đầy đủ thông tin cây xanh / sản phẩm'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={() => navigate('/admin/products')}
                            className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                            Hủy bỏ
                        </button>
                        <button type="submit" disabled={loading}
                            className="px-8 py-2.5 bg-admin-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-admin-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center gap-2">
                            {loading && <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                            <span className="material-symbols-outlined text-lg">{id ? 'save' : 'add_circle'}</span>
                            {id ? 'Lưu thay đổi' : 'Tạo sản phẩm'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* ── Left (main) ── */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* ── Basic Info ── */}
                        <section className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <span className="material-symbols-outlined text-admin-primary">info</span>
                                Thông tin cơ bản
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelCls}>Tên sản phẩm *</label>
                                    <input {...register('name')} type="text" placeholder="VD: Cây Bàng Đài Loan"
                                        className={`${inputCls} ${errors.name ? 'ring-2 ring-rose-300' : ''}`} />
                                    {errors.name && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label className={labelCls}>Tên khoa học *</label>
                                    <input {...register('scientificName')} type="text" placeholder="VD: Terminalia mantaly"
                                        className={`${inputCls} italic ${errors.scientificName ? 'ring-2 ring-rose-300' : ''}`} />
                                    {errors.scientificName && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.scientificName.message}</p>}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1">
                                    <label className={labelCls}>Slug (URL) *</label>
                                    {!id && !slugManuallyEdited && (
                                        <span className="text-[10px] font-bold text-admin-primary/60 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-xs">auto_awesome</span>
                                            Tự động theo tên
                                        </span>
                                    )}
                                </div>
                                <input {...register('slug')} type="text" placeholder="cay-bang-dai-loan"
                                    className={inputCls}
                                    onChange={(e) => { register('slug').onChange(e); setSlugManuallyEdited(true); }} />
                                {errors.slug && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.slug.message}</p>}
                            </div>

                            <div>
                                <label className={labelCls}>Mô tả sản phẩm *</label>
                                <textarea {...register('description')} rows={4} placeholder="Mô tả ngắn về đặc điểm, ứng dụng nổi bật..."
                                    className={`${inputCls} resize-none`} />
                                {errors.description && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.description.message}</p>}
                            </div>
                        </section>

                        {/* ── Specs ── */}
                        <section className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <span className="material-symbols-outlined text-admin-primary">science</span>
                                Thông số kỹ thuật
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className={labelCls}>Chiều cao *</label>
                                    <input {...register('height')} type="text" placeholder="VD: 5m - 15m" className={inputCls} />
                                    {errors.height && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.height.message}</p>}
                                </div>
                                <div>
                                    <label className={labelCls}>Tốc độ sinh trưởng *</label>
                                    <select {...register('growth')} className={inputCls}>
                                        {GROWTH_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className={labelCls}>Nhu cầu ánh sáng *</label>
                                    <input {...register('light')} type="text" placeholder="VD: Ưa sáng toàn phần" className={inputCls} />
                                    {errors.light && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.light.message}</p>}
                                </div>
                                <div>
                                    <label className={labelCls}>Nhu cầu nước *</label>
                                    <input {...register('water')} type="text" placeholder="VD: Trung bình" className={inputCls} />
                                    {errors.water && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.water.message}</p>}
                                </div>
                                <div className="sm:col-span-2">
                                    <label className={labelCls}>Đặc điểm lá / hoa *</label>
                                    <input {...register('leaves')} type="text" placeholder="VD: Lá nhỏ, tán xếp tầng đẹp mắt" className={inputCls} />
                                    {errors.leaves && <p className="text-xs text-rose-500 font-bold ml-1 mt-1">{errors.leaves.message}</p>}
                                </div>
                            </div>
                        </section>

                        {/* ── Pros ── */}
                        <DynamicPairSection
                            title="Ưu điểm"
                            icon="thumb_up"
                            fields={prosFields}
                            register={register}
                            fieldName="pros"
                            onAdd={() => appendPro({ title: '', desc: '' })}
                            onRemove={removePro}
                            placeholders={['Tên ưu điểm', 'Mô tả chi tiết...']}
                        />

                        {/* ── Cons ── */}
                        <DynamicPairSection
                            title="Lưu ý / Nhược điểm"
                            icon="warning"
                            fields={consFields}
                            register={register}
                            fieldName="cons"
                            onAdd={() => appendCon({ title: '', desc: '' })}
                            onRemove={removeCon}
                            placeholders={['Tên lưu ý', 'Mô tả chi tiết...']}
                        />

                        {/* ── Care ── */}
                        <section className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-5">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-admin-primary">yard</span>
                                    Hướng dẫn chăm sóc
                                </h3>
                                <button type="button" onClick={() => appendCare({ icon: 'water_drop', title: '', desc: '' })}
                                    className="flex items-center gap-1 text-xs font-bold text-admin-primary hover:bg-admin-primary/10 px-3 py-2 rounded-xl transition-all">
                                    <span className="material-symbols-outlined text-base">add</span> Thêm mục
                                </button>
                            </div>
                            {careFields.map((field, idx) => (
                                <div key={field.id} className="p-5 bg-slate-50 rounded-2xl space-y-3 relative">
                                    <button type="button" onClick={() => removeCare(idx)}
                                        className="absolute top-3 right-3 size-7 flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all">
                                        <span className="material-symbols-outlined text-base">close</span>
                                    </button>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <div>
                                            <label className={labelCls}>Icon (Material)</label>
                                            <select {...register(`care.${idx}.icon` as any)} className={inputCls}>
                                                {CARE_ICONS.map(ic => (
                                                    <option key={ic} value={ic}>{ic}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className={labelCls}>Tiêu đề</label>
                                            <input {...register(`care.${idx}.title` as any)} type="text" placeholder="VD: Tưới nước" className={inputCls} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelCls}>Mô tả</label>
                                        <textarea {...register(`care.${idx}.desc` as any)} rows={2} placeholder="Hướng dẫn chi tiết..." className={`${inputCls} resize-none`} />
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>

                    {/* ── Right Sidebar ── */}
                    <div className="space-y-8">

                        {/* ── Category ── */}
                        <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
                            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                <span className="material-symbols-outlined text-admin-primary">category</span>
                                Danh mục
                            </h3>
                            <div>
                                <label className={labelCls}>Nhóm sản phẩm *</label>
                                <select {...register('categorySlug')} className={inputCls}>
                                    {TREE_CATEGORIES.map(cat => (
                                        <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </section>

                        {/* ── Main Image ── */}
                        <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
                            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                <span className="material-symbols-outlined text-admin-primary">image</span>
                                Ảnh chính *
                            </h3>
                            <ImagePicker
                                value={watchImage || ''}
                                onChange={(url) => setValue('image', url, { shouldValidate: true })}
                                label="Chọn ảnh chính"
                                aspect="aspect-[4/3]"
                            />
                            {errors.image && <p className="text-xs text-rose-500 font-bold text-center">{errors.image.message}</p>}
                            <p className="text-[10px] text-slate-400 text-center italic">Tỉ lệ 4:3 — ảnh hiển thị trên danh sách</p>
                        </section>

                        {/* ── Macro Image ── */}
                        <section className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
                            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                                <span className="material-symbols-outlined text-admin-primary">zoom_in</span>
                                Ảnh chi tiết (Macro)
                                <span className="text-xs font-normal text-slate-400">Tuỳ chọn</span>
                            </h3>
                            <ImagePicker
                                value={watchMacroImage || ''}
                                onChange={(url) => setValue('macroImage', url)}
                                label="Chọn ảnh macro / cận cảnh"
                                aspect="aspect-[4/3]"
                            />
                            <p className="text-[10px] text-slate-400 text-center italic">Ảnh cận cảnh lá, hoa, vỏ cây</p>
                        </section>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
};

// ─── Reusable Pros/Cons section ────────────────────────────────────────────────
const DynamicPairSection = ({
    title, icon, fields, register, fieldName, onAdd, onRemove, placeholders,
}: {
    title: string; icon: string; fields: any[];
    register: any; fieldName: string;
    onAdd: () => void; onRemove: (i: number) => void;
    placeholders: [string, string];
}) => (
    <section className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-5">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-admin-primary">{icon}</span>
                {title}
            </h3>
            <button type="button" onClick={onAdd}
                className="flex items-center gap-1 text-xs font-bold text-admin-primary hover:bg-admin-primary/10 px-3 py-2 rounded-xl transition-all">
                <span className="material-symbols-outlined text-base">add</span> Thêm
            </button>
        </div>
        {fields.map((field, idx) => (
            <div key={field.id} className="p-4 bg-slate-50 rounded-2xl space-y-3 relative">
                <button type="button" onClick={() => onRemove(idx)}
                    className="absolute top-3 right-3 size-7 flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all">
                    <span className="material-symbols-outlined text-base">close</span>
                </button>
                <div>
                    <label className={labelCls}>Tiêu đề</label>
                    <input {...register(`${fieldName}.${idx}.title`)} type="text" placeholder={placeholders[0]} className={inputCls} />
                </div>
                <div>
                    <label className={labelCls}>Mô tả</label>
                    <textarea {...register(`${fieldName}.${idx}.desc`)} rows={2} placeholder={placeholders[1]} className={`${inputCls} resize-none`} />
                </div>
            </div>
        ))}
        {fields.length === 0 && (
            <p className="text-center text-slate-300 text-sm py-4">Chưa có mục nào — nhấn + Thêm để bắt đầu</p>
        )}
    </section>
);

export default ProductForm;
