import React from 'react'
import { ScreenContainer,LoginImage, SignUpButtonContainer } from './styled'
import login_logo from '../../assets/logo_login.jpg'
import Button from '@material-ui/core/Button'
import LoginForm from './LoginForm'
import { goToSignUp } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const LoginPage = () => { 
    const history = useHistory()

    return (
        <div>
            <ScreenContainer>
                <LoginImage src={login_logo}/>
                <LoginForm/>
                <SignUpButtonContainer>
                    <Button
                        onClick={() => goToSignUp(history)}
                        type={'submit'}
                        fullWidth
                        variant={'text'}
                        color={'primary'}
                    >
                       Cadastre-se 
                    </Button>
                </SignUpButtonContainer>
            </ScreenContainer>
            
        </div>
    )
}

export default LoginPage