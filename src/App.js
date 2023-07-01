import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/comman/Sidebar';
import Login from './components/UserComponents/Login';
import Signup from './components/UserComponents/Signup';
import Explore from './components/Explore';
import Search from './components/Search';
import Posts from './components/Posts/Posts';
import Header from './components/comman/Header';
import PostDetails from './components/Posts/PostDetails';
import Layout from './components/comman/Layout';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import Modal from './components/comman/Modal';
import Profile from "./components/profile/Profile"
import PageNotFound from './components/comman/PageNotFound';
import { BookMark } from './pages';
import EditPost from './components/Posts/EditPost';
import CreatePost from './components/CreatePost';
function App() {
	return (
		<div className="z-0">
			<ToastContainer />
			<Modal />
			<Routes>
				<Route path='*' element={<PageNotFound />} />
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/search" element={<Search />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/posts" element={<Home />} />
				<Route path="/post/:postId" element={<PostDetails />} />
				<Route path="/profile/:email" element={<Profile />} />
				<Route path="/bookmarks" element={<BookMark />} />
				<Route path="/post/create" element={<CreatePost />} />
				<Route path="/post/edit/:postId" element={<EditPost />} />
			</Routes>
		</div>
	);
}

export default App;
