import React , { useContext }from 'react'
import { InputsContainer } from './styled'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button'
import {login} from '../../services/user'
import { useHistory } from 'react-router'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { GlobalStateContext } from '../../global/GlobalStateContext'


const LoginForm = () => {
    useUnprotectedPage()
    const [form, onChange, clear] = useForm({email:'', password:''})
    const {rightButtonText, setRightButtonText} = useContext(GlobalStateContext)
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form,clear,history,setRightButtonText)
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

                        <Button
                            type={'submit'}
                            fullWidth
                            variant={'contained'}
                            color={'primary'}
                        >
                            Login
                        </Button>
                    </form>
                </InputsContainer>    
        </div>
    )
}

export default LoginForm