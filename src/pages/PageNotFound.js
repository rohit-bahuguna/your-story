import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[40%] relative'>
        <img src="/pageNotFound.svg" alt="page not found" className=' h-auto   ' />
        <h1 className='absolute bottom-16 font-semibold  text-4xl text-[#407bff] inset-x-[24%]'>PAGE NOT FOUND</h1>
      </div>
      <button className='botton' onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default PageNotFound