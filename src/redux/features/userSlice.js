import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
    getAllUserService,
    getBookmarkService,
    addBookmarkService,
    removeBookmarkService,
    followUserService,
    unfollowUserService,
    updateProfileService,
} from "../../services/userServices";

import { toast } from 'react-hot-toast';

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async (_, { rejectWithValue }) => {
        try {
            const { data, status } = await getAllUserService();
            if (status === 200) {
                return data.users;
            }
        } catch (error) {


            return rejectWithValue(error.response.data.error);
        }
    }
);

export const getBookmarks = createAsyncThunk(
    "user/getBookmark",
    async (token, { rejectWithValue }) => {
        try {
            const { data, status } = await getBookmarkService(token);

            if (status === 200) {
                return data.bookmarks;
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const addBookmark = createAsyncThunk(
    "user/addBookmark",
    async (arg, { rejectWithValue }) => {
        try {
            const { data, status } = await addBookmarkService(arg);

            if (status === 200) {
                return data;
            }
        } catch (error) {
            return rejectWithValue(error.response);
        }
    }
);

export const removeBookmark = createAsyncThunk(
    "user/removeBookmark",
    async (arg, { rejectWithValue }) => {
        try {
            const { data, status } = await removeBookmarkService(arg);

            if (status === 200) {
                return data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const followUser = createAsyncThunk(
    "user/followUser",
    async (arg, { rejectWithValue }) => {
        try {
            const { data, status } = await followUserService(arg);

            if (status === 200) {

                return data;
            }

        } catch (error) {

            return rejectWithValue([], "Error occured. Try again later.");
        }
    }
);

export const unfollowUser = createAsyncThunk(
    "user/unfollowUser",
    async (arg, { rejectWithValue }) => {
        try {
            const { data, status } = await unfollowUserService(arg);

            if (status === 200) {
                return data;
            }
        } catch {
            return rejectWithValue([], "Error occured. Try again later.");
        }
    }
);

export const updateProfile = createAsyncThunk(
    "user/updateProfile",
    async (arg, { rejectWithValue }) => {
        try {

            const { data, status } = await updateProfileService(arg);

            if (status === 201) {
                return data.user;
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const updateFollowingUser = (users, followingUser) => {
    return users.map((user) =>
        user._id === followingUser._id ? followingUser : user
    );
};

const updateFollowedUser = (users, followedUser) => {
    return [...users].map((user) =>
        user._id === followedUser._id ? followedUser : user
    );
};


const filterCurrentUser = (users, email) => {
    return users.reduce((filteredUser, user) => user.email === email ? user : filteredUser, {})

}


const initialState = {
    users: [],
    currentUser: {

    },
    currentProfilePic: "",
    message: '',
    error: '',
    bookmarks: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        getCurrentUser: (state, { payload }) => {

            state.currentUser = filterCurrentUser(state.users, payload)
        },
        userReset: (state) => {
            state.users = [];
            state.currentUser = {};
            state.currentProfilePic = "";
            state.message = '';
            state.error = '';
            state.bookmarks = [];
        }

    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, { payload }) => {
            state.users = payload;
        },

        [updateProfile.fulfilled]: (state, { payload }) => {

            state.users = state.users.map((user) =>
                user.email === payload.email ? payload : user
            );
            state.currentUser = payload
            state.isLoading = false;
            toast.success("Profile updated successfully")
        },

        [updateProfile.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error("Something went wrong")

        },

        [getBookmarks.fulfilled]: (state, { payload: { bookmarks, message } }) => {
            state.bookmarks = bookmarks;
            toast.success(message)
        },

        [addBookmark.fulfilled]: (state, { payload: { bookmarks, message } }) => {
            state.bookmarks = bookmarks;
            toast.success("added to bookmark")

        },
        [addBookmark.rejected]: (state, { payload }) => {

        },

        [removeBookmark.fulfilled]: (state, { payload: { bookmarks, message } }) => {
            state.bookmarks = bookmarks;
            toast.success("removed from bookmark",)
        },

        [followUser.fulfilled]: (state, { payload: { user, followUser, message } }) => {
            state.users = updateFollowingUser(state.users, user);
            state.users = updateFollowedUser(state.users, followUser);
            state.currentUser = filterCurrentUser(state.users, state.currentUser.email)
            toast.success(message)

        },

        [unfollowUser.fulfilled]: (state, { payload: { user, followUser, message } }) => {
            state.users = updateFollowingUser(state.users, user);
            state.users = updateFollowedUser(state.users, followUser);
            state.currentUser = filterCurrentUser(state.users, state.currentUser.email)
            toast.success(message)
        },
    },
});

export const { getCurrentUser, userReset } = userSlice.actions;

export default userSlice.reducer;
