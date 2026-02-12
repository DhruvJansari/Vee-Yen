"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#111111] flex items-center"
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Home.jpeg')" }}
        >
          <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-3 h-3 bg-[#ff5e14]"></span>
            <span className="text-white uppercase tracking-[0.3em] text-xs font-bold">
              Welcome to VEE YEN Traders
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white font-black text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.1] mb-8"
          >
            Transforming Scrap into <br />
            <span className="text-white md:text-white">Sustainable Value</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl leading-relaxed border-l-4 border-[#ff5e14] pl-6"
          >
            VEE YEN Traders delivers end-to-end metal recycling and scrap
            management solutions that are reliable, transparent, and
            purpose-built for the circular economy.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5,
                },
              },
            }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              whileTap={{ scale: 0.98 }}
              href="contact"
              className="bg-[#ff5e14] text-white px-8 py-4 text-sm font-black uppercase tracking-widest flex items-center gap-3 transition-colors duration-300 group shadow-[0_10px_20px_rgba(255,94,20,0.3)]"
            >
              Start a Partnership
              <motion.span
                className="text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              >
                ↗
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
