import { Product, DropSlide, MatrixItem, BlogArticle, Testimonial, FAQItem } from '../types';

export const STORE_PHONE = '+52 55 2543 3766';
export const STORE_PHONE_CLEAN = '525525433766';
export const STORE_DOMAIN = 'lienzourbano.shop';

export const SPOTLIGHT_SLIDES: DropSlide[] = [
  {
    id: 'slide-retro-sunset',
    sku: 'LU-RETRO-001',
    title: 'Retro Sunset Custom Name Tee 240 GSM',
    title_en: 'Retro Sunset Custom Name Tee 240 GSM',
    description: 'Playera negra de algodón peinado 240 GSM con tipografía retro personalizada y colores cálidos estilo años 70.',
    description_en: 'Heavyweight 240 GSM combed cotton black tee with custom 70s retro sunset typography and warm tones.',
    price: 44.0,
    image: '/assets/aistudio/gpt-image-2_Prompt_5_Personalized_Retro_Name_T-Shirt_A_black_cotton_T-shirt_on_a_female_mode-0__2__837d4efc.jpg',
    badge: 'Top Ventas',
    badge_en: 'Best Seller',
    badgeBg: '#f59e0b',
    badgeColor: '#000000',
    techHighlight: '240 GSM · DTG Kornit HD',
    techColor: '#38bdf8'
  },
  {
    id: 'slide-witty-grey',
    sku: 'LU-WITTY-002',
    title: 'I Knew It Minimalist Marl Tee',
    title_en: 'I Knew It Minimalist Marl Tee',
    description: 'Camiseta gris jaspeada corte relajado con frase irónica y tipografía condensada de alta definición.',
    description_en: 'Heather grey relaxed fit tee featuring witty minimalist typography in high-definition print.',
    price: 39.0,
    image: '/assets/aistudio/gpt-image-2_Prompt_3_Grey_Witty_Typography_T-Shirt_A_grey_marl_cotton-blend_T-shirt_on_a_fem-0__4__upscayl_4x_high-fidelity-4x_00865f2e.png',
    badge: 'Streetwear Minimal',
    badge_en: 'Streetwear Minimal',
    badgeBg: '#10b981',
    badgeColor: '#ffffff',
    techHighlight: 'Algodón Jaspeado · Soft Touch',
    techColor: '#4ade80'
  },
  {
    id: 'slide-cat-hoodie',
    sku: 'LU-HOOD-003',
    title: 'Detective Cat Squad Heavy Hoodie 420 GSM',
    title_en: 'Detective Cat Squad Heavy Hoodie 420 GSM',
    description: 'Sudadera verde oliva militar 420 GSM con ilustración noir serigrafiada en relieve y capucha sin cordones.',
    description_en: '420 GSM military olive green heavyweight fleece hoodie featuring noir feline squad print.',
    price: 92.0,
    image: '/assets/aistudio/Dise_o_sin_t_tulo_-_2026-10-13T162436.133_18e9dfb4.png',
    badge: 'Edición Limitada',
    badge_en: 'Limited Edition',
    badgeBg: '#ef4444',
    badgeColor: '#ffffff',
    techHighlight: '420 GSM French Terry · Puff',
    techColor: '#f472b6'
  },
  {
    id: 'slide-hard-things',
    sku: 'LU-PEPPER-004',
    title: 'You Can Do Hard Things Oversize Tee',
    title_en: 'You Can Do Hard Things Oversize Tee',
    description: 'Algodón lavado tono Pepper vintage con arte gráfico multicolor retro y silueta boxy streetwear.',
    description_en: 'Vintage pepper-washed heavyweight boxy cotton tee with vibrant retro playful lettering.',
    price: 46.0,
    image: '/assets/aistudio/Dise_o_sin_t_tulo_-_2026-10-13T190511.392_eadd7e5e.png',
    badge: 'Vintage Pepper Washed',
    badge_en: 'Vintage Pepper Washed',
    badgeBg: '#8b5cf6',
    badgeColor: '#ffffff',
    techHighlight: 'Heavyweight Boxy · Pigment Dye',
    techColor: '#fbbf24'
  },
  {
    id: 'slide-1',
    sku: 'PRN-HOD-028',
    title: 'Atelier French Terry Hoodie 420 GSM',
    title_en: 'Atelier French Terry Hoodie 420 GSM',
    description: 'Capucha doble capa sin cordones y felpa pesada para drops urbanos.',
    description_en: 'Double-layered hood with no drawstrings and heavyweight fleece for streetwear drops.',
    price: 88.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA39qYr9tFA2C0ie51gzDkqJUsLyz3RvrycPlIDB6vcCNpsgTP0UyH8qdI-U4d4mrAoOWhqQfc5B1-P_sREKBz7ko9AJfWgLJE7guoI761DTYicAJQE7IqUC5ZDYui4TAVZgJz8FOn3CVVe8BoDE-Rqr-rOQcLFXhfA65X-X9LBJAMs3SaTw_aq-GwvXNBEJ7FmsYqVFPYmi2VOJ6bsiv7NDn8UtkYE91WVTZo-B9T8BGWSw7wRXOeCOA',
    badge: 'Edición Limitada',
    badge_en: 'Limited Edition',
    badgeBg: '#ef4444',
    badgeColor: '#ffffff',
    techHighlight: 'Printful DTG + Puff',
    techColor: '#4ade80'
  },
  {
    id: 'slide-2',
    sku: 'PRN-CAN-120',
    title: 'Gallery Fine-Art Stretched Canvas',
    title_en: 'Gallery Fine-Art Stretched Canvas',
    description: 'Lienzo de algodón 380 GSM sobre bastidor macizo de pino FSC.',
    description_en: '380 GSM cotton canvas on solid FSC-certified pine stretcher bars.',
    price: 110.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXta2oMyNld7FWOtb2Bc_yLRDHcIlJgo1TJbCRUKh24xINC0Xwv3BTwa6KOBv9ny8vxNdrE-XYCgtb8pZiN_kog0HAGfYGEZIa7on30E1GQi1b-gVBEWe2PzNnnSsSa8tpgbS2fMBjIhOwxo6MygyV-h3QVUMPAfxUh5l-3pjP_t3KVEsqXWai_8uCjIObk1lDFErNL7jv0a-0lUBlcOTrWQuLdeCyVJJUQ1T6MZK7cPiA7TRUrBsqNA',
    badge: 'Novedad 2025',
    badge_en: '2025 New Arrival',
    badgeBg: '#f59e0b',
    badgeColor: '#000000',
    techHighlight: 'Fine Art Giclée',
    techColor: '#c084fc'
  },
  {
    id: 'slide-3',
    sku: 'PRN-TEE-014',
    title: 'Heavyweight Organic Boxy Tee',
    title_en: 'Heavyweight Organic Boxy Tee',
    description: 'Corte oversize hombro caído con estampado digital Kornit HD.',
    description_en: 'Drop-shoulder boxy oversized cut with Kornit HD direct-to-garment print.',
    price: 42.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9QJf9kIuLPharQrflmCYrYs2Cu240rljVX8oeefRlMir8_HcLPSwitAZMEVZOS75P-eQawz9U9BnN0ZiXpG6bMRwmlyPjDsLpIPF6kCwApV42KRIiTV4uK7sEKyBQOSkkMuLQp8GUUtnvr2NgWIHAVvQW4WDQT--qTmVEHxYhnKgu4XIax47H8kf9k2e1frTrlSJMEdkqQzpht_rkkTTx_OlXxc7Fhmey-RZKsl0l7u7GJVcm2Mm2uw',
    badge: 'Top Streetwear',
    badge_en: 'Top Streetwear',
    badgeBg: '#10b981',
    badgeColor: '#ffffff',
    techHighlight: '240 GSM Organic Boxy',
    techColor: '#38bdf8'
  },
  {
    id: 'slide-4',
    sku: 'ART-ACR-750',
    title: 'Optical Acrylic Street Panel 5mm',
    title_en: 'Optical Acrylic Street Panel 5mm',
    description: 'Curado directo UV con pernos de soporte en aluminio pulido.',
    description_en: 'Direct UV-cured print on acrylic with floating polished aluminum standoff bolts.',
    price: 145.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_ZubFntzytciRBEsbTfmZcLXI8BGsDv91gl1lWuqRGoZN3OGAkmURVOtM2eITRtzTOtqPmetdOgX0-LbForrkzAdRSK21KDRBibMXMFPX0aW3gZoeKE4DMfobmRnLX21Rdt3MPbmlWvUJyDS2noZsvi3GicgKoo-AQKtI2FrZ7rDS2j2OY7l9kpc1K7OOAWkFQqcUn-p6PfIy8CyRupjX8I5TNoSPnDPPsnHEpDn_n56Dc7IubbOnw',
    badge: 'Edición Galería',
    badge_en: 'Gallery Edition',
    badgeBg: '#8b5cf6',
    badgeColor: '#ffffff',
    techHighlight: 'UV 5mm Metacrilato',
    techColor: '#f472b6'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-retro-sunset',
    sku: 'LU-RETRO-001',
    title: 'Retro Sunset Custom Name Tee 240 GSM',
    title_en: 'Retro Sunset Custom Name Tee 240 GSM',
    category: 'moda',
    categoryLabel: 'Apparel · LU-RETRO-001',
    categoryLabel_en: 'Apparel · LU-RETRO-001',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 44.0,
    image: '/assets/aistudio/gpt-image-2_Prompt_5_Personalized_Retro_Name_T-Shirt_A_black_cotton_T-shirt_on_a_female_mode-0__2__837d4efc.jpg',
    description: 'Playera negra de algodón peinado 240 GSM con tipografía retro personalizada y colores cálidos estilo años 70.',
    description_en: 'Heavyweight 240 GSM combed cotton black tee with custom 70s retro sunset typography and warm tones.',
    specs: ['240 GSM Algodón Peinado', 'Estampado DTG Kornit HD', 'Tipografía Retro 70s', 'Rib 1x1 Antideformación'],
    specs_en: ['240 GSM Combed Cotton', 'Kornit HD DTG Print', '70s Retro Typography', 'Anti-Sag 1x1 Ribbed Collar']
  },
  {
    id: 'prod-witty-grey',
    sku: 'LU-WITTY-002',
    title: 'I Knew It Minimalist Marl Tee',
    title_en: 'I Knew It Minimalist Marl Tee',
    category: 'moda',
    categoryLabel: 'Apparel · LU-WITTY-002',
    categoryLabel_en: 'Apparel · LU-WITTY-002',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 39.0,
    image: '/assets/aistudio/gpt-image-2_Prompt_3_Grey_Witty_Typography_T-Shirt_A_grey_marl_cotton-blend_T-shirt_on_a_fem-0__4__upscayl_4x_high-fidelity-4x_00865f2e.png',
    description: 'Camiseta gris jaspeada corte relajado con frase irónica y tipografía condensada de alta definición.',
    description_en: 'Heather grey relaxed fit tee featuring witty minimalist typography in high-definition print.',
    specs: ['Algodón Jaspeado Premium', 'Tacto Ultra Suave', 'Tipografía Editorial Streetwear', 'Pre-lavado Anti-encogimiento'],
    specs_en: ['Premium Heather Marl Cotton', 'Ultra-Soft Touch Finish', 'Editorial Streetwear Typography', 'Pre-Shrunk Treatment']
  },
  {
    id: 'prod-cat-hoodie',
    sku: 'LU-HOOD-003',
    title: 'Detective Cat Squad Heavy Hoodie 420 GSM',
    title_en: 'Detective Cat Squad Heavy Hoodie 420 GSM',
    category: 'moda',
    categoryLabel: 'Apparel · LU-HOOD-003',
    categoryLabel_en: 'Apparel · LU-HOOD-003',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 92.0,
    image: '/assets/aistudio/Dise_o_sin_t_tulo_-_2026-10-13T162436.133_18e9dfb4.png',
    description: 'Sudadera verde oliva militar 420 GSM con ilustración noir serigrafiada en relieve y capucha sin cordones.',
    description_en: '420 GSM military olive green heavyweight fleece hoodie featuring noir feline squad print.',
    specs: ['420 GSM French Terry Pesado', 'Tono Verde Militar Oliva', 'Ilustración Noir Serigrafiada', 'Capucha Doble Estructurada'],
    specs_en: ['420 GSM Heavyweight French Terry', 'Military Olive Green Tone', 'Screenprinted Noir Graphic', 'Double Layer Structured Hood']
  },
  {
    id: 'prod-hard-things',
    sku: 'LU-PEPPER-004',
    title: 'You Can Do Hard Things Oversize Tee',
    title_en: 'You Can Do Hard Things Oversize Tee',
    category: 'moda',
    categoryLabel: 'Apparel · LU-PEPPER-004',
    categoryLabel_en: 'Apparel · LU-PEPPER-004',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 46.0,
    image: '/assets/aistudio/Dise_o_sin_t_tulo_-_2026-10-13T190511.392_eadd7e5e.png',
    description: 'Algodón lavado tono Pepper vintage con arte gráfico multicolor retro y silueta boxy streetwear.',
    description_en: 'Vintage pepper-washed heavyweight boxy cotton tee with vibrant retro playful lettering.',
    specs: ['Algodón Lavado Vintage Pepper', 'Corte Boxy Streetwear', 'Arte Gráfico Multicolor', 'Tintas Base Agua Ecológicas'],
    specs_en: ['Vintage Pepper Washed Cotton', 'Streetwear Boxy Fit', 'Multicolor Retro Artwork', 'Eco Water-Based Pigments']
  },
  {
    id: 'prod-1',
    sku: 'PRN-TEE-014',
    title: 'Heavyweight Organic Boxy Tee',
    title_en: 'Heavyweight Organic Boxy Tee',
    category: 'moda',
    categoryLabel: 'Apparel · PRN-TEE-014',
    categoryLabel_en: 'Apparel · PRN-TEE-014',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 42.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9QJf9kIuLPharQrflmCYrYs2Cu240rljVX8oeefRlMir8_HcLPSwitAZMEVZOS75P-eQawz9U9BnN0ZiXpG6bMRwmlyPjDsLpIPF6kCwApV42KRIiTV4uK7sEKyBQOSkkMuLQp8GUUtnvr2NgWIHAVvQW4WDQT--qTmVEHxYhnKgu4XIax47H8kf9k2e1frTrlSJMEdkqQzpht_rkkTTx_OlXxc7Fhmey-RZKsl0l7u7GJVcm2Mm2uw',
    description: 'Algodón peinado orgánico de 240 GSM con corte boxy fit e impresión DTG Kornit.',
    description_en: '240 GSM organic combed cotton with boxy streetwear fit and Kornit DTG printing.',
    specs: ['240 GSM Algodón Peinado', 'Corte Boxy Oversize', 'Rib 1x1 en cuello', 'Tintas base agua Oeko-Tex'],
    specs_en: ['240 GSM Combed Cotton', 'Boxy Oversize Cut', '1x1 Ribbed Collar', 'Oeko-Tex Water Inks']
  },
  {
    id: 'prod-2',
    sku: 'PRN-HOD-028',
    title: 'Atelier Heavyweight Hoodie 420 GSM',
    title_en: 'Atelier Heavyweight Hoodie 420 GSM',
    category: 'moda',
    categoryLabel: 'Apparel · PRN-HOD-028',
    categoryLabel_en: 'Apparel · PRN-HOD-028',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 88.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA39qYr9tFA2C0ie51gzDkqJUsLyz3RvrycPlIDB6vcCNpsgTP0UyH8qdI-U4d4mrAoOWhqQfc5B1-P_sREKBz7ko9AJfWgLJE7guoI761DTYicAJQE7IqUC5ZDYui4TAVZgJz8FOn3CVVe8BoDE-Rqr-rOQcLFXhfA65X-X9LBJAMs3SaTw_aq-GwvXNBEJ7FmsYqVFPYmi2VOJ6bsiv7NDn8UtkYE91WVTZo-B9T8BGWSw7wRXOeCOA',
    description: 'Sudadera de alto gramaje 420 GSM sin cordones con capucha doble y corte streetwear.',
    description_en: '420 GSM high-density fleece without drawstrings, double-layered hood and relaxed drop silhouette.',
    specs: ['420 GSM French Terry', 'Capucha Doble sin cordón', 'Bolsillo canguro oculto', 'Pre-encogido industrial'],
    specs_en: ['420 GSM French Terry', 'Double-Layered Hood (No Cord)', 'Hidden Kangaroo Pocket', 'Industrial Pre-Shrunk']
  },
  {
    id: 'prod-3',
    sku: 'PRN-CRW-033',
    title: 'Minimalist Studio Crewneck 360 GSM',
    title_en: 'Minimalist Studio Crewneck 360 GSM',
    category: 'moda',
    categoryLabel: 'Apparel · PRN-CRW-033',
    categoryLabel_en: 'Apparel · PRN-CRW-033',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 74.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdWBpq3eFO2P82mLBSVWmh7LRGJl299ZGCYi5FDp-WdaWsUnVCAXObWsPu52RraYDp5ye7OpbY9R8tkQtq1Zy-TlqNS4PLNWeNa0Q1wv4XpthjaTQqDWhvoLoI5d3CWhVKxAg0y2gLBPiJQJO7c_5n_YRQDXOntCikNqkkmCyzw9CorUef4ZvQuEqm2biN_MBEK_GucpOHo-KAP9bhWl0VjF4DD1QbHiT5RBx_zPANO821Aovyz9xs_g',
    description: 'Suéter cuello redondo en felpa perchada premium con caída estructurada.',
    description_en: 'Crewneck sweater in 360 GSM premium brushed fleece with structured modern drape.',
    specs: ['360 GSM Felpa Perchada', 'Hombro Caído Estructurado', 'Costuras Reforzadas 3 Agujas'],
    specs_en: ['360 GSM Brushed Fleece', 'Structured Drop Shoulder', 'Triple-Needle Reinforced Stitches']
  },
  {
    id: 'prod-4',
    sku: 'AUR-ANC-091',
    title: 'Aura Pro Studio Wireless ANC Headphones',
    title_en: 'Aura Pro Studio Wireless ANC Headphones',
    category: 'audio',
    categoryLabel: 'Audio · AUR-ANC-091',
    categoryLabel_en: 'Audio · AUR-ANC-091',
    fulfillment: 'Lienzo Urbano Stock',
    fulfillment_en: 'Lienzo Urbano Stock',
    fulfillmentType: 'stock',
    price: 289.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtd1xTFF9rkPHsYc_lwKIlksiclE4O6pcoKORb_mn5PFXzd8br1S-yaepKbUfGL4kMfMleor4F3GEZCoTbOlYfoEzpr3-fEJ3tTlJfjrB9-XtT00S_YnbFVPHZ2zw-WITmBRIrTpL_neLzFllAw3Ngu0BiPAfODcAB14fqLBgoqNfcuFudZ6cbdqSiQ6DLAvA3o1P4nL-E_xafXAHbrlPFp4nsCi1Yu0xzJzVsLG2s9duLwUi320QgKg',
    description: 'Controladores de neodimio de 45mm con cancelación adaptativa y 40h de batería.',
    description_en: '45mm custom neodymium drivers with adaptive active noise cancellation and 40-hour battery life.',
    specs: ['Drivers Neodimio 45mm', 'Cancelación Activa Adaptativa', 'Bluetooth 5.3 + Codec LDAC', '40 Horas de Autonomía'],
    specs_en: ['45mm Neodymium Drivers', 'Adaptive Active Noise Cancelling', 'Bluetooth 5.3 + LDAC Codec', '40h Battery Life']
  },
  {
    id: 'prod-5',
    sku: 'LEA-MSG-412',
    title: 'Tuscan Cognac Vegetable Leather Messenger',
    title_en: 'Tuscan Cognac Vegetable Leather Messenger',
    category: 'cuero',
    categoryLabel: 'Leather · LEA-MSG-412',
    categoryLabel_en: 'Leather · LEA-MSG-412',
    fulfillment: 'Lienzo Urbano Stock',
    fulfillment_en: 'Lienzo Urbano Stock',
    fulfillmentType: 'stock',
    price: 340.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8oO3BRPYbACM_pZr3Ktt6qVugkQ9IlnjEUbKkmqBhORHDpnbk2_-d_P3w1-TL7nr4szHxslYskbuMQvlPj_jqWliXhRXsrcnxAQWvTtCvvBmUQwOTjpDW53m__wH9NvJJ6zs-RB5CIGD9JLtOYsA60e9BcbHcFwyR1khiE3B18BSEnrbrA51DBPVUHGrgshYp0RKzjgyOxpUGLpGtUHO15k_ntDL66o1QuvElNfXI_ucHBPP_iIxVVg',
    description: 'Piel curtida vegetal italiana de flor entera con herrajes de latón envejecido.',
    description_en: 'Full-grain Italian vegetable-tanned leather messenger bag with antique solid brass hardware.',
    specs: ['Piel Curtida Vegetal Toscana', 'Herrajes Latón Envejecido', 'Funda acolchada Laptop 15"', 'Garantía 10 Años'],
    specs_en: ['Tuscan Vegetable Leather', 'Aged Solid Brass Hardware', '15" Padded Laptop Sleeve', '10-Year Warranty']
  },
  {
    id: 'prod-6',
    sku: 'LEA-WAL-502',
    title: 'Nomad Minimalist Leather Cardholder',
    title_en: 'Nomad Minimalist Leather Cardholder',
    category: 'cuero',
    categoryLabel: 'Leather · LEA-WAL-502',
    categoryLabel_en: 'Leather · LEA-WAL-502',
    fulfillment: 'Lienzo Urbano Stock',
    fulfillment_en: 'Lienzo Urbano Stock',
    fulfillmentType: 'stock',
    price: 55.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY2HyZzLgPKMxc6S1_jGULCwU_Rpc6hq2L33Msg7f-2Dr11SsTdNp5_mOjmWmEh11GvYLOBGZvRvC_WQCN3ogZElyO7c-dKH3MyPG_z-K2Oe8zvQtPQ9kG0PcwiaTClYc7sF3-jQzSTcBHDgt3tWdD5rpacTQrVfWSaE4kb1Dra9K8--Stb13prnwkudxdGvKaQdi6G6E7LiKzY0QEIiekHM8qDTnC3RgCJrbZT1X8NGeMn0fdhVGx0A',
    description: 'Billetera compacta de piel italiana cosida a mano con protección RFID.',
    description_en: 'Compact handmade Italian leather cardholder wallet with integrated RFID protection.',
    specs: ['Piel Flor Entera 1.2mm', 'Costura a Mano Encerada', 'Capacidad 6 tarjetas + billetes', 'Protección RFID'],
    specs_en: ['1.2mm Full-Grain Leather', 'Hand-Waxed Stitching', 'Holds 6 Cards + Cash', 'RFID Shielding']
  },
  {
    id: 'prod-7',
    sku: 'CER-KAN-108',
    title: 'Kanso Sculpted Stoneware Vessel',
    title_en: 'Kanso Sculpted Stoneware Vessel',
    category: 'ceramica',
    categoryLabel: 'Homeware · CER-KAN-108',
    categoryLabel_en: 'Homeware · CER-KAN-108',
    fulfillment: 'Lienzo Urbano Stock',
    fulfillment_en: 'Lienzo Urbano Stock',
    fulfillmentType: 'stock',
    price: 95.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpGiQfqdghfTEnK1AI2KAL6_O4nrBYWQ5EqIaOdiJRrpu6TfyrRJuOzeWZI0rxIYdYS6NzNlLTjTDhWMvjDUuskI1Sdg7m5_jWMH8IOyxGxpTa5J4dpBrq3fnKznj8cGxt5rruOREBCh-KaJyT6SALHBuC8S0xmpSpt4CwQP6iILgoE-QqNos9s5QKotJNkgm0LjH9lQWX-5QPANKRXzhzHhNV4Hf_WpBfMNuPYKTUXH55Aj2jEiqPRw',
    description: 'Jarrón de gres torneado a mano con textura mate cruda mineral y silueta escultural.',
    description_en: 'Hand-thrown stoneware vessel with raw mineral matte texture and sculptural silhouette.',
    specs: ['Gres Refractario Alta Temperatura', 'Esmalte Mineral Crudo', 'Pieza Única Numerada', 'Impermeable Interior'],
    specs_en: ['High-Fire Refractory Stoneware', 'Raw Mineral Glaze', 'Unique Numbered Piece', 'Waterproof Glazed Interior']
  },
  {
    id: 'prod-8',
    sku: 'PRN-MUG-003',
    title: 'Matte Ceramic Signature Mug 15oz',
    title_en: 'Matte Ceramic Signature Mug 15oz',
    category: 'ceramica',
    categoryLabel: 'Merchandise · PRN-MUG-003',
    categoryLabel_en: 'Merchandise · PRN-MUG-003',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 24.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv7zRRGYDLgeRU3h8Co7B-2GALHPIuIzmX6kD2Kc6c_hVZMXh-f1qq-VbGVW-K221DGCaCkIbVvU5f327KsXg_EvSN8ntMTRezRihoZGXTLZGNwTm8bvivSdjb7z-0OuectZ2T7X29EZ7mdKlcjJXoPEJOvsvOh8Hn3nYWm-6cfQEv2LbEOo-W09Imlnn_Ipzk2khpsuRi_cbdVnENoKzDtNM1d2zCRbXaxtxqgdM3mU-IDLgYZedjsg',
    description: 'Taza de cerámica esmaltada de 15oz, sublimación bajo demanda Printful.',
    description_en: '15oz matte glazed ceramic mug with durable full-color Printful sublimation.',
    specs: ['Capacidad 15 oz (440 ml)', 'Cerámica Blanca Brillante/Mate', 'Apta para Microondas y Lavavajillas', 'Sublimación 360°'],
    specs_en: ['15 oz (440ml) Capacity', 'Gloss/Matte Ceramic Finish', 'Microwave & Dishwasher Safe', '360° Wrap Sublimation']
  },
  {
    id: 'prod-9',
    sku: 'STU-PEN-883',
    title: 'Machined Solid Brass Precision Pen',
    title_en: 'Machined Solid Brass Precision Pen',
    category: 'arte',
    categoryLabel: 'Studio · STU-PEN-883',
    categoryLabel_en: 'Studio · STU-PEN-883',
    fulfillment: 'Lienzo Urbano Stock',
    fulfillment_en: 'Lienzo Urbano Stock',
    fulfillmentType: 'stock',
    price: 78.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3G3G__Pyx2h8PKRkSn21kR0khhiyIoV691YzuPT1OQuz6FYvq65UIwHLIPmARGCKoa6mgtvBEjOFVcnaMGJbuO6bReAdRmprG79dCDPS-XvLeM2MiTA4FEXlVvkZxSNxFLdmqFQT2Nn_yJl-Wodm6edB3wuvtQxAEFW0NkEeVXyt1PE7W8wFgXKim64KtgLK55WZ1BXnGYRKD5HAQwMWXn42T1cJ-rwm9ned4lpL5esXbntdXEF99sw',
    description: 'Bolígrafo mecanizado en bloque de latón macizo con recambio cerámico Schmidt.',
    description_en: 'CNC-machined solid brass ballpoint pen featuring Schmidt ceramic rollerball refill.',
    specs: ['Bloque Latón Macizo C360', 'Mecanizado CNC Micrométrico', 'Recambio Schmidt Rollerball', 'Pátina Natural Viva'],
    specs_en: ['Solid C360 Brass Block', 'Micrometric CNC Machined', 'Schmidt Ceramic Refill', 'Living Natural Patina']
  },
  {
    id: 'prod-10',
    sku: 'PRN-CAN-120',
    title: 'Gallery Fine-Art Stretched Canvas',
    title_en: 'Gallery Fine-Art Stretched Canvas',
    category: 'arte',
    categoryLabel: 'Canvas · PRN-CAN-120',
    categoryLabel_en: 'Canvas · PRN-CAN-120',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 110.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXta2oMyNld7FWOtb2Bc_yLRDHcIlJgo1TJbCRUKh24xINC0Xwv3BTwa6KOBv9ny8vxNdrE-XYCgtb8pZiN_kog0HAGfYGEZIa7on30E1GQi1b-gVBEWe2PzNnnSsSa8tpgbS2fMBjIhOwxo6MygyV-h3QVUMPAfxUh5l-3pjP_t3KVEsqXWai_8uCjIObk1lDFErNL7jv0a-0lUBlcOTrWQuLdeCyVJJUQ1T6MZK7cPiA7TRUrBsqNA',
    description: 'Impresión Giclée fine-art sobre algodón de 380 GSM montado sobre bastidor FSC.',
    description_en: '380 GSM cotton canvas museum-grade Giclée print stretched on 1.5" FSC pine bars.',
    specs: ['Lienzo 380 GSM Algodón', 'Bastidor Pino FSC 1.5"', 'Tintas Pigmentadas Epson Ultrachrome', 'Colgador premontado'],
    specs_en: ['380 GSM Cotton Canvas', '1.5" FSC Pine Stretcher Bars', 'Epson Ultrachrome Pigment Inks', 'Pre-installed Hanging Hardware']
  },
  {
    id: 'prod-11',
    sku: 'PRN-POS-044',
    title: 'Archival Matte Street Poster 18x24',
    title_en: 'Archival Matte Street Poster 18x24',
    category: 'arte',
    categoryLabel: 'Wall Art · PRN-POS-044',
    categoryLabel_en: 'Wall Art · PRN-POS-044',
    fulfillment: 'Printful Fulfilled',
    fulfillment_en: 'Printful Fulfilled',
    fulfillmentType: 'printful',
    price: 32.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyVXPXifGik0AwWAWLgq9eaR0Kix5IuikY5sRoOfzGpvw8X9Vz685qL-yPOxLpiSZLs7OUPa7b6qaLPv2ukEjxiSdL_NHyQ5zNopRQhXXV2nd5aHroCZ3ejWj6XnUU2KHUTpxal3VcqnzLfTueN8KBFXLjogubgl0nJL1eN8sIMd-jgmrZh5GkNilNnTqx1nm5SYBCJyEEDCugN8xHH3JF5MuyVm8pEYcN3YmaSCLmZyLUzDeSN_r7Lg',
    description: 'Papel de museo 250 GSM con acabado mate antirreflejo y pigmentación duradera.',
    description_en: 'Museum-grade 250 GSM archival paper with anti-reflective matte finish and vibrant pigment.',
    specs: ['Papel Museo 250 GSM', 'Acabado Mate Antirreflejo', 'Resistencia UV 100+ Años', 'Tubo protector de envío rígido'],
    specs_en: ['250 GSM Museum Paper', 'Anti-Glare Matte Finish', '100+ Years UV Resistance', 'Shipped in Heavy Duty Tube']
  },
  {
    id: 'prod-12',
    sku: 'ART-ACR-750',
    title: 'Optical Acrylic Street Panel 5mm',
    title_en: 'Optical Acrylic Street Panel 5mm',
    category: 'arte',
    categoryLabel: 'Exhibition · ART-ACR-750',
    categoryLabel_en: 'Exhibition · ART-ACR-750',
    fulfillment: 'Lienzo Urbano Stock',
    fulfillment_en: 'Lienzo Urbano Stock',
    fulfillmentType: 'stock',
    price: 145.0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK_ZubFntzytciRBEsbTfmZcLXI8BGsDv91gl1lWuqRGoZN3OGAkmURVOtM2eITRtzTOtqPmetdOgX0-LbForrkzAdRSK21KDRBibMXMFPX0aW3gZoeKE4DMfobmRnLX21Rdt3MPbmlWvUJyDS2noZsvi3GicgKoo-AQKtI2FrZ7rDS2j2OY7l9kpc1K7OOAWkFQqcUn-p6PfIy8CyRupjX8I5TNoSPnDPPsnHEpDn_n56Dc7IubbOnw',
    description: 'Impresión UV directa sobre metacrilato con pernos de aluminio pulido.',
    description_en: 'Direct UV print on 5mm optical grade acrylic with brushed standoff wall bolts.',
    specs: ['Metacrilato Óptico 5mm', 'Curado UV de Alta Saturación', 'Pernos Inox Separadores', 'Bordes Pulidos Diamante'],
    specs_en: ['5mm Optical Acrylic', 'High-Saturation UV Curing', 'Stainless Steel Standoffs', 'Diamond Polished Edges']
  }
];

export const MATRIX_ITEMS: MatrixItem[] = [
  // Línea 1
  {
    id: 'mat-1',
    number: '01',
    line: 1,
    lineTitle: 'Línea 1: Prendas Base & Fits',
    lineTitle_en: 'Line 1: Blank Garments & Fits',
    tag: '01 · Apparel Drop',
    tagBg: '#fef3c7',
    tagColor: '#92400e',
    title: 'Boxy Fit Heavyweight Tees',
    title_en: 'Boxy Fit Heavyweight Tees',
    description: 'Algodón peinado 240 GSM, corte oversize, hombro caído y silueta estructurada.',
    description_en: '240 GSM combed cotton, drop-shoulder oversize boxy silhouette with structured fit.',
    spec: '240 GSM · 100% Algodón · Boxy Fit',
    benefit: 'DTG Kornit HD',
    benefit_en: 'Kornit HD DTG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9QJf9kIuLPharQrflmCYrYs2Cu240rljVX8oeefRlMir8_HcLPSwitAZMEVZOS75P-eQawz9U9BnN0ZiXpG6bMRwmlyPjDsLpIPF6kCwApV42KRIiTV4uK7sEKyBQOSkkMuLQp8GUUtnvr2NgWIHAVvQW4WDQT--qTmVEHxYhnKgu4XIax47H8kf9k2e1frTrlSJMEdkqQzpht_rkkTTx_OlXxc7Fhmey-RZKsl0l7u7GJVcm2Mm2uw'
  },
  {
    id: 'mat-2',
    number: '02',
    line: 1,
    lineTitle: 'Línea 1: Prendas Base & Fits',
    lineTitle_en: 'Line 1: Blank Garments & Fits',
    tag: '02 · Apparel Drop',
    tagBg: '#fef3c7',
    tagColor: '#92400e',
    title: 'Streetwear French Terry Hoodies',
    title_en: 'Streetwear French Terry Hoodies',
    description: '420 GSM felpa pesada francesa, capucha doble capa y corte limpio sin cordón.',
    description_en: '420 GSM French Terry heavy fleece, double-layer hood and clean cord-free aesthetic.',
    spec: '420 GSM · French Terry · No-Drawstring',
    benefit: 'Printful DTG & Puff',
    benefit_en: 'Printful DTG & Puff',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA39qYr9tFA2C0ie51gzDkqJUsLyz3RvrycPlIDB6vcCNpsgTP0UyH8qdI-U4d4mrAoOWhqQfc5B1-P_sREKBz7ko9AJfWgLJE7guoI761DTYicAJQE7IqUC5ZDYui4TAVZgJz8FOn3CVVe8BoDE-Rqr-rOQcLFXhfA65X-X9LBJAMs3SaTw_aq-GwvXNBEJ7FmsYqVFPYmi2VOJ6bsiv7NDn8UtkYE91WVTZo-B9T8BGWSw7wRXOeCOA'
  },
  {
    id: 'mat-3',
    number: '03',
    line: 1,
    lineTitle: 'Línea 1: Prendas Base & Fits',
    lineTitle_en: 'Line 1: Blank Garments & Fits',
    tag: '03 · Apparel Drop',
    tagBg: '#fef3c7',
    tagColor: '#92400e',
    title: 'Crewneck Sweats & Drop-Shoulder',
    title_en: 'Crewneck Sweats & Drop-Shoulder',
    description: 'Algodón perchado 360 GSM, hombro caído con suavidad superior y cuerpo firme.',
    description_en: '360 GSM brushed fleece, drop shoulder with premium softness and shape retention.',
    spec: '360 GSM · Brushed Fleece',
    benefit: 'Bordado / DTG',
    benefit_en: 'Embroidery / DTG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdWBpq3eFO2P82mLBSVWmh7LRGJl299ZGCYi5FDp-WdaWsUnVCAXObWsPu52RraYDp5ye7OpbY9R8tkQtq1Zy-TlqNS4PLNWeNa0Q1wv4XpthjaTQqDWhvoLoI5d3CWhVKxAg0y2gLBPiJQJO7c_5n_YRQDXOntCikNqkkmCyzw9CorUef4ZvQuEqm2biN_MBEK_GucpOHo-KAP9bhWl0VjF4DD1QbHiT5RBx_zPANO821Aovyz9xs_g'
  },
  // Línea 2
  {
    id: 'mat-4',
    number: '04',
    line: 2,
    lineTitle: 'Línea 2: Técnicas de Estampado & Acabados',
    lineTitle_en: 'Line 2: Printing Techniques & Finishes',
    tag: '04 · Tech',
    tagBg: '#e0f2fe',
    tagColor: '#0369a1',
    title: 'Impresión DTG Ultra-HD',
    title_en: 'Ultra-HD DTG Direct Printing',
    description: 'Inyección directa con tintas Kornit base agua, tacto suave y durabilidad en lavados.',
    description_en: 'Direct-to-garment using water-based Kornit inks, soft touch and high wash durability.',
    spec: '1200 DPI · Eco Water Inks · Soft Touch',
    benefit: 'Automatizado Printful',
    benefit_en: 'Automated Printful',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOB7Qts9DuIn4KlBYYbcLzHhZFLfMJRKXVys69ZcxTO5_0-pFws1sQK2eoWEuekaUm3l5EiIVvmL7157XUoZk3NeT1Qh29jVPw6jyNevbL9iOxGvHvdq08K8F7JQdhYoX-KX4Vfd52HJLKN0McmRP4bTTJ74CkUbWezAX7S7Z9F1Tmuq82lMESNn2NEzRCPFXgnlfgo4QZRERqKql2IkQvDUvm8pxErQ8fhn9noRHM'
  },
  {
    id: 'mat-5',
    number: '05',
    line: 2,
    lineTitle: 'Línea 2: Técnicas de Estampado & Acabados',
    lineTitle_en: 'Line 2: Printing Techniques & Finishes',
    tag: '05 · Tech',
    tagBg: '#e0f2fe',
    tagColor: '#0369a1',
    title: 'Bordado Táctil 3D & Densidad Alta',
    title_en: '3D Tactile Puff Embroidery',
    description: 'Bordado en relieve con espuma EVA para tipografías y parches streetwear.',
    description_en: 'Raised 3D embroidery with high-density EVA foam for typography and chest logos.',
    spec: '3D Foam · Madeira Polyneon',
    benefit: 'Acabado Tridimensional',
    benefit_en: '3D Dimensional Finish',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mVBz2WIClo_-si2X7D_JN4k5BNc5KgdJqwtpng4OvROMWQc10b4_aEH6ovIoBEFWFyCgxwuM-vZ4nEH7s50cDH25VQvYVamJMDh5N7xxo7wUEUciFfqrrfzzCJoddfxVelAce6xTyj2EYTL4LqpMbl8RaKewAJ-NepHSctJm--owbCI4JUAkoK8slDYSUg7rZHR6dBHuwynCAxGsjBMWQ2cLYobw_oQUDwUxxm0f'
  },
  {
    id: 'mat-6',
    number: '06',
    line: 2,
    lineTitle: 'Línea 2: Técnicas de Estampado & Acabados',
    lineTitle_en: 'Line 2: Printing Techniques & Finishes',
    tag: '06 · Tech',
    tagBg: '#e0f2fe',
    tagColor: '#0369a1',
    title: 'Serigrafía Puff & Tintas Especiales',
    title_en: 'Puff Screen Printing & Special Inks',
    description: 'Relieve vulcanizado térmico retro de los 90s con tacto expandido esponjoso.',
    description_en: '90s thermal expandable foam ink with soft tactile puff texture on cotton fleece.',
    spec: 'Thermal Puff · Retro 90s Street Vibe',
    benefit: 'Atelier Especial',
    benefit_en: 'Special Atelier Technique',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9QJf9kIuLPharQrflmCYrYs2Cu240rljVX8oeefRlMir8_HcLPSwitAZMEVZOS75P-eQawz9U9BnN0ZiXpG6bMRwmlyPjDsLpIPF6kCwApV42KRIiTV4uK7sEKyBQOSkkMuLQp8GUUtnvr2NgWIHAVvQW4WDQT--qTmVEHxYhnKgu4XIax47H8kf9k2e1frTrlSJMEdkqQzpht_rkkTTx_OlXxc7Fhmey-RZKsl0l7u7GJVcm2Mm2uw'
  },
  // Línea 3
  {
    id: 'mat-7',
    number: '07',
    line: 3,
    lineTitle: 'Línea 3: Lienzos de Arte & Decoración Urbana',
    lineTitle_en: 'Line 3: Art Canvases & Urban Decor',
    tag: '07 · Arte',
    tagBg: '#ede9fe',
    tagColor: '#5b21b6',
    title: 'Lienzo Canvas Montado en Bastidor',
    title_en: 'Pine Frame Mounted Canvas',
    description: 'Giclée sobre algodón 380 GSM con bastidor de pino macizo certificado FSC.',
    description_en: 'Fine-art Giclée on 380 GSM cotton canvas over 1.5" solid FSC pine frame.',
    spec: '380 GSM · Pino FSC 1.5"',
    benefit: 'Calidad Museo',
    benefit_en: 'Museum Grade',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1Xbhxrz7S0w4Cy49UoARfXgs887Rr0WPiiHWUjE8ZADzDfJ6OKenGySmZkeGNtw6Np7_5x5iKK3gWBy_THN0tOT8YVzAKo9ckhWWK2gCkuNPGos8ZWG50nBfYuvOkFRdp9cGxIhEy7K_-VmrkvwNQpQ913EL52j21qV2MwgamxvnVSh7lfwa2eTUX2w62J32moB7-W_tocexsD-SJ73aeAgn0celnhK-t2WTFjeGPBfv7lO1nJP7WvEAwg'
  },
  {
    id: 'mat-8',
    number: '08',
    line: 3,
    lineTitle: 'Línea 3: Lienzos de Arte & Decoración Urbana',
    lineTitle_en: 'Line 3: Art Canvases & Urban Decor',
    tag: '08 · Arte',
    tagBg: '#ede9fe',
    tagColor: '#5b21b6',
    title: 'Pósters Matte de Alta Resolución',
    title_en: 'High-Resolution Matte Posters',
    description: 'Papel artístico de 250 GSM con negros profundos y cero reflejos.',
    description_en: '250 GSM heavy archival paper with ultra-deep blacks and anti-glare finish.',
    spec: '250 GSM Matte · UV Fade Resistant',
    benefit: 'Printful Webhook POD',
    benefit_en: 'Printful Webhook POD',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WDwjficJYqVt21s6YxEd2jw1BXlRqBDN9jkfTxJurIqs7vci0sn4W9UFjq8nCvWH91aivC4dmL9TZGXQZ7pa76OKLLQVifPbyJw7Lze1ifintJSTp7zQeGX65YZx780caecOI57ByqB6ZHsA70QtiihwnDEBg7CnnMnDGsYVOVo1l_bkqTbuno9f16OTzqsgX7E2c-XXF02u6rtDZ3XZv4EYwbxkerahUMs3mSM_1SeWyKSDcet-6fbJY'
  },
  {
    id: 'mat-9',
    number: '09',
    line: 3,
    lineTitle: 'Línea 3: Lienzos de Arte & Decoración Urbana',
    lineTitle_en: 'Line 3: Art Canvases & Urban Decor',
    tag: '09 · Arte',
    tagBg: '#ede9fe',
    tagColor: '#5b21b6',
    title: 'Acrílico Transparente & Placas Metálicas',
    title_en: 'Clear Acrylic & Metal Panels',
    description: 'Impresión UV curada directa sobre metacrilato óptico de 5mm con pernos flotantes.',
    description_en: 'Direct UV-curable print on 5mm optical acrylic with floating stainless steel wall studs.',
    spec: '5mm Acrylic · Pernos Inox Flotantes',
    benefit: 'Grado Galería',
    benefit_en: 'Gallery Grade',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1U3x-adfqEYi74iez6GNDWCLx4rt65TjhlBW_YQRaH8xb3FfSiTKYyF8Gnuvq13YNqfVeqn_6vp9fwPRbE3fZLLDC39WXur1RAiwrFUnMWUpB7orqGXjuPwgr7QNHvzbCsH0pZ9qsQrBbbX4yK5knZ6TdNiEAp_Hw4k_cSvrHthQH-kX4djPl1gU2IXsrvZDFOb4CqyZAqGTvhQIkOQx1TeVHw13fj6LI-yvMkW6xmwJBLhO2DOufYdJ2OC'
  },
  // Línea 4
  {
    id: 'mat-10',
    number: '10',
    line: 4,
    lineTitle: 'Línea 4: Servicios para Creadores & Marcas',
    lineTitle_en: 'Line 4: Creator & Brand Services',
    tag: '10 · Branding',
    tagBg: '#dcfce7',
    tagColor: '#166534',
    title: 'Etiquetado Personalizado & Cuello',
    title_en: 'Custom Neck Labels & Branding',
    description: 'Woven labels tejidas, estampados interiores en cuello y packaging de marca propia.',
    description_en: 'Woven labels, printed inside neck tags, and fully custom brand packaging.',
    spec: 'White-Label · Woven Labels',
    benefit: '100% Tu Marca',
    benefit_en: '100% Your Brand',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WUAskrIqb9D5vk0HTvsQlVUEw7MkhXanVaGbDMEwarK1teDT_abM9rnDKDg1X5kuEvsF8QbWRS_S_cgPpa6A1Plmztgjr9botB9vLqXSCD-3nnm12a-YN8tU0-kR8W15N3t9sFMnE-ratRrzgHUNqtdVXbYtr4RMZx64Bdt6N1eJBoABTtMXvW5LtrqzxS0P2Kwq8P2I6NRn7YWgG2u5Mb8mBSJs6CUPIq-BJoF8Z9uneZNL0D27dfdF0'
  },
  {
    id: 'mat-11',
    number: '11',
    line: 4,
    lineTitle: 'Línea 4: Servicios para Creadores & Marcas',
    lineTitle_en: 'Line 4: Creator & Brand Services',
    tag: '11 · 3D Lab',
    tagBg: '#dcfce7',
    tagColor: '#166534',
    title: 'Mockups & Renders 3D en 24 Horas',
    title_en: '3D Mockups & 4K Renders in 24h',
    description: 'Renders 4K fotorrealistas de tus prendas y drops antes de imprimir una sola pieza.',
    description_en: '4K photorealistic streetwear 3D renders before running a single piece.',
    spec: '4K Renders · Maniquí Streetwear · 24h',
    benefit: 'Validación Cero Riesgo',
    benefit_en: 'Zero Risk Validation',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1VcTK5mWtx_YMD3R3x1OzVv1KS1gbaHHPfMi8P4qnt5_Nh_i9NUYt3hkIYHGEPIG7b3LUVW8ZpmGJOy4kwGvepNAYLrsmkyYLc8jYoZ8XUodSa13j9uNfEyhiD3rEqvygVcKCu9_AibdUGgUNBPJJKkZ6fu2gzYDvEZ2nNvon5GrpwH7WtllCJhR2rpb2jrIfKt3YaarmE4PFDqOJnRfZ9rQmxNDueBeL3e0teXneQb_zWVyZSseNcXWzlY'
  },
  {
    id: 'mat-12',
    number: '12',
    line: 4,
    lineTitle: 'Línea 4: Servicios para Creadores & Marcas',
    lineTitle_en: 'Line 4: Creator & Brand Services',
    tag: '12 · Automatización',
    tagBg: '#dcfce7',
    tagColor: '#166534',
    title: 'Integración Dropshipping & Printful Direct',
    title_en: 'Dropshipping & Direct Printful Sync',
    description: 'Despacho automatizado a clientes con sincronización de inventario y tracking real.',
    description_en: 'Automated order routing to end clients with real-time stock and carrier tracking sync.',
    spec: 'REST API · Auto Routing · Zero Stock',
    benefit: 'Cloud Escalable',
    benefit_en: 'Scalable Cloud POD',
    image: 'https://lh3.googleusercontent.com/aida/AEtjO1WfWLRIBsh5WgkiAMLzMY9S1VzWZbMsMYjW9UjFX-b8eablNvf1ya6eQTrig1NJDdoies6asHnkQNBj2XIz3PlwD1a-1EfFpIMIpZGBLbRjB9UvXTVKCpXW7FsN-0Lr7xK9n1f6guX1zlFczDoJjLmsCO0jLInbc5WFq78zZxF-qbrXClWPgGAJKLPtfEsfeCJf_ugqlWDt9_lrqU1PPmvwZ9fxD08pcMHjyxQ574I255vC0j1jdV4PyWP6'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mateo Silva',
    role: 'Fundador · Brand Underground (CDMX)',
    role_en: 'Founder · Brand Underground (Mexico City)',
    quote: '«La calidad de las playeras pesadas de 240 GSM y la nitidez de la impresión DTG superaron nuestras expectativas. Nuestros drops se agotaron en 48 horas y la sincronización con Printful automatizó todo el envío.»',
    quote_en: '«The quality of the 240 GSM heavy boxy tees and sharpness of the DTG print exceeded our expectations. Our drops sold out in 48 hours and Printful sync automated fulfillment seamlessly.»',
    avatar: 'https://lh3.googleusercontent.com/aida/AEtjO1V3N3SAzcvTrnDGIQ2-P3Zp_aksd0qwMgtPkqpTntOh-MjZX533ZGggjZU9Qj3g5zsqTjAIAMVNdrRR2ZCNYd4zvZ3fl6NtZF_wa2zvgHP-BHkR1a408ghAJsONBheVYMEORSacysGObjBL5IvjIsIDKDstlEbgUmRdOY6NNDibKUeSvgMmBTdJjHicp_KP2av8YxMeJveNXvntnDLxdtbp0ldk2mJodEn6HAjG-6qJHjCEAYCs3qurI4Kk',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sofía Valenzuela',
    role: 'Artista Visual & Ilustradora (Guadalajara)',
    role_en: 'Visual Artist & Illustrator (Guadalajara)',
    quote: '«Los lienzos montados en bastidor de pino y la impresión fine-art Giclée tienen una fidelidad de color idéntica a mis archivos digitales. Mis clientes quedaron fascinados con los acabados.»',
    quote_en: '«The pine frame mounted canvases and Giclée fine-art print have exact color fidelity to my digital files. My clients were completely stunned by the finishes.»',
    avatar: 'https://lh3.googleusercontent.com/aida/AEtjO1VaAV3fj6eVZESX_pxJ8EY6tHTuAY1vjzR4ZK8qDCeAdbf3zRf4Edo0CDe1cZ78fJEcu8bpXIZo5ET6stNlCWpMl31RJ0DHnj323MmSLgS4Gef-yXVOlGEYwbR7iTNFF-ihcX68wh7B8mlQsbh1pTRo1XE2Q9r5UqeOrkjTKxlIcnWsky81uHUQ7ikxrAYPjy-jW37NPU30-hSMGBaNsFtmL7JYXFCbKgCvT53qsgat8cUzwvBNkU-xpdSt',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Carlos Mendoza',
    role: 'Director Creativo · Estudio Kanso (Monterrey)',
    role_en: 'Creative Director · Estudio Kanso (Monterrey)',
    quote: '«Poder ordenar muestras rápidas y contactar directamente por WhatsApp (+52 55 2543 3766) agilizó el lanzamiento de nuestra colección cápsula. El soporte técnico y la entrega puntual son de diez.»',
    quote_en: '«Ordering quick samples and contacting directly via WhatsApp (+52 55 2543 3766) accelerated our capsule collection launch. Technical support and timely delivery are top-notch.»',
    avatar: 'https://lh3.googleusercontent.com/aida/AEtjO1WmMB51YxDfo-Y9J2x8cUt5rOfbbw9HrxAvVujMEIKKZqpoOJZeYcPjI_cH_zzCH3LmqfKNbG6jeHd0JrHRVe1jM2ykx7CG6mUkLlKAk_B9OJ3dvrLFOUEFvZnuB7ZmBofvkeok5G4A6yN5xTz8qbiZ7uGKuwFdOiC2fj3vwPj6Xd_zjbUcjj0TCgqutU3Au7CKH2Ir-N0EtQXAug2xcFzEM2ciuqDVIcEdoGYPAP73ZyLWbhGk6BGj-Xk',
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '1. ¿Cuál es el tiempo de producción y despacho para pedidos personalizados y drops bajo demanda?',
    question_en: '1. What is the production and fulfillment turnaround for on-demand drops and custom orders?',
    answer: 'Los pedidos bajo demanda procesados mediante Printful tienen un tiempo de producción promedio de 2 a 4 días hábiles, más 3 a 5 días de envío asegurado con guía de rastreo en tiempo real (FedEx/DHL). Para producciones custom en lote, coordinamos el calendario directamente vía WhatsApp.',
    answer_en: 'On-demand orders fulfilled through Printful take an average of 2 to 4 business days for production, plus 3 to 5 business days for insured express shipping with live tracking (FedEx/DHL). For custom bulk productions, we schedule the timeline directly via WhatsApp.'
  },
  {
    id: 'faq-2',
    question: '2. ¿Puedo pedir una sola muestra antes de lanzar una colección completa?',
    question_en: '2. Can I order a single sample before launching a full streetwear collection?',
    answer: 'Sí, gracias a nuestra infraestructura de impresión bajo demanda (Print-on-Demand) puedes ordenar desde una sola pieza sin mínimos requeridos para validar gramaje, tacto del estampado y tallaje exacto.',
    answer_en: 'Yes! Thanks to our Print-on-Demand infrastructure, you can order starting from just one piece with no minimum order quantity (MOQ) to test fabric weight, print touch, and fit accuracy.'
  },
  {
    id: 'faq-3',
    question: '3. ¿Cómo deben estar configurados mis archivos de diseño para obtener la máxima calidad?',
    question_en: '3. How should artwork files be configured for optimal printing quality?',
    answer: 'Recomendamos enviar archivos en formato PNG con fondo transparente, resolución mínima de 300 DPI a tamaño real de impresión, y espacio de color sRGB o CMYK optimizado. Nuestro equipo también realiza una previsualización de control de calidad.',
    answer_en: 'We recommend sending high-resolution PNG files with transparent backgrounds, at least 300 DPI at true print dimensions, in sRGB or calibrated CMYK. Our atelier team also performs a pre-print quality assurance check.'
  },
  {
    id: 'faq-4',
    question: '4. ¿Qué métodos de pago y facturación aceptan en lienzourbano.shop?',
    question_en: '4. What payment and invoicing options do you accept on lienzourbano.shop?',
    answer: 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, AMEX), PayPal, transferencias bancarias y pagos en efectivo locales a través de la pasarela segura integrada en WooCommerce. Emitimos factura fiscal si la requieres.',
    answer_en: 'We accept credit/debit cards (Visa, Mastercard, AMEX), PayPal, bank transfers, and local payment methods through our secure WooCommerce gateway. We provide tax invoices upon request.'
  },
  {
    id: 'faq-5',
    question: '5. ¿Cómo puedo solicitar una cotización especial o atención personalizada?',
    question_en: '5. How can I request a special quote or custom support?',
    answer: 'Puedes comunicarte inmediatamente con nuestro equipo de atención directa a través de WhatsApp al +52 55 2543 3766 o desde el botón flotante en la tienda para asesorarte con muestras, técnicas especiales (Puff, 3D) o integración con tu tienda.',
    answer_en: 'You can reach our atelier team directly via WhatsApp at +52 55 2543 3766 or through the floating action button to get tailored advice on fabric samples, special techniques (Puff, 3D embroidery), or store integrations.'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'art-1',
    slug: 'guia-gramajes-streetwear-240-420-gsm',
    title: 'Guía Definitiva de Gramajes en Streetwear: 240 GSM vs 420 GSM',
    title_en: 'Ultimate Streetwear Fabric Weight Guide: 240 GSM vs 420 GSM',
    excerpt: '¿Por qué el gramaje define el streetwear auténtico? Descubre cómo el algodón orgánico peinado de 240 GSM genera camisetas estructuradas que no pierden forma, y cómo la felpa French Terry de 420 GSM otorga a las sudaderas su caída icónica y resistencia por años.',
    excerpt_en: 'Why does weight define true streetwear? Learn how 240 GSM combed organic cotton creates structured boxy tees that do not sag, while 420 GSM French Terry gives hoodies their iconic draping and lifetime durability without fading.',
    tag: 'Textil & Calidad',
    readTime: '5 min lectura · SEO Guide',
    readTime_en: '5 min read · SEO Guide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mVBz2WIClo_-si2X7D_JN4k5BNc5KgdJqwtpng4OvROMWQc10b4_aEH6ovIoBEFWFyCgxwuM-vZ4nEH7s50cDH25VQvYVamJMDh5N7xxo7wUEUciFfqrrfzzCJoddfxVelAce6xTyj2EYTL4LqpMbl8RaKewAJ-NepHSctJm--owbCI4JUAkoK8slDYSUg7rZHR6dBHuwynCAxGsjBMWQ2cLYobw_oQUDwUxxm0f',
    keypointsTitle: 'Claves para el cliente:',
    keypointsTitle_en: 'Key Insights for Creators:',
    keypoints: [
      '240 GSM (Camisetas): Densidad pesada que disimula imperfecciones, hombro caído y cuello reforzado con rib 1x1.',
      '420 GSM (Sudaderas): Aislamiento térmico superior, sin cordones para estética minimalista y lavado pre-encogido.'
    ],
    keypoints_en: [
      '240 GSM (T-Shirts): Heavy density creating a structured drape, dropped shoulder, and tight 1x1 rib collar.',
      '420 GSM (Hoodies): High thermal isolation, clean cord-free minimalist hood, and pre-shrunk anti-pilling wash.'
    ],
    fullBody: `El gramaje textil (medido en gramos por metro cuadrado o GSM) es el indicador físico más contundente de la calidad de una prenda de streetwear contemporáneo. A diferencia de las camisetas promocionales ligeras de 140-160 GSM que se deforman tras el primer lavado, el streetwear de alta gama exige peso estructural y presencia táctil.

### 1. El estándar 240 GSM en camisetas oversize
Una camiseta de 240 GSM confeccionada con hilo de algodón 100% peinado aporta suficiente rigidez para que el corte "boxy fit" mantenga su silueta cuadrada sin colapsar sobre el torso. El cuello confeccionado en punto elástico acanalado (rib 1x1) de 2.5 cm evita que la prenda se desboque con el uso continuo.

### 2. El poder del French Terry de 420 GSM en sudaderas
Las sudaderas de 420 GSM utilizan bucles diagonales no cepillados en el interior (French Terry genuino), lo que permite una transpirabilidad superior mientras mantiene un aislamiento térmico impenetrable contra el viento. La ausencia de cordones en la capucha elimina elementos superfluos y cede todo el protagonismo a la arquitectura de la prenda.`,
    fullBody_en: `Fabric weight (measured in grams per square meter or GSM) is the single most decisive physical indicator of streetwear quality. Unlike cheap 140-160 GSM promo tees that stretch and warp after two washes, luxury urban wear requires structural weight and tactile presence.

### 1. The 240 GSM Standard in Boxy Tees
A 240 GSM combed organic cotton tee provides the exact structural rigidity required for the boxy silhouette to hold its shape instead of clinging to the body. A 1x1 2.5cm ribbed collar prevents neckline stretching across dozens of washes.

### 2. The 420 GSM French Terry Architecture in Hoodies
Our 420 GSM hoodies utilize unbrushed diagonal loops on the inside (authentic French Terry), offering superb breathability combined with impenetrable warmth. Eliminating the hood drawstrings creates a sleek architectural silhouette that elevates any streetwear look.`
  },
  {
    id: 'art-2',
    slug: 'preparar-disenos-dtg-serigrafia-color',
    title: 'Cómo Preparar tus Diseños para DTG y Serigrafía sin Pérdida de Color',
    title_en: 'How to Prepare Artwork for DTG & Screen Printing without Color Loss',
    excerpt: 'Evita estampados opacos o deslavados. Aprende la calibración cromática correcta con perfiles sRGB vs CMYK, fondos transparentes a 300 DPI, capa base de blanco para prendas oscuras y grosores de línea mínimos para que tu arte conserve cada matiz.',
    excerpt_en: 'Avoid dull prints. Master color calibration with sRGB vs CMYK profiles, 300 DPI transparency clipping, underbase white ink optimization for dark garments, and stroke weights to ensure your digital art looks vibrant on fabric.',
    tag: 'Técnica & Color',
    readTime: '6 min lectura · Print Guide',
    readTime_en: '6 min read · Print Guide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOB7Qts9DuIn4KlBYYbcLzHhZFLfMJRKXVys69ZcxTO5_0-pFws1sQK2eoWEuekaUm3l5EiIVvmL7157XUoZk3NeT1Qh29jVPw6jyNevbL9iOxGvHvdq08K8F7JQdhYoX-KX4Vfd52HJLKN0McmRP4bTTJ74CkUbWezAX7S7Z9F1Tmuq82lMESNn2NEzRCPFXgnlfgo4QZRERqKql2IkQvDUvm8pxErQ8fhn9noRHM',
    keypointsTitle: 'Checklist Técnico Profesional:',
    keypointsTitle_en: 'Professional Technical Checklist:',
    keypoints: [
      'Archivos PNG en espacio sRGB IEC61966-2.1 a 300 DPI reales.',
      'Sin degradados a transparencia parcial (evita halos grisáceos en tela negra).',
      'Líneas mínimas de 1.5 pt para bordado y 0.8 pt para impresión digital.'
    ],
    keypoints_en: [
      'PNG files in sRGB IEC61966-2.1 color profile at true 300 DPI.',
      'No soft semi-transparent pixel fades (prevents grey underbase halos on dark garments).',
      'Minimum stroke width: 1.5 pt for embroidery, 0.8 pt for digital direct printing.'
    ],
    fullBody: `Uno de los errores más comunes al enviar archivos a impresión bajo demanda es confiar en la visualización de pantallas retina hiper-saturadas sin calibrar los límites físicos de las tintas sobre textiles.

### 1. Resolución y Espacio de Color
Aunque los cabezales de impresión Kornit operan con perfiles de color cuatricromáticos más tintas especiales (CMYK + Red + Green + White), el archivo fuente debe exportarse siempre en formato PNG a 300 DPI en espacio de color sRGB. El software de ripeo (RIP) se encarga de la separación tonal exacta.

### 2. Tratamiento de Prendas Oscuras y Capa Base Blanca
En textiles negros o marinos, la impresora inyecta automáticamente una primera capa de tinta blanca de imprimación ("underbase") antes de los pigmentos de color. Si tu diseño tiene píxeles con 10% a 30% de opacidad, el procesador interpretará que debe fondear con blanco, generando un halo lechoso no deseado. Asegúrate de recortar siluetas limpias al 100% de opacidad.`,
    fullBody_en: `One of the most frequent pitfalls when prepping designs for on-demand fulfillment is relying on super-bright retina monitors without understanding ink absorption into textile fibers.

### 1. Resolution & Color Spaces
While Kornit industrial print heads utilize proprietary multi-channel inksets (CMYK + Red + Green + White), the optimal upload source is always 300 DPI PNG in sRGB IEC61966-2.1. The Printful RIP engine translates RGB gamut smoothly into rich physical pigments.

### 2. Underbase White Layer on Dark Fabrics
On black or navy cotton, the machine lays down an opaque white primer layer before printing color pigments. If your graphic features semi-transparent feathering (10%-40% opacity), the underbase creates an unwanted chalky halo. Always use hard-edge or deliberate halftones for fade transitions.`
  },
  {
    id: 'art-3',
    slug: 'impresion-arte-galeria-canvas-vs-acrilico',
    title: 'Impresión de Arte de Galería: Cuándo Elegir Lienzo Canvas vs Acrílico UV',
    title_en: 'Fine Art Gallery Printing: Canvas vs Optical Acrylic UV',
    excerpt: 'La elección decisiva entre la calidez táctil del algodón y el brillo tridimensional del metacrilato: comparamos absorción lumínica, resistencia UV por más de 100 años, iluminación de interiores y montajes flotantes para transformar cualquier espacio.',
    excerpt_en: 'Choosing between warm tactile canvas and high-gloss modern acrylic: compare light absorption, archival longevity (100+ years), room lighting conditions, and mounting hardware for museum-grade wall presentations.',
    tag: 'Galería & Decoración',
    readTime: '4 min lectura · Art Guide',
    readTime_en: '4 min read · Art Guide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6m6cTODQ5EZqFItNXb5yOo0X7c_VEt5ONJjG7_ctNmx2NlRkBNTraq2JWbM53t31LjKjBWIe20uZ2Te1TUj0880-Z3rd-p-Nsqwha-PYUu9SOZjXvi01t_r0YJ_zwv6SOc7SVmQZt5Js8bQdQ8YUWcb8FUL3MO-cpyiA-twCAhmM9z3pyglGtRHTCA4SwZNFf8qIXMLbyeNL69mzQS7WoC7uCiq2mm37toe0lBpFh',
    keypointsTitle: 'Comparativa Directa:',
    keypointsTitle_en: 'Direct Comparison Matrix:',
    keypoints: [
      'Lienzo Canvas (380 GSM): Cero reflejos, textura pictórica clásica, montaje sobre madera de pino FSC de 1.5 pulgadas.',
      'Acrílico Óptico (5mm): Profundidad 3D impactante, colores saturados y pernos de aluminio pulido flotantes.'
    ],
    keypoints_en: [
      'Canvas (380 GSM): Zero glare, classic tactile painterly texture, stretched on 1.5" FSC pine bars.',
      'Optical Acrylic (5mm): High 3D visual depth, ultra-saturated luminescence, suspended on stainless steel standoff bolts.'
    ],
    fullBody: `Elegir el soporte adecuado para una obra de arte digital o fotografía urbana determina cómo la pieza dialogará con la arquitectura del espacio.

### 1. Lienzo Canvas 380 GSM sobre bastidor de pino
El lienzo de algodón con recubrimiento microporoso absorbe la luz difusa ambiental, eliminando cualquier reflejo molesto provocado por ventanales o lámparas directas. Es ideal para habitaciones cálidas, oficinas con luz natural y piezas con texturas pictóricas o street art expresionista.

### 2. Acrílico UV de 5mm con montaje flotante
El metacrilato óptico de alta transparencia actúa como un prisma: la imagen se imprime en el reverso y se sella con una película blanca reflectante. La refracción interna crea una sensación tridimensional donde los colores parecen flotar suspendidos de la pared a 2 cm gracias a sus pernos de aluminio mecanizado.`,
    fullBody_en: `Selecting the right medium for digital street art or photography determines how your piece interacts with interior lighting and architecture.

### 1. 380 GSM Cotton Canvas Stretched Over Pine
With its microporous cotton texture, stretched canvas eliminates harsh surface glare from windows and ceiling spotlights. Perfect for warm living spaces, studio offices, and artwork with expressive brushwork or spray paint textures.

### 2. 5mm Optical Acrylic with Floating Standoffs
Optical-grade acrylic prints feature back-surface UV curing backed with an opaque white blocker. Light passes through the 5mm polished edge, creating a 3D luminosity where blacks look infinitely deep and neon shades pop vividly off the wall.`
  }
];
