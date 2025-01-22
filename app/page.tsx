import Link from 'next/link'
import Header from './components/Header'

const Homepage = () => {
    return (
        <>
            <div className='bg-black hero min-h-screen md:bg-[url("/hero-bg.png")] bg-cover bg-center'>
                <div className='container max-w-screen-lg mx-auto flex flex-col justify-center h-screen gap-y-16'>
                    <Header />

                    <div className='px-2 space-y-4'>
                        <h1 className='font-general-sans text-7xl font-bold leading-[1.2]'>Launching <br />Soon</h1>
                        <div className='w-fit'>
                            <Link href='/blog' className='border border-orange px-6 py-2 font-nippo font-bold  text-2xl block text-orange uppercase'>Read Blog</Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className='font-bold font-nippo text-[15vw] gap-0 leading-[0.8] text-[#1A1A1A]'>
                <span>Unlock</span><br />
                <span className='right-0 absolute'>Athlete</span>
            </div>

        </>
    )
}

export default Homepage