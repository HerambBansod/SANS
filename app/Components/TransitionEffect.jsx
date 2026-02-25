"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const leftImages = [
    {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
        style: { top: "2%", left: "1%", width: 110, height: 140, rotate: -6 },
    },
    {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
        style: { top: "28%", left: "3%", width: 95, height: 120, rotate: 4 },
    },
    {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
        style: { top: "58%", left: "1%", width: 100, height: 128, rotate: -5 },
    },
    {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
        style: { top: "5%", left: "16%", width: 88, height: 112, rotate: 5 },
    },
    {
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
        style: { top: "38%", left: "14%", width: 82, height: 105, rotate: -3 },
    },
];

const rightImages = [
    {
        src: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&q=80",
        style: { top: "2%", right: "1%", width: 110, height: 140, rotate: 6 },
    },
    {
        src: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80",
        style: { top: "28%", right: "3%", width: 95, height: 120, rotate: -4 },
    },
    {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&q=80",
        style: { top: "58%", right: "1%", width: 100, height: 128, rotate: 5 },
    },
    {
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
        style: { top: "5%", right: "16%", width: 88, height: 112, rotate: -5 },
    },
    {
        src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=300&q=80",
        style: { top: "38%", right: "14%", width: 82, height: 105, rotate: 3 },
    },
];

function FloatingCard({ src, style, index, side }) {
    const { top, left, right, width, height, rotate } = style;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: side === "left" ? 40 : -40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "absolute",
                top, left, right,
                width, height,
                rotate: `${rotate}deg`,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
                border: "3px solid #fff",
            }}
        >
            {/* Subtle warm tint overlay to blend with palette */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "rgba(233,220,201,0.08)",
                pointerEvents: "none",
            }} />
            <img
                src={src}
                alt="Happy parent"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
            />
        </motion.div>
    );
}

export default function TestimonialTransition() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const leftY = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const rightY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

    return (
        <div style={{ background: "#F7F3EE", fontFamily: "'DM Sans', sans-serif" }}>
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

        /* On small screens hide side portraits — not enough room */
        @media (max-width: 640px) {
          .portrait-col { display: none !important; }
          .center-vignette {
            background: none !important;
          }
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

            <section
                ref={ref}
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    padding: "100px 24px",
                    zIndex: 1,
                }}
            >
                {/* Dot pattern — warm slate dots */}
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
                    backgroundImage: "radial-gradient(circle, #8B6A4A 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                }} />

                {/* Left floating portraits */}
                <motion.div
                    className="portrait-col"
                    style={{ y: leftY, position: "absolute", inset: 0, pointerEvents: "none", display: "block" }}
                >
                    {leftImages.map((img, i) => (
                        <FloatingCard key={i} src={img.src} style={img.style} index={i} side="left" />
                    ))}
                </motion.div>

                {/* Right floating portraits */}
                <motion.div
                    className="portrait-col"
                    style={{ y: rightY, position: "absolute", inset: 0, pointerEvents: "none", display: "block" }}
                >
                    {rightImages.map((img, i) => (
                        <FloatingCard key={i} src={img.src} style={img.style} index={i} side="right" />
                    ))}
                </motion.div>

                {/* Vignette — fades portraits into the warm bg */}
                <div
                    className="center-vignette"
                    style={{
                        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10,
                        background: "radial-gradient(ellipse 54% 62% at 50% 50%, rgba(247,243,238,0.97) 0%, rgba(247,243,238,0.75) 52%, transparent 100%)",
                    }}
                />

                {/* ── CENTER CONTENT ── */}
                <div style={{
                    position: "relative", zIndex: 20,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", textAlign: "center",
                    maxWidth: 520, width: "100%",
                }}>

                    {/* Label badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            marginBottom: 24,
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "rgba(233,220,201,0.6)",
                            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                            border: "1px solid rgba(139,106,74,0.2)",
                            borderRadius: 100, padding: "8px 18px",
                        }}
                    >
                        <span style={{
                            fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                            letterSpacing: "0.12em", textTransform: "uppercase",
                        }}>
                            Happy Parents
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            fontWeight: 800, color: "#1a1a1a",
                            lineHeight: 1.1, letterSpacing: "-0.025em",
                            marginBottom: 18,
                        }}
                    >
                        Where little artists grow{" "}
                        <em style={{ fontStyle: "italic", color: "#8B6A4A" }}>
                            with confidence.
                        </em>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            fontSize: "0.95rem", color: "rgba(0,0,0,0.44)",
                            lineHeight: 1.8, fontWeight: 300,
                            maxWidth: 380, marginBottom: 36,
                        }}
                    >
                        Families trust Sanz Art Studio to inspire imagination,
                        nurture artistic skills, and build lifelong creative confidence.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            display: "flex", gap: 32,
                            padding: "24px 36px",
                            background: "rgba(233,220,201,0.45)",
                            backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                            borderRadius: 20,
                            border: "1px solid rgba(139,106,74,0.15)",
                            flexWrap: "wrap", justifyContent: "center",
                        }}
                    >
                        {[
                            { value: "500+", label: "Happy Kids" },
                            { value: "98%", label: "Parent Approval" },
                            { value: "8 yrs", label: "Of Excellence" },
                        ].map(({ value, label }) => (
                            <div key={label} style={{ textAlign: "center" }}>
                                <div style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.6rem", fontWeight: 800,
                                    color: "#1a1a1a", lineHeight: 1,
                                }}>
                                    {value}
                                </div>
                                <div style={{
                                    fontSize: "0.68rem", color: "#8B6A4A",
                                    marginTop: 5, fontWeight: 600,
                                    textTransform: "uppercase", letterSpacing: "0.08em",
                                }}>
                                    {label}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}