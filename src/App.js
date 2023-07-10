import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BookMark, CreatePost, EditPost, Explore, Home, PostDetails, Profile, PageNotFound, Login, Signup } from './pages';
import PrivateRoute, { IsAuthenticated } from './components/comman/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Search from './pages/Search';


function App() {
	const { theme } = useSelector(state => state.globalReducer)
	return (
		<div className={theme === 'dark' && "bg-black text-white"}>
			<Toaster
				position="top-center"
				reverseOrder={false}
			/>
			<Routes>

				<Route path='*' element={<PageNotFound />} />

				<Route element={<IsAuthenticated />}>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Route>

				<Route element={<PrivateRoute />} >
					<Route path="/search" element={<Search />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/posts" element={<Home />} />
					<Route path="/post/:postId" element={<PostDetails />} />
					<Route path="/profile/:email" element={<Profile />} />
					<Route path="/bookmarks" element={<BookMark />} />
					<Route path="/post/create" element={<CreatePost />} />
					<Route path="/post/edit/:postId" element={<EditPost />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
