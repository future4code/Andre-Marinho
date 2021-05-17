import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useInput from '../hooks/useInput';
import { baseUrl } from '../parameters';
import { goToAdminHomePage, goToHomePage } from '../routes/coordinator';


const LoginPage = () => {
    const history = useHistory()
    const [email, handleEmail] = useInput('')
    const [password, handlePassword] = useInput('')

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
                <input onChange={handleEmail} value={email} type='email' placeholder='E-mail' request/>
                <input onChange={handlePassword} value={password} type='password' placeholder='Senha' request/>
                <button onClick={login}>Login</button>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
            </>
            
            )
}

export default LoginPage;