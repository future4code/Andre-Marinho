import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { baseUrl } from '../parameters';
import { goToAdminHomePage } from '../routes/coordinator';

const TripDetailsPage = () => {
    useProtectedPage()

    const history = useHistory()
    
    const tripString = window.localStorage.getItem('trip')
    const trip = JSON.parse(tripString)

    const decideCandidate = (tripId,candidateId) => {
        const token = window.localStorage.getItem('token')

        axios.put(baseUrl+`/trips/${tripId}/candidates/${candidateId}`,{
            headers: {
                auth:token
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return( <div>
                <h1>Trip Details Page</h1>
                <div>
                    <h3>{trip.name}</h3>
                    <p>{trip.description}</p>
                    <p>{trip.planet}</p>
                    <p>{trip.durationInDays}</p>
                    <p>{trip.date}</p>
                    <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                    <div>
                        <h3>Candidatos Pendentes</h3>
                        {trip.candidates.map((candidate) => {
                            return (<div>
                                        
                                        <hr/>
                                        <p><b>Nome:</b> {candidate.name}</p>
                                        <p><b>Profissão:</b> {candidate.profession}</p>
                                        <p><b>Idade:</b> {candidate.age}</p>
                                        <p><b>País:</b> {candidate.country}</p>
                                        <p><b>Texto de Candidatura:</b> {candidate.applicationText}</p>
                                        <button onClick={()=> decideCandidate(trip.id,candidate.id)}>Aprovar</button>
                                        <button>Reprovar</button>
                                        <hr/>
                                    </div>
                                    )
                        })}
                        <h3>Candidatos Aprovados</h3>
                        {trip.approved.map((approved)=> {
                            <p>{approved.name}</p>
                        })}
                    </div>
                </div>

            </div>
            )
}

export default TripDetailsPage;