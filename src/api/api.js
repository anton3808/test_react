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
  }
}


// export const unFollow = (id = 1) => {
//   return axios.delete( `follow/${id}`).then(response => {
//     return response.data
//   });
// }

// export const follow = (id = 1) => {
//   return axios.post( `follow/${id}`).then(response => {
//     return response.data
//   });
// }

