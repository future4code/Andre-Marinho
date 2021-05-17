import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../parameters';
import Matches from '../Matches/Matches';
import ImageBox from '../ImageBox/ImageBox';
import styled from 'styled-components';
import { Button, Stack } from "@chakra-ui/react";


const DivHeader = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
    background-image: linear-gradient(to top, rgba(148, 0, 211, 1.0), transparent);
`

const DivCard = styled.div`
    width:400px;
    height:400px;
    position:fixed;
    top: 5%;
    left: 36%;
    background-color: white;
`

const Card = () => {
    const [profile, setProfile] = useState({})
    const [id, setId] = useState('')
    const [isMatch, setIsMatch] = useState('')
    const [page, setPage] = useState('page-card') 
    
    useEffect(()=> {
        getProfileToChoose()
    },[])
    
    const getProfileToChoose = () => {
        // Get Profile to Choose
        axios
        .get(baseUrl+'person')
        .then(response => {
            setProfile(response.data.profile)
            setId(response.data.profile.id)
            console.log(response.data.profile.id)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const choosePerson = () => {
        const body={id: id,
            choice: true}
        axios
        .post(baseUrl+'choose-person',body)
        .then(response => { 
            setIsMatch(response.data.isMatch)
            getProfileToChoose()                               
        })
        .catch(err => {
            console.log(err)
        })
    }

    const changePage = () => {
        if (page === 'page-card') {
          setPage('page-matches')
        } else {
          setPage('page-card')
        }
      }
    
      const buttonPage = () => {
        if (page === 'page-card') {
          changePage()
        } 
        else {
          changePage()
        }
      }

    const renderPage = () => {
        switch (page) {
           case 'page-card':
             return (
                    <div>                        
                       <DivCard>
                            <ImageBox image={profile.photo} name={profile.name} 
                            age={profile.age} bio={profile.bio} buttonPage={buttonPage} 
                            choosePerson={choosePerson} getProfileToChoose={getProfileToChoose} clear={clear}/>
                       </DivCard>                   
                    </div>)
           case 'page-matches':
             return <Matches buttonPage={buttonPage}/>
           default:
             <div></div>   
        }
      }
      
    
    
      const clear = () => {
        axios
        .put(baseUrl+'clear')
        .then(response => {
          console.log(response)
          alert('Matches limpos com sucesso')
        })
        .catch(err => {
          console.log(err)
        })
      }

    return (
            <div>
                {renderPage()}                                       
            </div> 
            )
}

export default Card;