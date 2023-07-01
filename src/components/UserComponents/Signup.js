import React, { useEffect, useState } from 'react';
import { signUpHandler } from '../../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading, error, status } = useSelector(state => state.auth);
	const [authData, setAuthData] = useState({
		email: '',
		password: '',
		name: ""
	});
	const getUserAuthData = e => {
		setAuthData({ ...authData, [e.target.name]: e.target.value });
	};

	const userSignup = e => {
		e.preventDefault();
		console.log(authData);
		if (authData.email && authData.password && authData.name) {
			dispatch(signUpHandler(authData));
		}
	};

	useEffect(() => {
		if (status) {
			navigate('/posts');
		}
	}, [status]);

	return <div className="flex justify-center md:items-center gap-10 h-screen p-5 ">
		<section className="hidden md:inline">
			<img src="/profile.png" alt="" />
		</section>
		<section className=" md:w-1/4  flex flex-col md:gap-5 gap-20 mt-10 md:mt-0 ">
			<div className=" border-2 border-indigo-500 px-1 pt-2.5 text-center h-12 self-center text-xl hover:bg-indigo-100  text-indigo-700   ">

				<h1 className="border-b-2 border-x-2 font-bold border-indigo-500   hover:cursor-pointer px-3   ">
					{' '}YOUR STORY
				</h1>
			</div>

			<form className="flex flex-col gap-8 ">
				<div className="">
					<label
						for="email"
						className="block mb-2 text-sm font-medium text-gray-900 ">
						Your Full Name
					</label>
					<input
						type="text"
						name="name"
						value={authData.name}
						onChange={getUserAuthData}
						className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Enter Your Full Name"
						required
					/>
				</div>
				<div className="">
					<label
						for="email"
						className="block mb-2 text-sm font-medium  ">
						Your email
					</label>
					<input
						type="email"
						name="email"
						value={authData.email}
						onChange={getUserAuthData}
						className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Enter Your Email"
						required
					/>
				</div>
				<div className="">
					<label
						for="password"
						className="block mb-2 text-sm font-medium text-gray-900 ">
						Your password
					</label>
					<input
						type="password"
						name="password"
						value={authData.password}
						onChange={getUserAuthData}
						placeholder="Enter Your Password"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
						required
					/>
				</div>

				<div className="flex  gap-5 self-center items-center">
					<button
						className=" md:w-[5vw] text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg   sm:w-auto py-2  px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						onClick={userSignup}>
						{isLoading
							? <svg
								aria-hidden="true"
								role="status"
								class="inline  w-6 h-8 mx-4  animate-spin"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="#E5E7EB"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentColor"
								/>
							</svg>
							: 'Signup'}
					</button>

				</div>
				<div className="px-7">
					<p>
						Already Have an acount ?{' '}

						<span className="text-sky-700 hover:cursor-pointer hover:border-b-2 hover:border-sky-700" onClick={() => navigate(-1)}>Login</span>

					</p>
				</div>
			</form>
		</section>
	</div>;
};

export default Signup;
