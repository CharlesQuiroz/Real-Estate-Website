"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { carouselItems } from "@/constants";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  // ✅ Auto Slide Effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === carouselItems.length - 1 ? 0 : prev + 1
        );
      }, 5000); // change every 5 seconds
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <div className="p-4">
      <section
        className="relative w-full max-w-5xl mx-auto my-5 overflow-hidden rounded-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Wrapper */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <Image
                src={carouselItems[currentIndex].img}
                alt={carouselItems[currentIndex].title}
                fill
                className="object-cover rounded-xl"
                priority
              />
              {/* Overlay with Metadata */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">
                  {carouselItems[currentIndex].title}
                </h2>
                <p className="text-sm md:text-base max-w-xl mb-4">
                  {carouselItems[currentIndex].description}
                </p>
              </div> 
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-3 shadow hover:bg-white"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-black rounded-full p-3 shadow hover:bg-white"
        >
          ▶
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === i ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
