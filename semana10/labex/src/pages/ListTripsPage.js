import React from 'react';
import { useHistory } from 'react-router';
import {goToApplicationFormPage} from '../routes/coordinator'

const ListTripsPage = () => {
    const history = useHistory()
    
    // const goToApplicationFormPage = () => {
    //     history.push('/trips/application')
    // }

    return(
            <div>
                <p>List Trips Page</p>
                <button onClick={() => goToApplicationFormPage(history)}>Increver-se</button>
                <button onClick={history.goBack}>Voltar</button>
            </div>
            
            )
}

export default ListTripsPage;