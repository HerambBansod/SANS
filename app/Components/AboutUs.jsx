import React from 'react'

export default function AboutUs() {
    return (
        <main>
            <section className='w-full min-h-screen bg-[#FAF9F6] flex justify-center items-center p-2'>

                <div className='w-full max-w-[1200px] 
                bg-[#E9DCC9] rounded-3xl 
                shadow-[0_25px_70px_rgba(0,0,0,0.15)] 
                p-8 grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4'>
                    <div className='md:col-span-2 row-span-2 
                    bg-[#FAF9F6] rounded-2xl p-8 
                    flex flex-col justify-center 
                    hover:scale-[1.02] transition-all duration-300'>

                        <h2 className='text-3xl sm:text-4xl font-bold text-black mb-4'>
                            About SANS Art Studio
                        </h2>

                        <p className='text-black/80 leading-relaxed'>
                            At SANS Art Studio, we believe every child is naturally creative.
                            Our mission is to nurture imagination, develop artistic skills,
                            and build confidence through joyful art and craft experiences.
                        </p>

                    </div>
                    <div className='relative rounded-2xl overflow-hidden group'>

                        <div className='absolute inset-0 
                        bg-[url("https://images.unsplash.com/photo-1513364776144-60967b0f800f")] 
                        bg-cover bg-center 
                        transition-all duration-500 group-hover:scale-110'>
                        </div>

                        <div className='absolute inset-0 bg-black/20'></div>

                    </div>

                    <div className='bg-[#FAF9F6] rounded-2xl p-6 
                    flex flex-col justify-center 
                    hover:scale-105 transition-all duration-300'>

                        <h3 className='font-semibold text-black text-lg'>
                            Creative Learning
                        </h3>
                        <p className='text-sm text-black/70'>
                            Hands-on art education that makes learning joyful.
                        </p>

                    </div>
                    <div className='bg-[#FAF9F6] rounded-2xl p-6 
                    flex flex-col justify-center 
                    hover:scale-105 transition-all duration-300'>

                        <h3 className='font-semibold text-black text-lg'>
                            Skill Development
                        </h3>
                        <p className='text-sm text-black/70'>
                            Improving focus, patience, and fine motor skills.
                        </p>

                    </div>
                    <div className='md:col-span-2 
                    bg-black text-white rounded-2xl p-8 
                    flex flex-col justify-center 
                    hover:scale-[1.02] transition-all duration-300'>

                        <h3 className='text-xl font-semibold mb-2'>
                            A Safe & Inspiring Environment
                        </h3>
                        <p className='text-white/80'>
                            We create a nurturing space where children feel confident
                            to explore, experiment, and express themselves freely.
                        </p>

                    </div>

                </div>

            </section>
        </main>
    )
}