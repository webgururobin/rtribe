import Link from 'next/link'
import React from 'react'
import Arrow from './Arrow'

const Footer = () => {
    return (
        <div className='h-48 bg-[#131313] py-10 flex justify-between items-center max-sm:flex-col'>
            <div className="left space-y-4 max-sm:w-full max-sm:flex max-sm:justify-between max-sm:items-end">
                <a target='_blank' href={"https://www.instagram.com/rtribe.in?igsh=MWdpcG52M2hscXpjdQ%3D%3D&utm_source=qr"} className='flex gap-2 items-center'>
                    <Arrow />
                    <span className='text-orange font-nippo font-lg tracking-[2] uppercase'>Instagram</span>
                </a>
                <a target='_blank' href={"https://www.linkedin.com/company/rtribe-in/"} className='flex gap-2 items-center max-sm:flex-row-reverse'>
                    <Arrow className='max-sm:rotate-180' />
                    <span className='text-orange font-nippo font-lg tracking-[2] uppercase'>Linkedin</span>
                </a>
            </div>
            <Link href={'/'} className='text-white font-nippo text-lg max-sm:self-center'>
                <span className='text-orange'> &copy;</span> {new Date().getFullYear()} <span className='stroked-copy'>RTRIBE</span>
            </Link>
        </div>
    )
}

export default Footer