import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSinglePost } from '../../redux/features/postSlice';
import { comment } from 'postcss';
import { BiBookmark, BiComment } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';

const PostDetails = () => {
	const { postId } = useParams();
	const dispatch = useDispatch();
	const {
		post: {
			postDetails: {
				comments,
				postImage,
				content,
				postBy: { fullName,

					profileAvatar },
				likes: { likeCount, likedBy }
			}
		}
	} = useSelector(state => state);

	// useState(() => {
	// 	if (postId) {
	// 		dispatch(getSinglePost(postId));
	// 	}
	// }, []);

	return (
		<div className="flex mt-3">
			<div>
				<img src={postImage} alt="" />
			</div>
			<div className="">
				<div className="flex  justify-between px-5 py-2">
					<div className="flex gap-2">
						<img src={fullName} alt={fullName} className="h-12 rounded-full" />
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
					<img src={fullName} alt={fullName} className="h-12 rounded-full" />
					<div>
						<h1>
							{fullName}
						</h1>
						<p className="text-gray-400 ">
							{content}
						</p>
					</div>
				</div>
				<div>
					{comments &&
						comments.map(
							({ _id, message, name, username, profilePicture, createdAt }) =>
								<div key={_id}>
									<img
										src={profilePicture}
										alt={username}
										className="h-12 rounded-full"
									/>
									<div>
										<p>
											<span>{name}</span> <span>{message}</span>
										</p>
										<div>
											<span>1d</span>
											<span>7 likes</span>
											<span>Replay</span>
										</div>
									</div>
								</div>
						)}
				</div>
				<div className="flex gap-5 px-2">
					<MdFavorite className="text-[1.8rem] " />
					<BiComment className="text-[1.8rem] " />

					<BiBookmark className="text-[1.8rem] " />
				</div>
				<div>
					<p>
						{likeCount} likes
					</p>
				</div>
				<div className=" hidden md:flex justify-between items-center px-3">
					<div>
						<HiOutlineEmojiHappy className="text-2xl inline mr-3" />
						<input
							type="text"
							placeholder="Add a comment"
							className="bg-white  focus:outline-none focus:ring-0"
						/>
					</div>

					<button className="text-sky-600 px-2 rounded-full hover:bg-gray-300">
						Post
					</button>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;
