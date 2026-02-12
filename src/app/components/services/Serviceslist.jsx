"use client";
import { useEffect, useState, useCallback, useMemo } from "react";

const SERVICES = [
  {
    title: "Industrial Scrap Collection",
    desc: "Scheduled and large-volume scrap pickup with reliable logistics. We ensure timely collection from factories, plants, and demolition sites with organized handling and transparent weighing processes.",
    img: "https://int-enviroguard.com/pub/media/resized/885x349/ves/blog/Blog-ScrapMetalMgmt_HeaderImage.jpg",
  },
  {
    title: "Material Processing & Grading",
    desc: "Expert sorting, dismantling, grading, and quality certification. Our structured processing system maximizes material recovery while ensuring consistent quality standards for downstream industries.",
    img: "https://cdn.theatlantic.com/media/mt/national/DSC06719.JPG",
  },
  {
    title: "Bulk Supply to Industry",
    desc: "Consistent supply of high-grade ferrous & non-ferrous metals. We maintain dependable inventory and streamlined distribution channels to support manufacturing and industrial demand.",
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Multi-Material Recycling",
    desc: "Plastics, wood, iron, mixed scrap & e-waste solutions. Our integrated recycling approach helps businesses responsibly manage diverse waste streams under one reliable partner.",
    img: "https://www.recyclingtoday.com/fileuploads/image/2024/09/24/stadleritalyweb.jpg",
  },
  {
    title: "Compliance & Documentation",
    desc: "Full chain-of-custody paperwork and regulatory support. We provide complete documentation, reporting, and compliance assistance to ensure transparency and audit readiness.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Tracking & Transparency",
    desc: "Real-time updates on material status, weight, and value. Our digital systems provide accurate tracking, reporting, and clear insights into every stage of the recycling process.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesList() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(SERVICES.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const sliderData = useMemo(() => [...SERVICES, ...SERVICES, ...SERVICES], []);
  const totalServices = SERVICES.length;

  // Responsive card count
  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      setVisibleCards(width < 640 ? 1 : width < 1024 ? 2 : 3);
    };

    updateCards();
    const handleResize = () => requestAnimationFrame(updateCards);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    if (currentIndex >= totalServices * 2) {
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setCurrentIndex(totalServices);
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    } else if (currentIndex < totalServices) {
      setIsTransitioning(false);
      requestAnimationFrame(() => {
        setCurrentIndex(totalServices + (currentIndex % totalServices));
        requestAnimationFrame(() => setIsTransitioning(true));
      });
    }
  }, [currentIndex, totalServices]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const translateX = `-${currentIndex * (100 / visibleCards)}%`;
  const transitionStyle = isTransitioning
    ? "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)"
    : "none";

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#ff5e14]" />
            <span className="text-[#ff5e14] uppercase text-sm font-semibold">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Comprehensive Scrap{" "}
            <span className="text-[#ff5e14]">Management Services</span>
          </h2>

          <p className="text-gray-600">
            We provide end-to-end industrial scrap and recycling solutions.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full text-black bg-white/90 backdrop-blur-sm shadow-lg hover:bg-[#ff5e14] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Previous service"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full text-black bg-white/90 backdrop-blur-sm shadow-lg hover:bg-[#ff5e14] hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Next service"
          >
            →
          </button>

          {/* Slider Track */}
          <div
            className="flex gap-6"
            style={{
              transform: `translateX(${translateX})`,
              transition: transitionStyle,
            }}
          >
            {sliderData.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="relative bg-white shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden rounded-lg flex flex-col h-full">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff5e14] to-orange-400" />

                  {/* Content */}
                  <div className="p-6 flex-grow transition-colors duration-300 group-hover:bg-orange-50/50">
                    <h3
                      className="text-lg font-bold mb-3 text-gray-800
                                   group-hover:text-[#ff5e14] transition-colors"
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative h-56 min-h-[224px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-[#ff5e14] to-orange-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(SERVICES.length + idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex % totalServices === idx
                  ? "bg-[#ff5e14] w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
