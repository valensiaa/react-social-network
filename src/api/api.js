import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "07126221-5373-4f8a-88e7-aa50684bf584"
  }
})


export const usersAPI = {
  getUsers(currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data)
  },
  unFollow(userId) {
    return instance.delete(`follow/${userId}`)
    .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
    .then(response => response.data)
  },
  getProfile(userId) {
    console.warn('Obsolte method. Please use profileApi object')
    return profileAPI.getProfile(userId)
  }
}


export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/`+ userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/`+ userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status})
  }
}

export const authApi = {
  me() {
    return instance.get(`auth/me`)    
  },
  login(email, password, rememberMe=false) {
    return instance.post(`auth/login`, {email, password, rememberMe})    
  },
  logOut() {
    return instance.delete(`auth/login`)    
  }
}




