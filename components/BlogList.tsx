export default function BlogList() {
    const items = [
        { id: "001", title: "Block by block" },
        { id: "002", title: "Today makes tomorrow" },
        { id: "003", title: "Title" },
        { id: "004", title: "Title" },
    ]

    return (
        <div className="bg-black min-h-screen py-8">
            <div className="max-w-4xl space-y-24">
                {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-8">
                        <div className="relative">
                            <svg className="w-8 md:w-[600px] h-[2px]" viewBox="0 0 600 2" preserveAspectRatio="none">
                                <path d="M0 1 L600 1" stroke="#FF5D3F" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-4 justify-self-start -mt-2 font-nippo">
                            <span className="text-[#FF5D3F] font-mono text-sm">{item.id}</span>
                            <h2 className="text-white font-bold text-2xl">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

