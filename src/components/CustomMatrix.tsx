import React from 'react';
import { useStore } from '../context/StoreContext';
import { MATRIX_ITEMS, STORE_PHONE_CLEAN } from '../data/storeData';
import { MatrixItem } from '../types';
import { Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

export const CustomMatrix: React.FC = () => {
  const { lang, setActiveMatrixModal } = useStore();

  const lines = [
    {
      num: 1,
      title_es: 'Línea 1: Prendas Base & Fits',
      title_en: 'Line 1: Blank Garments & Fits',
      items: MATRIX_ITEMS.filter((m) => m.line === 1)
    },
    {
      num: 2,
      title_es: 'Línea 2: Técnicas de Estampado & Acabados',
      title_en: 'Line 2: Printing Techniques & Finishes',
      items: MATRIX_ITEMS.filter((m) => m.line === 2)
    },
    {
      num: 3,
      title_es: 'Línea 3: Lienzos de Arte & Decoración Urbana',
      title_en: 'Line 3: Art Canvases & Urban Decor',
      items: MATRIX_ITEMS.filter((m) => m.line === 3)
    },
    {
      num: 4,
      title_es: 'Línea 4: Servicios para Creadores & Marcas',
      title_en: 'Line 4: Creator & Brand Services',
      items: MATRIX_ITEMS.filter((m) => m.line === 4)
    }
  ];

  return (
    <section
      id="custom-matrix"
      className="mt-11 bg-[#eaf1fa] border border-[#cbd8ec] rounded-2xl p-6 sm:p-8 shadow-xl text-slate-900"
    >
      {/* Matrix Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-7 pb-4 border-b border-[#cbd8ec]">
        <div>
          <span className="inline-block bg-amber-400/20 text-amber-800 border border-amber-400/40 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-2">
            {lang === 'es' ? 'Producción Personalizada & Drops' : 'Custom Production & Drops'}
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {lang === 'es'
              ? 'Matriz de Creación y Drops Custom Made'
              : 'Custom Made Creation & Drops Matrix'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {lang === 'es'
              ? '12 módulos especializados para crear streetwear, arte y drops bajo demanda.'
              : '12 specialized modules to produce streetwear, fine art, and on-demand drops.'}
          </p>
        </div>

        <a
          href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%20Lienzo%20Urbano%2C%20quiero%20cotizar%20un%20proyecto%20desde%20la%20Matriz%20Custom%20Made`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-[#20ba59] text-black font-bold px-4 py-2 rounded-lg text-xs transition-all shadow-md flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>{lang === 'es' ? 'Cotizar por WhatsApp' : 'Quote via WhatsApp'}</span>
        </a>
      </div>

      {/* 4 Lines x 3 Boxes each = 12 Boxes */}
      <div className="space-y-7">
        {lines.map((line) => (
          <div key={line.num}>
            {/* Line Title */}
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-2 border-l-4 border-amber-500 pl-2.5">
              <span>{lang === 'es' ? line.title_es : line.title_en}</span>
            </div>

            {/* Grid 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {line.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#f4f8fd] border border-[#d2e0f0] rounded-xl p-4.5 flex flex-col justify-between hover:border-sky-400 hover:shadow-lg transition-all duration-200"
                >
                  <div>
                    {item.image && (
                      <div className="w-full h-36 bg-[#e2ecf7] rounded-lg overflow-hidden mb-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}

                    <span
                      className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider mb-2"
                      style={{ backgroundColor: item.tagBg, color: item.tagColor }}
                    >
                      {item.tag}
                    </span>

                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                      {lang === 'es' ? item.title : item.title_en}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {lang === 'es' ? item.description : item.description_en}
                    </p>

                    <div className="text-[11px] font-mono text-slate-600 bg-[#e2ecf8] px-2.5 py-1 rounded inline-block font-semibold">
                      {item.spec}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#d2e0f0] flex justify-between items-center">
                    <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'es' ? item.benefit : item.benefit_en}</span>
                    </span>

                    <button
                      onClick={() => setActiveMatrixModal(item)}
                      className="bg-[#1c1917] hover:bg-slate-800 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'es' ? 'Personalizar' : 'Customize'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
