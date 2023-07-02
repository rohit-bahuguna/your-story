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
		username: user.username,
		profilePicture: user.profileAvatar
	})

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
			<div className="flex gap-5 px-3 mt-3 justify-center items-center w-[83vw] ">
				<div className=' w-[45%]'>
					<img src={postImage} alt="" />
				</div>
				<div className="w-1/2 flex flex-col gap-5">
					<div className="flex border-b  justify-between  py-2">
						<div className="flex gap-2">
							<img src={profileAvatar} alt={fullName} className="h-10 pr-2 rounded-full" />
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
						<img src={profileAvatar} alt={fullName} className="h-10 pr-2 rounded-full" />
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
								({ _id, message, name, username, profilePicture, createdAt }) =>
									<div key={_id} className='flex justify-between  pr-2'>
										<div className='flex gap-3'>
											<img
												src={profilePicture}
												alt={username}
												className="h-10 rounded-full"
											/>
											<div className='flex flex-col gap-1'>
												<p>
													<span className='text-lg font-semibold mr-2'>{name}</span> <span>{message}</span>
												</p>
												<div className='flex gap-2'>
													<span>1d</span>
													<span>7 likes</span>

												</div>
											</div>
										</div>
										<MdFavorite className='text-xl' />
									</div>
							)}
					</div>
					<div className=' flex flex-col gap-5 '>
						<div className="flex  gap-8 px-2">
							<MdFavorite className={`text-[1.8rem]  hover:cursor-pointer ${postLikedByUser ? "text-red-500" : "text-gray-400"}`}
								onClick={likeOrDislikePost}
							/>
							<BiComment className="text-[1.8rem]  hover:cursor-pointer " />

							<BsFillBookmarkFill className={`text-[1.8rem]  hover:cursor-pointer ${postIsInBookmark ? "text-black" : "text-gray-400"}`} onClick={bookmarkPost} />
						</div>
						<div>
							<p>
								{likeCount} {likeCount > 1 ? "likes" : "like"}
							</p>
						</div>
						<div className=" hidden md:flex justify-between items-center px-3">
							<div>
								<HiOutlineEmojiHappy className="text-2xl inline mr-3" />
								<input
									type="text"
									placeholder="Add a comment"
									className="bg-white  focus:outline-none focus:ring-0"
									value={commentData.message}
									onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
								/>
							</div>

							<button className="text-sky-600 px-2 rounded-full hover:bg-gray-300"
								onClick={() => dispatch(addComment({ postId, commentData, token: user.token }))}
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
