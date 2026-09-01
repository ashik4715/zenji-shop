"use client";

import AccordionItem from "@/components/AccordionItem";

const faqSections = [
  {
    title: "ORDERS & SHIPPING",
    items: [
      {
        question: "Do you ship Australia-wide?",
        answer:
          "Yes. We ship to every Australian state and territory, including Sydney, Melbourne, Brisbane, Perth and Adelaide.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Not yet. We currently ship Australia-wide only.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "Contact us within 2 hours of placing your order at support@zenji.shop and we'll do our best.",
      },
      {
        question: "How do I track my order?",
        answer:
          "You'll receive a tracking email once your order has been dispatched.",
      },
    ],
  },
  {
    title: "STOCK & DROPS",
    items: [
      {
        question: "When does my order ship?",
        answer:
          "Orders ship within 2-3 business days. Standard delivery takes 3-7 business days after dispatch.",
      },
      {
        question: "Will sold-out pieces restock?",
        answer:
          "No. Every ZENJI drop is limited edition. Once it sells out, it's gone for good.",
      },
      {
        question: "How long does a sale run?",
        answer:
          "Sales run for a limited time. Once the sale ends, prices return to normal.",
      },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      {
        question: "What sizes do you offer?",
        answer:
          "We offer S, M, L, XL, and XXL. Our tees are oversized fit.",
      },
      {
        question: "Are the designs limited?",
        answer: "Yes. Every design is limited edition. No restocks ever.",
      },
      {
        question: "How do I care for my ZENJI tee?",
        answer:
          "Machine wash cold, tumble dry low. Do not bleach. Iron on low heat.",
      },
      {
        question: "What material are the tees?",
        answer: "100% heavyweight 240gsm cotton. Oversized fit.",
      },
    ],
  },
  {
    title: "RETURNS & REFUNDS",
    items: [
      {
        question: "Do you accept returns?",
        answer:
          "Yes. You have 14 days from delivery to return unworn, unwashed items.",
      },
      {
        question: "My item arrived damaged — what do I do?",
        answer:
          "Email support@zenji.shop within 7 days with your order number and photos.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Refunds are processed within 5-10 business days of us receiving the return.",
      },
    ],
  },
  {
    title: "BRAND",
    items: [
      {
        question: "What is ZENJI?",
        answer:
          "ZENJI is an Australian anime streetwear brand. We make limited-edition graphic tees inspired by Japanese culture, anime and samurai discipline.",
      },
      {
        question: "Where does ZENJI ship?",
        answer: "Australia-wide. Free shipping on orders over A$100.",
      },
      {
        question: "Does ZENJI restock products?",
        answer: "No. Every drop is limited edition. No restocks ever.",
      },
      {
        question: "What anime series does ZENJI draw inspiration from?",
        answer:
          "Jujutsu Kaisen, Demon Slayer, Naruto, One Piece, Dragon Ball and more.",
      },
      {
        question: "How much do ZENJI products cost?",
        answer:
          "Tees are A$39.99, with selected pieces on sale at A$33.99.",
      },
      {
        question: "Where is ZENJI based?",
        answer: "ZENJI is based in Australia.",
      },
      {
        question: "How do I stay updated on new drops?",
        answer:
          "Follow us on TikTok @zenji_.shop and Instagram @zenji_.shop.",
      },
      {
        question: "Can I collaborate with ZENJI?",
        answer:
          "Yes! Email collabs@zenji.shop for brand deals, creator partnerships and press enquiries.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          EVERYTHING YOU NEED TO KNOW
        </p>
        <h1 className="font-display text-6xl uppercase tracking-tight mb-12">
          FAQ
        </h1>

        <div className="space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4 pl-6 border-l-2 border-zenji-red">
                {section.title}
              </h2>
              <div className="divide-y divide-zenji-border">
                {section.items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-zenji-border text-center">
          <h3 className="font-display text-xl uppercase tracking-wider mb-2">
            STILL HAVE QUESTIONS?
          </h3>
          <a
            href="mailto:support@zenji.shop"
            className="text-zenji-red font-mono text-sm uppercase tracking-widest hover:underline"
          >
            EMAIL US AT SUPPORT@ZENJI.SHOP
          </a>
        </div>
      </div>
    </div>
  );
}
