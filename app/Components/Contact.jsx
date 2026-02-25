"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [focused, setFocused] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        comments: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section className="w-full min-h-screen bg-white flex flex-col md:flex-row">

            {/* LEFT SIDE (unchanged) */}
            <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen overflow-hidden bg-gray-50 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="absolute top-0 right-0 w-[55%] h-[55%] rounded-bl-3xl"
                    style={{
                        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.92 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 w-[65%] max-w-xs drop-shadow-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=85"
                        alt="Art"
                        className="w-full h-auto rounded-2xl object-cover"
                        style={{ aspectRatio: "3/4" }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="absolute bottom-0 left-0 w-[40%] h-[35%] rounded-tr-3xl"
                    style={{ background: "linear-gradient(135deg,#f0e6d3,#e8d5b7)" }}
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 flex items-center justify-center px-10 py-20 md:py-0">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-md"
                >

                    <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
                        Get in touch
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 leading-tight">
                        Let’s start a <br />
                        <span className="text-gray-400 font-normal">creative journey.</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-10">

                        {/* Row 1: Name + Email */}
                        <div className="flex gap-8">
                            <InputField
                                label="Name"
                                type="text"
                                value={form.name}
                                onChange={(v) => setForm({ ...form, name: v })}
                                focused={focused === "name"}
                                onFocus={() => setFocused("name")}
                                onBlur={() => setFocused(null)}
                            />

                            <InputField
                                label="Email"
                                type="email"
                                value={form.email}
                                onChange={(v) => setForm({ ...form, email: v })}
                                focused={focused === "email"}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                            />
                        </div>

                        {/* Row 2: Phone */}
                        <InputField
                            label="Phone Number"
                            type="tel"
                            value={form.phone}
                            onChange={(v) => setForm({ ...form, phone: v })}
                            focused={focused === "phone"}
                            onFocus={() => setFocused("phone")}
                            onBlur={() => setFocused(null)}
                        />

                        {/* Comments */}
                        <div className="relative">
                            <textarea
                                rows={3}
                                value={form.comments}
                                onChange={(e) => setForm({ ...form, comments: e.target.value })}
                                onFocus={() => setFocused("comments")}
                                onBlur={() => setFocused(null)}
                                className="w-full bg-transparent border-0 border-b pb-2 text-gray-800 text-sm outline-none resize-none placeholder-gray-400"
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: focused === "comments" ? "#111" : "#d1d5db",
                                }}
                                placeholder="Comments / Event Details"
                            />

                            <motion.div
                                className="absolute bottom-0 left-0 h-[1.5px] bg-gray-900"
                                animate={{ width: focused === "comments" ? "100%" : "0%" }}
                                transition={{ duration: 0.35 }}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.94 }}
                                className="relative w-24 h-24 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold tracking-widest uppercase flex items-center justify-center overflow-hidden group"
                            >
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-gray-900"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.35 }}
                                />
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                    {submitted ? "Sent ✓" : "Submit"}
                                </span>
                            </motion.button>
                        </div>

                    </form>
                </motion.div>
            </div>
        </section>
    );
}

function InputField({ label, type, value, onChange, focused, onFocus, onBlur }) {
    return (
        <div className="relative flex-1">
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={label}
                className="w-full bg-transparent border-0 border-b pb-2 text-gray-800 text-sm outline-none placeholder-gray-400"
                style={{
                    borderBottomWidth: 1,
                    borderBottomColor: focused ? "#111" : "#d1d5db",
                }}
            />

            <motion.div
                className="absolute bottom-0 left-0 h-[1.5px] bg-gray-900"
                animate={{ width: focused ? "100%" : "0%" }}
                transition={{ duration: 0.35 }}
            />
        </div>
    );
}