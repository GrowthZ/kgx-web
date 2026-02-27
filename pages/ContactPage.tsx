import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../src/lib/firebase';
import { contactService } from '../src/services/contactService';
import toast from 'react-hot-toast';

interface CompanySettings {
    name: string;
    address: string;
    hotline: string;
    email: string;
    zalo: string;
    googleMapsEmbed: string;
}

const ContactPage: React.FC = () => {
    // Form State
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [projectType, setProjectType] = useState('Biệt thự sân vườn');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [services, setServices] = useState<string[]>([]);

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Settings State
    const [settings, setSettings] = useState<CompanySettings>({
        name: 'CÔNG TY CP KHÔNG GIAN XANH THÁI NGUYÊN',
        address: '12e khu dân cư số 9, phường Gia Sàng, tỉnh Thái Nguyên , Thái Nguyên, Vietnam',
        hotline: '0868 462 462',
        email: 'khonggianxanhthainguyen@gmail.com',
        zalo: 'https://zalo.me/0868462462',
        googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1855.15686453779!2d105.84880824999999!3d21.57367365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313526c8efb99d9d%3A0x77b2f58c01bd6c83!2zS2h1IGTDom4gY8awIHPhu5EgOSwgR2lhIFPDoG5nLCBUcC4gVGjDoWkgTmd1ecOqbiwgVGjDoWkgTmd1ecOqbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1772230310507!5m2!1svi!2s'
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const snap = await getDoc(doc(db, 'settings', 'company'));
                if (snap.exists()) {
                    setSettings(prev => ({ ...prev, ...snap.data() as CompanySettings }));
                }
            } catch (error) {
                console.error('Error fetching settings:', error);
            }
        };
        fetchSettings();
    }, []);

    const handleServiceToggle = (service: string) => {
        setServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            toast.error('Vui lòng điền Họ tên và Số điện thoại!');
            return;
        }

        setIsSubmitting(true);
        try {
            const finalMessage = `
**Loại công trình:** ${projectType}
**Khu vực:** ${location || 'Không xác định'}
**Nhu cầu dịch vụ:** ${services.length > 0 ? services.join(', ') : 'Chưa chọn'}
**Lời nhắn chi tiết:**
${message}
            `.trim();

            await contactService.submitContactForm({
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim(),
                message: finalMessage,
                subject: `[Web] Yêu cầu tư vấn - ${projectType}`
            });

            toast.success('Gửi yêu cầu thành công, chúng tôi sẽ liên hệ lại sớm nhất!');

            // Reset form
            setName('');
            setPhone('');
            setEmail('');
            setLocation('');
            setMessage('');
            setServices([]);

        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('Có lỗi xảy ra, vui lòng thử lại sau!');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#f8f8f6] text-[#181b0d] flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-[#1d2210] overflow-hidden py-16 lg:py-24">
                    {/* Abstract Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#a4d411 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Hero Content */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#a4d411]/20 rounded-full w-fit">
                                        <span className="size-2 rounded-full bg-[#a4d411] animate-pulse"></span>
                                        <span className="text-[#a4d411] text-xs font-bold tracking-wider">Tư vấn miễn phí</span>
                                    </div>
                                    <h1 className="text-white text-3xl lg:text-4xl font-black tracking-normal">
                                        <span className='block pb-3'>LIÊN HỆ & NHẬN</span>
                                        <span className="mt-1 text-[#a4d411]">TƯ VẤN DỰ ÁN</span>
                                    </h1>
                                    <p className="text-gray-300 text-lg max-w-lg">
                                        Giải pháp cảnh quan toàn diện, thi công chuyên nghiệp và bảo hành dài hạn cho mọi công trình của bạn.
                                    </p>
                                </div>
                                {/* Trust Bullets */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#a4d411]/20 text-[#a4d411]">
                                            <span className="material-symbols-outlined text-xl">check</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">Đúng nhu cầu, đúng ngân sách</h4>
                                            <p className="text-gray-400 text-sm">Tối ưu chi phí với các gói giải pháp linh hoạt.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#a4d411]/20 text-[#a4d411]">
                                            <span className="material-symbols-outlined text-xl">description</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">Báo giá minh bạch, chi tiết</h4>
                                            <p className="text-gray-400 text-sm">Không phát sinh chi phí ẩn trong quá trình thực hiện.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-1 rounded-full bg-[#a4d411]/20 text-[#a4d411]">
                                            <span className="material-symbols-outlined text-xl">handshake</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-base">Đồng hành trọn đời</h4>
                                            <p className="text-gray-400 text-sm">Bảo hành, bảo trì và chăm sóc cảnh quan dài hạn.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Hero Image */}
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-[#a4d411]/20 rounded-2xl blur-lg transition-all duration-500 group-hover:bg-[#a4d411]/40"></div>
                                <div className="relative w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                                    <img alt="Professional construction team discussing plans on a sunny outdoor site" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDepEpyRCQ3CfhBb4Yy7PAn169OBaHTb_AwPJyGwqw8DUVoJJ2rS5qGsSWefeEd_l27E_VIAe9R8IlzxHfgTIe3mfSt12gHAwlFiRKzo-Hd1R1BV1jgGyLOcHGbV2HIVv1OXoC9sC66mD4ygnN0B8aX6XQRidGicJTqZrq0DWfLPT1L6VokiAN_FZQ7I_tP1VMW5cvoDRecuzbl4i5hFQluGcdJjF5qtqG-idQ_5-8mslB3OP5oIoLeDE1ANZiUsGXgwLE9a7n1lCA" />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[200px] border border-gray-100">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                        <span className="material-symbols-outlined">emoji_events</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-medium">Kinh nghiệm</p>
                                        <p className="text-[#1d2210] font-bold text-lg">10+ Năm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Options & Form */}
                <section className="py-24 border-b border-[#eef4e7]">
                    <div className="container px-4 md:px-8">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                            {/* Left Column: Form (7 cols) */}
                            <div className="lg:col-span-7">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-2xl font-bold text-[#1d2210] mb-2">Gửi thông tin dự án</h2>
                                        <p className="text-gray-600">Hãy để lại thông tin, đội ngũ kỹ sư của KGX sẽ liên hệ tư vấn trong vòng 30 phút.</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="name">Họ và tên *</label>
                                                <input required value={name} onChange={e => setName(e.target.value)} className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none border" id="name" placeholder="Nguyễn Văn A" type="text" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="phone">Số điện thoại *</label>
                                                <input required value={phone} onChange={e => setPhone(e.target.value)} className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none border" id="phone" placeholder="0912 xxx xxx" type="tel" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700" htmlFor="email">Email</label>
                                            <input value={email} onChange={e => setEmail(e.target.value)} className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none border" id="email" placeholder="example@gmail.com" type="email" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="project-type">Loại công trình</label>
                                                <div className="relative">
                                                    <select value={projectType} onChange={e => setProjectType(e.target.value)} className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none appearance-none cursor-pointer border" id="project-type">
                                                        <option value="Biệt thự sân vườn">Biệt thự sân vườn</option>
                                                        <option value="Khu nghỉ dưỡng (Resort)">Khu nghỉ dưỡng (Resort)</option>
                                                        <option value="Quán Cafe / Nhà hàng">Quán Cafe / Nhà hàng</option>
                                                        <option value="Công trình công cộng">Công trình công cộng</option>
                                                        <option value="Khác">Khác</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                        <span className="material-symbols-outlined">expand_more</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700" htmlFor="location">Khu vực</label>
                                                <input value={location} onChange={e => setLocation(e.target.value)} className="w-full h-12 px-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none border" id="location" placeholder="Ví dụ: Thái Nguyên, Hà Nội..." type="text" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-semibold text-gray-700">Nhu cầu dịch vụ</label>
                                            <div className="flex flex-wrap gap-4">
                                                {[
                                                    'Thiết kế cảnh quan',
                                                    'Thi công trọn gói',
                                                    'Bảo dưỡng định kỳ',
                                                    'Cung cấp vật tư'
                                                ].map(svc => (
                                                    <label key={svc} className="inline-flex items-center gap-2 cursor-pointer group">
                                                        <input
                                                            checked={services.includes(svc)}
                                                            onChange={() => handleServiceToggle(svc)}
                                                            className="w-5 h-5 rounded border-gray-300 text-[#a4d411] focus:ring-[#a4d411]/20 transition-all"
                                                            type="checkbox"
                                                        />
                                                        <span className="text-sm text-gray-600 group-hover:text-[#a4d411] transition-colors">{svc}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700" htmlFor="message">Lời nhắn chi tiết</label>
                                            <textarea value={message} onChange={e => setMessage(e.target.value)} className="w-full p-4 rounded-lg border-gray-200 bg-gray-50 focus:border-[#a4d411] focus:ring-[#a4d411]/20 transition-all text-sm outline-none resize-none border" id="message" placeholder="Mô tả sơ bộ về ý tưởng, diện tích hoặc ngân sách dự kiến..." rows={4}></textarea>
                                        </div>
                                        <button disabled={isSubmitting} className="w-full h-14 bg-[#a4d411] hover:bg-[#8cb60e] text-[#1d2210] font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50" type="submit">
                                            <span>{isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn'}</span>
                                            {!isSubmitting && <span className="material-symbols-outlined">send</span>}
                                        </button>
                                        <p className="text-xs text-center text-gray-500">Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.</p>
                                    </form>
                                </div>
                            </div>
                            {/* Right Column: Info & Sidebar (5 cols) */}
                            <div className="lg:col-span-5 space-y-8">
                                {/* Contact Info Card */}
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-[#1d2210] mb-6">Thông tin liên hệ</h3>
                                    <div className="space-y-6">
                                        {/* Address */}
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1d2210]">
                                                <span className="material-symbols-outlined">location_on</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 mb-1">Trụ sở chính</p>
                                                <p className="text-base text-[#1d2210] font-medium leading-relaxed">
                                                    {settings.address}
                                                </p>
                                            </div>
                                        </div>
                                        {/* Email */}
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1d2210]">
                                                <span className="material-symbols-outlined">mail</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 mb-1">Email hỗ trợ</p>
                                                <a className="text-base text-[#1d2210] font-medium hover:text-[#a4d411] transition-colors" href={`mailto:${settings.email}`}>
                                                    {settings.email}
                                                </a>
                                            </div>
                                        </div>
                                        {/* Working Hours */}
                                        <div className="flex items-start gap-4">
                                            <div className="size-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[#1d2210]">
                                                <span className="material-symbols-outlined">schedule</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500  mb-1">Giờ làm việc</p>
                                                <p className="text-base text-[#1d2210] font-medium">
                                                    Thứ 2 - Thứ 7: 8:00 - 17:30
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-6 border-gray-100" />
                                    <div className="grid grid-cols-2 gap-3">
                                        <a className="flex flex-col items-center justify-center p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors group" href={`tel:${settings.hotline.replace(/\s+/g, '')}`}>
                                            <span className="material-symbols-outlined text-[#f59e0b] text-2xl mb-1 group-hover:scale-110 transition-transform">call</span>
                                            <span className="text-xs font-semibold text-orange-800 ">Gọi ngay</span>
                                            <span className="text-sm font-bold text-[#f59e0b]">{settings.hotline}</span>
                                        </a>
                                        <a className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group" href={settings.zalo} target="_blank" rel="noopener noreferrer">
                                            <span className="material-symbols-outlined text-blue-600 text-2xl mb-1 group-hover:scale-110 transition-transform">chat</span>
                                            <span className="text-xs font-semibold text-blue-800 ">Chat Zalo</span>
                                            <span className="text-sm font-bold text-blue-600">KGX Connect</span>
                                        </a>
                                    </div>
                                </div>
                                {/* Trust Box */}
                                <div className="bg-gradient-to-br from-[#1d2210] to-[#2c331a] rounded-2xl shadow-lg p-6 md:p-8 text-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <span className="material-symbols-outlined text-9xl">verified_user</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-4 relative z-10">Tại sao chọn {settings.name}?</h3>
                                    <ul className="space-y-4 relative z-10">
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#a4d411] mt-0.5">star</span>
                                            <span className="text-sm text-gray-200">Top đơn vị thi công cảnh quan uy tín.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#a4d411] mt-0.5">engineering</span>
                                            <span className="text-sm text-gray-200">Đội ngũ kỹ sư & nghệ nhân kinh nghiệm.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-[#a4d411] mt-0.5">inventory_2</span>
                                            <span className="text-sm text-gray-200">Cam kết chất lượng và bảo hành chuyên nghiệp.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="relative h-[400px] bg-gray-100 group">
                    {settings.googleMapsEmbed ? (
                        <div className="absolute inset-0">
                            <iframe
                                src={settings.googleMapsEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            ></iframe>
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw8SasX9gVvVGgET9Ue9oONNT4OOJgBfIw560lb_QnUCUJST2d7bRf7gYdYy-Kgvj0w4-SW89wf9zTayxJ40TzOEPPsp_3DhQ1FH_6jPwpeSPWOLyFeswiKm9Qrh6Af3Tp_SEJ2KVaqMZwNRlLPCOGWLC98YwwL4Zd14PiJWnhlyhJVf6QExKLXW_bT77iGiEaI6vUxlW-xjusN2oEuxjEUIWa9VbonIBlScjkg4OMduXksmkL-zldtKPh7jGh3VYUQrJKW0DaI44')" }}>
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    )}

                    {/* Map Overlay Card */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm px-4">
                        <div className="bg-white p-6 rounded-2xl shadow-2xl flex items-center justify-between gap-4 transition-all duration-300 hover:shadow-primary/20 border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-xl">map</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-[#1d2210]">KGX Thái Nguyên</h3>
                                    <p className="text-gray-500 text-[10px]">KDC số 9, Phan Đình Phùng, TP Thái Nguyên</p>
                                </div>
                            </div>
                            <a
                                href="https://maps.app.goo.gl/nvmBoPmyaHzFWFwn7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 h-10 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
                            >
                                <span>Chỉ đường</span>
                                <span className="material-symbols-outlined text-sm">directions</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-[#1d2210] mb-4">Câu hỏi thường gặp</h2>
                            <p className="text-gray-600">Giải đáp nhanh những thắc mắc của bạn về quy trình làm việc của KGX</p>
                        </div>
                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none outline-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">Bao lâu thì tôi nhận được báo giá?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    Thông thường, sau khi tiếp nhận thông tin và khảo sát sơ bộ (online hoặc offline), KGX sẽ gửi báo giá khái toán trong vòng 24h. Với các dự án lớn cần bóc tách khối lượng chi tiết, thời gian là 3-5 ngày làm việc.
                                </div>
                            </details>
                            {/* FAQ Item 2 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none outline-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">KGX có hỗ trợ khảo sát tận nơi không?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    Có. Chúng tôi khuyến khích việc khảo sát thực địa để đánh giá chính xác hiện trạng đất, hướng nắng, gió và thổ nhưỡng. Chi phí khảo sát sẽ được hoàn lại 100% khi ký hợp đồng thi công.
                                </div>
                            </details>
                            {/* FAQ Item 3 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none outline-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">Quy trình bảo hành cây xanh như thế nào?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    KGX bảo hành cây bóng mát trong vòng 3-6 tháng và cây bụi trong vòng 1 tháng kể từ ngày nghiệm thu. Nếu cây chết do lỗi kỹ thuật trồng hoặc sâu bệnh có sẵn, chúng tôi sẽ thay thế miễn phí 1 đổi 1.
                                </div>
                            </details>
                            {/* FAQ Item 4 */}
                            <details className="group bg-[#f8f8f6] rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-md border border-transparent open:border-gray-100">
                                <summary className="flex items-center justify-between p-5 cursor-pointer list-none outline-none">
                                    <span className="font-bold text-[#1d2210] group-open:text-[#a4d411]">Chi phí thiết kế được tính ra sao?</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180 group-open:text-[#a4d411]">expand_more</span>
                                </summary>
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-transparent group-open:border-gray-100 group-open:pt-4">
                                    Chi phí thiết kế được tính dựa trên diện tích (m2) và phong cách thiết kế. Đơn giá dao động từ 80.000đ - 250.000đ/m2. Đặc biệt, KGX giảm 50-100% phí thiết kế khi khách hàng ký hợp đồng thi công trọn gói.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="py-20 bg-[#1d2210] relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a4d411]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
                    <div className="max-w-[1200px] mx-auto px-4 relative z-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-normal">Kiến tạo không gian sống mơ ước</h2>
                        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">Đừng ngần ngại chia sẻ ý tưởng của bạn. Chúng tôi ở đây để hiện thực hóa nó thành những khu vườn tuyệt tác.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-full sm:w-auto px-8 h-14 bg-[#a4d411] hover:bg-[#8cb60e] text-[#1d2210] font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(164,212,17,0.3)] hover:shadow-[0_0_30px_rgba(164,212,17,0.5)]">
                                Đăng ký tư vấn ngay
                            </button>
                            <Link to="/du-an" className="w-full sm:w-auto px-8 h-14 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold rounded-xl transition-all hover:bg-white/5 flex items-center justify-center">
                                Xem hồ sơ năng lực
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
