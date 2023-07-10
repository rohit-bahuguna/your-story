import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
	{
		_id: uuid(),
		fullName: 'Rohit Bahuguna',
		email: 'rohitbahuguna.work@gmail.com',
		username: 'rohitbahuguna',
		profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		password: 'Rohit123',
		bio: "life_is_like_#photograph Learning new lesson everyday from life Doing everything that makes me happy ♥️#himalayan🏍 and coding 👨‍💻is love",
		website: 'https://rohit-bahuguna.netlify.app/',
		createdAt: "2023-06-25T09:32:39+05:30",
		updatedAt: "2023-06-25T09:32:39+05:30",
		following: [
		],
		followers: [
		],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Kailash Rawat',
		username: 'kaili',
		email: 'kaili@gmail.com',
		password: 'kaili123',
		bio: 'Hey there, i am kailash i love animine',
		website: '',
		profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569153/your_story/profile/uii3uuhqvonb7fz1pbtv.jpg',
		createdAt: "2023-06-26T09:32:39+05:30",
		updatedAt: "2023-06-26T09:32:39+05:30",
		following: [

		],
		followers: [

		]
		,
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'kavita nayal',
		username: 'kabbu',
		email: "kabbu@gmail.com",
		password: 'kabbu@123',
		bio: 'Hey there, i am kabbu i look dumb , but i am smart ',
		website: '',
		profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		createdAt: "2023-06-27T09:32:39+05:30",
		updatedAt: "2023-06-27T09:32:39+05:30",
		following: [

		],
		followers: [

		],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Bharat Goyal',
		username: 'bharatgoyal',
		password: 'bharat@#123',
		email: "bharatgoyal@gmail.com",
		bio: 'Hello there i am , bharat goyal!',
		website: '',
		profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569126/your_story/profile/bzj5aetc2pamoophpcd2.jpg',
		createdAt: "2023-06-30T09:32:39+05:30",
		updatedAt: "2023-06-30T09:32:39+05:30",
		following: [

		],
		followers: [

		],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Anurag Jha',
		username: 'annu',
		password: 'anurag@#123',
		email: "anuragjha@gmail.com",
		bio: 'Hello there i am , anurag jha!',
		website: '',
		profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569137/your_story/profile/k8mbyzh56rfhfcmd1qz2.jpg',
		createdAt: "2023-07-02T09:32:39+05:30",
		updatedAt: "2023-07-02T09:32:39+05:30",
		following: [

		],
		followers: [

		],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Guest',
		username: 'guest',
		password: 'guestuser',
		email: "guestuser@gmail.com",
		bio: 'Hello there i am , guest user',
		website: '',
		profileAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5fVJf_A_8CxQnzHFw4qV9LejNulQNoCoMCZq3nCdtcHcQCb8GVZfq3K8bx66lCDNy6ttCX2cbak&usqp=CAU&ec=48600112',
		createdAt: "2023-07-02T09:32:39+05:30",
		updatedAt: "2023-07-02T09:32:39+05:30",
		following: [

		],
		followers: [

		],
		bookmarks: []
	},



];


