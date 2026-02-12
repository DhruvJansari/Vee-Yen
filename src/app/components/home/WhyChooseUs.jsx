"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Transparent & Fair Pricing",
      description:
        "Market-based rates with complete documentation and zero hidden charges.",
    },
    {
      title: "Guaranteed Quality & Traceability",
      description:
        "Full material certification and audit trail for every transaction.",
    },
    {
      title: "Scheduled Pickup & On-Time Delivery",
      description:
        "Reliable logistics that respect your operational timelines.",
    },
    {
      title: "Scalable, Multi-City Operations",
      description:
        "Consistent service standards across all your facility locations.",
    },
    {
      title: "Strategic ESG & Sustainability Support",
      description:
        "Comprehensive reporting to strengthen your environmental commitments.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#ff5e14]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#ff5e14]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-[#ff5e14]" />
            <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
              The VEE YEN Advantage
            </span>
            <span className="h-[2px] w-12 bg-[#ff5e14]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-[#111111] uppercase leading-tight mb-6">
            Why Choose <span className="text-[#ff5e14]">VEE YEN Traders</span>
          </h2>

          <p className="text-gray-600 text-base leading-relaxed">
            We deliver more than scrap management—we provide the infrastructure,
            reliability, and strategic support that modern businesses demand.
          </p>
        </motion.div>

        {/* Grid of Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 border-t-4 border-[#ff5e14] shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <FaCheckCircle className="text-[#ff5e14] text-2xl group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase text-[#111111] mb-3 leading-tight group-hover:text-[#ff5e14] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-1 w-24 bg-[#ff5e14] mx-auto"
        />
      </div>
    </section>
  );
}
