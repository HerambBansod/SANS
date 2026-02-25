"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Gallery() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax speeds
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 220]);
    const y5 = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <section
            ref={ref}
            className="w-full min-h-[150vh] bg-[#FAF9F6] flex justify-center items-center p-2 overflow-hidden "
        >
            <div className="w-full max-w-[1400px] bg-[#E9DCC9] rounded-3xl p-10 shadow-[0_25px_70px_rgba(0,0,0,0.15)]">
                <div className="flex flex-col items-center text-center mb-20">

                    <p className="text-sm tracking-[0.3em] uppercase text-black/60 mb-4">
                        Moments of Creativity
                    </p>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-3xl">
                        Where Little Hands Paint <br className="hidden sm:block" />
                        Big Beautiful Dreams
                    </h2>

                    <p className="text-black/70 text-base sm:text-lg mt-6 max-w-xl">
                        A glimpse into the imagination, joy, and artistic journeys
                        created every day at SANS Art Studio.
                    </p>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {/* Column 1 */}
                    <motion.div style={{ y: y1 }} className="flex flex-col gap-6">
                        <ImageCard img="https://images.unsplash.com/photo-1513364776144-60967b0f800f" />
                        <ImageCard img="https://images.unsplash.com/photo-1492724441997-5dc865305da7" tall />
                    </motion.div>

                    {/* Column 2 */}
                    <motion.div style={{ y: y2 }} className="flex flex-col gap-6">
                        <ImageCard img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" tall />
                        <ImageCard img="https://images.unsplash.com/photo-1520697222865-c5b0e1dba8b4" />
                    </motion.div>

                    {/* Column 3 */}
                    <motion.div style={{ y: y3 }} className="flex flex-col gap-6">
                        <ImageCard img="https://images.unsplash.com/photo-1504198453319-5ce911bafcde" />
                        <ImageCard img="https://images.unsplash.com/photo-1519681393784-d120267933ba" tall />
                    </motion.div>

                    {/* Column 4 */}
                    <motion.div style={{ y: y4 }} className="flex flex-col gap-6">
                        <ImageCard img="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
                        <ImageCard img="https://images.unsplash.com/photo-1513364776144-60967b0f800f" />
                    </motion.div>

                    {/* Column 5 */}
                    <motion.div style={{ y: y5 }} className="flex flex-col gap-6">
                        <ImageCard img="https://images.unsplash.com/photo-1520697222865-c5b0e1dba8b4" tall />
                        <ImageCard img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}

function ImageCard({ img, tall }) {
    return (
        <div className={`relative ${tall ? "h-[320px]" : "h-[220px]"} rounded-2xl overflow-hidden group`}>
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        </div>
    );
}