import HowItWorksDirection from "./HowItWorksDirection.tsx";
import DividerPointer from "./DividerPointer.tsx";

const HowItWorks = () => {
    return (
        <div className="bg-[#eaeedc] pb-10">
            <div className="flex flex-col mx-0 lg:ml-50 ">
                <div className="relative z-10 flex rounded-xl items-center bg-[#eaeedc] justify-start lg:justify-center p-2 w-full lg:w-1/4 h-auto translate-y-0 lg:-translate-y-[80%]">
                    <span className="text-3xl lg:text-4xl font-bold ml-4 lg:ml-0">How it Works</span>
                </div>
                <div className="relative flex flex-wrap xl:flex-nowrap items-stretch xl:items-center gap-4 lg:gap-3 xl:gap-8 px-3 xl:px-0 transition-all duration-300 ease-in-out">
                    <HowItWorksDirection
                        image="src/assets/girl.png"
                        text="Scan QR Code"
                    />
                    <HowItWorksDirection
                        image="src/assets/girl-1.png"
                        text="Link takes you to PANCHAM on WhatsApp"
                    />
                    <HowItWorksDirection
                        image="src/assets/girl-2.png"
                        text="Get all answers in one place - PANCHAM"
                    />
                    
                    {/* Absolute positioned dividers */}
                    {/* Desktop: Horizontal arrows between cards */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-96 -translate-x-1/2 z-20">
                        <DividerPointer/>
                    </div>
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[53%] -translate-x-1/2 z-20">
                        <DividerPointer/>
                    </div>
                    
                    {/* Mobile: Vertical arrows between cards */}
                    <div className="block lg:hidden absolute top-22 left-24 z-20">
                        <DividerPointer/>
                    </div>
                    <div className="block lg:hidden absolute top-55 left-24 z-20">
                        <DividerPointer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;