import { MdOutlineBrightnessLow } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";


const Navbar = ({ page }: { page: string }) => {
    return (
        <div className="flex justify-between items-center p-4 px-10 bg-[#1F1E27] w-full">
            <div className="flex justify-center items-center gap-10">
                <Sidebar/>
                <h2 className="font-bold text-3xl">{page}</h2>

            </div>
            <div className="flex icon-div gap-4 max-md:hidden">
                <span><MdOutlineBrightnessLow /></span>
                <span><MdMessage /></span>
                <span><FaBell /></span>
            </div>
        </div>
    )
}

export default Navbar
