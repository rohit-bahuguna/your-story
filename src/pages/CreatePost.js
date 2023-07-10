import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/features/globalSlice';
import EmojiPicker from '../components/comman/EmojiPicker';
import { useNavigate } from 'react-router-dom';
import { createPost, editPost } from '../redux/features/postSlice';
import { useMedia } from '../hooks/useMedia';
import Layout from '../components/comman/Layout';
import Loader from '../components/comman/Loader';

const CreatePost = ({ postId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const {
		post: {
			postDetails, isLoading
		},
		auth: { user: { token, fullName, email, username, profileAvatar } },
		globalReducer: { theme }
	} = useSelector(state => state);
	const { uploadMedia, deleteMedia } = useMedia();

	const [toggleEmaoji, setToggleEmoji] = useState(false);

	const [isUploadingMedia, setIsUploadingMedia] = useState(false)

	const [postData, setPostData] = useState({
		postImage: "/placeholder.png",
		content: "",
		postBy: {
			fullName,
			email,
			username,
			profileAvatar,
		},
		postVideos: [],
	});

	useEffect(() => {
		if (postId) {
			setPostData(postDetails)
		}
	}, [isLoading])

	const [newPostImage, setNewPostImage] = useState()
	const [deleteToken, setDeleteToken] = useState()
	const getPostData = e => {
		setPostData({
			...postData,
			content: postData?.content + ' ' + e.target.innerText
		});
	};

	const mediaHandler = async (e) => {

		if (e.target.files[0]) {


			if (newPostImage) {

				const deleted = await deleteMedia(deleteToken)



				if (deleted) {
					setDeleteToken(null)
					setPostData({ ...postData, postImage: "" })
				}
			};

			setNewPostImage(e.target.files[0].name);



			setIsUploadingMedia(true)
			const { secure_url, delete_token } = await uploadMedia(e.target.files[0], setIsUploadingMedia);

			setDeleteToken(delete_token)

			setPostData({ ...postData, postImage: secure_url })

			setIsUploadingMedia(false)

		}
	};

	const updateUsersPost = () => {
		dispatch(editPost({ token, postImage: postData?.postImage, postId, content: postData?.content }))
		navigate('/posts')
	}

	return (
		<Layout>
			{!isLoading && postDetails && <div className='flex w-screen justify-center md:w-[83vw] max-h-[90vh]   z-20  items-center '>
				<div className="flex flex-col  md:mt-0 mt-5  ">
					<div className="flex flex-col   ">
						{!postId && <div className="flex  w-screen md:w-full justify-between items-center px-5 py-1">

							<span className="text-xl font-semibold">Create new post</span>
							<button className="text-sky-600 hover:bg-gray-200 px-5 py-1  text-xl  rounded-full"
								onClick={(e) => {
									e.preventDefault()
									if (postData.postImage !== "/placeholder.png") {
										dispatch(createPost({ postData, token }))
										navigate(-1)
									}
								}}
							>
								Share
							</button>
						</div>}
						<div className="flex flex-col  md:flex-row  h-screen md:h-full justify-around w-screen md:w-[60vw]  py-10 px-5">
							<div className="flex flex-col  items-center w-full gap-14 ">

								{isUploadingMedia ? <Loader message={"Uploading Media"} /> : <img src={postData.postImage} alt="upload media  " className="md:max-w-[20vw] w-[30vw]    " />}


								<div >
									{/* <input type="file" className="border" /> */}
									<label class="block">
										<span class="sr-only">Choose profile photo</span>
										<input
											type="file"
											class="block  text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
											onChange={mediaHandler}
											accept="image/*, video/*"
										/>
									</label>
								</div>
							</div>

							<div className="mt-3  flex flex-col gap-2  ">
								<div className="flex gap-2">
									<img src={profileAvatar} alt={fullName} className="w-8 rounded-full" />
									<span className="font-semibold">{fullName}</span>
								</div>
								<textarea
									name=""
									id=""
									cols="40"
									rows="8"
									placeholder="Write a caption"
									onChange={e => {
										// disabled={postData?.content.length >= 100 && true}
										setPostData({ ...postData, content: e.target.value });
									}}
									value={postData?.content}
									className={`resize-none focus:outline-none ${theme === "dark" ? "bg-black" : "bg-white"}`}
								/>

								<div className="flex justify-between px-3 ">
									<HiOutlineEmojiHappy
										className="text-2xl"
										onClick={() => setToggleEmoji(!toggleEmaoji)}
									/>
									{/* <span className="text-lg text-gray-400">
										{postData?.content.length > 0
											? postData?.content.trim().split(' ').length
											: 0}
									</span> */}
								</div>
								<EmojiPicker onEmojiClick={getPostData} toggle={toggleEmaoji} setToggleEmoji={setToggleEmoji} />
							</div>

						</div>
					</div>
					{postId && <div className='self-center flex gap-20'>
						<button className='text-lg text-indigo-700 px-5 py-1 rounded-full hover:bg-indigo-100 border'
							onClick={updateUsersPost}
						>Update</button><button className='text-lg text-red-500 px-5 py-1 rounded-full hover:bg-red-100 border'
							onClick={() => navigate(-1)}
						>Cancel</button>
					</div>}
				</div>
			</div>}

			{
				isLoading && <div className='flex justify-center  w-screen px-5 md:w-[83vw] items-center'>
					<Loader />
				</div>
			}
		</Layout>
	);
};

export default CreatePost;
