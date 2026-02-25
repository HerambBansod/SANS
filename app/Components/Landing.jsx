import React from 'react'

export default function Landing() {
    return (
        <main>
            <section className='w-full min-h-screen bg-[#FAF9F6] flex justify-center items-center p-2 sm:p-2'>
                <div className='w-full max-w-[1250px] min-h-screen
                bg-[#E9DCC9] flex flex-col lg:flex-row
                rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.15)]
                overflow-hidden'>
                    <div className='w-full lg:w-1/2 
                    flex flex-col items-center lg:items-start 
                    justify-center gap-6 
                    p-8 sm:p-12 text-center lg:text-left'>

                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight'>
                            SANS Art Studio
                        </h1>

                        <p className='text-base sm:text-lg text-black/80 max-w-md'>
                            Nurturing Creativity Through Art & Craft
                        </p>

                        <button
                            className="
                            relative group px-8 sm:px-6 py-2 sm:py-2
                            bg-black text-[#FAF9F6] font-semibold text-base sm:text-sm
                            rounded-full overflow-hidden
                            transition-all duration-500
                            ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
                            hover:rotate-2 hover:rounded-xl
                            hover:shadow-[0_15px_40px_rgba(233,220,201,0.6)]
                            "
                        >
                            <span
                                className="
                                absolute inset-0
                                bg-[conic-gradient(#f3e5d3_0deg,#E9DCC9_120deg,#d8c2a6_240deg)]
                                opacity-0 scale-0
                                transition-all duration-500 ease-in-out
                                group-hover:opacity-70 group-hover:scale-150
                                "
                            ></span>

                            <span className="relative z-10">
                                Book a Free Trial Class
                            </span>
                        </button>

                    </div>

                    <div className='w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden group'>

                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="
                            absolute top-0 left-0 w-full h-full object-cover
                            transition-all duration-700 ease-in-out
                            group-hover:scale-105 
                            group-hover:brightness-110 
                            group-hover:contrast-105
                            "
                        >
                            <source src="/Landing.mp4" type="video/mp4" />
                        </video>

                        <div className='absolute inset-0 bg-black/30'></div>

                    </div>

                </div>

            </section>
        </main>
    )
}