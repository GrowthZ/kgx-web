import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsService, Project } from '../src/services/projectsService';
import ImageWithFallback from '../components/ImageWithFallback';

const ProjectsPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Tất cả');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const data = await projectsService.getAllProjects();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const categories = ['Tất cả', 'Biệt thự', 'Resort', 'Khu đô thị', 'Doanh nghiệp'];

    const filteredProjects = projects.filter(project => {
        if (activeCategory === 'Tất cả') return true;
        return project.category === activeCategory || project.filterCategory === activeCategory;
    });

    return (
        <div className="bg-background-light text-text-main antialiased selection:bg-primary/30">
            {/* Hero Section */}
            <section className="relative w-full overflow-hidden py-12 lg:py-20">
                <div className="container px-4 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
                                <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                                <span className="text-xs font-bold text-primary uppercase tracking-wide">Đối tác cảnh quan tin cậy</span>
                            </div>
                            <h1 className="text-4xl font-black leading-tight tracking-tight text-text-main sm:text-5xl lg:text-6xl">
                                Dự án cảnh quan <br /> <span className="text-primary">KGX Landscape</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                Chúng tôi mang đến giải pháp thiết kế và thi công cảnh quan thực tế, kiến tạo không gian xanh đẳng cấp cho Biệt thự, Resort và Khu đô thị sinh thái. Nâng tầm giá trị sống bền vững.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <button className="flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-[#66aa08] transition-all">
                                    Xem hồ sơ năng lực
                                </button>
                                <button className="flex h-12 items-center justify-center rounded-xl border-2 border-[#eef4e7] bg-transparent px-8 text-base font-bold text-text-main hover:bg-[#fafcf8] hover:border-primary/50 transition-all">
                                    Liên hệ ngay
                                </button>
                            </div>
                            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-500">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>{projects.length}+ Dự án đã hoàn thiện</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <span>Bảo hành dài hạn</span>
                                </div>
                            </div>
                        </div>
                        {/* Right Collage */}
                        <div className="relative h-[400px] lg:h-[500px] w-full">
                            <ImageWithFallback
                                isBackground
                                className="absolute top-0 right-0 h-[85%] w-[65%] overflow-hidden rounded-2xl shadow-xl transition-transform duration-700 hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2FEwQp7nnRxt5LTXtc2pgk2DFSlyVa2IAEzFD8jLjGg75pXxNSAy9U-2RyM85QljBmarxtLi7vtfxwfGrNuykgh-o9p3ZH3YJx6MPFdEmr0QeI8WXUUG2q3LK7tUE2Yi6_LuyweaOmwtzGcFuy2G5y1pAPT_IHCpd8xDYHVf-GuMHtRbLh7-ut_-nbrek9Z9rMMn3w_o4DDInAKDFouUGlG73Sv-GWdksb-Vj3txsiITkCMhH3RfZIAjFBlG_oJ4Grd91yTaVWmw"
                            />
                            <ImageWithFallback
                                isBackground
                                className="absolute bottom-0 left-0 h-[55%] w-[55%] overflow-hidden rounded-2xl shadow-xl ring-8 ring-[#fafcf8] transition-transform duration-700 hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVTPJeTWNLA2YpFecX7MkdZjbhVxEzEE3nXRdZvclW44X3OuqWbPB-XLMdUOaFD6BYrl4w93P5gAMgXBLOiGzlwYnSSlm-aWkw60mZCgVF0GFQst2gmrBN6rlwCPmySOjYfV3I6H7RUBwTIE8gxcxQaWAwmk8ottEaZDunRXqWJH5vtqqizn7eWQn9YdBvoe8j8EGoY6YWl4N7l_awlna0tSYTdOrZLWHE7yz-XIWMZGaiZ2aTREwchy3WJNYxbCRaz-vZRmMtBoc')"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="container px-4 mx-auto py-8 border-y border-gray-100 bg-white sticky top-20 z-30">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-black text-text-main mb-3">Lĩnh vực hoạt động</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Các loại hình dự án tiêu biểu mà KGX tập trung phát triển với chất lượng cao nhất.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Activity Cards */}
                    <div className="group flex flex-col rounded-xl border border-[#eef4e7] bg-[#fafcf8] p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer" onClick={() => setActiveCategory('Biệt thự')}>
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>villa</span>
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Biệt thự sân vườn</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">Thiết kế &amp; thi công trọn gói sân vườn, tiểu cảnh, hồ cá Koi cho biệt thự.</p>
                        <div className="h-32 w-full rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXRZX_sWS_jKLNE5UpJQorhVUG7Q79eLY1eer1Iut00jMF9sfOZdQQ7c-HBi6mT67rcJo7yX0x_To3-6HhxWgMtdYHXi6RnlZriQ-4DN8qzJDqeYvH2p4Ux67UBniFNwnG7NriadW2THQ2gzAB29VwuUeIzmJUpx519JvwOQTBogB8o7Nb2Z9icmB0P5iOqQ980aq7Sh9ITwzlbYAQnQuZ9LdFJbjWGVB71_qbRXhCGL53DRMLyenVa6ZYBibWT8RZg5yIh5R3MtQ')" }}></div>
                    </div>
                    <div className="group flex flex-col rounded-xl border border-[#eef4e7] bg-[#fafcf8] p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer" onClick={() => setActiveCategory('Resort')}>
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>deck</span>
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Resort nghỉ dưỡng</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">Giải pháp cảnh quan nghỉ dưỡng đẳng cấp, hài hòa với thiên nhiên bản địa.</p>
                        <div className="h-32 w-full rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0QDbGwyTNe3iuqa0xNDT2uee8XnFLKn0XYFGQ3zcB5Cwn5NrwZJBr3iaWQqbiyoeInPbvO3FKnNOj_IF_lvLi5S_2Lbd8pPYG_nePhVmx1I-8Sv0J7Q-9klSkWDdb_3QPQkFP_WagtYg3GP7dZcmnmk2bUslTE7x2xgSDDG_I9NmHWv75843q-_ZDVdjDXx0xWQMtBNQpf2XuIxrf5y_MHdVwfffN0QoIYynyQpN-GuEkrFU4reaJaRzidacNckpuppfDkW9T7r8')" }}></div>
                    </div>
                    <div className="group flex flex-col rounded-xl border border-[#eef4e7] bg-[#fafcf8] p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer" onClick={() => setActiveCategory('Khu đô thị')}>
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>park</span>
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Khu đô thị / Công viên</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">Quy hoạch và thi công cảnh quan đô thị, công viên công cộng quy mô lớn.</p>
                        <div className="h-32 w-full rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9ADblp2ejVNwc-KbgzyMWRpw4XayB_t0LfNcC-LSIopPSP4PCn67qgBimnvV37sYhArMKUz098vF8QEnWxTXxJfDbT0Kdpb8ZWFyqg8vg2iK4lLmFV9a87evk8gtKx2XiWi4o0VRLCENWsMIbriUTey70VWrb00vwM6c9tUsLKOnruxJVXcK_BnfjV_f3ib-jlJy0t0A651qctEzZ458HsPlVw6WLTLUm3D92EjyCmM')" }}></div>
                    </div>
                    <div className="group flex flex-col rounded-xl border border-[#eef4e7] bg-[#fafcf8] p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer" onClick={() => setActiveCategory('Doanh nghiệp')}>
                        <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>domain</span>
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Cảnh quan doanh nghiệp</h3>
                        <p className="text-sm text-gray-500 mb-4 flex-grow">Tạo dựng không gian xanh cho nhà máy, khu công nghiệp và văn phòng.</p>
                        <div className="h-32 w-full rounded-lg bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAK72wuHVKc5tsBTz5oDr6oIthe8gQrLMxuZWiYdyhZyaCY-p-i0F4mKA-QG7mtMcLv4QIywCIrZpcsGpGYBATWSXbyUsIlVH0oa542qf-HMK75FGNH1GA8Bfzr_ZI-98wY6cP-WezOyAvSegatrMnaEfXvW5Fr_d3yKzohUJ-an2eKCBDpTsNpsMs-00KGltDV0P472Xr4xJXgGeTW-2xwiOaNdlNVo-jKVu6lFuoGyHJAhn3BY2oMk2WDHnCx7Y_rquPuQJ5cbzc')" }}></div>
                    </div>
                </div>
            </section>

            {/* Filter & Project List Section */}
            <section className="py-16 bg-[#fafcf8]">
                <div className="container px-4 mx-auto">
                    {/* Filter Tabs */}
                    <div className="mb-10 overflow-x-auto pb-2 no-scrollbar">
                        <div className="flex min-w-max border-b border-[#dde8ce] px-4 gap-8">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`group flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-all outline-none ${activeCategory === cat ? 'border-b-primary text-text-main' : 'border-b-transparent text-gray-500 hover:text-primary'}`}
                                >
                                    <p className="text-sm font-bold leading-normal tracking-wide">{cat === 'Tất cả' ? 'Tất cả dự án' : cat}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {loading ? (
                        <div className="py-20 flex flex-col items-center justify-center">
                            <div className="size-12 border-4 border-slate-100 border-t-primary rounded-full animate-spin"></div>
                            <p className="text-slate-400 font-bold text-sm mt-4 uppercase tracking-widest">Đang tải dự án...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredProjects.map((project, idx) => (
                                <div key={idx} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#eef4e7]">
                                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                                        <ImageWithFallback isBackground className="h-full w-full transition-transform duration-700 group-hover:scale-110" src={project.image} />
                                        <div className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg backdrop-blur-md">
                                            {project.status || 'Đã hoàn thiện'}
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6 lg:p-8">
                                        <h3 className="mb-4 text-xl font-bold leading-tight text-olive group-hover:text-primary transition-colors line-clamp-2 uppercase">{project.title}</h3>
                                        <div className="mb-6 flex flex-col gap-3 border-t border-olive/5 pt-5 text-sm">
                                            <div className="flex items-center gap-3 text-olive-light font-medium">
                                                <span className="material-symbols-outlined text-[20px] text-primary">location_on</span>
                                                <span>{project.location}</span>
                                            </div>
                                            {project.scale && (
                                                <div className="flex items-center gap-3 text-olive-light font-medium">
                                                    <span className="material-symbols-outlined text-[20px] text-primary">square_foot</span>
                                                    <span>{project.scale}</span>
                                                </div>
                                            )}
                                        </div>
                                        <Link to={`/du-an/${project.slug}`} className="mt-auto flex w-full items-center justify-center rounded-xl bg-background-off py-4 text-sm font-bold text-olive hover:bg-primary hover:text-white hover:shadow-lg transition-all">
                                            Xem chi tiết dự án
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-white py-16 lg:py-24">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-black text-text-main mb-3">Quy trình làm việc</h2>
                        <p className="text-gray-500">Quy trình chuyên nghiệp, minh bạch từ ý tưởng đến hiện thực.</p>
                    </div>
                    <div className="relative">
                        {/* Line connecting steps (Desktop only) */}
                        <div className="absolute top-8 left-0 hidden w-full border-t-2 border-dashed border-primary/30 lg:block"></div>
                        <div className="grid grid-cols-2 gap-y-10 gap-x-4 lg:grid-cols-6 lg:gap-4">
                            {/* Step 1 */}
                            <div className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex size-16 items-center justify-center rounded-full bg-white border-2 border-primary shadow-lg">
                                    <span className="text-xl font-black text-primary">01</span>
                                </div>
                                <h4 className="mb-1 text-base font-bold text-text-main">Tiếp nhận</h4>
                                <p className="text-xs text-gray-500 px-2">Nhận thông tin &amp; yêu cầu tư vấn</p>
                            </div>
                            {/* Step 2 */}
                            <div className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex size-16 items-center justify-center rounded-full bg-white border-2 border-primary shadow-lg">
                                    <span className="text-xl font-black text-primary">02</span>
                                </div>
                                <h4 className="mb-1 text-base font-bold text-text-main">Khảo sát</h4>
                                <p className="text-xs text-gray-500 px-2">Đo đạc hiện trạng &amp; phân tích</p>
                            </div>
                            {/* Step 3 */}
                            <div className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex size-16 items-center justify-center rounded-full bg-white border-2 border-primary shadow-lg">
                                    <span className="text-xl font-black text-primary">03</span>
                                </div>
                                <h4 className="mb-1 text-base font-bold text-text-main">Thiết kế</h4>
                                <p className="text-xs text-gray-500 px-2">Lên ý tưởng &amp; bản vẽ 2D/3D</p>
                            </div>
                            {/* Step 4 */}
                            <div className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex size-16 items-center justify-center rounded-full bg-white border-2 border-primary shadow-lg">
                                    <span className="text-xl font-black text-primary">04</span>
                                </div>
                                <h4 className="mb-1 text-base font-bold text-text-main">Báo giá</h4>
                                <p className="text-xs text-gray-500 px-2">Dự toán chi phí chi tiết</p>
                            </div>
                            {/* Step 5 */}
                            <div className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex size-16 items-center justify-center rounded-full bg-white border-2 border-primary shadow-lg">
                                    <span className="text-xl font-black text-primary">05</span>
                                </div>
                                <h4 className="mb-1 text-base font-bold text-text-main">Thi công</h4>
                                <p className="text-xs text-gray-500 px-2">Triển khai &amp; giám sát kỹ thuật</p>
                            </div>
                            {/* Step 6 */}
                            <div className="relative flex flex-col items-center text-center">
                                <div className="z-10 mb-4 flex size-16 items-center justify-center rounded-full bg-white border-2 border-primary shadow-lg">
                                    <span className="text-xl font-black text-primary">06</span>
                                </div>
                                <h4 className="mb-1 text-base font-bold text-text-main">Bảo hành</h4>
                                <p className="text-xs text-gray-500 px-2">Chăm sóc &amp; bảo dưỡng định kỳ</p>
                            </div>
                        </div>
                        <div className="mt-12 rounded-xl bg-gray-50 p-6 lg:p-8 border border-[#eef4e7]">
                            <div className="flex flex-col lg:flex-row gap-8 items-center">
                                <div className="w-full lg:w-1/3 aspect-video rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDB7H8F3AgR5sKUuZTwOpxhEfpFBrpWWrLitf4zpJGagBwikrgfu_AjVp3oISq-YChfYfIDIXLuONNPC678d2CR7AgsWeWXrpeNo12k1gPBq6StD60IWQG5eV14u92404alGgCA3N2zyweGRZyDSrKKgBH_BCXIpwLWIKzIemSwdbVMewAD0dYUdbzHnjc2hmno0WSxRNtIhHx7gEzZ-mOAM8HJA4oznuAqVGwFVdHHfwUVaD1GsEKMrtbybjU0MiEoyaPKOFJgv0Q')" }}></div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2 text-text-main">Đội ngũ kỹ thuật chuyên sâu</h3>
                                    <p className="text-gray-600 mb-4">Với đội ngũ kiến trúc sư và kỹ sư cảnh quan trên 10 năm kinh nghiệm, chúng tôi đảm bảo mỗi công đoạn đều được thực hiện tỉ mỉ, chính xác theo đúng bản vẽ thiết kế đã được phê duyệt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="bg-[#fafcf8] py-16">
                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="order-2 lg:order-1 grid gap-6 sm:grid-cols-2">
                            <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eef4e7]">
                                <span className="material-symbols-outlined mb-3 text-4xl text-primary">verified_user</span>
                                <h3 className="mb-2 text-lg font-bold text-text-main">Phương pháp rõ ràng</h3>
                                <p className="text-sm text-gray-500">Quy trình làm việc minh bạch, giúp khách hàng dễ dàng nắm bắt và giám sát.</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eef4e7]">
                                <span className="material-symbols-outlined mb-3 text-4xl text-primary">schedule</span>
                                <h3 className="mb-2 text-lg font-bold text-text-main">Tiến độ chủ động</h3>
                                <p className="text-sm text-gray-500">Cam kết thi công đúng tiến độ, bàn giao công trình đúng hẹn.</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eef4e7]">
                                <span className="material-symbols-outlined mb-3 text-4xl text-primary">eco</span>
                                <h3 className="mb-2 text-lg font-bold text-text-main">Vật liệu chuẩn</h3>
                                <p className="text-sm text-gray-500">Sử dụng cây xanh và vật liệu chất lượng cao, phù hợp khí hậu địa phương.</p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-sm border border-[#eef4e7]">
                                <span className="material-symbols-outlined mb-3 text-4xl text-primary">handshake</span>
                                <h3 className="mb-2 text-lg font-bold text-text-main">Đồng hành dài lâu</h3>
                                <p className="text-sm text-gray-500">Dịch vụ bảo hành, bảo dưỡng tận tâm sau khi bàn giao dự án.</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="mb-6 text-3xl font-black text-text-main leading-tight">Tại sao chọn <br /> <span className="text-primary">KGX Landscape?</span></h2>
                            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6yc2h3MFUC7-L-tnVawdoWOrF2DGOUC_LhbUA8kWakPAgKMfHUpxAgFmzDiIa6R_y8CvBYjOHNjVaMbfNATb8cNFGzKCF_AjODH8Jq-R0osOHp0fudCSmGPyT2elC6JYw8sKjeKu5sJgSFtSjjaqQyTwGFvObuD5WRFy-fTrA3CvswV9SB88YQHCQvz_h1452NZ8oyiJwml6ze2I_Yi3xMoxNsaBFoGuqWEtQ4byfixjrDmNFCZuD2GlfLnj2tfBVjqZBrIUaVa4')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="font-bold text-lg">Dự án biệt thự Green Star</p>
                                    <p className="text-sm opacity-90">Hoàn thiện 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 items-start">
                        {/* Left Form */}
                        <div className="rounded-2xl bg-[#fafcf8] p-6 lg:p-10 border border-[#eef4e7]">
                            <h2 className="mb-2 text-2xl font-black text-text-main">Đăng ký tư vấn miễn phí</h2>
                            <p className="mb-8 text-gray-500 text-sm">Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ lại trong vòng 24h.</p>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Họ và tên" type="text" />
                                    <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Số điện thoại" type="text" />
                                </div>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <select className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm text-gray-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                                        <option>Loại hình dự án</option>
                                        <option>Biệt thự sân vườn</option>
                                        <option>Resort / Khách sạn</option>
                                        <option>Khu đô thị</option>
                                    </select>
                                    <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Quy mô (m2)" type="text" />
                                </div>
                                <input className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Địa điểm dự án (Tỉnh/Thành phố)" type="text" />
                                <textarea className="w-full rounded-lg border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Nhu cầu chi tiết / Lời nhắn..." rows={4}></textarea>
                                <button className="w-full rounded-lg bg-primary py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-[#66aa08] transition-all" type="button">
                                    Gửi yêu cầu
                                </button>
                            </form>
                        </div>
                        {/* Right Info */}
                        <div className="flex flex-col gap-8 pt-4 lg:pl-10">
                            <div>
                                <h3 className="text-3xl font-black text-text-main mb-6">Liên hệ với KGX</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp tối ưu nhất cho không gian của bạn. Hãy liên hệ ngay hôm nay để nhận ưu đãi thiết kế.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eef4e7] text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Hotline tư vấn 24/7</p>
                                        <p className="text-xl font-bold text-text-main">09xx.xxx.xxx</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eef4e7] text-primary">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Trụ sở chính</p>
                                        <p className="text-base font-bold text-text-main">Số xx, Đường ABC, TP. Thái Nguyên, Tỉnh Thái Nguyên</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-[#eef4e7] text-primary">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-base font-bold text-text-main">contact@kgxlandscape.vn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
