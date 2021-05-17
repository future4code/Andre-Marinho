import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../parameters';
import MatchesBox from '../MatchesBox/MatchesBox';

const Matches = (props) => {
    const [matches,setMatches] = useState([])

    useEffect(() => {
        getMatches()
    },[])

    const getMatches = () => {
        axios
        .get(baseUrl+'matches')
        .then(response => {
            setMatches(response.data.matches)
            console.log(response.data.matches)
        })
        .catch(err => {
            console.log(err)
        })
    }
    
    const clear = () => {
        axios
        .put(baseUrl+'clear')
        .then(response => {
          console.log(response)
          alert('Matches limpos com sucesso')
          getMatches()
        })
        .catch(err => {
          console.log(err)
        })
      }
      
    

    return( 
            <div>
                {/* <button onClick={clear}>Limpar Matches</button>
                {matches.map((match)=>{
                    return (
                        <div>
                            <p>{match.name}</p>
                            <img width='300' height='400' src={match.photo}/>
                        </div>
                    )
                })} */}

                <MatchesBox matches={matches} clear={clear} buttonPage={props.buttonPage}/>
            </div>)
}

export default Matches