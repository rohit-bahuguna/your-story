import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/features/userSlice';
import { getAllPosts } from '../../redux/features/postSlice';
import PostCard from './PostCard';
import { AiTwotoneFire } from 'react-icons/ai';
import { RiExpandUpDownFill } from 'react-icons/ri';
import { sortByDate, sortByTranding } from '../../redux/features/postSlice';
import Loader from '../comman/Loader';
const Posts = () => {
	const [active, setActive] = useState("latest");
	const dispatch = useDispatch();
	const {
		post: { posts, isLoading, }
	} = useSelector(state => state);

	useEffect(() => {
		dispatch(getAllPosts());
		dispatch(getAllUsers());
	}, []);



	return (
		<div className="flex flex-col  gap-10   justify-center items-center px-5  ">

			<div className="flex h  justify-center  gap-10   w-1/4">


				<p
					className={
						active === 'latest'
							? 'bg-gray-200 py-1 px-5 rounded-full text-indigo-500'
							: ''
					}
					onClick={() => {
						setActive('latest');
						dispatch(sortByDate());
					}}>
					<div className='flex gap-2 items-center'>
						<RiExpandUpDownFill className="inline text-2xl" />{' '}
						<span className="text-lg">Latest</span>
					</div>
				</p>
				<p>|</p>
				<p
					className={
						active === 'tranding'
							? 'bg-gray-200 py-1 px-5 rounded-full text-indigo-500'
							: ''
					}
					onClick={() => {
						setActive('tranding');
						dispatch(sortByTranding());
					}}>
					<div className='flex gap-2 items-center'>
						<AiTwotoneFire className="inline text-2xl" />{' '}
						<span className="text-lg">Tranding</span>
					</div>
				</p>
			</div>
			<div className=''>
				{isLoading
					? <div className='w-screen flex justify-center h-screen'><Loader /></div>
					: <div className="flex flex-col  gap-5">
						{posts &&
							posts.map(post => <PostCard key={post._id} post={post} />)}
					</div>}
			</div>
		</div>
	);
};

export default Posts;
