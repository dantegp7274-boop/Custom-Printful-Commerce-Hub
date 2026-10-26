import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN } from '../data/storeData';
import { SavedWorkRecord, RecordType } from '../types';
import {
  X,
  BookmarkCheck,
  Download,
  Copy,
  Trash2,
  MessageSquare,
  Clock,
  Package,
  Sparkles,
  FileText,
  ShoppingBag,
  Camera,
  PlusCircle,
  FileDown,
  Check,
  Save,
  PenTool,
  Bookmark
} from 'lucide-react';

export const SavedWorkModal: React.FC = () => {
  const {
    lang,
    isSavedWorkOpen,
    setIsSavedWorkOpen,
    savedRecords,
    recordWork,
    saveWorkSnapshot,
    deleteRecord,
    clearAllRecords,
    lastSavedTime,
    exportWorkAsJSON,
    exportWorkAsText,
    exportWorkSummaryText,
    cart,
    cartTotal,
    cartCount,
    showToast
  } = useStore();

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customSummary, setCustomSummary] = useState('');
  const [customType, setCustomType] = useState<RecordType>('manual_note');
  const [isCopied, setIsCopied] = useState(false);

  if (!isSavedWorkOpen) return null;

  const filteredRecords =
    activeFilter === 'all'
      ? savedRecords
      : savedRecords.filter((r: SavedWorkRecord) => r.type === activeFilter);

  const handleCopyClipboard = () => {
    const text = exportWorkSummaryText();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    showToast(
      lang === 'es'
        ? '¡Resumen copiado al portapapeles!'
        : 'Summary copied to clipboard!'
    );
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleWhatsAppSend = () => {
    const text = exportWorkSummaryText();
    const encoded = encodeURIComponent(
      `Hola Lienzo Urbano, este es el resumen de mi trabajo y pedido configurado:\n\n${text.substring(0, 1600)}`
    );
    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encoded}`, '_blank');
  };

  const handleAddManualNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;

    recordWork(
      customType,
      customTitle.trim(),
      customSummary.trim() || (lang === 'es' ? 'Nota de trabajo manual guardada.' : 'Manual work note saved.'),
      { manualEntry: true, savedAt: new Date().toISOString() }
    );

    setCustomTitle('');
    setCustomSummary('');
    setShowAddForm(false);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'work_session':
        return <Camera className="w-4 h-4 text-emerald-400" />;
      case 'manual_note':
        return <PenTool className="w-4 h-4 text-amber-400" />;
      case 'cart_order':
        return <ShoppingBag className="w-4 h-4 text-sky-400" />;
      case 'custom_drop':
        return <Sparkles className="w-4 h-4 text-amber-500" />;
      case 'contact_inquiry':
        return <FileText className="w-4 h-4 text-teal-400" />;
      case 'product_bookmark':
        return <Bookmark className="w-4 h-4 text-rose-400" />;
      default:
        return <Package className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#182338] text-white border border-sky-400/30 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/80 bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <BookmarkCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
                <span>{lang === 'es' ? 'Mi Trabajo Guardado & Registro Activo' : 'My Saved Work & Active History'}</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                  ✓ AUTO-SAVE
                </span>
              </h2>
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>
                  {lang === 'es' ? 'Guardado en tiempo real en tu navegador' : 'Real-time local storage backup'} · {lastSavedTime || 'Ahora'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsSavedWorkOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Actions & Snapshot Banner */}
        <div className="bg-slate-900/60 px-6 py-3 border-b border-slate-700/60 flex flex-wrap justify-between items-center gap-2.5 text-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => saveWorkSnapshot()}
              title={lang === 'es' ? 'Captura y guarda el estado actual completo' : 'Capture and save current state'}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md active:scale-95 transition-all text-xs"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Guardar Todo Mi Trabajo Ahora' : 'Save Full Session Now'}</span>
            </button>

            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-all text-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? '+ Registrar Nota' : '+ Add Note'}</span>
            </button>
          </div>

          <div className="flex gap-3 text-slate-300 text-xs">
            <span>
              {lang === 'es' ? 'Registros:' : 'Records:'}{' '}
              <strong className="text-amber-400 font-mono">{savedRecords.length}</strong>
            </span>
            <span>
              {lang === 'es' ? 'Bolsa:' : 'Bag:'}{' '}
              <strong className="text-sky-400 font-mono">{cartCount} items (${cartTotal.toFixed(2)})</strong>
            </span>
          </div>
        </div>

        {/* Expandable Manual Note / Work Entry Form */}
        {showAddForm && (
          <form
            onSubmit={handleAddManualNote}
            className="bg-slate-950/90 border-b border-amber-500/30 p-4 space-y-3 animate-fadeIn"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                <PenTool className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Registrar Trabajo / Tarea Terminada' : 'Record Completed Work / Note'}</span>
              </span>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-slate-400 hover:text-white text-xs"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="sm:col-span-2">
                <input
                  type="text"
                  required
                  placeholder={lang === 'es' ? 'Título de la tarea o trabajo (ej. Drops Verano listos)' : 'Task or work title (e.g. Summer drops ready)'}
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <select
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value as RecordType)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
                >
                  <option value="manual_note">{lang === 'es' ? 'Nota General' : 'General Note'}</option>
                  <option value="custom_config">{lang === 'es' ? 'Configuración' : 'Configuration'}</option>
                  <option value="custom_drop">{lang === 'es' ? 'Drop Diseñado' : 'Custom Drop'}</option>
                  <option value="cart_order">{lang === 'es' ? 'Pedido / Compra' : 'Order'}</option>
                </select>
              </div>
            </div>

            <textarea
              rows={2}
              placeholder={lang === 'es' ? 'Detalles o especificaciones adicionales que quieras respaldar...' : 'Additional details or specifications you want to save...'}
              value={customSummary}
              onChange={(e) => setCustomSummary(e.target.value)}
              className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs"
              >
                {lang === 'es' ? 'Cancelar' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Guardar Trabajo' : 'Save Work'}</span>
              </button>
            </div>
          </form>
        )}

        {/* Filter Bar */}
        <div className="bg-slate-800/30 px-6 py-2 border-b border-slate-700/60 flex gap-1.5 overflow-x-auto text-xs scrollbar-none">
          {[
            { id: 'all', label_es: 'Todos', label_en: 'All' },
            { id: 'work_session', label_es: 'Sesiones', label_en: 'Sessions' },
            { id: 'cart_order', label_es: 'Pedidos', label_en: 'Orders' },
            { id: 'custom_drop', label_es: 'Drops', label_en: 'Drops' },
            { id: 'manual_note', label_es: 'Notas', label_en: 'Notes' },
            { id: 'contact_inquiry', label_es: 'Consultas', label_en: 'Inquiries' }
          ].map((pill) => (
            <button
              key={pill.id}
              onClick={() => setActiveFilter(pill.id)}
              className={`px-3 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
                activeFilter === pill.id
                  ? 'bg-amber-400 text-black font-bold'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'es' ? pill.label_es : pill.label_en}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredRecords.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-3">
              <Package className="w-12 h-12 mx-auto text-slate-600 opacity-60" />
              <p className="text-sm font-semibold">
                {lang === 'es'
                  ? 'No hay registros guardados en esta categoría aún.'
                  : 'No saved records in this category yet.'}
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                {lang === 'es'
                  ? 'Haz clic en "Guardar Todo Mi Trabajo Ahora" o personaliza cualquier drop o pedido para registrarlo automáticamente.'
                  : 'Click "Save Full Session Now" or customize any drop or order to record it automatically.'}
              </p>
            </div>
          ) : (
            filteredRecords.map((record: SavedWorkRecord) => (
              <div
                key={record.id}
                className="bg-slate-900/70 border border-slate-700/80 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start gap-3 hover:border-sky-400/60 transition-colors"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-800 shrink-0 mt-0.5">
                    {getIconForType(record.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-bold text-white truncate">{record.title}</span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {record.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{record.summary}</p>
                    {record.details && Object.keys(record.details).length > 0 && (
                      <div className="mt-2 text-[11px] font-mono bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-lg text-slate-300 max-h-28 overflow-y-auto">
                        <pre className="whitespace-pre-wrap">
                          {JSON.stringify(record.details, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => deleteRecord(record.id)}
                  title={lang === 'es' ? 'Eliminar registro' : 'Delete record'}
                  className="text-slate-500 hover:text-red-400 p-1.5 rounded-lg hover:bg-slate-800 transition-colors self-end sm:self-center shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-700/80 bg-slate-900/90 flex flex-wrap justify-between items-center gap-3">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={exportWorkAsJSON}
              title={lang === 'es' ? 'Descargar backup JSON estructurado' : 'Download structured JSON backup'}
              className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'es' ? 'Descargar JSON' : 'Download JSON'}</span>
            </button>

            <button
              onClick={exportWorkAsText}
              title={lang === 'es' ? 'Descargar reporte en formato texto plano' : 'Download plain text summary report'}
              className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'es' ? 'Descargar TXT' : 'Download TXT'}</span>
            </button>

            <button
              onClick={handleCopyClipboard}
              className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors"
            >
              {isCopied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-amber-400" />
              )}
              <span>{isCopied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : (lang === 'es' ? 'Copiar Resumen' : 'Copy Summary')}</span>
            </button>

            {savedRecords.length > 0 && (
              <button
                onClick={clearAllRecords}
                className="text-slate-400 hover:text-red-400 text-xs px-2.5 py-2 transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Limpiar Todo' : 'Clear All'}</span>
              </button>
            )}
          </div>

          <button
            onClick={handleWhatsAppSend}
            className="bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-black" />
            <span>{lang === 'es' ? 'Enviar a WhatsApp (+52)' : 'Send to WhatsApp (+52)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

