import React, { useState } from 'react';
import { signUpHandler } from '../../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LiaEyeSlash, LiaEyeSolid } from 'react-icons/lia';
import Spinner from '../comman/Spinner';
import { initialErrors, validateUserData } from '../../utils';

const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false)
	const { isLoading } = useSelector(state => state.auth);
	const [authData, setAuthData] = useState({
		email: '',
		password: '',
		name: ""
	});

	const [errors, setErrors] = useState(initialErrors)
	const getUserAuthData = e => {
		setErrors(initialErrors)
		setAuthData({ ...authData, [e.target.name]: e.target.value });
	};

	const userSignup = e => {
		e.preventDefault();
		const { success, newErrors } = validateUserData(authData, true)
		if (success) {
			dispatch(signUpHandler(authData));
		} else {
			setErrors({ ...errors, ...newErrors })
		}
	};



	return <div className="flex justify-center md:items-center  h-screen p-5 w-screen">
		<section className="hidden   w-[40%]   md:inline">
			<img src="/homeimg.png" alt="" className="  " />
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
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 ">
						Your Full Name
					</label>
					<input
						type="text"
						name="name"
						value={authData.name}
						onChange={getUserAuthData}
						className="input"
						placeholder="Enter Your Full Name"
						required
					/>
					{
						errors.nameError.status && <span className="text-red-500  ">
							{errors.nameError.error}
						</span>
					}
				</div>
				<div className="">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium  ">
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
					{
						errors.emailError.status && <span className="text-red-500  ">
							{errors.emailError.error}
						</span>
					}
				</div>
				<div className="relative">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 ">
						Your password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						value={authData.password}
						onChange={getUserAuthData}
						placeholder="Enter Your Password"
						className="input
						"

						required
					/>
					{showPassword ? <LiaEyeSolid className='absolute top-9 mt-1 right-5 text-xl hover:cursor-pointer hover:text-indigo-700' onClick={() => setShowPassword(false)} /> : <LiaEyeSlash className='absolute top-9 mt-1 right-5 text-xl hover:cursor-pointer hover:text-indigo-700' onClick={() => setShowPassword(true)} />
					}
					{
						errors.passwordError.status && <span className="text-red-500  ">
							{errors.passwordError.error}
						</span>
					}
				</div>

				<div className="flex  gap-5 self-center items-center">
					<button
						className="botton"
						onClick={userSignup}>
						{isLoading
							? <Spinner />
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
