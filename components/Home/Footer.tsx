"use client";

import React from "react";
import { Socials } from "@/constants";

export default function Footer() {
    return (
        <footer className="bg-base-300 text-base-content py-10 px-6">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-8">
                {/* Left Side - Logo & Powered by */}
                <div className="flex flex-col items-start">
                    {/* Logo */}
                    <img src="/logo.webp" alt="Real Estate Logo" className="h-12 mb-2" />
                    {/* Powered by */}
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                        Powered by
                        <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 underline"
                        >
                            <img
                                src="/vercel-icon.svg"
                                alt="Vercel"
                                className="w-4 h-4"
                            />
                            Vercel
                        </a>
                    </p>

                </div>

                {/* Right Side - Social Media */}
                <div className="flex flex-col items-start">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <ul className="space-y-2">
                        {Socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <li key={index} className="flex items-center gap-2">
                                    <Icon className="w-4 h-4" />
                                    <a
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {social.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-sm text-gray-500 border-t border-gray-300 pt-4">
                &copy; 2025  Marci METZGER Homes - All Rights Reserved.
            </div>
        </footer>
    );
}
