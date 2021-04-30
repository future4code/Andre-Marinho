import React, { useState } from 'react'
import {GlobalStateContext} from './GlobalStateContext'

const GlobalState = (props) => {
    const token = localStorage.getItem('token')
    const [rightButtonText, setRightButtonText] = useState(token ? 'Logout' : 'Login')
    const rightButton = {rightButtonText, setRightButtonText}
    return(
        <GlobalStateContext.Provider value={rightButton}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState