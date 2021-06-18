import { Request, Response } from "express"
import connection from "../../connection"
import { generateToken } from "../../services/authenticator"
import { generateHash } from "../../services/hashManager"
import generateId from "../../services/idGenerator"
import { userTableName } from "../../types"


export default async function signup(
    req: Request, 
    res: Response
    ): Promise<void> {
    try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       if (!name || !email || !password) {
          res.statusCode = 406
          message = '"name", "email" and "password" must be provided'
          throw new Error(message)
       }
 
       const id: string = generateId()
       
       const cypherPassword: string = generateHash(password);
       
       const token: string = generateToken({ id })

       await connection(userTableName)
          .insert({
             id,
             name,
             email,
             password: cypherPassword
          })
 
        res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 }