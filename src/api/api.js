import * as axios from 'axios'; //библиотека для запросові


const instance = axios.create({ // настройки axios (чтобы не повторять)
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "95db1b82-ff10-47ab-a2fc-b4324afb1a65"
  }
});


export const usersAPI = {
  getUsers  (currentPage = 1, pageSize = 10)  {
    return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data
        });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    console.warn('Obsolete method')
    return profileAPI.getProfile(userId); //запрос на сервак 
  }

}


export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId); //запрос на сервак 
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId); //запрос на сервак 
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  }

}


export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }

}


