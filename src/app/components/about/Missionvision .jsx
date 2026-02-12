"use client";

import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#1b1b1b] relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(120)].map((_, i) => (
            <div key={i} className="border-r border-b border-white"></div>
          ))}
        </div>
      </div>

      {/* Background Gradient Blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#ff5e14]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#ff5e14]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
            <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
              What Drives Us
            </span>
            <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight">
            Mission & <span className="text-[#ff5e14]">Vision</span>
          </h2>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group relative h-full"
          >
            <div className="bg-white p-10 shadow-2xl hover:shadow-[#ff5e14]/20 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5e14]/10 transform rotate-45 translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#ff5e14] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <FaEye className="text-3xl" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black uppercase text-[#111111] mb-6 tracking-tight shrink-0">
                Our <span className="text-[#ff5e14]">Vision</span>
              </h3>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed border-l-4 border-[#ff5e14] pl-6 flex-grow">
                To be the most trusted name in metal recycling, synonymous with
                reliability and environmental stewardship.
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff5e14] group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8 }}
            className="group relative h-full"
          >
            <div className="bg-white p-10 shadow-2xl hover:shadow-[#ff5e14]/20 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff5e14]/10 transform rotate-45 translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#ff5e14] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <FaBullseye className="text-3xl" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black uppercase text-[#111111] mb-6 tracking-tight shrink-0">
                Our <span className="text-[#ff5e14]">Mission</span>
              </h3>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed border-l-4 border-[#ff5e14] pl-6 flex-grow">
                To maximize resource recovery through meticulous processes while
                delivering consistent value and supporting the circular economy.
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff5e14] group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote/Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-white/80 text-lg italic leading-relaxed">
            "Every ton of scrap we process is a step toward a more sustainable
            future. We don't just recycle materials—we rebuild trust."
          </p>
          <div className="mt-6 h-1 w-24 bg-[#ff5e14] mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
