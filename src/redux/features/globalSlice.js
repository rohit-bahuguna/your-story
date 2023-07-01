import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openModal: false,
	logoutModal: false,
	searchModal: false,
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		toggleModal: state => {
			state.openModal = !state.openModal;
		},
		toggleLogoutModal: (state, { payload }) => {
			state.logoutModal = payload;
		},
		toggleSearchModal: (state, { payload }) => {
			state.searchModal = payload
		}
	}
});

export const { toggleModal, toggleLogoutModal, toggleSearchModal } = globalSlice.actions;

export default globalSlice.reducer;
