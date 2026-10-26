import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { TESTIMONIALS, FAQ_ITEMS, STORE_PHONE_CLEAN } from '../data/storeData';
import { ChevronDown, MessageCircle, Star, CheckCircle } from 'lucide-react';

export const TestimonialsAndFAQ: React.FC = () => {
  const { lang } = useStore();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-10 mt-10">
      {/* Testimonials Section */}
      <section className="bg-[#eaf1fa] border border-[#cbd8ec] rounded-2xl p-6 sm:p-8 shadow-xl text-slate-900">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6 pb-4 border-b border-[#cbd8ec]">
          <div>
            <span className="inline-block bg-amber-400/20 text-amber-800 border border-amber-400/40 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-2">
              {lang === 'es' ? 'Opiniones & Experiencias Reales' : 'Real Client Feedback'}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {lang === 'es'
                ? 'Testimonios & Reseñas de Clientes Verificados'
                : 'Verified Customer Reviews & Case Studies'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {lang === 'es'
                ? 'Descubre lo que dicen diseñadores, artistas visuales y marcas streetwear sobre Lienzo Urbano.'
                : 'Discover what designers, visual artists, and streetwear brands say about Lienzo Urbano.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#f3f7fd] border border-[#cbd8ec] px-3.5 py-2 rounded-xl shrink-0 shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-900">
              4.9 / 5.0 ({lang === 'es' ? '98+ Reseñas' : '98+ Reviews'})
            </span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#f4f8fd] border border-[#d2e0f0] rounded-xl p-5 flex flex-col justify-between hover:border-sky-400 transition-all shadow-xs"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    ✓ {lang === 'es' ? 'Verificado' : 'Verified'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                  {lang === 'es' ? test.quote : test.quote_en}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#e2ecf8]">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-400 shadow-md shrink-0"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <div className="text-xs font-extrabold text-slate-900">{test.name}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">
                    {lang === 'es' ? test.role : test.role_en}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#eaf1fa] border border-[#cbd8ec] rounded-2xl p-6 sm:p-8 shadow-xl text-slate-900">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-6 pb-4 border-b border-[#cbd8ec]">
          <div>
            <span className="inline-block bg-amber-400/20 text-amber-800 border border-amber-400/40 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-2">
              {lang === 'es' ? 'Soporte Técnico & FAQ' : 'Technical Support & FAQ'}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {lang === 'es'
                ? 'Preguntas Frecuentes (Q&A Lienzo Urbano)'
                : 'Frequently Asked Questions (Lienzo Urbano Q&A)'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {lang === 'es'
                ? 'Todo lo que necesitas saber sobre producción bajo demanda, tiempos de envío, calidad y cotizaciones personalizadas.'
                : 'Everything you need to know about on-demand production, turnaround times, quality, and custom drops.'}
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%2C%20tengo%20una%20duda%20adicional%20sobre%20mi%20pedido`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25d366] hover:bg-[#20ba59] text-black font-bold px-4 py-2 rounded-lg text-xs transition-all shadow-md flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>{lang === 'es' ? 'Preguntar por WhatsApp' : 'Ask via WhatsApp'}</span>
          </a>
        </div>

        {/* Collapsible Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.id}
                className="bg-[#f4f8fd] border border-[#d2e0f0] rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center gap-3 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {lang === 'es' ? faq.question : faq.question_en}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#e2ecf8]">
                    {lang === 'es' ? faq.answer : faq.answer_en}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
