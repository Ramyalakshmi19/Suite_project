import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdHome } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";

const Sidebar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger><GiHamburgerMenu /></SheetTrigger>
                <SheetContent side={"left"} className="bg-[#1F1E27] w-56 outline-none border-none p-2">
                    <SheetHeader>
                        {/* <SheetTitle>Menu</SheetTitle> */}
                        <SheetDescription className="mt-10 ">
                        <div className="flex flex-col text-lg font-bold text-gray-400 text-center side-menu">
                            <Link to={"/"}>
                               <IoMdHome />
                               <span>Home</span>
                                </Link>
                            <Link to={"/employees"}>
                            <GrUserWorker />
                            <span>Employees</span>
                            </Link>
                        </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Sidebar
