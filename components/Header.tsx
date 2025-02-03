import Image from 'next/image'

const Header = () => {
    return (
        <div>
            <Image src="/rtribe-logo.png" className='aspect-auto px-2' width={400} height={100} alt='logo' />
        </div>
    )
}

export default Header