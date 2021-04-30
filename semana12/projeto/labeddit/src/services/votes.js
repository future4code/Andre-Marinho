import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const likePost = (id) => {
    const body = {
        "direction": 1
    }
    axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => console.log(err))
}

export const dislikePost = (id) => {
    const body = {
        "direction": -1
    }
    axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => console.log(err))
}