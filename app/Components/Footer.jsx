"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Palette, Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

const links = {
    Explore: ["About Us", "Our Classes", "Gallery", "Why Sanz"],
    Classes: ["Painting", "Paper Craft", "Creative Mix", "Holiday Camps"],
    Contact: ["Book a Trial", "Find Us", "WhatsApp Us", "Instagram"],
};

const socials = [
    { icon: Instagram, href: "#", title: "Instagram" },
    { icon: Facebook, href: "#", title: "Facebook" },
    { icon: Youtube, href: "#", title: "YouTube" },
];

export default function Footer() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const wordmarkY = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;1,600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .footer-link {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          transition: color 0.2s, transform 0.2s;
          display: inline-block;
        }
        .footer-link:hover { color: rgba(255,255,255,0.9); transform: translateX(4px); }

        .social-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s, border-color 0.25s, transform 0.2s;
          cursor: pointer; text-decoration: none;
        }
        .social-btn:hover {
          background: rgba(233,220,201,0.15);
          border-color: rgba(233,220,201,0.4);
          transform: scale(1.1);
        }

        .footer-top {
          display: flex;
          flex-direction: row;
          gap: 0;
          justify-content: space-between;
          margin-bottom: 64px;
        }

        .footer-nav-cols {
          display: flex;
          gap: 56px;
        }

        .footer-bottom {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .footer-legal-links {
          display: flex;
          gap: 24px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            gap: 48px;
            margin-bottom: 48px;
          }
          .footer-nav-cols {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .footer-legal-links {
            flex-wrap: wrap;
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .footer-nav-cols {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

            <footer
                ref={ref}
                style={{
                    width: "100%",
                    background: "#111",
                    color: "#fff",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                {/* Top accent line — warm gradient */}
                <div style={{
                    width: "100%", height: 1,
                    background: "linear-gradient(to right, transparent, rgba(233,220,201,0.3), rgba(139,106,74,0.4), rgba(233,220,201,0.3), transparent)",
                }} />

                {/* Main content */}
                <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 40px 32px" }}>

                    {/* ── TOP ROW ── */}
                    <div className="footer-top">

                        {/* Brand column */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            style={{ maxWidth: 280 }}
                        >
                            {/* Logo */}
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: "50%",
                                    background: "#E9DCC9",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                }}>
                                    <Palette size={16} color="#8B6A4A" />
                                </div>
                                <span style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.05rem", fontWeight: 700,
                                    color: "#fff", letterSpacing: "-0.01em",
                                }}>
                                    Sanz Art Studio
                                </span>
                            </div>

                            <p style={{
                                fontSize: "0.85rem", color: "rgba(255,255,255,0.35)",
                                lineHeight: 1.8, fontWeight: 300, marginBottom: 28,
                            }}>
                                Nurturing creativity, imagination, and confidence in young minds through joyful art & craft experiences.
                            </p>

                            {/* Contact snippets */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                                {[
                                    { icon: MapPin, text: "Pimpri-Chinchwad, Pune" },
                                    { icon: Mail, text: "hello@sanzartstudio.com" },
                                    { icon: Phone, text: "+91 98765 43210" },
                                ].map(({ icon: Icon, text }) => (
                                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <Icon size={12} color="rgba(233,220,201,0.5)" />
                                        <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", fontWeight: 300 }}>
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Socials */}
                            <div style={{ display: "flex", gap: 10 }}>
                                {socials.map(({ icon: Icon, href, title }) => (
                                    <motion.a
                                        key={title}
                                        href={href}
                                        title={title}
                                        className="social-btn"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon size={15} color="rgba(233,220,201,0.6)" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Nav columns */}
                        <div className="footer-nav-cols">
                            {Object.entries(links).map(([category, items], colIdx) => (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: colIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <p style={{
                                        fontSize: "0.65rem", fontWeight: 600,
                                        color: "#8B6A4A",
                                        letterSpacing: "0.14em", textTransform: "uppercase",
                                        marginBottom: 20,
                                    }}>
                                        {category}
                                    </p>
                                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                                        {items.map((item) => (
                                            <li key={item}>
                                                <a href="#" className="footer-link">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ width: "100%", height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 28 }} />

                    {/* ── BOTTOM ROW ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="footer-bottom"
                    >
                        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>
                            © {new Date().getFullYear()} Sanz Art Studio. All rights reserved.
                        </p>
                        <div className="footer-legal-links">
                            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
                                <a key={item} href="#" style={{
                                    fontSize: "0.72rem", color: "rgba(255,255,255,0.2)",
                                    textDecoration: "none", fontFamily: "'DM Sans', sans-serif",
                                    transition: "color 0.2s",
                                }}
                                    onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.55)"}
                                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.2)"}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* ── Giant wordmark parallax ── */}
                <div style={{
                    position: "relative", overflow: "hidden",
                    height: "clamp(80px, 14vw, 160px)",
                    marginBottom: -2,
                    userSelect: "none", pointerEvents: "none",
                }}>
                    <motion.p
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            translateX: "-50%",
                            whiteSpace: "nowrap",
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "rgba(233,220,201,0.04)",
                            lineHeight: 1,
                            fontSize: "clamp(72px, 16vw, 180px)",
                            y: wordmarkY,
                            opacity: wordmarkOpacity,
                            transform: "translateX(-50%)",
                        }}
                    >
                        Sanz Art Studio
                    </motion.p>
                </div>
            </footer>
        </div>
    );
}