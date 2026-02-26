"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMAGES = [
    "./kid1.webp",
    "./kid2.webp",
    "./kid3.webp",
    "./kid4.webp",
    "./kid5.webp",
    "./kid6.webp",
    "./kid7.webp",
    "./kid8.webp",
    "./img1.webp",
    "./img2.webp",
];


const TALL_PATTERN = [
    [false, true],
    [true, false],
    [false, true],
    [false, false],
    [true, false],
];

export default function Gallery() {
    const ref = useRef(null);
    const [isDesktop, setIsDesktop] = useState(true);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const check = () => {
            setIsDesktop(window.innerWidth >= 1024);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? -200 : 0]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? 180 : 0]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? -150 : 0]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? 220 : 0]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? -120 : 0]);

    const ys = [y1, y2, y3, y4, y5];

    // Build columns based on breakpoint
    const getColumns = () => {
        if (isDesktop) return 5;
        if (isTablet) return 3;
        return 2;
    };

    const cols = getColumns();

    // Distribute images into columns
    const columns = Array.from({ length: cols }, (_, i) =>
        IMAGES.filter((_, idx) => idx % cols === i)
    );

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

        .img-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
        }
        .img-card img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .img-card:hover img { transform: scale(1.08); }
        .img-card .dim {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.15);
          transition: background 0.3s;
        }
        .img-card:hover .dim { background: rgba(0,0,0,0.05); }
      `}</style>

            <div className="grain" />

            {/* Ambient blobs */}
            <div className="ink-blob" style={{
                position: "fixed", bottom: -100, left: -100, zIndex: 0,
                width: 380, height: 380,
                background: "rgba(233,220,201,0.28)", pointerEvents: "none",
            }} />
            <div className="ink-blob" style={{
                position: "fixed", top: 60, right: -80, zIndex: 0,
                width: 260, height: 260,
                background: "rgba(201,218,204,0.2)", pointerEvents: "none",
                animationDelay: "3.5s",
            }} />

            {/* ── SECTION ── */}
            <section
                ref={ref}
                style={{
                    width: "100%",
                    minHeight: isDesktop ? "150vh" : "auto",
                    padding: isDesktop ? "60px 24px 100px" : "48px 16px 64px",
                    position: "relative", zIndex: 1,
                    overflow: "hidden",
                }}
            >
                <div style={{ maxWidth: 1400, margin: "0 auto" }}>

                    {/* ── HEADING ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            display: "flex", flexDirection: "column",
                            alignItems: "center", textAlign: "center",
                            marginBottom: isDesktop ? 72 : 40,
                        }}
                    >
                        <p style={{
                            fontSize: "0.68rem", fontWeight: 600, color: "#8B6A4A",
                            letterSpacing: "0.14em", textTransform: "uppercase",
                            marginBottom: 16,
                        }}>
                            Moments of Creativity
                        </p>

                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.9rem, 5vw, 3.75rem)",
                            fontWeight: 800, color: "#1a1a1a",
                            lineHeight: 1.08, letterSpacing: "-0.025em",
                            maxWidth: 680, marginBottom: 18,
                        }}>
                            Where little hands paint{" "}
                            <em style={{ fontStyle: "italic", color: "#8B6A4A" }}>
                                big beautiful dreams.
                            </em>
                        </h2>

                        <p style={{
                            fontSize: "0.92rem", color: "rgba(0,0,0,0.46)",
                            lineHeight: 1.8, fontWeight: 300,
                            maxWidth: 420, padding: "0 8px",
                        }}>
                            A glimpse into the imagination, joy, and artistic journeys
                            created every day at Sanz Art Studio.
                        </p>
                    </motion.div>

                    {/* ── GRID ── */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${cols}, 1fr)`,
                        gap: isDesktop ? 16 : 10,
                        alignItems: "start",
                    }}>
                        {columns.map((colImgs, colIdx) => (
                            <motion.div
                                key={colIdx}
                                style={{
                                    y: isDesktop ? ys[colIdx] : 0,
                                    display: "flex", flexDirection: "column",
                                    gap: isDesktop ? 16 : 10,
                                }}
                            >
                                {colImgs.map((img, rowIdx) => {
                                    
                                    const isTall = isDesktop
                                        ? (TALL_PATTERN[colIdx]?.[rowIdx] ?? false)
                                        : rowIdx % 2 === 0;

                                    const height = isDesktop
                                        ? (isTall ? 320 : 220)
                                        : isTablet
                                            ? (isTall ? 260 : 180)
                                            : (isTall ? 200 : 140);

                                    return (
                                        <motion.div
                                            key={img + rowIdx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-40px" }}
                                            transition={{
                                                delay: colIdx * 0.08 + rowIdx * 0.05,
                                                duration: 0.6,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                        >
                                            <div className="img-card" style={{ height }}>
                                                <img src={img} alt="Studio artwork" />
                                                <div className="dim" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}