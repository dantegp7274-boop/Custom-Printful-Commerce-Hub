import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN } from '../data/storeData';
import {
  X,
  Sparkles,
  CheckCircle2,
  BookmarkCheck,
  MessageCircle,
  ShoppingBag,
  Sliders
} from 'lucide-react';

export const CustomDropModal: React.FC = () => {
  const {
    lang,
    activeMatrixModal,
    setActiveMatrixModal,
    recordWork,
    addToCart,
    showToast
  } = useStore();

  const [quantityTier, setQuantityTier] = useState<number>(25);
  const [colorScheme, setColorScheme] = useState('Vintage Black');
  const [placement, setPlacement] = useState('Front Center + Back Giant');
  const [artworkNotes, setArtworkNotes] = useState('');

  if (!activeMatrixModal) return null;

  // Calculate dynamic estimated price per unit based on volume tier
  const baseRate =
    activeMatrixModal.line === 1
      ? 28.0
      : activeMatrixModal.line === 2
      ? 12.0
      : activeMatrixModal.line === 3
      ? 45.0
      : 8.0;

  const unitPrice =
    quantityTier === 1
      ? baseRate * 1.6
      : quantityTier <= 25
      ? baseRate
      : quantityTier <= 50
      ? baseRate * 0.88
      : baseRate * 0.75;

  const totalEstimate = unitPrice * quantityTier;

  const handleSaveToWork = () => {
    recordWork(
      'custom_drop',
      `Drop Personalizado: ${activeMatrixModal.title}`,
      `Módulo: ${activeMatrixModal.number} - Volumen: ${quantityTier} pcs ($${unitPrice.toFixed(2)}/u) - Color: ${colorScheme} - Ubicación: ${placement} - Notas: ${artworkNotes || 'Sin notas'}`,
      {
        matrixItem: activeMatrixModal,
        quantityTier,
        colorScheme,
        placement,
        unitPrice,
        totalEstimate,
        artworkNotes
      }
    );
  };

  const handleSendToWhatsApp = () => {
    handleSaveToWork();
    const text = `Hola Lienzo Urbano, quiero cotizar este drop configurado en la Matriz:\n- Módulo: ${activeMatrixModal.number} ${activeMatrixModal.title}\n- Cantidad: ${quantityTier} piezas\n- Color: ${colorScheme}\n- Ubicación: ${placement}\n- Presupuesto estimado: ~$${totalEstimate.toFixed(2)} USD\n- Notas: ${artworkNotes || 'Pendiente enviar archivos'}`;
    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleAddDropToCart = () => {
    handleSaveToWork();
    // Create custom product item
    const customProduct = {
      id: `custom-${activeMatrixModal.id}-${Date.now()}`,
      sku: `CUSTOM-${activeMatrixModal.number}`,
      title: `Drop Custom: ${activeMatrixModal.title} (${quantityTier} pcs)`,
      title_en: `Custom Drop: ${activeMatrixModal.title_en} (${quantityTier} pcs)`,
      category: 'moda' as const,
      categoryLabel: `Custom Drop · Línea ${activeMatrixModal.line}`,
      categoryLabel_en: `Custom Drop · Line ${activeMatrixModal.line}`,
      fulfillment: 'Atelier Custom',
      fulfillment_en: 'Atelier Custom',
      fulfillmentType: 'stock' as const,
      price: totalEstimate,
      image:
        activeMatrixModal.image ||
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB9QJf9kIuLPharQrflmCYrYs2Cu240rljVX8oeefRlMir8_HcLPSwitAZMEVZOS75P-eQawz9U9BnN0ZiXpG6bMRwmlyPjDsLpIPF6kCwApV42KRIiTV4uK7sEKyBQOSkkMuLQp8GUUtnvr2NgWIHAVvQW4WDQT--qTmVEHxYhnKgu4XIax47H8kf9k2e1frTrlSJMEdkqQzpht_rkkTTx_OlXxc7Fhmey-RZKsl0l7u7GJVcm2Mm2uw',
      description: `Configuración: ${quantityTier} piezas en color ${colorScheme}, ubicación: ${placement}.`,
      description_en: `Setup: ${quantityTier} pieces in ${colorScheme}, placement: ${placement}.`,
      specs: [activeMatrixModal.spec, `${quantityTier} piezas`, colorScheme],
      specs_en: [activeMatrixModal.spec, `${quantityTier} pieces`, colorScheme]
    };

    addToCart(customProduct, 1, `${quantityTier} pcs`);
    setActiveMatrixModal(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#121c30] text-white border border-sky-400/30 rounded-2xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/80 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-mono font-bold px-2 py-0.5 rounded"
              style={{
                backgroundColor: activeMatrixModal.tagBg,
                color: activeMatrixModal.tagColor
              }}
            >
              {activeMatrixModal.tag}
            </span>
            <span className="text-xs text-slate-300 font-bold">
              {lang === 'es' ? activeMatrixModal.lineTitle : activeMatrixModal.lineTitle_en}
            </span>
          </div>

          <button
            onClick={() => setActiveMatrixModal(null)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <h2 className="text-xl font-extrabold text-white mb-1">
              {lang === 'es' ? activeMatrixModal.title : activeMatrixModal.title_en}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'es'
                ? activeMatrixModal.description
                : activeMatrixModal.description_en}
            </p>
            <div className="mt-2 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded inline-block">
              {activeMatrixModal.spec}
            </div>
          </div>

          {/* Volume Tier Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">
              {lang === 'es'
                ? 'Cantidad de Piezas (Sin Mínimos Obligatorios):'
                : 'Quantity Tier (No Mandatory Minimums):'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { qty: 1, label: '1 Muestra' },
                { qty: 25, label: '25 Piezas' },
                { qty: 50, label: '50 Piezas' },
                { qty: 100, label: '100+ Piezas' }
              ].map((tier) => (
                <button
                  key={tier.qty}
                  type="button"
                  onClick={() => setQuantityTier(tier.qty)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    quantityTier === tier.qty
                      ? 'border-amber-400 bg-amber-400/15 text-white font-bold shadow-md'
                      : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div className="text-xs font-extrabold">{tier.label}</div>
                  <div className="text-[10px] text-amber-400 font-mono mt-0.5">
                    ~${(tier.qty === 1 ? baseRate * 1.6 : tier.qty <= 25 ? baseRate : tier.qty <= 50 ? baseRate * 0.88 : baseRate * 0.75).toFixed(2)} /u
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Color & Placement Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {lang === 'es' ? 'Tono / Acabado Textil:' : 'Base Color / Finish:'}
              </label>
              <select
                value={colorScheme}
                onChange={(e) => setColorScheme(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option>Vintage Black (Washed 240/420)</option>
                <option>Bone White / Crudo Natural</option>
                <option>Heather Grey 90s</option>
                <option>Forest Sage Green</option>
                <option>Deep Navy Blue</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {lang === 'es' ? 'Ubicación del Estampado:' : 'Print Location:'}
              </label>
              <select
                value={placement}
                onChange={(e) => setPlacement(e.target.value)}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option>Front Center + Back Giant</option>
                <option>Chest Left Subtle (10cm)</option>
                <option>Full Wrap 360°</option>
                <option>Sleeve Embroidery + Inside Neck</option>
                <option>Center Oversized 14x18"</option>
              </select>
            </div>
          </div>

          {/* Design Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {lang === 'es'
                ? 'Instrucciones o Enlace a Archivos (Drive/Dropbox/Figma):'
                : 'Artwork Notes or Cloud File Link (Drive/Figma/Dropbox):'}
            </label>
            <textarea
              rows={3}
              value={artworkNotes}
              onChange={(e) => setArtworkNotes(e.target.value)}
              placeholder={
                lang === 'es'
                  ? 'Pega enlace de Drive o describe colores Pantone, tipografía o requerimientos...'
                  : 'Paste Drive link or describe Pantone colors, fonts, or special instructions...'
              }
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
            ></textarea>
          </div>

          {/* Live Estimate Card */}
          <div className="bg-slate-900/90 border border-slate-700 rounded-xl p-4 flex justify-between items-center">
            <div>
              <div className="text-[11px] text-slate-400">
                {lang === 'es' ? 'Presupuesto Estimado Total:' : 'Estimated Total Drop Cost:'}
              </div>
              <div className="text-xl font-extrabold text-amber-400 font-mono">
                ${totalEstimate.toFixed(2)} USD
              </div>
              <div className="text-[10px] text-slate-500">
                {quantityTier} {quantityTier === 1 ? 'pieza' : 'piezas'} · ${unitPrice.toFixed(2)} c/u
              </div>
            </div>

            <button
              onClick={handleSaveToWork}
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
              <span>{lang === 'es' ? 'Guardar en Mi Trabajo' : 'Record in My Work'}</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-700/80 bg-slate-900/80 flex flex-wrap justify-between items-center gap-3">
          <button
            onClick={handleSendToWhatsApp}
            className="bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold px-4 py-2.5 rounded-lg text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>{lang === 'es' ? 'Cotizar por WhatsApp' : 'Quote via WhatsApp'}</span>
          </button>

          <button
            onClick={handleAddDropToCart}
            className="bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-5 py-2.5 rounded-lg text-xs sm:text-sm flex items-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{lang === 'es' ? 'Añadir Drop a Bolsa' : 'Add Drop to Bag'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
