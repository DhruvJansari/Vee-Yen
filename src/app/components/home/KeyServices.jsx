"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  FaArrowRight,
  FaCog,
  FaIndustry,
  FaRecycle,
  FaTruck,
} from "react-icons/fa";

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function KeyServices() {
  const services = [
    {
      title: "Industrial Scrap Collection",
      desc: "Scheduled pickups for factories, plants, and large generators.",
      image:
        "https://images.unsplash.com/photo-1600368544663-05493ab49549?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaTruck className="text-3xl" />,
      number: "01",
    },
    {
      title: "Material Processing & Grading",
      desc: "Expert dismantling, sorting, and quality certification.",
      image:
        "https://images.unsplash.com/photo-1709614584462-8cf8d4384733?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaCog className="text-3xl" />,
      number: "02",
    },
    {
      title: "Bulk Supply to Industry",
      desc: "Reliable supply of processed ferrous & non-ferrous metals.",
      image:
        "https://plus.unsplash.com/premium_photo-1749149653926-b6942cd3db56?q=80&w=1355&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaIndustry className="text-3xl" />,
      number: "03",
    },
    {
      title: "Multi-Material Recycling",
      desc: "Integrated solutions for plastics, wood, iron & e-waste.",
      image:
        "https://plus.unsplash.com/premium_photo-1726750880720-542f7ea9eb3a?q=80&w=1057&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: <FaRecycle className="text-3xl" />,
      number: "04",
    },
  ];

  const stats = [
    { value: 200, suffix: "+", label: "Active Clients" },
    { value: 50, suffix: "K+", label: "Tons Processed" },
    { value: 15, suffix: "+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-[#1b1b1b] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#ff5e14] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ff5e14] rounded-full blur-3xl"
        />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(120)].map((_, i) => (
            <div key={i} className="border-r border-b border-white"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-[#ff5e14]" />
              <span className="text-[#ff5e14] uppercase tracking-widest text-xs font-bold">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight">
              Core <span className="text-[#ff5e14]">Services</span>
            </h2>
            <p className="text-gray-400 text-sm mt-4 max-w-xl">
              Comprehensive scrap management solutions designed to maximize
              value, minimize waste, and streamline your operations.
            </p>
          </motion.div>

          <motion.a
            href="/services"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-[#ff5e14] transition-all duration-300 mt-6 md:mt-0"
          >
            View All Services
            <span className="w-11 h-11 border-2 border-white group-hover:border-[#ff5e14] group-hover:bg-[#ff5e14] rounded-full flex items-center justify-center transition-all duration-300">
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Service Number Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="absolute -top-4 -right-4 z-20 w-14 h-14 bg-[#ff5e14] text-white flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-300"
              >
                {item.number}
              </motion.div>

              {/* Card Container */}
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                {/* Image Container */}
                <div className="bg-[#2a2a2a] p-5 relative overflow-hidden">
                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-white"
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  <div className="overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={350}
                      className="h-[240px] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white px-7 py-8 shadow-xl -mt-14 mx-5 relative z-10 group-hover:shadow-2xl transition-shadow duration-300">
                  {/* Decorative Top Border */}
                  <div className="absolute top-0 left-0 w-0 h-1 bg-[#ff5e14] group-hover:w-full transition-all duration-500"></div>

                  <h3 className="text-base font-black uppercase text-[#111] mb-4 min-h-[48px] group-hover:text-[#ff5e14] transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* CTA Arrow */}
                  <div className="flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-xs font-bold uppercase text-gray-400 group-hover:text-[#ff5e14] transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="w-10 h-10 flex items-center justify-center border-2 border-[#ff5e14] text-[#ff5e14] group-hover:bg-[#ff5e14] group-hover:text-white transition-all duration-300"
                    >
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Line */}
                {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5e14] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-[#2a2a2a] px-10 py-6 border-l-4 border-[#ff5e14]">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-black text-white mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-[1px] h-12 bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
