type ConnectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    accentClass?: string;
    className?: string;
};

const ConnectCard = (props: ConnectCardProps) => {
    const { title, description, imageSrc, accentClass = "bg-cyan-700", className } = props;
    return (
        <div className={`relative bg-white rounded-3xl shadow-xl flex items-stretch gap-6 p-2 w-[720px] aspect-[16/9] ${className || ""}`}>
            {/* Title badge (inside card) */}
            <div className={`absolute top-14 left-6 ${accentClass} text-white font-bold text-xl px-6 py-2 rounded-full shadow`}>{title}</div>

            {/* Exiting pointer from the middle of the title (single SVG so joint is perfect) */}
            <svg
                className="absolute -left-24 top-20 -translate-y-1/2 z-10"
                width="128"
                height="16"
                viewBox="0 0 128 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="0" y1="8" x2="108" y2="8" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
                <line x1="108" y1="2" x2="120" y2="8" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="108" y1="14" x2="120" y2="8" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="flex-1 px-6 left-6 text-gray-900 mt-30">
                <p className="text-xl leading-7">{description}</p>
            </div>
            <img src={imageSrc} alt="context" className="w-[44%] h-full object-cover rounded-xl" />
        </div>
    );
};

const ConnectSection = () => {
    const backgroundImageUrl = '/src/assets/connects-bg.png';
    return (
        <section className="relative h-[1200px] text-white bg-cover bg-center" style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
            {/* Left gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/0"></div>

            {/* Heading */}
            <h2 className="absolute left-16 top-12 text-4xl font-extrabold tracking-wide">PANCHAM Connects...</h2>

            {/* Left vertical rail */}
            <div className="absolute left-16 top-28 h-[600px] w-[4px] bg-cyan-400"></div>

            {/* Cards stack */}
            <div className="absolute left-40 top-40 flex flex-col gap-16">
                <ConnectCard
                    title="Panchayat Functionaries"
                    description="Enhanced capacity of Gram Panchayat functionaries and increased awareness of communities through use of technology."
                    imageSrc="/src/assets/connect-1.jpg"
                    accentClass="bg-cyan-800"
                />

                <ConnectCard
                    title="Citizens"
                    description="Improved communication and information flow to rural communities, especially women, youth, and children."
                    imageSrc="/src/assets/connect-2.png"
                    accentClass="bg-sky-800"
                />
            </div>
        </section>
    );
};

export default ConnectSection;
