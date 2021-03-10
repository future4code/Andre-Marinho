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
        facebook: false
    }

    onClickInsta = () => {
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
            }

    render() {
		return <div className={'share-container'}>
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
	}
}