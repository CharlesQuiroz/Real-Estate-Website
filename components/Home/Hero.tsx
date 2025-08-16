"use client";
import React, { useState } from "react";
import TypeWriter from "./Typewriter";

// Custom Dropdown
const CustomDropdown = ({
  options,
  placeholder,
  isMobile = false,
}: {
  options: string[];
  placeholder: string;
  isMobile?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(placeholder);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={`w-full text-left outline-none text-gray-700 bg-transparent flex items-center justify-between ${isMobile ? "py-2" : "py-0"
          }`}
      >
        <span>{selectedOption}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const dropdownOptions = ["Location", "Price Range", "Bedrooms", "Property Type"];

  return (
    <section className="relative isolate w-full min-h-[100svh] bg-[url('/hero-banner.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-36 pb-12 lg:pb-16 text-white">
        {/* Mobile (<= lg) */}
        <div className="lg:hidden space-y-6">
          {/* Headline + copy + image */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <TypeWriter />
            </div>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-6 max-w-sm">
              We&apos;ve been helping families find their dream homes for over 30 years. Your journey starts here.
            </p>

            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-white/90">
              <img src="/marci.webp" alt="Real Estate Agent" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Search */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <input
                type="text"
                placeholder="Search for a home..."
                className="w-full outline-none text-gray-700 text-base py-2"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4">
              <CustomDropdown options={dropdownOptions} placeholder="Location" isMobile />
            </div>

            <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl hover:bg-indigo-700 transition text-base font-semibold">
              Search
            </button>

            <div className="grid grid-cols-2 gap-3">
              {["Apartment", "Property", "Real Estate", "House"].map((item) => (
                <div
                  key={item}
                  className="bg-white/90 text-gray-800 font-semibold rounded-xl py-3 px-3 text-center cursor-pointer hover:bg-indigo-600 hover:text-white transition text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop (>= lg) */}
        <div className="hidden lg:block">
          {/* Top row: text + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 xl:gap-14">
            <div className="flex flex-col items-start gap-6">
              <TypeWriter />
              <p className="text-lg max-w-xl text-gray-200 leading-relaxed">
                We&apos;ve been helping families find their dream homes for over 30 years. Your journey starts here.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-xl ring-4 ring-white/90 animate-float">
                <img src="/marci.webp" alt="Real Estate Agent" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Search bar + chips */}
          <div className="mt-12 flex flex-col items-center">
            <div className="bg-white rounded-full shadow-lg flex items-center gap-4 px-6 py-4 w-full max-w-4xl">
              <input
                type="text"
                placeholder="Search for a home..."
                className="flex-1 outline-none text-gray-700 text-base px-2"
              />
              <div className="min-w-40">
                <CustomDropdown options={dropdownOptions} placeholder="Location" />
              </div>
              <button className="btn btn-primary text-white px-8 py-3 rounded-full hover:bg-neutral transition text-base font-medium whitespace-nowrap">
                Search
              </button>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-4 w-full max-w-4xl">
              {["Apartment", "Property", "Real Estate", "House"].map((item) => (
                <div
                  key={item}
                  className="bg-primary text-white font-semibold rounded-full py-4 px-2 text-center cursor-pointer
                 hover:bg-neutral hover:text-white
                 transition-all duration-300 ease-in-out text-base"
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
