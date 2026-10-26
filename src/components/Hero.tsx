import React from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN } from '../data/storeData';
import { Sparkles, ArrowDown, MessageCircle, ShieldCheck, Feather, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang } = useStore();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#1c1917] text-white p-6 sm:p-9 lg:p-12 rounded-2xl border border-[#292524] mb-8 shadow-2xl relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Clean Tag */}
      <div className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-400 border border-amber-400/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>{lang === 'es' ? 'Atelier & Colecciones Cápsula' : 'Atelier & Capsule Collections'}</span>
      </div>

      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight max-w-4xl">
        {lang === 'es'
          ? 'Lienzo Urbano · Heavyweight Streetwear & Fine Art'
          : 'Lienzo Urbano · Heavyweight Streetwear & Fine Art'}
      </h1>

      <p className="text-slate-300 text-sm sm:text-base max-w-2xl mb-7 leading-relaxed font-normal">
        {lang === 'es'
          ? 'Prendas confeccionadas en alto gramaje (240 a 420 GSM), lienzos de autor y piezas a medida sin mínimos de producción. Diseñado para marcas urbanas, creadores y coleccionistas exigentes.'
          : 'Crafted in heavyweight cotton (240 to 420 GSM), gallery fine art canvases, and custom on-demand drops with no minimum orders. Built for streetwear founders and collectors.'}
      </p>

      {/* Clean Value Pills */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        <span className="inline-flex items-center gap-1.5 bg-[#292524]/90 border border-zinc-700/80 text-zinc-200 text-xs px-3.5 py-1.5 rounded-lg font-medium">
          <Feather className="w-3.5 h-3.5 text-amber-400" />
          <span>Heavyweight (240 / 420 GSM)</span>
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#292524]/90 border border-zinc-700/80 text-zinc-200 text-xs px-3.5 py-1.5 rounded-lg font-medium">
          <Truck className="w-3.5 h-3.5 text-sky-400" />
          <span>{lang === 'es' ? 'Envíos Express Globales' : 'Worldwide Express Shipping'}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 bg-[#292524]/90 border border-zinc-700/80 text-zinc-200 text-xs px-3.5 py-1.5 rounded-lg font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{lang === 'es' ? 'Sin Mínimos Obligatorios (No MOQ)' : 'No Minimum Order (No MOQ)'}</span>
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-wrap items-center">
        <button
          onClick={() => scrollToSection('woo-section')}
          className="bg-amber-400 hover:bg-amber-300 text-black px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-md active:scale-95 cursor-pointer"
        >
          <span>{lang === 'es' ? 'Explorar Catálogo' : 'Explore Catalog'}</span>
          <ArrowDown className="w-4 h-4" />
        </button>

        <button
          onClick={() => scrollToSection('custom-matrix')}
          className="bg-transparent border border-zinc-700 hover:border-zinc-500 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:bg-zinc-850 cursor-pointer"
        >
          {lang === 'es' ? 'Matriz Custom Made' : 'Custom Drops Matrix'}
        </button>

        <a
          href={`https://wa.me/${STORE_PHONE_CLEAN}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25d366] hover:bg-[#20ba59] text-black px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>WhatsApp {STORE_PHONE}</span>
        </a>
      </div>
    </div>
  );
};
