export const isFollowed = (followers, userId) => {
    return followers?.find(({ id }) => id === userId)
}

export const getUserFollowing = (users, id) => {
    const followingUser = users.reduce((following, user) => user.id === id ? [...following, ...user.following] : following, [])
    const followingUserEmails = followingUser.reduce((followingUserEmail, user) => [...followingUserEmail, user.email], [])

    return { followingUserEmails, followingUser }

}


export const getSearchedUser = (users, search) => {
    if (search) {
        return users.filter(
            (user) =>
                user.username.toLowerCase().includes(search.toLowerCase()) ||
                user.fullName.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
        );
    }
};
