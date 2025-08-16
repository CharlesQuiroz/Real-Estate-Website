"use client";
import React from "react";
import { Companies, GetSold } from "@/constants";

export default function OurServices() {
    return (
        <section className="w-full pb-12">
            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-base-content">GET IT SOLD!</h2>
                <div className="mt-2 h-1 w-16 bg-secondary mx-auto rounded"></div>
            </div>

            {/* Get Sold Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {GetSold.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
                    >
                        {/* Image */}
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Description */}
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-base">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Trusted Partners */}
            <div className="text-center mb-8 mt-10">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Trusted Partners
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-6 px-4">
                    {Companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center w-1/2 md:w-auto max-w-[150px]"
                        >
                            <img
                                src={company.img}
                                alt={company.title}
                                className="w-20 h-20 object-contain mb-2"
                            />
                            <p className="text-sm font-medium text-gray-700">{company.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
