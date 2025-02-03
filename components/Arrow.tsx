
interface ArrowProps {
    color?: string
    className?: string
}

const Arrow = ({ color, className }: ArrowProps) => {
    return (
        <svg className={className} width="94" height="6" viewBox="0 0 94 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M94 3.00001L89 0.113257L89 5.88676L94 3.00001ZM-10 3.5L89.5 3.50001L89.5 2.50001L-10 2.5L-10 3.5Z" fill={color || "#F05A28"} />
        </svg>

    )
}

export default Arrow