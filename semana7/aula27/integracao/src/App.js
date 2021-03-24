import React from 'react';
import axios from 'axios';
import CreateUserPage from './pages/CreateUserPage';
import UsersListPage from './pages/UsersListPage';
import { baseUrl, axiosConfig } from './parameters';


export default class App extends React.Component {
  state = {
    page:'createUser'
  };
  
  changePage = () => {
    if (this.state.page === 'createUser') {
      this.setState({page: 'usersList'})
    } else if (this.state.page === 'usersList') {
      this.setState({page: 'createUser'})
    } 
  }
  
  changeToDetailPage = () => {
    this.setState({page: 'usersDetail'})
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'createUser':
        return <CreateUserPage/>
      case 'usersList':
        return <UsersListPage/>
      // case 'usersDetail':
      //   return <UsersDetail/>
      default:
        return<div></div>
    }
  }

  render () {  
    return (
      <div>
        <button onClick={this.changePage}>Trocar Página</button>
        {this.renderPage()}
      </div>
      )    
  }
  
};
