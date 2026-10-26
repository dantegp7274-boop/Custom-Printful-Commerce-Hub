import React from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN } from '../data/storeData';
import { ShoppingBag, MessageSquare, BookmarkCheck } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    lang,
    setLang,
    activeTab,
    setActiveTab,
    cartCount,
    setIsCartOpen,
    savedRecords,
    setIsSavedWorkOpen
  } = useStore();

  return (
    <header className="sticky top-0 z-50 bg-[#0e1930]/95 backdrop-blur-md border-b border-sky-400/20 px-4 lg:px-8 py-3.5 text-white transition-all shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        {/* Brand Zone - Clean & Minimalist */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setActiveTab('tienda');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg md:text-xl font-extrabold tracking-tight text-white hover:text-amber-400 transition-colors uppercase cursor-pointer"
          >
            LIENZO URBANO
          </button>
        </div>

        {/* Navigation Zone */}
        <nav className="flex items-center gap-2 md:gap-2.5">
          <button
            onClick={() => setActiveTab('tienda')}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'tienda'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {lang === 'es' ? 'Tienda' : 'Store'}
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'blog'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {lang === 'es' ? 'Blog' : 'Blog'}
          </button>

          <button
            onClick={() => setActiveTab('contacto')}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'contacto'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            {lang === 'es' ? 'Contacto' : 'Contact'}
          </button>

          {/* User's "Record and Save My Work" Access Button */}
          <button
            onClick={() => setIsSavedWorkOpen(true)}
            title={lang === 'es' ? 'Ver mis trabajos y pedidos guardados' : 'View my saved work & quotes'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/40 hover:bg-amber-500/25 transition-all cursor-pointer"
          >
            <BookmarkCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'es' ? 'Mi Trabajo' : 'My Work'}</span>
            <span className="bg-amber-400 text-black text-[10px] font-extrabold px-1.5 py-0.2 rounded-full">
              {savedRecords.length}
            </span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%20Lienzo%20Urbano%2C%20quiero%20cotizar%20un%20drop%20personalizado`}
            target="_blank"
            rel="noopener noreferrer"
            title={`WhatsApp: ${STORE_PHONE}`}
            className="hidden xl:inline-flex items-center gap-1.5 bg-[#25d366] text-black text-xs font-bold px-3 py-1.5 rounded-full hover:brightness-105 transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-black" />
            <span>WhatsApp {STORE_PHONE}</span>
          </a>

          {/* Language Switcher */}
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 rounded-full p-0.5 ml-1">
            <button
              onClick={() => setLang('es')}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'es' ? 'bg-amber-400 text-black shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                lang === 'en' ? 'bg-amber-400 text-black shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Cart Bag Action Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-1.5 rounded-full font-bold text-xs md:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{lang === 'es' ? 'Bolsa' : 'Bag'}</span>
          <span className="bg-slate-950 text-amber-400 text-xs px-2 py-0.5 rounded-full font-mono">
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
};
