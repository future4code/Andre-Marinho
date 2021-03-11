import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import andreImage from './images/andre.jpg'
import ufpeLogo from './images/Logo_UFPE.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {andreImage}
          nome="André Muniz" 
          descricao="Oi, eu sou o André. Engenheiro eletricista e aspirante a dev. Apaixonado por tecnologia e matemática."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className = "page-section-container">
      <CardPequeno
        imagem = "https://www.flaticon.com/svg/vstatic/svg/725/725643.svg?token=exp=1615318352~hmac=3fea471c99f257baee2f29347271368a"
        titulo = {<b>E-mail</b>}
        descricao = {'andre@bol.com'}
      />
      <CardPequeno
        imagem = "https://www.flaticon.com/premium-icon/icons/svg/1009/1009850.svg"
        titulo = {<b>Endereço</b>}
        descricao = "Rua dos Bobos, número 0, Recife-PE"
      />

      <CardPequeno
        imagem = "https://www.flaticon.com/premium-icon/icons/svg/3059/3059502.svg"
        titulo = {<b>Telefone:</b>}
        descricao = "+55 00 00000-0000"
      />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de desenvolvimento web fullstack!" 
        />
        
        <CardGrande 
          imagem={ufpeLogo}
          nome="UFPE" 
          descricao="Engenharia Elétrica." 
        />

        <CardGrande 
          imagem={ufpeLogo}
          nome="Mestrado UFPE" 
          descricao="Mestrando em Otimização e IA no Laboratório Digital de Sistemas de Potência" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
