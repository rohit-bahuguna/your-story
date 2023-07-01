export const isLiked = (likedBy, email) => likedBy?.find(user => user.email === email)
