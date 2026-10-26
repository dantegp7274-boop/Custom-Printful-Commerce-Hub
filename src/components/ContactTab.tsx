import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { STORE_PHONE, STORE_PHONE_CLEAN, STORE_DOMAIN } from '../data/storeData';
import { MessageSquare, Send, CheckCircle2, ShieldCheck, Truck, Factory } from 'lucide-react';

export const ContactTab: React.FC = () => {
  const { lang, recordWork, showToast } = useStore();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(
    'Cápsula Streetwear Personalizada (Custom Made)'
  );
  const [pieceCount, setPieceCount] = useState('1 a 10 piezas (Muestras / Test drop)');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    recordWork(
      'contact_inquiry',
      `Consulta de Proyecto: ${projectType}`,
      `Cliente: ${fullName} (${email}) - Volumen: ${pieceCount} - Mensaje: ${details || 'Sin notas adicionales'}`,
      {
        fullName,
        email,
        projectType,
        pieceCount,
        details
      }
    );

    setIsSubmitted(true);
    showToast(
      lang === 'es'
        ? '¡Mensaje guardado en tu historial y listo para envío!'
        : 'Inquiry saved in your work records and ready to submit!'
    );
  };

  const handleSendToWhatsApp = () => {
    const text = `Hola Lienzo Urbano, envío una cotización desde lienzourbano.shop:\n- Nombre: ${fullName}\n- Email: ${email}\n- Proyecto: ${projectType}\n- Volumen estimado: ${pieceCount}\n- Detalles: ${details}`;
    window.open(`https://wa.me/${STORE_PHONE_CLEAN}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-[#1c1917] text-white p-7 sm:p-10 rounded-2xl border border-[#292524] shadow-xl">
        <span className="inline-block bg-amber-400/15 text-amber-400 border border-amber-400/30 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
          {lang === 'es' ? 'Atención Directa & Drops a Medida' : 'Direct Support & Custom Drops'}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
          {lang === 'es' ? 'Contacto & Soporte Lienzo Urbano' : 'Contact & Lienzo Urbano Support'}
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
          {lang === 'es'
            ? 'Estamos listos para hacer realidad tu cápsula de ropa urbana o tu colección de arte. Todo lo que redactes se guarda automáticamente en tu historial de trabajo.'
            : 'Ready to bring your streetwear capsule or fine art drop to life. Everything you submit is automatically saved in your work history.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#eaf1fa] border border-[#cbd8ec] rounded-2xl p-6 sm:p-8 shadow-xl text-slate-900">
          <h2 className="text-lg sm:text-xl font-extrabold mb-4 text-slate-900">
            {lang === 'es' ? 'Envíanos tu Consulta' : 'Send Project Inquiry'}
          </h2>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-emerald-950">
                {lang === 'es' ? '¡Consulta Registrada con Éxito!' : 'Inquiry Successfully Saved!'}
              </h3>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                {lang === 'es'
                  ? 'Hemos guardado toda la especificación técnica en tu panel "Mi Trabajo". Puedes enviarla directamente a nuestro WhatsApp para atención inmediata.'
                  : 'All technical details have been recorded to your "My Work" panel. You can now send it straight to our WhatsApp for immediate attention.'}
              </p>
              <div className="flex gap-3 justify-center flex-wrap pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="bg-[#25d366] hover:bg-[#20ba59] text-black font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-1.5 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>{lang === 'es' ? 'Enviar a WhatsApp Ahora' : 'Send to WhatsApp Now'}</span>
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-semibold px-4 py-2 rounded-lg text-xs"
                >
                  {lang === 'es' ? 'Nueva Consulta' : 'New Inquiry'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'es' ? 'Nombre Completo o Marca' : 'Full Name or Brand'}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={lang === 'es' ? 'Ej. Mateo Silva · Brand Underground' : 'e.g. Mateo Silva · Studio'}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#cbd8ec] rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'es' ? 'Correo Electrónico' : 'Email Address'}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#cbd8ec] rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'es' ? 'Tipo de Proyecto' : 'Project Category'}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#cbd8ec] rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  >
                    <option>Cápsula Streetwear Personalizada (Custom Made)</option>
                    <option>Impresión de Arte de Galería (Canvas / Acrílico)</option>
                    <option>Integración Dropshipping & Tienda WooCommerce</option>
                    <option>Muestras Físicas Sin Mínimo (No MOQ)</option>
                    <option>Pregunta General sobre Pedido</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'es' ? 'Volumen Estimado' : 'Estimated Volume'}
                  </label>
                  <select
                    value={pieceCount}
                    onChange={(e) => setPieceCount(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-[#cbd8ec] rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                  >
                    <option>1 a 10 piezas (Muestras / Test drop)</option>
                    <option>25 a 50 piezas (Drop Cápsula)</option>
                    <option>100 a 250 piezas (Colección Completa)</option>
                    <option>500+ piezas (Producción a Gran Escala)</option>
                    <option>Suscripción Continua Print-on-Demand</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'es' ? 'Mensaje o Detalles del Drop' : 'Project Details & Specifications'}
                </label>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    lang === 'es'
                      ? 'Descríbenos tu idea, número de piezas, telas deseadas (ej. 240 GSM o 420 GSM), técnicas (Puff, 3D) o fecha objetivo...'
                      : 'Describe your idea, desired fabrics (e.g. 240 GSM tees, 420 GSM hoodies), print techniques, timeline...'
                  }
                  className="w-full px-3.5 py-2.5 bg-white border border-[#cbd8ec] rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1c1917] hover:bg-slate-800 text-white font-bold py-3 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>{lang === 'es' ? 'Registrar Consulta y Guardar' : 'Save and Register Inquiry'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* WhatsApp Direct Highlight */}
          <div className="bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 border border-emerald-500/35 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center text-black">
                <MessageSquare className="w-4 h-4 fill-black" />
              </div>
              <h3 className="text-base font-extrabold text-emerald-950">
                {lang === 'es' ? 'Atención Inmediata por WhatsApp' : 'Direct WhatsApp Support'}
              </h3>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed mb-4">
              {lang === 'es'
                ? 'Para cotizaciones exprés de drops, revisión técnica de archivos y muestras de tela, habla directamente con nuestro equipo de confección y serigrafía.'
                : 'For fast drop quotes, file pre-flight checks, and fabric swatches, chat directly with our atelier production team.'}
            </p>
            <a
              href={`https://wa.me/${STORE_PHONE_CLEAN}?text=Hola%20Lienzo%20Urbano%2C%20quiero%20cotizar%20un%20proyecto`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold py-3 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-black" />
              <span>{lang === 'es' ? `Escribir al ${STORE_PHONE}` : `Chat on ${STORE_PHONE}`}</span>
            </a>
          </div>

          {/* Operational Details Card */}
          <div className="bg-[#eaf1fa] border border-[#cbd8ec] rounded-2xl p-6 shadow-md text-slate-800">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
              <Factory className="w-4 h-4 text-amber-500" />
              <span>{lang === 'es' ? 'Información de Operación' : 'Atelier Operations'}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'es' ? 'Dominio Oficial:' : 'Official Store:'}{' '}
                  <strong className="text-slate-900">{STORE_DOMAIN}</strong> (SSL 256-Bit)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Factory className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'es' ? 'Taller & Estudio:' : 'Atelier & Studio:'}{' '}
                  <strong>Atelier Lienzo Urbano</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>
                  {lang === 'es' ? 'Producción & Logística:' : 'Fulfillment:'}{' '}
                  <span>Printful API Global + Envíos con FedEx / DHL Express</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
