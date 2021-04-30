import React from 'react'
import { ScreenContainer,LoginImage } from './styled'
import login_logo from '../../assets/logo_login.jpg'
import SignUpForm from './SignUpForm'
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = () => { 
    useUnprotectedPage()
    // const history = useHistory()

    return (
        <div>
            <ScreenContainer>
                <LoginImage src={login_logo}/>
                <SignUpForm/>
            </ScreenContainer>
            
        </div>
    )
}

export default SignUpPage