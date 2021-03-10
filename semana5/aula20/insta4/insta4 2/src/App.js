import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'andre'}
          fotoUsuario={'https://picsum.photos/25/25'}
          fotoPost={'https://picsum.photos/201/150'}
        />

        <Post
          nomeUsuario={'mariana'}
          fotoUsuario={'https://picsum.photos/30/25'}
          fotoPost={'https://picsum.photos/202/150'}
        />
      </div>
    );
  }
}

export default App;
