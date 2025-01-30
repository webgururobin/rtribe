import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            {/* <Image src="/logo.png" className='aspect-video' width={300} height={20} alt='logo' /> */}
            <Link href="/" className='space-y-8 flex flex-col'>
                <h1 className='font-nippo text-7xl tracking-[12px] text-white'>
                    RTRIBE
                </h1>
                <span className='font-nippo text-2xl uppercase font-light px-2 text-white'>
                    Premium Athletic Wear
                </span>
            </Link>
        </div>
    )
}

export default Header