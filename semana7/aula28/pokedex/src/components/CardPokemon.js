import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl, axiosConfig } from '../parameters';

const PokeSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const P = styled.p`
    margin:5px;
`
const PokeCaract = styled.div`
    /* display: flex;
    align-items: flex-start;  */
`
const PokeImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Div2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PokeName = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
`
const PokeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* border: solid 1px; */
    height: 280px;
    width: 280px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding : 8px;
    background : white;
    cursor: pointer;
    margin-top: 20px;
`

export default class CardPokemon extends React.Component {
    state = {
        pokemons:[],
        picture:'',
        id:'',
        height:'',
        type:'',
        weight:'',
        name:''
    }

    componentDidMount() {
        this.getAllPokemons()
    }

    getAllPokemons = async() => {
        try {
            const response = await axios.get(baseUrl+'pokemon?limit=150&offset=0')
            this.setState({pokemons: response.data.results})
            console.log(response.data.results)
        } catch(e) {
            console.log(e)
        }
    }
    
    getPokemon = async (event) => {
        try {           
            const url = event.target.value
            const response = await axios.get(`${url}`)
            this.setState({picture: response.data.sprites.front_default})
            this.setState({id: response.data.id})
            this.setState({height: response.data.height})
            this.setState({type: response.data.types[0].type.name})
            this.setState({weight: response.data.weight})
            this.setState({name: response.data.name})
        } catch(e) {
            console.log(e)
        }
    };

    render() {
        const pokeList = this.state.pokemons.map((poke) => {
             return <option key={poke.name} value={poke.url}>{poke.name}</option>

        })
        return(
        <div>
            <PokeSelect>
                <select onChange={this.getPokemon}>
                    <option>Choose a pokemon</option>
                    {pokeList}
                </select>
            </PokeSelect>
            {this.state.picture && (
                 <Div2>
                    <PokeDiv>
                        <PokeName>{this.state.name}</PokeName>
                        <PokeImg>
                            <img src={this.state.picture} alt={"pokemon's picture"}/>
                        </PokeImg>                    
                        <PokeCaract>
                            <P>
                                    <strong>Height:</strong> {this.state.height *10} cm     
                            </P>
                            <P>
                                    <strong>Weight:</strong> {this.state.weight /10} kg                              
                            </P>                        
                            <P>
                                <strong>Type:</strong> {this.state.type}
                            </P>
                            <P>

                                <strong>Number:</strong> {this.state.id}
                            </P>
                        </PokeCaract>
                    </PokeDiv>
                 </Div2>                
            )}
        </div>)
    }
}