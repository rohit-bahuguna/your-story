import React, { useEffect, useState } from 'react';
import SearchBar from './comman/SearchBar';
import { BsArrowLeft } from 'react-icons/bs';
import { toggleSearchModal } from '../redux/features/globalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedUser } from '../utils';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../redux/features/userSlice';

const Search = () => {
	const [search, setSearch] = useState("")
	const [searchResult, setSearchResult] = useState([])
	const dispatch = useDispatch()

	const {
		user: { users }
	} = useSelector(state => state);

	useEffect(() => {
		setSearchResult(getSearchedUser(users, search))
	}, [search])

	return <div className=' fixed  bg-white z-10 top-1/3 md:top-0 bottom-14  md:bottom-0 w-screen md:w-[26vw] py-2 px-2 border-t md:border-r shadow-lg rounded-xl flex flex-col gap-3'>
		<BsArrowLeft className='text-3xl ml-2 hover:text-indigo-700 hover:cursor-pointer' onClick={() => dispatch(toggleSearchModal(false))} />
		<SearchBar search={search} setSearch={setSearch} style={`w-[95vw] md:w-[25vw]`} focus={true} />
		<div className='mt-3 overflow-y-auto'>
			{
				searchResult && searchResult.length > 0 ? searchResult.map(({ fullName, username, profileAvatar, email }) => <Link to={`/profile/${email}`}
					onClick={() => {
						dispatch(getCurrentUser(email))
						dispatch(toggleSearchModal(false))
					}}
				>
					<div className='flex gap-3 px-2 py-2 border-b'>
						<img src={profileAvatar} alt={fullName} className='w-12 rounded-full' />
						<div>
							<p className='font-semibold text-lg'>{fullName}</p>
							<p>@{username}</p>
						</div>
					</div>
				</Link>)
					: <h1 className='text-center mt-10 text-xl font-semibold'>
						No Search Result Available
					</h1>

			}

		</div>
	</div>;
};

export default Search;
