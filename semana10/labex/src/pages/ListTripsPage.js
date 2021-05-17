import React from 'react';
import { useHistory } from 'react-router';
import useRequestGetData from '../hooks/useRequestGetData';
import { baseUrl } from '../parameters';
import {goToApplicationFormPage, goToHomePage} from '../routes/coordinator'

const ListTripsPage = () => {
    const history = useHistory()

    const trips = useRequestGetData(baseUrl+'/trips',[])  

    return(
            <div>
                <h1>Lista de Viagens</h1>
                <button onClick={() => goToApplicationFormPage(history)}>Increver-se</button>
                <button onClick={() => goToHomePage(history)}>Voltar</button>
                {trips.map((trip) => {
                    return (<div>
                                <h3>{trip.name}</h3>
                                <p><b>Descrição:</b> {trip.description}</p>
                                <p><b>Planeta:</b> {trip.planet}</p>
                                <p><b>Duração:</b> {trip.durationInDays}</p>
                                <p><b>Data:</b> {trip.date}</p>
                                <hr/>
                            </div>)
                })}
            </div>
            )
}

export default ListTripsPage;