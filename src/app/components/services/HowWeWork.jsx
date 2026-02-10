"use client";

import { useState } from "react";

export default function HowWeWork() {
  const steps = [
    {
      title: "Scrap Assessment & Quotation",
      desc: "Material evaluation with transparent pricing based on type, quality, and volume.",
    },
    {
      title: "Pickup Scheduling & Logistics",
      desc: "Planned pickups with reliable logistics to ensure smooth operations.",
    },
    {
      title: "Sorting, Processing & Grading",
      desc: "Expert processing and grading to maximize recovery and material value.",
    },
    {
      title: "Documentation & Final Settlement",
      desc: "Complete compliance paperwork with accurate reporting and settlement.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0b1220] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial Process"
              className="w-full h-[420px] lg:h-[520px] object-cover rounded-lg"
            />
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-4">

            {steps.map((item, i) => {
              const isOpen = active === i;

              return (
                <div
                  key={i}
                  className="
                    bg-[#0f1a33]
                    rounded-lg
                    overflow-hidden
                    transition-all duration-500
                  "
                >
                  {/* Header */}
                  <button
                    onClick={() => setActive(isOpen ? null : i)}
                    className="
                      w-full flex justify-between items-center
                      px-6 py-5 text-left
                      text-white font-semibold
                      transition
                    "
                  >
                    <span
                      className={`${
                        isOpen ? "text-[#ff5e14]" : "text-white"
                      } transition`}
                    >
                      {item.title}
                    </span>

                    <span
                      className={`text-2xl font-light transition ${
                        isOpen ? "text-[#ff5e14]" : "text-white"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Content */}
                  <div
                    className={`px-6 transition-all duration-500 ease-in-out
                      ${
                        isOpen
                          ? "max-h-40 pb-6 opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                      }
                    `}
                  >
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}