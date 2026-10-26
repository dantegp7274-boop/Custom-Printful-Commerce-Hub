export type Language = 'es' | 'en';

export interface Product {
  id: string;
  sku: string;
  title: string;
  title_en: string;
  category: 'moda' | 'cuero' | 'ceramica' | 'arte' | 'audio';
  categoryLabel: string;
  categoryLabel_en: string;
  fulfillment: string;
  fulfillment_en: string;
  fulfillmentType: 'printful' | 'stock';
  price: number;
  image: string;
  description: string;
  description_en: string;
  specs: string[];
  specs_en: string[];
}

export interface DropSlide {
  id: string;
  sku: string;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  price: number;
  image: string;
  badge: string;
  badge_en: string;
  badgeBg: string;
  badgeColor: string;
  techHighlight: string;
  techColor: string;
}

export interface MatrixItem {
  id: string;
  number: string;
  line: number;
  lineTitle: string;
  lineTitle_en: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  spec: string;
  benefit: string;
  benefit_en: string;
  image?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  title_en: string;
  excerpt: string;
  excerpt_en: string;
  tag: string;
  tagBg?: string;
  tagColor?: string;
  readTime: string;
  readTime_en: string;
  image: string;
  keypointsTitle: string;
  keypointsTitle_en: string;
  keypoints: string[];
  keypoints_en: string[];
  fullBody: string;
  fullBody_en: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  role_en: string;
  quote: string;
  quote_en: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  question_en: string;
  answer: string;
  answer_en: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  customNotes?: string;
}

export type RecordType = 'cart_order' | 'custom_drop' | 'contact_inquiry' | 'product_bookmark' | 'custom_config' | 'work_session' | 'manual_note';

export interface SavedWorkRecord {
  id: string;
  timestamp: string;
  type: RecordType;
  title: string;
  summary: string;
  details: Record<string, any>;
}
