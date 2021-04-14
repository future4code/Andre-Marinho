import React from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';

const CreateTripPage = () => {
    useProtectedPage()

    return(<p>Create Trip Page</p>)
}

export default CreateTripPage;