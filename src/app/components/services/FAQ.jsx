"use client";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How is scrap pricing calculated?",
      a: "Scrap pricing is calculated based on material type, grade, weight, current market rates, and processing requirements. We ensure transparent and data-driven pricing.",
    },
    {
      q: "Do you provide pickup services?",
      a: "Yes, we offer scheduled and on-demand pickup services with reliable logistics for factories, demolition sites, and industrial units.",
    },
    {
      q: "Is documentation provided?",
      a: "Absolutely. We provide full chain-of-custody documentation, weight slips, invoices, and compliance paperwork as per regulatory requirements.",
    },
    {
      q: "What materials do you accept?",
      a: "We handle ferrous and non-ferrous metals, plastics, wood, mixed scrap, and selected categories of e-waste.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

       {/* Header */}
<div className="text-center mb-14">
  <div className="flex items-center justify-center gap-3 mb-4">
    <span className="w-10 h-[2px] bg-[#ff5e14]" />
    <p className="text-[#ff5e14] uppercase text-sm font-semibold">
      FAQ
    </p>
    <span className="w-10 h-[2px] bg-[#ff5e14]" />
  </div>

  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
    Frequently Asked{" "}
    <span className="text-[#ff5e14]">Questions</span>
  </h2>

  <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
    Quick answers to common questions about our scrap management and
    recycling services.
  </p>
</div>  
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between
                           px-6 py-5 text-left
                           hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-800">
                  {item.q}
                </span>

                <span
                  className={`text-2xl font-bold transition-transform duration-300
                    ${active === i ? "rotate-45 text-[#ff5e14]" : "text-gray-400"}
                  `}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              {active === i && (
                <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}