import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsPage2 from './pages/ProjectsPage2';
import ServicesPage from './pages/ServicesPage';
import ProductListPage from './pages/ProductListPage';
import ArticlesPage from './pages/ArticlesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ThiCongSanVuonPage from './pages/ThiCongSanVuonPage';
import DanhSachCayPage from './pages/DanhSachCayPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Placeholder components - will be replaced with real page components
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <h1 className="text-3xl font-bold">{title} Page</h1>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/du-an-2" element={<ProjectsPage2 />} />
          <Route path="/dich-vu" element={<ServicesPage />} />
          <Route path="/danh-sach-san-pham" element={<ProductListPage />} />
          <Route path="/danh-sach-bai-viet" element={<ArticlesPage />} />
          <Route path="/chi-tiet-san-pham" element={<ProductDetailPage />} />
          <Route path="/chi-tiet-bai-viet" element={<ArticleDetailPage />} />
          <Route path="/thi-cong-san-vuon" element={<ThiCongSanVuonPage />} />
          <Route path="/danh-sach-cay" element={<DanhSachCayPage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;