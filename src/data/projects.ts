export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  awards: string[];
  description: string;
  arabicSubtitle?: string;
  heroImage: string;
  galleryImages: string[];
  metrics: { label: string; value: string }[];
  deliverables: string[];
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    category: "Full-Stack E-Commerce & Online Payments",
    year: "2026",
    client: "Production E-Commerce Platform",
    awards: ["Stripe Payments", "Next.js & TypeScript"],
    description: "Full e-commerce store with shopping cart and online payment. Engineered with React, Next.js, TypeScript, and Stripe integration for seamless product browsing, variant selection, and real-time checkout.",
    arabicSubtitle: "متجر إلكتروني متكامل مع سلة تسوق وأنظمة دفع إلكتروني متطورة",
    heroImage: "/projects/ecommerce-dark.png",
    galleryImages: [
      "/projects/ecommerce-dark.png",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80"
    ],
    metrics: [
      { label: "Core Stack", value: "Next.js · React · TS" },
      { label: "Payments", value: "Stripe Online Checkout" },
      { label: "Features", value: "Shopping Cart & Catalog" }
    ],
    deliverables: ["Stripe Checkout", "TypeScript Architecture", "React State Management", "Next.js Full-Stack App"],
    accentColor: "#0070F3"
  },
  {
    id: "chores-bakery",
    title: "CHORES",
    category: "Café & Bakery Digital Experience",
    year: "2026",
    client: "Chores Café & Bakery",
    awards: ["Artisanal UI", "Interactive Menu & Cart"],
    description: "A fresh and delicious digital café & bakery platform featuring good food and good mood. Start your day with freshly baked croissants, perfect coffee, and healthy choices. Built with interactive menu categorization, search filtering, cart drawer, and custom splash screen.",
    arabicSubtitle: "موقع مخبز ومقهى عصري مع قائمة طعام تفاعلية وسلة طلبات وتصميم مميز",
    heroImage: "/projects/chores.png",
    galleryImages: [
      "/projects/chores.png",
      "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=1800&q=90",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=90"
    ],
    metrics: [
      { label: "Design Concept", value: "Fresh & Delicious" },
      { label: "Menu Sections", value: "Croissants · Coffee · Food" },
      { label: "Core Logic", value: "Interactive Cart & Search" }
    ],
    deliverables: ["Brand Splash Screen", "Interactive Menu Filter", "Dynamic Cart Counter", "Responsive CSS & JS"],
    accentColor: "#2F7427"
  }
];

export const STUDIO_STATS = [
  { value: "18", suffix: " yrs", label: "Age & Rising Talent", arabicLabel: "مهندس برمجيات واعد" },
  { value: "HITU", suffix: "", label: "Helwan Int. Tech. University", arabicLabel: "جامعة حلوان التكنولوجية الدولية" },
  { value: "03", suffix: "+", label: "Core Programming Languages", arabicLabel: "جافا سكريبت · بايثون · جافا" },
  { value: "100", suffix: "%", label: "Dedication to Clean Code", arabicLabel: "شغف وإتقان في البرمجة" },
];

export const AWARDS_LIST = [
  { title: "E-Commerce Store Platform", org: "Stripe & Next.js Architecture", project: "E-Commerce Store", year: "2026" },
  { title: "CHORES Café & Bakery Platform", org: "Interactive Web Platform", project: "CHORES", year: "2026" },
  { title: "Software Engineering Student", org: "Helwan International Technology University", project: "Academic Degree", year: "2025–Present" },
];
