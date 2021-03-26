import React from 'react';
import axios from 'axios';
import {baseUrl,axiosConfig} from '../parameters'

export default class CreatePlaylistPage extends React.Component {
    state = {
        name:''
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    createPlaylist = async () => {
        const body = {
            name: this.state.name
        }
        try {
            const response = await axios.post(baseUrl, body, axiosConfig)
            console.log(response)
            alert('Playlist criada com sucesso')
            this.setState({name:''})
        } catch(e) {
            alert('Ocorreu um erro, verifique o nome da playlist e tente novamente')
            console.log(e)
        }
    }

    render () {
        return (
            <div>
                <h3>Criar Playlist</h3>
                <input value={this.state.name} onChange={this.handleName}/>
                <button onClick={this.createPlaylist}>Enviar</button>
            </div>
        )
    }
}