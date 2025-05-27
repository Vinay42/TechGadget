import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation  } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage, RegisterPage } from './pages/AuthPages';
import { CartPage } from './pages/CartPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { AccountPage } from './pages/AccountPage';

// Protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// App layout with header and footer
const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <CartProvider>
          <Routes>
            {/* Public routes */}
            <Route 
              path="/" 
              element={
                <AppLayout>
                  <HomePage />
                </AppLayout>
              } 
            />

            {/* Products */}
            <Route 
              path="/products" 
              element={
                <AppLayout>
                  <ProductsPage />
                </AppLayout>
              } 
            />

            <Route 
                path="/products/:id" 
                element={
                  <AppLayout>
                    <ProductDetailsPage />
                  </AppLayout>
                } 
              />

            {/* About Us */}
            <Route 
              path="/about" 
              element={
                <AppLayout>
                  <AboutPage />
                </AppLayout>
              } 
            />

            {/* News */}
            <Route 
              path="/news" 
              element={
                <AppLayout>
                  <NewsPage />
                </AppLayout>
              } 
            />

            {/* Contact */}
            <Route 
              path="/contact" 
              element={
                <AppLayout>
                  <ContactPage />
                </AppLayout>
              } 
            />

            {/* Auth routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Cart */}
            <Route 
              path="/cart" 
              element={
                <AppLayout>
                  <CartPage />
                </AppLayout>
              } 
            />
            
            {/* Protected routes */}
            <Route 
              path="/account/*" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <AccountPage />
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="/checkout" 
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <div className="container mx-auto px-4 py-16">
                      <h1 className="text-3xl font-bold">Checkout</h1>
                      <p className="mt-4">This page will be implemented next.</p>
                    </div>
                  </AppLayout>
                </ProtectedRoute>
              } 
            />
            
            {/* Fallback route */}
            <Route 
              path="*" 
              element={
                <AppLayout>
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-xl text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="text-primary-600 hover:text-primary-700 font-medium">
                        Go back home
                      </a>
                    </div>
                  </div>
                </AppLayout>
              } 
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;