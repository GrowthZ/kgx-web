import React from 'react';

export interface ServiceSection {
    type: 'hero' | 'problem' | 'core' | 'deliverables' | 'workflow' | 'stats' | 'projects' | 'faq' | 'cta' | 'suitability';
    title?: string;
    subtitle?: string;
    description?: string;
    items?: any[];
    image?: string;
    config?: any;
}

export interface ServiceData {
    slug: string;
    type: 'design' | 'construction';
    metaTitle: string;
    hero: {
        title: React.ReactNode;
        subtitle: string;
        description: string;
        image: string;
        ctaLabel?: string;
        stats?: { label: string; value: string }[];
    };
    sections: ServiceSection[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
    // --- THIẾT KẾ ---
    'thiet-ke': {
        slug: 'thiet-ke',
        type: 'design',
        metaTitle: 'Thiết kế sân vườn chuyên nghiệp - KGX Landscape',
        hero: {
            title: <>Kiến tạo <br className="hidden md:block" />Sân vườn đẳng cấp</>,
            subtitle: 'Dịch vụ chủ đạo',
            description: 'Chúng tôi mang đến giải pháp thiết kế sân vườn độc bản, kết hợp hài hòa giữa phong thủy và ngôn ngữ kiến trúc hiện đại.',
            image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2070&auto=format&fit=crop',
        },
        sections: [
            {
                type: 'core',
                title: 'TRIẾT LÝ THIẾT KẾ',
                description: 'Tối ưu trải nghiệm sống trong sự giao hòa tuyệt đối với thiên nhiên.',
                items: [
                    { icon: 'balance', title: 'Hài hòa Phong thủy', desc: 'Bố trí cảnh quan bổ trợ vượng khí cho gia chủ.' },
                    { icon: 'eco', title: 'Cây xanh bền vững', desc: 'Lựa chọn loại cây phù hợp vi khí hậu và dễ chăm sóc.' },
                    { icon: 'auto_awesome', title: 'Thẩm mỹ độc bản', desc: 'Mỗi khu vườn là một câu chuyện riêng của chủ nhân.' }
                ]
            }
        ]
    },
    'thiet-ke-canh-quan-san-vuon': {
        slug: 'thiet-ke-canh-quan-san-vuon',
        type: 'design',
        metaTitle: 'Thiết kế cảnh quan sân vườn - KGX Landscape',
        hero: {
            title: <>VAI TRÒ CỦA <br className="hidden md:block" />QUY HOẠCH CẢNH QUAN</>,
            subtitle: 'Tổng quan dịch vụ',
            description: 'Đảm bảo sự hài hòa tổng thể, kiểm soát vi khí hậu và gia tăng giá trị dài hạn cho các dự án quy mô lớn ngay từ giai đoạn khởi tạo.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0pZYP2yqfBK4Qly9OjzvOAdLDpQYWdS9BJXk5fZsttYIsL7rsbbS-4njmKdZ4gT2kjWwh73BYrFtO_XezOFODljlziBpVlKSZd8srtXOVKMQqcK4RN6Zc3K4pYi6MY3pSJNVe82xQDBl4pntiT9tihTyUtb_DInKcgBrus67hg23TBF01hF_90mPg-jj15uaoxB8vWGn4SP-BmwO9C0Akp0NwQzR7mQngy7mLHVD_IYYLfp1L4xpc0NtYWkPLzDcEnfh4U0vkgmk',
            ctaLabel: 'Tìm hiểu quy trình'
        },
        sections: [
            {
                type: 'core',
                title: 'GIẢI PHÁP KGX TRIỂN KHAI',
                description: 'Cách tiếp cận toàn diện và chuyên sâu cho từng dự án, tập trung vào tính khả thi và thẩm mỹ bền vững.',
                items: [
                    { icon: 'hub', title: 'Giao thông – Cây xanh – Mặt nước', desc: 'Hệ thống hạ tầng kỹ thuật tích hợp đồng bộ, đảm bảo lưu thông liền mạch.' },
                    { icon: 'map', title: 'Phân khu chức năng', desc: 'Tối ưu hóa quy hoạch sử dụng đất, bố trí tiện ích hợp lý.' },
                    { icon: 'timeline', title: 'Triển khai theo giai đoạn', desc: 'Chiến lược đầu tư hiệu quả theo từng chu kỳ phát triển.' }
                ]
            },
            {
                type: 'deliverables',
                title: 'SẢN PHẨM BÀN GIAO',
                description: 'Bộ hồ sơ kỹ thuật chi tiết, đảm bảo tính pháp lý và thi công chính xác.',
                items: [
                    { icon: 'check_circle', title: 'Mặt bằng tổng thể (Masterplan)', desc: 'Bản vẽ quy hoạch không gian, phân khu chức năng.' },
                    { icon: 'forest', title: 'Chiến lược cây xanh', desc: 'Danh mục cây trồng phù hợp thổ nhưỡng.' },
                    { icon: 'architecture', title: 'Nguyên tắc thi công', desc: 'Hướng dẫn chi tiết về vật liệu và giải pháp kỹ thuật.' }
                ],
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKyyufTo63MQpqNjHx6x-zH8ATmu4obthZeFSCIh0GUdnzs2wxMFt3pjq5Bz_e5HMTfEnsHS4bzKDzLblKrCBahvia41IZlkJFvGa3alsxCrxRPE1T_E4yjxGSNvXCZ33IJhMHI7Vd68ef_HVB3ZCbVV247o9iV0mWV8Uiws8nEeFMh8x9memH6RTpuExkBjjN24xSv0iSkzyisqhxhSnWA_6hn05wygieiLn8mT3FvRlgx7h3eKy03-yFjQzUsuvODM4DOdkqhoM'
            }
        ]
    },
    'thiet-ke-quy-hoach': {
        slug: 'thiet-ke-quy-hoach',
        type: 'design',
        metaTitle: 'Thiết kế quy hoạch cảnh quan - KGX Masterplan',
        hero: {
            title: <>Quy hoạch <br className="hidden md:block" />Cảnh quan bền vững</>,
            subtitle: 'Tầm nhìn chiến lược',
            description: 'Giải pháp quy hoạch tổng thể cho khu đô thị, khu du lịch, nghỉ dưỡng và các dự án dân dụng quy mô lớn.',
            image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=2070&auto=format&fit=crop',
        },
        sections: [
            {
                type: 'core',
                title: 'GIÁ TRỊ KGX MANG LẠI',
                items: [
                    { icon: 'strategy', title: 'Chiến lược phát triển', desc: 'Định hướng không gian xanh đồng bộ với hạ tầng kỹ thuật.' },
                    { icon: 'eco', title: 'Kiểm soát vi khí hậu', desc: 'Tối ưu hóa hướng gió, mặt nước để giảm nhiệt độ môi trường.' },
                    { icon: 'trending_up', title: 'Gia tăng giá trị dự án', desc: 'Nâng cao tính thẩm mỹ và giá trị thương mại cho bất động sản.' }
                ]
            }
        ]
    },
    'thiet-ke-kien-truc': {
        slug: 'thiet-ke-kien-truc',
        type: 'design',
        metaTitle: 'Thiết kế kiến trúc xanh - KGX Architecture',
        hero: {
            title: <>Kiến trúc <br className="hidden md:block" />Xanh hiện đại</>,
            subtitle: 'Dịch vụ thiết kế',
            description: 'Kết hợp tinh tế giữa công năng sử dụng và mảng xanh kiến trúc, kiến tạo không gian sống tiện nghi và trong lành.',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        },
        sections: [
            {
                type: 'core',
                title: 'PHONG CÁCH THIẾT KẾ',
                items: [
                    { icon: 'modern_house', title: 'Tối giản & Hiện đại', desc: 'Tận dụng ánh sáng tự nhiên và thông gió đối lưu.' },
                    { icon: 'landscape', title: 'Indoor-Outdoor Living', desc: 'Xóa nhòa ranh giới giữa không gian nội thất và thiên nhiên.' },
                    { icon: 'energy_savings_leaf', title: 'Vật liệu sinh thái', desc: 'Ưu tiên các dòng vật liệu thân thiện môi trường.' }
                ]
            }
        ]
    },
    'thiet-ke-khu-nghi-duong-cong-vien': {
        slug: 'thiet-ke-khu-nghi-duong-cong-vien',
        type: 'design',
        metaTitle: 'Thiết kế Resort & Công viên bền vững - KGX',
        hero: {
            title: <>Thiết kế khu nghỉ dưỡng <br className="hidden md:block" />& công viên bền vững</>,
            subtitle: 'Dịch vụ cao cấp',
            description: 'Kiến tạo không gian nghỉ dưỡng đẳng cấp, hòa hợp với thiên nhiên và mang lại trải nghiệm sống khác biệt.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9y3O-l_C9c6uYhY1XfQy5A5V5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5_5',
            ctaLabel: 'Nhận tư vấn quy hoạch'
        },
        sections: [
            {
                type: 'core',
                title: 'TIÊU CHÍ THIẾT KẾ CỐT LÕI',
                description: 'Mỗi dự án nghỉ dưỡng là một tác phẩm nghệ thuật, kết hợp giữa triết lý sinh thái và tiện nghi hiện đại.',
                items: [
                    { icon: 'eco', title: 'Bền vững sinh thái', desc: 'Bảo tồn hệ thực vật bản địa, tối ưu hóa nguồn nước và năng lượng.' },
                    { icon: 'person_celebrate', title: 'Trải nghiệm người dùng', desc: 'Thiết kế hành trình cảm xúc, tạo không gian thư giãn tuyệt đối.' },
                    { icon: 'architecture', title: 'Kiến trúc bản địa', desc: 'Sử dụng vật liệu địa phương, tôn vinh nét đẹp văn hóa vùng miền.' }
                ]
            }
        ]
    },
    'thiet-ke-vuon-tren-mai': {
        slug: 'thiet-ke-vuon-tren-mai',
        type: 'design',
        metaTitle: 'Thiết kế vườn trên mái - KGX Landscape',
        hero: {
            title: <>THIẾT KẾ <br className="hidden md:block" />VƯỜN TRÊN MÁI</>,
            subtitle: 'Giải pháp nhà phố',
            description: 'Tận dụng không gian sân thượng để tạo nên "lá phổi xanh" riêng tư, mang lại sự mát mẻ và thư giãn.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgn_knXVRLvY6i-_4RVR31OVSr5Uyn9OhRjIxP9uDu0PJ8B6ApJfJHOYHMzW4hBenPP_2cjJMoAQqF7A0ULEDk8f-Y1evTdLYzw6m4y7by7UKjSFVUxd6sLAdYjLlvRbg3uaxKC2vJUKgrvbLGrk4djjNEb7cFSVuEZhjyDzK1LuWMHpamcbZXjj3G50YZV1pVpZTfbT0QHGJnKf6EyqjDs9YJvM400a661fOrXNRLYJDTtESDkaA9dm2sX-M1GMlMmYgAuFSZpMc',
            ctaLabel: 'Tư vấn vườn mái'
        },
        sections: [
            {
                type: 'problem',
                title: 'THỬ THÁCH KHI LÀM VƯỜN TRÊN CAO',
                subtitle: 'Vấn đề kỹ thuật',
                description: 'Vườn trên mái yêu cầu những tiêu chuẩn khắt khe về kết cấu và chống thấm để đảm bảo an toàn cho công trình.',
                items: [
                    { icon: 'layers', title: 'Tải trọng kết cấu', desc: 'Trọng lượng của đất và cây cần được tính toán kỹ để không ảnh hưởng sàn mái.' },
                    { icon: 'water_damage', title: 'Rò rỉ & Chống thấm', desc: 'Cần hệ thống thoát nước and lớp chống thấm chuyên dụng 5-7 lớp.' },
                    { icon: 'wind', title: 'Gió & Nhiệt độ', desc: 'Môi trường trên cao khắc nghiệt, cần chọn loại cây chịu nhiệt and nắng tốt.' }
                ]
            }
        ]
    },
    'thiet-ke-vuon-thang-dung': {
        slug: 'thiet-ke-vuon-thang-dung',
        type: 'design',
        metaTitle: 'Thiết kế vườn thẳng đứng - KGX Specialist',
        hero: {
            title: <>THIẾT KẾ <br className="hidden md:block" />VƯỜN THẲNG ĐỨNG</>,
            subtitle: 'Tường cây nghệ thuật',
            description: 'Giải pháp tuyệt vời cho các không gian hạn hẹp, mang thiên nhiên vào trong nhà một cách tinh tế.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbb2zEM0-OUyRbLWPwkL5RzzeXXzluborG2vBYrc4-xO62EqEkZ40ZAcMsUrLHoH8LN4p5GHbQk-ctX5zrY8tXSmytjY__Oj62UXAS3CoxWFCZ2VwuCIF6Vi_SewmET_0cUeYQnBxFc5lGAJYmqJSb6McC9NySuXrJnQrPWcTEmN75FyrRxZa6zSkCG0t2VgYGdR2CTAl3anxq-pnciGvNAoY1Kc8y8zPXK13TVg6a64ZqQoddIzNRmyyUwTC0dnN8lcAjfz8_WU0',
            ctaLabel: 'Nhận báo giá tường cây'
        },
        sections: [
            {
                type: 'core',
                title: 'CÔNG NGHỆ VƯỜN ĐỨNG KGX',
                description: 'Chúng tôi sử dụng hệ thống Module và tưới tự động thông minh, đảm bảo cây xanh tốt and dễ dàng thay thế.',
                items: [
                    { icon: 'grid_view', title: 'Hệ thống Module', desc: 'Khung nhựa HDPE bền bỉ, lắp ghép linh hoạt theo diện tích tường.' },
                    { icon: 'water_drop', title: 'Tưới nhỏ giọt tự động', desc: 'Kiểm soát độ ẩm chính xác qua App, tích hợp châm phân tự động.' },
                    { icon: 'light_mode', title: 'Đèn quang hợp', desc: 'Bổ sung ánh sáng cho các vị trí thiếu sáng tự nhiên trong nhà.' }
                ]
            }
        ]
    },

    // --- THI CÔNG ---
    'thi-cong': {
        slug: 'thi-cong',
        type: 'construction',
        metaTitle: 'Thi công cảnh quan chuyên nghiệp - KGX',
        hero: {
            title: <>Thi công <br className="hidden md:block" />Cảnh quan Chuyên nghiệp</>,
            subtitle: 'Đảm bảo chất lượng',
            description: 'Quy trình thi công chuẩn chỉ, đội ngũ kỹ thuật giàu kinh nghiệm, cam kết mang lại sản phẩm hoàn mỹ nhất.',
            image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=1974&auto=format&fit=crop',
        },
        sections: [
            {
                type: 'core',
                title: 'CAM KẾT CỦA KGX',
                items: [
                    { icon: 'verified', title: 'Đúng bản vẽ 100%', desc: 'Mọi chi tiết đều được thực hiện chính xác theo hồ sơ thiết kế.' },
                    { icon: 'schedule', title: 'Đúng tiến độ', desc: 'Cam kết bàn giao công trình đúng thời hạn thỏa thuận.' },
                    { icon: 'shield', title: 'Bảo hành dài hạn', desc: 'Chế độ bảo trì, bảo hành cây xanh sau khi bàn giao.' }
                ]
            }
        ]
    },
    'thi-cong-canh-quan-san-vuon': {
        slug: 'thi-cong-canh-quan-san-vuon',
        type: 'construction',
        metaTitle: 'Thi công cảnh quan sân vườn trọn gói - KGX',
        hero: {
            title: <>Thi công cảnh quan<br className="hidden md:block" /> sân vườn trọn gói</>,
            subtitle: 'Dịch vụ chuyên nghiệp',
            description: 'Biến bản vẽ thiết kế thành hiện thực với độ chính xác cao nhất. Dịch vụ thi công chuyên nghiệp, cam kết tiến độ.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh9U3pELUFzB02eGhUouSNuW82xkLLoYtBhfbty9WN8YNzZCG5dG7wmRiZefj_sgIdMPZy_MkzH3xkXIkjslK7gD2gCi0WIetJ4TcM5iQojSsZkNItN-wucZZ3VsizmnKLPv5fChPz9u9it_CdPnKIPQtjnTS47-kPQWVhEhPEm0nXjSxt26HY_UG5yDL0lwPanFLAQL03QVbr9eFkrl_BJCS2PDlu51XngQ8UTbN0-Tnjs4vVoEtpZyykxQcaEfxreV6SwIvcfTU',
            ctaLabel: 'Ước tính báo giá'
        },
        sections: [
            {
                type: 'problem',
                title: 'THI CÔNG SÂN VƯỜN KHÔNG ĐƠN GIẢN',
                subtitle: 'Vấn đề thường gặp',
                description: 'Nhiều chủ nhà gặp rắc rối lớn khi chọn sai đơn vị thi công, dẫn đến lãng phí tiền bạc and thời gian.',
                items: [
                    { icon: 'attach_money', title: 'Phát sinh khi thi công', desc: 'Không có dự toán chi tiết dẫn đến chi phí đội lên gấp nhiều lần.' },
                    { icon: 'architecture', title: 'Sai lệch so với thiết kế', desc: 'Thực tế thi công "một đằng", bản vẽ "một nẻo" do thiếu giám sát.' },
                    { icon: 'timelapse', title: 'Khó kiểm soát tiến độ', desc: 'Nhà thầu thiếu năng lực dẫn đến công trình kéo dài.' }
                ]
            },
            {
                type: 'core',
                title: 'NĂNG LỰC THI CÔNG CỦA KGX',
                subtitle: 'Tại sao chọn KGX?',
                description: 'Chúng tôi không bán cây, chúng tôi bán sự an tâm. KGX cam kết chất lượng thi công with đội ngũ and quy trình chuyên nghiệp.',
                items: [
                    { icon: 'check_circle', title: 'Đội ngũ thi công trực tiếp', desc: 'KGX sở hữu đội ngũ nhân công lành nghề, không qua trung gian.' },
                    { icon: 'check_circle', title: 'Chủ động nguồn cây & vật tư', desc: 'Hệ thống vườn ươm 2ha giúp kiểm soát tốt chất lượng and giá thành.' },
                    { icon: 'check_circle', title: 'Kinh nghiệm thực tế dày dặn', desc: 'Hơn 50+ dự án biệt thự sân vườn đã hoàn thiện.' }
                ]
            }
        ]
    },
    'cham-soc-canh-quan': {
        slug: 'cham-soc-canh-quan',
        type: 'construction',
        metaTitle: 'Dịch vụ chăm sóc bảo dưỡng cảnh quan - KGX',
        hero: {
            title: <>Dịch vụ bảo dưỡng <br className="hidden md:block" />cảnh quan chuyên nghiệp</>,
            subtitle: 'Duy trì vẻ đẹp',
            description: 'Đảm bảo khu vườn của bạn luôn xanh tốt and phát triển ổn định theo thời gian with quy trình chăm sóc khoa học.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQN55--7pwzXncInJr7gLQL9QMxXgd3VCA82ZitOgq6fDYXKb-UIu9xEQwRLIMNA3lwaZFrNJ6Y4ge-c2SdA8cAoDMM0biwvJdUEuLVAoRdTkwTyx5AxuHZKDT_cIHF-RY_g_H4pH3hITAvaz-5Y8vU-tOrPslAZQgaguIKM0ah_3nW1MV6pEfhmQHcoJlUO9F_mnWuvVoU9j268wD2phZDWLkFhXs8R2mET-pccmg-lBXIvXC1maru9sW6rdj05YWreshRYwrrU',
            ctaLabel: 'Đăng ký bảo dưỡng'
        },
        sections: [
            {
                type: 'core',
                title: 'DANH MỤC CÔNG VIỆC',
                items: [
                    { icon: 'content_cut', title: 'Cắt tỉa tạo dáng', desc: 'Duy trì form dáng cây, loại bỏ cành khô, sâu bệnh.' },
                    { icon: 'compost', title: 'Bón phân định kỳ', desc: 'Cung cấp dinh dưỡng phù hợp theo từng giai đoạn phát triển.' },
                    { icon: 'pest_control', title: 'Phòng trừ sâu bệnh', desc: 'Kiểm soát and xử lý kịp thời các tác nhân gây hại.' }
                ]
            }
        ]
    },
    'thi-cong-cay-cong-trinh': {
        slug: 'thi-cong-cay-cong-trinh',
        type: 'construction',
        metaTitle: 'Thi công cây công trình kích thước lớn - KGX',
        hero: {
            title: <>Thi công cây công trình <br className="hidden md:block" />kích thước lớn</>,
            subtitle: 'Năng lực vận tải',
            description: 'Chuyên cung cấp and lắp đặt các loại cây bóng mát, cây cổ thụ with kỹ thuật đánh bầu and vận chuyển chuyên nghiệp.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF-lY0XcDspqUPQICrZfJCYJPFQR6SckHJVW5RqGP61PEFQzo97P5jsabZl0xObb3fItW-Cbf-VE-TelJAHonnHiP1-TcUonCMyf4yk_PnwaK2hgb1HAvLBMG7CWp1Gd_u1ttW_k-M3k4JXSL0XQhBL4AqAnnTmTFL3Ng9NGog8B4IQ6dyhMIVduAt_o2MvveoF4lyRmCabyAGCSYZDhq4xirbPgncdd5Eb-7fidaMXSf4z_m0AXT38tpefbUuAL2ywEU7ztIJ4IY',
            ctaLabel: 'Yêu cầu báo giá'
        },
        sections: [
            {
                type: 'workflow',
                title: 'QUY TRÌNH THỰC HIỆN',
                items: [
                    { title: 'Tuyển chọn cây', desc: 'Kiểm tra chất lượng cây tại vườn, đo đạc thông số kỹ thuật.' },
                    { title: 'Đánh bầu & Bó gốc', desc: 'Kỹ thuật đánh bầu chuyên sâu, đảm bảo bộ rễ không bị tổn thương.' },
                    { title: 'Vận chuyển chuyên dụng', desc: 'Sử dụng xe cẩu tự hành and đai vải mềm để bảo vệ thân cây.' },
                    { title: 'Trồng & Cọc chống', desc: 'Đặt cây đúng hướng, sử dụng hệ thống cọc chống thẩm mỹ and an toàn.' }
                ]
            }
        ]
    },
    'tu-van-giai-phap-xanh': {
        slug: 'tu-van-giai-phap-xanh',
        type: 'construction',
        metaTitle: 'Tư vấn giải pháp xanh bền vững - KGX Landscape',
        hero: {
            title: <>TƯ VẤN <br className="hidden md:block" />GIẢI PHÁP XANH</>,
            subtitle: 'Vấn đề thường gặp',
            description: 'Chúng tôi thấu hiểu những băn khoăn của bạn khi bắt đầu kiến tạo không gian xanh cho ngôi nhà của mình.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6_Lc8puQk3eU7fvHcGE9-w_bOZf6h_fK72sn272aiHQ0jMgyM63ufFwhTe3b_Ycg42fi_j3yV3_4bYINaH1cIT6HKaRhaFPQKWYfC-Tk6Fr2fzrynebdq737kxXkA-hoDo_3FvqnldpfSOv5Z9z4vSbpw86AWap6uwncs4C9CRzLfXnPkGzypNbp8ap6S40wPfcHpm-P7oMmfjIU-0AQ61Rvt3PjxLV1yDmerWNDxMJP2wx6kSLfwY266NL_Kb_vMcuNBDQmBxX4',
            ctaLabel: 'Đăng ký tư vấn ngay'
        },
        sections: [
            {
                type: 'problem',
                title: 'KHI BẠN CHƯA CÓ PHƯƠNG ÁN RÕ RÀNG',
                items: [
                    { icon: 'question_mark', title: 'Chưa xác định rõ nhu cầu', desc: 'Bạn muốn có không gian xanh nhưng chưa biết phong cách nào phù hợp.' },
                    { icon: 'account_balance_wallet', title: 'Ngân sách triển khai hạn chế', desc: 'Bạn lo lắng chi phí làm sân vườn quá cao and chưa biết cách phân bổ.' }
                ]
            }
        ]
    },
    'van-tai-cau-tu-hanh': {
        slug: 'van-tai-cau-tu-hanh',
        type: 'construction',
        metaTitle: 'Dịch vụ vận tải & Cẩu tự hành - KGX Logistics',
        hero: {
            title: <>Dịch vụ vận tải <br className="hidden md:block" />& cẩu tự hành</>,
            subtitle: 'Dịch vụ chuyên nghiệp',
            description: 'Giải pháp logistics chuyên sâu cho ngành cảnh quan, đảm bảo an toàn tuyệt đối cho cây xanh.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_h3rce2UPHuxS7ejE-NDqivkKkfENIAxoDn5_4KQIt4gp63IFogDMDQLtMsGo8XgQ1FwVcoOUKNUzhNJxp1WSmNdfMnlhXqP4PkOT0Mu14pRJWHZ0DNzqZ1heHp-vrzY6PwmLu6PthSLgDnMAXHikDsV5t1apoybuLBGKzFVIBEzwnS_TRAfT4Zb2G4dV5VIF3AsY7SvTGkdc-kyQpVa2M6oGvL39zxF334TeWHSg5ZaBtSf1ZX4Z1kclAKKpI0qD83pVeyzHaEQ',
            ctaLabel: 'Yêu cầu dịch vụ'
        },
        sections: [
            {
                type: 'core',
                title: 'NĂNG LỰC THIẾT BỊ',
                items: [
                    { icon: 'local_shipping', title: 'Đa dạng tải trọng', desc: 'Hệ thống xe cẩu từ 3.5 tấn đến 15 tấn, xe đầu kéo sơ mi rơ moóc.' },
                    { icon: 'engineering', title: 'Vận hành chuyên nghiệp', desc: 'Đội ngũ lái xe giàu kinh nghiệm, có chứng chỉ an toàn.' },
                    { icon: 'verified_user', title: 'An toàn tuyệt đối', desc: 'Trang bị cáp vải, đai mềm nâng hạ cây không gây tổn hại vỏ.' }
                ]
            }
        ]
    },
    'nuoi-cay-mo-cong-nghe-cao': {
        slug: 'nuoi-cay-mo-cong-nghe-cao',
        type: 'construction',
        metaTitle: 'Nuoi cấy mô tế bào thực vật - KGX Biotech',
        hero: {
            title: <>Nuôi cấy mô <br className="hidden md:block" />Công nghệ cao</>,
            subtitle: 'Biên giới khoa học',
            description: 'Nhân giống cây trồng sạch bệnh, chất lượng cao with công nghệ nuôi cấy mô tiên tiến nhất.',
            image: 'https://images.unsplash.com/photo-1581093191605-a1d30f5ec66c?q=80&w=2070&auto=format&fit=crop',
        },
        sections: [
            {
                type: 'core',
                title: 'ƯU ĐIỂM VƯỢT TRỘI',
                items: [
                    { icon: 'biotech', title: 'Nhân giống quy mô lớn', desc: 'Đảm bảo cung ứng số lượng lớn cây giống đồng nhất.' },
                    { icon: 'bug_report', title: 'Kháng sâu bệnh', desc: 'Cây giống được nuôi trong môi trường vô trùng tuyệt đối.' },
                    { icon: 'speed', title: 'Rút ngắn thời gian', desc: 'Tăng tốc quá trình sinh trưởng so with phương pháp truyền thống.' }
                ]
            }
        ]
    },
    'thi-cong-nong-nghiep-sach': {
        slug: 'thi-cong-nong-nghiep-sach',
        type: 'construction',
        metaTitle: 'Thi công nông nghiệp sạch công nghệ cao - KGX',
        hero: {
            title: <>Thi Công <br className="hidden md:block" />Nông Nghiệp Sạch</>,
            subtitle: 'Dịch vụ chuyên sâu',
            description: 'Kiến tạo môi trường canh tác bền vững with công nghệ nhà màng and hệ thống kiểm soát vi khí hậu tiên tiến.',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsRGcrwpnYNiisnis_GuI83PLmY80vfNjRKgPDz5TMbOT6kr2pEKkWbaiJpfZVwn5_hhFlEFXsCkicRr8krR6My7pUqhD3Lspdjou0oc8fJkXZ_5t4_g3LIFePyevW5U2bn07g-bOVW4W2jsMXIWAPst7jJ3CQVnn6TpNx9Yl09Tulf1BqbrqrfS4AAqTL2zLTAG0Ys2EfpvV7o31yDthtrSeh9Bavwb9MdLkkKYrtIU5a_i9YwhX_nRooU-rQj_VC1JsBejQjz8I',
            ctaLabel: 'Yêu cầu tư vấn'
        },
        sections: [
            {
                type: 'core',
                title: 'GIẢI PHÁP TRIỂN KHAI',
                items: [
                    { icon: 'water_drop', title: 'Thủy canh & Tưới nhỏ giọt', desc: 'Công nghệ tưới chính xác từ Israel, tiết kiệm 40-60% nước.' },
                    { icon: 'grid_view', title: 'Nhà màng công nghệ cao', desc: 'Kết cấu vòm hở hoặc kín, lưới cắt nắng tự động.' },
                    { icon: 'sensors', title: 'Cảm biến & IoT', desc: 'Giám sát EC/pH qua ứng dụng di động 24/7.' }
                ]
            }
        ]
    }
};
