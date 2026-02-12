"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#ff5e14] via-[#ff6b2b] to-[#ff5e14] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white rounded-full animate-spin-slow"></div>
      </div>

      {/* Decorative Grid Dots */}
      <div className="absolute bottom-6 left-6 hidden lg:block opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase leading-tight mb-3">
                Ready to Streamline <br className="hidden md:block" />
                Your <span className="text-[#111111]">Scrap Operations?</span>
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
                Get a free, no-obligation scrap audit and quotation tailored to
                your operations.
              </p>
            </motion.div>

            {/* Right Side - CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            >
              <motion.a
                href="/contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#111111] text-white px-8 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl group whitespace-nowrap"
              >
                Get Free Quote
                <motion.span
                  className="w-8 h-8 bg-white text-[#111111] rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.span>
              </motion.a>

              <motion.a
                href="tel:+91 98765 43210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#ff5e14] transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <FaPhoneAlt className="text-sm" />
                Call Now
              </motion.a>
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-white/75 text-xs">
              <span className="font-bold">Trusted by 200+ businesses</span>{" "}
              across manufacturing & industrial sectors
            </p>
          </motion.div>
        </div>
      </div>

      {/* <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style> */}
    </section>
  );
}
