"use client";

import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    const scrollTo = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="bg-[#0D0D0D] border-t border-[#C5A059]/15 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <button onClick={() => scrollTo("home")} className="cursor-pointer mb-4 block">
                            <span
                                className="text-3xl font-bold text-[#C5A059] tracking-widest"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                CakeKL
                            </span>
                            <span className="block text-xs tracking-[0.4em] text-[#F5ECD7]/50 mt-0.5">
                                EST 2020
                            </span>
                        </button>
                        <p className="text-[#F5ECD7]/45 text-sm font-light leading-relaxed max-w-xs">
                            Crafting edible art and lasting memories, one perfectly baked tier at a time.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-5">Navigate</h4>
                        <ul className="space-y-3">
                            {["home", "about", "menu", "gallery", "testimonial", "faq", "contact"].map((id) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        className="text-[#F5ECD7]/50 text-sm font-light hover:text-[#C5A059] transition-colors capitalize cursor-pointer"
                                    >
                                        {id}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-5">Connect</h4>
                        <div className="space-y-3 mb-6">
                            <a
                                href="https://wa.me/60123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#F5ECD7]/50 text-sm hover:text-[#25D366] transition-colors"
                            >
                                <MessageCircle size={16} /> WhatsApp Us
                            </a>
                            <a
                                href="https://instagram.com/cakekl.official"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#F5ECD7]/50 text-sm hover:text-[#E1306C] transition-colors"
                            >
                                <Instagram size={16} /> @cakekl.official
                            </a>
                            <a
                                href="https://facebook.com/cakekl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[#F5ECD7]/50 text-sm hover:text-[#4267B2] transition-colors"
                            >
                                <Facebook size={16} /> CakeKL
                            </a>
                        </div>
                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            href="https://wa.me/60123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#C5A059] text-[#C5A059] text-xs tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 cursor-pointer"
                        >
                            Order Now
                        </motion.a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#C5A059]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#F5ECD7]/25 text-xs font-light tracking-wider">
                        © {new Date().getFullYear()} CakeKL. All rights reserved. Crafted in Kuala Lumpur.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#C5A059]/40" />
                        <p className="text-[#F5ECD7]/25 text-xs font-light">Halal Certified &middot; KL&apos;s Finest Patisserie</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
