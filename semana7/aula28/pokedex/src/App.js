import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardPokemon from './components/CardPokemon'

const Title = styled.h1`
  display:flex;
  align-items: center;
  justify-content: center;
`

export default class App extends React.Component {
  render () {
    return (
    <div>
      <Title>Pokédex from Kanto Region</Title>
      <CardPokemon/>
    </div>)
  }
  
}


