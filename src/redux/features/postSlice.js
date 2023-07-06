import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  getAllPostsService,
  getSinglePostService,
  createPostService,
  editPostService,
  deletePostService,
  likePostService,
  dislikePostService,
  addCommentService,
  editCommentService,
  deleteCommentService,
} from "../../services/postServices";
import { toast } from 'react-toastify';



export const getAllPosts = createAsyncThunk(
  "post/getPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await getAllPostsService();
console.log(data)
      if (status === 200) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const getSinglePost = createAsyncThunk(
  "post/getSinglePost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data, status } = await getSinglePostService(postId);

      if (status === 200) {
        return data.post;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const createPost = createAsyncThunk(
  "post/createPost",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await createPostService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async (arg, { rejectWithValue }) => {
    try {
      console.log(arg)
      const { data, status } = await editPostService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (arg, { rejectWithValue }) => {
    const { _id, token } = arg;

    try {
      const { data, status } = await deletePostService({ _id, token });

      if (status === 201) {
        return data.posts;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/likePost",
  async (arg, { rejectWithValue }) => {
    const { token, _id } = arg;

    try {
      const { data, status } = await likePostService({ token, _id });

      if (status === 201) {
        return data.posts;
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async (arg, { rejectWithValue }) => {
    const { token, _id } = arg;

    try {
      const { data, status } = await dislikePostService({ token, _id });

      if (status === 201) {
        return data.posts;
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await addCommentService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await editCommentService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async (arg, { rejectWithValue }) => {
    try {
      const { data, status } = await deleteCommentService(arg);

      if (status === 201) {
        return data.posts;
      }
    } catch {
      return rejectWithValue([], "Error occured. Try again later.");
    }
  }
);

const sortPostByTranding = (posts) => {
   return posts.sort((a, b) =>  parseInt(b.likes.likeCount) - parseInt(a.likes.likeCount))
}

const sortPostByDate = (posts) => {
  return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}

const findCurrentUsersPOsts = (posts, email) => {
  return posts.filter(post => post.postBy.email === email)
}

const updatePostDetails = (posts, postId) => {
  return posts.filter(post => post.id === postId)[0]
}

const initialState = {
  posts: [],
  currentUsersPosts: [],
  totalPosts: 0,
  postDetails : {},
  isLoading: false,
  message: "",
  error : ""
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
  reducers: {
    sortByDate: (state) => {
      state.posts = sortPostByDate(state.posts)
    },
    sortByTranding: (state) => {
      state.posts = sortPostByTranding(state.posts)
    },
    getCurrentUsersPosts: (state, { payload }) => {
      state.currentUsersPosts = findCurrentUsersPOsts(state.posts, payload)
    },
    postReset: (state) => {
      state.posts = [];
      state.currentUsersPosts = [];
      state.totalPosts = 0;
      state.postDetails = {};
      state.isLoading = false;
      state.message = "";
      state.error = "";
    },

  },
extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.isLoading = true;
    },
	[getAllPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    state.posts = sortPostByDate(payload);
		state.totalPosts = payload.length
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [getSinglePost.pending]: (state) => {
      state.isLoading = true;
    },
    [getSinglePost.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.postDetails = payload;
    },
    [getSinglePost.rejected]: (state) => {
      state.isLoading = false;
    },

    [createPost.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      toast.success("Post created succesfully", { id: state.loadingId });
    },
    [createPost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      state.isLoading = false
      console.log(payload)
    //   toast.success("Post updated", { id: state.loadingId });
  },
  [editPost.pending]: (state) => {

    state.isLoading = true

  },
    [editPost.rejected]: (state, { payload }) => {
      state.error = payload;
      console.log(payload)
    },

    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      toast.success("Post Deleted", { autoClose: 1000 })
    },
  [deletePost.rejected]: (state, { payload }) => {
    console.log(payload)
    // state.error = payload;
    },

    [likePost.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      state.postDetails = updatePostDetails(state.posts, state.postDetails.id)

    },
    [likePost.rejected]: (state, { payload }) => {
      console.log(payload)
    },

    [dislikePost.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      state.postDetails = updatePostDetails(state.posts, state.postDetails.id)
    },
    [dislikePost.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [addComment.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      state.postDetails = updatePostDetails(state.posts, state.postDetails.id)

    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      state.postDetails = updatePostDetails(state.posts, state.postDetails.id)
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.posts = sortPostByDate(payload);
      state.postDetails = updatePostDetails(state.posts, state.postDetails.id)
    },
  },});

export const { sortByDate, sortByTranding, getCurrentUsersPosts, postReset } = postSlice.actions;
export default postSlice.reducer;
