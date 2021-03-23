import React from 'react';
import PerguntaAberta from './PerguntaAberta';

export default class Pagina3 extends React.Component {
 

  render () {
    return (
      <div className="App">
        <div>
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
          <PerguntaAberta pergunta={'5. Porque você não terminou um curso de graduação?'}/>
          <div>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="valor1" selected>Nenhum</option>
                <option value="valor2">Curso técnico</option>
                <option value="valor3">Curso de inglês</option>            
              </select>
          </div>
        </div>
            
      </div>
    );
  }
}


