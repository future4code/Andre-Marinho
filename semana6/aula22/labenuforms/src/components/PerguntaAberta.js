import React from 'react';


export default class PerguntaAberta extends React.Component {
    render () {
        return <div className="App">
                    <p>{this.props.pergunta}</p>
                    <input></input>
                </div>
    }
} 