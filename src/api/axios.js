import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://drawerly.test/api/v1',
  baseURL: 'https://admin.dawarlykw.net/api/v1',

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Add a request interceptor to set the token dynamically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
