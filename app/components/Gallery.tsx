"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=600&q=85",
        alt: "Floral signature cake",
    },
    {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85",
        alt: "Multi-tier wedding cake",
    },
    {
        src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=85",
        alt: "Chocolate ganache cake",
    },
    {
        src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=85",
        alt: "Fruit tart decoration",
    },
    {
        src: "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600&q=85",
        alt: "Sculpted birthday cake",
    },
    {
        src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=85",
        alt: "Pastel celebration cake",
    },
    {
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=85",
        alt: "Layered cream cake",
    },
    {
        src: "https://images.unsplash.com/photo-1706463996571-7a2d9bb5e5fa?w=600&q=85",
        alt: "Gold leaf cake decoration",
    },
    {
        src: "https://images.unsplash.com/photo-1602351447937-745cb720612f?w=600&q=85",
        alt: "Elegant drip cake",
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-28 px-6 bg-[#FEFCE8]">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#C5A059] text-xs tracking-[0.4em] uppercase text-center mb-4"
                >
                    Our Portfolio
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#121212]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Edible{" "}
                    <span className="text-[#C5A059]">Gallery</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-[#121212]/50 text-center max-w-lg mx-auto mb-16 font-light"
                >
                    A glimpse into the creations we've crafted for KL&apos;s most cherished celebrations.
                </motion.p>

                {/* Symmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={img.src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className="group relative overflow-hidden cursor-pointer aspect-square"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gold border overlay on hover */}
                            <div className="absolute inset-0 border-0 group-hover:border-[12px] border-white/20 transition-all duration-500" />

                            {/* Caption */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                                <p className="text-white text-xs tracking-widest uppercase font-medium text-center px-4">
                                    {img.alt}
                                </p>
                                <div className="w-8 h-px bg-[#C5A059] mt-3" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
