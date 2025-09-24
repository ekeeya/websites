import HowItWorksDirection from "./HowItWorksDirection.tsx";
import DividerPointer from "./DividerPointer.tsx";

const HowItWorks = () => {
    return (
        <div className="bg-[#eaeedc] pb-10">
            <div className="flex flex-col mx-0 lg:mx-50 ">
                <div className="relative z-10 flex rounded-xl items-center bg-[#eaeedc] justify-start lg:justify-center p-2 w-full lg:w-1/4 h-auto translate-y-0 lg:-translate-y-[80%]">
                    <span className="text-2xl lg:text-4xl font-bold ml-4 lg:ml-0">How it Works</span>
                </div>
                <div className="flex flex-wrap xl:flex-nowrap items-stretch xl:items-center gap-3 lg:gap-4 xl:-space-x-2 px-3 xl:px-0 transition-all duration-300 ease-in-out">
                    <HowItWorksDirection
                        image="src/assets/girl.png"
                        text="Scan QR Code"
                    />
                    <div className="hidden lg:block"><DividerPointer/></div>
                    <HowItWorksDirection
                        image="src/assets/girl-1.png"
                        text="Link takes you to PANCHAM on WhatsApp"
                    />
                    <div className="hidden lg:block"><DividerPointer/></div>
                    <HowItWorksDirection
                        image="src/assets/girl-2.png"
                        text="Get all answers in one place - PANCHAM"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;