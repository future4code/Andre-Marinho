import React from 'react';
import { useHistory } from 'react-router';
import {goToListTripsPage, goToLoginPage} from '../routes/coordinator'

const HomePage = () => {
    const history = useHistory()
    
    return(
            <div>
                <p>Home Page</p>
                <button onClick={() => goToListTripsPage(history)}>Viagens</button>
                <button onClick={() => goToLoginPage(history)}>Login</button>
            </div>
    )

}

export default HomePage;