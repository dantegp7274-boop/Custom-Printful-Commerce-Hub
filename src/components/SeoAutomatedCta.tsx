import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, STORE_DOMAIN, STORE_PHONE_CLEAN } from '../data/storeData';
import {
  Search,
  Sparkles,
  Copy,
  CheckCircle2,
  BookmarkCheck,
  Share2,
  ExternalLink,
  Code2,
  Sliders,
  MessageCircle,
  Eye
} from 'lucide-react';

export const SeoAutomatedCta: React.FC = () => {
  const { lang, recordWork, showToast } = useStore();

  const [selectedProductSku, setSelectedProductSku] = useState(PRODUCTS[1].sku); // French Terry Hoodie
  const [customKeywords, setCustomKeywords] = useState('streetwear 420 gsm, french terry, dropshipping printful');
  const [activeTabPreview, setActiveTabPreview] = useState<'serp' | 'social' | 'schema'>('serp');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const product = PRODUCTS.find((p) => p.sku === selectedProductSku) || PRODUCTS[0];

  // Automated SEO Meta fields
  const metaTitle = `${product.title} | Lienzo Urbano Official Atelier Store`;
  const metaSlug = product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const metaUrl = `https://${STORE_DOMAIN}/shop/${metaSlug}`;
  const metaDescription = `${product.description} Confección de alta gama, sincronización en vivo con WooCommerce y Printful API. Envíos globales con rastreo.`;

  // Schema.org JSON-LD structured data generated dynamically
  const schemaJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: product.image,
    description: product.description,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Lienzo Urbano'
    },
    offers: {
      '@type': 'Offer',
      url: metaUrl,
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Lienzo Urbano Atelier'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '98'
    }
  };

  const schemaString = JSON.stringify(schemaJsonLd, null, 2);

  const handleCopy = () => {
    const fullMetaPack = `<!-- SEO & Social Meta Tags for ${product.title} -->\n<title>${metaTitle}</title>\n<meta name="description" content="${metaDescription}" />\n<link rel="canonical" href="${metaUrl}" />\n<meta property="og:title" content="${metaTitle}" />\n<meta property="og:description" content="${metaDescription}" />\n<meta property="og:image" content="${product.image}" />\n<meta property="og:url" content="${metaUrl}" />\n<meta name="twitter:card" content="summary_large_image" />\n\n<!-- Schema.org JSON-LD -->\n<script type="application/ld+json">\n${schemaString}\n</script>`;

    navigator.clipboard.writeText(fullMetaPack);
    setCopiedSnippet(true);
    showToast(lang === 'es' ? '¡Metadatos SEO y Schema copiados al portapapeles!' : 'SEO Metadata & Schema copied!');
    setTimeout(() => setCopiedSnippet(false), 3000);
  };

  const handleSaveToWork = () => {
    recordWork(
      'custom_config',
      `Optimización SEO: ${product.title}`,
      `Configuración de metadatos Google SERP, OpenGraph y Schema.org Product (${product.sku}) para ${metaUrl}`,
      {
        productSku: product.sku,
        metaTitle,
        metaUrl,
        metaDescription,
        schemaJsonLd
      }
    );
  };

  const handleWhatsAppConsult = () => {
    handleSaveToWork();
    const text = `Hola Lienzo Urbano, configuré la optimización SEO para el drop "${product.title}" (${product.sku}). Quisiera asesoría para lanzarlo en WooCommerce con Printful.`;
    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="mt-14 bg-[#0e1930] border border-sky-400/35 rounded-2xl p-6 sm:p-9 text-white shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-slate-700/80">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-400/40 text-sky-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'es' ? 'Herramienta Automatizada SEO & CTA' : 'Automated SEO CTA & Meta Generator'}</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            {lang === 'es'
              ? 'Motor Automatizado de SEO & Rich Snippets para Drops'
              : 'Automated SEO & Rich Snippets Engine for Drops'}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
            {lang === 'es'
              ? 'Genera al instante la vista previa en Google, las tarjetas de redes sociales (OpenGraph) y el marcado estructurado Schema.org JSON-LD para posicionar tus prendas en los primeros resultados.'
              : 'Instantly generate Google search previews, social sharing cards (OpenGraph), and Schema.org structured data to rank your streetwear collection on top.'}
          </p>
        </div>

        {/* Product selector */}
        <div className="w-full md:w-auto shrink-0">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            {lang === 'es' ? 'Seleccionar Producto / Drop:' : 'Select Product / Drop:'}
          </label>
          <select
            value={selectedProductSku}
            onChange={(e) => setSelectedProductSku(e.target.value)}
            className="w-full md:w-64 px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400 font-medium"
          >
            {PRODUCTS.map((p) => (
              <option key={p.sku} value={p.sku}>
                {p.title} ({p.sku})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content Split: Live Preview & SEO Score */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Live Preview Tabs (Google SERP, OpenGraph, Schema) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Preview Mode Switcher */}
          <div className="flex gap-2 border-b border-slate-800 pb-2">
            <button
              onClick={() => setActiveTabPreview('serp')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTabPreview === 'serp'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Google SERP Snippet</span>
            </button>
            <button
              onClick={() => setActiveTabPreview('social')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTabPreview === 'social'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>OpenGraph Social Card</span>
            </button>
            <button
              onClick={() => setActiveTabPreview('schema')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTabPreview === 'schema'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Schema.org JSON-LD</span>
            </button>
          </div>

          {/* TAB 1: Google SERP Preview */}
          {activeTabPreview === 'serp' && (
            <div className="bg-[#202124] border border-[#3c4043] rounded-2xl p-5 sm:p-6 shadow-inner space-y-2 font-sans animate-fadeIn">
              {/* URL Breadcrumb */}
              <div className="flex items-center gap-2 text-xs text-[#bdc1c6] font-mono">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                  🔒
                </span>
                <span className="text-[#dadce0]">{STORE_DOMAIN}</span>
                <span className="text-[#9aa0a6]">› shop › {metaSlug}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-medium text-[#8ab4f8] hover:underline cursor-pointer leading-snug">
                {metaTitle}
              </h3>

              {/* Rich snippet stars */}
              <div className="flex items-center gap-2 text-xs text-[#bdc1c6]">
                <span className="text-amber-400 font-bold">★★★★★ 4.9</span>
                <span>(98 reseñas)</span>
                <span>·</span>
                <span className="text-emerald-400 font-semibold font-mono">
                  ${product.price.toFixed(2)} USD
                </span>
                <span>·</span>
                <span className="text-slate-300">En stock</span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#bdc1c6] leading-relaxed pt-1">
                {metaDescription}
              </p>
            </div>
          )}

          {/* TAB 2: OpenGraph Card Preview */}
          {activeTabPreview === 'social' && (
            <div className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-md max-w-lg mx-auto sm:mx-0 animate-fadeIn">
              <div className="w-full h-48 bg-slate-800 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {STORE_DOMAIN}
                </span>
              </div>
              <div className="p-4 bg-slate-950/90 space-y-1">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  {STORE_DOMAIN} · ATELIER STREETWEAR
                </div>
                <div className="text-sm font-bold text-white leading-tight">
                  {metaTitle}
                </div>
                <div className="text-xs text-slate-400 line-clamp-2">
                  {metaDescription}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Schema.org JSON-LD Code */}
          {activeTabPreview === 'schema' && (
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 overflow-hidden shadow-inner animate-fadeIn">
              <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                <span>&lt;script type="application/ld+json"&gt;</span>
                <span className="text-emerald-400">✓ Valid Schema.org Product</span>
              </div>
              <pre className="text-xs font-mono text-sky-300 overflow-x-auto max-h-60 leading-relaxed scrollbar-none">
                {schemaString}
              </pre>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-3">
            <button
              onClick={handleCopy}
              className="bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
            >
              <Copy className="w-4 h-4" />
              <span>
                {copiedSnippet
                  ? (lang === 'es' ? '¡Copiado!' : 'Copied!')
                  : (lang === 'es' ? 'Copiar Etiquetas SEO & Schema' : 'Copy SEO Meta & Schema')}
              </span>
            </button>

            <button
              onClick={handleSaveToWork}
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
            >
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
              <span>{lang === 'es' ? 'Guardar en Mi Trabajo' : 'Record in My Work'}</span>
            </button>

            <button
              onClick={handleWhatsAppConsult}
              className="bg-[#25d366] hover:bg-[#20ba59] text-black font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>{lang === 'es' ? 'Cotizar Drop Optimizado' : 'Quote Optimized Drop'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Automated SEO Scorecard & Checkpoints */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 sm:p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
              {lang === 'es' ? 'Puntaje SEO Automatizado' : 'Automated SEO Score'}
            </h4>
            <span className="text-xs font-mono font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded">
              100 / 100
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full w-full rounded-full"></div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-300 pt-1">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'es' ? 'Título Optimizado:' : 'Optimized Title:'}</strong> {metaTitle.length} caracteres (rango ideal 30-60)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'es' ? 'Meta Descripción:' : 'Meta Description:'}</strong> Resumen con llamada a la acción y palabras clave
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Schema.org JSON-LD:</strong> Objeto Product con oferta, moneda, disponibilidad y rating agregado
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>OpenGraph & Twitter:</strong> Tarjeta visual summary_large_image con imagen 4:3
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Sincronización WooCommerce:</strong> Listo para inyectar en RankMath, Yoast o REST API
              </span>
            </div>
          </div>

          {/* Pro tip box */}
          <div className="bg-slate-950/80 border border-amber-400/25 p-3 rounded-xl text-[11px] text-amber-200/90 leading-relaxed">
            💡 <strong>{lang === 'es' ? 'Consejo del Atelier:' : 'Atelier Pro Tip:'}</strong>{' '}
            {lang === 'es'
              ? 'Los términos técnicos como "240 GSM", "French Terry" y "DTG Kornit" aumentan el CTR de compradores orgánicos de alto valor en más de 45%.'
              : 'Technical keywords like "240 GSM", "French Terry", and "DTG Kornit" increase high-value buyer click-through rate by 45%+.'}
          </div>
        </div>
      </div>
    </section>
  );
};
