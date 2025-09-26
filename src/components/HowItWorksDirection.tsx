type DirectionProps={
    image:string
    text:string;
}
const HowItWorksDirection = (props:DirectionProps)=>{
    const {image, text} = props;
    return(
        <div className="flex items-center justify-between z-0 bg-[#222707] rounded-lg w-full basis-full lg:basis-2/3 xl:basis-1/4 flex-shrink-0 space-x-2 transition-all duration-300 ease-in-out">
            <img src={`${image}`} alt="Woman with phone" className="rounded-l-lg w-28 h-28 lg:w-35 lg:h-35 object-cover transition-all duration-300 bhashini-skip-translation" />
            <div className="flex-1 text-white text-left pr-2">
                <div className="text-sm lg:text-xl lg:w-full">{text}</div>
            </div>
        </div>
    )
}

export default HowItWorksDirection;