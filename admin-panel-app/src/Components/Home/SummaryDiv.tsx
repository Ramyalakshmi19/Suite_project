// import React from 'react'
// import { FaArrowTrendUp } from "react-icons/fa6";

// const tempData = [
//     {
//         title: "Total Wokers",
//         value: "300k",
//         png: "worker.png",
//         trend: 4,
//         bg: "red-500",
//     },
//     {
//         title: "Team Leads",
//         value: "50",
//         png: "manager.png",
//         trend: 4,
//         bg: "green-500",
//     },
//     {
//         title: "Appoinments",
//         value: "78",
//         png: "calender.png",
//         trend: 4,
//         bg: "blue-500"
//     },
//     {
//         title: "Appoinments",
//         value: "78",
//         png: "calender.png",
//         trend: 4,
//         bg: "violet-500"
//     },
// ]
// const SummaryDiv = () => {
//     return (
//         <div className='flex justify-between items-center mt-10'>
//             <div className="bg-gradient-to-l from-red-500 to-pink-300 report-div rounded-[1rem] p-2">
//                 <span className='col-span-2 font-semibold text-xl self-center'>Total Employees</span>
//                 <span className='col-start-1 font-bold text-4xl row-start-2'>783K</span>
//                 <div className='col-start-2 flex flex-col bg-transparent'>
//                     <FaArrowTrendUp className="font-bold"/>
//                     <span>+4</span>
//                 </div>
//                 <img src="/public/worker.png" alt='worker-png' className='w-24 row-start-1 col-start-3 row-end-3'/>
//             </div><div className="bg-gradient-to-l from-[#32C35B] to-[#6BD488] report-div rounded-[1rem] p-2">
//                 <span className='col-span-2 font-semibold text-xl self-center'>Total Employees</span>
//                 <span className='col-start-1 font-bold text-4xl row-start-2 '>783K</span>
//                 <div className='col-start-2 flex flex-col bg-transparent'>
//                 <FaArrowTrendUp className="font-bold"/>
//                     <span className='bg-transparent'>+4</span>
//                 </div>
//                 <img src="/public/worker.png" alt='worker-png' className='w-24  row-start-1 col-start-3 row-end-3'/>
//             </div><div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 report-div rounded-[1rem] p-2">
//                 <span className='col-span-2 font-semibold text-xl  self-center'>Total Employees</span>
//                 <span className='col-start-1 font-bold text-4xl row-start-2 '>783K</span>
//                 <div className='col-start-2 flex flex-col '>
//                 <FaArrowTrendUp className="font-bold"/>
//                     <span className='bg-transparent'>+4</span>
//                 </div>
//                 <img src="/public/worker.png" alt='worker-png' className='w-24  row-start-1 col-start-3 row-end-3'/>
//             </div><div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 report-div rounded-[1rem] p-2">
//                 <span className='col-span-2 font-semibold text-xl  self-center'>Total Employees</span>
//                 <span className='col-start-1 font-bold text-4xl row-start-2 '>783K</span>
//                 <div className='col-start-2 flex flex-col'>
//                 <FaArrowTrendUp className="font-bold"/>
//                     <span className='bg-transparent'>+4</span>
//                 </div>
//                 <img src="/public/worker.png" alt='worker-png' className='w-24  row-start-1 col-start-3 row-end-3'/>
//             </div>
//         </div>
//     )
// }

// export default SummaryDiv;


import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
const tempData = [
    {
      title: "Total Workers",
      value: "300",
      icon: <FaUser />,
      trend: 2,
      bg: "red-500",
    },
    {
      title: "Team Leads",
      value: "50",
      icon: <FaUserTie />,
      trend: 1,
      bg: "red-500",
    },
    {
        title: "On-Site",
        value: "78",
        icon: <FaHardHat/>,
        trend: 3,
        bg: "red-500",
      },
    {
      title: "Temperature",
      value: "32C",
      icon: <FaTemperatureLow/>,
      trend: 4,
      bg: "red-500",
    },
    // Add more data entries as needed
  ];
  
  const SummaryDiv = () => {
    return (
      <div className='flex justify-between items-center mt-10'>
        {tempData.map((data, index) => (
            
          <div key={index} className={`bg-gradient-to-l from-${data.bg} report-div rounded-[1rem] p-2`}>
            <span className='col-span-2 font-semibold text-xl self-center'>{data.title}</span>
            <span className='col-start-1 font-bold text-4xl row-start-2'>{data.value}</span>
            <div className='col-start-2 flex flex-col bg-transparent'>
              <FaArrowTrendUp className="font-bold" />
              <span className='bg-transparent'>{`+${data.trend}`}</span>
            </div>
            {data.icon && (
  <div className='w-20 h-20 mt-5 mb-5 flex items-center justify-center row-start-1 col-start-3 row-end-3'>
    {React.cloneElement(data.icon, { size: '2em' })} {/* Adjust the size as needed */}
  </div>
)}


          </div>
        ))}
      </div>
    );
  };
  
  export default SummaryDiv;
  
