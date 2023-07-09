import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginService, signUpService } from '../../services/authServices';
import { toast } from 'react-hot-toast';

export const loginHandler = createAsyncThunk(
	'auth/loginHandler',
	async (authData, { rejectWithValue }) => {
		try {
			const { data, status } = await loginService(authData);

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
			toast.success('logout successfully', { className: "text-red-500" });
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

			state.isLoading = false;
			state.error = false;
			state.user = {
				token: encodedToken,
				...foundUser
			};
			state.status = true;
			toast.success(message);
		},
		[loginHandler.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = true;
			toast.error(payload || "Something Went Wrong");
		},
		// signup
		[signUpHandler.pending]: state => {
			state.isLoading = true;
		},
		[signUpHandler.fulfilled]: (
			state,
			{ payload: { encodedToken, createdUser, message } }
		) => {

			state.isLoading = false;
			state.user = { token: encodedToken, ...createdUser, profileAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5fVJf_A_8CxQnzHFw4qV9LejNulQNoCoMCZq3nCdtcHcQCb8GVZfq3K8bx66lCDNy6ttCX2cbak&usqp=CAU&ec=48600112" };
			state.status = true;

			toast.success(message)

		},
		[signUpHandler.rejected]: (state, { payload }) => {

			state.isLoading = false;
			state.error = true;
			toast.error(payload);
		}
	}
});

export const { userLogout, updateAuthProfile, updateAuthFollowing } = userSlice.actions;

export default userSlice.reducer;
