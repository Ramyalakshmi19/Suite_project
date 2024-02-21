// import Navbar from "@/Components/Navbar"
// import { Button } from "@/components/ui/button"
// import { IoSearchSharp } from "react-icons/io5";
// import { IoIosAdd } from "react-icons/io";
// import TableDiv from "../Components/TableDiv"
// import AddDialog from "@/Components/Employees/AddDialog";
// const Employees = () => {

//     return (
//         <div>
//             <Navbar page="Employees" />
//             <div className="px-20 pt-5">
//                 <div className="flex justify-between items-center my-10">
//                   <AddDialog/>
//                     <label htmlFor="emp-search" className="rounded-3xl bg-transparent border-gray-500 border-2 p-3 flex w-fit items-center ">
//                         <input className="bg-transparent focus:outline-0" placeholder="Search here" id="emp-search" />
//                         <IoSearchSharp />
//                     </label>
//                 </div>
//                 <TableDiv/>
//             </div>
//         </div>
//     )
// }

// export default Employees


import React, { useState } from 'react';
import Navbar from "@/Components/Navbar";
import { IoSearchSharp } from "react-icons/io5";
import TableDiv from "../Components/TableDiv";
import AddDialog from "@/Components/Employees/AddDialog";

const Employees = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <Navbar page="Employees" />
            <div className="px-20 pt-5">
                <div className="flex justify-between items-center my-10">
                    <AddDialog />
                    <div className="rounded-3xl bg-transparent border-gray-500 border-2 p-3 flex w-fit items-center ">
                        <input
                            className="bg-transparent focus:outline-0"
                            placeholder="Search here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <IoSearchSharp />
                    </div>
                </div>
                <TableDiv searchQuery={searchQuery} />
            </div>
        </div>
    );
}

export default Employees;
