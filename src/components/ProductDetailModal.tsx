import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE_CLEAN } from '../data/storeData';
import {
  X,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  MessageCircle,
  Truck
} from 'lucide-react';

export const ProductDetailModal: React.FC = () => {
  const {
    lang,
    activeProductModal,
    setActiveProductModal,
    addToCart,
    recordWork
  } = useStore();

  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);

  if (!activeProductModal) return null;

  const isApparel = activeProductModal.category === 'moda';
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const handleAdd = () => {
    addToCart(
      activeProductModal,
      quantity,
      isApparel ? selectedSize : undefined
    );
    setActiveProductModal(null);
  };

  const handleBookmark = () => {
    recordWork(
      'product_bookmark',
      `Guardado: ${activeProductModal.title}`,
      `Guardado en lista de deseos: ${activeProductModal.sku} (${isApparel ? 'Talla ' + selectedSize : 'Estándar'})`,
      { product: activeProductModal, size: selectedSize }
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#121c30] text-white border border-sky-400/30 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/80 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-400 font-bold">
              {activeProductModal.sku}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300">
              {activeProductModal.categoryLabel}
            </span>
          </div>

          <button
            onClick={() => setActiveProductModal(null)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="w-full h-64 sm:h-72 bg-slate-800 rounded-xl overflow-hidden relative shadow-md">
              <img
                src={activeProductModal.image}
                alt={activeProductModal.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase bg-teal-500/90 text-black px-2.5 py-1 rounded shadow-sm">
                {lang === 'es' ? activeProductModal.fulfillment : activeProductModal.fulfillment_en}
              </span>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                {lang === 'es' ? activeProductModal.title : activeProductModal.title_en}
              </h2>

              <div className="text-2xl font-extrabold text-amber-400 font-mono">
                ${activeProductModal.price.toFixed(2)}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'es'
                  ? activeProductModal.description
                  : activeProductModal.description_en}
              </p>

              {/* Size Selector for Apparel */}
              {isApparel && (
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                    <span>{lang === 'es' ? 'Seleccionar Talla (Streetwear Fit):' : 'Select Size (Streetwear Fit):'}</span>
                    <span className="text-amber-400 font-mono">{selectedSize}</span>
                  </div>
                  <div className="flex gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`w-10 h-9 rounded-lg font-bold text-xs transition-all ${
                          selectedSize === s
                            ? 'bg-amber-400 text-black shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300">
                  {lang === 'es' ? 'Cantidad:' : 'Quantity:'}
                </span>
                <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 text-slate-400 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-3 font-mono text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 text-slate-400 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {lang === 'es' ? 'Especificaciones Técnicas:' : 'Technical Specs:'}
                </div>
                {(lang === 'es' ? activeProductModal.specs : activeProductModal.specs_en).map(
                  (spec: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-700/80 bg-slate-900/80 flex flex-wrap justify-between items-center gap-3">
          <div className="flex gap-2">
            <button
              onClick={handleBookmark}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'es' ? 'Guardar en Mi Trabajo' : 'Save in My Work'}</span>
            </button>

            <a
              href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%2C%20quiero%20cotizar%20el%20producto%20${encodeURIComponent(activeProductModal.title)}%20(${activeProductModal.sku})`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25d366]/20 hover:bg-[#25d366]/30 text-[#25d366] border border-[#25d366]/40 px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <button
            onClick={handleAdd}
            className="bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-5 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>
              {lang === 'es' ? 'Añadir a Bolsa' : 'Add to Bag'} · $
              {(activeProductModal.price * quantity).toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
