import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { RiDeleteBack2Line } from 'react-icons/ri';

const SearchBar = ({ search, setSearch, style, focus = false }) => {

    return (
        <div className='relative'>
            <input type="text" value={search} className={`bg-gray-200 text-black ${style} py-2 px-10  rounded-full`} placeholder='Search Friends and faimly' onChange={(e) => setSearch(e.target.value)} autoFocus={focus} />
            <FaSearch className='absolute inset-3 text-gray-500' />
            <RiDeleteBack2Line className='absolute right-4 top-3 text-xl text-black hover:text-red-600 ' onClick={() => {
                search && setSearch("")
            }} />
        </div>
    )
}

export default SearchBar