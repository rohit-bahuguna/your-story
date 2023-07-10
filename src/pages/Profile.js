import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileCard from "../components/profile/ProfileCard"
import Layout from '../components/comman/Layout';
import { useParams } from 'react-router-dom';
import { getCurrentUser, setCurrentProfilePic } from '../redux/features/userSlice';
import { getCurrentUsersPosts } from '../redux/features/postSlice';
import PostGrid from '../components/Posts/PostGrid';


const Profile = () => {
	const { email } = useParams()
	const dispatch = useDispatch()
	const { auth, user: { currentUser, users }, post: { posts } } = useSelector(state => state);
	useEffect(() => {

		dispatch(getCurrentUsersPosts(email))

	}, [email, posts])

	useEffect(() => {
		dispatch(getCurrentUser(auth.user.email))
	}, [users])

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