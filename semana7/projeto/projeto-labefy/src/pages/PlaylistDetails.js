import axios from 'axios';
import React from 'react';
import { axiosConfig, baseUrl } from '../parameters';

export default class PlaylistDetails extends React.Component {
    state = {
        name:'',
        tracks:[],
        trackName:'',
        trackArtist:'',
        trackUrl:''
    }

    componentDidMount () {
        this.getTracks()
    }

    searchPlaylist = async() => {
        try {
            const response = await axios.get(baseUrl,axiosConfig)
            // console.log(response.data.result.list)
            this.setState({playlists: response.data.result.list })
        } catch(e) {
            console.log(e)
        }
    }

    getTracks = async() => {
        try {
            const response = await axios.get(`${baseUrl}/${this.props.id}/tracks`,axiosConfig)
            console.log(response.data.result.tracks)
            this.setState({tracks: response.data.result.tracks})
            console.log(this.state.tracks)
        } catch(e) {
            console.log(e)
        }
    }

    handleTrackName = (e) => {
        this.setState({trackName: e.target.value})
    }

    handleTrackArtist = (e) => {
        this.setState({trackArtist: e.target.value})
    }

    handleTrackUrl = (e) => {
        this.setState({trackUrl: e.target.value})
    }

    addTrack = async () => {
        const body = {
            name: this.state.trackName,
            artist: this.state.trackArtist,
            url: this.state.trackUrl
        }
        try {
            const response = await axios.post(`${baseUrl}/${this.props.id}/tracks`, body, axiosConfig)
            console.log(response)
            alert('Música adicionada a playlist com sucesso')
            this.setState({trackName:'', trackArtist:'', trackUrl:''})
            this.getTracks()
        } catch(e) {
            alert('Ocorreu um erro, verifique o nome da playlist e tente novamente')
            console.log(e)
        }
    }
    
    render () {
        const tracks = this.state.tracks.map((track) => {
            return(
                <div>                    
                    <p>{track.name}</p>
                    <audio controls src={track.url} type="audio/mpeg"/>          
                </div>
            )
        })
        return(
        <div>
            
            <h2>Detalhes</h2>
            <h3>{this.props.playlistName}</h3>
            <input
                    placeholder={'Music'}
                    value={this.state.trackName}
                    onChange={this.handleTrackName}
                    />

                    <input
                    placeholder={'Artist'}
                    value={this.state.trackArtist}
                    onChange={this.handleTrackArtist} 
                    />
                    
                    <input 
                    placeholder={'URL'}
                    value={this.state.trackUrl}
                    onChange={this.handleTrackUrl}
                    />
                    <button onClick={this.addTrack}>Adicionar</button>
            {tracks}
        </div>
        )
    }
}