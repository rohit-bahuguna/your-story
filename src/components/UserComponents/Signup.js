import React, { useState } from 'react';
import { signUpHandler } from '../../redux/features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LiaEyeSlash, LiaEyeSolid } from 'react-icons/lia';
import Spinner from '../comman/Spinner';
import { useForm } from 'react-hook-form';


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
	const getUserAuthData = e => {
		setAuthData({ ...authData, [e.target.name]: e.target.value });
	};

	const { register, handleSubmit, formState: { errors } } = useForm();

	console.log(errors);

	const userSignup = (data) => {
		console.log(data)
	// e.preventDefault();
	// console.log(authData);
	// if (authData.email && authData.password && authData.name) {
	// 	dispatch(signUpHandler(authData));
	// }
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
						for="email"
						className="block mb-2 text-sm font-medium text-gray-900 ">
						Your Full Name
					</label>
					<input
						type="text"

						// value={authData.name}
						// onChange={getUserAuthData}
						className="input"
						placeholder="Enter Your Full Name"
						{...register("name", { required: true, maxLength: 80 })}

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
						// value={authData.email}
						// onChange={getUserAuthData}
						className="input"
						placeholder="Enter Your Email"
						{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
						// value={authData.password}
						// onChange={getUserAuthData}
						placeholder="Enter Your Password"
						className="input
						"
						{...register("password", {
							required: { value: true, message: "Please Enter Password" }, min: {
								value: 8, message: "Password should be atlest 8 char"
							}, pattern: { value: /^\S+@\S+$/i, message: "test" }
						})}
						required
					/>
					{showPassword ? <LiaEyeSolid className='absolute top-1/2 mt-1 right-5 text-xl hover:cursor-pointer hover:text-indigo-700' onClick={() => setShowPassword(false)} /> : <LiaEyeSlash className='absolute top-1/2 mt-1 right-5 text-xl hover:cursor-pointer hover:text-indigo-700' onClick={() => setShowPassword(true)} />
					}
				</div>

				<div className="flex  gap-5 self-center items-center">
					<button
						className="botton"
						onClick={handleSubmit(userSignup)}>
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
