import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from "./ProfileCard"
import Layout from '../comman/Layout';
import { useParams } from 'react-router-dom';
import { getCurrentUser, setCurrentProfilePic } from '../../redux/features/userSlice';
import { getCurrentUsersPosts } from '../../redux/features/postSlice';
import PostGrid from './PostGrid';


const Profile = () => {
	const { email } = useParams()
	const dispatch = useDispatch()
	const { auth, user: { currentUser }  } = useSelector(state => state);

	useEffect(() => {

		dispatch(getCurrentUsersPosts(email))

	}, [email])


	return <Layout>

		<div className="flex   justify-center items-center md:w-[82.80vw]   mt-5  mb-20  ">
			<div className="flex flex-col items-center md:gap-20">
				<ProfileCard user={auth.user.email === currentUser.email ? auth.user : currentUser} />

				<PostGrid />
			</div>
		</div>
	</Layout>
};

export default Profile;