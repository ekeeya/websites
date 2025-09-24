import {TbArrowRightDashed} from "react-icons/tb";

const DividerPointer = ()=>{
    return(
        <div
            className="flex bg-[#eaeedc] items-center justify-center shadow-md rounded-full h-15 w-15"
            style={{ zIndex: 10 }}
        >
            <TbArrowRightDashed size={30} />
        </div>
    )
}
export default DividerPointer;