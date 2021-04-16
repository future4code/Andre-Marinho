import axios from 'axios';
import { useHistory } from 'react-router';
import { useForm } from '../hooks/useForm';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { baseUrl } from '../parameters';
import { goToAdminHomePage } from '../routes/coordinator';


const initialForm = {name:'', planet:'', date:'', description:'', duration:''}

const CreateTripPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [form, onChange, resetForm] = useForm(initialForm)

    const todaysDate = () => {
        let day = new Date().getDate()
        if (day < 10) {
            day = '0'+day
        }

        let month = (new Date().getMonth())
        let year = new Date().getFullYear()
        let today = (year+'-'+'0'+(month+1)+'-'+day).toString()

        return today
    }
    
    const onSubmitForm = (event) => {
        event.preventDefault();
        const token = window.localStorage.getItem('token')
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.duration
        }

        axios.post(baseUrl+'/trips', body,{
            headers: {
                auth: token,               
            }
        })
        .then((res) => {
            alert('Viagem criada com sucesso')
            resetForm()
        })
        .catch((err) => {
            console.log(err)
        })

    }
    

    return( <div>
                <h1>Criar Viagem</h1>
                <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
                <form onSubmit={onSubmitForm}>
                    <input required name='name' value={form.name} pattern='.{5,}' placeholder='Nome' type='text' onChange={onChange}/>
                    <select required name='planet' value={form.planet} onChange={onChange} >
                        <option value=''>Escolha um Planeta</option>
                        <option type='text' value={'Mercúrio'}>Mercúrio</option>
                        <option type='text' value={'Vênus'}>Vênus</option>
                        <option type='text' value={'Terra'}>Terra</option>
                        <option type='text' value={'Marte'}>Marte</option>
                        <option type='text' value={'Júpiter'}>Júpiter</option>
                        <option type='text' value={'Saturno'}>Saturno</option>
                        <option type='text' value={'Urano'}>Urano</option>
                        <option type='text' value={'Netuno'}>Netuno</option>
                        <option type='text' value={'Plutão'}>Plutão</option>
                    </select>
                    <input required name='date' placeholder='Data' type='date' value={form.date} onChange={onChange} min={todaysDate()}/>
                    <input required name='description' pattern='.{30,}' placeholder='Descrição' type='text' value={form.description} onChange={onChange}/>
                    <input required name='duration' pattern='^([5-9]\d|[1-9]\d{2,})$' placeholder='Duração em dias' type='number' value={form.duration} onChange={onChange}/>
                    <button>Criar</button>
                </form>
            </div>
            
            )
}

export default CreateTripPage;
