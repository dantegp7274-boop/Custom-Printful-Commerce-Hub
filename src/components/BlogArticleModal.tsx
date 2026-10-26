import React from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE_CLEAN } from '../data/storeData';
import { X, BookmarkCheck, MessageCircle, Clock, BookOpen, CheckCircle2 } from 'lucide-react';

export const BlogArticleModal: React.FC = () => {
  const { lang, activeBlogModal, setActiveBlogModal, recordWork } = useStore();

  if (!activeBlogModal) return null;

  const handleBookmark = () => {
    recordWork(
      'custom_config',
      `Artículo Guardado: ${activeBlogModal.title}`,
      `Guía técnica archivada: ${activeBlogModal.tag} - Lectura: ${activeBlogModal.readTime}`,
      { articleId: activeBlogModal.id, slug: activeBlogModal.slug }
    );
  };

  const handleWhatsApp = () => {
    const text = `Hola Lienzo Urbano, estuve leyendo su artículo "${activeBlogModal.title}" y me gustaría consultar sobre cómo aplicarlo a mi marca.`;
    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#121c30] text-white border border-sky-400/30 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/80 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase bg-amber-400 text-black px-2 py-0.5 rounded">
              {activeBlogModal.tag}
            </span>
            <span className="text-slate-500">·</span>
            <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'es' ? activeBlogModal.readTime : activeBlogModal.readTime_en}</span>
            </div>
          </div>

          <button
            onClick={() => setActiveBlogModal(null)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scroll Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="w-full h-64 sm:h-80 bg-slate-800 rounded-xl overflow-hidden shadow-lg">
            <img
              src={activeBlogModal.image}
              alt={activeBlogModal.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            {lang === 'es' ? activeBlogModal.title : activeBlogModal.title_en}
          </h1>

          {/* Keypoints box */}
          <div className="bg-slate-900/90 border-l-4 border-amber-400 p-4 rounded-r-xl space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {lang === 'es' ? activeBlogModal.keypointsTitle : activeBlogModal.keypointsTitle_en}
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
              {(lang === 'es' ? activeBlogModal.keypoints : activeBlogModal.keypoints_en).map(
                (pt: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Article Full Body */}
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {lang === 'es' ? activeBlogModal.fullBody : activeBlogModal.fullBody_en}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-700/80 bg-slate-900/80 flex flex-wrap justify-between items-center gap-3">
          <button
            onClick={handleBookmark}
            className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <BookmarkCheck className="w-4 h-4 text-amber-400" />
            <span>{lang === 'es' ? 'Guardar Artículo en Mi Trabajo' : 'Save in My Work'}</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>{lang === 'es' ? 'Consultar con el Atelier' : 'Consult Atelier on WhatsApp'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
