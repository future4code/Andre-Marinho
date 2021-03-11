import React, {Component} from 'react'
import './SecaoCompartilhar.css'
import iconeInsta from '../../img/instagram.svg'
import iconeFaceBook from '../../img/facebook.svg'
import iconeTwitter from '../../img/twitter.svg'
import {IconeComContador} from '../IconeComContador/IconeComContador'

export class SecaoCompartilhar extends Component {
    state = {
        twitter: false,
        instagram: false,
        facebook: false,
        valor: ''
    }

    onComentario = (event) => {
        this.setState({
			valor: event.target.value
		})
    }

    onClickInsta = (event) => {
        if (this.state.instagram === false) {
            console.log("Post compartilhado no Instagram")
            this.setState({
              twitter: true
            })
          } else {
            this.setState({
              twitter: false
            })
          }
          console.log(this.state.valor)
          this.setState({
            valor: ''
          })
        }    

    onClickFacebook = () => {
        if (this.state.facebook === false) {
            console.log("Post compartilhado no Facebook")
            this.setState({
              facebook: true
            })
          } else {
            this.setState({
              facebook: false
            })
          }
          console.log(this.state.valor)
          this.setState({
            valor: ''
          })  
        }

        onClickTwitter = () => {
            if (this.state.facebook === false) {
                console.log("Post compartilhado no Twitter")
                this.setState({
                  twitter: true                  
                })
              } else {
                this.setState({
                  facebook: false
                })
              }
              console.log(this.state.valor)
              this.setState({
                valor: ''
              })  
            }

    render() {
		return <div> 
              <div className={'share-container'}>
                <IconeComContador
                    icone={iconeInsta}
                    onClickIcone={this.onClickInsta}
                />

                <IconeComContador
                    icone={iconeFaceBook}
                    onClickIcone={this.onClickFacebook}
                />

                <IconeComContador
                    icone={iconeTwitter}
                    onClickIcone={this.onClickTwitter}
                />

		          </div>
              <div className={'sharefor-container'}>
			          <input
				        className={'input-compartilhar'}
				        placeholder={'Faça um comentário ao compartilhar'}
				        value={this.state.valor}
				        onChange={this.onComentario}
			          />
		          </div>
            </div>
            
	}
}