"use client";

import { motion } from "framer-motion";
import { Palette, Star, ArrowRight } from "lucide-react";

export default function Landing() {
    return (
        <div style={{ width: "100%", height: "100vh", overflow: "hidden", fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .grain {
          position: fixed; inset: 0; pointer-events: none; z-index: 50; opacity: 0.045;
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

        .btn-book {
          display: inline-flex; align-items: center; gap: 9px;
          background: #fff; color: #111;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          padding: 15px 32px; border-radius: 100px;
          border: none; cursor: pointer;
          letter-spacing: -0.01em;
          box-shadow: 0 6px 28px rgba(0,0,0,0.28);
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          white-space: nowrap;
        }
        .btn-book:hover {
          background: #F0EAE0;
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.32);
        }
        .btn-book:active { transform: translateY(0); }
      `}</style>

            {/* Grain */}
            <div className="grain" />

            {/* VIDEO BG */}
            <video
                autoPlay loop muted playsInline
                style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            >
                <source src="/SAStudio.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: "linear-gradient(150deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.68) 100%)",
            }} />

            {/* Blobs */}
            <div className="ink-blob" style={{
                position: "absolute", bottom: -90, left: -90, zIndex: 2,
                width: 340, height: 340,
                background: "rgba(233,220,201,0.14)",
            }} />
            <div className="ink-blob" style={{
                position: "absolute", top: 80, right: -60, zIndex: 2,
                width: 220, height: 220,
                background: "rgba(201,218,204,0.11)",
                animationDelay: "3.5s",
            }} />

            {/* HERO */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 5,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                textAlign: "center", padding: "0 24px",
            }}>

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        borderRadius: 100, padding: "8px 18px", marginBottom: 30,
                    }}
                >
                    <Star size={12} color="#F5C842" fill="#F5C842" />
                    <span style={{
                        fontSize: "0.67rem", fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>
                        Art & Craft Classes for Kids
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.46, duration: 0.9 }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(3rem, 7.5vw, 5.75rem)",
                        fontWeight: 800, color: "#fff",
                        lineHeight: 1.04,
                        maxWidth: 760, marginBottom: 20,
                    }}
                >
                    Where little <em style={{ color: "#E9DCC9" }}>artists</em> bloom.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.58, duration: 0.65 }}
                    style={{
                        fontSize: "1rem", color: "rgba(255,255,255,0.58)",
                        maxWidth: 400, lineHeight: 1.75,
                        marginBottom: 44,
                    }}
                >
                    Nurturing creativity through hands-on art & craft classes designed for curious young minds.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.68, duration: 0.6 }}
                >
                    <button className="btn-book">
                        Book a Free Trial <ArrowRight size={16} />
                    </button>
                </motion.div>

            </div>
        </div>
    );
}