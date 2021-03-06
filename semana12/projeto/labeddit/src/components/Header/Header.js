import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';

const Header = () => {
  const history = useHistory()
  const token = localStorage.getItem('token') 
  // const [rightButtonText, setRightButtonText] = useState(token ? 'Logout' : 'Login')
  const {rightButtonText, setRightButtonText} = useContext(GlobalStateContext)
  
  const logout = () => {
    localStorage.removeItem('token')
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText('Login')
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
            <Button onClick={() => goToFeed(history)} color="inherit">LabeEddit</Button>
            <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header