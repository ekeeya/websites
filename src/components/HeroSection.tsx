import QrCodeCard from "./QrCodeCard.tsx";

import heroBg from "../assets/hero1.png";
import uanchamImg from "../assets/uancham.png";
import qrImg from "../assets/qrcode.png";

const HeroSection = () => {
    const heroBgImage = heroBg;
    return (
        <section id="home" className="relative overflow-hidden h-[700px] md:h-[780px] lg:flex-1 flex items-center pt-28">
            {/* Zoomable background layer to avoid white gaps on smaller screens */}
            <div
                className="absolute hidden lg:block inset-0 bg-cover transition-transform duration-500 ease-out scale-100 md:scale-[1.1] lg:scale-100"
                style={{ 
                    backgroundImage: `url('${heroBgImage}')`,
                    backgroundPosition: '70% center'
                }}
            />
            {/* Mobile background with 70% height */}
            <div
                className="absolute inset-x-0 top-0 h-full bg-[#eaeedc] transition-transform duration-500 ease-out scale-100 md:hidden"
            />
            <div
                className="absolute inset-x-0 top-0 h-[70%] bg-cover transition-transform duration-500 ease-out scale-100 md:hidden"
                style={{ 
                    backgroundImage: `url('${heroBgImage}')`,
                    backgroundPosition: '70% center'
                }}
            />
            {/* Left Section with Logo and Icons */}
            <div className="absolute z-10 bg-white pb-4 md:p-6 lg:p-8 rounded-lg shadow-lg left-1/2 md:left-20 lg:left-32 top-[74%] md:top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 transition-all duration-300 ease-in-out w-[320px] h-[275px] lg:w-[500px] lg:h-[432px]">
                <img src={uanchamImg} alt="Pancham Illustration" className="w-full h-full object-cover bhashini-skip-translation" />
            </div>

            {/* Right Section with QR Code */}
            <div className="hidden sm:block absolute bottom-8 right-6 md:bottom-12 md:right-16 lg:bottom-16 lg:right-24 z-20 w-32 md:w-40 lg:w-52">
                <QrCodeCard
                    scanText="Scan here"
                    qrCodeImage={qrImg}
                />
            </div>
        </section>
    );
};

export default HeroSection;