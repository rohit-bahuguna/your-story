
import React, { useState } from 'react'
import { BiComment, BiBookmark } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { getSinglePost } from '../../redux/features/postSlice';
import { Link } from 'react-router-dom';
const PostCard = ({ post }) => {
    const dispatch = useDispatch()
    const [showNumbers, setShowNumbers] = useState(false)
    const { _id, postImage, comments, likes: { likeCount } } = post
    return (
        <Link to={`/post/${_id}`}>
            <div className='relative'
                onMouseOver={() => setShowNumbers(true)}
                onMouseOut={() => setShowNumbers(false)}
                onClick={() => dispatch(getSinglePost(_id))}
            >
                <img src={postImage} className='w-80' />
                {showNumbers && <div className='absolute inset-0 border border-green-500 flex justify-center items-center gap-7 bg-black opacity-60 text-white'>
                    <p className='text-lg'>  <MdFavorite className='inline mr-1 text-xl' /> {likeCount}</p>
                    <p className='text-lg'> <BiComment className='inline mr-1 text-xl' /> {comments.length}</p>
                </div>}
            </div>
        </Link>
    )
}

export default PostCard