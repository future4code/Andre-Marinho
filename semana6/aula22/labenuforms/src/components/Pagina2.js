import React from 'react';
import PerguntaAberta from './PerguntaAberta';

export default class Pagina2 extends React.Component {
  state = {
    pagina1: true
  };

  mudaPagina = () => {
    this.setState({pagina1: false});
  }

  render () {
    return (
      <div className="App">
        <div>
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
          <PerguntaAberta pergunta={'5. Qual curso?'}/>
          <PerguntaAberta pergunta={'6. Qual unidade de ensino?'}/>
        </div>        
      </div>
    );
  }
}
