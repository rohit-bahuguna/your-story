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
	// {
	// 	_id: uuid(),
	// 	content:
	// 		'2022-04-05 Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.',
	// 	likes: { likeCount: 10, likedBy: [], dislikedBy: [], },
	// 	postBy: {
	// 		fullName: 'Prashant Singh Chauhan',
	// 		email: 'pareshaaaaan@gmail.com',
	// 		username: 'pareshaaaaan',
	// 		profileAvatar: 'https://picsum.photos/id/1012/150',
	// 	},
	// 	postImage: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 	postVideos: [],
	// 	createdAt: '2023-06-26T09:32:39+05:30',
	// 	updatedAt: formatDate(),
	// 	comments: [
	// 		{
	// 			_id: uuid(),
	// 			message: 'Nice!',
	// 			name: 'Mohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		},
	// 		{
	// 			_id: uuid(),
	// 			message: 'Very Nice!',
	// 			name: 'Rohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		}
	// 	]
	// },
	// {
	// 	_id: uuid(),
	// 	content:
	// 		'2022-05-02 Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.',
	// 	likes: { likeCount: 100, likedBy: [], dislikedBy: [], },
	// 	postBy: {
	// 		fullName: 'Prashant Singh Chauhan',
	// 		email: 'pareshaaaaan@gmail.com',
	// 		username: 'pareshaaaaan',
	// 		profileAvatar: 'https://picsum.photos/id/1012/150',
	// 	},
	// 	postImage: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 	postVideos: [],
	// 	createdAt: '2023-06-27T09:32:39+05:30',
	// 	updatedAt: formatDate(),
	// 	comments: [
	// 		{
	// 			_id: uuid(),
	// 			message: 'Nice!',
	// 			name: 'Mohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		},
	// 		{
	// 			_id: uuid(),
	// 			message: 'Very Nice!',
	// 			name: 'Rohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		}
	// 	]
	// },
	// {
	// 	_id: uuid(),
	// 	content:
	// 		'2022-05-01 Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.',
	// 	likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
	// 	postBy: {
	// 		fullName: 'Prashant Singh Chauhan',
	// 		email: 'pareshaaaaan@gmail.com',
	// 		username: 'pareshaaaaan',
	// 		profileAvatar: 'https://picsum.photos/id/1012/150',
	// 	},
	// 	postImage: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 	postVideos: [],
	// 	createdAt: '2023-06-28T09:32:39+05:30',
	// 	updatedAt: formatDate(),
	// 	comments: [
	// 		{
	// 			_id: uuid(),
	// 			message: 'Nice!',
	// 			name: 'Mohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		},
	// 		{
	// 			_id: uuid(),
	// 			message: 'Very Nice!',
	// 			name: 'Rohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		}
	// 	]
	// },
	// {
	// 	_id: uuid(),
	// 	content:
	// 		'2022-04-05 Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.',
	// 	likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
	// 	postBy: {
	// 		fullName: 'Prashant Singh Chauhan',
	// 		email: 'pareshaaaaan@gmail.com',
	// 		username: 'pareshaaaaan',
	// 		profileAvatar: 'https://picsum.photos/id/1012/150',
	// 	},
	// 	postImage: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 	postVideos: [],
	// 	createdAt: '2023-06-29T09:32:39+05:30',
	// 	updatedAt: formatDate(),
	// 	comments: [
	// 		{
	// 			_id: uuid(),
	// 			message: 'Nice!',
	// 			name: 'Mohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		},
	// 		{
	// 			_id: uuid(),
	// 			message: 'Very Nice!',
	// 			name: 'Rohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		}
	// 	]
	// },
	// {
	// 	_id: uuid(),
	// 	content:
	// 		'2023-07-02T09:32:39+05:30 Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.',
	// 	likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
	// 	postBy: {
	// 		fullName: 'Prashant Singh Chauhan',
	// 		email: 'pareshaaaaan@gmail.com',
	// 		username: 'pareshaaaaan',
	// 		profileAvatar: 'https://picsum.photos/id/1012/150',
	// 	},
	// 	postImage: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 	postVideos: [],
	// 	createdAt: '2023-07-02T09:32:39+05:30',
	// 	updatedAt: formatDate(),
	// 	comments: [
	// 		{
	// 			_id: uuid(),
	// 			message: 'Nice!',
	// 			name: 'Mohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		},
	// 		{
	// 			_id: uuid(),
	// 			message: 'Very Nice!',
	// 			name: 'Rohit',
	// 			email: 'pareshaaaaan@gmail.com',
	// 			profilePicture:
	// 				'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
	// 			createdAt: formatDate(),
	// 			updatedAt: formatDate()
	// 		}
	// 	]
	// }
];
