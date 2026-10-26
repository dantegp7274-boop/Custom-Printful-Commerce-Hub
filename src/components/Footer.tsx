import React from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN, STORE_DOMAIN } from '../data/storeData';
import { ShieldCheck, MessageSquare, BookmarkCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, setActiveTab, setIsSavedWorkOpen } = useStore();

  const handleScrollTo = (id: string) => {
    setActiveTab('tienda');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-b from-[#0e1930]/98 to-[#0a1224] text-slate-400 border-t border-sky-400/20 mt-16 px-6 py-14 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-white text-xl font-extrabold tracking-wide uppercase">
              LIENZO URBANO
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              {lang === 'es'
                ? 'Atelier de Streetwear de Alto Gramaje & Confección a Medida. Drops de autor, serigrafía textil premium y arte fino sin mínimos obligatorios.'
                : 'High-end Heavyweight Streetwear Atelier & Custom Drops. Limited capsule runs, fine art canvases, and premium textile printing with no minimum order.'}
            </p>
            <div className="flex flex-col gap-2 pt-1 font-semibold">
              <a
                href={`https://${STORE_DOMAIN}`}
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{STORE_DOMAIN}</span>
              </a>
              <a
                href={`https://wa.me/${STORE_PHONE_CLEAN}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25d366] hover:brightness-110 flex items-center gap-1.5 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-[#25d366]" />
                <span>WhatsApp: {STORE_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => {
                    setActiveTab('tienda');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Tienda & Catálogo' : 'Store & Catalog'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('blog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Blog & Guías Textiles' : 'Blog & Textile Guides'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('custom-matrix')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Matriz Custom Made' : 'Custom Matrix'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setActiveTab('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Contacto Directo' : 'Direct Contact'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSavedWorkOpen(true)}
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Mis Trabajos Guardados' : 'My Saved Work'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Production & Drops Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              {lang === 'es' ? 'Confección & Drops' : 'Craft & Drops'}
            </h4>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Heavyweight Cotton (240 & 420 GSM)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Impresión Fine-Art Giclée</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Acrílico UV & Placas de Galería</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Serigrafía Textil de Alta Fidelidad</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Muestras Físicas Sin Mínimos (No MOQ)</span>
              </li>
            </ul>
          </div>

          {/* Shipping & Support Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              {lang === 'es' ? 'Envíos & Soporte' : 'Shipping & Support'}
            </h4>
            <ul className="space-y-2 text-slate-300 text-xs mb-3">
              <li className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Envíos Express Globales</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pago Seguro SSL</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                <span>Asesoría en WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Lienzo Urbano (
            <a href={`https://${STORE_DOMAIN}`} className="text-amber-400 hover:underline">
              {STORE_DOMAIN}
            </a>
            ). Todos los derechos reservados.
          </div>
          <div className="flex gap-3 flex-wrap">
            <span className="hover:text-slate-300 cursor-pointer">Términos y Condiciones</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Política de Privacidad</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Envíos y Devoluciones</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
