"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

function InputField({ label, type = "text", value, onChange, focused, onFocus, onBlur }) {
    return (
        <div style={{ position: "relative", flex: 1 }}>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={label}
                style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${focused ? "#8B6A4A" : "rgba(0,0,0,0.15)"}`,
                    paddingBottom: 10,
                    fontSize: "0.875rem",
                    color: "#1a1a1a",
                    outline: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    transition: "border-color 0.3s",
                }}
            />
            <motion.div
                style={{
                    position: "absolute", bottom: 0, left: 0,
                    height: 1.5, background: "#8B6A4A",
                }}
                animate={{ width: focused ? "100%" : "0%" }}
                transition={{ duration: 0.35 }}
            />
        </div>
    );
}

export default function ContactSection() {
    const [focused, setFocused] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", comments: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div style={{ background: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .grain {
          position: fixed; inset: 0; pointer-events: none; z-index: 50; opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .ink-blob {
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%;
          animation: morph 9s ease-in-out infinite alternate;
        }
        @keyframes morph {
          0%   { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          50%  { border-radius: 40% 60% 30% 70% / 70% 40% 60% 50%; }
          100% { border-radius: 55% 45% 65% 35% / 45% 65% 35% 65%; }
        }

        input::placeholder, textarea::placeholder {
          color: rgba(0,0,0,0.32);
          font-family: 'DM Sans', sans-serif;
        }

        .contact-layout {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
        }

        .contact-left {
          width: 50%;
          min-height: 100vh;
        }

        .contact-right {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 60px;
        }

        .form-row {
          display: flex;
          gap: 32px;
        }

        @media (max-width: 768px) {
          .contact-layout { flex-direction: column; }
          .contact-left { width: 100%; min-height: 55vw; }
          .contact-right { width: 100%; padding: 48px 24px 60px; }
          .form-row { flex-direction: column; gap: 32px; }
          .submit-row { justify-content: flex-start !important; }
        }
      `}</style>

            <div className="grain" />

            {/* Ambient blobs */}
            <div className="ink-blob" style={{
                position: "fixed", bottom: -100, right: -100, zIndex: 0,
                width: 340, height: 340,
                background: "rgba(233,220,201,0.28)", pointerEvents: "none",
            }} />
            <div className="ink-blob" style={{
                position: "fixed", top: 80, left: -80, zIndex: 0,
                width: 240, height: 240,
                background: "rgba(201,218,204,0.2)", pointerEvents: "none",
                animationDelay: "3.5s",
            }} />

            <section className="contact-layout" style={{ position: "relative", zIndex: 1 }}>

                {/* ── LEFT — image panel ── */}
                <div
                    className="contact-left"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        background: "#E9DCC9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {/* Top-right warm dark block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        style={{
                            position: "absolute", top: 0, right: 0,
                            width: "55%", height: "55%",
                            borderBottomLeftRadius: 40,
                            background: "linear-gradient(135deg, #1a1a1a 0%, #2d1f14 100%)",
                        }}
                    />

                    {/* Bottom-left warm accent block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        style={{
                            position: "absolute", bottom: 0, left: 0,
                            width: "40%", height: "35%",
                            borderTopRightRadius: 40,
                            background: "linear-gradient(135deg, #C9DACC 0%, #a8c4ab 100%)",
                        }}
                    />

                    {/* Ink blob decoration */}
                    <div className="ink-blob" style={{
                        position: "absolute", top: "12%", left: "8%",
                        width: 80, height: 80,
                        background: "rgba(139,106,74,0.2)",
                        pointerEvents: "none", zIndex: 2,
                    }} />

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.92 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{
                            position: "relative", zIndex: 10,
                            width: "62%", maxWidth: 300,
                            borderRadius: 24,
                            overflow: "hidden",
                            boxShadow: "0 40px 80px rgba(0,0,0,0.22)",
                            border: "4px solid #fff",
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=85"
                            alt="Art Studio"
                            style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", display: "block" }}
                        />
                    </motion.div>

                    {/* Floating info pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        style={{
                            position: "absolute", bottom: "12%", right: "8%",
                            zIndex: 20,
                            background: "rgba(247,243,238,0.92)",
                            backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                            borderRadius: 16, padding: "14px 18px",
                            boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                            border: "1px solid rgba(139,106,74,0.15)",
                        }}
                    >
                        <p style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8B6A4A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                            Now Enrolling
                        </p>
                        <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1a1a1a", fontFamily: "'Playfair Display', serif" }}>
                            March 2025 Batch
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 4 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#5CAE7A" }} />
                            <p style={{ fontSize: "0.68rem", color: "rgba(0,0,0,0.45)" }}>Limited seats available</p>
                        </div>
                    </motion.div>
                </div>

                {/* ── RIGHT — form ── */}
                <div className="contact-right">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ width: "100%", maxWidth: 420 }}
                    >
                        {/* Label */}
                        <p style={{
                            fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                            letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14,
                        }}>
                            Get in Touch
                        </p>

                        {/* Heading */}
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.9rem, 4vw, 2.8rem)",
                            fontWeight: 800, color: "#1a1a1a",
                            lineHeight: 1.1, letterSpacing: "-0.025em",
                            marginBottom: 40,
                        }}>
                            Let's start a<br />
                            <em style={{ fontStyle: "italic", color: "#8B6A4A" }}>creative journey.</em>
                        </h2>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>

                                {/* Name + Email */}
                                <div className="form-row">
                                    <InputField
                                        label="Your Name"
                                        type="text"
                                        value={form.name}
                                        onChange={(v) => setForm({ ...form, name: v })}
                                        focused={focused === "name"}
                                        onFocus={() => setFocused("name")}
                                        onBlur={() => setFocused(null)}
                                    />
                                    <InputField
                                        label="Email Address"
                                        type="email"
                                        value={form.email}
                                        onChange={(v) => setForm({ ...form, email: v })}
                                        focused={focused === "email"}
                                        onFocus={() => setFocused("email")}
                                        onBlur={() => setFocused(null)}
                                    />
                                </div>

                                {/* Phone */}
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
                                <div style={{ position: "relative" }}>
                                    <textarea
                                        rows={3}
                                        value={form.comments}
                                        onChange={(e) => setForm({ ...form, comments: e.target.value })}
                                        onFocus={() => setFocused("comments")}
                                        onBlur={() => setFocused(null)}
                                        placeholder="Tell us about your child / any questions"
                                        style={{
                                            width: "100%",
                                            background: "transparent",
                                            border: "none",
                                            borderBottom: `1px solid ${focused === "comments" ? "#8B6A4A" : "rgba(0,0,0,0.15)"}`,
                                            paddingBottom: 10,
                                            fontSize: "0.875rem",
                                            color: "#1a1a1a",
                                            outline: "none",
                                            resize: "none",
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 400,
                                            transition: "border-color 0.3s",
                                            display: "block",
                                        }}
                                    />
                                    <motion.div
                                        style={{
                                            position: "absolute", bottom: 0, left: 0,
                                            height: 1.5, background: "#8B6A4A",
                                        }}
                                        animate={{ width: focused === "comments" ? "100%" : "0%" }}
                                        transition={{ duration: 0.35 }}
                                    />
                                </div>

                                {/* Submit */}
                                <div className="submit-row" style={{ display: "flex", alignItems: "center", gap: 20, paddingTop: 8 }}>
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.06 }}
                                        whileTap={{ scale: 0.94 }}
                                        style={{
                                            position: "relative",
                                            width: 88, height: 88,
                                            borderRadius: "50%",
                                            border: "1.5px solid rgba(0,0,0,0.18)",
                                            background: "transparent",
                                            cursor: "pointer",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <motion.span
                                            style={{
                                                position: "absolute", inset: 0,
                                                borderRadius: "50%",
                                                background: "#1a1a1a",
                                                display: "block",
                                            }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileHover={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.35 }}
                                        />
                                        <span style={{
                                            position: "relative", zIndex: 1,
                                            fontSize: "0.65rem", fontWeight: 700,
                                            letterSpacing: "0.1em", textTransform: "uppercase",
                                            color: submitted ? "#5CAE7A" : "#1a1a1a",
                                            transition: "color 0.3s",
                                            fontFamily: "'DM Sans', sans-serif",
                                        }}
                                            className="btn-label"
                                        >
                                            {submitted ? "Sent ✓" : "Submit"}
                                        </span>

                                        {/* hover text color override via inline trick */}
                                        <style>{`.btn-label:hover { color: #fff !important; }`}</style>
                                    </motion.button>

                                    <p style={{ fontSize: "0.78rem", color: "rgba(0,0,0,0.38)", fontWeight: 300, lineHeight: 1.6 }}>
                                        We'll get back to you<br />within 24 hours.
                                    </p>
                                </div>

                            </div>
                        </form>

                        {/* Contact info strip */}
                        <div style={{
                            marginTop: 48, paddingTop: 28,
                            borderTop: "1px solid rgba(0,0,0,0.08)",
                            display: "flex", flexDirection: "column", gap: 12,
                        }}>
                            {[
                                { icon: Mail, text: "hello@sanzartstudio.com" },
                                { icon: Phone, text: "+91 98765 43210" },
                                { icon: MapPin, text: "Pimpri-Chinchwad, Pune" },
                            ].map(({ icon: Icon, text }) => (
                                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <div style={{
                                        width: 30, height: 30, borderRadius: 8,
                                        background: "#E9DCC9",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={13} color="#8B6A4A" />
                                    </div>
                                    <span style={{ fontSize: "0.82rem", color: "rgba(0,0,0,0.5)", fontWeight: 400 }}>
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}