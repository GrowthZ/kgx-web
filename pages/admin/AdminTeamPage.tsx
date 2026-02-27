import { useState, useEffect } from 'react';
import AdminLayout from '../../src/components/admin/AdminLayout';
import { useAuth } from '../../src/contexts/AuthContext';
import {
    collection, addDoc, getDocs, doc, updateDoc,
    deleteDoc, serverTimestamp, query, orderBy,
} from 'firebase/firestore';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    getAuth,
} from 'firebase/auth';
import { db } from '../../src/lib/firebase';
import toast from 'react-hot-toast';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface TeamMember {
    id?: string;
    uid?: string;
    displayName: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
    avatar?: string;
    active: boolean;
    createdAt?: any;
    lastLogin?: any;
}

const ROLES = [
    { value: 'admin', label: 'Quản trị viên', color: 'bg-rose-100 text-rose-700', icon: 'admin_panel_settings' },
    { value: 'editor', label: 'Biên tập viên', color: 'bg-blue-100 text-blue-700', icon: 'edit_note' },
    { value: 'viewer', label: 'Chỉ xem', color: 'bg-slate-100 text-slate-600', icon: 'visibility' },
] as const;

const getRoleBadge = (role: string) => ROLES.find(r => r.value === role) || ROLES[2];

// ─── Empty Form State ─────────────────────────────────────────────────────────
const EMPTY_FORM = { displayName: '', email: '', role: 'editor' as const, password: '' };

// ─── Component ────────────────────────────────────────────────────────────────
const AdminTeamPage = () => {
    const { user } = useAuth();
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editMember, setEditMember] = useState<TeamMember | null>(null);
    const [form, setForm] = useState(EMPTY_FORM);
    const [saving, setSaving] = useState(false);
    const [showPass, setShowPass] = useState(false);

    useEffect(() => { loadMembers(); }, []);

    const loadMembers = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, 'team_members'), orderBy('createdAt', 'desc'));
            const snap = await getDocs(q);
            setMembers(snap.docs.map(d => ({ id: d.id, ...d.data() } as TeamMember)));
        } catch (e) {
            toast.error('Lỗi tải danh sách thành viên');
        } finally {
            setLoading(false);
        }
    };

    const openCreate = () => {
        setEditMember(null);
        setForm(EMPTY_FORM);
        setShowModal(true);
    };

    const openEdit = (m: TeamMember) => {
        setEditMember(m);
        setForm({ displayName: m.displayName, email: m.email, role: m.role, password: '' });
        setShowModal(true);
    };

    const handleSave = async () => {
        if (!form.displayName.trim() || !form.email.trim()) { toast.error('Vui lòng điền đầy đủ thông tin'); return; }
        try {
            setSaving(true);
            if (editMember) {
                // Update metadata in Firestore only
                await updateDoc(doc(db, 'team_members', editMember.id!), {
                    displayName: form.displayName,
                    role: form.role,
                    updatedAt: serverTimestamp(),
                });
                toast.success('Cập nhật thành viên thành công');
            } else {
                if (!form.password || form.password.length < 6) { toast.error('Mật khẩu phải ít nhất 6 ký tự'); return; }
                // Create Firebase Auth user (client-side — requires Firebase project allows this)
                const auth = getAuth();
                const credential = await createUserWithEmailAndPassword(auth, form.email, form.password);
                // Save member metadata to Firestore
                await addDoc(collection(db, 'team_members'), {
                    uid: credential.user.uid,
                    displayName: form.displayName,
                    email: form.email,
                    role: form.role,
                    active: true,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(form.displayName)}&background=2d6a4f&color=fff&size=128`,
                    createdAt: serverTimestamp(),
                });
                toast.success('Tạo tài khoản thành công');
            }
            setShowModal(false);
            setForm(EMPTY_FORM);
            loadMembers();
        } catch (e: any) {
            const msg = e?.code === 'auth/email-already-in-use' ? 'Email đã được sử dụng'
                : e?.code === 'auth/weak-password' ? 'Mật khẩu quá yếu'
                    : 'Lỗi khi lưu thông tin';
            toast.error(msg);
        } finally {
            setSaving(false);
        }
    };

    const handleToggleActive = async (m: TeamMember) => {
        if (m.email === user?.email) { toast.error('Không thể vô hiệu hóa tài khoản của chính mình'); return; }
        try {
            await updateDoc(doc(db, 'team_members', m.id!), { active: !m.active });
            toast.success(m.active ? 'Đã vô hiệu hóa tài khoản' : 'Đã kích hoạt tài khoản');
            loadMembers();
        } catch { toast.error('Lỗi khi thay đổi trạng thái'); }
    };

    const handleDelete = async (m: TeamMember) => {
        if (m.email === user?.email) { toast.error('Không thể xóa tài khoản của chính mình'); return; }
        if (!window.confirm(`Xóa thành viên "${m.displayName}" khỏi hệ thống?`)) return;
        try {
            await deleteDoc(doc(db, 'team_members', m.id!));
            toast.success('Đã xóa thành viên');
            loadMembers();
        } catch { toast.error('Lỗi khi xóa thành viên'); }
    };

    const handleResetPassword = async (m: TeamMember) => {
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, m.email);
            toast.success(`Đã gửi email đặt lại mật khẩu đến ${m.email}`);
        } catch { toast.error('Lỗi khi gửi email reset mật khẩu'); }
    };

    return (
        <AdminLayout>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-normal text-slate-900">Quản lý Đội ngũ</h2>
                        <p className="text-slate-500 mt-1 text-sm">Tạo và quản lý tài khoản truy cập hệ thống Admin.</p>
                    </div>
                    <button onClick={openCreate}
                        className="flex items-center gap-2 bg-admin-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all">
                        <span className="material-symbols-outlined">person_add</span> Thêm thành viên
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Tổng thành viên', value: members.length, icon: 'group', color: 'text-blue-600 bg-blue-50' },
                        { label: 'Đang hoạt động', value: members.filter(m => m.active).length, icon: 'check_circle', color: 'text-emerald-600 bg-emerald-50' },
                        { label: 'Quản trị viên', value: members.filter(m => m.role === 'admin').length, icon: 'admin_panel_settings', color: 'text-rose-600 bg-rose-50' },
                        { label: 'Biên tập viên', value: members.filter(m => m.role === 'editor').length, icon: 'edit_note', color: 'text-violet-600 bg-violet-50' },
                    ].map(stat => (
                        <div key={stat.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className={`size-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                                <span className="material-symbols-outlined text-xl">{stat.icon}</span>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-slate-800">{stat.value}</p>
                                <p className="text-xs font-bold text-slate-400 tracking-wide">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Member Table */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                    {loading ? (
                        <div className="p-20 text-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-admin-primary mx-auto" />
                            <p className="mt-4 text-slate-400 font-medium text-sm">Đang tải...</p>
                        </div>
                    ) : members.length === 0 ? (
                        <div className="p-20 text-center">
                            <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-5 text-slate-300">
                                <span className="material-symbols-outlined text-4xl">group</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-700">Chưa có thành viên nào</h3>
                            <p className="text-slate-400 mt-2 text-sm">Nhấn "+ Thêm thành viên" để tạo tài khoản đầu tiên.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-100">
                                        <th className="px-6 py-4 text-[10px] font-extrabold text-slate-400 tracking-widest">THÀNH VIÊN</th>
                                        <th className="px-4 py-4 text-[10px] font-extrabold text-slate-400 tracking-widest">VAI TRÒ</th>
                                        <th className="px-4 py-4 text-[10px] font-extrabold text-slate-400 tracking-widest text-center">TRẠNG THÁI</th>
                                        <th className="px-6 py-4 text-[10px] font-extrabold text-slate-400 tracking-widest text-right">THAO TÁC</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {members.map(m => {
                                        const badge = getRoleBadge(m.role);
                                        const isMe = m.email === user?.email;
                                        return (
                                            <tr key={m.id} className={`hover:bg-slate-50/50 transition-colors ${!m.active ? 'opacity-50' : ''}`}>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-10 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
                                                            <img src={m.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.displayName)}&background=2d6a4f&color=fff`}
                                                                alt={m.displayName} className="w-full h-full object-cover" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                                                                {m.displayName}
                                                                {isMe && <span className="text-[10px] font-bold text-admin-primary bg-admin-primary/10 px-2 py-0.5 rounded-full">Bạn</span>}
                                                            </p>
                                                            <p className="text-xs text-slate-400">{m.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full ${badge.color}`}>
                                                        <span className="material-symbols-outlined text-xs">{badge.icon}</span>
                                                        {badge.label}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${m.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                                        <span className={`size-1.5 rounded-full ${m.active ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                                                        {m.active ? 'Hoạt động' : 'Tạm khóa'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-end gap-1">
                                                        <button onClick={() => openEdit(m)} title="Chỉnh sửa"
                                                            className="size-8 flex items-center justify-center text-slate-400 hover:text-admin-primary hover:bg-admin-primary/10 rounded-lg transition-all">
                                                            <span className="material-symbols-outlined text-lg">edit</span>
                                                        </button>
                                                        <button onClick={() => handleResetPassword(m)} title="Gửi reset mật khẩu"
                                                            className="size-8 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all">
                                                            <span className="material-symbols-outlined text-lg">lock_reset</span>
                                                        </button>
                                                        {!isMe && (
                                                            <>
                                                                <button onClick={() => handleToggleActive(m)} title={m.active ? 'Vô hiệu hóa' : 'Kích hoạt'}
                                                                    className="size-8 flex items-center justify-center text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all">
                                                                    <span className="material-symbols-outlined text-lg">{m.active ? 'block' : 'check_circle'}</span>
                                                                </button>
                                                                <button onClick={() => handleDelete(m)} title="Xóa"
                                                                    className="size-8 flex items-center justify-center text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                                                                    <span className="material-symbols-outlined text-lg">delete</span>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* ── Modal: Create / Edit ── */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && setShowModal(false)}>
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 space-y-5 animate-fadeIn">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-800">
                                {editMember ? 'Chỉnh sửa thành viên' : 'Thêm thành viên mới'}
                            </h3>
                            <button onClick={() => setShowModal(false)} className="size-9 flex items-center justify-center rounded-xl hover:bg-slate-50 text-slate-400 transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 tracking-widest ml-1 block mb-1">HỌ TÊN</label>
                                <input value={form.displayName} onChange={e => setForm(f => ({ ...f, displayName: e.target.value }))}
                                    type="text" placeholder="Nguyễn Văn A"
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-medium focus:ring-2 focus:ring-admin-primary/20 outline-none" />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 tracking-widest ml-1 block mb-1">EMAIL</label>
                                <input value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    type="email" placeholder="email@kgxvn.com"
                                    disabled={!!editMember}
                                    className="w-full px-4 py-3 bg-slate-50 rounded-xl text-sm font-medium focus:ring-2 focus:ring-admin-primary/20 outline-none disabled:opacity-50" />
                            </div>
                            {!editMember && (
                                <div>
                                    <label className="text-[10px] font-bold text-slate-400 tracking-widest ml-1 block mb-1">MẬT KHẨU</label>
                                    <div className="relative">
                                        <input value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                                            type={showPass ? 'text' : 'password'} placeholder="Ít nhất 6 ký tự"
                                            className="w-full px-4 py-3 pr-11 bg-slate-50 rounded-xl text-sm font-medium focus:ring-2 focus:ring-admin-primary/20 outline-none" />
                                        <button type="button" onClick={() => setShowPass(p => !p)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                            <span className="material-symbols-outlined text-lg">{showPass ? 'visibility_off' : 'visibility'}</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div>
                                <label className="text-[10px] font-bold text-slate-400 tracking-widest ml-1 block mb-1">VAI TRÒ</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {ROLES.map(r => (
                                        <button type="button" key={r.value}
                                            onClick={() => setForm(f => ({ ...f, role: r.value as any }))}
                                            className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 transition-all text-xs font-bold ${form.role === r.value ? 'border-admin-primary bg-admin-primary/5 text-admin-primary' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}>
                                            <span className="material-symbols-outlined text-lg">{r.icon}</span>
                                            {r.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button onClick={() => setShowModal(false)} type="button"
                                className="flex-1 py-3 border border-slate-200 rounded-xl font-bold text-sm text-slate-600 hover:bg-slate-50 transition-all">
                                Hủy
                            </button>
                            <button onClick={handleSave} disabled={saving}
                                className="flex-1 py-3 bg-admin-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-admin-primary/20 hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-2">
                                {saving && <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                {editMember ? 'Lưu thay đổi' : 'Tạo tài khoản'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AdminLayout>
    );
};

export default AdminTeamPage;
