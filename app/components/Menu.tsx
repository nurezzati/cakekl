"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const menuItems = [
    {
        category: "Signature Layer Cakes",
        description: "Multi-tiered masterpieces with fresh floral décor and exotic flavour combinations.",
        price: "From RM180",
        image: "https://images.unsplash.com/photo-1622576890453-8e50b6f7d5b0?w=600&q=80"
    },
    {
        category: "Chocolate Indulgence",
        description: "Rich Belgian chocolate cakes — from truffle ganache to molten lava glory.",
        price: "From RM150",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80",
    },
    {
        category: "Fruit & Floral",
        description: "Light sponge layers adorned with seasonal fresh fruits and edible blooms.",
        price: "From RM140",
        image: "https://images.unsplash.com/photo-1579356094148-9b74dab60f5b?w=1170&q=80",
    },
    {
        category: "Malay Heritage Flavours",
        description: "Pandan, gula melaka, and coconut-infused cakes celebrating local roots.",
        price: "From RM160",
        image: "https://images.unsplash.com/photo-1694837492769-76b4b4a87f17?w=765&q=80",
    },
    {
        category: "Cheesecake Creations",
        description: "Japanese-style burnt basque and NY baked cheesecakes with premium toppings.",
        price: "From RM120",
        image: "https://images.unsplash.com/photo-1695088957322-e253097aa640?w=600&q=80",
    },
    {
        category: "Custom Sculpted Cakes",
        description: "Fully bespoke 3D sculpted cakes — from cartoon characters to architectural landmarks.",
        price: "Custom Quote",
        image: "https://images.unsplash.com/photo-1671686400734-d9d0a4934f5a?w=1170&q=80",
    },
];

export default function Menu() {
    return (
        <section id="menu" className="py-28 px-6 bg-[#F5ECD7]">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#C5A059] text-xs tracking-[0.4em] uppercase text-center mb-4"
                >
                    Our Offerings
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#121212]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    The{" "}
                    <span className="text-[#C5A059]">Menu</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-[#121212]/50 text-center max-w-lg mx-auto mb-16 font-light"
                >
                    Every cake tells a story. Choose your canvas.
                </motion.p>

                {/* Symmetrical Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {menuItems.map((item, i) => (
                        <motion.div
                            key={item.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex flex-col group bg-[#FEFCE8] shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
                        >
                            {/* Image */}
                            <div className="relative h-100 w-full overflow-hidden mb-6 rounded-t-lg">
                                <div className="relative w-full h-full overflow-hidden rounded-t-lg">
                                    <Image
                                        src={item.image}
                                        alt={item.category}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col px-6 pb-6 pt-4">{/*text padding left-right(x-axis), top,bottom below images*/}
                                <div className="flex justify-between items-start mb-2">
                                    <h3
                                        className="text-[#121212] font-semibold text-lg"
                                        style={{ fontFamily: "var(--font-playfair)" }}
                                    >
                                        {item.category}
                                    </h3>
                                    <span className="text-[#C5A059] font-medium text-sm whitespace-nowrap ml-4">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-[#121212]/60 text-sm leading-relaxed font-light mb-4">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-[#C5A059]/10">
                                    <button className="text-[#C5A059] text-xs tracking-widest uppercase font-medium hover:text-[#D4B578] transition-colors">
                                        Order details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-20"
                >
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-10 py-3.5 bg-[#121212] text-[#F5ECD7] text-sm tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 cursor-pointer shadow-lg"
                    >
                        Request Custom Cake
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
