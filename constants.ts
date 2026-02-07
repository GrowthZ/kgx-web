export const NAV_LINKS = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Dịch vụ",
    href: "/dich-vu",
    subLinks: [
      {
        label: "Thiết kế cảnh quan",
        href: "/dich-vu/thiet-ke",
        items: [
          { label: "Thiết kế sân vườn", href: "/dich-vu/thiet-ke/thiet-ke-canh-quan-san-vuon" },
          { label: "Thiết kế quy hoạch", href: "/dich-vu/thiet-ke/thiet-ke-quy-hoach" },
          { label: "Thiết kế kiến trúc", href: "/dich-vu/thiet-ke/thiet-ke-kien-truc" },
          { label: "Thiết kế khu nghỉ dưỡng & công viên", href: "/dich-vu/thiet-ke/thiet-ke-khu-nghi-duong-cong-vien" },
          { label: "Thiết kế vườn trên mái", href: "/dich-vu/thiet-ke/thiet-ke-vuon-tren-mai" },
          { label: "Thiết kế vườn thẳng đứng", href: "/dich-vu/thiet-ke/thiet-ke-vuon-thang-dung" },
        ]
      },
      {
        label: "Thi công cảnh quan",
        href: "/dich-vu/thi-cong",
        items: [
          { label: "Thi công sân vườn", href: "/dich-vu/thi-cong/thi-cong-canh-quan-san-vuon" },
          { label: "Chăm sóc cảnh quan", href: "/dich-vu/thi-cong/cham-soc-canh-quan" },
          { label: "Thi công cây công trình", href: "/dich-vu/thi-cong/thi-cong-cay-cong-trinh" },
          { label: "Tư vấn giải pháp xanh", href: "/dich-vu/thi-cong/tu-van-giai-phap-xanh" },
          { label: "Dịch vụ vận tải cẩu tự hành", href: "/dich-vu/thi-cong/van-tai-cau-tu-hanh" },
          { label: "Dịch vụ nuôi cấy mô công nghệ cao", href: "/dich-vu/thi-cong/nuoi-cay-mo-cong-nghe-cao" },
          { label: "Thi công nông nghiệp sạch", href: "/dich-vu/thi-cong/thi-cong-nong-nghiep-sach" },
        ]
      }
    ]
  },
  { label: "Dự án", href: "/du-an" },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    subLinks: [
      { label: "Tất cả sản phẩm", href: "/san-pham/tat-ca" },
      { label: "Cây nội thất", href: "/san-pham/nhom/cay-noi-that" },
      { label: "Cây công trình", href: "/san-pham/nhom/cay-cong-trinh" },
      { label: "Cây tiểu cảnh & sân vườn", href: "/san-pham/nhom/cay-tieu-canh-san-vuon" },
      { label: "Cây bonsai & nghệ thuật", href: "/san-pham/nhom/cay-bonsai-nghe-thuat" },
      { label: "Cây nuôi cấy mô", href: "/san-pham/nhom/cay-nuoi-cay-mo" },
      { label: "Chậu & Vật tư trồng", href: "/san-pham/nhom/chau-cay-vat-tu-trong" }
    ]
  },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "AI", href: "https://ai.studio/apps/drive/1D-atdAKDf1y0-wr6QPhV5J-nOAtF_Vmf?fullscreenApplet=true" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const TREE_CATEGORIES = [
  { slug: "cay-noi-that", name: "Cây nội thất", desc: "Các loại cây chịu bóng, thanh lọc không khí, phù hợp văn phòng và nhà ở cao cấp. Đảm bảo sức sống bền bỉ trong môi trường thiếu sáng.", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=2070&auto=format&fit=crop" },
  { slug: "cay-cong-trinh", name: "Cây công trình", desc: "Cây bóng mát kích thước lớn, cây đường phố, công viên. Cung cấp số lượng lớn cho các dự án đô thị và khu dân cư.", image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2070&auto=format&fit=crop" },
  { slug: "cay-tieu-canh-san-vuon", name: "Cây tiểu cảnh & sân vườn", desc: "Cây bụi, cây hoa, thảm cỏ cho biệt thự, resort. Thiết kế đa tầng tán tạo điểm nhấn thẩm mỹ cho không gian xanh.", image: "https://images.unsplash.com/photo-1558905619-1af480c2941c?q=80&w=2070&auto=format&fit=crop" },
  { slug: "cay-bonsai-nghe-thuat", name: "Cây bonsai & nghệ thuật", desc: "Nghệ thuật cây cảnh dáng thế, cây cổ thụ. Sản phẩm dành cho không gian sang trọng, sảnh chờ và bộ sưu tập riêng.", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=2070&auto=format&fit=crop" },
  { slug: "cay-nuoi-cay-mo", name: "Cây nuôi cấy mô", desc: "Giống cây chất lượng cao, sạch bệnh, đồng đều về di truyền. Giải pháp cho các dự án nông nghiệp công nghệ cao.", image: "https://images.unsplash.com/photo-1581093191605-a1d30f5ec66c?q=80&w=2070&auto=format&fit=crop" },
  { slug: "chau-cay-vat-tu-trong", name: "Chậu & Vật tư trồng", desc: "Cung cấp chậu composite, đất trồng, phân bón và hệ thống tưới tự động đồng bộ cho cảnh quan.", image: "https://images.unsplash.com/photo-1485053077717-380ff9602e1c?q=80&w=2070&auto=format&fit=crop" },
];

export const TREES = [
  {
    slug: "cay-bang-dai-loan",
    name: "Cây Bàng Đài Loan",
    scientificName: "Terminalia mantaly",
    categorySlug: "cay-cong-trinh",
    category: "Cây công trình",
    height: "10m - 20m",
    growth: "Nhanh",
    light: "Ưa sáng toàn phần",
    water: "Trung bình",
    leaves: "Lá nhỏ, tán xếp tầng đẹp mắt",
    description: "Loại cây phù hợp cho sân vườn và công trình đô thị. Đặc biệt thích hợp với khí hậu Việt Nam, tạo bóng mát và cảnh quan hiện đại với tán lá xếp tầng độc đáo.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2070&auto=format&fit=crop",
    macroImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2070&auto=format&fit=crop",
    pros: [
      { title: 'Dáng cây đẹp tự nhiên', desc: 'Tán xếp tầng như chiếc ô, không cần cắt tỉa cầu kỳ vẫn đẹp.' },
      { title: 'Thích nghi tốt', desc: 'Phù hợp hoàn hảo với khí hậu nhiệt đới gió mùa tại Việt Nam.' },
      { title: 'Ít sâu bệnh', desc: 'Cây khỏe mạnh, ít tốn công chăm sóc và bảo vệ thực vật.' },
      { title: 'Tuổi thọ cao', desc: 'Là cây thân gỗ lâu năm, giá trị cảnh quan tăng theo thời gian.' }
    ],
    cons: [
      { title: 'Khoảng cách trồng', desc: 'Rễ cây phát triển mạnh, nên trồng cách công trình xây dựng tối thiểu 3-4m.' },
      { title: 'Rụng lá theo mùa', desc: 'Cây có thể rụng lá vào mùa đông (miền Bắc), cần dọn dẹp vệ sinh.' },
      { title: 'Chăm sóc giai đoạn đầu', desc: 'Cần cọc chống chắc chắn khi mới trồng để tránh đổ ngã do gió bão.' }
    ],
    care: [
      { icon: 'water_drop', title: 'Tưới nước', desc: 'Tưới 2-3 lần/tuần vào sáng sớm hoặc chiều mát. Đảm bảo đất thoát nước tốt.' },
      { icon: 'compost', title: 'Bón phân', desc: 'Sử dụng phân NPK định kỳ 3 tháng/lần để kích thích ra lá và rễ.' },
      { icon: 'content_cut', title: 'Cắt tỉa', desc: 'Cắt bỏ cành khô, cành gầm thấp mỗi năm 1 lần để nâng cao tán.' },
      { icon: 'pest_control', title: 'Phòng trừ sâu bệnh', desc: 'Kiểm tra sâu ăn lá vào mùa xuân. Phun thuốc sinh học nếu cần thiết.' }
    ],
    applications: [
      {
        title: "Sân vườn Biệt thự",
        desc: "Tạo điểm nhấn sang trọng và bóng mát cho khuôn viên.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxwRqHXrpdjUYaYGS2rbm-jIB0ITpGwiCtKH4Rqq1kpGaJk6DKGJ5BBPOnU3QF_ogihQ-qd8nHnZP-li7Ky_OGbX2anIo_touDvF0jcHufq-uCnPiqfNeRpl6slBphzFA0HprvS2tIg1fCUWxSTEYo5bhO22X3AReWqrCSO92KD4rh7I0-PrdDiHhgPLB3Z3Iiu78IvTKUIGFmLhpuwA7TeYN4HUzeYjq4Emr7H6eGOxaXmJg6KGWHL_G0aWnSaPEl4ujzmTE13mI"
      },
      {
        title: "Công viên & Đô thị",
        desc: "Trồng dọc lối đi tạo cảnh quan thẳng tắp, xanh mát.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3oaXgh9iL_LckBjP4JyikPyfWt-9_d_2B7WSO4rWg6Zn6PxIHVTStQs7xbVs6xkW23W3fEUZ2NYoicd1xGnboL4yLNifZKdVCV30av9lZZrZ4UyNAXbX3l0pQe1zc0fruTke8L3-Q6053Ll624drGJGF6QqdJ5WNXHmHWmR2_B24op759KR_ddy5Vn_600LyYfFpc4W1ciDgO4Rm21p-m9ENWs499cZrpsrQrTUGqoFU4Chd-naQ_MBsCqSs2-o1CWGDP0ztiyc0"
      },
      {
        title: "Khu nghỉ dưỡng (Resort)",
        desc: "Mang lại vẻ đẹp nhiệt đới hiện đại và thư giãn.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0lU0I-mTs7slnk7gK9G2otOcM4WgporkelVOWZTRtdOzD_JWXbZmznvbgout5oqY0Il6T7UJKnAeUUcpf3xX4KO9VuyZi0Q3QBaQ8qLHFU0540EG8odXrhoeNTmPc5B9yhb4-r24tab-whT40zS1tK080RlE94el3sWPHiryVIF27aUdotNs9-ukf43V07MdOpljznZR-M-vn7IX20VRgNAxOnXCyiZPlCYY9vHL7Usu0NYdS8xK2UwNDau32bLblU-6DszmCPjY"
      }
    ],
    targetProfiles: [
      { icon: "home", title: "Chủ nhà ở", desc: "Tạo bóng mát cho sân vườn, tăng tính thẩm mỹ và giá trị cho ngôi nhà.", color: "bg-blue-50 text-blue-600" },
      { icon: "apartment", title: "Chủ đầu tư", desc: "Cảnh quan đô thị, công viên dự án với chi phí bảo dưỡng thấp.", color: "bg-purple-50 text-purple-600" },
      { icon: "storefront", title: "Doanh nghiệp", desc: "Cây xanh văn phòng, nhà máy, tạo môi trường làm việc xanh.", color: "bg-orange-50 text-orange-600" },
      { icon: "pool", title: "Khu nghỉ dưỡng", desc: "Kiến tạo không gian thư giãn, check-in sang trọng cho du khách.", color: "bg-green-50 text-green-600" }
    ],
    featuredProjects: [
      { title: "Biệt thự Thái Nguyên", year: "2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc9rM-DBcfvauzpJPtgKh7csG3nrNS_WYwkv244vRKANSSntx9ZNjZFjfZs22Y7UfOFeUwMbkCCzRL-Vem0iXIfkGZYmiJBl5ecrmVtWldn-rOZY3745R9dRFlYu-wzajGe3N6evVDVni_KmVVARX1Y4r7puBCIenisyaUhdqFGw-vXrnOnWfdTNPXM8be6CyXM-Ov0GWwKcigzuNmJWrE4cNluV99-joDDfhzt5YZ3f2QTVMRn1QPjX3YCWj1r4MEkCeShWoA3gg" },
      { title: "Resort Flamingo", year: "2022", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDReLUDOAiD2-FyYsocYfbHv-QLdd9WxX1_7sE2-SCFXIzZgiVTvw4HmPCPMh5XeO2kNfLiSQdfFgNpvwNdQgDWHrvk3IGwyu5yrhFN_J5BFZd-2lSheNArfQSTfhPxOKloW5Gs8Ewjf-NJuZhlnUR_QwnS2Du2ZoPbntj35OdMz_bGSAA3PJE1F3GLDAd1YRlVLQrYIa-SoYVgos-8UhT2IvVNV8OG-AYDN7T5wjlysxo9lTp_E70gIJZlDmFvlCIrNe0mwOIjY_c" },
      { title: "Khu đô thị Ecopark Hưng Yên", year: "2023", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDDwGLSJpZ7e9P9CAo03O9cDN-kEqIWgf6KgQTlUI2tS4Hxw2Ew_HUXGW6yyPphIdMHbxWXMmRtuV9PG3Gj16IWQfUX4KiMTN5xINoL3n6QfTXPMB8SYq9QjbiDT3Ynkr5S4yDxx5t9K-7Hv0l2s9oDgtlNzqDVx46TXajXmcHtNfHTfPXiocEtbV4vQA0EJ0FE7Tx_LCAKTZNnZzvkrne6tHuWkct_CSJsbUvmV443wkuCv0JO7SmF4kS1n0OK6wlEjxsrI-kbxo" },
      { title: "Khách sạn Mường Thanh", year: "2021", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTTTfczl8HuEiGfqleEDhfOmTUAzbN_D0d7Ut_NGtDKpqRa82N_kh5t9vWghpCNcOGnnEKk4MoBuTw8OB5fZmWmOTY_ARfuc9AgsAoDEKWASNX6n8P6X7csdOycEcl0ear4u1Bd582OJlr-rEGJnXn8CpWT2eXeyp5plyIuoxIdtTTuJ_n1L_9ib4AMsl0U8BTXBBwK0uofebd5mqJDvFNtNqxyaRwMDkg7v0nnoC_D3RXREcVlKZzLqrumLtCVT8gX8uKINpNmxg" }
    ]
  },
  {
    slug: "cay-cha-la-phoenix",
    name: "Cây Chà Là Phoenix",
    scientificName: "Phoenix roebelenii",
    categorySlug: "cay-tieu-canh-san-vuon",
    category: "Cây tiểu cảnh & sân vườn",
    height: "2m - 5m",
    growth: "Chậm",
    light: "Ưa sáng / Bán râm",
    water: "Trung bình",
    leaves: "Lá kép lông chim, rũ cong mềm mại",
    description: "Loại cây mang vẻ đẹp nhiệt đới sang trọng, thường được dùng tạo điểm nhấn cho sảnh resort, biệt thự hoặc các khu vực tiểu cảnh hồ bơi.",
    image: "https://images.unsplash.com/photo-1558905619-1af480c2941c?q=80&w=2070&auto=format&fit=crop",
    macroImage: "https://images.unsplash.com/photo-1558905619-1af480c2941c?q=80&w=2070&auto=format&fit=crop",
    pros: [
      { title: 'Vẻ đẹp nhiệt đới', desc: 'Dáng cây sang trọng, tạo cảm giác thư giãn như ở resort.' }
    ],
    cons: [
      { title: 'Gai nhọn', desc: 'Cuống lá có gai cứng, cần lưu ý khi trồng ở khu vực có trẻ em.' }
    ],
    care: [
      { icon: 'water_drop', title: 'Tưới nước', desc: 'Tưới 1-2 lần/tuần. Chú ý không để úng nước ở cổ rễ.' }
    ]
  },
  {
    slug: "cay-luoi-ho",
    name: "Cây Lưỡi Hổ",
    scientificName: "Sansevieria trifasciata",
    categorySlug: "cay-noi-that",
    category: "Cây nội thất",
    height: "30cm - 1m",
    growth: "Trung bình",
    light: "Chịu bóng / Ánh sáng gián tiếp",
    water: "Ít",
    leaves: "Lá mọc thẳng, cứng cáp, vằn xanh vàng",
    description: "Lưỡi hổ là loại cây nội thất quốc dân, có khả năng lọc không khí cực tốt, đặc biệt là vào ban đêm.",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=2028&auto=format&fit=crop",
    pros: [{ title: "Lọc không khí", desc: "Hấp thụ các khí độc hại như formaldehyde và benzene." }],
    cons: [{ title: "Úng nước", desc: "Rất dễ chết nếu tưới quá nhiều nước gây thối rễ." }],
    care: [{ icon: "water_drop", title: "Tưới nước", desc: "Chỉ tưới khi đất đã khô hẳn, khoảng 10-14 ngày/lần." }]
  },
  {
    slug: "cay-hanh-phuc",
    name: "Cây Hạnh Phúc",
    scientificName: "Radermachera sinica",
    categorySlug: "cay-noi-that",
    category: "Cây nội thất",
    height: "1.5m - 2.5m",
    growth: "Nhanh",
    light: "Ánh sáng tán xạ",
    water: "Trung bình",
    leaves: "Lá nhỏ, xanh bóng, mọc sum suê",
    description: "Cây mang ý nghĩa phong thủy tốt lành, tạo không gian xanh mát và bình yên cho phòng khách hoặc văn phòng.",
    image: "https://images.unsplash.com/photo-1510212330240-6644a343e6a0?q=80&w=1974&auto=format&fit=crop",
    pros: [{ title: "Thẩm mỹ cao", desc: "Tán lá xanh mướt, tạo cảm giác tràn đầy sức sống." }],
    cons: [{ title: "Rụng lá", desc: "Cây có thể rụng lá nếu thay đổi môi trường đột ngột hoặc thiếu sáng." }],
    care: [{ icon: "water_drop", title: "Tưới nước", desc: "Tưới đều đặn 2-3 lần/tuần, giữ ẩm nhưng không sũng nước." }]
  },
  {
    slug: "cay-tung-la-han",
    name: "Cây Tùng La Hán",
    scientificName: "Podocarpus costalis",
    categorySlug: "cay-bonsai-nghe-thuat",
    category: "Cây bonsai & nghệ thuật",
    height: "2m - 10m",
    growth: "Chậm",
    light: "Ưa sáng",
    water: "Trung bình",
    leaves: "Lá nhỏ, hẹp, xanh quanh năm",
    description: "Loại cây quý hiếm trong nghệ thuật cây cảnh, tượng trưng cho sự trường thọ và khí phách của quân tử.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=2070&auto=format&fit=crop",
    pros: [{ title: "Giá trị cao", desc: "Càng lâu năm cây càng có giá trị về mặt nghệ thuật và kinh tế." }],
    cons: [{ title: "Kỹ thuật cao", desc: "Cần thợ lành nghề để tạo dáng và duy trì form bonsai." }],
    care: [{ icon: "content_cut", title: "Cắt tỉa", desc: "Cắt tỉa định kỳ để giữ dáng và loại bỏ cành thừa." }]
  },
  {
    slug: "cay-lan-y",
    name: "Cây Lan Ý",
    scientificName: "Spathiphyllum wallisii",
    categorySlug: "cay-nuoi-cay-mo",
    category: "Cây nuôi cấy mô",
    height: "30cm - 60cm",
    growth: "Nhanh",
    light: "Bán râm",
    water: "Nhiều",
    leaves: "Lá to, xanh thẫm, hoa trắng muốt",
    description: "Sản phẩm từ phòng Lab công nghệ cao, đảm bảo cây khỏe mạnh, đồng đều và có khả năng chống chịu sâu bệnh tốt.",
    image: "https://images.unsplash.com/photo-1593542461154-20b171638202?q=80&w=1935&auto=format&fit=crop",
    pros: [{ title: "Đồng nhất", desc: "Cây có chất lượng đồng đều nhờ công nghệ nhân giống Invitro." }],
    cons: [{ title: "Héo nhanh", desc: "Cần duy trì độ ẩm thường xuyên, lá sẽ héo rũ nếu thiếu nước." }],
    care: [{ icon: "water_drop", title: "Tưới nước", desc: "Tưới 1-2 ngày/lần, có thể trồng thủy sinh." }]
  },
  {
    slug: "chau-composite-cao-cap",
    name: "Chậu Composite Cao Cấp",
    scientificName: "N/A",
    categorySlug: "chau-cay-vat-tu-trong",
    category: "Chậu & Vật tư trồng",
    height: "40cm - 1m",
    growth: "N/A",
    light: "N/A",
    water: "N/A",
    leaves: "Bề mặt bóng bẩy, đa dạng màu sắc",
    description: "Chậu composite siêu nhẹ, bền bỉ, chịu được tác động thời tiết khắc nghiệt, phù hợp cho cả không gian nội và ngoại thất.",
    image: "https://images.unsplash.com/photo-1485053077717-380ff9602e1c?q=80&w=2070&auto=format&fit=crop",
    pros: [{ title: "Siêu nhẹ", desc: "Dễ dàng di chuyển so với các loại chậu xi măng hay gốm sứ truyền thống." }],
    cons: [{ title: "Giá thành", desc: "Giá cao hơn so với các loại chậu nhựa thông thường." }],
    care: [{ icon: "cleaning_services", title: "Vệ sinh", desc: "Chỉ cần lau bằng khăn ẩm để giữ bề mặt luôn sáng bóng." }]
  }
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
    slug: "vuon-nhat-zen-garden",
    category: "Biệt thự vườn",
    title: "Vườn Nhật Zen Garden",
    location: "Ecopark, Hưng Yên",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIWkBrkVujSkCEv28X98ia5T97q6vpofNXOPI3_EQ0u8CpGxS88erKin4WVMAP1ey1a9DDc1KvJOV51QXQ8qGY5X_-8bxdD5d4OvVci11GHdcaP9QPfMT_bnUFlpHL29dRCXtTHHCRlsOPebXAJAsW6DCVPC9uqw1vsdWE2ZXsuIK39cjKbEgJuX_5jGujUNz8a0fgDMHVtostCa0W6jAHh5lclacbzHLH6zF7YzPLDhw4V4O933j1aYDXwGRj4wOLrStASMrQ5o",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    slug: "flamingo-dai-lai-villa",
    category: "Resort & KS",
    title: "Flamingo Đại Lải Villa",
    location: "Vĩnh Phúc",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBepVw-YXGJHpjboHTXSwKoKuqobuV0lHT_kEyj2dSjUxcdrZzumB8GUvFzUP4B4ofTStEa83DOTXyljVTxTlfObaTJKX7r172OgKVP7M6YPD8l5ezZ8AA55R2pUWREOluIiaYtLWHPhR7eOyRgFZUuAdug09eR0fLvad4RpfmnAhcj0DsgcsYdMvED95qWF-_ENm7e9iVS-7GI5vKBIDmWAJadXaDlrNBLBvmdzDRUlm58To0pMImxsB9_9G_Tzdl_rQHpZNjyfbY",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    slug: "six-senses-con-dao",
    category: "Cảnh quan Resort",
    filterCategory: "Resort & KS",
    title: "Six Senses Côn Đảo",
    location: "Bà Rịa - Vũng Tàu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlzWYgQc5FT__Ce0TGBxThfRsCvjv9HpUTK2yFKeFxuUHUKx913SeH3es5D_gqz2uWKOgl5eyLAWKeUWG6MouqtVZFw7nparIEWoGJdKwKgvUa2tedUDIA_n_VfCQNkOJFYtB1zt6Ra2nO8I7lv5XjKnmifhco8p2qqVZqCUG13qRIGg12ChwCs-6vJLJwfJJjkki8AZNl0l1rvhdbCVEN0q4Ml818ldqMIvzII5LR6ZtSJZk8j-LDcM-uOLkEKfn6p_HcEuDf6II",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    slug: "biet-thu-vinhomes-riverside",
    category: "Hồ cá Koi",
    title: "Biệt thự Vinhomes Riverside",
    location: "Long Biên, Hà Nội",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeZinzARARra6US7CKVLmq-3sxPFLZBFWr5cN9W5Nf3U4g10pdRwo5fHKekFCCzkm_fcmzihQNe5VqXys8eXYNEBLK1QNSh6IMbOjjt6vTnDJ6GuWFVUCH4iccZmc5NYPqVCYh7Bct8NEgASC0FdWyMNIK4yE7e9oJTnZvkNZN36aVJ7Cj7iLcc609tG3ZnnkVSjliMbqR65X027lCzv9iWMJDPtpaWHppad-RS046wNWhqe8TMeYZ4w1OopwSR9QI5GR_WBkLKtc",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    slug: "sky-garden-office",
    category: "Công trình công cộng",
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