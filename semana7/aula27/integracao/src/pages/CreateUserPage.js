import React from 'react';
import styled from 'styled-components';
import { baseUrl, axiosConfig } from '../parameters';
import axios from 'axios';

const DivPost = styled.div`
  display:flex;
  justify-content:center;
`

export default class CreateUserPage extends React.Component {
    state = {
        inputNome: '',
        inputEmail: '',
      };
    
      handleInputNomeChange = (event) => {
        this.setState({inputNome: event.target.value})
      }
    
      handleInputEmailChange = (event) => {
        this.setState({inputEmail: event.target.value})
      }

      createUser = async () => {
        const body =  {
          "name":this.state.inputNome,
          "email":this.state.inputEmail
        }
        try {
          const response = await axios.post(baseUrl, body, axiosConfig)
          console.log(response.data);
          alert('Usuário criado com sucesso')          
          this.setState({inputNome:'',inputEmail:''})
        //   this.getAllUsers()
        } catch(err) {
          console.log(err)
          alert('Error')
        }
      }

    render() {

        return(<div>
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

    }




}