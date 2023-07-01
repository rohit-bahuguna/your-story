
import React from 'react'

import CreatePost from '../CreatePost';
import Layout from '../comman/Layout';
import { useParams } from 'react-router-dom';

const EditPost = () => {
    const { postId } = useParams()

    return (<CreatePost postId={postId} />)
}

export default EditPost