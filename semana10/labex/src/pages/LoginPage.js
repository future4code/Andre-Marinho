import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { baseUrl } from '../parameters';
import { goToAdminHomePage } from '../routes/coordinator';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post(baseUrl+'/login',body)
        .then((res)=> {
            window.localStorage.setItem('token', res.data.token)
            goToAdminHomePage(history)

        })
        .catch((err) => {
            console.log(err)
        })
    }

    return( <>
                <h1>Login Page</h1>
                <input onChange={handleEmail} value={email} placeholder='E-mail'/>
                <input onChange={handlePassword} value={password} placeholder='Senha'/>
                <button onClick={login}>Login</button>
            </>
            
            )
}

export default LoginPage;