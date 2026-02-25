"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const row1 = [
    {
        text: "My daughter looks forward to every class. She's come home with the most beautiful paintings — her confidence has grown so much!",
        name: "Priya Sharma",
        role: "Parent of a 7-year-old",
        initials: "PS",
        bg: "#E9DCC9",
        fg: "#8B6A4A",
    },
    {
        text: "Sanz Art Studio is a hidden gem. The teachers are incredibly patient and nurturing. My son absolutely loves it here.",
        name: "Rahul Mehta",
        role: "Parent of a 9-year-old",
        initials: "RM",
        bg: "#1a1a1a",
        fg: "#E9DCC9",
    },
    {
        text: "We've tried multiple studios but nothing compares. The environment is warm, creative, and perfectly suited for young kids.",
        name: "Ananya Iyer",
        role: "Parent of a 6-year-old",
        initials: "AI",
        bg: "#C9DACC",
        fg: "#2a4a2e",
    },
    {
        text: "Every week my child comes home buzzing with excitement. The crafts they make are genuinely impressive — real skill building!",
        name: "Deepika Nair",
        role: "Parent of an 8-year-old",
        initials: "DN",
        bg: "#E9DCC9",
        fg: "#8B6A4A",
    },
    {
        text: "The studio has a beautiful, calming energy. My shy daughter opened up completely after just a few sessions. Highly recommended.",
        name: "Kavya Reddy",
        role: "Parent of a 5-year-old",
        initials: "KR",
        bg: "#1a1a1a",
        fg: "#E9DCC9",
    },
];

const row2 = [
    {
        text: "Best investment we've made for our child's development. The art sessions are thoughtfully designed and incredibly fun.",
        name: "Suresh Pillai",
        role: "Parent of a 10-year-old",
        initials: "SP",
        bg: "#C9DACC",
        fg: "#2a4a2e",
    },
    {
        text: "My son used to say he wasn't creative. Now he won't stop drawing! The instructors here have a real gift for teaching.",
        name: "Meena Krishnan",
        role: "Parent of a 8-year-old",
        initials: "MK",
        bg: "#E9DCC9",
        fg: "#8B6A4A",
    },
    {
        text: "The trial class convinced us instantly. The attention to each child's individual style is something you rarely find elsewhere.",
        name: "Arjun Bose",
        role: "Parent of a 7-year-old",
        initials: "AB",
        bg: "#1a1a1a",
        fg: "#E9DCC9",
    },
    {
        text: "Such a safe, joyful space. My twins both attend different classes and they both adore their teachers. Truly a special place.",
        name: "Lakshmi Venkat",
        role: "Parent of twin 6-year-olds",
        initials: "LV",
        bg: "#C9DACC",
        fg: "#2a4a2e",
    },
    {
        text: "Enrolling was the best decision. My daughter's focus and patience have improved so much — benefits beyond just art!",
        name: "Divya Menon",
        role: "Parent of a 9-year-old",
        initials: "DM",
        bg: "#E9DCC9",
        fg: "#8B6A4A",
    },
];

function TestimonialCard({ t }) {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 24px 48px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
                width: 300,
                flexShrink: 0,
                background: "#fff",
                borderRadius: 20,
                padding: "28px 26px",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                cursor: "default",
                userSelect: "none",
                display: "flex",
                flexDirection: "column",
                gap: 16,
            }}
        >
            {/* Quote mark */}
            <svg width="28" height="20" viewBox="0 0 30 22" fill="#E9DCC9">
                <path d="M0 22V13.2C0 5.573 4.667 1.173 14 0l1.167 2.347C10.5 3.52 8.167 5.867 7.583 9.383H13.2V22H0zm16.8 0V13.2C16.8 5.573 21.467 1.173 30.8 0L32 2.347c-4.667 1.173-7 3.52-7.583 7.036H30V22H16.8z" />
            </svg>

            <p style={{
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "rgba(0,0,0,0.65)",
                fontWeight: 300,
                fontFamily: "'DM Sans', sans-serif",
                flexGrow: 1,
            }}>
                {t.text}
            </p>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: t.bg, color: t.fg,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700, fontSize: "0.8rem",
                    flexShrink: 0,
                }}>
                    {t.initials}
                </div>
                <div>
                    <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1a1a1a", fontFamily: "'DM Sans', sans-serif" }}>
                        {t.name}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "rgba(0,0,0,0.4)", marginTop: 2, fontFamily: "'DM Sans', sans-serif" }}>
                        {t.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function InfiniteTrack({ testimonials, direction = "left", duration = 40 }) {
    const [paused, setPaused] = useState(false);
    const items = [...testimonials, ...testimonials];
    const animName = direction === "left" ? "marquee-left" : "marquee-right";

    return (
        <div
            style={{ overflow: "hidden", width: "100%" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                style={{
                    display: "flex",
                    gap: 14,
                    padding: "8px 0",
                    width: "max-content",
                    animationName: animName,
                    animationDuration: `${duration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: paused ? "paused" : "running",
                }}
            >
                {items.map((t, i) => <TestimonialCard key={i} t={t} />)}
            </div>
        </div>
    );
}

export default function Testimonials() {
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

        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

            <div className="grain" />

            {/* Ambient blobs */}
            <div className="ink-blob" style={{
                position: "fixed", bottom: -100, left: -100, zIndex: 0,
                width: 340, height: 340,
                background: "rgba(233,220,201,0.28)", pointerEvents: "none",
            }} />
            <div className="ink-blob" style={{
                position: "fixed", top: 60, right: -80, zIndex: 0,
                width: 240, height: 240,
                background: "rgba(201,218,204,0.2)", pointerEvents: "none",
                animationDelay: "3.5s",
            }} />

            <section style={{
                width: "100%",
                padding: "72px 0 80px",
                position: "relative", zIndex: 1,
                overflow: "hidden",
            }}>

                {/* ── HEADING ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        textAlign: "center",
                        padding: "0 24px",
                        marginBottom: 56,
                    }}
                >
                    <p style={{
                        fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                        letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16,
                    }}>
                        Parent Stories
                    </p>

                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(1.9rem, 5vw, 3.5rem)",
                        fontWeight: 800, color: "#1a1a1a",
                        lineHeight: 1.1, letterSpacing: "-0.025em",
                        maxWidth: 620, margin: "0 auto 18px",
                    }}>
                        Words of praise from{" "}
                        <em style={{ fontStyle: "italic", color: "#8B6A4A" }}>parents</em>{" "}
                        who believe in us.
                    </h2>

                    <p style={{
                        fontSize: "0.92rem", color: "rgba(0,0,0,0.45)",
                        lineHeight: 1.8, fontWeight: 300,
                        maxWidth: 400, margin: "0 auto",
                    }}>
                        Hear from the families whose children grow, create, and shine at Sanz Art Studio.
                    </p>
                </motion.div>

                {/* ── MARQUEE ROWS ── */}
                <div style={{ position: "relative" }}>
                    {/* Left fade */}
                    <div style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: 120, zIndex: 10,
                        background: "linear-gradient(to right, #F7F3EE, transparent)",
                        pointerEvents: "none",
                    }} />
                    {/* Right fade */}
                    <div style={{
                        position: "absolute", right: 0, top: 0, bottom: 0,
                        width: 120, zIndex: 10,
                        background: "linear-gradient(to left, #F7F3EE, transparent)",
                        pointerEvents: "none",
                    }} />

                    <InfiniteTrack testimonials={row1} direction="left" duration={42} />

                    <div style={{ marginTop: 14 }}>
                        <InfiniteTrack testimonials={row2} direction="right" duration={48} />
                    </div>
                </div>

            </section>
        </div>
    );
}