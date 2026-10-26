import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/storeData';
import { DropSlide } from '../types';
import { ChevronLeft, ChevronRight, ShoppingBag, Edit3, RotateCcw, Sparkles } from 'lucide-react';

export const SpotlightSlider: React.FC = () => {
  const {
    lang,
    slides,
    addToCart,
    setActiveProductModal,
    setEditingSlide,
    resetSlides
  } = useStore();

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play every 6 seconds if not manually paused
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slidePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const slideNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handleQuickAdd = (slideIndex: number) => {
    const slide = slides[slideIndex];
    // Find matching product in catalog or construct one with the live edited price
    const matchingProd = PRODUCTS.find((p) => p.sku === slide.sku) || {
      id: slide.id,
      sku: slide.sku,
      title: slide.title,
      title_en: slide.title_en,
      category: 'moda' as const,
      categoryLabel: `Apparel · ${slide.sku}`,
      categoryLabel_en: `Apparel · ${slide.sku}`,
      fulfillment: 'Printful Fulfilled',
      fulfillment_en: 'Printful Fulfilled',
      fulfillmentType: 'printful' as const,
      price: slide.price,
      image: slide.image,
      description: slide.description,
      description_en: slide.description_en,
      specs: [slide.techHighlight],
      specs_en: [slide.techHighlight]
    };

    // Override with current slide price if edited
    const finalProd = { ...matchingProd, price: slide.price, title: slide.title, title_en: slide.title_en };
    addToCart(finalProd, 1);
  };

  return (
    <section aria-label="Drops Destacados" className="bg-[#181615] border border-[#2e2a27] rounded-2xl p-6 sm:p-7 mb-9 text-white shadow-xl relative overflow-hidden">
      {/* Slider Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2.5 py-1 rounded tracking-wider">
              Atelier Spotlight · Slider Widget
            </span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              <span>{lang === 'es' ? '100% Editable' : '100% Editable'}</span>
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold mt-1 text-white">
            {lang === 'es' ? 'Escaparate Interactivo de Drops Destacados' : 'Interactive Featured Drops Showcase'}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'es'
              ? 'Haz clic en el lápiz ✏️ de cualquier drop para cambiar títulos, subtítulos o precios en vivo.'
              : 'Click the pencil ✏️ on any slide to live-edit titles, descriptions, and prices.'}
          </p>
        </div>

        {/* Controls: Reset + Arrows */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          <button
            onClick={resetSlides}
            title={lang === 'es' ? 'Restablecer precios y textos por defecto' : 'Reset original drop texts & prices'}
            className="text-xs text-slate-400 hover:text-amber-400 bg-[#262320] border border-[#443e39] px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{lang === 'es' ? 'Restablecer' : 'Reset'}</span>
          </button>

          <div className="flex gap-1.5">
            <button
              onClick={slidePrev}
              className="w-9 h-9 rounded-full bg-[#262320] border border-[#443e39] text-white hover:bg-amber-400 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              className="w-9 h-9 rounded-full bg-[#262320] border border-[#443e39] text-white hover:bg-amber-400 hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out gap-4.5"
          style={{
            transform: `translateX(-${currentSlide * 34}%)`
          }}
        >
          {slides.map((slide: DropSlide, idx: number) => (
            <div
              key={slide.id}
              className="min-w-[100%] sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-12px)] shrink-0 bg-[#221f1d] border border-[#332e2a] rounded-xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/60 transition-all duration-300 relative shadow-sm"
            >
              {/* Image Box */}
              <div className="relative w-full h-52 bg-[#141312] overflow-hidden">
                <span
                  className="absolute top-2.5 left-2.5 text-[9px] font-extrabold px-2 py-0.5 rounded uppercase z-10 shadow-sm"
                  style={{ backgroundColor: slide.badgeBg, color: slide.badgeColor }}
                >
                  {lang === 'es' ? slide.badge : slide.badge_en}
                </span>

                {/* Edit Button On Card */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingSlide(slide);
                  }}
                  title={lang === 'es' ? 'Editar título, subtítulo o precio de este drop' : 'Edit title, subtitle or price'}
                  className="absolute top-2.5 right-2.5 z-20 bg-black/80 hover:bg-amber-400 text-slate-200 hover:text-black p-1.5 rounded-lg border border-slate-600 transition-all shadow-md flex items-center gap-1 text-[10px] font-bold"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{lang === 'es' ? 'Editar' : 'Edit'}</span>
                </button>

                <img
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 flex justify-between mb-1 font-mono">
                    <span>SKU: {slide.sku}</span>
                    <span style={{ color: slide.techColor }}>● {slide.techHighlight}</span>
                  </div>

                  <h3
                    onClick={() => {
                      const prod = PRODUCTS.find((p) => p.sku === slide.sku) || {
                        id: slide.id,
                        sku: slide.sku,
                        title: slide.title,
                        title_en: slide.title_en,
                        category: 'moda' as const,
                        categoryLabel: `Apparel · ${slide.sku}`,
                        categoryLabel_en: `Apparel · ${slide.sku}`,
                        fulfillment: 'Printful Fulfilled',
                        fulfillment_en: 'Printful Fulfilled',
                        fulfillmentType: 'printful' as const,
                        price: slide.price,
                        image: slide.image,
                        description: slide.description,
                        description_en: slide.description_en,
                        specs: [slide.techHighlight],
                        specs_en: [slide.techHighlight]
                      };
                      setActiveProductModal(prod);
                    }}
                    className="text-sm font-bold text-white hover:text-amber-400 cursor-pointer line-clamp-1 mb-1 transition-colors"
                  >
                    {lang === 'es' ? slide.title : slide.title_en}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {lang === 'es' ? slide.description : slide.description_en}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="flex justify-between items-center border-t border-[#332e2a] pt-3 mt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">
                      {lang === 'es' ? 'Precio Drop' : 'Drop Price'}
                    </span>
                    <span className="text-base font-extrabold text-amber-400 font-mono">
                      ${slide.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setEditingSlide(slide)}
                      title={lang === 'es' ? 'Cambiar precio o texto' : 'Change price or text'}
                      className="bg-[#292524] hover:bg-[#3f3b38] text-amber-400 p-2 rounded-lg text-xs font-bold transition-all border border-amber-400/30"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleQuickAdd(idx)}
                      className="bg-amber-400 hover:bg-amber-300 text-black px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-sm"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{lang === 'es' ? 'Añadir' : 'Add'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Indicator Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {slides.map((_: DropSlide, i: number) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              i === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-[#443e39] hover:bg-[#665e57]'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
