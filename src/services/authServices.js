import axios from 'axios';

export const loginService = authData => {
	return axios.post('/api/auth/login', authData);
};

export const signUpService = signUpInput => {
	return axios.post('/api/auth/signup', signUpInput);
};
