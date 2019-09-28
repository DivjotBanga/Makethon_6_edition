import axios from 'axios'

const instance = axios.create({
    baseURL:'192.168.43.211:5000/api'
})

export default instance