import React from 'react'

export default function WhyWe() {
    return (
        <main>
            <section className='w-full min-h-screen bg-[#FAF9F6] flex justify-center items-center p-2'>

                <div className='w-full max-w-[1200px] bg-[#E9DCC9] 
                rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.15)] 
                p-10 flex flex-col gap-10'>
                    <div className='flex flex-col lg:flex-row justify-between gap-6'>

                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-black max-w-xl leading-tight'>
                            Bringing Timeless Creativity and Joyful Imagination to Young Minds
                        </h1>

                        <div className='flex flex-col gap-4 max-w-md'>
                            <p className='text-black/80 text-base'>
                                At SANS Art Studio, we nurture creativity through engaging art & craft
                                sessions designed to inspire confidence, imagination, and self-expression.
                            </p>

                            <button className='px-6 py-3 bg-black text-white rounded-full 
                            hover:scale-105 transition-all duration-300 w-fit'>
                                Explore Our Classes
                            </button>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <div className='relative rounded-2xl overflow-hidden group h-[450px]'>

                            <div className='absolute inset-0 
                            bg-[url("https://images.unsplash.com/photo-1513364776144-60967b0f800f")] 
                            bg-cover bg-center 
                            transition-all duration-500 group-hover:scale-110'></div>

                            <div className='absolute inset-0 bg-black/40'></div>

                            <div className='relative z-10 p-8 text-white flex flex-col justify-end h-full'>
                                <h2 className='text-2xl font-semibold'>
                                    Creative Drawing & Painting
                                </h2>
                                <p className='text-sm text-white/80'>
                                    Helping children explore colors, techniques, and imagination freely.
                                </p>
                            </div>

                        </div>

                        <div className='flex flex-col gap-6'>
                            <div className='relative rounded-2xl overflow-hidden group h-[210px]'>

                                <div className='absolute inset-0 
                                bg-[url("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee")] 
                                bg-cover bg-center 
                                transition-all duration-500 group-hover:scale-110'></div>

                                <div className='absolute inset-0 bg-black/40'></div>

                                <div className='relative z-10 p-6 text-white flex flex-col justify-end h-full'>
                                    <h2 className='text-lg font-semibold'>
                                        Craft & DIY Workshops
                                    </h2>
                                </div>

                            </div>
                            <div className='relative rounded-2xl overflow-hidden group h-[210px]'>

                                <div className='absolute inset-0 
                                bg-[url("https://images.unsplash.com/photo-1492724441997-5dc865305da7")] 
                                bg-cover bg-center 
                                transition-all duration-500 group-hover:scale-110'></div>

                                <div className='absolute inset-0 bg-black/40'></div>

                                <div className='relative z-10 p-6 text-white flex flex-col justify-end h-full'>
                                    <h2 className='text-lg font-semibold'>
                                        Confidence Through Creativity
                                    </h2>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </main>
    )
}