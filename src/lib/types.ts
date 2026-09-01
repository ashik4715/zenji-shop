export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice: number | null;
  onSale: boolean;
  collection: string;
  description: string;
  images: string[];
  heroImage: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
