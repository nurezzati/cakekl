"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=1920&q=90"
                    alt="Artisan cake hero"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/50 to-[#121212]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/60 via-transparent to-[#121212]/40" />
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-[#C5A059]/40"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Pre-heading */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.3em" }}
                    animate={{ opacity: 1, letterSpacing: "0.5em" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-[#C5A059] text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-light"
                >
                    Kuala Lumpur&apos;s Finest
                </motion.p>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    <span className="block text-[#F5ECD7]">Crafted with</span>
                    <span className="block gold-shimmer mt-2">Passion &amp; Flour</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-[#F5ECD7]/70 text-base md:text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    Bespoke artisanal cakes for every milestone — handcrafted in the heart of KL with
                    the finest ingredients.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(197,160,89,0.5)" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollTo("contact")}
                        className="px-10 py-4 bg-[#C5A059] text-[#121212] text-sm font-bold tracking-[0.2em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#D4B578] gold-glow"
                    >
                        Order Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollTo("menu")}
                        className="px-10 py-4 border border-[#F5ECD7]/40 text-[#F5ECD7] text-sm font-light tracking-[0.2em] uppercase cursor-pointer hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300"
                    >
                        Explore Menu
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => scrollTo("about")}
                >
                    <span className="text-[#F5ECD7]/40 text-xs tracking-widest">SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-px h-10 bg-gradient-to-b from-[#C5A059] to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
