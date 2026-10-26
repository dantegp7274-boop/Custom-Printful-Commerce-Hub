import React from 'react';
import { useStore } from '../context/StoreContext';
import { BLOG_ARTICLES, STORE_PHONE_CLEAN } from '../data/storeData';
import { BlogArticle } from '../types';
import { CatalogGrid } from './CatalogGrid';
import { BookOpen, Bookmark, MessageCircle, ArrowRight } from 'lucide-react';

export const BlogTab: React.FC = () => {
  const { lang, setActiveBlogModal, recordWork, setActiveTab } = useStore();

  const handleBookmarkArticle = (article: BlogArticle) => {
    recordWork(
      'custom_config',
      `Artículo Guardado: ${article.title}`,
      `Lectura guardada para consulta técnica: ${article.tag} (${article.readTime})`,
      { articleId: article.id, slug: article.slug }
    );
  };

  return (
    <div className="space-y-12 animate-fadeIn">
      {/* Blog Hero Header */}
      <div className="bg-[#1c1917] text-white p-7 sm:p-10 rounded-2xl border border-[#292524] shadow-xl">
        <span className="inline-block bg-amber-400/15 text-amber-400 border border-amber-400/30 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
          {lang === 'es'
            ? 'Magazine & Guías Técnicas SEO · Cuaderno Lienzo Urbano'
            : 'SEO Magazine & Tech Guides · Lienzo Urbano Notebook'}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3">
          {lang === 'es'
            ? 'Artículos & Guías de Streetwear, Calidad Textil e Impresión de Galería'
            : 'Streetwear Guides, Fabric Weights & Fine Art Gallery Printing'}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          {lang === 'es'
            ? 'Contenido formativo de alto valor para clientes, coleccionistas y creadores de marcas de ropa urbana. Información técnica, consejos de durabilidad y estándares de producción.'
            : 'Educational guides for streetwear founders, art collectors, and designers. Technical print guidelines, durability tips, and production standards.'}
        </p>
      </div>

      {/* 3 Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {BLOG_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="bg-[#f1f6fc] border border-[#cbd8ec] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-sky-400 hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              <div className="relative w-full h-52 bg-[#e2ecf7] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <button
                  onClick={() => handleBookmarkArticle(article)}
                  title={lang === 'es' ? 'Guardar artículo en mi trabajo' : 'Bookmark article in my work'}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:text-amber-500 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase mb-2">
                  <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                    {article.tag}
                  </span>
                  <span className="text-slate-500 font-mono">
                    {lang === 'es' ? article.readTime : article.readTime_en}
                  </span>
                </div>

                <h2
                  onClick={() => setActiveBlogModal(article)}
                  className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer line-clamp-2 mb-2"
                >
                  {lang === 'es' ? article.title : article.title_en}
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {lang === 'es' ? article.excerpt : article.excerpt_en}
                </p>

                {/* Keypoints callout */}
                <div className="bg-[#e5eff9] border-l-4 border-amber-500 p-3 rounded-r-lg text-xs text-slate-700 leading-relaxed mb-4">
                  <div className="font-bold text-slate-900 mb-1">
                    {lang === 'es' ? article.keypointsTitle : article.keypointsTitle_en}
                  </div>
                  <ul className="space-y-1 text-[11px]">
                    {(lang === 'es' ? article.keypoints : article.keypoints_en).map((pt, i) => (
                      <li key={i}>• {pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-5 pt-0">
              <div className="flex flex-col sm:flex-row gap-2 justify-between items-center border-t border-[#cbd8ec] pt-3">
                <button
                  onClick={() => setActiveBlogModal(article)}
                  className="w-full sm:w-auto bg-[#1c1917] hover:bg-slate-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Leer Artículo Completo' : 'Read Full Guide'}</span>
                </button>

                <a
                  href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%20Lienzo%20Urbano%2C%20lei%20el%20articulo%20${encodeURIComponent(article.title)}%20y%20quiero%20asesoria`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Consultar en WhatsApp' : 'Ask in WhatsApp'}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Integrated WooCommerce 4x3 in Blog View */}
      <div className="mt-12 border-t-2 border-slate-700/60 pt-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/15 px-2.5 py-0.5 rounded">
              {lang === 'es' ? 'Catálogo Integrado en Blog' : 'Integrated Blog Showcase'}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {lang === 'es'
                ? 'Piezas Físicas Disponibles en WooCommerce (Cuadrícula 4x3)'
                : 'Physical Streetwear & Fine Art Available in Store'}
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('tienda')}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-700"
          >
            <span>{lang === 'es' ? 'Ir a Tienda Principal' : 'Go to Full Store'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <CatalogGrid isEmbeddedInBlog={true} />
      </div>
    </div>
  );
};
