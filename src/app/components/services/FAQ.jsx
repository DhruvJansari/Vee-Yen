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

  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-[#ff5e14] uppercase text-sm font-semibold mb-3">
            FAQ
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Frequently Asked{" "}
            <span className="text-[#ff5e14]">Questions</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Quick answers to common questions about our scrap management and
            recycling services.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Questions */}
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`
                  w-full text-left px-6 py-5 rounded-lg
                  border transition-all duration-300
                  ${
                    active === i
                      ? "bg-white border-[#ff5e14] shadow-md"
                      : "bg-gray-100 border-gray-200 hover:bg-white"
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-semibold ${
                      active === i
                        ? "text-[#ff5e14]"
                        : "text-gray-800"
                    }`}
                  >
                    {item.q}
                  </span>

                  <span
                    className={`text-xl font-bold transition ${
                      active === i
                        ? "text-[#ff5e14]"
                        : "text-gray-400"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Answer Panel */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex items-center">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {faqs[active].a}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}