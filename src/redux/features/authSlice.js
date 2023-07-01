import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginService, signUpService } from '../../services/authServices';
import { toast } from 'react-toastify';

export const loginHandler = createAsyncThunk(
	'auth/loginHandler',
	async (authData, { rejectWithValue }) => {
		try {
			const { data, status } = await loginService(authData);
			console.log(data, status);
			if (status === 200) {
				return data;
			}
		} catch (error) {

			return rejectWithValue(error.response.data.error);
		}
	}
);

export const signUpHandler = createAsyncThunk(
	'auth/signUpHandler',
	async (authData, { rejectWithValue }) => {
		try {
			const { data, status } = await signUpService(authData);

			if (status === 201) {
				return data;
			}
		} catch (error) {

			return rejectWithValue(error.response.data.error);
		}
	}
);

const initialState = {
	status: false,
	isLoading: false,
	user: {},
	error: false
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		userLogout: state => {
			state.status = false;
			state.isLoading = false;
			state.user = {};
			state.error = false;
			toast.success('logout successfully');
		},
		updateAuthProfile: (state, { payload }) => {

			state.user = { ...state.user, ...payload }
		},
		updateAuthFollowing: (state, { payload }) => {
			state.user = { ...state.user, following: payload }
		}
	},
	extraReducers: {
		// login
		[loginHandler.pending]: state => {
			state.error = false;
			state.isLoading = true;
		},
		[loginHandler.fulfilled]: (
			state,
			{ payload: { encodedToken, foundUser, message } }
		) => {
			toast.success(message, { autoClose: 1000 });
			state.isLoading = false;
			state.error = false;
			state.user = {
				token: encodedToken,
				...foundUser
			};
			state.status = true;
		},
		[loginHandler.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = true;
			toast.error(payload, { autoClose: 1000 });
		},
		// signup
		[signUpHandler.pending]: state => {
			state.isLoading = true;
		},
		[signUpHandler.fulfilled]: (
			state,
			{ payload: { encodedToken, createdUser, message } }
		) => {
			toast.success(message, { autoClose: 1000 })
			state.isLoading = false;
			state.user = { token: encodedToken, ...createdUser };
			state.status = true;
		},
		[signUpHandler.rejected]: (state, { payload }) => {
			console.log(payload);
			state.isLoading = false;
			state.error = true;
			toast.error(payload, { autoClose: 1000 });
		}
	}
});

export const { userLogout, updateAuthProfile, updateAuthFollowing } = userSlice.actions;

export default userSlice.reducer;
