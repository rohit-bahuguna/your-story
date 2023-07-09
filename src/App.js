import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/UserComponents/Login';
import Signup from './components/UserComponents/Signup';
import Explore from './components/Explore';
import Search from './components/Search';
import PostDetails from './components/Posts/PostDetails';
import Home from './components/Home';
import Profile from "./components/profile/Profile"
import PageNotFound from './components/comman/PageNotFound';
import { BookMark } from './pages';
import EditPost from './components/Posts/EditPost';
import CreatePost from './components/CreatePost';
import PrivateRoute, { IsAuthenticated } from './components/comman/PrivateRoute';
import { Toaster } from 'react-hot-toast';


function App() {
	return (
		<>
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
		</>
	);
}

export default App;
