export const isFollowed = (followers, userId) => {
    return followers?.find(({ id }) => id === userId)
}

export const getUserFollowing = (users, id) => {
    return users.reduce((following, user) => user.id === id ? [...following, ...user.following] : following, [])
}