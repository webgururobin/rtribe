import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
    return (
        <div className='relative min-h-screen overflow-hidden'>
            <Image sizes="(min-width: 2020px) 900px, (min-width: 1680px) calc(87.5vw - 850px), (min-width: 880px) calc(22.18vw + 232px), (min-width: 640px) calc(89.55vw - 349px), 100vw" src="/fox.png" className='
            absolute md:-right-10 -top-10 -right-20 max-h-[100vh] w-auto md:w-[55vw] md:h-auto
            ' width={1000} height={1000} alt='fox' />

            <div className='h-full bg-[#1E1E1E]'>
                <div className='container max-w-screen-2xl mx-auto flex flex-col justify-between min-h-[70vh] md:h-screen gap-y-16 max-sm:px-4 py-8 max-sm:order-2 lg:pl-10'>
                    <Header />

                    <div className='space-y-4'>
                        <h1 className='font-general-sans text-5xl md:text-[164px] leading-[1] text-white font-extrabold z-10 relative bg-transparent px-2'>Launching <br />Soon</h1>
                        <Newsletter />
                    </div>
                </div>
            </div>

            <div className='font-bold font-nippo text-[26vw] md:text-[16vw] gap-0 leading-[0.8] text-transparent  md:-mt-14 md:-mb-20 h-[32vw] block max-sm:relative'>
                {/* <span className='stroked-text z-0  max-sm:-top-10 max-sm:absolute'>Unlock</span><br /> */}
                <Image className='max-sm:-top-10 max-sm:absolute' src="/unlock.png" width={1000} height={220} alt='unlock' />
                <Image className='absolute z-10 bottom-[10rem] max-sm:-bottom-2 right-0' src="/athlete.png" width={1000} height={220} alt='unlock' />
            </div>

            <Footer />
        </div>
    )
}

export default LandingPage