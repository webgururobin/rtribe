import React from 'react'
import Header from '../components/Header'
import BlogList from '../components/BlogList'

export const metadata = {
    title: 'Blog',
    description: 'Blog',
}

const BlogPage = () => {
    return (
        <>
            <div className='mx-auto py-4 max-w-screen-lg'>
                <Header />

                <div className="bg-black min-h-[600px] py-8 relative px-4">
                    <div className="flex items-start mb-24 max-sm:flex-col">
                        <h2 className="text-[#F05A29] text-2xl tracking-wider font-nippo whitespace-nowrap mr-8">B L O G</h2>

                        <div className="md:flex-1 relative mt-2">
                            <svg className="w-full h-12" viewBox="0 0 1000 48" preserveAspectRatio="none">
                                <path d="M0 1 L850 1 L950 40" stroke="#F05A29" strokeWidth="2" fill="none" />
                            </svg>

                            <span className="absolute md:-right-8 top-0 text-[#FF5D3F] font-mono bg-black px-2 transform -translate-y-1/2">
                                0 0 1
                            </span>
                        </div>
                    </div>

                    <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight tracking-wider font-nippo uppercase">
                        Build
                        <br />
                        Your
                        <br />
                        Mindset
                    </h1>
                </div>

            </div>
            <BlogList />
        </>
    )
}

export default BlogPage