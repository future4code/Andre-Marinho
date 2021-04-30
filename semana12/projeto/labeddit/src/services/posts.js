import axios from 'axios'
import {BASE_URL} from '../constants/urls'

export const createPost = (body,clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) => {
        console.log(res.data)
        alert('Post criado com sucesso')
        clear()
    })
    .catch((err) => console.log(err))
}