'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const titles = [
    "Home",
    "Space",
    "Community",
];

export default function HeroText() {
    const [index, setIndex] = useState(0);
    const [subText, setSubText] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout: string | number | NodeJS.Timeout | undefined;
        const currentTitle = titles[index];

        if (typing) {
            if (subText.length < currentTitle.length) {
                timeout = setTimeout(() => {
                    setSubText(currentTitle.substring(0, subText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setTyping(false), 2000);
            }
        } else {
            if (subText.length > 0) {
                timeout = setTimeout(() => {
                    setSubText(currentTitle.substring(0, subText.length - 1));
                }, 50);
            } else {
                setTyping(true);
                setIndex((prev) => (prev + 1) % titles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [subText, typing, index]);

    return (
        <div className="font-semibold leading-tight" style={{ color: "var(--color-foreground)" }}>
            
            {/* ✅ Mobile Version (from Second Code) */}
            <div className="block lg:hidden text-center">
                <h1 className="text-2xl mb-1">Where happiness</h1>
                <h1 className="text-2xl mb-2">begins in your new</h1>
                <span className="relative block">
                    <h1 className="invisible text-2xl">
                        {titles.reduce((a, b) => a.length > b.length ? a : b)}
                    </h1>
                    <span
                        className={cn(
                            "absolute top-0 left-1/2 transform -translate-x-1/2 text-transparent bg-clip-text text-2xl",
                            "bg-gradient-to-r from-green-500 to-yellow-500"
                        )}
                    >
                        {subText}
                        <motion.span
                            className="text-green-500"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            |
                        </motion.span>
                    </span>
                </span>
            </div>

            {/* ✅ Desktop & Medium+ Version (from First Code) */}
            <div className="hidden lg:flex flex-col text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="mr-2">Where happiness begins in your new</span>
                <span className="relative inline-block">
                    <h1 className="invisible inline">
                        {titles.reduce((a, b) => a.length > b.length ? a : b)}
                    </h1>
                    <span
                        className={cn(
                            "absolute top-0 left-0 text-transparent bg-clip-text",
                            "bg-gradient-to-r from-primary to-accent"
                        )}
                    >
                        {subText}
                        <motion.span
                            className="text-green-500"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            |
                        </motion.span>
                    </span>
                </span>
            </div>
        </div>
    );
}
