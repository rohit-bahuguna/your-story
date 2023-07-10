import React, { useState } from 'react'
import Layout from '../components/comman/Layout'
import { useSelector } from 'react-redux';
import { searchPost } from '../utils';
import PostCard from '../components/comman/PostCard';
import SearchBar from '../components/comman/SearchBar';

const BookMark = () => {
    const {
        user: { bookmarks }
    } = useSelector(state => state);
    const [search, setSearch] = useState("");

    const searchedPosts = searchPost(bookmarks, search)
    return (
        <Layout>
            <div className='flex justify-center h-screen items-start md:h-auto'>
                <div className='flex flex-col md:w-[83vw] gap-5 px-10 justify-center items-center  '>
                    <SearchBar search={search} setSearch={setSearch} style={`w-[90vw] md:w-[50vw]`} />
                    {

                        searchedPosts.length > 0 ?
                            <div className='grid grid-cols-3  gap-2 ' id="images-wrapper">
                                {searchedPosts.map(post => <PostCard post={post} />)}

                            </div> : <div className='text-center text-2xl'>
                                No Post Avalible in Bookmark
                            </div>
                    }
                </div>
            </div>
        </Layout>
    );
}

export default BookMark