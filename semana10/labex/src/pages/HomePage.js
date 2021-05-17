import React from 'react';
import { useHistory } from 'react-router';
import {goToAdminHomePage, goToListTripsPage, goToLoginPage} from '../routes/coordinator'

const HomePage = () => {
    const history = useHistory()

    const buttonAdmin = () => {
        const token = window.localStorage.getItem('token')
        if (!token) {
            return <button onClick={() => goToLoginPage(history)}>Login</button>
        } else {
            return <button onClick={() => goToAdminHomePage(history)}>Área Admin</button>
        }
    }
    
    return(
            <div>
                <h1>Home Page</h1>
                <button onClick={() => goToListTripsPage(history)}>Viagens</button>
                {buttonAdmin()}
            </div>
    )

}

export default HomePage;