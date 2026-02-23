"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Clock, Instagram, Send } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        occasion: "",
        date: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = () => {
        const msg = encodeURIComponent(
            `Hi CakeKL! 🎂\n\nName: ${form.name}\nPhone: ${form.phone}\nOccasion: ${form.occasion}\nDate Needed: ${form.date}\n\nDetails: ${form.message}\n\nLooking forward to hearing from you!`
        );
        window.open(`https://wa.me/60123456789?text=${msg}`, "_blank");
    };

    const inputClass =
        "w-full bg-[#1A1A1A] border border-[#C5A059]/20 text-[#F5ECD7] text-sm px-4 py-3.5 font-light placeholder-[#F5ECD7]/30 focus:outline-none focus:border-[#C5A059] transition-colors duration-300";

    return (
        <section id="contact" className="py-28 px-6 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[#C5A059] text-xs tracking-[0.4em] uppercase text-center mb-4"
                >
                    Get In Touch
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-center mb-4 text-[#F5ECD7]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Find Us in{" "}
                    <span className="text-[#C5A059]">KL</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[#F5ECD7]/50 text-center max-w-lg mx-auto mb-16 font-light"
                >
                    Let&apos;s create something beautiful together. Reach us via WhatsApp for the fastest response.
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left — Map + Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Map Embed Placeholder */}
                        <div className="relative w-full h-72 overflow-hidden border border-[#C5A059]/20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.33584793804!2d101.6177565!3d3.1391196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                                className="w-full h-full grayscale opacity-70"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.8)" }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="CakeKL Location in Kuala Lumpur"
                            />
                            {/* Map overlay label */}
                            <div className="absolute bottom-4 left-4 bg-[#121212]/90 border border-[#C5A059]/30 px-4 py-2">
                                <p className="text-[#C5A059] text-xs tracking-wider font-medium">CakeKL Studio</p>
                                <p className="text-[#F5ECD7]/60 text-xs">Bangsar, Kuala Lumpur</p>
                            </div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: MapPin, label: "Studio", value: "Jalan Telawi 3, Bangsar, KL 59100" },
                                { icon: Phone, label: "WhatsApp", value: "+60 12-345 6789" },
                                { icon: Clock, label: "Hours", value: "Mon–Sat: 10am – 7pm" },
                                { icon: Instagram, label: "Instagram", value: "@cakekl.official" },
                            ].map(({ icon: Icon, label, value }) => (
                                <div
                                    key={label}
                                    className="bg-[#1A1A1A] border border-[#C5A059]/15 p-4 flex gap-3 items-start"
                                >
                                    <Icon size={16} className="text-[#C5A059] mt-0.5 flex-none" />
                                    <div>
                                        <p className="text-[#F5ECD7]/40 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                                        <p className="text-[#F5ECD7] text-sm font-light">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* WhatsApp direct CTA */}
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://wa.me/60123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-[#25D366] text-[#121212] font-semibold py-4 px-6 text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#1ebe5d] gold-glow cursor-pointer"
                        >
                            <MessageCircle size={20} />
                            Chat with Us on WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Right — Order Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="bg-[#1A1A1A] border border-[#C5A059]/15 p-8"
                    >
                        {/* Gold top border */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mb-8" />

                        <h3
                            className="text-xl font-semibold text-[#F5ECD7] mb-2"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Request Your Cake
                        </h3>
                        <p className="text-[#F5ECD7]/40 text-xs font-light mb-8">
                            Fill in your details and we&apos;ll send you a quote via WhatsApp.
                        </p>

                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                value={form.name}
                                onChange={handleChange}
                                className={inputClass}
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="WhatsApp Number (e.g. 012-345 6789)"
                                value={form.phone}
                                onChange={handleChange}
                                className={inputClass}
                            />
                            <select
                                name="occasion"
                                value={form.occasion}
                                onChange={handleChange}
                                className={`${inputClass} cursor-pointer`}
                            >
                                <option value="" disabled>
                                    Select Occasion
                                </option>
                                {[
                                    "Wedding Cake",
                                    "Birthday Cake",
                                    "Anniversary Cake",
                                    "Baby Shower",
                                    "Corporate Event",
                                    "Hari Raya / Festival",
                                    "Other",
                                ].map((o) => (
                                    <option key={o} value={o} className="bg-[#1A1A1A]">
                                        {o}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="date"
                                name="date"
                                value={form.date}
                                onChange={handleChange}
                                className={inputClass}
                            />
                            <textarea
                                name="message"
                                placeholder="Tell us about your dream cake — flavour, design, number of tiers, guests..."
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className={`${inputClass} resize-none`}
                            />

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(197,160,89,0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleWhatsApp}
                                className="w-full flex items-center justify-center gap-3 bg-[#C5A059] text-[#121212] font-bold py-4 text-sm tracking-[0.15em] uppercase cursor-pointer hover:bg-[#D4B578] transition-all duration-300"
                            >
                                <Send size={16} />
                                Send via WhatsApp
                            </motion.button>

                            <p className="text-[#F5ECD7]/30 text-xs text-center font-light">
                                We typically respond within 2 hours during business hours.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
