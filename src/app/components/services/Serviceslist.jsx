"use client";
import { useEffect, useState } from "react";

export default function Serviceslist() {
  const services = [
    {
      title: "Industrial Scrap Collection",
      desc: "Scheduled and large-volume scrap pickup with reliable logistics.",
      img: "https://images.unsplash.com/photo-1581093458791-9d42f7d0c4a6",
    },
    {
      title: "Material Processing & Grading",
      desc: "Expert sorting, dismantling, grading, and quality certification.",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    {
      title: "Bulk Supply to Industry",
      desc: "Consistent supply of high-grade ferrous & non-ferrous metals.",
      img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    },
    {
      title: "Multi-Material Recycling",
      desc: "Plastics, wood, iron, mixed scrap & e-waste solutions.",
      img: "https://images.unsplash.com/photo-1590650046871-92c887180603",
    },
    {
      title: "Compliance & Documentation",
      desc: "Full chain-of-custody paperwork and regulatory support.",
      img: "https://images.unsplash.com/photo-1587614203976-365c74645e83",
    },
    {
      title: "Digital Tracking & Transparency",
      desc: "Real-time updates on material status, weight, and value.",
      img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
    },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // 🔹 Responsive cards count
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = services.length - visibleCards;

  // 🔹 Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const prev = () => setIndex(index === 0 ? maxIndex : index - 1);
  const next = () => setIndex(index >= maxIndex ? 0 : index + 1);

  return (
    <section className="bg-gray-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#ff5e14]" />
            <p className="text-[#ff5e14] uppercase text-sm font-semibold">
              What We Do
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 mb-4">
            Comprehensive Scrap{" "}
            <span className="text-[#ff5e14]">Management Services</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            We provide end-to-end industrial scrap and recycling solutions
            designed to maximize value, ensure compliance, and support the
            circular economy.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-gray-700 shadow
                       hover:bg-[#ff5e14] hover:text-white transition"
          >
            ❮
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-gray-700 shadow
                       hover:bg-[#ff5e14] hover:text-white transition"
          >
            ❯
          </button>

          {/* Track */}
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex"
                style={{ minWidth: `${100 / visibleCards}%` }}
              >
                {/* Card */}
                <div className="relative bg-white shadow-sm hover:shadow-xl
                                transition-all duration-500 group
                                flex flex-col w-full overflow-hidden">

                  {/* Animated Color Strip */}
                  <div className="absolute inset-x-0 top-0 h-1
                                  bg-gradient-to-r from-[#ff5e14] via-orange-400 to-[#ff5e14]
                                  scale-x-0 group-hover:scale-x-100
                                  transition-transform duration-700 origin-left" />

                  {/* Content */}
                  <div className="p-6 flex-grow transition-colors duration-300
                                  group-hover:bg-[#ff5e14]/5">
                    <h3 className="text-lg font-bold mb-3
                                   group-hover:text-[#ff5e14] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="h-52 sm:h-56 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover
                                 transform group-hover:scale-110
                                 transition duration-700"
                    />
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-[4px] bg-[#ff5e14]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}