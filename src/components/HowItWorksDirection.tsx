type DirectionProps={
    image:string
    text:string;
}
const HowItWorksDirection = (props:DirectionProps)=>{
    const {image, text} = props;
    return(
        <div className="flex items-center justify-between z-0 bg-[#222707] rounded-lg overflow-hidden w-full basis-full lg:basis-1/2 xl:basis-1/3 flex-shrink-0 space-x-3 transition-all duration-300 ease-in-out lg:h-36 xl:h-40">
            <img src={`${image}`} alt="Woman with phone" className="rounded-l-lg w-28 h-28 lg:w-36 lg:h-full object-cover transition-all duration-300" />
            <div className="flex-1 text-white text-left pr-4">
                <div className="text-sm lg:text-xl leading-relaxed">{text}</div>
            </div>
        </div>
    )
}

export default HowItWorksDirection;