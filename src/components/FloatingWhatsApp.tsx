import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN } from '../data/storeData';
import { MessageSquare } from 'lucide-react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const FloatingWhatsApp: React.FC = () => {
  const { lang } = useStore();
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);
    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x,
      y,
      size
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 650);
  };

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      <span className="hidden sm:inline-block bg-[#1c1917]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-full border border-slate-700 shadow-xl pointer-events-none select-none">
        {lang === 'es' ? '¿Tienes una idea o diseño? Escríbenos' : 'Have a design idea? Chat with us'}
      </span>
      <div className="relative flex items-center justify-center">
        {/* Custom Tooltip above FloatingWhatsApp button */}
        <div
          role="tooltip"
          id="whatsapp-tooltip"
          className={`absolute bottom-full mb-3 right-0 sm:right-1/2 sm:translate-x-1/2 px-3 py-1.5 bg-[#0f172a] text-white text-xs font-bold rounded-lg shadow-2xl border border-sky-400/40 whitespace-nowrap pointer-events-none transition-all duration-200 z-50 flex items-center gap-1.5 select-none ${
            isHovered
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-1.5 scale-95'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse shrink-0" />
          <span className="tracking-wide">Lienzo Urbano Support</span>
          {/* Tooltip Caret / Pointer */}
          <span className="absolute top-full right-5 sm:right-1/2 sm:translate-x-1/2 -mt-px border-4 border-transparent border-t-[#0f172a]" />
        </div>

        {/* Subtle pinging pulse animation ring */}
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-40 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <a
          href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%20Lienzo%20Urbano%2C%20tengo%20una%20pregunta%20sobre%20sus%20productos`}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          onMouseDown={handleMouseDown}
          title={`Chat en WhatsApp: ${STORE_PHONE}`}
          aria-label={`Chat on WhatsApp with Lienzo Urbano at ${STORE_PHONE}`}
          aria-describedby="whatsapp-tooltip"
          className="relative w-14 h-14 bg-[#25d366] hover:bg-[#20ba59] rounded-full shadow-2xl flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/40 z-10 overflow-hidden cursor-pointer"
        >
          {/* Subtle tactile ripples */}
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className="absolute rounded-full bg-white/45 anim-ripple pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                width: ripple.size,
                height: ripple.size
              }}
            />
          ))}
          <MessageSquare className="w-7 h-7 fill-black relative z-10" />
        </a>
      </div>
    </aside>
  );
};
