import QrCodeCard from "./QrCodeCard.tsx";

import heroBg from "../assets/hero1.png";
import uanchamImg from "../assets/uancham.png";
import qrImg from "../assets/qrcode.png";

const HeroSection = () => {
    const heroBgImage = heroBg;
    return (
        <section className="relative overflow-hidden h-[700px] md:h-[780px] lg:h-[850px] flex items-center pt-28">
            {/* Zoomable background layer to avoid white gaps on smaller screens */}
            <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 ease-out scale-100 md:scale-[1.1] lg:scale-100"
                style={{ backgroundImage: `url('${heroBgImage}')` }}
            />
            {/* Left Section with Logo and Icons */}
            <div className="absolute z-10 bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg left-1/2 md:left-20 lg:left-32 top-[62%] md:top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 transition-all duration-300 ease-in-out w-[320px] h-[275px] lg:w-[500px] lg:h-[432px]">
                <img src={uanchamImg} alt="Pancham Illustration" className="w-full h-full object-cover" />
            </div>

            {/* Right Section with QR Code */}
            <div className="hidden sm:block">
                <QrCodeCard scanText="Scan here" qrCodeImage={qrImg} className="right-6 md:right-20 lg:right-32 transition-all duration-300 ease-in-out" />
            </div>
        </section>
    );
};

export default HeroSection;