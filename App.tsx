import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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

import MasterPlanningPage from './pages/MasterPlanningPage';
import GardenConstructionPage from './pages/GardenConstructionPage';
import GardenDesignPage from './pages/GardenDesignPage';
import ResortParkDesignPage from './pages/ResortParkDesignPage';
import RooftopGardenPage from './pages/RooftopGardenPage';
import VerticalGardenPage from './pages/VerticalGardenPage';
import LandscapeMaintenancePage from './pages/LandscapeMaintenancePage';
import LargeTreeInstallationPage from './pages/LargeTreeInstallationPage';
import GreenConsultingPage from './pages/GreenConsultingPage';
import CraneLogisticsPage from './pages/CraneLogisticsPage';
import CleanAgriculturePage from './pages/CleanAgriculturePage';
import ArchitectureDesignPage from './pages/ArchitectureDesignPage';
import TissueCultureBiotechPage from './pages/TissueCultureBiotechPage';
import ProductListingPage from './pages/ProductListingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />

          <Route path="/dich-vu" element={<ServicesPage />} />

          {/* Individual Service Pages */}
          <Route path="/dich-vu/thiet-ke-canh-quan-san-vuon" element={<GardenDesignPage />} />
          <Route path="/dich-vu/thiet-ke-quy-hoach" element={<MasterPlanningPage />} />
          <Route path="/dich-vu/thiet-ke-kien-truc" element={<ArchitectureDesignPage />} />
          <Route path="/dich-vu/thiet-ke-khu-nghi-duong-cong-vien" element={<ResortParkDesignPage />} />
          <Route path="/dich-vu/thiet-ke-vuon-tren-mai" element={<RooftopGardenPage />} />
          <Route path="/dich-vu/thiet-ke-vuon-thang-dung" element={<VerticalGardenPage />} />

          <Route path="/dich-vu/thi-cong-canh-quan-san-vuon" element={<GardenConstructionPage />} />
          <Route path="/dich-vu/cham-soc-canh-quan" element={<LandscapeMaintenancePage />} />
          <Route path="/dich-vu/thi-cong-cay-cong-trinh" element={<LargeTreeInstallationPage />} />
          <Route path="/dich-vu/tu-van-giai-phap-xanh" element={<GreenConsultingPage />} />
          <Route path="/dich-vu/van-tai-cau-tu-hanh" element={<CraneLogisticsPage />} />
          <Route path="/dich-vu/nuoi-cay-mo-cong-nghe-cao" element={<TissueCultureBiotechPage />} />
          <Route path="/dich-vu/thi-cong-nong-nghiep-sach" element={<CleanAgriculturePage />} />

          <Route path="/dich-vu/:slug" element={<ServiceDetailPage />} />

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