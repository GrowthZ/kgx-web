export const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    subLinks: [
      { label: "Thiết kế cảnh quan", href: "/dich-vu" },
      { label: "Thi công sân vườn", href: "/thi-cong-san-vuon" }
    ]
  },
  { label: "Dự án", href: "/du-an" },
  {
    label: "Sản phẩm",
    href: "/danh-sach-san-pham",
    subLinks: [
      { label: "Danh sách sản phẩm", href: "/danh-sach-san-pham" },
      { label: "Danh sách cây", href: "/danh-sach-cay" }
    ]
  },
  { label: "Tin tức", href: "/danh-sach-bai-viet" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const TRUST_ITEMS = [
  {
    icon: "chat",
    title: "Tư vấn rõ ràng",
    subtitle: "Giải pháp tối ưu nhất",
  },
  {
    icon: "architecture",
    title: "Thi công chuẩn",
    subtitle: "Cam kết giống 3D 100%",
  },
  {
    icon: "payments",
    title: "Minh bạch chi phí",
    subtitle: "Không phát sinh",
  },
  {
    icon: "verified_user",
    title: "Bảo hành dài hạn",
    subtitle: "Hỗ trợ trọn đời",
  },
];

export const DESIGN_SERVICES = [
  {
    icon: "park",
    title: "Thiết kế Cảnh quan",
    desc: "Sân vườn biệt thự, Resort, Công viên, Khu đô thị, Nhà máy công nghiệp.",
  },
  {
    icon: "map",
    title: "Quy hoạch Tổng thể",
    desc: "Tư vấn quy hoạch không gian xanh cho các dự án bất động sản lớn.",
  },
  {
    icon: "deck",
    title: "Kiến trúc Cảnh quan",
    desc: "Thiết kế chòi nghỉ, hồ cá Koi, tiểu cảnh nước, đài phun nước nghệ thuật.",
  },
  {
    icon: "lightbulb",
    title: "Giải pháp Chiếu sáng",
    desc: "Hệ thống chiếu sáng cảnh quan thông minh, tiết kiệm năng lượng.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    category: "Biệt thự vườn",
    title: "Vườn Nhật Zen Garden",
    location: "Ecopark, Hưng Yên",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIWkBrkVujSkCEv28X98ia5T97q6vpofNXOPI3_EQ0u8CpGxS88erKin4WVMAP1ey1a9DDc1KvJOV51QXQ8qGY5X_-8bxdD5d4OvVci11GHdcaP9QPfMT_bnUFlpHL29dRCXtTHHCRlsOPebXAJAsW6DCVPC9uqw1vsdWE2ZXsuIK39cjKbEgJuX_5jGujUNz8a0fgDMHVtostCa0W6jAHh5lclacbzHLH6zF7YzPLDhw4V4O933j1aYDXwGRj4wOLrStASMrQ5o",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    category: "Resort & KS",
    title: "Flamingo Đại Lải Villa",
    location: "Vĩnh Phúc",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBepVw-YXGJHpjboHTXSwKoKuqobuV0lHT_kEyj2dSjUxcdrZzumB8GUvFzUP4B4ofTStEa83DOTXyljVTxTlfObaTJKX7r172OgKVP7M6YPD8l5ezZ8AA55R2pUWREOluIiaYtLWHPhR7eOyRgFZUuAdug09eR0fLvad4RpfmnAhcj0DsgcsYdMvED95qWF-_ENm7e9iVS-7GI5vKBIDmWAJadXaDlrNBLBvmdzDRUlm58To0pMImxsB9_9G_Tzdl_rQHpZNjyfbY",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    category: "Cảnh quan Resort", // Mapped to Resort & KS for filtering usually, but keeping exact for display
    filterCategory: "Resort & KS",
    title: "Six Senses Côn Đảo",
    location: "Bà Rịa - Vũng Tàu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlzWYgQc5FT__Ce0TGBxThfRsCvjv9HpUTK2yFKeFxuUHUKx913SeH3es5D_gqz2uWKOgl5eyLAWKeUWG6MouqtVZFw7nparIEWoGJdKwKgvUa2tedUDIA_n_VfCQNkOJFYtB1zt6Ra2nO8I7lv5XjKnmifhco8p2qqVZqCUG13qRIGg12ChwCs-6vJLJwfJJjkki8AZNl0l1rvhdbCVEN0q4Ml818ldqMIvzII5LR6ZtSJZk8j-LDcM-uOLkEKfn6p_HcEuDf6II",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    category: "Hồ cá Koi",
    title: "Biệt thự Vinhomes Riverside",
    location: "Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeZinzARARra6US7CKVLmq-3sxPFLZBFWr5cN9W5Nf3U4g10pdRwo5fHKekFCCzkm_fcmzihQNe5VqXys8eXYNEBLK1QNSh6IMbOjjt6vTnDJ6GuWFVUCH4iccZmc5NYPqVCYh7Bct8NEgASC0FdWyMNIK4yE7e9oJTnZvkNZN36aVJ7Cj7iLcc609tG3ZnnkVSjliMbqR65X027lCzv9iWMJDPtpaWHppad-RS046wNWhqe8TMeYZ4w1OopwSR9QI5GR_WBkLKtc",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    category: "Công trình công cộng", // Mapped from Cảnh quan đứng
    filterCategory: "Công trình công cộng",
    displayCategory: "Cảnh quan đứng",
    title: "Sky Garden Office",
    location: "Cầu Giấy, Hà Nội",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbb2zEM0-OUyRbLWPwkL5RzzeXXzluborG2vBYrc4-xO62EqEkZ40ZAcMsUrLHoH8LN4p5GHbQk-ctX5zrY8tXSmytjY__Oj62UXAS3CoxWFCZ2VwuCIF6Vi_SewmET_0cUeYQnBxFc5lGAJYmqJSb6McC9NySuXrJnQrPWcTEmN75FyrRxZa6zSkCG0t2VgYGdR2CTAl3anxq-pnciGvNAoY1Kc8y8zPXK13TVg6a64ZqQoddIzNRmyyUwTC0dnN8lcAjfz8_WU0",
    aspect: "aspect-[3/4]",
  },
];

export const FAQS = [
  {
    question: "Chi phí thiết kế cảnh quan được tính như thế nào?",
    answer: "Chi phí thiết kế thường được tính theo m2 diện tích thiết kế, dao động tùy thuộc vào độ phức tạp và phong cách yêu cầu. Với các dự án thi công trọn gói, KGX thường có chính sách ưu đãi hoặc miễn phí thiết kế.",
  },
  {
    question: "Thời gian thi công một sân vườn biệt thự mất bao lâu?",
    answer: "Thời gian thi công phụ thuộc vào quy mô và hạng mục công việc. Thông thường, một sân vườn biệt thự từ 100-300m2 sẽ mất khoảng 15-25 ngày để hoàn thiện phần cứng và trồng cây.",
  },
  {
    question: "Chế độ bảo hành cây xanh của KGX như thế nào?",
    answer: "Chúng tôi bảo hành cây xanh từ 1-3 tháng tùy loại cây và điều kiện chăm sóc. Đối với cây bóng mát lớn, thời gian bảo hành có thể lên đến 6 tháng. KGX cũng cung cấp gói dịch vụ chăm sóc định kỳ sau bảo hành.",
  },
  {
    question: "KGX có nhận thi công ở các tỉnh xa không?",
    answer: "Có, KGX hoạt động trên toàn quốc. Chúng tôi có trụ sở tại Thái Nguyên và các đội ngũ thi công lưu động sẵn sàng phục vụ các dự án ở các tỉnh thành lân cận và cả nước.",
  },
];

export const STEPS = [
  { id: 1, title: "Tiếp nhận", desc: "Thông tin & yêu cầu" },
  { id: 2, title: "Khảo sát", desc: "Hiện trạng thực tế" },
  { id: 3, title: "Thiết kế", desc: "Concept & 3D" },
  { id: 4, title: "Báo giá", desc: "Chi tiết & Hợp đồng" },
  { id: 5, title: "Thi công", desc: "Giám sát chặt chẽ" },
  { id: 6, title: "Bảo hành", desc: "Chăm sóc sau bán" },
];