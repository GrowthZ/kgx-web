import { useState, useEffect, ReactNode } from 'react';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';
import toast from 'react-hot-toast';

interface CompanySettings {
    name: string; taxId: string; address: string; hotline: string; email: string;
    website: string; description: string; founded: string; employees: string;
    facebook: string; youtube: string; tiktok: string; zalo: string;
    googleMapsEmbed: string; defaultMetaTitle: string; defaultMetaDesc: string;
    notifyOnContact: boolean; notifyOnOrder: boolean; notifyEmail: string;
}

const DEFAULT: CompanySettings = {
    name: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN MAZTECH', taxId: '4601597927',
    address: 'Tổ 11, Phường Trung Thành, TP. Thái Nguyên', hotline: '0979.xxx.xxx',
    email: 'kgxvietnam@gmail.com', website: 'https://kgxvn.vn',
    description: 'Chuyên thiết kế, thi công và cung cấp cây xanh cảnh quan trên toàn quốc.',
    founded: '2018', employees: '50+',
    facebook: '', youtube: '', tiktok: '', zalo: '', googleMapsEmbed: '',
    defaultMetaTitle: 'KGX VN – Cây Xanh Cảnh Quan Chuyên Nghiệp',
    defaultMetaDesc: 'Thiết kế, thi công và cung cấp cây xanh cảnh quan cao cấp tại Việt Nam.',
    notifyOnContact: true, notifyOnOrder: false, notifyEmail: '',
};

const inputCls = 'w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-medium focus:ring-2 focus:ring-admin-primary/20 outline-none transition-all';
const labelCls = 'text-[10px] font-bold text-slate-400 tracking-widest ml-1 block mb-1';

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
    <div className="space-y-1"><label className={labelCls}>{label}</label>{children}</div>
);

const Toggle = ({ label, desc, checked, onChange }: { label: string; desc: string; checked: boolean; onChange: (v: boolean) => void }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-50">
        <div><p className="text-sm font-bold text-slate-700">{label}</p><p className="text-xs text-slate-400">{desc}</p></div>
        <button type="button" onClick={() => onChange(!checked)}
            className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${checked ? 'bg-admin-primary' : 'bg-slate-200'}`}>
            <span className={`absolute top-0.5 left-0.5 size-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-6' : ''}`} />
        </button>
    </div>
);

const AdminSettingsPage = () => {
    const [s, setS] = useState<CompanySettings>(DEFAULT);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [tab, setTab] = useState<'company' | 'social' | 'seo' | 'notify'>('company');

    useEffect(() => {
        getDoc(doc(db, 'settings', 'company')).then(snap => {
            if (snap.exists()) setS({ ...DEFAULT, ...snap.data() as CompanySettings });
        }).finally(() => setLoading(false));
    }, []);

    const set = (k: keyof CompanySettings, v: any) => setS(p => ({ ...p, [k]: v }));

    const save = async () => {
        try {
            setSaving(true);
            await setDoc(doc(db, 'settings', 'company'), { ...s, updatedAt: serverTimestamp() });
            toast.success('Đã lưu cài đặt!');
        } catch { toast.error('Lỗi khi lưu'); } finally { setSaving(false); }
    };

    const TABS = [
        { id: 'company', label: 'Công ty', icon: 'business' },
        { id: 'social', label: 'Mạng xã hội', icon: 'share' },
        { id: 'seo', label: 'SEO', icon: 'search' },
        { id: 'notify', label: 'Thông báo', icon: 'notifications' },
    ] as const;

    return (
        <AdminLayout>
            <div className="max-w-3xl space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-2xl font-extrabold text-slate-900">Cài đặt hệ thống</h2>
                        <p className="text-slate-500 mt-1 text-sm">Thông tin công ty, mạng xã hội và thông báo.</p>
                    </div>
                    <button onClick={save} disabled={saving || loading}
                        className="flex items-center gap-2 bg-admin-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all disabled:opacity-50">
                        {saving ? <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <span className="material-symbols-outlined text-lg">save</span>}
                        Lưu thay đổi
                    </button>
                </div>

                {loading ? (
                    <div className="py-20 flex items-center justify-center">
                        <div className="size-10 border-2 border-admin-primary/30 border-t-admin-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <>
                        {/* Tabs */}
                        <div className="flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit">
                            {TABS.map(t => (
                                <button key={t.id} onClick={() => setTab(t.id)}
                                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${tab === t.id ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>
                                    <span className="material-symbols-outlined text-base">{t.icon}</span>{t.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab: Company */}
                        {tab === 'company' && (
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5">
                                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 pb-4 border-b border-slate-100">
                                    <span className="material-symbols-outlined text-admin-primary">business</span> Thông tin công ty
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="md:col-span-2">
                                        <Field label="TÊN CÔNG TY">
                                            <input value={s.name} onChange={e => set('name', e.target.value)} className={inputCls} />
                                        </Field>
                                    </div>
                                    <Field label="MÃ SỐ THUẾ"><input value={s.taxId} onChange={e => set('taxId', e.target.value)} className={inputCls} /></Field>
                                    <Field label="NĂM THÀNH LẬP"><input value={s.founded} onChange={e => set('founded', e.target.value)} className={inputCls} /></Field>
                                    <div className="md:col-span-2">
                                        <Field label="ĐỊA CHỈ"><input value={s.address} onChange={e => set('address', e.target.value)} className={inputCls} /></Field>
                                    </div>
                                    <Field label="HOTLINE"><input value={s.hotline} onChange={e => set('hotline', e.target.value)} className={inputCls} /></Field>
                                    <Field label="EMAIL"><input value={s.email} onChange={e => set('email', e.target.value)} type="email" className={inputCls} /></Field>
                                    <Field label="WEBSITE"><input value={s.website} onChange={e => set('website', e.target.value)} className={inputCls} /></Field>
                                    <Field label="QUY MÔ"><input value={s.employees} onChange={e => set('employees', e.target.value)} className={inputCls} /></Field>
                                    <div className="md:col-span-2">
                                        <Field label="MÔ TẢ CÔNG TY">
                                            <textarea value={s.description} onChange={e => set('description', e.target.value)} rows={3} className={`${inputCls} resize-none`} />
                                        </Field>
                                    </div>
                                    <div className="md:col-span-2">
                                        <Field label="GOOGLE MAPS EMBED URL">
                                            <input value={s.googleMapsEmbed} onChange={e => set('googleMapsEmbed', e.target.value)} className={inputCls} placeholder="https://maps.google.com/maps?..." />
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab: Social */}
                        {tab === 'social' && (
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5">
                                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 pb-4 border-b border-slate-100">
                                    <span className="material-symbols-outlined text-admin-primary">share</span> Mạng xã hội & Liên kết
                                </h3>
                                {[
                                    { k: 'facebook', label: 'FACEBOOK PAGE', icon: '🔵', ph: 'https://facebook.com/kgxvietnam' },
                                    { k: 'youtube', label: 'YOUTUBE CHANNEL', icon: '🔴', ph: 'https://youtube.com/@kgxvietnam' },
                                    { k: 'tiktok', label: 'TIKTOK', icon: '⚫', ph: 'https://tiktok.com/@kgxvietnam' },
                                    { k: 'zalo', label: 'ZALO OA', icon: '🔷', ph: 'https://zalo.me/...' },
                                ].map(({ k, label, icon, ph }) => (
                                    <Field key={k} label={label}>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base">{icon}</span>
                                            <input value={(s as any)[k]} onChange={e => set(k as any, e.target.value)} className={`${inputCls} pl-10`} placeholder={ph} />
                                        </div>
                                    </Field>
                                ))}
                            </div>
                        )}

                        {/* Tab: SEO */}
                        {tab === 'seo' && (
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5">
                                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 pb-4 border-b border-slate-100">
                                    <span className="material-symbols-outlined text-admin-primary">search</span> Mặc định SEO
                                </h3>
                                <Field label="META TITLE MẶC ĐỊNH">
                                    <input value={s.defaultMetaTitle} onChange={e => set('defaultMetaTitle', e.target.value)} className={inputCls} maxLength={70} />
                                    <p className="text-[10px] text-slate-400 ml-1 mt-1">{s.defaultMetaTitle.length}/70 ký tự</p>
                                </Field>
                                <Field label="META DESCRIPTION MẶC ĐỊNH">
                                    <textarea value={s.defaultMetaDesc} onChange={e => set('defaultMetaDesc', e.target.value)} rows={3} className={`${inputCls} resize-none`} maxLength={160} />
                                    <p className="text-[10px] text-slate-400 ml-1 mt-1">{s.defaultMetaDesc.length}/160 ký tự</p>
                                </Field>
                                <div className="bg-slate-50 rounded-2xl p-5 space-y-1">
                                    <p className="text-[10px] font-bold text-slate-400 tracking-widest mb-2">XEM TRƯỚC GOOGLE</p>
                                    <p className="text-[11px] text-emerald-700">{s.website}</p>
                                    <p className="text-blue-700 text-base font-medium line-clamp-1">{s.defaultMetaTitle}</p>
                                    <p className="text-slate-600 text-xs line-clamp-2">{s.defaultMetaDesc}</p>
                                </div>
                            </div>
                        )}

                        {/* Tab: Notifications */}
                        {tab === 'notify' && (
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-2">
                                <h3 className="text-base font-bold text-slate-800 flex items-center gap-2 pb-4 border-b border-slate-100 mb-2">
                                    <span className="material-symbols-outlined text-admin-primary">notifications</span> Cài đặt thông báo
                                </h3>
                                <Toggle label="Khách hàng gửi form liên hệ" desc="Nhận email khi có yêu cầu tư vấn mới" checked={s.notifyOnContact} onChange={v => set('notifyOnContact', v)} />
                                <Toggle label="Đơn hàng / Book lịch mới" desc="Nhận email khi có đơn hàng cần xử lý" checked={s.notifyOnOrder} onChange={v => set('notifyOnOrder', v)} />
                                {(s.notifyOnContact || s.notifyOnOrder) && (
                                    <div className="pt-2">
                                        <Field label="EMAIL NHẬN THÔNG BÁO">
                                            <input value={s.notifyEmail} onChange={e => set('notifyEmail', e.target.value)} type="email" className={inputCls} placeholder="admin@kgxvn.vn" />
                                        </Field>
                                    </div>
                                )}
                                <div className="p-4 bg-amber-50 rounded-2xl flex gap-3 mt-4">
                                    <span className="material-symbols-outlined text-amber-500 text-xl shrink-0">info</span>
                                    <p className="text-xs text-amber-700">Cần cấu hình Firebase Trigger Email extension để gửi email tự động.</p>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminSettingsPage;
