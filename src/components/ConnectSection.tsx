type ConnectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  accentClass?: string;
  className?: string;
  hidePointerOnDesktop?: boolean;
};

import connectsBg from "../assets/connects-bg.png";
import connect1 from "../assets/connect-1.jpg";
import connect2 from "../assets/connect-2.png";

const ConnectCard = (props: ConnectCardProps) => {
  const {
    title,
    description,
    imageSrc,
    accentClass = "bg-cyan-700",
    className,
  } = props;
  return (
    <div
      className={`relative bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2 xl:gap-6 p-2 aspect-auto lg:aspect-[16/9] ${className || ""}`}
    >
      {/* Title badge (inside card) */}
      <div
        className={`absolute top-14 lg:top-8 xl:top-14 left-6 ${accentClass} text-white font-bold text-lg lg:text-base xl:text-xl px-5 lg:px-4 xl:px-6 py-2 lg:py-1 xl:py-2 rounded-full shadow`}
      >
        {title}
      </div>

      <div className="flex-1 px-4 lg:px-4 xl:px-6 left-6 text-gray-900 mt-30 lg:mt-24 xl:mt-30 overflow-y-auto">
        <p className="text-lg lg:text-sm xl:text-lg leading-7 lg:leading-normal xl:leading-7">
          {description}
        </p>
      </div>
      <img
        src={imageSrc}
        alt="context"
        className="w-full lg:w-[44%] h-48 lg:h-full object-cover rounded-xl bhashini-skip-translation"
      />
    </div>
  );
};

const ConnectSection = () => {
  const backgroundImageUrl = connectsBg;
  return (
    <div className="flex flex-col">
      <div className="lg:hidden h-[349px]">
        <img
          src={connectsBg}
          alt="Sensitization"
          className="h-full w-full object-cover object-[65%_center]"
        />
      </div>
      <section className="relative lg:h-[560px] xl:h-[650px] h-[1200px] w-full text-white">
        {/* Background */}
        <div
          className="absolute inset-0 hidden lg:block bg-cover bg-[right_20%_bottom_1%]"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        />

        <div className="absolute inset-0 bg-black/80 lg:hidden" />

        <div className="absolute hidden lg:block inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/0" />

        {/* Center container */}
        <div className="relative z-10 flex flex-col items-center lg:items-start pt-12">
          {/* Inner wrapper controls alignment */}
          <div className="w-[90vw] max-w-[1200px] mx-auto">
            {/* Title */}
            <h2 className="text-2xl xl:text-4xl font-extrabold tracking-wide mb-12">
              PANCHAM Connects...
            </h2>

            {/* Cards */}
            {/* Cards */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16">
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

            {/* Center Button */}
            <div className="flex justify-center mt-12">
              <button className="border border-white transition-colors text-white font-semibold px-8 py-3 rounded-full shadow-lg">
                Know more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectSection;
