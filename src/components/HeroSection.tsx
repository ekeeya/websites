import QrCodeCard from "./QrCodeCard.tsx";

import heroBg from "../assets/hero1.png";
import uanchamImg from "../assets/uancham.png";
import qrImg from "../assets/qrcode.png";

const HeroSection = () => {
  const heroBgImage = heroBg;
  return (
    <section
      id="home"
      className="relative overflow-hidden h-[500px] md:h-[780px] lg:flex-1 flex items-center pt-28"
    >
      {/* Desktop Background */}
      <div
        className="absolute hidden lg:block inset-0 bg-cover transition-transform duration-500 ease-out scale-100 md:scale-[1.1] lg:scale-100"
        style={{
          backgroundImage: `url('${heroBgImage}')`,
          backgroundPosition: "70% center",
        }}
      />

      {/* Mobile background fallback */}
      <div className="absolute inset-x-0 top-0 h-full bg-[#2f2418] md:hidden transition-transform duration-500 ease-out scale-100" />
      <div
        className="absolute inset-x-0 top-0 h-[70%] bg-cover md:hidden transition-transform duration-500 ease-out scale-100"
        style={{
          backgroundImage: `url('${heroBgImage}')`,
          backgroundPosition: "70% center",
        }}
      />

      {/* Left Section with Logo and Icons */}
      <div
        className="
          absolute z-10 bg-white pb-2 md:pb-4 lg:pb-6 p-2 md:p-4 lg:p-6 xl:p-8 rounded-lg shadow-lg
          left-1/2 md:left-20 lg:left-24 xl:left-32
          top-[74%] md:top-1/2
          -translate-x-1/2 md:translate-x-0 -translate-y-1/2
          transition-all duration-300 ease-in-out
          w-[220px] sm:w-[260px] md:w-[310px] xl:w-[500px]
          h-[190px] sm:h-[220px] md:h-[260px]  xl:h-[432px]
        "
      >
        <img
          src={uanchamImg}
          alt="Pancham Illustration"
          className="w-full h-full object-cover bhashini-skip-translation"
        />
      </div>

      {/* Right Section with QR Code */}
      <div
        className="
          hidden sm:block absolute z-20
          bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-16
          right-4 sm:right-6 md:right-10 lg:right-16 xl:right-24
          w-24 sm:w-28 md:w-32 lg:w-40 xl:w-52
        "
      >
        <QrCodeCard scanText="Scan here" qrCodeImage={qrImg} />
      </div>
    </section>
  );
};

export default HeroSection;