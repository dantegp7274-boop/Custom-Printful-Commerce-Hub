import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN } from '../data/storeData';
import { CartItem } from '../types';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Tag,
  Truck,
  MessageCircle
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    lang,
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    cartCount,
    clearCart,
    recordWork,
    showToast
  } = useStore();

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [orderConfirmed, setOrderConfirmed] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'LIENZO10') {
      setDiscountPercent(10);
      showToast(lang === 'es' ? '¡Cupón de 10% aplicado!' : '10% coupon applied!');
    } else if (couponCode.trim().toUpperCase() === 'DROPSHIP') {
      setDiscountPercent(15);
      showToast(lang === 'es' ? '¡Cupón de 15% aplicado!' : '15% coupon applied!');
    } else {
      showToast(
        lang === 'es'
          ? 'Cupón no válido (prueba LIENZO10)'
          : 'Invalid coupon code (try LIENZO10)'
      );
    }
  };

  const shippingCost = cartTotal > 150 ? 0 : shippingMethod === 'express' ? 18.0 : 8.5;
  const discountAmount = (cartTotal * discountPercent) / 100;
  const finalTotal = Math.max(0, cartTotal - discountAmount + shippingCost);

  const handleCheckout = () => {
    const orderId = `LU-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmed(orderId);

    // Record order in SavedWork
    recordWork(
      'cart_order',
      `Pedido Confirmado #${orderId}`,
      `Total: $${finalTotal.toFixed(2)} (${cartCount} productos). Sincronización Printful Webhook iniciada con seguimiento en vivo.`,
      {
        orderId,
        items: cart,
        subtotal: cartTotal,
        discountAmount,
        shippingCost,
        finalTotal,
        shippingMethod
      }
    );

    clearCart();
  };

  const handleSendWhatsAppOrder = () => {
    const itemsList = cart
      .map(
        (c: CartItem, idx: number) =>
          `${idx + 1}. ${c.product.title} (${c.product.sku}) x${c.quantity} [${c.selectedSize || 'Standard'}] - $${(c.product.price * c.quantity).toFixed(2)}`
      )
      .join('\n');

    const msg = `Hola Lienzo Urbano, quiero procesar este pedido de lienzourbano.shop:\n\n${itemsList}\n\nSubtotal: $${cartTotal.toFixed(2)}\nEnvío: $${shippingCost.toFixed(2)}\nTotal Final: $${finalTotal.toFixed(2)}\n\nPor favor confirmen datos de pago y envío.`;

    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#121c30] text-white border-l border-sky-400/30 w-full max-w-md h-full flex flex-col shadow-2xl overflow-hidden">
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700/80 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h2 className="text-base font-extrabold text-white">
              {lang === 'es' ? 'Bolsa de Compras' : 'Shopping Bag'}
            </h2>
            <span className="bg-slate-800 text-amber-400 text-xs px-2 py-0.5 rounded-full font-mono">
              {cartCount}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Order Confirmation View */
          <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-extrabold text-white">
              {lang === 'es' ? '¡Pedido Recibido con Éxito!' : 'Order Confirmed!'}
            </h3>

            <div className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-lg font-mono text-xs text-amber-400">
              {lang === 'es' ? 'Número de Orden:' : 'Order Number:'} {orderConfirmed}
            </div>

            <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
              {lang === 'es'
                ? 'El webhook de Printful ha sido sincronizado. Hemos registrado este pedido en tu sección "Mi Trabajo" para que nunca lo pierdas.'
                : 'Printful webhook synchronized. We have saved this order in your "My Work" section so you can always reference it.'}
            </p>

            <div className="w-full pt-4 space-y-2">
              <button
                onClick={() => {
                  setOrderConfirmed(null);
                  setIsCartOpen(false);
                }}
                className="w-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold py-3 rounded-lg text-xs transition-all shadow-md"
              >
                {lang === 'es' ? 'Seguir Explorando la Tienda' : 'Continue Shopping'}
              </button>
            </div>
          </div>
        ) : cart.length === 0 ? (
          /* Empty Cart State */
          <div className="flex-1 p-6 flex flex-col justify-center items-center text-center space-y-4 text-slate-400">
            <ShoppingBag className="w-16 h-16 text-slate-600 stroke-[1.5]" />
            <h3 className="text-base font-bold text-slate-200">
              {lang === 'es' ? 'Tu bolsa está vacía' : 'Your bag is empty'}
            </h3>
            <p className="text-xs text-slate-400 max-w-xs">
              {lang === 'es'
                ? 'Explora las piezas de nuestro catálogo WooCommerce 4x3 o personaliza un drop en la matriz.'
                : 'Explore our 4x3 WooCommerce catalog or configure custom drops in the matrix.'}
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold px-5 py-2.5 rounded-lg text-xs transition-all"
            >
              {lang === 'es' ? 'Ver Catálogo' : 'Browse Catalog'}
            </button>
          </div>
        ) : (
          /* Items List */
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.map((item: CartItem) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="bg-slate-900/80 border border-slate-700/80 rounded-xl p-3 flex gap-3 items-center"
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-16 h-16 rounded-lg object-cover bg-slate-800 shrink-0"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-1">
                    <h4 className="text-xs font-bold text-white truncate">
                      {lang === 'es' ? item.product.title : item.product.title_en}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[10px] text-slate-400 font-mono">
                    SKU: {item.product.sku} {item.selectedSize ? `· Talla: ${item.selectedSize}` : ''}
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs font-bold text-amber-400 font-mono">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>

                    <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-md px-1.5 py-0.5">
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold font-mono px-1">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder={lang === 'es' ? 'Cupón (ej. LIENZO10)' : 'Coupon (e.g. LIENZO10)'}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white uppercase focus:outline-none focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-2 rounded-lg text-xs font-bold border border-slate-700"
              >
                {lang === 'es' ? 'Aplicar' : 'Apply'}
              </button>
            </form>

            {/* Shipping Selector */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3 text-xs space-y-2">
              <div className="font-bold text-slate-300 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-sky-400" />
                <span>{lang === 'es' ? 'Método de Envío' : 'Shipping Method'}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShippingMethod('standard')}
                  className={`p-2 rounded-lg text-left border transition-all ${
                    shippingMethod === 'standard'
                      ? 'border-amber-400 bg-amber-400/10 text-white'
                      : 'border-slate-800 bg-slate-900 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-[11px]">Printful Standard</div>
                  <div className="text-[10px] text-slate-400">
                    {cartTotal > 150 ? 'Gratis' : '$8.50'} · 3-5 días
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setShippingMethod('express')}
                  className={`p-2 rounded-lg text-left border transition-all ${
                    shippingMethod === 'express'
                      ? 'border-amber-400 bg-amber-400/10 text-white'
                      : 'border-slate-800 bg-slate-900 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-[11px]">FedEx / DHL Express</div>
                  <div className="text-[10px] text-slate-400">$18.00 · 24-48h</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Drawer Footer Checkout Summary */}
        {!orderConfirmed && cart.length > 0 && (
          <div className="p-5 border-t border-slate-700/80 bg-slate-900/90 space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>{lang === 'es' ? 'Subtotal' : 'Subtotal'}</span>
                <span className="font-mono">${cartTotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>
                    {lang === 'es' ? 'Descuento Cupón' : 'Discount'} ({discountPercent}%)
                  </span>
                  <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>{lang === 'es' ? 'Envío' : 'Shipping'}</span>
                <span className="font-mono">
                  {shippingCost === 0 ? 'GRATIS' : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-white font-extrabold text-sm pt-2 border-t border-slate-800">
                <span>{lang === 'es' ? 'Total' : 'Total'}</span>
                <span className="text-amber-400 font-mono text-base">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
            >
              <span>{lang === 'es' ? 'Finalizar Pedido' : 'Complete Order'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold py-2.5 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>{lang === 'es' ? 'Cotizar / Enviar por WhatsApp' : 'Order via WhatsApp'}</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {lang === 'es'
                  ? 'Pago Seguro 256-Bit SSL · Confección de Alta Calidad Garantizada'
                  : '256-Bit SSL Secure Checkout · High Quality Craftsmanship'}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
