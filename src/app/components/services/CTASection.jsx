"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-gray-100 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            relative bg-white border border-gray-200
            rounded-xl
            p-8 sm:p-10 md:p-12
            flex flex-col md:flex-row
            items-start md:items-center
            justify-between
            gap-8
            shadow-sm
          "
        >
          {/* Soft Animated Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-[#ff5e14]/10 to-transparent pointer-events-none rounded-xl"
          />

          {/* Text */}
          <div className="relative z-10 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-3"
            >
              Ready to Get a{" "}
              <span className="text-[#ff5e14]">Scrap Quote?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed"
            >
              Get transparent pricing, reliable pickup, and complete
              documentation from a trusted scrap management partner.
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="relative z-10 w-full md:w-auto"
          >
            <motion.a
              href="/contact"
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
              className="
      w-full md:w-auto
      inline-flex items-center justify-center gap-2
      bg-[#ff5e14] text-white
      font-semibold
      px-8 py-4
      text-sm sm:text-base
      rounded-md
      shadow-md
      cursor-pointer
    "
            >
              <span>Get a Quote</span>

              <motion.span
                variants={{
                  hover: { x: 6 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
