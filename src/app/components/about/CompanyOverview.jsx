"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff5e14]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="VEE YEN Traders Operations"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-[#ff5e14] text-white p-8 shadow-2xl"
              >
                <p className="text-5xl font-black mb-2">15+</p>
                <p className="text-sm uppercase tracking-widest">
                  Years of Excellence
                </p>
              </motion.div>

              {/* Decorative Border Element */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#ff5e14] -z-10"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-[#ff5e14]"></span>
                <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
                  Our Story
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-black text-[#111111] uppercase leading-tight mb-8">
                Transforming an Industry <br />
                <span className="text-[#ff5e14]">
                  One Transaction at a Time
                </span>
              </h2>

              {/* Body Text */}
              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p className="border-l-4 border-[#ff5e14] pl-6">
                  VEE YEN Traders was founded on a simple but powerful
                  observation—the scrap industry is essential yet fragmented and
                  opaque. Scrap generators faced unreliable buyers and pricing,
                  while recyclers struggled with inconsistent quality.
                </p>

                <p>
                  We set out to build a{" "}
                  <strong className="text-[#111111]">
                    professional, transparent bridge
                  </strong>{" "}
                  between both ends, turning scrap into a valued resource and
                  partnerships into long-term success.
                </p>

                <p>
                  Today, we stand as a trusted partner to manufacturers,
                  construction firms, and industrial facilities across multiple
                  cities, delivering reliability where it matters most.
                </p>
              </div>

              {/* Key Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 grid grid-cols-2 gap-6"
              >
                <div className="bg-gray-50 p-6 border-l-4 border-[#ff5e14]">
                  <p className="text-3xl font-black text-[#ff5e14] mb-2">
                    200+
                  </p>
                  <p className="text-sm uppercase tracking-wide text-gray-600 font-bold">
                    Active Partners
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-[#ff5e14]">
                  <p className="text-3xl font-black text-[#ff5e14] mb-2">
                    50K+
                  </p>
                  <p className="text-sm uppercase tracking-wide text-gray-600 font-bold">
                    Tons Processed
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
