type DirectionProps={
    image:string
    text:string;
}
const HowItWorksDirection = (props:DirectionProps)=>{
    const {image, text} = props;
    return(
        <div className="flex items-center justify-between z-0 bg-[#222707] rounded-lg overflow-hidden w-full basis-full lg:basis-1/2 xl:basis-[28rem] flex-shrink-0 space-x-3 transition-all duration-300 ease-in-out lg:h-36 xl:h-40">
            <img src={`${image}`} alt="Woman with phone" className="rounded-l-lg w-28 h-28 lg:w-36 lg:h-full object-cover transition-all duration-300" />
            <div className="flex-1 text-white text-left pr-2">
                <div className="text-sm lg:text-xl lg:w-1/2">{text}</div>
            </div>
        </div>
    )
}

export default HowItWorksDirection;