import { useState } from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutUs } from '@/components/about-us';
import { OurServices } from '@/components/our-services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { OurWork } from '@/components/our-work';
import { CallToAction } from '@/components/call-to-action';
import { LatestNews } from '@/components/latest-news';
import { ContactUs } from '@/components/contact-us';
import { CategoryNavigation } from '@/components/category-navigation';
import { ProductGrid } from '@/components/product-grid';
import { ShoppingCart } from '@/components/shopping-cart';
import { CheckoutModal } from '@/components/checkout-modal';
import { Footer } from '@/components/footer';
import { Toast } from '@/components/toast';
import { useProducts } from '@/hooks/use-products';
import { ProductCategory } from '@/lib/types';

interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const { data: products = [], isLoading } = useProducts();

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fresh-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        onCartToggle={() => setIsCartOpen(true)}
        onSearch={setSearchQuery}
      />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>
      
      {/* About Us */}
      <div id="about">
        <AboutUs />
      </div>
      
      {/* Our Services */}
      <div id="services">
        <OurServices />
      </div>
      
      {/* Why Choose Us */}
      <div id="why-choose">
        <WhyChooseUs />
      </div>
      
      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>
      
      {/* Our Work / Portfolio */}
      <div id="portfolio">
        <OurWork />
      </div>
      
      {/* Call to Action */}
      <CallToAction />
      
      {/* Latest News / Blog */}
      <div id="news">
        <LatestNews />
      </div>
      
      {/* Products Section */}
      <div id="products">
        <CategoryNavigation 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <ProductGrid 
          products={products}
          category={activeCategory}
          searchQuery={searchQuery}
          onAddToCart={showToast}
        />
      </div>
      
      {/* Contact Us */}
      <div id="contact">
        <ContactUs />
      </div>
      
      {/* Footer */}
      <Footer />

      <ShoppingCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onSuccess={showToast}
      />

      {/* Toast Container */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            onRemove={removeToast}
          />
        ))}
      </div>
    </div>
  );
}
