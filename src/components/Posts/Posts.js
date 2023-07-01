import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/features/userSlice';
import { getAllPosts } from '../../redux/features/postSlice';
import PostCard from './PostCard';
import { AiTwotoneFire } from 'react-icons/ai';
import { RiExpandUpDownFill } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import { sortByDate, sortByTranding } from '../../redux/features/postSlice';
const Posts = () => {
	const [active, setActive] = useState();
	const dispatch = useDispatch();
	const {
		post: { posts, totalPosts, isLoading, message, error }
	} = useSelector(state => state);
	console.log("ppppppppppppppppppppppp", posts)
	useEffect(() => {
		dispatch(getAllPosts());
		dispatch(getAllUsers());
	}, []);

	useEffect(
		() => {
			if (message !== '') {
				toast.success(message, { autoClose: 1000 });
			}
		},
		[message]
	);

	return (
		<div className="flex flex-col gap-10 md:gap-20   justify-center items-center px-5  md:pt-2">
			<ToastContainer />
			<div className="absolute top-0 flex  justify-center items-center gap-10  mt-16  py-3 w-1/4">
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
				<p>|</p>
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
			</div>
			<div>
				{isLoading
				? 'Loading'
				: <div className="flex flex-col gap-5">
						{posts &&
							posts.map(post => <PostCard key={post._id} post={post} />)}
					</div>}
			</div>
		</div>
	);
};

export default Posts;
