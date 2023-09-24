import {AuthProvider} from "ra-core";
import {API_SERVER_URL} from "./dataProvider";
import dayjs from 'dayjs';

const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    return fetch(API_SERVER_URL + '/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      credentials: 'same-origin',
      headers: new Headers({'Content-Type': 'application/json'})
    }).then(res => {
      if (res.status < 200 || res.status >= 300){
        return Promise.reject();
      }

      return res.json().then(user => {
        localStorage.setItem('auth', JSON.stringify(user));
        return Promise.resolve();
      });
    });
  },
  logout: () => {
    localStorage.removeItem('auth');
    fetch(API_SERVER_URL + '/api/logout');

    return Promise.resolve();
  },
  checkAuth: () => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      return Promise.reject();
    }

    const user = JSON.parse(auth);
    if (user.exp < dayjs().unix()) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkError:  (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem('auth');
      return Promise.reject();
    }

    return Promise.resolve();
  },
  getIdentity: () => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      return Promise.reject();
    }

    const currentUser = JSON.parse(auth);

    return Promise.resolve({...currentUser, fullName: currentUser.username});
  },
  getPermissions: () => {
    const auth = localStorage.getItem('auth');
    if (!auth) {
      return Promise.reject();
    }

    return Promise.resolve(JSON.parse(auth).roles);
  },
};

export default authProvider;
