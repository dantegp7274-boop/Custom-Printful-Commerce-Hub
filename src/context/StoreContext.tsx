import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, DropSlide, MatrixItem, BlogArticle, CartItem, SavedWorkRecord, RecordType, Language } from '../types';
import { STORE_PHONE_CLEAN, SPOTLIGHT_SLIDES } from '../data/storeData';

interface StoreContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  activeTab: 'tienda' | 'blog' | 'contacto' | 'trabajos';
  setActiveTab: (tab: 'tienda' | 'blog' | 'contacto' | 'trabajos') => void;
  // Spotlight Slides (Editable for pricing, titles, subtitles)
  slides: DropSlide[];
  updateSlide: (id: string, updatedFields: Partial<DropSlide>) => void;
  resetSlides: () => void;
  editingSlide: DropSlide | null;
  setEditingSlide: (slide: DropSlide | null) => void;
  isEditingMode: boolean;
  setIsEditingMode: (editing: boolean) => void;
  // SEO Live Inspector modal
  isSeoModalOpen: boolean;
  setIsSeoModalOpen: (open: boolean) => void;
  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string, customNotes?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  // Modal selections
  activeProductModal: Product | null;
  setActiveProductModal: (prod: Product | null) => void;
  activeMatrixModal: MatrixItem | null;
  setActiveMatrixModal: (item: MatrixItem | null) => void;
  activeBlogModal: BlogArticle | null;
  setActiveBlogModal: (article: BlogArticle | null) => void;
  isSavedWorkOpen: boolean;
  setIsSavedWorkOpen: (open: boolean) => void;
  // Saved work recorder
  savedRecords: SavedWorkRecord[];
  recordWork: (type: RecordType, title: string, summary: string, details?: Record<string, any>) => void;
  saveWorkSnapshot: (customTitle?: string, customNotes?: string) => void;
  deleteRecord: (id: string) => void;
  clearAllRecords: () => void;
  lastSavedTime: string | null;
  exportWorkAsJSON: () => void;
  exportWorkAsText: () => void;
  exportWorkSummaryText: () => string;
  shareWorkViaWhatsApp: () => void;
  // Toast notifications
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

const STORAGE_KEY_WORK = 'lienzo_urbano_saved_work_v2';
const STORAGE_KEY_CART = 'lienzo_urbano_cart_v2';
const STORAGE_KEY_LANG = 'lienzo_urbano_lang_v2';
const STORAGE_KEY_SLIDES = 'lienzo_urbano_slides_v2';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG);
      return (saved === 'en' || saved === 'es') ? saved : 'es';
    } catch {
      return 'es';
    }
  });

  const [activeTab, setActiveTab] = useState<'tienda' | 'blog' | 'contacto' | 'trabajos'>('tienda');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSavedWorkOpen, setIsSavedWorkOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [activeMatrixModal, setActiveMatrixModal] = useState<MatrixItem | null>(null);
  const [activeBlogModal, setActiveBlogModal] = useState<BlogArticle | null>(null);
  const [editingSlide, setEditingSlide] = useState<DropSlide | null>(null);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);

  // Editable Spotlight Slides with persistence
  const [slides, setSlides] = useState<DropSlide[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SLIDES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return SPOTLIGHT_SLIDES;
    } catch {
      return SPOTLIGHT_SLIDES;
    }
  });

  // Cart state with persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Saved Work records with persistence
  const [savedRecords, setSavedRecords] = useState<SavedWorkRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_WORK);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return [
        {
          id: 'rec-init-clean',
          timestamp: new Date().toLocaleString(),
          type: 'work_session',
          title: 'Limpieza de Interfaz & Respaldo Atelier',
          summary: 'Pestañas y etiquetas técnicas removidas (SEO, Verified SSL, WordPress REST API, WooCommerce Sync y Printful Direct Webhook). La tienda ahora luce minimalista y moderna.',
          details: {
            theme: 'Minimalist Luxury Atelier',
            status: 'All changes saved and active',
            cartReady: true
          }
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SLIDES, JSON.stringify(slides));
    } catch (e) {
      console.error('Error saving slides to localStorage', e);
    }
  }, [slides]);

  const updateSlide = (id: string, updatedFields: Partial<DropSlide>) => {
    setSlides((prev) =>
      prev.map((slide) => {
        if (slide.id === id) {
          const updated = { ...slide, ...updatedFields };
          return updated;
        }
        return slide;
      })
    );

    const targetSlide = slides.find((s) => s.id === id);
    const updatedTitle = updatedFields.title || targetSlide?.title || 'Drop';
    const newPrice = updatedFields.price !== undefined ? `$${updatedFields.price.toFixed(2)}` : '';

    showToast(
      lang === 'es'
        ? `✏️ Drop actualizado: "${updatedTitle}" ${newPrice}`
        : `✏️ Drop updated: "${updatedTitle}" ${newPrice}`
    );

    // Auto-record work
    recordWork(
      'custom_config',
      `Edición de Drop en Slider: ${updatedTitle}`,
      `Campos modificados: ${Object.keys(updatedFields).join(', ')}. Nuevo precio: ${newPrice}`,
      { id, updatedFields }
    );
  };

  const resetSlides = () => {
    setSlides(SPOTLIGHT_SLIDES);
    try {
      localStorage.removeItem(STORAGE_KEY_SLIDES);
    } catch {}
    showToast(
      lang === 'es'
        ? 'Restablecidos todos los drops originales del slider'
        : 'Restored original spotlight drops in slider'
    );
  };

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_WORK, JSON.stringify(savedRecords));
      setLastSavedTime(new Date().toLocaleTimeString());
    } catch (e) {
      console.error('Error saving records to localStorage', e);
    }
  }, [savedRecords]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY_LANG, newLang);
    } catch {}
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const recordWork = (
    type: RecordType,
    title: string,
    summary: string,
    details: Record<string, any> = {}
  ) => {
    const newRecord: SavedWorkRecord = {
      id: 'rec-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toLocaleString(),
      type,
      title,
      summary,
      details
    };
    setSavedRecords((prev) => [newRecord, ...prev]);
    showToast(lang === 'es' ? `💾 Trabajo guardado: "${title}"` : `💾 Work saved: "${title}"`);
  };

  const deleteRecord = (id: string) => {
    setSavedRecords((prev) => prev.filter((r) => r.id !== id));
    showToast(lang === 'es' ? 'Elemento eliminado del historial' : 'Item removed from records');
  };

  const clearAllRecords = () => {
    setSavedRecords([]);
    showToast(lang === 'es' ? 'Historial de trabajo limpiado' : 'Work history cleared');
  };

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedSize?: string,
    customNotes?: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          customNotes: customNotes || next[existingIndex].customNotes
        };
        return next;
      }
      return [...prev, { product, quantity, selectedSize: selectedSize || 'Standard', customNotes }];
    });

    const sizeText = selectedSize ? ` (${selectedSize})` : '';
    showToast(
      lang === 'es'
        ? `Añadido a la bolsa: ${product.title}${sizeText} · $${product.price}`
        : `Added to bag: ${product.title_en}${sizeText} · $${product.price}`
    );

    // Auto-record work
    recordWork(
      'cart_order',
      `Agregado a Bolsa: ${product.title}`,
      `Producto: ${product.title} (${product.sku}) - Cantidad: ${quantity} - Precio: $${product.price}`,
      { product, quantity, selectedSize }
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast(lang === 'es' ? 'Producto removido de la bolsa' : 'Product removed from bag');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const exportWorkSummaryText = (): string => {
    const header = `=== LIENZO URBANO ATELIER - REPORTE DE TRABAJO GUARDADO ===\nFecha: ${new Date().toLocaleString()}\nDominio: lienzourbano.shop\nTotal de elementos guardados: ${savedRecords.length}\nTotal en Carrito: ${cartCount} productos ($${cartTotal.toFixed(2)})\n\n`;
    
    const cartSection = cart.length > 0 
      ? `--- PRODUCTOS EN BOLSA / PEDIDO ---\n` + cart.map((c, i) => `${i + 1}. ${c.product.title} (${c.product.sku}) x${c.quantity} ${c.selectedSize ? '[' + c.selectedSize + ']' : ''} - $${(c.product.price * c.quantity).toFixed(2)}`).join('\n') + `\nTotal: $${cartTotal.toFixed(2)}\n\n`
      : '--- BOLSA VACÍA ---\n\n';

    const recordsSection = savedRecords.length > 0
      ? `--- ACCIONES Y DROPS REGISTRADOS ---\n` + savedRecords.map((r, i) => `[${i + 1}] ${r.timestamp} | Tipo: ${r.type}\nTítulo: ${r.title}\nDetalle: ${r.summary}\n${r.details ? JSON.stringify(r.details, null, 2) : ''}\n----------------------------------`).join('\n\n')
      : '--- NO HAY REGISTROS ADICIONALES ---';

    return header + cartSection + recordsSection;
  };

  const saveWorkSnapshot = (customTitle?: string, customNotes?: string) => {
    const timestampStr = new Date().toLocaleString();
    const title = customTitle || (lang === 'es' ? `Respaldo de Sesión de Trabajo (${timestampStr})` : `Work Session Backup (${timestampStr})`);
    const summary = customNotes || (lang === 'es' 
      ? `Respaldo completo de sesión: ${cartCount} productos en bolsa ($${cartTotal.toFixed(2)}), ${slides.length} drops en slider, idioma ${lang.toUpperCase()}.`
      : `Complete session snapshot: ${cartCount} bag items ($${cartTotal.toFixed(2)}), ${slides.length} slider drops, language ${lang.toUpperCase()}.`);

    recordWork(
      'work_session',
      title,
      summary,
      {
        timestamp: timestampStr,
        cartCount,
        cartTotal,
        cartItems: cart.map((c) => ({
          sku: c.product.sku,
          title: c.product.title,
          qty: c.quantity,
          size: c.selectedSize,
          price: c.product.price
        })),
        slidesSummary: slides.map((s) => ({ id: s.id, sku: s.sku, price: s.price, title: s.title })),
        notes: customNotes || 'Instant snapshot'
      }
    );
  };

  const exportWorkAsText = () => {
    const text = exportWorkSummaryText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lienzo-urbano-reporte-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(lang === 'es' ? 'Reporte en texto descargado' : 'Text summary downloaded');
  };

  const exportWorkAsJSON = () => {
    const data = {
      project: 'Lienzo Urbano Atelier',
      exportedAt: new Date().toISOString(),
      cart,
      cartTotal,
      savedRecords
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lienzo-urbano-trabajo-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(lang === 'es' ? 'Archivo JSON de trabajo descargado' : 'Work JSON file downloaded');
  };

  const shareWorkViaWhatsApp = () => {
    const summary = exportWorkSummaryText();
    const encoded = encodeURIComponent(
      `Hola Lienzo Urbano, adjunto el resumen de mi trabajo y pedido configurado en lienzourbano.shop:\n\n${summary.substring(0, 1600)}`
    );
    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encoded}`, '_blank');
  };

  return (
    <StoreContext.Provider
      value={{
        lang,
        setLang,
        activeTab,
        setActiveTab,
        slides,
        updateSlide,
        resetSlides,
        editingSlide,
        setEditingSlide,
        isEditingMode,
        setIsEditingMode,
        isSeoModalOpen,
        setIsSeoModalOpen,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        activeProductModal,
        setActiveProductModal,
        activeMatrixModal,
        setActiveMatrixModal,
        activeBlogModal,
        setActiveBlogModal,
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
        shareWorkViaWhatsApp,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
