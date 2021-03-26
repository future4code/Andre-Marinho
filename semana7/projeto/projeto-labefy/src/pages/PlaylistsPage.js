import axios from 'axios';
import React from 'react';
import { axiosConfig, baseUrl } from '../parameters';
import PlaylistDetails from './PlaylistDetails';

export default class PlaylistPage extends React.Component {
    state = {
        playlists:[],
        page:'playlistsPage',
        tituloName:'Lista Playlists',
        id:'',
        playlistName:''
    }

    componentDidMount () {
        this.getAllPlaylists()
    }

    getAllPlaylists = async() => {
        try {
            const response = await axios.get(baseUrl,axiosConfig)
            console.log(response.data.result.list)
            this.setState({playlists: response.data.result.list })
        } catch(e) {
            console.log(e)
        }
    }

    deletePlaylist = async(id) => {
        try {
            const response = await axios.delete(`${baseUrl}/${id}`,axiosConfig)
            console.log(response)
            this.getAllPlaylists()
        } catch (e) {
            console.log(e)
        }
    }

    changePageToDetail = (id,playlistName) => {
        this.setState({page: 'playlistDetail', tituloName:''}) 
        this.setState({id: id})
        console.log(id)
        this.setState({playlistName: playlistName})
    }
      
      
    render () {
        const play = this.state.playlists.map((pl) => {
            return (
                <div key={pl.id}>                    
                    <p>{pl.name}</p>
                    <button onClick={()=> this.deletePlaylist(pl.id)}>Deletar</button>
                    <button onClick={()=> this.changePageToDetail(pl.id, pl.name)}>Detalhes</button>
                </div>
            )
        })

        const renderPage = () => {
            switch (this.state.page) {
                case 'playlistDetail':
                    return <PlaylistDetails id={this.state.id} playlistName={this.state.playlistName}/>
                case 'playlistsPage':
                    return play                                                
               default:
                 return (<div>erro</div>)
            }
          }

        return (
            <div>
                <h2>{this.state.tituloName}</h2>                
                {renderPage()}
            </div>
        )
    }
}
