import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import ProductListPage from './pages/ProductListPage';
import ArticlesPage from './pages/ArticlesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TreeCategoryPage from './pages/TreeCategoryPage';

import GardenConstructionPage from './pages/GardenConstructionPage';
import GardenDesignPage from './pages/GardenDesignPage';
import ProductListingPage from './pages/ProductListingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />

          <Route path="/dich-vu" element={<ServicesPage />} />

          {/* Individual Service Pages handled by dynamic route */}
          <Route path="/dich-vu/:category/:slug" element={<ServiceDetailPage />} />
          <Route path="/dich-vu/thiet-ke" element={<GardenDesignPage />} />
          <Route path="/dich-vu/thi-cong" element={<GardenConstructionPage />} />

          <Route path="/san-pham" element={<ProductListPage />} />
          <Route path="/san-pham/tat-ca" element={<ProductListingPage />} />
          <Route path="/san-pham/nhom/:categorySlug" element={<TreeCategoryPage />} />
          <Route path="/san-pham/:slug" element={<ProductDetailPage />} />

          <Route path="/du-an" element={<ProjectsPage />} />
          <Route path="/du-an/:slug" element={<ProjectDetailPage />} />

          <Route path="/tin-tuc" element={<ArticlesPage />} />
          <Route path="/tin-tuc/:slug" element={<ArticleDetailPage />} />

          <Route path="/lien-he" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;