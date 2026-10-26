import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { DropSlide } from '../types';
import { X, Save, DollarSign, Tag, FileText, CheckCircle2, RotateCcw } from 'lucide-react';

export const SlideEditModal: React.FC = () => {
  const { lang, editingSlide, setEditingSlide, updateSlide } = useStore();

  const [title, setTitle] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [price, setPrice] = useState(44.0);
  const [sku, setSku] = useState('');
  const [badge, setBadge] = useState('');
  const [techHighlight, setTechHighlight] = useState('');

  useEffect(() => {
    if (editingSlide) {
      setTitle(editingSlide.title);
      setTitleEn(editingSlide.title_en);
      setDescription(editingSlide.description);
      setDescriptionEn(editingSlide.description_en);
      setPrice(editingSlide.price);
      setSku(editingSlide.sku);
      setBadge(editingSlide.badge);
      setTechHighlight(editingSlide.techHighlight);
    }
  }, [editingSlide]);

  if (!editingSlide) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSlide(editingSlide.id, {
      title,
      title_en: titleEn,
      description,
      description_en: descriptionEn,
      price: Number(price),
      sku,
      badge,
      badge_en: badge,
      techHighlight
    });
    setEditingSlide(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#121c30] text-white border border-amber-400/40 rounded-2xl w-full max-w-xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/80 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
              ✏️
            </span>
            <div>
              <h2 className="text-base font-extrabold text-white">
                {lang === 'es' ? 'Editar Drop & Precios del Slider' : 'Edit Slider Drop & Pricing'}
              </h2>
              <div className="text-[11px] text-slate-400 font-mono">
                SKU: {editingSlide.sku} · 100% Editable & Auto-guardado
              </div>
            </div>
          </div>

          <button
            onClick={() => setEditingSlide(null)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Image & Price Banner */}
          <div className="flex gap-4 items-center bg-slate-900/90 border border-slate-700 p-3 rounded-xl">
            <img
              src={editingSlide.image}
              alt={title}
              className="w-16 h-16 rounded-lg object-cover bg-slate-800 shrink-0 border border-slate-600"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex-1">
              <label className="block text-xs font-bold text-amber-400 mb-1 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Precio de Venta ($ USD):' : 'Selling Price ($ USD):'}</span>
              </label>
              <div className="relative max-w-xs">
                <span className="absolute left-3 top-2.5 text-slate-400 font-mono text-sm">$</span>
                <input
                  type="number"
                  step="0.5"
                  min="1"
                  required
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                  className="w-full pl-8 pr-3 py-2 bg-slate-950 border border-amber-400/50 rounded-lg text-sm text-amber-400 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Title Inputs */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {lang === 'es' ? 'Título del Drop (Español):' : 'Drop Title (Spanish):'}
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {lang === 'es' ? 'Título del Drop (Inglés):' : 'Drop Title (English):'}
            </label>
            <input
              type="text"
              required
              value={titleEn}
              onChange={(e) => setTitleEn(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Subtitle / Description Inputs */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {lang === 'es' ? 'Subtítulo / Descripción (Español):' : 'Subtitle / Description (Spanish):'}
            </label>
            <textarea
              rows={2}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {lang === 'es' ? 'Subtítulo / Descripción (Inglés):' : 'Subtitle / Description (English):'}
            </label>
            <textarea
              rows={2}
              required
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Badge & Tech Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {lang === 'es' ? 'Etiqueta / Badge:' : 'Badge Label:'}
              </label>
              <input
                type="text"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                {lang === 'es' ? 'Detalle Técnico / Tejido:' : 'Fabric / Tech Highlight:'}
              </label>
              <input
                type="text"
                value={techHighlight}
                onChange={(e) => setTechHighlight(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="bg-amber-400/10 border border-amber-400/20 p-3 rounded-lg text-[11px] text-amber-200">
            ✓ {lang === 'es'
              ? 'Tus cambios se guardan al instante en tu navegador y actualizan el carrito, el slider y los datos estructurados SEO.'
              : 'Your edits save instantly in your browser and automatically sync with the shopping bag, slider, and Schema SEO.'}
          </div>

          {/* Footer Actions */}
          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setEditingSlide(null)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold"
            >
              {lang === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-black font-extrabold rounded-lg text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Save className="w-4 h-4" />
              <span>{lang === 'es' ? 'Guardar Cambios' : 'Save Changes'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
