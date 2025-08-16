"use client";
import React from "react";
import { Services } from "@/constants";

export default function OurServices() {
  return (
    <section className="w-full py-12 bg-base-200">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-base-content">OUR SERVICES</h2>
        <div className="mt-2 h-1 w-16 bg-secondary mx-auto rounded"></div>
      </div>

      {/* Services Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {Services.map((Service, index) => {
          const Icon = Service.icon;
          return (
            <div
              key={index}
              className="relative group flex flex-col items-center text-center bg-white shadow-md rounded-xl p-8 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              {/* Hover Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundImage: `url(${Service.img})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6 rounded-full bg-accent p-4 transition-all duration-500 group-hover:bg-neutral">
                  <Icon className="w-12 h-12 text-base-100 transition-all duration-500 group-hover:text-base-100" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 transition-colors duration-500 group-hover:text-white">
                  {Service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base transition-colors duration-500 group-hover:text-gray-200">
                  {Service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
