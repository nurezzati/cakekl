"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const stats = [
    { value: "500+", label: "Custom Cakes Delivered" },
    { value: "8+", label: "Years of Craft" },
    { value: "100%", label: "Made from Scratch" },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-28 px-6 bg-[#FEFCE8] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-[#C5A059] text-xs tracking-[0.4em] uppercase text-center mb-4"
                >
                    Our Story
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-20 text-[#121212]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    The Art of{" "}
                    <span className="text-[#C5A059]">Indulgence</span>
                </motion.h2>

                <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left — single image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative h-[600px] w-full overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&q=85"
                            alt="Artisan cake crafting"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right — text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h3
                                className="text-2xl md:text-3xl font-semibold text-[#121212] mb-6 leading-snug"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Born from a passion for perfection in every layer
                            </h3>
                            <p className="text-[#121212]/75 leading-relaxed mb-5 font-light">
                                Nestled in the heart of Kuala Lumpur, CakeKL was born from a simple belief:
                                every celebration deserves a cake as extraordinary as the moment itself.
                                Our pastry artisans blend classical French techniques with vibrant local
                                flavours to create edible masterpieces.
                            </p>
                            <p className="text-[#121212]/75 leading-relaxed mb-10 font-light">
                                From our studio kitchen in KL, we handcraft every tier, every rosette, every
                                sugar bloom with obsessive attention to detail — using only ethically sourced
                                premium Belgian chocolate, fresh local fruits, and real butter, always.
                            </p>

                            {/* Gold divider */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="flex-1 h-px bg-[#C5A059]/30" />
                                <div className="w-2 h-2 bg-[#C5A059] rotate-45" />
                                <div className="flex-1 h-px bg-[#C5A059]/30" />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map((s, i) => (
                                    <motion.div
                                        key={s.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                                        className="text-center"
                                    >
                                        <div
                                            className="text-2xl md:text-3xl font-bold text-[#C5A059] mb-1"
                                            style={{ fontFamily: "var(--font-playfair)" }}
                                        >
                                            {s.value}
                                        </div>
                                        <div className="text-[10px] md:text-xs text-[#121212]/50 tracking-wider uppercase leading-tight">
                                            {s.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
