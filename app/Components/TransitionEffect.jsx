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
            initial={{ opacity: 0, scale: 0.75, y: side === "left" ? 40 : -40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            animate={{
                y: [0, index % 2 === 0 ? -10 : 10, 0],
                transition: {
                    y: {
                        duration: 3.5 + index * 0.4,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    },
                },
            }}
            className="absolute rounded-2xl overflow-hidden shadow-lg"
            style={{
                top,
                left,
                right,
                width,
                height,
                rotate: `${rotate}deg`,
            }}
        >
            <img
                src={src}
                alt="Happy parent"
                className="w-full h-full object-cover object-top"
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
        <section
            ref={ref}
            className="relative w-full min-h-[90vh] bg-[#FAF9F6] flex items-center justify-center overflow-hidden py-28"
        >
            {/* Subtle dot background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.045]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                }}
            />

            {/* Left floating portraits */}
            <motion.div style={{ y: leftY }} className="absolute inset-0 pointer-events-none">
                {leftImages.map((img, i) => (
                    <FloatingCard key={i} src={img.src} style={img.style} index={i} side="left" />
                ))}
            </motion.div>

            {/* Right floating portraits */}
            <motion.div style={{ y: rightY }} className="absolute inset-0 pointer-events-none">
                {rightImages.map((img, i) => (
                    <FloatingCard key={i} src={img.src} style={img.style} index={i} side="right" />
                ))}
            </motion.div>

            {/* Soft vignette */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background:
                        "radial-gradient(ellipse 52% 60% at 50% 50%, rgba(250,249,246,0.96) 0%, rgba(250,249,246,0.7) 50%, transparent 100%)",
                }}
            />

            {/* Center Content */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-lg px-6">

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-5 px-4 py-1.5 rounded-full border border-gray-200 text-[11px] font-semibold tracking-widest text-gray-400 uppercase"
                >
                    Happy Parents
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[40px] md:text-5xl font-bold text-gray-900 leading-[1.15] mb-4"
                >
                    Where Little Artists Grow{" "}
                    <br />
                    <span className="text-gray-400 font-normal">
                        with Confidence & Creativity
                    </span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-sm"
                >
                    Families trust SANS Art Studio to inspire imagination,
                    nurture artistic skills, and build lifelong creative confidence.
                </motion.p>

                

            </div>
        </section>
    );
}