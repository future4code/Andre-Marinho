import React, { useContext } from 'react'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { InputsContainer } from '../PostPage/styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { FormContainer } from './styled'
import {createComment} from '../../services/posts'

const CommentForm = (props) => {
    const {rightButtonText, setRightButtonText} = useContext(GlobalStateContext)
    const [form, onChange, clear] = useForm({text:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(props.id,form,clear)
        clear()
        console.log(form, props.id)
    }
    
    return (
        <FormContainer>
            <InputsContainer>
                    <form onSubmit={onSubmitForm}>
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
                            Comentar
                        </Button>
                    </form>
                </InputsContainer>    
        </FormContainer>
    )
}

export default CommentForm