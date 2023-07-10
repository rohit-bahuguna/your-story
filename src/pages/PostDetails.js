import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BiBookmark, BiComment, BiLayout } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Layout from "../components/comman/Layout"
import { isInBookmarks } from '../utils';
import { getTimeAgo, isLiked } from '../utils';
import Loader from "../components/comman/Loader"
import { BsFillBookmarkFill } from 'react-icons/bs';
import { addComment, deletePost, dislikePost, getSinglePost, likePost } from '../redux/features/postSlice';
import { addBookmark, removeBookmark } from '../redux/features/userSlice';
import { Link } from 'react-router-dom';
import { useOutsideClick } from '../hooks/useOutsideClick';
const PostDetails = () => {
	const navigate = useNavigate()
	const { postId } = useParams();
	const dispatch = useDispatch();
	const {
		post: {
			postDetails, isLoading
		},
		auth: { user },
		user: { bookmarks },
		globalReducer: { theme }
	} = useSelector(state => state);

	const [showMore, setShowMore] = useState(false)

	const [commentData, setCommentData] = useState({
		message: '',
		name: user.fullName,
		email: user.email,
		profilePicture: user.profileAvatar
	})




	const [focus, setFocus] = useState(false)

	const postIsInBookmark = isInBookmarks(bookmarks, postId)
	const postLikedByUser = isLiked(postDetails?.likes?.likedBy, user.email)

	const likeOrDislikePost = () => {
		postLikedByUser ? dispatch(dislikePost({ token: user.token, _id: postId })) : dispatch(likePost({ token: user.token, _id: postId }))
	}

	const bookmarkPost = () => {
		postIsInBookmark ? dispatch(removeBookmark({ token: user.token, _id: postId })) : dispatch(addBookmark({ token: user.token, _id: postId }))

	}

	const postRef = useRef(null);
	useOutsideClick(postRef, () => setShowMore(false))

	useEffect(() => {
		dispatch(getSinglePost(postId))
	}, [postId])



	return (
		<Layout>
			{!isLoading && <div className="flex md:flex-row flex-col gap-5  mb-[10vh] md:px-3 md:mt-3 h-screen md:mb-0 justify-center  w-screen  md:w-[83vw] overflow-y-scroll">
				<div className='w-screen md:w-[45%] '>
					<div className="flex border-b md:hidden px-2 justify-between  py-2">
						<div className="flex gap-2">
							<img src={postDetails?.postBy.profileAvatar} alt={postDetails?.postBy.fullName} className="h-12 aspect-square  rounded-full" />
							<div>
								<h1>
									{postDetails?.postBy.fullName}
								</h1>
								<p className="text-gray-400 ">

									{
										getTimeAgo(postDetails?.createdAt)
									}
								</p>
							</div>
						</div>
						<FiMoreHorizontal className=" self-center text-2xl" />
					</div>
					<img src={postDetails?.postImage} alt="" className='' />
				</div>
				<div className="md:w-1/2 w-screen  px-2 md:px-0 flex flex-col gap-5">
					<div className="md:flex border-b hidden  relative justify-between  py-2">
						<div className="flex gap-2">
							<img src={postDetails?.postBy.profileAvatar} alt={postDetails?.postBy.fullName} className="h-12 aspect-square  rounded-full" />
							<div>
								<h1>
									{postDetails?.postBy.fullName}
								</h1>
								<p className="text-gray-400 ">

									{
										getTimeAgo(postDetails?.createdAt)
									}
								</p>
							</div>
						</div>
						{postDetails.postBy.email === user.email && <FiMoreHorizontal className=" self-center text-2xl" onClick={() => setShowMore(true)} />}
						{
							showMore && <div className={`flex flex-col gap-3  border absolute top-10  right-0  z-10 py-3 ${theme === "dark" ? "bg-black" : "bg-white"}  rounded-xl shadow-lg min-w-[12vw]`} ref={postRef}>

								<p className='more text-red-500' onClick={() => {
									dispatch(deletePost({ _id: postId, token: user.token }))
									navigate(-1)
								}}>Delete</p>

								<Link to={`/post/edit/${postId}`}>
									<p className='more px-12'
										onClick={() => dispatch(getSinglePost(postId))}
									>Edit</p>
								</Link>


							</div>
						}
					</div>
					<div className="flex  gap-2">
						<img src={postDetails?.postBy.profileAvatar} alt={postDetails?.postBy.fullName} className="h-12  rounded-full aspect-square" />
						<div>
							<h1>
								{postDetails?.postBy.fullName}
							</h1>
							<p className="text-gray-400 ">
								{postDetails?.content}
							</p>
						</div>
					</div>
					<div className='flex flex-col  gap-5'>
						{postDetails?.comments &&
							postDetails?.comments.map(
								({ _id, message, name, email, profilePicture, createdAt }) =>
									<div key={_id} className='flex justify-between  pr-2'>
										<div className='flex gap-3 relative'>
											<img
												src={profilePicture}
												alt={name}
												className="h-12 rounded-full aspect-square"
											/>
											<div className='flex flex-col gap-1'>
												<p>
													<span className='text-lg font-semibold mr-2'>{name}</span> <span>{message}</span>
												</p>
												<div className='flex gap-2 items-center'>
													<span>{
														getTimeAgo(createdAt)
													}</span>
													<span>7 likes</span>
													{/* {email === user.email &&
														<FiMoreHorizontal class />} */}
												</div>
											</div>

											{/* <div className='absolute border bg-white text-lg  px-5 py-2 '>
												<p>Edit</p>
												<p>Delete</p>
												<p>Cancel</p>
											</div> */}
										</div>
										{/* <MdFavorite className='text-xl' /> */}
									</div>
							)}
					</div>
					<div className=' flex flex-col gap-5  md:sticky bottom-0 py-2  left-1/2 right-0  '>
						<div className="flex  gap-8 px-2">
							<MdFavorite className={`text-[1.8rem]  hover:cursor-pointer ${postLikedByUser ? "text-red-500" : "text-gray-400"}`}
								onClick={likeOrDislikePost}
							/>
							<BiComment className="text-[1.8rem]  hover:cursor-pointer " onClick={() => setFocus(true)} />

							<BsFillBookmarkFill className={`text-[1.8rem]  hover:cursor-pointer   ${postIsInBookmark ? "text-gray-700" : "text-gray-300"}`} onClick={bookmarkPost} />
						</div>
						<div>
							<p>
								{postDetails?.likes.likeCount} {postDetails?.likes.likeCount > 1 ? "likes" : "like"}
							</p>
						</div>
						<div className=" hidden md:flex  justify-between items-center px-3">
							<div>
								<HiOutlineEmojiHappy className="text-2xl inline mr-3" />
								<input
									type="text"
									placeholder="Add a comment"
									className={`focus:outline-none focus:ring-0  ${theme === "dark" ? "bg-black" : ""} `}
									value={commentData.message}
									onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
									autoFocus={focus}
								/>
							</div>

							<button className="text-sky-600 px-2 rounded-full hover:bg-gray-300"
								onClick={() => {
									dispatch(addComment({ postId, commentData, token: user.token }))
									setCommentData({ ...commentData, message: "" })
								}}
							>
								Post
							</button>
						</div>
					</div>
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

export default PostDetails;
