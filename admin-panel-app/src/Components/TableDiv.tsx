// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { Button } from '@/components/ui/button'
// import { MdEditSquare } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import {newUser} from "@/types"
// import {useState,useEffect} from "react";
// import {Api} from "../Api";
// const TableDiv = () => {
//     const [users,setUsers]=useState<newUser[]>();
//     useEffect(()=>{
//         Api.get("/users/")
//         .then(data=>{
//             setUsers(data);
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     })
//     return (
//         <div className='bg-[#1F1E27] rounded-xl p-3'>
//             <Table>
//                 <TableCaption>A list of your recent invoices.</TableCaption>
//                 <TableHeader>
//                     <TableRow className='text-lg font-semibold'>
//                         <TableHead className="w-[100px]">Name</TableHead>
//                         <TableHead>Email</TableHead>
//                         <TableHead>Mobile Number</TableHead>
//                         <TableHead className="">Age</TableHead>
//                         <TableHead className="text-right">Date of join</TableHead>
//                         <TableHead className="text-center">Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     <TableRow className='text-base'>
//                         <TableCell className="font-medium">INV001</TableCell>
//                         <TableCell>Paid</TableCell>
//                         <TableCell>xxxxxxxxx</TableCell>
//                         <TableCell className="">25</TableCell>
//                         <TableCell className="text-right">22/10/2023</TableCell>
//                         <TableCell className="text-center flex justify-center gap-3">
//                             <Button className='bg-blue-500 rounded-xl hover:bg-blue-400'>
//                                 <span>Edit</span>
//                                 <MdEditSquare />
//                             </Button>  
//                             <Button className='bg-red-500 rounded-xl hover:bg-red-400'>
//                                 <span>Edit</span>
//                                 <MdDelete />
//                             </Button>
//                         </TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>

//         </div>
//     )
// }

// export default TableDiv

// import React, { useState, useEffect } from 'react';
// import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { Button } from '@/components/ui/button';
// import { MdEditSquare, MdDelete } from "react-icons/md";
// import DeleteDialog from "./Employees/DeleteDialog"
// import { newUser } from "@/types";
// import { Api } from "../Api";
// import AddDialog from "../Components/Employees/AddDialog"
// const TableDiv = () => {
//     const [users, setUsers] = useState<newUser[]>([]);

//     useEffect(() => {
//         // Fetch data from API
//         Api.get("/users/")
//             .then(res => {
//                 setUsers([...res.data])
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div className='bg-[#1F1E27] rounded-xl p-3'>
//             <Table>
//                 <TableCaption>A list of your recent invoices.</TableCaption>
//                 <TableHeader>
//                     <TableRow className='text-lg font-semibold'>
//                         <TableHead>First Name</TableHead>
//                         <TableHead>Last Name</TableHead>
//                         <TableHead>Mobile Number</TableHead>
//                         <TableHead className="">Age</TableHead>
//                         <TableHead className="text-right">Date of join</TableHead>
//                         <TableHead className="text-center">Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {users.map((user, index) => (
//                         <TableRow key={index} className='text-base'>
//                             <TableCell className="font-medium">{user.fname}</TableCell>
//                             <TableCell className="font-medium">{user.lname}</TableCell>
//                             <TableCell>{user.phoneNumber}</TableCell>
//                             <TableCell className="">{user.age}</TableCell>
//                             <TableCell className="text-right">{user.dateOfjoining}</TableCell>
//                             <TableCell className="text-center flex justify-center gap-3">
//                               <AddDialog action="edit" userData={user}/>
//                                 <DeleteDialog id={user.employeeID}/>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//     );
// };

// export default TableDiv;


import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MdEditSquare } from "react-icons/md";
import DeleteDialog from "./Employees/DeleteDialog";
import { newUser } from "@/types";
import { Api } from "../Api";
import AddDialog from "../Components/Employees/AddDialog";

const TableDiv = ({ searchQuery }: { searchQuery: string }) => {
    const [users, setUsers] = useState<newUser[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<newUser[]>([]);

    useEffect(() => {
        // Fetch data from API
        Api.get("/users/")
            .then(res => {
                setUsers([...res.data]);
                setFilteredUsers([...res.data]); // Show all users by default
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        // Apply search filter when searchQuery changes
        if (searchQuery.trim() !== '') {
            const filtered = users.filter(user =>
                user.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.phoneNumber.includes(searchQuery.toLowerCase())
            );
            setFilteredUsers(filtered);
        } else {
            // If search query is empty, show all users
            setFilteredUsers(users);
        }
    }, [searchQuery, users]);

    return (
        <div className='bg-[#1F1E27] rounded-xl p-3'>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow className='text-lg font-semibold'>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Mobile Number</TableHead>
                        <TableHead className="">Age</TableHead>
                        <TableHead className="text-right">Date of join</TableHead>
                        <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredUsers.map((user, index) => (
                        <TableRow key={index} className='text-base'>
                            <TableCell className="font-medium">{user.fname}</TableCell>
                            <TableCell className="font-medium">{user.lname}</TableCell>
                            <TableCell>{user.phoneNumber}</TableCell>
                            <TableCell className="">{user.age}</TableCell>
                            <TableCell className="text-right">
                                {new Date(user.dateOfjoining).toLocaleDateString()}
                            </TableCell>

                            <TableCell className="text-center flex justify-center gap-3">
                                <AddDialog action="edit" userData={user} />
                                <DeleteDialog id={user.employeeID} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableDiv;
