export const getSearchedUser = (users, search) => {
  if (search) {
    return users.filter(
      (user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.fullName.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
    );
  }
  };
   