import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Mail, CheckCircle2, Sparkles, Copy, Shield, Bell, ArrowRight } from 'lucide-react';

export const SubscribeSection: React.FC = () => {
  const { lang, recordWork, showToast } = useStore();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState<'streetwear' | 'arte' | 'dropship'>('streetwear');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const couponCode = 'VIPDROP10';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    recordWork(
      'custom_config',
      `Suscripción VIP Atelier: ${email}`,
      `Suscrito a alertas de drops y guía técnica SEO. Cupón desbloqueado: ${couponCode} (10% descuento)`,
      { email, name, interest, couponCode, date: new Date().toISOString() }
    );

    setIsSubscribed(true);
    showToast(
      lang === 'es'
        ? '¡Bienvenido al Atelier! Cupón VIPDROP10 desbloqueado.'
        : 'Welcome to the Atelier! Coupon VIPDROP10 unlocked.'
    );
  };

  const copyCoupon = () => {
    navigator.clipboard.writeText(couponCode);
    setCopiedCoupon(true);
    showToast(lang === 'es' ? '¡Cupón copiado al portapapeles!' : 'Coupon copied to clipboard!');
    setTimeout(() => setCopiedCoupon(false), 3000);
  };

  return (
    <section className="mt-12 bg-gradient-to-br from-[#121c32] via-[#162546] to-[#0f1a30] border border-sky-400/35 rounded-2xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 text-amber-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Bell className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'VIP Drop Alerts · Newsletter Atelier' : 'VIP Drop Alerts · Atelier Newsletter'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {lang === 'es'
            ? 'Suscríbete a los Drops Exclusivos de Lienzo Urbano'
            : 'Subscribe to Exclusive Lienzo Urbano Drops'}
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          {lang === 'es'
            ? 'Obtén acceso prioritario a colecciones cápsula de 240/420 GSM, guías técnicas SEO de confección y un cupón instantáneo del 10% de descuento en tu primer pedido.'
            : 'Get priority access to limited 240/420 GSM drops, SEO streetwear production guides, and an instant 10% off coupon code for your first order.'}
        </p>

        {isSubscribed ? (
          <div className="bg-emerald-500/15 border border-emerald-400/40 rounded-xl p-6 mt-6 max-w-md mx-auto space-y-4 animate-fadeIn">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-base font-extrabold text-white">
              {lang === 'es' ? '¡Te has unido exitosamente!' : 'You are now on the VIP list!'}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'es'
                ? 'Usa tu código promocional al finalizar tu compra o en el carrito:'
                : 'Use your promotional code at checkout or inside your bag:'}
            </p>
            <div className="flex items-center justify-center gap-2 bg-slate-900/90 border border-amber-400/50 p-2.5 rounded-lg max-w-xs mx-auto">
              <span className="font-mono text-base font-extrabold text-amber-400 tracking-wider">
                {couponCode}
              </span>
              <button
                onClick={copyCoupon}
                className="bg-amber-400 hover:bg-amber-300 text-black px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 transition-all"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedCoupon ? (lang === 'es' ? 'Copiado' : 'Copied') : (lang === 'es' ? 'Copiar' : 'Copy')}</span>
              </button>
            </div>
            <div className="text-[11px] text-slate-400 pt-1">
              ✓ {lang === 'es' ? 'Guardado automáticamente en tu panel "Mi Trabajo"' : 'Auto-recorded into "My Work" panel'}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-6 space-y-4 max-w-xl mx-auto">
            {/* Interest pills */}
            <div className="flex justify-center gap-2 flex-wrap text-xs">
              <button
                type="button"
                onClick={() => setInterest('streetwear')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  interest === 'streetwear'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {lang === 'es' ? 'Streetwear (240/420 GSM)' : 'Streetwear (240/420 GSM)'}
              </button>
              <button
                type="button"
                onClick={() => setInterest('arte')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  interest === 'arte'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {lang === 'es' ? 'Lienzos & Prints Fine Art' : 'Canvases & Gallery Art'}
              </button>
              <button
                type="button"
                onClick={() => setInterest('dropship')}
                className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
                  interest === 'dropship'
                    ? 'bg-amber-400 text-black shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {lang === 'es' ? 'Dropshipping & B2B' : 'Dropshipping & B2B'}
              </button>
            </div>

            {/* Inputs & Submit */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                placeholder={lang === 'es' ? 'Tu nombre o marca (opcional)' : 'Your name / brand (optional)'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 sm:w-1/3"
              />
              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder={lang === 'es' ? 'tucorreo@ejemplo.com' : 'yourname@example.com'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-300 text-black font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>{lang === 'es' ? 'Suscribirme & Recibir 10% Off' : 'Join & Get 10% Off'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust disclaimer */}
            <div className="flex justify-center items-center gap-4 text-[11px] text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'es' ? 'Cero Spam garantizado' : 'Zero Spam guaranteed'}
              </span>
              <span>·</span>
              <span>{lang === 'es' ? 'Privacidad 100% protegida' : '100% Privacy protected'}</span>
              <span>·</span>
              <span>{lang === 'es' ? 'Cancela cuando desees' : 'Unsubscribe anytime'}</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
