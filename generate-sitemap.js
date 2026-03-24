import fs from 'fs';
import path from 'path';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load biến môi trường từ .env.local
dotenv.config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_APP_ID
};

// Khởi tạo Firebase trực tiếp trong script Node
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BASE_URL = 'https://kgxvn.vn';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
    try {
        console.log('Generating sitemap...');

        // 1. Lấy dữ liệu Dự án
        const projectsSnapshot = await getDocs(collection(db, 'projects'));
        const projects = projectsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // 2. Lấy dữ liệu Bài viết (Chỉ lấy bài đã xuất bản)
        const q = query(collection(db, 'articles'), where("published", "==", true));
        const articlesSnapshot = await getDocs(q);
        const articles = articlesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        // 3. Khởi tạo nội dung XML
        let urls = `
  <url>
    <loc>${BASE_URL}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/ve-chung-toi</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/dich-vu</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/du-an</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/tin-tuc</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${BASE_URL}/lien-he</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;

        // Thêm URL Dự án
        projects.forEach(project => {
            const timeDate = project.updatedAt?.toDate() || new Date();
            urls += `
  <url>
    <loc>${BASE_URL}/du-an/${project.slug || project.id}</loc>
    <lastmod>${timeDate.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
        });

        // Thêm URL Tin tức
        articles.forEach(article => {
            const timeDate = article.updatedAt?.toDate() || new Date();
            urls += `
  <url>
    <loc>${BASE_URL}/tin-tuc/${article.slug || article.id}</loc>
    <lastmod>${timeDate.toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        });

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

        // Ghi ra file public/sitemap.xml
        fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap, 'utf8');
        console.log('Sitemap generated successfully at public/sitemap.xml!');

        process.exit(0);
    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
