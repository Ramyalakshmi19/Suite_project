import React from 'react'
import { BarChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
    }
]

const GraphDetails = () => {
    return (
        <div className='grid grid-cols-3 grid-row-2 gap-4 mx-auto my-4'>
            <div className='p-3 bg-[#1F1E27] rounded-xl'>
                <BarChart width={420} height={350} data={data}  className='bg-transparent'>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className='col-span-2 bg-[#1F1E27] p-3 rounded-xl'>
                <LineChart width={830} height={350} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className='p-3 row-start-2 col-span-2 rounded-xl bg-[#1F1E27]'>
                <div className='flex justify-between mb-3'>
                    <span className='font-bold text-2xl'>
                        Top Rated Employees
                    </span>
                    <span className='text-yellow-500 font-semibold'>View more</span>
                </div>
                <div className='flex overflow-x-auto'>
                    <div className='text-center text-xs w-28 flex flex-col items-center'>
                    <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' className='w-16 h-16 rounded-full' alt="" />
                        <p className='font-semibold text-sm'>David</p>
            
                        <p className=''>Folsam Ave, Suite 600 San 795 Francisco</p>
                        <p>Cadge 9417</p>
                    </div>
                </div>
            </div>
            <div className='row-start-2 p-3 rounded-xl bg-[#1F1E27]'>
                <div className='font-semibold flex justify-between'><h2>Recent Patient</h2>
                    <span className='font-semibold text-yellow-500'>View more</span>
                </div>
                <div>
                    <div className='border-b-2 border-gray-700 items-center flex gap-5 p-2'>
                        <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' className='w-16 h-16 rounded-full' alt="" />
                        <div className='flex flex-col mr-auto'><p>Aziz Bakre</p>
                            <p>25 years</p>
                        </div>
                        <span>Pending</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GraphDetails
