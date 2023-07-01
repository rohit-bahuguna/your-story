import React, { useState } from 'react';
import Layout from './comman/Layout';
import { useSelector } from 'react-redux';
import PostCard from './comman/PostCard';
import { FaSearch } from 'react-icons/fa';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { searchPost } from '../utils/searchpost';
import SearchBar from './comman/SearchBar';

const Explore = () => {
	const {
		post: { posts, totalPosts, isLoading, message, error }
	} = useSelector(state => state);
	const [search, setSearch] = useState("");

	const searchedPosts = searchPost(posts, search)
	return (
		<Layout>
			<div className='flex flex-col md:w-[83vw] gap-5 justify-center items-center'>
				<SearchBar search={search} setSearch={setSearch} style={`w-[90vw] md:w-[50vw]`} />
				<div className='grid grid-cols-3  gap-2 '>
					{
						searchedPosts.map(post => <PostCard post={post} />)
					}
				</div>
			</div>
		</Layout>
	);
};

export default Explore;
