'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function KeyServices() {
  const services = [
    {
      title: 'Industrial Scrap Collection',
      desc: 'Scheduled pickups for factories, plants, and large generators.',
      image: '/images/service-1.jpg',
    },
    {
      title: 'Material Processing & Grading',
      desc: 'Expert dismantling, sorting, and quality certification.',
      image: '/images/service-2.jpg',
    },
    {
      title: 'Bulk Supply to Industry',
      desc: 'Reliable supply of processed ferrous & non-ferrous metals.',
      image: '/images/service-3.jpg',
    },
    {
      title: 'Multi-Material Recycling',
      desc: 'Integrated solutions for plastics, wood, iron & e-waste.',
      image: '/images/service-4.jpg',
    },
  ];

  return (
    <section className="py-24 bg-[#1b1b1b] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="block text-xs font-bold uppercase tracking-widest text-[#ff5e14] mb-3">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
              Core <span className="text-[#ff5e14]">Services</span>
            </h2>
          </div>

          <a
            href="/services"
            className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-[#ff5e14] transition"
          >
            View All
            <span className="w-10 h-10 border-2 border-white group-hover:border-[#ff5e14] rounded-full flex items-center justify-center">
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* Image */}
              <div className="bg-[#2a2a2a] p-5">
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={350}
                    className="h-[240px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="bg-white px-7 py-8 shadow-xl -mt-14 mx-5 relative z-10">
                <h3 className="text-base font-extrabold uppercase text-[#111] mb-4 min-h-[48px]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="w-9 h-9 flex items-center justify-center border border-[#ff5e14] text-[#ff5e14] group-hover:bg-[#ff5e14] group-hover:text-white transition-all">
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
