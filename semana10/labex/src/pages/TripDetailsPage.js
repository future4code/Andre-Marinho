import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import useRequestGetData from '../hooks/useRequestGetData';
import { baseUrl } from '../parameters';
import { goToAdminHomePage } from '../routes/coordinator';

const TripDetailsPage = () => {
    useProtectedPage()
    const [trip, setTrip] = useState([])
    const history = useHistory()
    const idString = window.localStorage.getItem('id')
    const id = JSON.parse(idString)
    const token = window.localStorage.getItem('token')
    
    useEffect(() => {
        getTripDetail()
    },[])

    const getTripDetail = () => {
        axios.get(baseUrl+`/trip/${id}`,{
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const decideCandidate = (candidateId,decide) => {
        const body = {
            "approve": decide
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/andre-muniz-cruz/trips/${id}/candidates/${candidateId}/decide`,body,{
            headers: {
                auth: token
            }
        })
        .then((res) => {
            alert('Decisão Processada')
            getTripDetail()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const renderPage = () => {
        return( <div>
            <h1>{trip.name}</h1>
            <div>
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta:</b> {trip.planet}</p>
                <p><b>Duração:</b> {trip.durationInDays}</p>
                <p><b>Data:</b> {trip.date}</p>
                <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                <div>
                <hr/>
                    <h3>Candidatos Pendentes</h3>
                    {trip.candidates && trip.candidates.map((candidate) => {
                                                        return (<div>                                                   
                                                                    <p><b>Nome:</b> {candidate.name}</p>
                                                                    <p><b>Profissão:</b> {candidate.profession}</p>
                                                                    <p><b>Idade:</b> {candidate.age}</p>
                                                                    <p><b>País:</b> {candidate.country}</p>
                                                                    <p><b>Texto de Candidatura:</b> {candidate.applicationText}</p>
                                                                    <button onClick={()=> decideCandidate(candidate.id,true)}>Aprovar</button>
                                                                    <button onClick={()=> decideCandidate(candidate.id,false)}>Reprovar</button>
                                                                    <hr/>
                                                                </div>) })}            
                    <h3>Candidatos Aprovados</h3>
                    {trip.approved && trip.approved.map((approved)=> {return (<p>{approved.name}</p>)})}
                </div>
            </div>
        </div> 
        )
    }    

    return( <div>{renderPage()}</div> )
}

export default TripDetailsPage;