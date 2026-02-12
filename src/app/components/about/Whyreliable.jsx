"use client";

import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTruck,
  FaCertificate,
  FaFileAlt,
  FaLeaf,
} from "react-icons/fa";

export default function WhyReliable() {
  const highlights = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Integrity in Every Transaction",
      description:
        "Honest pricing, transparent processes, and ethical business practices in every deal.",
      number: "01",
    },
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Reliable Logistics & Consistent Quality",
      description:
        "On-time pickups, dependable delivery, and guaranteed material standards.",
      number: "02",
    },
    {
      icon: <FaCertificate className="text-3xl" />,
      title: "Deep Material Expertise",
      description:
        "Decades of industry knowledge in ferrous, non-ferrous, and specialty materials.",
      number: "03",
    },
    {
      icon: <FaFileAlt className="text-3xl" />,
      title: "Strong Compliance & Documentation",
      description:
        "Full regulatory adherence with complete audit trails and certification.",
      number: "04",
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Sustainability-First Mindset",
      description:
        "Environmental responsibility embedded in every aspect of our operations.",
      number: "05",
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#ff5e14]/5 to-transparent transform skew-x-12 origin-top-right"></div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#111111"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
            <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
              Our Foundation
            </span>
            <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase leading-tight mb-4">
            Why We Are <span className="text-[#ff5e14]">Reliable</span>
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Trust isn't given—it's earned through consistency, transparency, and
            unwavering commitment to doing what's right.
          </p>
        </motion.div>

        {/* Compact Zigzag Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 items-center group`}
            >
              {/* Icon Box - Smaller Square */}
              <div className="lg:w-1/4 w-full max-w-[200px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square bg-gradient-to-br from-[#111111] to-[#2a2a2a] p-6 flex items-center justify-center shadow-xl overflow-hidden"
                >
                  {/* Background Number */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="text-[100px] font-black text-white leading-none">
                      {item.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 text-white transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>

                  {/* Corner Accent - Smaller */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#ff5e14]"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#ff5e14]"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e14] to-[#ff8c14] opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Number Badge on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="text-white">{item.icon}</div>
                  </div>
                </motion.div>
              </div>

              {/* Content Box - Compact */}
              <div className="lg:w-3/4 w-full">
                <div className="bg-white p-6 border-l-4 border-[#ff5e14] shadow-lg group-hover:shadow-xl transition-all duration-500">
                  {/* Number Label */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#ff5e14] text-sm font-black uppercase tracking-widest">
                      {item.number}
                    </span>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-[#ff5e14] to-transparent"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black uppercase text-[#111111] mb-3 leading-tight group-hover:text-[#ff5e14] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="mt-4 h-1 w-0 bg-[#ff5e14] group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#111111] px-8 py-6 relative overflow-hidden">
            {/* Diagonal Stripe Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 15px,
                    white 15px,
                    white 30px
                  )`,
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <p className="text-white font-black uppercase text-xl md:text-2xl tracking-tight leading-tight">
                Reliability is our promise.{" "}
                <span className="text-[#ff5e14]">Trust is our foundation.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
