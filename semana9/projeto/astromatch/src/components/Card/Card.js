import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../parameters';

const Card = () => {
    const [profile, setProfile] = useState({})
    const [id, setId] = useState('')
    const [isMatch, setIsMatch] = useState('') 
    
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
            // setIsMatch(response.data)                     
            console.log(response.data.isMatch)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
            <div>
                <button onClick={choosePerson}>Match</button>
                <button>X</button>
                <p>{profile.name}</p>
                <p>{profile.bio}</p>
                <img width='300' height='400' src={profile.photo}/>               
            </div> 
            )
}

export default Card;