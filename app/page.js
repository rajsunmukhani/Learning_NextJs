"use client"
import React, { useState } from 'react'

const page = () => {
  const [tempName, setTempName] = useState("John")
  const changeHandler =() => {
    setTempName("Doe")
  }
  return (
    <div>
      <h1 className='text-3xl mb-5'>
        My name is {tempName}
      </h1>
        <button className='bg-red-100 text-red-500 p-2 rounded-md' onClick={changeHandler}>
            Change Name
        </button>
    </div>
  )
}

export default page