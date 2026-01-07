type ConnectCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    accentClass?: string;
    className?: string;
    pointerDirection?: "right" | "down";
};

import connectsBg from "../assets/connects-bg.png";
import connect1 from "../assets/connect-1.jpg";
import connect2 from "../assets/connect-2.png";

const ConnectCard = ({
  title,
  description,
  imageSrc,
  accentClass = "bg-cyan-700",
  className,
  pointerDirection = "right",
}: ConnectCardProps) => {
  return (
    <div
      className={`
        relative bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row items-stretch gap-6 p-2
        w-full
        lg:w-[clamp(280px,40%,720px)]
        aspect-auto lg:aspect-[16/9]
        ${className || ""}
      `}
    >
      {/* Title badge */}
      <div className={`absolute top-14 left-6 ${accentClass} text-white font-bold text-xl px-6 py-2 rounded-full shadow`}>
        {title}
      </div>

      {/* ================= POINTERS ================= */}

      {(pointerDirection === "right" || pointerDirection === "down") && (
        <svg
          className={`absolute -left-3 md:-left-15 top-20 -translate-y-1/2 z-10 w-14 lg:w-[clamp(2rem,10.3vw,9rem)] ${
            pointerDirection === "down" ? "lg:hidden" : ""
          }`}
          height="16"
          viewBox="0 0 90 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0" y1="8" x2="50" y2="8" stroke="#22D3EE" strokeWidth="5" strokeLinecap="round" className="lg:stroke-[3]" />
          <line x1="50" y1="2" x2="60" y2="8" stroke="#22D3EE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="lg:stroke-[3]" />
          <line x1="50" y1="14" x2="60" y2="8" stroke="#22D3EE" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="lg:stroke-[3]" />
        </svg>
      )}

      {pointerDirection === "down" && (
        <svg
          className="absolute -top-4 left-10 -translate-y-1/2 z-10 hidden md:block"
          width="16"
          viewBox="0 0 16 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="8" y1="0" x2="8" y2="125" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" className="lg:stroke-[3]" />
          <line x1="2" y1="125" x2="8" y2="135" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="lg:stroke-[3]" />
          <line x1="14" y1="125" x2="8" y2="135" stroke="#22D3EE" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" className="lg:stroke-[3]" />
        </svg>
      )}

      {/* ================= CONTENT ================= */}

      <div className="flex-1 px-6 text-gray-900 mt-28">
        <p className="text-lg lg:text-xl leading-7">{description}</p>
      </div>

      <img
        src={imageSrc}
        alt="context"
        className="w-full md:w-[44%] h-48 md:h-full object-cover rounded-xl"
      />
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
            <section className="relative lg:h-[700px] h-[1200px] ml-[-20px] md:ml-0 text-white">
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
                <div className="absolute left-10 lg:left-16 top-28 lg:h-[127px] h-[654px] w-[4px] bg-cyan-400"></div>

                <div className="absolute hidden lg:block top-19 h-[4px] w-[14%] left-[35%] bg-cyan-400">
                </div>


                {/* Cards stack */}
                <div className="
                  absolute right-0 top-40 w-[90vw]
                  mx-auto left-1/2 -translate-x-1/2
                  flex flex-col items-center
                  gap-6
                  lg:left-[6.5rem] lg:translate-x-0 lg:mx-0
                  lg:flex-row lg:items-stretch
                  lg:gap-16 px-6 lg:px-0
                ">
                    <ConnectCard
                        title="Panchayat Functionaries"
                        description="Enhanced capacity of Gram Panchayat functionaries and increased awareness of communities through use of technology."
                        imageSrc={connect1}
                        accentClass="bg-cyan-800"
                        pointerDirection="right"
                    />

                    <ConnectCard
                        title="Citizens"
                        description="Improved communication and information flow to rural communities, especially women, youth, and children."
                        imageSrc={connect2}
                        accentClass="bg-sky-800"
                        pointerDirection="down"
                    />
                </div>
            </section>
        </div>
    );
};

export default ConnectSection;
