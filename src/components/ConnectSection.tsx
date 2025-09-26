type ConnectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    accentClass?: string;
    className?: string;
};

import connectsBg from "../assets/connects-bg.png";
import connect1 from "../assets/connect-1.jpg";
import connect2 from "../assets/connect-2.png";

const ConnectCard = (props: ConnectCardProps) => {
    const { title, description, imageSrc, accentClass = "bg-cyan-700", className } = props;
    return (
        <div className={`relative bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row items-stretch gap-6 p-2 w-76 lg:w-[720px] aspect-auto lg:aspect-[16/9] ${className || ""}`}>
            {/* Title badge (inside card) */}
            <div className={`absolute top-14 left-6 ${accentClass} text-white font-bold text-xl px-6 py-2 rounded-full shadow`}>{title}</div>

            {/* Exiting pointer from the middle of the title (single SVG so joint is perfect) */}
            <svg
                className="absolute -left-15 ml-10 lg:ml-0 lg:-left-24 top-20 -translate-y-1/2 z-10 w-12 lg:w-32"
                height="16"
                viewBox="0 0 128 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line x1="0" y1="8" x2="108" y2="8" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" className="lg:stroke-[3]" />
                <line x1="108" y1="2" x2="120" y2="8" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="lg:stroke-[3]" />
                <line x1="108" y1="14" x2="120" y2="8" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="lg:stroke-[3]" />
            </svg>

            <div className="flex-1 px-6 left-6 text-gray-900 mt-30">
                <p className="text-lg lg:text-xl leading-7">{description}</p>
            </div>
            <img src={imageSrc} alt="context" className="w-full lg:w-[44%] h-48 lg:h-full object-cover rounded-xl bhashini-skip-translation" />
        </div>
    );
};

const ConnectSection = () => {
    const backgroundImageUrl = connectsBg;
    return (
        <div className="flex flex-col">
            <div className="lg:hidden h-[349px]">
                <img src={connectsBg} alt="Sensitization" className="h-full w-full object-cover object-[65%_center]" />
            </div>
            <section className="relative h-[1200px] ml-[-20px] md:ml-0 text-white">
                {/* Desktop background image */}
                <div 
                    className="absolute inset-0 hidden lg:block bg-cover bg-center" 
                    style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
                ></div>
                
                {/* Mobile background overlay */}
                <div className="absolute inset-0 bg-black/80 lg:hidden"></div>
                
                {/* Left gradient overlay for readability */}
                <div className="absolute hidden lg:block inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/0"></div>

                {/* Heading */}
                <h2 className="absolute left-10 lg:left-16 top-12 lg:text-4xl text-2xl font-extrabold tracking-wide">PANCHAM Connects...</h2>

                {/* Left vertical rail */}
                <div className="absolute left-10 lg:left-16 top-28 lg:h-[598px] h-[654px] w-[4px] bg-cyan-400"></div>

                {/* Cards stack */}
                <div className="absolute left-15 lg:left-40 top-40 flex flex-col gap-8 lg:gap-16">
                    <ConnectCard
                        title="Panchayat Functionaries"
                        description="Enhanced capacity of Gram Panchayat functionaries and increased awareness of communities through use of technology."
                        imageSrc={connect1}
                        accentClass="bg-cyan-800"
                    />

                    <ConnectCard
                        title="Citizens"
                        description="Improved communication and information flow to rural communities, especially women, youth, and children."
                        imageSrc={connect2}
                        accentClass="bg-sky-800"
                    />
                </div>
            </section>
        </div>
    );
};

export default ConnectSection;
