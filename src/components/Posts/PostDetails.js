import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BiBookmark, BiComment, BiLayout } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';
import Layout from "../comman/Layout"
import { isInBookmarks } from '../../utils/postInBookmarks';
import { isLiked } from '../../utils';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { addComment, dislikePost, likePost } from '../../redux/features/postSlice';
import { addBookmark, removeBookmark } from '../../redux/features/userSlice';
const PostDetails = () => {

	const { postId } = useParams();
	const dispatch = useDispatch();
	const {
		post: {
			postDetails: { _id,
				comments,
				postImage,
				content,
				postBy: { fullName,

					profileAvatar },
				likes: { likeCount, likedBy }
			}
		},
		auth: { user },
		user: { bookmarks }

	} = useSelector(state => state);

	const [commentData, setCommentData] = useState({
		message: '',
		name: user.fullName,
		email: user.email,
		profilePicture: user.profileAvatar
	})

	const [focus, setFocus] = useState(false)

	const postIsInBookmark = isInBookmarks(bookmarks, postId)
	const postLikedByUser = isLiked(likedBy, user.email)

	const likeOrDislikePost = () => {
		postLikedByUser ? dispatch(dislikePost({ token: user.token, _id })) : dispatch(likePost({ token: user.token, _id }))
	}

	const bookmarkPost = () => {
		postIsInBookmark ? dispatch(removeBookmark({ token: user.token, _id })) : dispatch(addBookmark({ token: user.token, _id }))

	}




	return (
		<Layout>
			<div className="flex md:flex-row flex-col gap-5  border border-red-500  mb-[10vh] md:px-3 md:mt-3 h-screen md:mb-0 justify-center  w-screen  md:w-[83vw] overflow-y-scroll">
				<div className='w-screen md:w-[45%] '>
					<div className="flex border-b md:hidden px-2 justify-between  py-2">
						<div className="flex gap-2">
							<img src={profileAvatar} alt={fullName} className="h-12 aspect-square  rounded-full" />
							<div>
								<h1>
									{fullName}
								</h1>
								<p className="text-gray-400 ">1h</p>
							</div>
						</div>
						<FiMoreHorizontal className=" self-center text-2xl" />
					</div>
					<img src={postImage} alt="" className='' />
				</div>
				<div className="md:w-1/2 w-screen  px-2 md:px-0 flex flex-col gap-5">
					<div className="md:flex border-b hidden  justify-between  py-2">
						<div className="flex gap-2">
							<img src={profileAvatar} alt={fullName} className="h-12 aspect-square  rounded-full" />
							<div>
								<h1>
									{fullName}
								</h1>
								<p className="text-gray-400 ">1h</p>
							</div>
						</div>
						<FiMoreHorizontal className=" self-center text-2xl" />
					</div>
					<div className="flex  gap-2">
						<img src={profileAvatar} alt={fullName} className="h-12  rounded-full aspect-square" />
						<div>
							<h1>
								{fullName}
							</h1>
							<p className="text-gray-400 ">
								{content}
							</p>
						</div>
					</div>
					<div className='flex flex-col  gap-5'>
						{comments &&
							comments.map(
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
													<span>1d</span>
													<span>7 likes</span>
													{email === user.email &&
														<FiMoreHorizontal class />}
												</div>
											</div>

											{/* <div className='absolute border bg-white text-lg  px-5 py-2 '>
												<p>Edit</p>
												<p>Delete</p>
												<p>Cancel</p>
											</div> */}
										</div>
										<MdFavorite className='text-xl' />
									</div>
							)}
					</div>
					<div className=' flex flex-col gap-5  md:sticky bottom-0 py-2  left-1/2 right-0 bg-white '>
						<div className="flex  gap-8 px-2">
							<MdFavorite className={`text-[1.8rem]  hover:cursor-pointer ${postLikedByUser ? "text-red-500" : "text-gray-400"}`}
								onClick={likeOrDislikePost}
							/>
							<BiComment className="text-[1.8rem]  hover:cursor-pointer " onClick={() => setFocus(true)} />

							<BsFillBookmarkFill className={`text-[1.8rem]  hover:cursor-pointer ${postIsInBookmark ? "text-black" : "text-gray-400"}`} onClick={bookmarkPost} />
						</div>
						<div>
							<p>
								{likeCount} {likeCount > 1 ? "likes" : "like"}
							</p>
						</div>
						<div className=" hidden md:flex  justify-between items-center px-3">
							<div>
								<HiOutlineEmojiHappy className="text-2xl inline mr-3" />
								<input
									type="text"
									placeholder="Add a comment"
									className="bg-white  focus:outline-none focus:ring-0"
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
			</div>
		</Layout>
	);
};

export default PostDetails;
