export const isLiked = (likedBy, email) => likedBy?.find(user => user.email === email)


export const getTimeAgo = (date) => {
    const now = new Date();
    const timeDiff = now - new Date(date);

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 365 * day;

    if (timeDiff < minute) {

        if (Math.floor(timeDiff / 1000) == 0) {
            return "just now";

        }
        return Math.floor(timeDiff / 1000) + ' seconds ago';
    } else if (timeDiff < hour) {
        return Math.floor(timeDiff / minute) + ' minutes ago';
    } else if (timeDiff < day) {
        return Math.floor(timeDiff / hour) + ' hours ago';
    } else if (timeDiff < month) {
        return Math.floor(timeDiff / day) + ' days ago';
    } else if (timeDiff < year) {
        return Math.floor(timeDiff / month) + ' months ago';
    } else {
        return Math.floor(timeDiff / year) + ' years ago';
    }
}

export const isInBookmarks = (bookmarks, postId) => bookmarks.find(post => post._id === postId);


export const searchPost = (posts, search) => {

    if (search !== "") {
        return posts.filter(({ postBy: { fullName, email } }) => fullName.toLowerCase().includes(search) || email.toLowerCase().includes(search))
    } else {
        return posts
    }

}