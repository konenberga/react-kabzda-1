import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '600758f2-c7ef-4d81-a818-35c05b5cf5af'}
})

export const usersAPI ={
    getUsers(currentPage, pageSize) {
        return(
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`,
            ).then(response => response.data)
        )
    }
}


export const authAPI = {
    authMe() {
        return (
            axiosInstance.get(`auth/me`)
                .then(response => response.data.data)
        )
    }
}

export const followAPI ={
    follow(id) {
        return (
            axiosInstance.post(`follow/${id}`)
                .then(response => response.data)
        )
    },
    unfollow(id) {
        return (
            axiosInstance.delete(`follow/${id}`)
                .then(response => response.data)
        )
    }
}
