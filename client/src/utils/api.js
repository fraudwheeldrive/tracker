// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const createUser = (userData) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };
  
  // save show data for a logged in user
  export const saveShow = (showData, token) => {
    return fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(showData),
    });
  };
  
  // remove saved show data for a logged in user
  export const deleteBook = (showId, token) => {
    return fetch(`/api/users/shows/${showId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };




// make a search to google shows api
export const SearchShows = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/multi?api_key=b50a54473311bbac83f4a96b6efa872d&query=${query}&page=1`);
  };