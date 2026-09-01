const sections = [
  {
    number: "01",
    title: "ABOUT ZENJI",
    content: [
      "ZENJI is an Australian streetwear brand specialising in limited-edition graphic tees inspired by Japanese culture and anime.",
      "By using our website, you agree to these Terms & Conditions. If you do not agree, please do not use our site.",
    ],
  },
  {
    number: "02",
    title: "USING OUR WEBSITE",
    content: [
      "You must be at least 16 years old to use our website.",
      "You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair the site.",
      "We reserve the right to restrict access to our website at our discretion.",
    ],
  },
  {
    number: "03",
    title: "PRODUCTS & PRICING",
    content: [
      "All products are subject to availability. We reserve the right to discontinue any product at any time.",
      "Prices are in Australian Dollars (AUD) and include GST unless otherwise stated.",
      "We reserve the right to change prices without notice. Sale prices apply only during the stated sale period.",
      "Product images are for illustration purposes only. Actual products may vary slightly.",
    ],
  },
  {
    number: "04",
    title: "ORDERS & PAYMENT",
    content: [
      "By placing an order, you are making an offer to purchase the product at the stated price.",
      "We may accept or decline any order at our discretion.",
      "Payment must be received in full before we dispatch your order.",
      "We accept payment via credit card, debit card, Apple Pay, Google Pay, and other methods displayed at checkout.",
    ],
  },
  {
    number: "05",
    title: "SHIPPING",
    content: [
      "We ship Australia-wide via standard and express delivery services.",
      "Orders are dispatched within 2-3 business days of order placement.",
      "Standard delivery takes 3-7 business days after dispatch.",
      "Free shipping is available on orders over A$100.",
      "Risk of loss and title for items pass to you upon delivery to the carrier.",
    ],
  },
  {
    number: "06",
    title: "RETURNS & REFUNDS",
    content: [
      "You may return unworn, unwashed items within 14 days of delivery.",
      "Items must be in original condition with all tags attached.",
      "Sale items are eligible for return unless marked as final sale.",
      "Refunds are processed within 5-10 business days of us receiving the return.",
      "Return shipping costs are the responsibility of the customer unless the item is faulty.",
    ],
  },
  {
    number: "07",
    title: "FAULTY OR INCORRECT ITEMS",
    content: [
      "If you receive a faulty or incorrect item, contact us at support@zenji.shop within 7 days of delivery.",
      "Include your order number and photographs of the issue.",
      "We will arrange a replacement or full refund, including return shipping costs.",
    ],
  },
  {
    number: "08",
    title: "INTELLECTUAL PROPERTY",
    content: [
      "All content on this website, including designs, logos, text, and images, is the property of ZENJI.",
      "You may not reproduce, distribute, or create derivative works without our express written permission.",
      "ZENJI and associated branding are protected under Australian intellectual property law.",
    ],
  },
  {
    number: "09",
    title: "LIMITATION OF LIABILITY",
    content: [
      "To the maximum extent permitted by law, ZENJI is not liable for any indirect, incidental, or consequential damages.",
      "Our total liability for any claim shall not exceed the purchase price of the product.",
      "We are not responsible for delays caused by shipping carriers or events beyond our control.",
    ],
  },
  {
    number: "10",
    title: "PRIVACY",
    content: [
      "Your use of our website is also governed by our Privacy Policy.",
      "By using our site, you consent to the collection and use of your information as outlined in the Privacy Policy.",
    ],
  },
  {
    number: "11",
    title: "CHANGES TO TERMS",
    content: [
      "We reserve the right to update these Terms & Conditions at any time.",
      "Changes will be effective immediately upon posting to this page.",
      "Your continued use of the website constitutes acceptance of the updated terms.",
    ],
  },
  {
    number: "12",
    title: "DISPUTES",
    content: [
      "Any disputes arising from these terms shall be governed by the laws of Australia.",
      "You agree to attempt to resolve any dispute through good faith negotiation before initiating legal proceedings.",
    ],
  },
  {
    number: "13",
    title: "AUSTRALIAN CONSUMER LAW",
    content: [
      "Nothing in these terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law.",
      "If products fail to meet a consumer guarantee, you are entitled to a repair, replacement, or refund as applicable.",
    ],
  },
  {
    number: "14",
    title: "CONTACT",
    content: [
      "If you have any questions about these terms, please contact us at support@zenji.shop.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          EFFECTIVE: JULY 2026
        </p>
        <h1 className="font-display text-5xl uppercase tracking-tight mb-16">
          TERMS & CONDITIONS
        </h1>

        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.number} className="border-l-2 border-zenji-red pl-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-zenji-red font-mono text-sm font-bold">
                  {section.number}
                </span>
                <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-zenji-gray leading-relaxed pl-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-zenji-border text-center">
          <h3 className="font-display text-xl uppercase tracking-wider mb-2">
            QUESTIONS?
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
