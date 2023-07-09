import React, { useRef, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BiComment, BiBookmark } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, deletePost, dislikePost, getSinglePost, likePost } from '../../redux/features/postSlice';
import { addBookmark, removeBookmark } from '../../redux/features/userSlice';
import { isInBookmarks } from '../../utils/postInBookmarks';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useOutsideClick } from "../../hooks/useOutsideClick"
import { getTimeAgo, isLiked } from '../../utils';
const PostCard = ({ post }) => {
	const {
		_id,

		postBy: { username, fullName, profileAvatar, email },
		postImage,
		content,
		likes: { likeCount, likedBy },
		comments,
		createdAt
	} = post;
	const { auth: { user }, user: { bookmarks } } = useSelector(state => state)

	const [commentData, setCommentData] = useState({
		message: '',
		name: user.fullName,
		email: user.email,
		profilePicture: user.profileAvatar
	})

	const dispatch = useDispatch()
	const postIsInBookmark = isInBookmarks(bookmarks, post._id)
	const postLikedByUser = isLiked(likedBy, user.email)
	const [doubleLike, setDoubleLike] = useState(false)
	const [showMore, setShowMore] = useState(false)
	const bookmarkPost = () => {

		postIsInBookmark ? dispatch(removeBookmark({ token: user.token, _id })) : dispatch(addBookmark({ token: user.token, _id }))

	}

	const likeOrDislikePost = () => {
		postLikedByUser ? dispatch(dislikePost({ token: user.token, _id })) : dispatch(likePost({ token: user.token, _id }))
	}

	const likePostOnDoubleClick = (e) => {
		if (e.detail === 2) {
			setDoubleLike(true)
			!postLikedByUser && dispatch(likePost({ token: user.token, _id }))
		}

		setTimeout(() => {
			setDoubleLike(false)
		}, 1000)
	}
	const postRef = useRef(null)

	useOutsideClick(postRef, () => setShowMore(false))

	return (
		<div className="flex md:w-[30vw] flex-col gap-5 border rounded-md px-2 py-3 ">
			<div className="flex justify-between  px-3 relative">
				<div className="flex  gap-2">
					<img src={user.email === email ? user.profileAvatar : profileAvatar} alt={fullName} className="h-12 aspect-square rounded-full" />
					<div>
						<h1>
							{fullName}
						</h1>
						<p className="text-gray-400 ">
							{getTimeAgo(createdAt)}
						</p>
					</div>
				</div>
				<FiMoreHorizontal className=" self-center text-2xl hover:cursor-pointer hover:text-indigo-700" onClick={() => setShowMore(!showMore)} />
				{
					showMore && <div className=' flex flex-col gap-3  border absolute top-10  right-0 bg-white z-10 py-3  rounded-xl shadow-lg min-w-[12vw]' ref={postRef}>
						{email === user.email && <>
							<p className='more text-red-500' onClick={(() => dispatch(deletePost({ _id, token: user.token })))}>Delete</p>

							<Link to={`/post/edit/${_id}`}>
								<p className='more px-12'
									onClick={() => dispatch(getSinglePost(_id))}
								>Edit</p>
							</Link>
						</>}
						{email !== user.email && <>
							<p className='more ' onClick={bookmarkPost} >Add To Bookmark</p>
						</>}
						<Link to={`/post/${_id}`}>
							<p className='more'>Go To Post</p>
						</Link>
						<p className='more ' onClick={() => setShowMore(false)}>Cancel</p>
					</div>
				}
			</div>
			<div onClick={likePostOnDoubleClick} className='relative'>
				<img src={postImage} alt={fullName} className="" />
				{doubleLike && <div className='absolute top-[12vh] right-[28%]   md:top-[20vh] md:right-[11vw]'>
					<MdFavorite className='text-[7rem]  text-white opacity-80' />
				</div>}
			</div>
			<div className="flex gap-5 px-2">
				<MdFavorite className={`text-[1.8rem] hover:cursor-pointer ${postLikedByUser ? "text-red-500" : "text-gray-400"}`}
					onClick={likeOrDislikePost} />
				<Link to={`/post/${_id}`}>
					<BiComment className="text-[1.8rem] hover:cursor-pointer" />
				</Link>


				<BsFillBookmarkFill className={`text-[1.8rem] hover:cursor-pointer  ${postIsInBookmark ? "text-black" : "text-gray-400"}`} onClick={bookmarkPost} />
			</div>
			<div>
				<p>
					{likeCount} likes
				</p>
				<p>
					<span className="font-bold">{fullName} </span>{' '}
					<span className="">{content}</span>
				</p>
			</div>
			<div className="flex flex-col gap-2">
				{comments.length > 0 ? <Link to={`/post/${_id}`}>
					<p className='hover:text-sky-500' onClick={() => dispatch(getSinglePost(_id))}>
						{
							comments.length === 1 ? `view ${comments.length} comment` : `view all ${comments.length} comments`
						}
					</p>
				</Link>
					: <Link to={`/post/${_id}`}>
						<p className='hover:text-sky-500' onClick={() => dispatch(getSinglePost(_id))}>
							view Post
						</p>
					</Link>

				}
				<div className=" hidden md:flex justify-between items-center">
					<input
						type="text"
						placeholder="Add a comment"
						className="bg-white  focus:outline-none focus:ring-0"
						onChange={(e) => setCommentData({ ...commentData, message: e.target.value })}
						value={commentData.message}
					/>
					<div>
						<button className="text-sky-600 px-2 rounded-full hover:bg-gray-300"
							onClick={() => {
								dispatch(addComment({ postId: _id, commentData, token: user.token }))
								setCommentData({ ...commentData, message: "" })
							}}
						>
							Post
						</button>

					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
