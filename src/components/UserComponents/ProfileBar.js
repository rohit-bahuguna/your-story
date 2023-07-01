import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { followUser, getCurrentUser, unfollowUser } from '../../redux/features/userSlice';
import { getUserFollowing, isFollowed } from '../../utils';
import { updateAuthFollowing } from '../../redux/features/authSlice';
const ProfileBar = () => {
	const { user } = useSelector(state => state.auth);
	const { users } = useSelector(state => state.user)
	const dispatch = useDispatch()

	useState(() => {
		const following = getUserFollowing(users, user.id)
		dispatch(updateAuthFollowing(following))
	}, [users])

	return (
		<div className="flex flex-col gap-3 mt-12   w-screen px-10 pl-5">
			<div className='flex justify-between items-center px-3 border rounded-lg py-2'>
				<Link to={`/profile/${user?.email}`}>
					<div onClick={() => dispatch(getCurrentUser(user?.email))}>
						<img src={user.profileAvatar == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5fVJf_A_8CxQnzHFw4qV9LejNulQNoCoMCZq3nCdtcHcQCb8GVZfq3K8bx66lCDNy6ttCX2cbak&usqp=CAU&ec=48600112" : user.profileAvatar} alt={user?.fullName} className='w-12 rounded-full' />
					</div>
				</Link>
				<div>
					<p className='font-semibold'>{user?.fullName}</p>
					<p className='pl-2 text-gray-400'>@{user?.username}</p>

				</div>
				<Link to={`/profile/${user?.email}`}
					onClick={() => dispatch(getCurrentUser(user?.email))}
				>
					<button className='text-indigo-700 hover:bg-indigo-100 rounded-full px-3'>
						View</button>
				</Link>
			</div>

			<div>
				<h1 className='my-5 text-lg text-gray-600 text-semibold'>Suggested for you</h1>
				<div className=" flex flex-col gap-5">
					{
						users && users.map((singleUser) => {
							if (user.email !== singleUser.email) {
								return <ProfileCard key={singleUser._id} user={singleUser} />
							}
						})
					}
				</div>
			</div>
		</div>
	);
};

const ProfileCard = ({ user: { id, _id, profileAvatar, fullName, username, email, followers } }) => {
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.auth);
	const isUserFolowing = isFollowed(followers, user.id)

	const followOrUnfollow = () => {
		isUserFolowing ? dispatch(unfollowUser({ token: user.token, followUserId: _id })) : dispatch(followUser({ token: user.token, followUserId: _id }))
	}

	return (


		<div className="flex justify-between items-center px-3"
			onClick={() => dispatch(getCurrentUser(email))}
		>

			<Link to={`/profile/${email}`}>
				<div className="flex gap-2">
					<img src={profileAvatar} alt={username} className='w-12 rounded-full' />
					<div>
						<p className='font-semibold'>
							{fullName}
						</p>
						<p className='pl-2 text-gray-400'>
							@{username}
						</p>
					</div>
				</div>
			</Link>
			<button className='text-indigo-700 hover:bg-indigo-100 rounded-full px-3 py-1'
				onClick={followOrUnfollow}
			>

				{
					isUserFolowing ? "Unfollow" : "Follow"
				}
			</button>
		</div>


	)
}

export default ProfileBar;
