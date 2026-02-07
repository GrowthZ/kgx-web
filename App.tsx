import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
import CatalogPage from './pages/CatalogPage';

import GardenConstructionPage from './pages/GardenConstructionPage';
import GardenDesignPage from './pages/GardenDesignPage';
import ProductListingPage from './pages/ProductListingPage';

// Admin imports
import { AuthProvider, ProtectedRoute } from './src/contexts/AuthContext';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminArticlesPage from './pages/admin/AdminArticlesPage';
import ArticleForm from './pages/admin/ArticleForm';
import AdminProjectsPage from './pages/admin/AdminProjectsPage';
import ProjectForm from './pages/admin/ProjectForm';
import AdminContactsPage from './pages/admin/AdminContactsPage';
import AdminServicesPage from './pages/admin/AdminServicesPage';
import ServiceForm from './pages/admin/ServiceForm';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <AdminProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects"
            element={
              <ProtectedRoute>
                <AdminProjectsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects/new"
            element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/projects/edit/:id"
            element={
              <ProtectedRoute>
                <ProjectForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <ProtectedRoute>
                <AdminArticlesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/new"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/articles/edit/:id"
            element={
              <ProtectedRoute>
                <ArticleForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/contacts"
            element={
              <ProtectedRoute>
                <AdminContactsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services"
            element={
              <ProtectedRoute>
                <AdminServicesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/services/edit/:id"
            element={
              <ProtectedRoute>
                <ServiceForm />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route
            path="*"
            element={
              <>
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
                    <Route path="/catalog" element={<CatalogPage />} />

                    <Route path="/du-an" element={<ProjectsPage />} />
                    <Route path="/du-an/:slug" element={<ProjectDetailPage />} />

                    <Route path="/tin-tuc" element={<ArticlesPage />} />
                    <Route path="/tin-tuc/:slug" element={<ArticleDetailPage />} />

                    <Route path="/lien-he" element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;