import Image from 'next/image'

const Header = () => {
    return (
        <Image src="/logo.png" className='aspect-auto px-2' width={400} height={100} alt='logo' />
    )
}

export default Header