import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { baseUrl } from '../parameters';
import { goToLoginPage, goToTripDetailsPage } from '../routes/coordinator';

const AdminHomePage = () => {
    useProtectedPage()

    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() => {
        allTrips()
    },[])    

    const allTrips = () => {
        axios.get(baseUrl+'/trips')
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    const getTripDetail = (id) => {
        const token = window.localStorage.getItem('token')
         
        axios.get(baseUrl+`/trip/${id}`,{
            headers: {
                auth: token
            }
        })
        .then((res) => {
            const trip = window.localStorage.setItem('trip', JSON.stringify(res.data.trip))
            console.log(res.data.trip)
            goToTripDetailsPage(history)
            
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        goToLoginPage(history)
    }

    const deleteTrip = (id) => {
        const token = window.localStorage.getItem('token')
        
        axios.delete(baseUrl+`/trips/${id}`, {
            headers: {
                auth:token
            }
        })
        .then((res)=> {
            console.log(res)
            allTrips()
        })
        .catch((err) => {
            console.log(err)
        })
        
    }
    
    return( <>
                <h1>Página do Admin</h1>
                <button>Voltar</button>
                <button>Criar Viagem</button>
                <button onClick={logout}>Logout</button>
                {trips.map((trip) => {
                    return (<div>
                                <p onClick={() => {getTripDetail(trip.id)}}>{trip.name}</p>
                                <button onClick={() => deleteTrip(trip.id)}>Delete</button>
                                <hr/>
                            </div>)
                })}
            </>
            )
}

export default AdminHomePage;