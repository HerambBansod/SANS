"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const row1 = [
    {
        text: "Exceeded our expectations with innovative designs that brought our vision to life — a truly remarkable creative agency.",
        name: "Samantha Johnson",
        role: "CEO and Co-founder of ABC Company",
        initials: "SJ",
        color: "bg-violet-500",
    },
    {
        text: "Their ability to capture our brand essence in every project is unparalleled — an invaluable creative collaborator.",
        name: "Isabella Rodriguez",
        role: "CEO and Co-founder of ABC Company",
        initials: "IR",
        color: "bg-rose-400",
    },
    {
        text: "Creative geniuses who listen, understand, and craft captivating visuals — an agency that truly understands our needs.",
        name: "Gabrielle Williams",
        role: "CEO and Co-founder of ABC Company",
        initials: "GW",
        color: "bg-amber-400",
    },
    {
        text: "Working with them felt like having a dream team — every deliverable was polished, on-time, and beyond expectations.",
        name: "Marcus Lee",
        role: "Head of Marketing at XYZ Corp",
        initials: "ML",
        color: "bg-teal-500",
    },
    {
        text: "They transformed our bland brand into something truly iconic. The results speak for themselves — outstanding work.",
        name: "Priya Nair",
        role: "Product Lead at Innovate Inc",
        initials: "PN",
        color: "bg-sky-500",
    },
];

const row2 = [
    {
        text: "A refreshing and imaginative agency that consistently delivers exceptional results — highly recommended for any project.",
        name: "Victoria Thompson",
        role: "CEO and Co-founder of ABC Company",
        initials: "VT",
        color: "bg-emerald-500",
    },
    {
        text: "Their team's artistic flair and strategic approach resulted in remarkable campaigns — a reliable creative partner.",
        name: "John Peter",
        role: "CEO and Co-founder of ABC Company",
        initials: "JP",
        color: "bg-orange-400",
    },
    {
        text: "From concept to execution, their creativity knows no bounds — a game changer for our brand's success.",
        name: "Natalie Martinez",
        role: "CEO and Co-founder of ABC Company",
        initials: "NM",
        color: "bg-pink-500",
    },
    {
        text: "Hands down the best creative agency we've worked with. Their passion and professionalism are second to none.",
        name: "David Kim",
        role: "Brand Director at Momentum Co",
        initials: "DK",
        color: "bg-indigo-500",
    },
    {
        text: "Every project they touch turns to gold. Thoughtful strategy paired with breathtaking design — truly world class.",
        name: "Aisha Patel",
        role: "CMO at Stellar Ltd",
        initials: "AP",
        color: "bg-cyan-500",
    },
];

function TestimonialCard({ testimonial }) {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.10)" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[320px] flex-shrink-0 bg-white rounded-2xl p-7 shadow-md cursor-default select-none"
        >
            <div className="text-blue-600 mb-3">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="currentColor">
                    <path d="M0 22V13.2C0 5.573 4.667 1.173 14 0l1.167 2.347C10.5 3.52 8.167 5.867 7.583 9.383H13.2V22H0zm16.8 0V13.2C16.8 5.573 21.467 1.173 30.8 0L32 2.347c-4.667 1.173-7 3.52-7.583 7.036H30V22H16.8z" />
                </svg>
            </div>
            <p className="text-[15px] leading-relaxed text-gray-800 font-medium mb-6">
                {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
                <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${testimonial.color}`}
                >
                    {testimonial.initials}
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
}

function InfiniteTrack({ testimonials, direction = "left", duration = 40 }) {
    const [paused, setPaused] = useState(false);

    // Duplicate once — CSS animates exactly -50% so the seam is invisible
    const items = [...testimonials, ...testimonials];

    const animationName = direction === "left" ? "marquee-left" : "marquee-right";

    return (
        <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="flex gap-6 py-3"
                style={{
                    width: "max-content",
                    animationName,
                    animationDuration: `${duration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: paused ? "paused" : "running",
                }}
            >
                {items.map((testimonial, i) => (
                    <TestimonialCard key={i} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
}

export default function TestimonialsCarousel() {
    return (
        <>
            {/* Keyframes injected once globally */}
            <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

            <section className="w-full py-20 bg-[#f5f5f7] overflow-hidden">
                {/* Heading */}
                <h2 className="text-center font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-14 px-4">
                    Words of praise from Parents
                    <br />
                    about our presence.
                </h2>

                <div className="relative">
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-36 z-10 bg-gradient-to-r from-[#f5f5f7] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-36 z-10 bg-gradient-to-l from-[#f5f5f7] to-transparent" />
                    <InfiniteTrack testimonials={row1} direction="left" duration={40} />
                    <div className="mt-6">
                        <InfiniteTrack testimonials={row2} direction="right" duration={45} />
                    </div>
                </div>
            </section>
        </>
    );
}