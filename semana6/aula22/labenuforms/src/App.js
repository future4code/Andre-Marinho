import './App.css';
import React from 'react';
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'
import Pagina3 from './components/Pagina3'
import Pagina4 from './components/Pagina4'
import PerguntaAberta from './components/PerguntaAberta'

export default class App extends React.Component {
  state = {
    etapa: 1
  };

  irParaProximaEtapa = () => {
    const novoValor = this.state.etapa + 1
    this.setState({ etapa: novoValor})
  }

  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Pagina1/>
      case 2:
        return <Pagina2/>
      case 3:
        return <Pagina3/>
      case 4:
        return<Pagina4/>
    }
  }

  render () {
    const renderizaTela = () => {
      if (this.state.etapa !== 4) {
        return (
          <div className="App">
            {this.renderizaEtapa()}
            <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>      
          </div>
        )
      } else {
        return(
        <div className="App">
            {this.renderizaEtapa()}      
        </div>
        )
      }
    }
    
    return (
      <div className="App">
        {renderizaTela()}      
      </div>
    );
  }
}


