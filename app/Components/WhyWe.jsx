"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

export default function WhyWe() {
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

        .photo-card {
          position: relative; border-radius: 24px;
          overflow: hidden; cursor: pointer;
        }
        .photo-card img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .photo-card:hover img { transform: scale(1.06); }
        .photo-card .overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.62) 0%, transparent 55%);
        }
        .photo-card .label {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 24px 28px;
        }

        @media (max-width: 768px) {
          .top-row { flex-direction: column !important; }
          .photo-grid { grid-template-columns: 1fr !important; }
          .photo-main { height: 300px !important; }
          .photo-small { height: 220px !important; }
          .small-pair { grid-template-columns: 1fr !important; }
        }
      `}</style>

            {/* Grain */}
            <div className="grain" />

            {/* Ambient blobs */}
            <div className="ink-blob" style={{
                position: "fixed", bottom: -100, left: -100, zIndex: 0,
                width: 380, height: 380,
                background: "rgba(233,220,201,0.3)", pointerEvents: "none",
            }} />
            <div className="ink-blob" style={{
                position: "fixed", top: 40, right: -80, zIndex: 0,
                width: 260, height: 260,
                background: "rgba(201,218,204,0.22)", pointerEvents: "none",
                animationDelay: "3.5s",
            }} />

            {/* ── CONTENT ── */}
            <main style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 80px", position: "relative", zIndex: 1 }}>

                {/* ── TOP ROW: headline + description ── */}
                <motion.div
                    {...fadeUp(0.1)}
                    className="top-row"
                    style={{
                        display: "flex", justifyContent: "space-between",
                        alignItems: "flex-end", gap: 40, marginBottom: 48,
                    }}
                >
                    {/* Headline */}
                    <div style={{ maxWidth: 560 }}>
                        <p style={{
                            fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16,
                        }}>Why Sanz</p>
                        <h1 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                            fontWeight: 800, color: "#1a1a1a",
                            lineHeight: 1.08, letterSpacing: "-0.025em",
                        }}>
                            Bringing timeless creativity to{" "}
                            <em style={{ fontStyle: "italic", color: "#8B6A4A" }}>young minds.</em>
                        </h1>
                    </div>

                    {/* Description + CTA */}
                    <motion.div {...fadeUp(0.2)} style={{ maxWidth: 380, display: "flex", flexDirection: "column", gap: 24 }}>
                        <p style={{
                            fontSize: "0.95rem", color: "rgba(0,0,0,0.52)",
                            lineHeight: 1.8, fontWeight: 300,
                        }}>
                            At Sanz Art Studio, we nurture creativity through engaging art & craft
                            sessions designed to inspire confidence, imagination, and self-expression.
                        </p>
                        <div>
                            <button className="btn-book">
                                Explore Our Classes <ArrowRight size={15} />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── PHOTO GRID ── */}
                <div
                    className="photo-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                    }}
                >
                    {/* Large left photo */}
                    <motion.div
                        {...fadeUp(0.25)}
                        className="photo-card photo-main"
                        style={{ height: 500 }}
                    >
                        <img
                            src="./Creative.webp"
                            alt="Creative Drawing & Painting"
                        />
                        <div className="overlay" />
                        <div className="label">
                            <p style={{
                                fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.6)",
                                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8,
                            }}>Featured</p>
                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "1.5rem", fontWeight: 700, color: "#fff", lineHeight: 1.2,
                            }}>
                                Creative Drawing<br />& Painting
                            </h2>
                            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", marginTop: 8, fontWeight: 300 }}>
                                Helping children explore colors, techniques, and imagination freely.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right column — two stacked photos */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <motion.div
                            {...fadeUp(0.32)}
                            className="photo-card photo-small"
                            style={{ height: 242 }}
                        >
                            <img
                                src="./DIY.webp"
                                alt="Craft & DIY Workshops"
                            />
                            <div className="overlay" />
                            <div className="label">
                                <h2 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.2rem", fontWeight: 700, color: "#fff",
                                }}>
                                    Craft & DIY Workshops
                                </h2>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeUp(0.38)}
                            className="photo-card photo-small"
                            style={{ height: 242 }}
                        >
                            <img
                                src="./Confidence.webp"
                                alt="Confidence Through Creativity"
                            />
                            <div className="overlay" />
                            <div className="label">
                                <h2 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.2rem", fontWeight: 700, color: "#fff",
                                }}>
                                    Confidence Through Creativity
                                </h2>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </main>
        </div>
    );
}