export const searchPost = (posts, search) => {
    console.log(search)
    if (search !== "") {
          return posts.filter(({ postBy: { fullName, email } }) => fullName.toLowerCase().includes(search) || email.toLowerCase().includes(search)) 
    } else {
        return posts
    }
 
}