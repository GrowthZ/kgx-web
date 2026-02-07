import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { servicesService, Service } from '../../src/services/servicesService';
import { useForm, useFieldArray } from 'react-hook-form';
import ImageWithFallback from '../../components/ImageWithFallback';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import MediaManager from '../../src/components/admin/MediaManager';
import Modal from '../../src/components/admin/Modal';
import RichTextEditor from '../../src/components/admin/RichTextEditor';

const schema = yup.object().shape({
    title: yup.string().required('Tiêu đề dịch vụ là bắt buộc'),
    slug: yup.string().required('Slug là bắt buộc'),
    category: yup.string().required('Danh mục là bắt buộc'),
    description: yup.string().required('Mô tả ngắn là bắt buộc'),
    image: yup.string().required('Ảnh đại diện là bắt buộc'),
    metaTitle: yup.string().optional(),
    sections: yup.array().of(yup.object().shape({
        title: yup.string().required('Tiêu đề phần là bắt buộc'),
        subtitle: yup.string().optional(),
        description: yup.string().optional(),
        content: yup.string().optional(),
        image: yup.string().optional(),
        type: yup.string().optional(),
        items: yup.array().of(yup.object().shape({
            icon: yup.string().optional(),
            title: yup.string().required('Tiêu đề mục là bắt buộc'),
            desc: yup.string().required('Mô tả mục là bắt buộc'),
        })).optional(),
    })).optional(),
});

const ServiceForm: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);

    const { register, control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            slug: '',
            category: 'thiet-ke',
            description: '',
            image: '',
            sections: [{ title: 'Tổng quan', content: '' }]
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "sections"
    });

    const watchImage = watch('image');

    useEffect(() => {
        if (id) {
            fetchService();
        }
    }, [id]);

    const fetchService = async () => {
        try {
            setLoading(true);
            const service = await servicesService.getById(id!);
            if (service) {
                Object.keys(service).forEach(key => {
                    if (key !== 'id') {
                        setValue(key as any, (service as any)[key]);
                    }
                });
            }
        } catch (error) {
            console.error('Error fetching service:', error);
            toast.error('Lỗi khi tải thông tin dịch vụ');
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            if (id) {
                await servicesService.update(id, data);
                toast.success('Cập nhật dịch vụ thành công');
            } else {
                await servicesService.create(data);
                toast.success('Tạo dịch vụ mới thành công');
            }
            navigate('/admin/services');
        } catch (error) {
            console.error('Error saving service:', error);
            toast.error('Lỗi khi lưu dịch vụ');
        } finally {
            setLoading(false);
        }
    };

    const handleMediaSelect = (url: string) => {
        setValue('image', url);
        setIsMediaModalOpen(false);
    };

    return (
        <AdminLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 animate-fadeIn pb-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-0 z-20 bg-admin-bg/80 backdrop-blur-md py-4 border-b border-slate-100">
                    <div>
                        <h1 className="text-2xl font-black text-slate-800 tracking-normal">
                            {id ? 'Chỉnh sửa Dịch vụ' : 'Thêm Dịch vụ mới'}
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <button type="button" onClick={() => navigate('/admin/services')} className="px-6 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-sm">Hủy</button>
                        <button type="submit" disabled={loading} className="px-8 py-2.5 bg-admin-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-admin-primary/20">
                            {id ? 'Lưu thay đổi' : 'Tạo dịch vụ'}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400  tracking-widest">Tên dịch vụ</label>
                                    <input {...register('title')} type="text" className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400  tracking-widest">Slug</label>
                                    <input {...register('slug')} type="text" className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400  tracking-widest">Danh mục</label>
                                <select {...register('category')} className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium">
                                    <option value="thiet-ke">Thiết kế</option>
                                    <option value="thi-cong">Thi công</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400  tracking-widest">Mô tả ngắn</label>
                                <textarea {...register('description')} rows={3} className="w-full px-5 py-3.5 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-admin-primary/20 font-medium" />
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800">Các phần nội dung chi tiết</h3>
                            {fields.map((field, index) => (
                                <SectionItem
                                    key={field.id}
                                    index={index}
                                    register={register}
                                    remove={remove}
                                    control={control}
                                    watch={watch}
                                    setValue={setValue}
                                />
                            ))}
                            <button type="button" onClick={() => append({ title: '', content: '', items: [] })} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold hover:border-admin-primary/50 hover:text-admin-primary transition-all">
                                + Thêm phần nội dung
                            </button>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm space-y-6">
                            <h3 className="text-lg font-bold text-slate-800">Ảnh đại diện dịch vụ</h3>
                            <div
                                className="relative aspect-square rounded-3xl overflow-hidden border-2 border-dashed border-slate-200 cursor-pointer"
                                onClick={() => setIsMediaModalOpen(true)}
                            >
                                {watchImage ? (
                                    <ImageWithFallback src={watchImage} className="w-full h-full object-cover" alt="Preview" />
                                ) : (
                                    <div className="size-full flex flex-col items-center justify-center text-slate-300">
                                        <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <Modal isOpen={isMediaModalOpen} onClose={() => setIsMediaModalOpen(false)}>
                <MediaManager onSelect={handleMediaSelect} onClose={() => setIsMediaModalOpen(false)} />
            </Modal>
        </AdminLayout>
    );
};

const SectionItem: React.FC<{
    index: number;
    register: any;
    remove: any;
    control: any;
    watch: any;
    setValue: any;
}> = ({ index, register, remove, control, watch, setValue }) => {
    const { fields: itemFields, append: appendItem, remove: removeItem } = useFieldArray({
        control,
        name: `sections.${index}.items`
    });

    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
    const sectionImage = watch(`sections.${index}.image`);

    return (
        <div className="p-8 bg-slate-50 rounded-[2rem] space-y-6 relative group border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <button type="button" onClick={() => remove(index)} className="absolute top-6 right-6 text-rose-400 hover:text-rose-600 transition-colors">
                <span className="material-symbols-outlined">delete</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400  tracking-widest leading-normal">Tiêu đề phần {index + 1}</label>
                    <input
                        {...register(`sections.${index}.title`)}
                        placeholder="Tiêu đề chính (ví dụ: GIẢI PHÁP KGX TRIỂN KHAI)"
                        className="w-full px-4 py-3 bg-white rounded-xl border-none font-bold shadow-sm focus:ring-2 focus:ring-admin-primary/20 transition-all text-slate-700"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400  tracking-widest leading-normal">Subtitle</label>
                    <input
                        {...register(`sections.${index}.subtitle`)}
                        placeholder="Tiêu đề phụ (ví dụ: Giải pháp kỹ thuật)"
                        className="w-full px-4 py-3 bg-white rounded-xl border-none font-medium shadow-sm focus:ring-2 focus:ring-admin-primary/20 transition-all text-slate-600"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400  tracking-widest leading-normal">Mô tả phần</label>
                        <textarea
                            {...register(`sections.${index}.description`)}
                            rows={3}
                            placeholder="Mô tả chi tiết về giải pháp này..."
                            className="w-full px-4 py-3 bg-white rounded-xl border-none font-medium shadow-sm focus:ring-2 focus:ring-admin-primary/20 transition-all text-slate-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400  tracking-widest leading-normal">Nội dung tự do (HTML)</label>
                        <RichTextEditor
                            value={watch(`sections.${index}.content`) || ''}
                            onChange={(val) => setValue(`sections.${index}.content`, val)}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400  tracking-widest leading-normal block">Ảnh minh họa phần</label>
                    <div
                        onClick={() => setIsMediaModalOpen(true)}
                        className="aspect-square bg-white rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer overflow-hidden group/img relative shadow-sm"
                    >
                        {sectionImage ? (
                            <>
                                <ImageWithFallback src={sectionImage} className="w-full h-full object-cover" alt="Section" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white">
                                    <span className="material-symbols-outlined">image_search</span>
                                </div>
                            </>
                        ) : (
                            <div className="text-slate-300 flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                                <span className="text-[10px] font-bold  tracking-wider">Chọn ảnh</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200/60">
                <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-slate-400  tracking-widest">Danh sách các mục (Items)</label>
                    <button
                        type="button"
                        onClick={() => appendItem({ title: '', desc: '', icon: 'check_circle' })}
                        className="text-xs font-bold text-admin-primary hover:text-admin-primary/80 flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">add_circle</span>
                        Thêm mục mới
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {itemFields.map((item, itemIdx) => (
                        <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 relative">
                            <button
                                type="button"
                                onClick={() => removeItem(itemIdx)}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-white shadow-md border border-slate-100 rounded-full text-rose-400 hover:text-rose-600 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                            >
                                <span className="material-symbols-outlined text-sm">close</span>
                            </button>

                            <div className="w-12 space-y-2">
                                <label className="text-[8px] font-bold text-slate-300  block text-center">Icon</label>
                                <div className="aspect-square bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
                                    <input
                                        {...register(`sections.${index}.items.${itemIdx}.icon`)}
                                        className="w-full h-full bg-transparent border-none text-center text-admin-primary focus:ring-0 text-sm font-icon"
                                        placeholder="hub"
                                    />
                                </div>
                                <a href="https://fonts.google.com/icons" target="_blank" rel="noreferrer" className="text-[8px] text-slate-300 hover:text-admin-primary block text-center underline italic">Icons list</a>
                            </div>

                            <div className="flex-1 space-y-3">
                                <input
                                    {...register(`sections.${index}.items.${itemIdx}.title`)}
                                    placeholder="Tiêu đề mục (ví dụ: Giao thông – Cây xanh)"
                                    className="w-full px-0 py-0 bg-transparent border-none font-bold text-slate-700 placeholder:text-slate-300 focus:ring-0"
                                />
                                <input
                                    {...register(`sections.${index}.items.${itemIdx}.desc`)}
                                    placeholder="Mô tả ngắn về mục này..."
                                    className="w-full px-0 py-0 bg-transparent border-none text-xs text-slate-500 placeholder:text-slate-200 focus:ring-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isMediaModalOpen} onClose={() => setIsMediaModalOpen(false)}>
                <MediaManager
                    onSelect={(url) => {
                        setValue(`sections.${index}.image`, url);
                        setIsMediaModalOpen(false);
                    }}
                    onClose={() => setIsMediaModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default ServiceForm;
