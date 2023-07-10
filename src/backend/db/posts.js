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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
		createdAt: "2023-06-29T09:32:39+05:30",
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
		createdAt: "2023-06-30T09:32:39+05:30",
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
		createdAt: "2023-06-05T09:32:39+05:30",
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
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
		createdAt: "2023-06-15T09:32:39+05:30",
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Nutrition is the foundation of good health. Choose foods that make you thrive",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892733/your_story/post/ukvhjs2ha3wpsg6smdrk.jpg',
		postVideos: [],
		createdAt: "2023-07-02T09:32:39+05:30",
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"Embrace a balanced diet filled with wholesome ingredients for a healthier, happier you",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'Rohit Bahuguna',
			email: 'rohitbahuguna.work@gmail.com',
			username: 'rohitbahuguna',
			profileAvatar: 'https://res.cloudinary.com/dfbd4lyqe/image/upload/v1677586788/Recipe/thumbnails/v2dhmqmyspj0tlh0cl50.png',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688892735/your_story/post/aaayrpu1njkcguxv2p8c.jpg',
		postVideos: [],
		createdAt: "2023-07-01T09:32:39+05:30",
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
					'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
				createdAt: formatDate(),
				updatedAt: formatDate()
			}
		]
	},
	{
		_id: uuid(),
		content:
			"In the world of anime, imagination knows no bounds. ✨ #AnimeLove",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914591/your_story/post/di8wpfxoiqnxprka4qy8.jpg',
		postVideos: [],
		createdAt: "2023-07-02T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Embrace the extraordinary and step into a world of anime wonders. 🌟 #AnimeLife",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914591/your_story/post/ujylxqglcrd12rnsnlz1.jpg',
		postVideos: [],
		createdAt: "2023-07-03T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Let the vibrant colors and captivating stories of anime fill your day. 🌈 #AnimeAddict",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914591/your_story/post/xcxv5r2vu4g352fvyzcx.jpg',
		postVideos: [],
		createdAt: "2023-07-04T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Unlock your inner otaku and join me on an anime adventure! 🎬 #AnimeObsession",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914591/your_story/post/oc2o0wmi6dzs65ex2uas.jpg',
		postVideos: [],
		createdAt: "2023-07-05T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"In the realm of anime, dreams become reality. ✨ #AnimeDreams",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914590/your_story/post/ceududtzjycabtmw1d1u.jpg',
		postVideos: [],
		createdAt: "2023-07-06T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Anime: where emotions come alive and fantasies take flight. 🌸 #AnimeMagic",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914590/your_story/post/sias3ml1ukqjqgbsdivx.jpg',
		postVideos: [],
		createdAt: "2023-07-07T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Dive into the captivating worlds of anime and get lost in their enchantment. 🌌 #AnimeWorld",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/r34ol3lokac3gbxo73gs.jpg',
		postVideos: [],
		createdAt: "2023-03-07T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Join me in a journey through the captivating stories and unforgettable characters of anime. 🌟 #AnimeJourney",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/mnqkfy0l6u7zm2hwdpbc.jpg',
		postVideos: [],
		createdAt: "2023-04-07T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Anime is not just a genre; it's a way of life. 🌟 #AnimeLifestyle",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/p0kgmafhvuoi3hv3l6rb.jpg',
		postVideos: [],
		createdAt: "2023-05-07T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},
	{
		_id: uuid(),
		content:
			"Through anime, I've discovered new worlds, forged unbreakable bonds, and experienced countless emotions. Join me on this amazing ride. 🎥 #AnimeAdventure",
		likes: { likeCount: 0, likedBy: [], dislikedBy: [], },
		postBy: {
			fullName: 'kavita nayal',
			username: 'kabbu',
			email: "kabbu@gmail.com",
			profileAvatar: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/kntp6pxsyxubkufdpfpf.jpg',
		},
		postImage: 'https://res.cloudinary.com/dqblmzhhm/image/upload/v1688914589/your_story/post/ijv4jj6bulzon1z7wjzp.jpg',
		postVideos: [],
		createdAt: "2023-05-07T09:32:39+05:30",
		updatedAt: formatDate(),
		comments: [

		]
	},

];
