import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSalvarPreto from '../../img/bookmark.svg'
import iconeSalvarBranco from '../../img/bookmark_border.svg'
import iconeCompartilhar from '../../img/send.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilho: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if (this.state.curtido === false) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else 
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
    })
  }

  onClickComentario = () => {
    console.log(this.state.comentando)
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvar = () => {
    if (this.state.salvo === false) {
      this.setState({
        salvo: true
      })
    } else {
      this.setState({
        salvo: false
      })
    }  
  }

  onClickCompartilhar = () => {
      this.setState({
        compartilho: !this.state.compartilho
      })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvar

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilho

    if(this.state.compartilho) {
      componenteCompartilho = <SecaoCompartilhar/>
    }

    return <div> 

      <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </div>
      {componenteComentario}
      {componenteCompartilho}
    </div>

    

    </div>
  }
}

export default Post