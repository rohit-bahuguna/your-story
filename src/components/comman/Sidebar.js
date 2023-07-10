import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import {
	MdOutlineExplore,
	MdFavorite,
	MdSettings,
	MdLightMode,
	MdDarkMode,
	MdLogout,
	MdBookmark
} from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import {
	toggleDarkMode,
	toggleLogoutModal,
	toggleModal,
	toggleSearchModal
} from '../../redux/features/globalSlice';
import { NavLink } from 'react-router-dom';
import { BiBookmark } from 'react-icons/bi';
import { getCurrentUser } from '../../redux/features/userSlice';

const Sidebar = ({ direction }) => {
	const dispatch = useDispatch();
	const { globalReducer: { theme }, auth: { user } } = useSelector(state => state);
	const activeNavlink = ({ isActive }) => isActive && "text-indigo-700 md:bg-indigo-100 rounded-full"
	return (
		<div
			className={`md:border-r-2 lg:w-full  w-full md:w-20 text-center   overflow-hidden  ${theme === "dark" ? "bg-black" : "bg-white"}  `}>
			<div
				className={`md:p-3  md:h-5/6  h-14   px-2  md:py-0 mb-2 flex flex-${direction} justify-between items-center   md:gap-4 md:mt-5`}>
				<Logo />
				<NavLink className={activeNavlink} to="/posts" >
					<div className="  navlink-1 ">
						<span>
							<FaHome className="icon  " />
						</span>
						<span className="nav   ">
							Home
						</span>
					</div>
				</NavLink>
				<div className="navlink-1"
					onClick={() => dispatch(toggleSearchModal(true))}
				>
					<span>
						<FaSearch className="icon " />
					</span>
					<span className="nav  ">
						Search
					</span>
				</div>

				<NavLink className={activeNavlink} to="/explore">
					<div className="navlink-1  ">
						<span>
							<MdOutlineExplore className="icon " />
						</span>
						<span className="nav  ">
							Explore
						</span>
					</div>
				</NavLink>
				<NavLink to="/post/create" className={activeNavlink}>
					<div
						className="navlink-1 "
					>
						<span>
							<FiPlusCircle className="icon " />
						</span>
						<span className="nav  ">
							Create
						</span>
					</div>
				</NavLink>

				<NavLink className={activeNavlink} to="/bookmarks">

					<div className="navlink-2 ">
						<span>
							<BiBookmark className="icon rounded-full" />
						</span>
						<span className="nav  ">
							Bookmarks
						</span>
					</div>
				</NavLink>
				<NavLink className={activeNavlink} to={`/profile/${user.email}`} onClick={() => dispatch(getCurrentUser(user?.email))}>
					<div className="navlink-1  ">
						<span>
							<img
								src={user?.profileAvatar == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5fVJf_A_8CxQnzHFw4qV9LejNulQNoCoMCZq3nCdtcHcQCb8GVZfq3K8bx66lCDNy6ttCX2cbak&usqp=CAU&ec=48600112" : user?.profileAvatar}
								className="w-9  mt-1 h-9 hover:border-4 hover:border-indigo-700 rounded-full"
							/>
						</span>
						<span className="nav  ">
							Profile
						</span>
					</div>
				</NavLink>

				<div className=" navlink-2 "
					onClick={() => dispatch(toggleDarkMode())}
				>
					<span>

						{
							theme === "light" ? <MdDarkMode className="icon" /> : <MdLightMode className="icon" />
						}
					</span>
					<span className="w-26 text-lg  mt-1 hidden  lg:inline h-10  "

					>
						Switch Mode
					</span>
				</div>

				<div
					className=" navlink-2"
					onClick={() => dispatch(toggleLogoutModal(true))}>
					<MdLogout className="icon  " />

					<span className="w-20  text-lg  mt-1 hidden  lg:inline h-10   ">
						Log out
					</span>
				</div>

			</div>
		</div>
	);
};

export default Sidebar;
