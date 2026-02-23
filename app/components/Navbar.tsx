"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonial", href: "#testimonial" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active link based on scroll position
            const sections = navLinks.map((l) => l.href.slice(1));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveLink(`#${section}`);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
        setMenuOpen(false);
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-[#121212]/85 backdrop-blur-xl border-b border-[#C5A059]/20 shadow-lg shadow-black/40"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.button
                        onClick={() => handleLinkClick("#home")}
                        whileHover={{ scale: 1.02 }}
                        className="flex flex-col leading-none cursor-pointer"
                    >
                        <span
                            className="text-2xl font-bold tracking-widest text-[#C5A059]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            CakeKL
                        </span>
                        <span className="text-xs tracking-[0.4em] text-[#F5ECD7]/70 font-light">
                            EST 2020
                        </span>
                    </motion.button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={`relative text-sm font-medium tracking-wider transition-colors duration-300 cursor-pointer group ${activeLink === link.href
                                    ? "text-[#C5A059]"
                                    : "text-[#F5ECD7]/70 hover:text-[#F5ECD7]"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute -bottom-1 left-0 h-px bg-[#C5A059] transition-all duration-300 ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </button>
                        ))}
                    </nav>

                    {/* CTA */}
                    <motion.button
                        onClick={() => handleLinkClick("#contact")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="hidden md:block px-5 py-2 border border-[#C5A059] text-[#C5A059] text-sm tracking-wider font-medium hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 cursor-pointer"
                    >
                        ORDER NOW
                    </motion.button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-[#F5ECD7] cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[#0D0D0D]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.button
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06 }}
                                onClick={() => handleLinkClick(link.href)}
                                className="text-2xl font-light tracking-widest text-[#F5ECD7] hover:text-[#C5A059] transition-colors cursor-pointer"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                {link.label}
                            </motion.button>
                        ))}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.06 }}
                            onClick={() => handleLinkClick("#contact")}
                            className="mt-4 px-8 py-3 border border-[#C5A059] text-[#C5A059] tracking-widest hover:bg-[#C5A059] hover:text-[#121212] transition-all cursor-pointer"
                        >
                            ORDER NOW
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
