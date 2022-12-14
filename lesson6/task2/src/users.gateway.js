const baseUrl = `http://api.github.com/users`;

export const getUserData = (userName) => {
  fetch(`${baseUrl}/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error();
  });
};
