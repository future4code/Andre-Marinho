import React from 'react';


export default class PerguntaOpcoes extends React.Component {

    render () {
        const listaSelect = () => {
            this.props.opcoes.map ((opcao)=>{
                return({opcao})
            })
            
        }

        return <div className="App">
                    <p>{this.props.pergunta}</p>
                    <select>
                        <option>{listaSelect()}</option>
                    </select>
                    {/* <select>
                         <option selected>{this.props.opcoes[0]}</option>
                         <option>{this.props.opcoes[1]}</option>
                         <option>{this.props.opcoes[2]}</option>
                         <option>{this.props.opcoes[3]}</option>           
                    </select> */}
                </div>
    }
} 