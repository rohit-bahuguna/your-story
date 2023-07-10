import React from 'react'
import PostCard from '../comman/PostCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostGrid = () => {
    const { post: { currentUsersPosts }, user: { currentUser }, auth: { user } } = useSelector(state => state)

    return (
        <div className='grid grid-cols-3 z-0 gap-5 mt-10 ' id={currentUsersPosts.length > 0 && "images-wrapper"}  >

            {
                currentUsersPosts.length > 0 && currentUsersPosts.map(post => <PostCard key={post._id} post={post} />)



            }
            {

                currentUsersPosts.length === 0 && <div className=' w-screen md:w-[80vw] flex flex-col  items-center'>
                    <h1 className='text-lg md:text-2xl '>
                        No Post To Display

                    </h1>
                    {user.email !== currentUser.email ? "" : <Link to="/post/create"><button className='mt-5 mb-10 text-lg rounded-full border shadow-lg px-3 py-1 hover:bg-indigo-100 text-indigo-700'>
                        Create Post
                    </button></Link>}
                </div>
            }
        </div>
    )
}

export default PostGrid