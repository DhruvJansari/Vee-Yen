"use client";

import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#ff5e14]" />
            <p className="text-[#ff5e14] uppercase text-sm font-semibold">
              Location
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-4">
            Our <span className="text-[#ff5e14]">Recycling Yard</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Visit our recycling yard or navigate easily using the map below.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            w-full
            h-[350px] sm:h-[420px] md:h-[500px]
            overflow-hidden
            rounded-xl
            shadow-md
            border border-gray-200
          "
        >
          <iframe
            title="VEE YEN Traders Location"
            src="https://www.google.com/maps?q=VEE+YEN+Traders+Recycling+Yard&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  );
}