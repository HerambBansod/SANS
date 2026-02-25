"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

export default function Landing() {
    return (
        <div
            style={{
                width: "100%",
                fontFamily: "'DM Sans', sans-serif",
                overflowX: "hidden",
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 4;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .ink-blob {
          border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%;
          animation: morph 9s ease-in-out infinite alternate;
        }

        @keyframes morph {
          0% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 70%; }
          50% { border-radius: 40% 60% 30% 70% / 70% 40% 60% 50%; }
          100% { border-radius: 55% 45% 65% 35% / 45% 65% 35% 65%; }
        }

        .btn-book {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #fff;
          color: #111;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 14px 26px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          box-shadow: 0 6px 28px rgba(0,0,0,0.28);
          transition: all 0.25s ease;
        }

        .btn-book:hover {
          background: #F0EAE0;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .ink-blob { display: none; }

          .btn-book {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>

            <section
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: "100dvh",
                    overflow: "hidden",
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                >
                    <source src="/Landing.mp4" type="video/mp4" />
                </video>

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        background:
                            "linear-gradient(150deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.75) 100%)",
                    }}
                />

                <div className="grain" />

                <div
                    className="ink-blob"
                    style={{
                        position: "absolute",
                        bottom: "-80px",
                        left: "-80px",
                        zIndex: 2,
                        width: "300px",
                        height: "300px",
                        background: "rgba(233,220,201,0.14)",
                    }}
                />

                <div
                    className="ink-blob"
                    style={{
                        position: "absolute",
                        top: "60px",
                        right: "-50px",
                        zIndex: 2,
                        width: "200px",
                        height: "200px",
                        background: "rgba(201,218,204,0.11)",
                        animationDelay: "3.5s",
                    }}
                />

                <div
                    style={{
                        position: "relative",
                        zIndex: 5,
                        minHeight: "100dvh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "0 16px",
                        maxWidth: "900px",
                        margin: "0 auto",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.25)",
                            borderRadius: 100,
                            padding: "6px 14px",
                            marginBottom: 20,
                        }}
                    >
                        <Star size={12} color="#F5C842" fill="#F5C842" />
                        <span
                            style={{
                                fontSize: "0.65rem",
                                fontWeight: 600,
                                color: "rgba(255,255,255,0.9)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            Art & Craft Classes
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.2rem, 6vw, 5rem)",
                            fontWeight: 800,
                            color: "#fff",
                            lineHeight: 1.1,
                            marginBottom: 16,
                        }}
                    >
                        Where little <em style={{ color: "#E9DCC9" }}>artists</em> bloom.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                            color: "rgba(255,255,255,0.65)",
                            maxWidth: 420,
                            lineHeight: 1.6,
                            marginBottom: 30,
                        }}
                    >
                        Nurturing creativity through hands-on art & craft classes designed for curious young minds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="btn-book">
                            Book a Free Trial <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}