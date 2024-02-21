
// import React from 'react'
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import {useState,useEffect} from "react"
// import { IoIosAdd } from "react-icons/io";
// import { Button } from '@/components/ui/button';
// import { MdEditSquare, MdDelete } from "react-icons/md";
// import {newUser} from "../../types"
// import {Api} from "@/Api";
// import axios from 'axios';
// const AddDialog = ({action,userData}:{action:string,userData?:newUser}) => {
//     const [formData,setFormData]=useState<newUser | null>(null);
//     const [status,setStatus]=useState<boolean>(false);
//     useEffect(()=>{
//         if(userData)
//         {
//             setFormData({...userData})
//         }
//     },[userData]);
//     const onSubmit=(event)=>{
//         event.preventDefault();
//         Api.post("/users/new_user",{
//             ...formData
//         }).then(()=>{
//             setStatus(true);
//         }).catch((err)=>{
//         console.log(err)
//         })
//     }
//     return (
//         <Dialog>
//             <DialogTrigger>
//                {(action!='edit')?<div className="bg-[#2BA14C] p-3 rounded-xl text-xl text-white flex justify-center items-center hover:bg-[#2BA14C]">
//                     <span>Add new</span>
//                     <IoIosAdd className="text-xl" />
//                 </div>:  <Button className='bg-blue-500 rounded-xl hover:bg-blue-400'>
//                     <span>Edit</span>
//                     <MdEditSquare />
//                 </Button>  }
//             </DialogTrigger>
//             <DialogContent className='bg-[#1F1E27] h-3/4 outline-none border-none rounded-lg overflow-y-scroll addDialog'>
//                 <DialogHeader>
//                     <DialogTitle className="text-center">Employee Detail</DialogTitle>
//                     <DialogDescription className='flex justify-center items-center'>

//                       {!status?<form onSubmit={onSubmit} className='addInput grid grid-cols-2 gap-x-3 gap-y-5'>
//                             <label htmlFor='fname' className=''>
//                                 <span>First Name</span>
//                                 <input onChange={(e)=>{setFormData((prev:newUser)=>({...prev,name:e.target.value}))}} id="fname" />
//                             </label>
//                             <label htmlFor='lname'>
//                                 <span>Last Name</span>
//                                 <input id="lname" />
//                             </label>
//                             <label htmlFor='doj' className='col-span-2'>
//                                 <span>Date of joining</span>
//                                 <input onChange={(e)=>{setFormData((prev:newUser)=>({...prev,dateOfjoining:e.target.value}))}} id="doj" type='date' />
//                             </label>
//                             <label htmlFor='age'>
//                                 <span>Age</span>
//                                 <input onChange={(e)=>{setFormData((prev:newUser)=>({...prev,age:e.target.value}))}} id="age" />
//                             </label>
//                             <label htmlFor='phn'>
//                                 <span>Phone number</span>
//                                 <input onChange={(e)=>{setFormData((prev:newUser)=>({...prev,phoneNumber:e.target.value}))}} id="phn" />
//                             </label>
//                             <label htmlFor="note" className='col-span-2'>
//                                 <span>Note:</span>
//                                 <textarea id="note" onChange={(e)=>{setFormData((prev:newUser)=>({...prev,note:e.target.value}))}} />
//                             </label>
//                             <button className='col-span-2 w-40 justify-self-center bg-blue-500 p-3 rounded-xl font-semibold text-lg'>Add employee</button>
//                         </form>:
//                         <div>
//                             <h3>User added successfully</h3>
//                             </div>}
//                     </DialogDescription>
//                 </DialogHeader>
//             </DialogContent>
//         </Dialog>
//     )
// }

// export default AddDialog


import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IoIosAdd } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { MdEditSquare } from "react-icons/md";
import { newUser } from "../../types";
import { Api } from "@/Api";

const AddDialog = ({ action, userData }: { action: string, userData?: newUser }) => {
    const [formData, setFormData] = useState<newUser | null>(null);
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        if (userData) {
            setFormData(userData);
        } else {
            setFormData({
                fname: '',
                lname:'',
                dateOfjoining: '',
                age: 0,
                phoneNumber: '',
                note: '',
                employeeID:""
            });
        }
    }, [userData]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(action=='edit')
        {
            console.log(formData)
            Api.put(`/users/update_user?id=${formData?.employeeID}`,{
                ...formData
            }).then(() => {
                setStatus(true);
            })
            .catch((err) => {
                console.log(err);
            });
        }
        else{
            Api.post("/users/new_user", { ...formData })
                .then(() => {
                    setStatus(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        window.location.reload(false)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev)=>{
            const data={
                ...prev,
                [name]:value,
            }
            return data
        })
    };

    return (
        <Dialog>
            <DialogTrigger>
                {(action !== 'edit') ?
                    <div className="bg-[#2BA14C] p-3 rounded-xl text-xl text-white flex justify-center items-center hover:bg-[#2BA14C]">
                        <span>Add new</span>
                        <IoIosAdd className="text-xl" />
                    </div> :
                    <Button className='bg-blue-500 rounded-xl hover:bg-blue-400'>
                        <span>Edit</span>
                        <MdEditSquare />
                    </Button>
                }
            </DialogTrigger>
            <DialogContent className='bg-[#1F1E27] h-3/4 outline-none border-none rounded-lg overflow-y-scroll addDialog'>
                <DialogHeader>
                    <DialogTitle className="text-center">Employee Detail</DialogTitle>
                    <DialogDescription className='flex justify-center items-center'>
                        {!status ?
                            <form onSubmit={onSubmit} className='addInput grid grid-cols-2 gap-x-3 gap-y-5'>
                                <label htmlFor='fname' className=''>
                                    <span>First Name</span>
                                    <input onChange={handleChange} id="fname" name="fname" value={formData?.fname || ''} />
                                </label>
                                <label htmlFor='lname'>
                                    <span>Last Name</span>
                                    <input onChange={handleChange} id="lname" name="lname" value={formData?.lname || ''} />
                                </label>
                                <label htmlFor='doj' className='col-span-2'>
                                    <span>Date of joining</span>
                                    <input onChange={handleChange} id="doj" type='date' name="dateOfjoining" value={formData?.dateOfjoining || ''} />
                                </label>
                                <label htmlFor='age'>
                                    <span>Age</span>
                                    <input onChange={handleChange} id="age" name="age" value={formData?.age || ''} />
                                </label>
                                <label htmlFor='phn'>
                                    <span>Phone number</span>
                                    <input onChange={handleChange} id="phn" name="phoneNumber" value={formData?.phoneNumber || ''} />
                                </label>
                                <label htmlFor="note" className='col-span-2'>
                                    <span>Note:</span>
                                    <textarea onChange={handleChange} id="note" name="note" value={formData?.note || ''} />
                                </label>
                                {action!='edit'?
                                    <button className='col-span-2 w-40 justify-self-center bg-blue-500 p-3 rounded-xl font-semibold text-lg'>Add employee</button>:
                                    <button className='col-span-2 w-40 justify-self-center bg-blue-500 p-3 rounded-xl font-semibold text-md'>Update Employee</button>}
                            </form> :
                            <div>
                                <h3>User added successfully</h3>
                            </div>
                        }
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddDialog;

