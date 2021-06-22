import express, { Request, Response } from 'express'
import cors from 'cors'

type UserAccount = {
  name: string,
  cpf: string,
  dateOfBirth: string,
  balance: number,
  extract: Transactions[]
}

type Transactions = {
  value: number,
  date: string,
  description: string
}

// Mock simulando um array de usuários no Banco de Dados
let users: UserAccount[] = [
  {
      name: "Alice",
      cpf: '000.000.000-00',
      dateOfBirth: "12/08/1995",
      balance: 2600,
      extract: []
  },
  {
      name: "Bob",
      cpf: '000.000.000-01',
      dateOfBirth: "12/04/1992",
      balance: 600,
      extract: []
  },
  {
      name: "Coragem",
      cpf: '000.000.000-02',
      dateOfBirth: "18/09/1994",
      balance: 200,
      extract: []
  }
]

const app = express()
app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
  try {
    res
    .status(200)
    .send(users)
    
  } catch (err) {
    res.status(400).send({
    message: err.message
    })
  }
})

app.post('/users/create', (req: Request, res: Response) => {
  try {

    const name = req.body.name
    const cpf = req.body.cpf
    const dateOfBirth = req.body.dateOfBirth
    const balance = req.body.balance
    let extract : Transactions[] = []

    const newUserAccount = {
      name,
      cpf,
      dateOfBirth,
      balance,
      extract
    }

    users.push(newUserAccount)

    
    res.status(200).send({
      message: 'ok',
      user: newUserAccount
    })
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
