"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "Aisha Rahman",
        location: "Bangsar, KL",
        review:
            "CakeKL crafted the most breathtaking wedding cake for us. The pandan and coconut flavours were absolutely divine — our guests couldn't stop raving about it!",
        stars: 5,
        occasion: "Wedding Cake",
    },
    {
        name: "Jason Lim",
        location: "Damansara, PJ",
        review:
            "Ordered a sculpted 3D cake for my son's birthday and it exceeded every expectation. The detail was insane and the taste was even better. 100% recommending CakeKL!",
        stars: 5,
        occasion: "Birthday Cake",
    },
    {
        name: "Priya Nair",
        location: "Mont Kiara, KL",
        review:
            "The burnt basque cheesecake was the star of our office party. Creamy, perfectly caramelised, and arrived beautifully packaged. Will definitely order again.",
        stars: 5,
        occasion: "Cheesecake",
    },
    {
        name: "Haziq Zulkifli",
        location: "Subang Jaya, PJ",
        review:
            "Impeccable craftsmanship and the customer service was so warm and professional. They accommodated all our last-minute changes without any fuss.",
        stars: 5,
        occasion: "Anniversary Cake",
    },
    {
        name: "Michelle Tan",
        location: "Cheras, KL",
        review:
            "Ordered the floral tier cake for my mum's 60th birthday. She was moved to tears by the beauty of it. The rose lychee flavour was extraordinary.",
        stars: 5,
        occasion: "Birthday Cake",
    },
    {
        name: "Farah Aziz",
        location: "Petaling Jaya, PJ",
        review:
            "CakeKL's Hari Raya kuih-inspired cake was a showstopper at our family gathering. Perfectly blended traditional flavours with a modern aesthetic.",
        stars: 5,
        occasion: "Festive Cake",
    },
];

export default function Testimonial() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        slidesToScroll: 1,
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section id="testimonial" className="py-28 px-6 bg-[#121212] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#C5A059] text-xs tracking-[0.4em] uppercase text-center mb-4"
                >
                    What Our Clients Say
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#F5ECD7]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Loved Across{" "}
                    <span className="text-[#C5A059]">KL & PJ</span>
                </motion.h2>

                {/* Embla Carousel */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6 pl-4">
                            {testimonials.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.08 }}
                                    className="flex-none w-[90%] md:w-[45%] lg:w-[32%] bg-[#1A1A1A] border border-[#C5A059]/15 p-8 relative"
                                >
                                    {/* Gold top border */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-5">
                                        {[...Array(t.stars)].map((_, si) => (
                                            <Star key={si} size={14} fill="#C5A059" className="text-[#C5A059]" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-[#F5ECD7]/75 font-light leading-relaxed text-sm mb-7 italic">
                                        &ldquo;{t.review}&rdquo;
                                    </p>

                                    {/* Divider */}
                                    <div className="h-px bg-[#C5A059]/20 mb-5" />

                                    {/* Author */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[#F5ECD7] font-medium text-sm">{t.name}</div>
                                            <div className="text-[#F5ECD7]/40 text-xs mt-0.5 tracking-wide">{t.location}</div>
                                        </div>
                                        <span className="text-[9px] uppercase tracking-widest text-[#C5A059] bg-[#C5A059]/10 px-3 py-1 border border-[#C5A059]/20">
                                            {t.occasion}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollPrev}
                            className="w-12 h-12 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059]/10 transition-colors cursor-pointer"
                        >
                            <ChevronLeft size={20} />
                        </motion.button>
                        <div className="w-16 h-px bg-[#C5A059]/30" />
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollNext}
                            className="w-12 h-12 border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059]/10 transition-colors cursor-pointer"
                        >
                            <ChevronRight size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
