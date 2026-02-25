"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const links = {
    Company: ["About", "Careers", "Press", "Blog"],
    Services: ["Design", "Development", "Branding", "Strategy"],
    Connect: ["Twitter / X", "LinkedIn", "Instagram", "Dribbble"],
};

const socials = [
    {
        label: "TW",
        href: "#",
        title: "Twitter / X",
    },
    {
        label: "LI",
        href: "#",
        title: "LinkedIn",
    },
    {
        label: "IG",
        href: "#",
        title: "Instagram",
    },
    {
        label: "DR",
        href: "#",
        title: "Dribbble",
    },
];

export default function Footer() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    // Big wordmark rises as footer enters view
    const wordmarkY = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    return (
        <footer
            ref={ref}
            className="w-full bg-[#0d0d0d] text-white overflow-hidden relative"
        >
            {/* ── Top border accent ── */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* ── Main content ── */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 pt-20 pb-10">

                {/* Top row — tagline + nav columns */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between mb-24">

                    {/* Left — brand tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-xs"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            {/* Logo mark */}
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <div className="w-3 h-3 rounded-full bg-[#0d0d0d]" />
                            </div>
                            <span className="text-sm font-semibold tracking-widest uppercase text-white/80">
                                Studio
                            </span>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed">
                            We craft digital experiences that leave a lasting impression — where strategy meets beautiful design.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3 mt-8">
                            {socials.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    title={s.title}
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/50 hover:text-white transition-colors duration-200"
                                >
                                    {s.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — nav columns */}
                    <div className="flex gap-16 md:gap-24">
                        {Object.entries(links).map(([category, items], colIdx) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: colIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <p className="text-[10px] font-semibold tracking-widest uppercase text-white/30 mb-5">
                                    {category}
                                </p>
                                <ul className="space-y-3">
                                    {items.map((item) => (
                                        <li key={item}>
                                            <motion.a
                                                href="#"
                                                className="text-sm text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                                                whileHover={{ x: 4 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/[0.07] mb-10" />

                {/* Bottom row — copyright + legal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/25 text-xs"
                >
                    <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="hover:text-white/60 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ── Giant wordmark — parallax ── */}
            <div className="relative overflow-hidden h-36 md:h-48 -mb-2 select-none pointer-events-none">
                <motion.p
                    style={{ y: wordmarkY, opacity: wordmarkOpacity }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-black uppercase tracking-tighter text-white/[0.04] leading-none"
                    style={{
                        fontSize: "clamp(80px, 18vw, 200px)",
                        y: wordmarkY,
                        opacity: wordmarkOpacity,
                    }}
                >
                    Creative Studio
                </motion.p>
            </div>
        </footer>
    );
}