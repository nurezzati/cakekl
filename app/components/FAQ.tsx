"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "How far in advance should I place my order?",
        a: "We recommend placing custom cake orders at least 7–14 days in advance. For wedding cakes and large sculpted cakes, 4–6 weeks' notice is ideal to ensure the highest quality craftsmanship.",
    },
    {
        q: "Do you deliver across Kuala Lumpur and Petaling Jaya?",
        a: "Yes! We deliver to all areas within KL and PJ, including Bangsar, Mont Kiara, Damansara, Subang Jaya, Cheras, and more. Delivery fees vary by distance. Contact us via WhatsApp for a quote.",
    },
    {
        q: "Can I request halal-certified ingredients?",
        a: "Absolutely. All our cakes are prepared using halal-certified ingredients. Our kitchen strictly adheres to halal preparation standards, and we are happy to provide our certification upon request.",
    },
    {
        q: "What flavours are available?",
        a: "We offer a wide range of flavours including pandan, gula melaka, lychee rose, Belgian chocolate, Valrhona dark chocolate, burnt basque cheesecake, matcha, and seasonal specials. Custom flavour requests are welcome!",
    },
    {
        q: "Can I see a design before the cake is made?",
        a: "Yes! For custom cakes, we will provide you with a design sketch or mood board for your approval before we begin baking. Minor revisions are included at no extra cost.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers (Maybank, CIMB, Public Bank), DuitNow QR, and credit/debit cards. A 50% deposit is required to confirm your order, with the balance due upon delivery.",
    },
    {
        q: "Do you cater for corporate events and bulk orders?",
        a: "Yes, we offer special corporate rates for bulk orders, branded cakes with company logos, and event-themed dessert tables. Contact our team via WhatsApp to discuss your requirements.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-28 px-6 bg-[#0D0D0D]">
            <div className="max-w-3xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#C5A059] text-xs tracking-[0.4em] uppercase text-center mb-4"
                >
                    Got Questions?
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#F5ECD7]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Frequently Asked{" "}
                    <span className="text-[#C5A059]">Questions</span>
                </motion.h2>

                <div className="space-y-0">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            className="border-b border-[#C5A059]/15"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                            >
                                <span
                                    className={`text-sm md:text-base font-medium tracking-wide leading-snug pr-8 transition-colors duration-300 ${openIndex === i ? "text-[#C5A059]" : "text-[#F5ECD7] group-hover:text-[#C5A059]/80"
                                        }`}
                                >
                                    {faq.q}
                                </span>
                                <span className={`flex-none w-8 h-8 border flex items-center justify-center transition-all duration-300 ${openIndex === i ? "border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10" : "border-[#F5ECD7]/20 text-[#F5ECD7]/50"
                                    }`}>
                                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[#F5ECD7]/60 font-light leading-relaxed text-sm pb-6 pr-10">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
