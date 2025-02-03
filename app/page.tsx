import Image from 'next/image'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'

const Homepage = () => {
    return (
        <div>
            <div className='bg-[#1E1E1E] grid gap-5 grid-cols-2 justify-between max-sm:grid-cols-1 '>
                <div className='container max-w-screen-lg mx-auto flex flex-col justify-center md:h-screen gap-y-16 max-sm:px-4 py-8 max-sm:order-2 lg:pl-10'>
                    <Header />

                    <div className='space-y-4'>
                        <h1 className='font-general-sans text-5xl md:text-[164px] leading-[1] text-white font-extrabold z-10 relative'>Launching <br />Soon</h1>
                        <Newsletter />
                    </div>
                </div>
                <div className='max-sm:self-end justify-self-end '>
                    <Image sizes="(min-width: 2020px) 900px, (min-width: 1680px) calc(87.5vw - 850px), (min-width: 880px) calc(22.18vw + 232px), (min-width: 640px) calc(89.55vw - 349px), 100vw" src="/fox.png" className='aspect-auto w-auto h-full bg-[#1E1E1E]' width={1000} height={1000} alt='logo' />
                </div>
            </div>

            <div className='font-bold font-nippo text-[15vw] gap-0 leading-[0.8] text-transparent bg-[#1e1e1e] h-40 md:min-h-[40vh] relative'>
                <span className='stroked-text'>Unlock</span><br />
                <span className='right-0 absolute stroked-text'>Athlete</span>
            </div>

        </div>
    )
}

export default Homepage