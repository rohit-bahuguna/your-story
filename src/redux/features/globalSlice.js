import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openModal: false,
	logoutModal: false,
	searchModal: false,
	theme: localStorage.getItem('theme') || "light"
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
		},
		toggleDarkMode: (state) => {


			state.theme = state.theme === "light" ? "dark" : "light"
			localStorage.setItem('theme', state.theme)

		}
	}
});

export const { toggleModal, toggleLogoutModal, toggleSearchModal, toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
