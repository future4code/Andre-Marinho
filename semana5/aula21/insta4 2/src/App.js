import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'andre',
        fotoUsuario:'https://picsum.photos/25/25',
        fotoPost:'https://picsum.photos/201/150'
      },
      {
        nomeUsuario:'mariana',
        fotoUsuario:'https://picsum.photos/30/25',
        fotoPost:'https://picsum.photos/202/150'
      }
    ],
    valorInputNome:'',
    valorInputfotoUsu:'',
    valorInputfotoPost:''
  };
  
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputfotoUsu,
      fotoPost: this.state.valorInputfotoPost
    }
    const novosPosts = [...this.state.posts, novoPost]
    this.setState({posts: novosPosts})
  }

  onChangeNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeFotoU = (event) => {
    this.setState({ valorInputfotoUsu: event.target.value });
  };

  onChangeFotoP = (event) => {
    this.setState({ valorInputfotoPost: event.target.value });
  };

  render() {
    
    const listaPost = this.state.posts.map((post)=>{
      return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      );
    })
    
    
    
    return (
      <div className={'app-container'}> 
        {listaPost}
        <input
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder={"Nome"}
          />

          <input
            value={this.state.valorInputfotoUsu}
            onChange={this.onChangeFotoU}
            placeholder={"Link da sua foto de usuário"}
          />

          <input
            value={this.state.valorInputfotoPost}
            onChange={this.onChangeFotoP}
            placeholder={"Link da foto do post"}
          />

          <button onClick={this.adicionaPost}>Adicionar</button>
      </div>
    );
  }
}

export default App;
