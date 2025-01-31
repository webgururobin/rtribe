import Image from 'next/image'
import Header from './components/Header'
import Newsletter from './components/Newsletter'

const Homepage = () => {
    return (
        <div>
            <div className='bg-black flex gap-5 max-sm:flex-col-reverse'>
                <div className='container max-w-screen-lg mx-auto flex flex-col justify-center md:h-screen gap-y-16 px-4 py-8'>
                    <Header />

                    <div className='px-2 space-y-4'>
                        <h1 className='font-general-sans text-5xl md:text-7xl font-bold leading-[1.2] text-white'>Launching <br />Soon</h1>
                        <Newsletter />
                    </div>
                </div>
                <div>
                    <Image sizes="(min-width: 2020px) 900px, (min-width: 1680px) calc(87.5vw - 850px), (min-width: 880px) calc(22.18vw + 232px), (min-width: 640px) calc(89.55vw - 349px), 100vw" src="/right.png" className='aspect-auto max-sm:h-48 w-auto justify-self-end' width={900} height={1800} alt='logo' />
                </div>
            </div>

            <div className='font-bold font-nippo text-[15vw] gap-0 leading-[0.8] text-[#1A1A1A] bg-transparent h-40 md:min-h-[600px] relative'>
                <span>Unlock</span><br />
                <span className='right-0 absolute'>Athlete</span>
            </div>

        </div>
    )
}

export default Homepage