import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import { BiBookmark } from 'react-icons/bi';
import {

	MdLightMode,
	MdDarkMode,
	MdLogout
} from 'react-icons/md';
import { toggleLogoutModal } from '../../redux/features/globalSlice';
import { useDispatch } from 'react-redux';
import Logo from './Logo';
const Header = () => {
	const dispatch = useDispatch()
	const [display, setDisplay] = useState(false)
	return (
		<div className=" flex border-b w-full text-xl justify-between items-center p-3  md:hidden relative"  >
			<div >
				<Link to="/posts">
					<div className=" border-2 border-indigo-500 px-1 pt-2.5 text-center h-12  text-xl hover:bg-indigo-100  text-indigo-700   ">

						<h1 className="border-b-2 border-x-2 font-bold border-indigo-500   hover:cursor-pointer px-3   ">
							{' '}YOUR STORY
						</h1>
					</div>
				</Link>
			</div>
			<div className="">
				<GiHamburgerMenu className='hover:text-sky-500 text-3xl' onClick={() => setDisplay(!display)} />
			</div>

			{display && <div className='absolute right-5 top-10 bg-white z-20 border p-3 rounded-xl' >
				<Link to="/bookmarks">
					<p className='flex  items-center gap-3 border-b py-1 hover:bg-gray-200 px-2 hover:text-sky-500'

					> <BiBookmark className='text-xl' /> BookMark</p>
				</Link>
				<p className='flex  items-center gap-3 border-b py-1 hover:bg-gray-200 px-2 hover:text-sky-500'> <MdDarkMode className='text-xl' />  Switch Mode</p>
				<p className='flex  items-center gap-3 border-b py-1 hover:bg-gray-200 px-2 hover:text-sky-500' onClick={() => {
					dispatch(toggleLogoutModal(true))
					setDisplay(false)
				}}> <MdLogout className='text-xl' />  Logout</p>
			</div>}
		</div>
	);
};

export default Header;
