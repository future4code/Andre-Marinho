import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl, axiosConfig } from '../parameters';

const DivUsuarios = styled.div`
  display:flex;
  justify-content:center;
  
`
export default class UsersListPage extends React.Component {
    state = {
        users:[]       
      };


    componentDidMount() {
        this.getAllUsers()
      }

    getAllUsers = async () => {
        try {
            const response = await axios.get(baseUrl, axiosConfig)
            this.setState({users: response.data})
        } catch(err) {
            console.log(err)
        }                  
      }

    deleteUser = (id) => {
        if (window.confirm("Deseja deletar o usuário selecionado?")) {
            axios.delete(`${baseUrl}/${id}`,axiosConfig)
            .then((res) => {
              console.log(res.data);
              this.getAllUsers()
            }).catch((err)=> {
              console.log(err.response.data);
            })
        }
      }  
    
    render() {
        const usersList = this.state.users.map((user) => {
            return(
            <li key={user.id}> <span>{user.name}&nbsp; </span>
                <span onClick={() => this.deleteUser(user.id)}>&nbsp;X</span>
            </li>)       
        })
    return(
    <div>
        <h2>Usuários Cadastrados</h2>
        <DivUsuarios>
            <ul>{usersList}</ul>
        </DivUsuarios>
    </div>
    )}
}