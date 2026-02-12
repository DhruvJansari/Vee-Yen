"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHandshake, FaLeaf, FaArrowRight } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaShieldAlt className="text-[#ff5e14] text-3xl" />,
      title: "Professional & Compliant",
      description:
        "Rigorous scrap management following all industry standards and regulations.",
    },
    {
      icon: <FaHandshake className="text-[#ff5e14] text-3xl" />,
      title: "Transparent Pricing",
      description:
        "Clear documentation and fair market-based pricing for every transaction.",
    },
    {
      icon: <FaLeaf className="text-[#ff5e14] text-3xl" />,
      title: "Sustainability-Driven",
      description:
        "Operations purpose-built to support and expand the global circular economy.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* LEFT SIDE – Background Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 min-h-[400px] shadow-2xl relative overflow-hidden group"
            style={{
              backgroundImage:
                "url('https://media.baumpub.com/files/slides/locale_image/full/0203/50591_en_1e1ec_53284_scrapuni-sutter-worker-sorting-metal.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for better visual depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5e14]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* RIGHT SIDE – Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-10 bg-[#ff5e14]" />
                <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
                  About Our Company
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase leading-tight mb-8">
                Bringing Structure to the <br />
                <span className="text-[#ff5e14]">Scrap Ecosystem</span>
              </h2>

              <p className="text-gray-600 text-base leading-relaxed mb-10 font-medium">
                VEE YEN Traders was built to bring structure, transparency, and
                professionalism to the scrap ecosystem. We transform fragmented
                waste streams into valuable resources through reliable
                processes, fair pricing, and long-term partnerships that support
                the circular economy.
              </p>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 text-[#111111] font-black uppercase tracking-widest group w-fit"
              >
                Read More
                <span className="w-12 h-12 rounded-full bg-[#ff5e14] text-white flex items-center justify-center group-hover:bg-[#111111] transition-all duration-300 group-hover:scale-110">
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.a>
            </motion.div>

            {/* HIGHLIGHTS – 3 CARDS SAME ROW */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="flex flex-col gap-4 p-6 bg-white border-l-4 border-[#ff5e14] shadow-md hover:shadow-xl transition-all duration-300 rounded-r-lg group cursor-pointer"
                >
                  <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase mb-2 text-[#111111] group-hover:text-[#ff5e14] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
