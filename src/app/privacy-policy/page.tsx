const sections = [
  {
    number: "01",
    title: "INFORMATION WE COLLECTION",
    content: [
      "We collect personal information you provide directly, including your name, email address, shipping address, phone number, and payment details when you place an order.",
      "We automatically collect certain information when you visit our website, such as your IP address, browser type, operating system, referral URLs, and browsing behavior.",
      "We may collect information from third parties, such as payment processors, analytics providers, and social media platforms if you interact with us through those channels.",
    ],
  },
  {
    number: "02",
    title: "HOW WE USE YOUR INFORMATION",
    content: [
      "To process and fulfil your orders, including shipping, delivery, and returns.",
      "To communicate with you about your orders, account, and customer service inquiries.",
      "To send marketing communications about new drops, sales, and promotions (with your consent).",
      "To improve our website, products, and services through analytics and usage data.",
      "To detect, prevent, and address fraud, security, and technical issues.",
    ],
  },
  {
    number: "03",
    title: "SHARING YOUR INFORMATION",
    content: [
      "We share your information with payment processors to complete transactions.",
      "We share your shipping details with delivery partners to fulfil orders.",
      "We may share information with analytics services to understand how our website is used.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    number: "04",
    title: "COOKIES",
    content: [
      "We use cookies and similar tracking technologies to enhance your experience on our website.",
      "Cookies help us remember your preferences, understand how you use our site, and improve our services.",
      "You can control cookies through your browser settings, though some features may not function properly without them.",
    ],
  },
  {
    number: "05",
    title: "DATA SECURITY",
    content: [
      "We implement industry-standard security measures to protect your personal information.",
      "All payment transactions are encrypted using SSL technology.",
      "However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    number: "06",
    title: "DATA RETENTION",
    content: [
      "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy.",
      "Order information is retained for a minimum of 7 years for tax and legal compliance.",
      "Marketing preferences are retained until you unsubscribe or request deletion.",
    ],
  },
  {
    number: "07",
    title: "YOUR RIGHTS",
    content: [
      "You have the right to access, correct, or delete your personal information.",
      "You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.",
      "You can request a copy of the personal data we hold about you by contacting support@zenji.shop.",
      "Under the Australian Privacy Act 1988, you have additional rights regarding your personal information.",
    ],
  },
  {
    number: "08",
    title: "MARKETING COMMUNICATIONS",
    content: [
      "We may send you marketing emails about new drops, sales, and brand updates if you have opted in.",
      "You can unsubscribe from marketing emails at any time by clicking the unsubscribe link.",
      "We will never share your email address with third parties for their own marketing purposes.",
    ],
  },
  {
    number: "09",
    title: "THIRD PARTY LINKS",
    content: [
      "Our website may contain links to third-party websites, including social media platforms.",
      "We are not responsible for the privacy practices of these external sites.",
      "We encourage you to read the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    number: "10",
    title: "CHILDREN'S PRIVACY",
    content: [
      "Our website is not intended for individuals under the age of 16.",
      "We do not knowingly collect personal information from children under 16.",
      "If we become aware that we have collected information from a child, we will take steps to delete it promptly.",
    ],
  },
  {
    number: "11",
    title: "CHANGES TO THIS POLICY",
    content: [
      "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.",
      "The updated policy will be posted on this page with a revised 'Last Updated' date.",
      "We encourage you to review this policy periodically.",
    ],
  },
  {
    number: "12",
    title: "CONTACT US",
    content: [
      "If you have any questions about this privacy policy or our data practices, please contact us at support@zenji.shop.",
      "For privacy-related requests, email support@zenji.shop with the subject line 'Privacy Request'.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          LAST UPDATED: JULY 2026
        </p>
        <h1 className="font-display text-5xl uppercase tracking-tight mb-16">
          PRIVACY POLICY
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
