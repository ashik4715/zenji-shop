export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-zenji-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <p className="text-zenji-red text-xs font-mono uppercase tracking-widest mb-4">
          NO DRAMA. JUST RULES.
        </p>
        <h1 className="font-display text-5xl uppercase tracking-tight mb-12">
          RETURN POLICY
        </h1>

        <p className="text-zenji-gray text-sm leading-relaxed mb-16">
          We want you to love your ZENJI piece. If it doesn&apos;t fit or isn&apos;t
          right, you have 14 days from delivery to return it. Here&apos;s how it
          works.
        </p>

        <div className="space-y-12">
          {/* 01 - The Short Version */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">01</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                THE SHORT VERSION
              </h2>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-zenji-gray">14-day return window from delivery</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-zenji-gray">Items must be unworn, unwashed, with tags</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-zenji-gray">Sale items eligible unless marked final sale</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span className="text-zenji-gray">Faulty items covered under Australian Consumer Law</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-zenji-red">✗</span>
                <span className="text-zenji-gray">No returns on worn, washed, or damaged items</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-zenji-red">✗</span>
                <span className="text-zenji-gray">No returns on final sale items</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <span className="text-zenji-red">✗</span>
                <span className="text-zenji-gray">No returns without proof of purchase</span>
              </li>
            </ul>
          </div>

          {/* 02 - Eligibility */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">02</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                ELIGIBILITY
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="text-sm text-zenji-gray pl-4">
                Items must be unworn, unwashed, and in original condition
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                All original tags must be attached
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                Items must be free of stains, odours, pet hair, or any signs of wear
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                You must have proof of purchase (order confirmation email or receipt)
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                Returns must be initiated within 14 days of delivery date
              </li>
            </ul>
          </div>

          {/* 03 - How to Return */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">03</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                HOW TO RETURN
              </h2>
            </div>
            <ol className="space-y-4">
              <li className="text-sm text-zenji-gray">
                <span className="text-zenji-red font-mono font-bold mr-3">STEP 1</span>
                Email support@zenji.shop with your order number and reason for return
              </li>
              <li className="text-sm text-zenji-gray">
                <span className="text-zenji-red font-mono font-bold mr-3">STEP 2</span>
                Wait for our reply with return instructions and address details
              </li>
              <li className="text-sm text-zenji-gray">
                <span className="text-zenji-red font-mono font-bold mr-3">STEP 3</span>
                Pack the item securely in its original packaging with all tags attached
              </li>
              <li className="text-sm text-zenji-gray">
                <span className="text-zenji-red font-mono font-bold mr-3">STEP 4</span>
                Ship the item using a trackable shipping method. Return shipping costs are the responsibility of the customer unless the item is faulty
              </li>
            </ol>
          </div>

          {/* 04 - Faulty or Wrong Items */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">04</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                FAULTY OR WRONG ITEMS
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="text-sm text-zenji-gray pl-4">
                If you receive a faulty, damaged, or incorrect item, contact us within 7 days of delivery
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                Include your order number and photographs showing the issue
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                We will arrange a replacement, repair, or full refund including return shipping costs
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                Faulty items are covered under Australian Consumer Law at no cost to you
              </li>
            </ul>
          </div>

          {/* 05 - Refunds */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">05</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                REFUNDS
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="text-sm text-zenji-gray pl-4">
                Refunds are processed within 5-10 business days of us receiving your return
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                Refunds are issued to the original payment method
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                You will receive an email confirmation when your refund is processed
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                Original shipping costs are non-refundable unless the item was faulty or incorrectly sent
              </li>
            </ul>
          </div>

          {/* 06 - Exchanges */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">06</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                EXCHANGES
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="text-sm text-zenji-gray pl-4">
                We do not offer direct exchanges at this time
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                To exchange an item, return the original for a refund and place a new order for the correct size or product
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                This ensures you get the item you want before it sells out
              </li>
            </ul>
          </div>

          {/* 07 - Australian Consumer Law */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">07</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                AUSTRALIAN CONSUMER LAW
              </h2>
            </div>
            <ul className="space-y-3">
              <li className="text-sm text-zenji-gray pl-4">
                Our products come with guarantees that cannot be excluded under the Australian Consumer Law
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage
              </li>
              <li className="text-sm text-zenji-gray pl-4">
                You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure
              </li>
            </ul>
          </div>

          {/* 08 - Contact */}
          <div className="border-l-2 border-zenji-red pl-6">
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-zenji-red font-mono text-sm font-bold">08</span>
              <h2 className="font-mono text-sm uppercase tracking-wider text-white">
                CONTACT
              </h2>
            </div>
            <p className="text-sm text-zenji-gray pl-4">
              For all return and refund enquiries, email us at{" "}
              <a
                href="mailto:support@zenji.shop"
                className="text-zenji-red hover:underline"
              >
                support@zenji.shop
              </a>{" "}
              with your order number and details.
            </p>
          </div>
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
