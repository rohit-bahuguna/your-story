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
		profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688569144/your_story/profile/dkhdjb9zm9qhgzohyiqk.jpg',
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
		fullName: 'Guest Name',
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
	{
		_id: uuid(),
		fullName: 'John Doe',
		username: 'johndoe',
		password: 'john@#456',
		email: 'johndoe@gmail.com',
		bio: 'Hello, I am John Doe!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Jane Smith',
		username: 'janesmith',
		password: 'smith@#789',
		email: 'janesmith@gmail.com',
		bio: 'Hey, I am Jane Smith!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Michael Johnson',
		username: 'mjohnson',
		password: 'michael@#321',
		email: 'mjohnson@gmail.com',
		bio: 'Hi, I am Michael Johnson!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Emily Brown',
		username: 'emilyb',
		password: 'emily@#654',
		email: 'emilybrown@gmail.com',
		bio: 'Nice to meet you, I am Emily Brown!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'David Wilson',
		username: 'dwilson',
		password: 'david@#987',
		email: 'davidwilson@gmail.com',
		bio: 'Hello, I am David Wilson!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Olivia Taylor',
		username: 'oliviat',
		password: 'olivia@#246',
		email: 'oliviataylor@gmail.com',
		bio: 'Hey there, I am Olivia Taylor!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Daniel Anderson',
		username: 'danderson',
		password: 'daniel@#135',
		email: 'danielanderson@gmail.com',
		bio: 'Hi, I am Daniel Anderson!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Sophia Martinez',
		username: 'smartinez',
		password: 'sophia@#753',
		email: 'sophiamartinez@gmail.com',
		bio: 'Hello, I am Sophia Martinez!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},
	{
		_id: uuid(),
		fullName: 'Matthew Johnson',
		username: 'mattj',
		password: 'matthew@#468',
		email: 'matthewjohnson@gmail.com',
		bio: 'Hey there, I am Matthew Johnson!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},

	{
		_id: uuid(),
		fullName: 'Emma Wilson',
		username: 'emw',
		password: 'emma@#987',
		email: 'emmawilson@gmail.com',
		bio: 'Hello, I am Emma Wilson!',
		website: '',
		profileAvatar: 'https://example.com/avatar.jpg',
		createdAt: '2023-07-02T09:32:39+05:30',
		updatedAt: '2023-07-02T09:32:39+05:30',
		following: [],
		followers: [],
		bookmarks: []
	},

];


