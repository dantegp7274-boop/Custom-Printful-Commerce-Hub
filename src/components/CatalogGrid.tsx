import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/storeData';
import { Product } from '../types';
import { Eye, ShoppingBag, Bookmark } from 'lucide-react';

interface CatalogGridProps {
  isEmbeddedInBlog?: boolean;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({ isEmbeddedInBlog = false }) => {
  const { lang, addToCart, setActiveProductModal, recordWork } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { key: 'todos', label_es: 'Todos', label_en: 'All' },
    { key: 'moda', label_es: 'Moda Urbana & Ropa (POD)', label_en: 'Streetwear & Apparel (POD)' },
    { key: 'cuero', label_es: 'Accesorios & Cuero', label_en: 'Leather & Accessories' },
    { key: 'ceramica', label_es: 'Cerámica & Hogar', label_en: 'Ceramics & Homeware' },
    { key: 'arte', label_es: 'Arte & Prints', label_en: 'Art & Gallery Prints' },
    { key: 'audio', label_es: 'Tecnología & Audio', label_en: 'Tech & Studio Audio' }
  ];

  const filteredProducts =
    selectedCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const displayProducts = isEmbeddedInBlog ? filteredProducts.slice(0, 4) : filteredProducts;

  const handleBookmark = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    recordWork(
      'product_bookmark',
      `Marcado como Favorito: ${product.title}`,
      `Guardado en lista de deseos: ${product.sku} - $${product.price}`,
      { product }
    );
  };

  return (
    <section id="woo-section" className="mb-12">
      {/* Catalog Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            {lang === 'es'
              ? 'Catálogo Oficial Lienzo Urbano'
              : 'Official Lienzo Urbano Collection'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {lang === 'es'
              ? 'Prendas de alto gramaje, accesorios de autor, cerámica y arte fino.'
              : 'Heavyweight apparel, leather accessories, studio ceramics, and gallery art.'}
          </p>
        </div>
        <div className="text-xs text-slate-300 font-bold bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
          {displayProducts.length} {lang === 'es' ? 'Productos Disponibles' : 'Products Available'}
        </div>
      </div>

      {/* Filter Category Chips */}
      {!isEmbeddedInBlog && (
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'bg-[#eef4fb] text-slate-700 hover:bg-white hover:text-black border border-[#cbd8ec]'
              }`}
            >
              {lang === 'es' ? cat.label_es : cat.label_en}
            </button>
          ))}
        </div>
      )}

      {/* 4x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => setActiveProductModal(product)}
            className="bg-[#f1f6fc] border border-[#cbd8ec] rounded-2xl overflow-hidden flex flex-col justify-between cursor-pointer group hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative w-full h-52 bg-[#e2ecf7] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Bookmark quick button */}
              <button
                onClick={(e) => handleBookmark(e, product)}
                title={lang === 'es' ? 'Guardar en mi trabajo' : 'Save to my work'}
                className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:text-amber-500 hover:bg-white flex items-center justify-center shadow-md transition-colors z-10"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              {/* Quick view eye preview indicator */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Ver Detalles' : 'Quick View'}</span>
                </span>
              </div>
            </div>

            {/* Product Body */}
            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                {/* Category & Fulfillment Badge */}
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-slate-500 mb-1.5">
                  <span className="truncate pr-1">{product.categoryLabel}</span>
                  <span
                    className={`shrink-0 px-1.5 py-0.5 rounded text-[9px] font-extrabold ${
                      product.fulfillmentType === 'printful'
                        ? 'bg-teal-100 text-teal-800'
                        : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {lang === 'es' ? product.fulfillment : product.fulfillment_en}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1 mb-1">
                  {lang === 'es' ? product.title : product.title_en}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {lang === 'es' ? product.description : product.description_en}
                </p>
              </div>

              {/* Card Footer: Price & Add to Bag */}
              <div className="flex justify-between items-center pt-3 border-t border-[#cbd8ec]/80 mt-1">
                <span className="text-base font-extrabold text-slate-900 font-mono">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product, 1);
                  }}
                  className="bg-[#1c1917] hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Añadir a Bolsa' : 'Add to Bag'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
