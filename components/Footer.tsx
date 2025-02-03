import Link from 'next/link'
import React from 'react'
import Arrow from './Arrow'

const Footer = () => {
    return (
        // <div className='font-general max-w-screen-lg mx-auto py-4 text-center border-t-2 border-[#1A1A1A] text-xs text-slate-300'>&copy; {new Date().getFullYear()} RTRIBE</div>

        <div className='h-auto md:min-h-32 bg-black py-8 flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-5'>
            <div className="left space-y-4">
                <a target='_blank' href={"https://www.instagram.com/rtribe.in?igsh=MWdpcG52M2hscXpjdQ%3D%3D&utm_source=qr"} className='flex gap-1 items-center'>
                    <Arrow />
                    <span className='text-orange font-nippo font-lg tracking-[2] uppercase'>Instagram</span>
                </a>
                <a target='_blank' href={"https://www.linkedin.com/company/rtribe-in/"} className='flex gap-1 items-center'>
                    <Arrow />
                    <span className='text-orange font-nippo font-lg tracking-[2] uppercase'>Linkedin</span>
                </a>
            </div>
            <Link href={'/'} className='text-white font-nippo text-lg'>
                <span className='text-orange'> &copy;</span> {new Date().getFullYear()} <span className='stroked-copy'>RTRIBE</span>
            </Link>
        </div>
    )
}

export default Footer