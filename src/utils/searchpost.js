export const searchPost = (posts, search) => {

    if (search !== "") {
          return posts.filter(({ postBy: { fullName, email } }) => fullName.toLowerCase().includes(search) || email.toLowerCase().includes(search)) 
    } else {
        return posts
    }
 
}