import React, { useContext } from 'react'
import { InputsContainer } from './styled'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'
import { signUp } from '../../services/user'
import { GlobalStateContext } from '../../global/GlobalStateContext'

const SignUpForm = () => {
    const history = useHistory()
    const {rightButtonText, setRightButtonText} = useContext(GlobalStateContext)
    const [form, onChange, clear] = useForm({email:'', password:'', username:''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history,setRightButtonText)
    }
    
    return (
        <div>
            <InputsContainer>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            name={'email'}
                            value={form.email}
                            onChange={onChange}
                            label={'E-mail'}
                            variant={'outlined'}
                            fullWidth
                            margin={'dense'}
                            required
                            type={"email"}
                        />
                        <TextField
                            name={'password'}
                            value={form.password}
                            onChange={onChange}
                            label={'Senha'}
                            variant={'outlined'}
                            fullWidth
                            margin={'dense'}
                            required
                            type={'password'}
                        />
                        <TextField
                            name={'username'}
                            value={form.username}
                            onChange={onChange}
                            label={'Nome'}
                            variant={'outlined'}
                            fullWidth
                            margin={'dense'}
                            required
                            autoFocus
                            type={"normal"}
                        />                        
                        <Button
                            type={'submit'}
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                        >
                            Cadastrar
                        </Button>
                    </form>
                </InputsContainer>    
        </div>
    )
}

export default SignUpForm