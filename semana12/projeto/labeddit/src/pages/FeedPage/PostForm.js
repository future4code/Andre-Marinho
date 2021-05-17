import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { InputsContainer } from '../FeedPage/styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { FormContainer } from './styled'
import {createPost} from '../../services/posts'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'



const PostForm = (props) => {
    const {rightButtonText, setRightButtonText} = useContext(GlobalStateContext)
    const [form, onChange, clear] = useForm({text:'', title:''})

    

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form,clear)
        axios.get(`${BASE_URL}/posts`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((response) => {
            props.setFeed(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    return (
        <FormContainer>
            <InputsContainer>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            name={'title'}
                            value={form.title}
                            onChange={onChange}
                            label={'Title'}
                            variant={'outlined'}
                            fullWidth
                            margin={'dense'}
                            required
                            type={"text"}
                        />
                        <TextField
                            name={'text'}
                            value={form.text}
                            onChange={onChange}
                            label={'Text'}
                            variant={'outlined'}
                            fullWidth
                            margin={'dense'}
                            required
                            type={'text'}
                        />   
                        <Button
                            type={'submit'}
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                        >
                            Postar
                        </Button>
                    </form>
                </InputsContainer>    
        </FormContainer>
    )
}

export default PostForm