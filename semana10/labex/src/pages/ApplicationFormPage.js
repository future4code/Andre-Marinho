import React from 'react';
import { useHistory } from 'react-router-dom'

const ApplicationFormPage = () => {
    const history = useHistory()
    
    return(
            <div>
                <p>Application Form Page</p>
                <button onClick={history.goBack}>Voltar</button>
            </div>
    )
}

export default ApplicationFormPage;