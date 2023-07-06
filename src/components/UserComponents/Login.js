import React, { useEffect, useState } from 'react';
import { loginHandler } from '../../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LiaEyeSlash, LiaEyeSolid } from "react-icons/lia"
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';


const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading, error, status } = useSelector(state => state.auth);
	const [authData, setAuthData] = useState({
		email: '',
		password: ''
	});
	const [showPassword, setShowPassword] = useState(false)
	const getUserAuthData = e => {
		setAuthData({ ...authData, [e.target.name]: e.target.value });
	};

	const userLogin = (e, role) => {
		e.preventDefault();
		if (role === "guest") {
			setAuthData({
				password: 'guestuser',
				email: "guestuser@gmail.com",
			})

		}
		dispatch(loginHandler(authData))

	};

	useEffect(() => {
		if (status) {
			navigate('/posts');
		}
	}, [status]);

	return (
		<div className="flex justify-center md:items-center  h-screen  ">
			<section className="hidden w-[40%] sm:inline">
				<img src="/homeimg.png" alt="" className=" h-auto" />
			</section>
			<section className=" md:w-1/4 flex flex-col md:gap-5 gap-20 mt-10 md:mt-0">
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
							Your email
						</label>
						<input
							type="email"
							name="email"
							value={authData.email}
							onChange={getUserAuthData}
							className="input"
							placeholder="Enter Your Email"
							required
						/>
					</div>
					<div className="relative">
						<label
							for="password"
							className="block mb-2 text-sm font-medium text-gray-900 ">
							Your password
						</label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							value={authData.password}
							onChange={getUserAuthData}
							placeholder="Enter Your Password"
							className="input"
							required

						/>
						{showPassword ? <LiaEyeSolid className='absolute top-1/2 mt-1 right-5 text-xl hover:cursor-pointer hover:text-indigo-700' onClick={() => setShowPassword(false)} /> : <LiaEyeSlash className='absolute top-1/2 mt-1 right-5 text-xl hover:cursor-pointer hover:text-indigo-700' onClick={() => setShowPassword(true)} />
						}
					</div>

					<div className="flex  gap-5 self-center items-center">
						<button
							className="botton"
							onClick={(e) => userLogin(e, 'user')}>
							{isLoading
								? <Spinner />
								: 'Login'}
						</button>
						<span className="text-lg text-gray-500">or</span>
						<button
							className="botton"
							onClick={(e) => userLogin(e, 'guest')}>
							{isLoading
								? <Spinner />
								: 'Login as Guest'}
						</button>
					</div>
					<div className="px-7">
						<p>
							New Here ?{' '}
							<Link to="/signup">
								<span className="text-sky-700 hover:border-b-2 hover:border-sky-700">Create new Account</span>
							</Link>
						</p>
					</div>
				</form>
			</section>
		</div>
	);
};

export default Login;


// 8XYRZL