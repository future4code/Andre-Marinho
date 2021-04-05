import React from 'react';
import CreatePlaylistPage from './pages/CreatePlaylistPage';
import PlaylistPage from './pages/PlaylistsPage';

export default class App extends React.Component {
  state = {
    page:'createPlaylist',
    buttonName: 'Ver Playlists'
  }

  changePage = () => {
    if (this.state.page === 'createPlaylist') {
      this.setState({page: 'playlistsPage', buttonName:'Voltar para Home'}) 
    } else if (this.state.page === 'playlistsPage') {
      this.setState({page: 'createPlaylist', buttonName: 'Ver Playlists'})
    }
  } 

  renderPage = () => {
    switch (this.state.page) {
      case 'createPlaylist':
        return <CreatePlaylistPage/>
      case 'playlistsPage':
        return <PlaylistPage/>
      default:
        return <div></div>
    }
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.changePage}>{this.state.buttonName}</button>
        {this.renderPage()}
      </div>
    );
  }
}


