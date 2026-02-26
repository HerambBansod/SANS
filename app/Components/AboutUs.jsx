"use client";

import { motion } from "framer-motion";
import { Lightbulb, Brain, Shield, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function AboutUs() {
    return (
        <div style={{ background: "#F7F3EE", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>
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

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem; font-weight: 500;
          color: rgba(0,0,0,0.45);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .nav-link:hover { color: #111; }

        .card {
          background: #fff;
          border-radius: 24px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.09);
        }

        .btn-book {
          display: inline-flex; align-items: center; gap: 9px;
          background: #1a1a1a; color: #F7F3EE;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600;
          padding: 14px 28px; border-radius: 100px;
          border: none; cursor: pointer;
          letter-spacing: -0.01em;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          white-space: nowrap;
        }
        .btn-book:hover {
          background: #8B6A4A;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.22);
        }
        .btn-book:active { transform: translateY(0); }

        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .span2 { grid-column: span 1 !important; }
        }
      `}</style>

            <div className="grain" />

          
            <div className="ink-blob" style={{
                position: "fixed", bottom: -100, left: -100, zIndex: 0,
                width: 380, height: 380,
                background: "rgba(233,220,201,0.3)", pointerEvents: "none",
            }} />
            <div className="ink-blob" style={{
                position: "fixed", top: 60, right: -80, zIndex: 0,
                width: 260, height: 260,
                background: "rgba(201,218,204,0.22)", pointerEvents: "none",
                animationDelay: "3.5s",
            }} />



         
            <main style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 80px" }}>

                <motion.div {...fadeUp(0.1)} style={{ marginBottom: 56 }}>
                    <p style={{
                        fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                        letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
                    }}>Our Story</p>
                    <h1 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                        fontWeight: 800, color: "#1a1a1a",
                        lineHeight: 1.05, letterSpacing: "-0.025em",
                    }}>
                        About{" "}
                        <em style={{ fontStyle: "italic", color: "#8B6A4A" }}>Sanz</em>
                        {" "}Art Studio
                    </h1>
                </motion.div>

              
                <div
                    className="bento-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridAutoRows: "220px",
                        gap: 16,
                    }}
                >

                    
                    <motion.div
                        {...fadeUp(0.15)}
                        className="span2"
                        style={{
                            gridColumn: "span 2", gridRow: "span 2",
                            background: "#E9DCC9",
                            borderRadius: 28, padding: "48px 44px",
                            display: "flex", flexDirection: "column", justifyContent: "center",
                            position: "relative", overflow: "hidden",
                        }}
                    >
                        
                        <div style={{
                            position: "absolute", top: -40, right: -40,
                            width: 160, height: 160,
                            background: "rgba(255,255,255,0.25)",
                            borderRadius: "50%", pointerEvents: "none",
                        }} />
                        <div style={{
                            position: "absolute", bottom: -30, left: -30,
                            width: 100, height: 100,
                            background: "rgba(139,106,74,0.12)",
                            borderRadius: "50%", pointerEvents: "none",
                        }} />

                        <p style={{
                            fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                            letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18,
                        }}>Who We Are</p>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                            fontWeight: 800, color: "#1a1a1a",
                            lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 20,
                        }}>
                            Every child is a<br />natural-born creator.
                        </h2>
                        <p style={{
                            fontSize: "0.95rem", color: "rgba(0,0,0,0.62)",
                            lineHeight: 1.8, fontWeight: 300, maxWidth: 440,
                        }}>
                            At Sanz Art Studio, we believe every child is naturally creative.
                            Our mission is to nurture imagination, develop artistic skills,
                            and build confidence through joyful art and craft experiences.
                        </p>
                    </motion.div>

                  
                    <motion.div
                        {...fadeUp(0.2)}
                        style={{
                            borderRadius: 28, overflow: "hidden",
                            position: "relative",
                            gridRow: "span 2",
                        }}
                    >
                        <img
                            src="./enroll.webp"
                            alt="Kids painting"
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                        <div style={{
                            position: "absolute", inset: 0,
                            background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)",
                        }} />
                        <div style={{
                            position: "absolute", bottom: 20, left: 20,
                            background: "rgba(247,243,238,0.9)",
                            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
                            borderRadius: 100, padding: "7px 16px",
                            display: "flex", alignItems: "center", gap: 6,
                        }}>
                            <div style={{ width: 7, height: 7, background: "#5CAE7A", borderRadius: "50%" }} />
                            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#1a1a1a" }}>Enrolling Now</span>
                        </div>
                    </motion.div>

                    
                    <motion.div {...fadeUp(0.25)} className="card">
                        <div style={{
                            width: 44, height: 44, background: "#1a1a1a",
                            borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <Lightbulb size={18} color="#E9DCC9" />
                        </div>
                        <div>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.15rem", fontWeight: 700,
                                color: "#1a1a1a", marginBottom: 8,
                            }}>Creative Learning</h3>
                            <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.52)", lineHeight: 1.65 }}>
                                Hands-on art education that makes learning joyful and memorable.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div {...fadeUp(0.3)} className="card">
                        <div style={{
                            width: 44, height: 44, background: "#1a1a1a",
                            borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                            <Brain size={18} color="#E9DCC9" />
                        </div>
                        <div>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.15rem", fontWeight: 700,
                                color: "#1a1a1a", marginBottom: 8,
                            }}>Skill Development</h3>
                            <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.52)", lineHeight: 1.65 }}>
                                Improving focus, patience, and fine motor skills through art.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.35)}
                        className="span2"
                        style={{
                            gridColumn: "span 2",
                            background: "#1a1a1a",
                            borderRadius: 28, padding: "40px 44px",
                            display: "flex", alignItems: "center",
                            justifyContent: "space-between", gap: 32,
                            flexWrap: "wrap", position: "relative", overflow: "hidden",
                        }}
                    >
                        <div className="ink-blob" style={{
                            position: "absolute", top: -50, right: -50,
                            width: 180, height: 180,
                            background: "rgba(139,106,74,0.25)", pointerEvents: "none",
                        }} />

                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div style={{
                                width: 44, height: 44, background: "rgba(233,220,201,0.15)",
                                borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                                marginBottom: 18,
                            }}>
                                <Shield size={18} color="#E9DCC9" />
                            </div>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.3rem", fontWeight: 700,
                                color: "#fff", marginBottom: 10,
                            }}>A Safe & Inspiring Environment</h3>
                            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 420 }}>
                                We create a nurturing space where children feel confident to explore,
                                experiment, and express themselves freely.
                            </p>
                        </div>

                        <button className="btn-book" style={{
                            position: "relative", zIndex: 1,
                            background: "#E9DCC9", color: "#1a1a1a",
                            flexShrink: 0,
                        }}>
                            Book a Free Trial <ArrowRight size={15} />
                        </button>
                    </motion.div>
                    
                    <motion.div
                        {...fadeUp(0.4)}
                        style={{
                            background: "#E9DCC9",
                            borderRadius: 28, padding: "32px 28px",
                            display: "flex", flexDirection: "column",
                            justifyContent: "center", gap: 6,
                            position: "relative", overflow: "hidden",
                        }}
                    >
                        <div className="ink-blob" style={{
                            position: "absolute", bottom: -30, right: -30,
                            width: 100, height: 100,
                            background: "rgba(139,106,74,0.18)", pointerEvents: "none",
                        }} />
                        <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            Since 2021
                        </p>
                        <p style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "3rem", fontWeight: 800, color: "#1a1a1a", lineHeight: 1,
                        }}>100+</p>
                        <p style={{ fontSize: "0.85rem", color: "rgba(0,0,0,0.5)", fontWeight: 300 }}>
                            Happy young artists and counting
                        </p>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}