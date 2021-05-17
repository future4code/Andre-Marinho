import React from 'react'
import error2 from '../../assets/error2.jpg'
import Typography from '@material-ui/core/Typography'
import { ErrorImage, ErrorPageContainer } from './styled'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error2}/>
            <Typography color={'primary'} variant={'h4'} align={'center'}>Error 404 - Página não encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage