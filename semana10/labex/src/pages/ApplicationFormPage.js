import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import useRequestGetData from '../hooks/useRequestGetData';
import { baseUrl } from '../parameters';
import { goToListTripsPage } from '../routes/coordinator';
import countryList from 'react-select-country-list'

const initialForm = {name:'', age:'', text:'', profession:'', country:'', trip:''}

const ApplicationFormPage = () => {
    const history = useHistory()
    const [form, onChange, resetForm] = useForm(initialForm)
    const trips = useRequestGetData(baseUrl+'/trips',[])

    const onSubmitForm = (event) => {
        event.preventDefault();

        const body = {
            name: form.name,
            age: form.age,
            date: form.date,
            applicationText: form.text,
            profession: form.profession,
            country: form.country,
        }

        axios.post(baseUrl+`/trips/${form.trip}/apply`, body)
        .then((res) => {
            resetForm()
            alert('Incrição feita com sucesso')
            resetForm()
        })
        .catch((err) => {
            console.log(err)
        })

    }

    return(
            <div>
                <h1>Inscrever-se para uma viagem</h1>
                <form onSubmit={onSubmitForm}>
                    <select required name='trip' value={form.trip} onChange={onChange} >
                        <option value=''>Escolha uma Viagem</option>
                        {trips.map(trip => {
                        return (
                        <option key={trip.name} value={trip.id}>
                            {trip.name}
                        </option>
                            );
                        })}
                    </select>
                    <input required name='name' placeholder='Nome' type='text' value={form.name} pattern='.{3,}' onChange={onChange}/>
                    <input required name='age' placeholder='Idade' type='number' value={form.age} min={18} onChange={onChange} />
                    <input required name='text' placeholder='Texto de Candidatura' type='text' value={form.text} pattern='.{30,}' onChange={onChange}/>
                    <input required name='profession' placeholder='Profissão' type='text' value={form.profession} pattern='.{10,}' onChange={onChange}/>
                    <select required name='country' value={form.country} onChange={onChange}>
                        <option value=''>Escolha seu país</option>
                        {countryList().data.map(country => {
                        return (
                        <option value={country.label}>
                            {country.label}
                        </option>
                            );
                        })}
                    </select>
                    <button>Inscrever</button>
                </form>
                <button onClick={() => goToListTripsPage(history)}>Voltar</button>
            </div>
    )
}

export default ApplicationFormPage;