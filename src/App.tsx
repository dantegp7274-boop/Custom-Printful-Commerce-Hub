import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpotlightSlider } from './components/SpotlightSlider';
import { CatalogGrid } from './components/CatalogGrid';
import { CustomMatrix } from './components/CustomMatrix';
import { TestimonialsAndFAQ } from './components/TestimonialsAndFAQ';
import { BlogTab } from './components/BlogTab';
import { ContactTab } from './components/ContactTab';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AmbientCanvas } from './components/AmbientCanvas';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomDropModal } from './components/CustomDropModal';
import { SubscribeSection } from './components/SubscribeSection';
import { BlogArticleModal } from './components/BlogArticleModal';
import { SavedWorkModal } from './components/SavedWorkModal';
import { SlideEditModal } from './components/SlideEditModal';

const StoreAppContent: React.FC = () => {
  const { activeTab, toastMessage } = useStore();

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Background Floating Art Layer */}
      <AmbientCanvas />

      {/* Main Header */}
      <Header />

      {/* Main Page Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {activeTab === 'tienda' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Connected Hero */}
            <Hero />

            {/* Spotlight Drops Slider */}
            <SpotlightSlider />

            {/* Curated 4x3 Catalog */}
            <CatalogGrid />

            {/* 12-Box Custom Made Drops Matrix */}
            <CustomMatrix />

            {/* VIP Drop Alerts & Atelier Subscribe Box */}
            <SubscribeSection />

            {/* Testimonials & Collapsible FAQ Accordion */}
            <TestimonialsAndFAQ />
          </div>
        )}

        {activeTab === 'blog' && (
          <div className="space-y-8 animate-fadeIn">
            <BlogTab />
            <SubscribeSection />
          </div>
        )}

        {activeTab === 'contacto' && <ContactTab />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Slide-over & Dialog Modals */}
      <CartDrawer />
      <ProductDetailModal />
      <CustomDropModal />
      <BlogArticleModal />
      <SavedWorkModal />
      <SlideEditModal />

      {/* Toast Notification */}
      {toastMessage && (
        <aside
          aria-live="polite"
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 bg-[#1c1917]/95 text-white border border-amber-400/50 px-5 py-2.5 rounded-full shadow-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 backdrop-blur-md animate-bounce"
        >
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <StoreAppContent />
    </StoreProvider>
  );
}
