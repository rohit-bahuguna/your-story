import React, {  useRef, useState } from 'react';
import { BsGlobe } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../redux/features/userSlice';

import EditProfile from './EditProfile';
import { isFollowed } from '../../utils';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const ProfileCard = ({ user }) => {
	const dispatch = useDispatch()
	const { auth, post:{currentUsersPosts} } = useSelector(state => state);
	const { profileAvatar, fullName, username, followers, following, website, email, bio, _id } = user
	const [display, setDisplay] = useState({
		upload: false,
		avatar: false,
		edit: false,
	})


	const isUserFolowing = isFollowed(followers, auth.user.id)
	const [currentProfilePic, setCurrentProfilePic] = useState(profileAvatar)


	const closeModal = () => {
		setDisplay({ ...display, avatar: false })
	}

	const getProfilePicture = (image) => {

		if (image) {
			(setCurrentProfilePic(image))
		} else {
			(setCurrentProfilePic(profileAvatar))
		}
	}

	const followOrUnfollow = () => {
		isUserFolowing ? dispatch(unfollowUser({ token: auth.user.token, followUserId: _id })) : dispatch(followUser({ token: auth.user.token, followUserId: _id }))
	}

	const profileRef = useRef(null)
	useOutsideClick(profileRef, () => setDisplay({ ...display, edit: false }))

	return <div className="flex justify-evenly items-center flex-col md:flex-row relative  md:w-[50vw] w-screen " >

		<div className=' relative'

		>
			<img src={profileAvatar == "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5fVJf_A_8CxQnzHFw4qV9LejNulQNoCoMCZq3nCdtcHcQCb8GVZfq3K8bx66lCDNy6ttCX2cbak&usqp=CAU&ec=48600112" : profileAvatar} alt={fullName} className='w-56 aspect-square	 rounded-full ' />

		</div>
		<div className="flex flex-col  gap-5 w-screen px-5 md:w-1/2">

			<div className='flex items-center md:gap-0 gap-3 flex-col md:flex-row justify-between '>

				<h1 className="text-xl font-semibold mt-3 md:mt-0">{username}</h1>
				{auth.user.email === email && <button className="border rounded-full text-indigo-700 hover:bg-indigo-100 px-3 py-1"
					onClick={() => setDisplay({ ...display, edit: true })}
				> Edit Profile</button>}
				{auth.user.email !== email && <button className="border rounded-full text-lg text-indigo-700 hover:bg-indigo-100 px-3 py-1"
					onClick={followOrUnfollow}
				>
					{
						isUserFolowing ? "Unfollow" : "Follow"
					}
				</button>}
			</div>
			<div className='flex w- justify-between  items-center'>

				<p className=''><span className='text-black font-semibold mr-2'>{ currentUsersPosts && currentUsersPosts.length}</span> Posts</p>
				<p><span className='text-black font-semibold mr-2 '>{followers && followers.length}</span> Followers</p>
				<p><span className='text-black font-semibold mr-2 '>{following && following.length}</span> Following</p>	   </div>
			<div className='flex flex-col gap-2'><p className="text-lg  font-semibold mr-2">{fullName}</p>
				{website && <Link to={website} target='_blank'>
					<p className='hover:text-sky-500'> <BsGlobe className="inline text-sky-500 mr-3" /> {website}</p>
				</Link>}

				<p className=''> <AiOutlineMail className="inline text-sky-500 mr-3" /> {email}</p>

				<p>{bio}</p></div>
		</div>

		{display.avatar && <div className='absolute z-30 top-1/2 md:top-0 bg-white  md:right-0' >
			<Avatar closeModal={closeModal} getProfilePicture={getProfilePicture} />

		</div>}

		{
			display.edit && <div className='absolute z-20 top-0    md:left-0 bottom-0 ' >

				<EditProfile data={{ currentProfilePic, setCurrentProfilePic, user, display, setDisplay, auth, profileRef }} />
			</div>
		}



	</div>;
};

export default ProfileCard;