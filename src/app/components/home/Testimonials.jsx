"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Operations Manager",
      company: "Shilpa Industries Ltd.",
      rating: 5,
      text: "VEE YEN has transformed how we handle industrial scrap. Their transparent pricing and reliable pickup schedules have eliminated all the uncertainty we used to face.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Sustainability Lead",
      company: "GreenTech Manufacturing",
      rating: 5,
      text: "The detailed ESG reporting and traceability documentation VEE YEN provides has been invaluable for our sustainability commitments and stakeholder reporting.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Amit Patel",
      position: "Plant Director",
      company: "Horizon Steel Works",
      rating: 5,
      text: "Professional, punctual, and fair. VEE YEN delivers exactly what they promise, every single time. A true partner in our waste-to-value strategy.",
      image: "/images/testimonial-3.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#1b1b1b] relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="border-r border-b border-white"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-12 bg-[#ff5e14]" />
            <span className="text-[#ff5e14] uppercase tracking-widest text-sm font-bold">
              Client Stories
            </span>
            <span className="h-[2px] w-12 bg-[#ff5e14]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-6">
            What Our <span className="text-[#ff5e14]">Partners Say</span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed">
            Trusted by industry leaders who demand reliability, transparency,
            and results.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ff5e14] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaQuoteLeft className="text-white text-xl" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#ff5e14] text-sm" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff5e14] to-[#ff8c14] flex items-center justify-center text-white font-black text-xl shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-[#111111] text-sm uppercase">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-[#ff5e14] font-bold">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 h-1 w-24 bg-[#ff5e14] mx-auto"
        />
      </div>
    </section>
  );
}
