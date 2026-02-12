"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#111111] via-[#1b1b1b] to-[#111111] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="border-r border-b border-white"></div>
          ))}
        </div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#ff5e14]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-[#ff5e14]/20 rounded-full animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
              <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
                Let's Work Together
              </span>
              <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
              Partner with a Recycling Company{" "}
              <br className="hidden md:block" />
              That Values{" "}
              <span className="text-[#ff5e14]">Transparency & Trust</span>
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Experience the difference of working with a partner committed to
              reliability, fair pricing, and long-term environmental impact.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 94, 20, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ff5e14] text-white px-10 py-5 text-sm font-black uppercase tracking-widest flex items-center gap-4 shadow-2xl group w-full sm:w-auto justify-center hover:bg-white hover:text-[#ff5e14] transition-all duration-300"
            >
              <FaEnvelope className="text-lg" />
              Contact Us Today
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>

            <motion.a
              href="tel:+911234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-[#111111] transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="text-base" />
              +91 123 456 7890
            </motion.a>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 items-center"
          >
            <div className="text-center">
              <p className="text-3xl font-black text-[#ff5e14] mb-1">200+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Trusted Partners
              </p>
            </div>
            <div className="w-[1px] h-12 bg-gray-700 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#ff5e14] mb-1">15+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Years Experience
              </p>
            </div>
            <div className="w-[1px] h-12 bg-gray-700 hidden sm:block"></div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#ff5e14] mb-1">100%</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Transparent Process
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
