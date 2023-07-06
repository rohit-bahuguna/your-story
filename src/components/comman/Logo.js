import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/posts">
            <div className=" border-2 border-indigo-500 px-1 pt-1.5 text-center h-12 hover:bg-indigo-100  text-2xl  text-indigo-700 mb-6 hidden md:block ">
                <h1 className="border-b-2 border-x-2  font-bold px-1 border-indigo-500  hover:cursor-pointer hidden md:block lg:hidden  ">
                    YR
                </h1>
                <h1 className="border-b-2 border-x-2 font-bold border-indigo-500  hidden hover:cursor-pointer px-3 lg:block  ">
                    {' '}YOUR STORY
                </h1>
            </div>
        </Link>)
}

export default Logo