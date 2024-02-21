import React from 'react'
import { Input } from "@/components/ui/input"

const InputTab = () => {
  return (
    <div className='flex justify-between'>
      <div>
      <h1 className='font-semibold text-4xl'>Welcome!!</h1>
      <p>Health monitoring system</p>
      </div>
      <Input className='w-80 rounded-2xl' placeholder='Search here..'/>
    </div>
  )
}

export default InputTab
