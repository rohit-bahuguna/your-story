import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
	{
		_id: uuid(),
		content:
			'Must try of this . The taste is absolutely mind-boggling and fresh.',
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1673014596/cld-sample-4.jpg',
		postVideos: [],
		createdAt: "2023-06-25T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			'Fuel your body with nutritious goodness and embrace a healthy lifestyle.',
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892747/your_story/post/dno0fky51fpzymcoh2wu.jpg',
		postVideos: [],
		createdAt: "2023-06-26T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			'Nourish your body, mind, and soul with wholesome and delicious food.',
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892746/your_story/post/xlb90pys9qw1mfemh6rw.jpg',
		postVideos: [],
		createdAt: "2023-06-27T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			'Eating well is a form of self-care. Choose foods that energize and nourish you.',
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892744/your_story/post/h3t0jhsdkkqn9tpe6kfx.jpg',
		postVideos: [],
		createdAt: "2023-06-28T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Healthy eating is not a trend it's a way of life.Enjoy the journey!",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892742/your_story/post/thapj9go7uxjr3gpamlx.jpg',
		postVideos: [],
		createdAt: "2023-06-28T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Discover the power of natural ingredients and let your plate be your medicine",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892738/your_story/post/eypzey7who1r4alru0uz.jpg',
		postVideos: [],
		createdAt: "2023-06-28T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Eating healthy doesn't have to be boring. Explore delicious flavors and vibrant colors.",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892735/your_story/post/ckcn3tpbn78npjtqf2ri.jpg',
		postVideos: [],
		createdAt: "2023-06-28T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Treat your body like a temple by choosing foods that support your health and vitality",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892732/your_story/post/henssvvqyaksfrshr839.jpg',
		postVideos: [],
		createdAt: "2023-06-28T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [
			{
				_id: uuid(),
				message: 'Nice i will also try!',
				name: 'kailash Rawat',
				email: 'kailishrawat@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			},
			{
				_id: uuid(),
				message: 'wow looks amazing!',
				name: 'kavita nayal',
				email: 'kavitanayal@gmail.com',
				profilePicture:
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},

];
