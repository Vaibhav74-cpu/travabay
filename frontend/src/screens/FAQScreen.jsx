import { useState } from "react";

const faqData = [
  {
    category: "Bookings & payments",
    subtitle: "How bookings, prices and taxes work.",
    items: [
      {
        q: "How can I pay for my Travabay tour?",
        a: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, and bank transfers. A deposit is required at the time of booking, with the balance due before departure.",
      },
      {
        q: "Is GST included in the tour price?",
        a: "Yes, GST is included in all displayed tour prices. No additional taxes will be added at checkout.",
      },
    ],
  },
  {
    category: "Policies & terms",
    subtitle: "Where to find detailed conditions for each tour.",
    items: [
      {
        q: "Where can I read detailed terms and conditions for my tour?",
        a: "Full terms and conditions are available on each individual tour page under the 'Policy & Terms' tab.",
      },
      {
        q: "Why does the cancellation grid differ from one tour to another?",
        a: "Cancellation policies vary based on destination, supplier agreements, and tour type. Each tour has its own grid on the details page.",
      },
    ],
  },
  {
    category: "Cancellation & refunds",
    subtitle: "Understand how cancellations and refunds are handled.",
    items: [
      {
        q: "What is Travabay's cancellation policy?",
        a: "Cancellations 60+ days before departure receive a full refund. 30–59 days: 50% refund. Less than 30 days: no refund.",
      },
      {
        q: "How are refunds processed after cancellation?",
        a: "Refunds are processed within 7–14 business days back to your original payment method. You will receive a confirmation email once initiated.",
      },
    ],
  },
  {
    category: "Travel preparation",
    subtitle: "Documents and practical information before you travel.",
    items: [
      {
        q: "What documents are required to travel?",
        a: "You'll need a valid passport (minimum 6 months validity), any required visas, travel insurance, and your booking confirmation.",
      },
      {
        q: "Where can I see weather, transport and other practical information?",
        a: "Practical info including weather, transport options, and packing suggestions are in the 'Need to Know' section on each tour page.",
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#0f1e2e] border border-[#1c3045] rounded-lg overflow-hidden mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left hover:bg-[#122030] transition-colors"
      >
        <span className="text-[#d1e0f0] text-sm font-semibold leading-snug">
          {q}
        </span>
        <span className="text-[#6b8aaa] text-lg font-light flex-shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="border-t border-[#1c3045] px-4 py-3 text-[#7a9ab8] text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

function FAQCard({ category, subtitle, items }) {
  return (
    <div className="bg-[#0b1825] border border-[#172838] rounded-xl p-6">
      <h2 className="text-[#e8f0f8] text-lg font-bold mb-1">{category}</h2>
      <p className="text-[#4d6880] text-sm mb-4">{subtitle}</p>
      {items.map((item, i) => (
        <AccordionItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
}

export default function FAQScreen() {
  return (
    <div className="min-h-screen bg-[#05101a] px-5 py-12 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 border border-[#1e3348] rounded-full px-4 py-1 text-[#7a9ab8] text-[11px] font-semibold tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl font-extrabold leading-tight max-w-2xl mb-3 tracking-tight">
          Answers about Travabay tours, policies & payments
        </h1>

        {/* Subheading */}
        <p className="text-[#4d6880] text-sm leading-relaxed max-w-lg mb-10">
          This FAQ summarises key information from our tour Policy & Terms, Payment
          Terms and Need to Know sections. For exact details, always refer to the
          specific tour page for your chosen departure.
        </p>

        {/* Grid — 2 cols on desktop, 1 col on mobile/tablet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqData.map((section) => (
            <FAQCard
              key={section.category}
              category={section.category}
              subtitle={section.subtitle}
              items={section.items}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-[#253d54] text-xs leading-relaxed mt-8 max-w-4xl">
          Note: The information on this page is a general guide based on Travabay's
          standard tour data. Specific policies, charges and inclusions may vary by
          tour and departure date. Always check the live details shown on your
          selected tour page before booking.
        </p>

      </div>
    </div>
  );
}