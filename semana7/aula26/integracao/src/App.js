import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivPost = styled.div`
  display:flex;
  justify-content:center;
`
const DivUsuarios = styled.div`
  display:flex;
  justify-content:center;
  
`
export default class App extends React.Component {
  state = {
    users:[],
    inputNome: '',
    inputEmail: '',
    change: true
  };

  componentDidMount() {
    this.getAllUsers()
  }

  handleInputNomeChange = (event) => {
    this.setState({inputNome: event.target.value})
  }

  handleInputEmailChange = (event) => {
    this.setState({inputEmail: event.target.value})
  }
  
  getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    {
      headers: {
        Authorization: "andre-muniz-cruz"
      }
    }).then((res) => {
      this.setState({users: res.data})
    }).catch((err) => {
      console.log(err.responde.data)
    })
  }

  changePage = () => {
    this.setState({change: !this.state.change})
  }

  createUser = () => {
    const body =  {
      "name":this.state.inputNome,
      "email":this.state.inputEmail
    }
    axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "andre-muniz-cruz"
        }
      }
    ).then((res) => {
      console.log(res.data);
      this.getAllUsers()
      this.setState({inputNome:'',inputEmail:''})
    }).catch((err) => {
      console.log(err.response.data)
    })
  }
  
  deleteUser = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "andre-muniz-cruz"
        }
      }
    ).then((res => {
      console.log(res.data);
      this.getAllUsers()
    })).catch((err)=> {
      console.log(err.response.data);
    })
  }

  render () {
    const usersList = this.state.users.map((user) => <li key={user.id}>{user.name}&nbsp;<span onClick={() => this.deleteUser(user.id)}>&nbsp;X</span></li>)

    if (this.state.change === true) {
      return (
      <div>
        <button onClick={() => this.changePage()}>Ir para página de lista</button>
        <div>
          <DivPost>
            <div>
              <label>Nome:</label>
              <input value={this.state.inputNome} onChange={this.handleInputNomeChange}/>
            </div>
            <div>
              <label>E-mail:</label>
              <input value={this.state.inputEmail} onChange={this.handleInputEmailChange}/>
            </div>
            <button onClick={this.createUser}>Salvar</button>
          </DivPost>
        </div>
      </div>)    
    } else {
      return (
      <div>
        <button onClick={() => this.changePage()}>Ir para página de registo</button>
        <h2>Usuários Cadastrados</h2>
        <DivUsuarios>
            <ul>{usersList}</ul>
        </DivUsuarios>
      </div>

      )
    } 
  }
  
};
