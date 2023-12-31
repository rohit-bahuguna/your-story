import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Posts from '../components/Posts/Posts';
import ProfileBar from '../components/comman/ProfileBar';
import Layout from '../components/comman/Layout';
import CreatePost from './CreatePost';

const Home = () => {
	const dispatch = useDispatch();
	const { globalReducer: { openModal } } = useSelector(state => state);
	return (
		<Layout>
			<div className="flex  md:w-[82.80vw] w-screen justify-center  mb-14">
				<div className="flex  justify-center items-start md:w-3/4 z-0 ">
					<Posts />
				</div>
				<div className=" w-1/3 hidden md:flex  ">
					<ProfileBar />
				</div>
			</div>

		</Layout>
	);
};

export default Home;
