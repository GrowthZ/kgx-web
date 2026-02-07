import { productsService } from '../services/productsService';
import { projectsService } from '../services/projectsService';
import { servicesService } from '../services/servicesService';
import { articlesService } from '../services/articlesService';
import { TREES, PROJECTS } from '../../constants';
import { SERVICES_DATA } from '../../services';

const ADDITIONAL_PROJECTS = [
    {
        slug: "biet-thu-sinh-thai-thai-nguyen",
        category: "Biệt thự",
        title: "Khu biệt thự sinh thái – Thái Nguyên",
        location: "Thái Nguyên",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDANnOg9h46n6hAt-m-WXV-3W8sOR2JOGZKGBGjESbaQ8UJQ0zC7fcsJ415XmH7mBL_A-C0PcSrq1N3Tzt0oZagRdp0W6IsamN3EGeovT4qzolqhoqCRcdpRfsn8-qYsBNUyt4xn0uMzboV_4OBNNSkwZAa8IF9DKaSx0GkhrZvZvfj-NPZ9hTbpq98m9FlkLP6AyRpgfSx_D1PivYxyOAS2BFtvyxjEXiFyS9FY6NAH6ILqRC5v5xgb5T1r7dtqn5yMc74ohjMBxU",
        aspect: "aspect-[16/10]",
    },
    {
        slug: "resort-bien-xanh-da-nang",
        category: "Resort",
        title: "Resort Biển Xanh - Đà Nẵng",
        location: "Đà Nẵng",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwABBafvqAqY1sJUIrMlMN7jTITR6vfS27K1TqYfoqLx24N0CugMCIh7Wn1RCLZIrjbDAsvJ_Cdq0HSn-V1Ux6p5miHxcntHhT7HwbmhG9UJSgMUdVqmyhxD1twd6frZsVmFsST3tcgJlR-YAOiP3E69o_UIaqWTkHFHQwJDR2mIHkpv2NXkKC7FbIJ5v3kHxAA0vfp6dhusNU33OlKZ8VcLXrUMgNG4RciT5VbJRlhvf4nNWpirJuFbpDtAho26MaddJ7UjBsIQY",
        aspect: "aspect-[16/10]",
    },
    {
        slug: "cong-vien-trung-tam-ha-noi",
        category: "Khu đô thị",
        title: "Công viên Trung tâm - Hà Nội",
        location: "Hà Nội",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGapnXmd1BSMXyVppomkqHT-kRkK6AXUGNQjnH-fK6LoizvG3suHQmtrAq7ek-Iceb7nQEe7XKec9oaF3Gkxrex4zTe9PWixk5Zxs9mER56lVzC6GeA9fWuJII8HYvP-D8NmT5z4AFShe42jvCdSiae8e2JyImMrOBq_AwTFmVuQf2YPJkzZ5Obg8Wtn_a07vRz7SkbQyi464teGidr-4ez0F5cnffpDBdKJSCJcDKftRMfcHeKMgFr-15-JPWQyT_MTVobtKDSvw",
        aspect: "aspect-[16/10]",
    }
];

const ARTICLES_DATA = [
    {
        slug: "xu-huong-thiet-ke-canh-quan-2024",
        title: "Xu hướng thiết kế cảnh quan bền vững năm 2024",
        excerpt: "Tìm hiểu cách kết hợp các loại cây bản địa và giải pháp tưới tiêu thông minh để tạo nên không gian xanh tiết kiệm chi phí vận hành...",
        category: "Xu hướng",
        featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP19osqeyigtVUV6OT8LZYku7lQYGwJkHcGW7J6lNANQxehV4wM7EU-byUHMRsMGrOtlyozUD4ZHd4ILx0vSA7I20ufGbFXHNG78yZ2CEW-Tb2lEiMzeoUGQmF-xpYmbKxgleTn5anTYvkTQbzDzownqeF_gRQzz7a_XaErZWSu-nwcuSkld4TcY8e38h0WofF8Qy6Nv-VFy1bWaTO2kVAegPh7KxGJyG6QYCDmklvBSU4aeo7gHGYAz0vrdoBTjP_FvBmWcTBMV8",
        content: `<h2>Vì sao cần quan tâm đến thổ nhưỡng?</h2><p>Khí hậu miền Bắc Việt Nam có đặc thù phân hóa rõ rệt: mùa hè nóng ẩm, mưa nhiều và mùa đông lạnh khô, thậm chí có sương muối. Đây là thử thách không nhỏ cho việc duy trì sự sống và vẻ đẹp của cây công trình.</p><p>Thổ nhưỡng miền Bắc thường là đất thịt pha, đất phù sa hoặc đất đồi rừng tùy khu vực. Việc kiểm tra độ pH và khả năng thoát nước của đất là bước tiên quyết trước khi quyết định chủng loại cây.</p><h2>5 Tiêu chí kỹ thuật hàng đầu</h2><p>Dựa trên kinh nghiệm thực chiến từ hơn 500 dự án cảnh quan, KGX đúc kết 5 tiêu chí vàng:</p><ul><li><strong>Khả năng chịu hạn và chịu lạnh:</strong> Ưu tiên các loại cây có bộ rễ sâu, lá dày.</li><li><strong>Tốc độ sinh trưởng:</strong> Cần cân đối giữa cây phát triển nhanh (che bóng) và cây chậm (ổn định cấu trúc).</li><li><strong>Tính an toàn:</strong> Rễ không làm hư hại công trình ngầm, cành dẻo dai chống chịu bão.</li><li><strong>Thẩm mỹ bền vững:</strong> Cây ít rụng lá, hoa nở theo mùa đặc trưng.</li><li><strong>Dễ bảo trì:</strong> Giảm thiểu chi phí cắt tỉa và phòng trừ sâu bệnh.</li></ul>`,
        published: true
    },
    {
        slug: "5-loai-cay-phong-thuy-tai-loc",
        title: "5 loại cây phong thủy mang lại tài lộc cho biệt thự",
        excerpt: "Tùng La Hán, Thiết Kế Kim Phát Tài, và các loại cây mang ý nghĩa thịnh vượng được chuyên gia KGX tư vấn cho không gian sống...",
        category: "Kiến thức",
        featuredImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5GJ2SX-QSXlDHDuOUM-X-pcf7QWSBdJ3tMZTmfr8fNC5iptTM_3EO5hTsEVN0JqyoDcDk3QceJLhqeaxMAm25LtBTZ6son62bmZoy25UH6yxvDuwsQm-hEfl-b1R_Hp91_wTZVbD-z_Fd4wy8fZlTkIU8q9m-WgXzO1z3YZ5YjtxhTrP2jITEjLb-vOL2AE9VMgZYcn5B6NW9gAsJ90OTXk60i0PwESJfT4W9DOoa63BAFeoHtQIrsi7m0tELhk5ol12i6Xf0HZs",
        content: `<p>Trong phong thủy cảnh quan, cây xanh không chỉ mang lại bóng mát mà còn là vật dẫn khí, chiêu tài đón lộc. Dưới đây là 5 loại cây được ưa chuộng nhất...</p>`,
        published: true
    }
];

async function migrateArticles() {
    console.log('Starting articles migration...');
    for (const article of ARTICLES_DATA) {
        try {
            const existing = await articlesService.getArticleBySlug(article.slug);
            if (existing) {
                console.log(`Article ${article.title} exists, refreshing content...`);
                await articlesService.updateArticle(existing.id!, article);
            } else {
                await articlesService.createArticle(article);
                console.log(`✓ Created article: ${article.title}`);
            }
        } catch (error) {
            console.error(`✗ Error articles migration:`, error);
        }
    }
}

async function migrateProducts() {
    console.log('Starting products migration...');
    for (const tree of TREES) {
        try {
            const existing = await productsService.getProductBySlug(tree.slug);
            if (existing) {
                console.log(`Product ${tree.name} exists, updating...`);
                await productsService.updateProduct(existing.id!, tree);
                continue;
            }
            await productsService.createProduct(tree);
            console.log(`✓ Created product: ${tree.name}`);
        } catch (error) {
            console.error(`✗ Error creating product ${tree.name}:`, error);
        }
    }
}

// Helper to remove undefined values from objects recursively for Firestore
function sanitizeData(data: any): any {
    if (Array.isArray(data)) {
        return data.map(sanitizeData);
    }
    if (data !== null && typeof data === 'object' && !(data instanceof Date)) {
        const sanitized: any = {};
        for (const [key, value] of Object.entries(data)) {
            if (value !== undefined) {
                sanitized[key] = sanitizeData(value);
            }
        }
        return sanitized;
    }
    return data;
}

async function migrateProjects() {
    console.log('Starting projects migration...');
    const allProjects = [...PROJECTS, ...ADDITIONAL_PROJECTS];
    for (const project of allProjects) {
        try {
            const existing = await projectsService.getProjectBySlug(project.slug);
            const projectData = sanitizeData({
                ...project,
                images: project.image ? [project.image] : [],
                filterCategory: project.category
            });
            // Ensure ID is not in the data body
            delete projectData.id;

            if (existing) {
                console.log(`Project ${project.slug} exists...`);
                await projectsService.updateProject(String(existing.id), projectData);
            } else {
                await projectsService.createProject(projectData);
                console.log(`✓ Created project: ${project.title}`);
            }
        } catch (error) {
            console.error(`✗ Error creating project ${project.title}:`, error);
        }
    }
}

// Helper to convert ReactNode (JSX) in titles to plain text for Firebase
function stripJSX(node: any): string {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (!node) return '';

    // If it's a React element (fragment or tag)
    if (node.props && node.props.children) {
        if (Array.isArray(node.props.children)) {
            return node.props.children.map(stripJSX).join(' ');
        }
        return stripJSX(node.props.children);
    }

    return '';
}

async function migrateServices() {
    console.log('Starting services migration...');
    const servicesArray = Object.values(SERVICES_DATA);
    for (const service of servicesArray) {
        try {
            const existing = await servicesService.getServiceBySlug(service.slug);
            const category = service.type === 'design' ? 'thiet-ke' : 'thi-cong';
            const categoryLabel = category === 'thiet-ke' ? 'Thiết kế' : 'Thi công';
            const title = stripJSX(service.hero.title);

            const serviceData: any = sanitizeData({
                slug: service.slug,
                title: title,
                category: category as 'thiet-ke' | 'thi-cong',
                categoryLabel: categoryLabel,
                description: service.hero.description || '',
                shortDescription: service.hero.subtitle,
                image: service.hero.image || '',
                features: [],
                images: service.hero.image ? [service.hero.image] : [],
                icon: '',
                order: servicesArray.indexOf(service),
                metaTitle: service.metaTitle,
                sections: service.sections?.map((s: any) => ({
                    title: s.title || s.type || 'Thông tin',
                    subtitle: s.subtitle,
                    description: s.description,
                    type: s.type,
                    items: s.items?.map((item: any) => ({
                        ...item,
                        icon: (item.icon || '').replace(/^rn_/, '')
                    })) || [],
                    image: s.image,
                    content: s.content || '' // for backward compatibility
                })) || []
            });

            if (existing) {
                console.log(`Service ${service.slug} exists, updating...`);
                await servicesService.updateService(String(existing.id), serviceData);
            } else {
                await servicesService.createService(serviceData);
                console.log(`✓ Created service: ${title}`);
            }
        } catch (error) {
            console.error(`✗ Error creating/updating service ${service.slug}:`, error);
        }
    }
}

export async function runMigration() {
    console.log('='.repeat(50));
    console.log('Starting Firebase Data Migration');
    console.log('='.repeat(50));
    try {
        await migrateProducts();
        await migrateProjects();
        await migrateServices();
        await migrateArticles();
        console.log('='.repeat(50));
        console.log('Migration completed successfully!');
        console.log('='.repeat(50));
    } catch (error) {
        console.error('Migration failed:', error);
    }
}

runMigration();
