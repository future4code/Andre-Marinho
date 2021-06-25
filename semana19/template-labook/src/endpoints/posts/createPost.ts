import {Request, Response} from "express"
import connection from "../../connection"
import { getTokenData } from "../../services/authenticator"
import generateId from "../../services/idGenerator"
import { authenticationData, postTableName } from "../../types"

export default async function createPost(
    req:Request,
    res:Response
): Promise<void> {
    try {
        let message = "Success!"
  
        const token: string = req.headers.authorization as string
        const { photo, description, type } = req.body
        
        const tokenData = getTokenData(token!)

        if (!tokenData) {
            res.statusCode = 401
            message = "Token unauthorized!"
            throw new Error(message)
        }

        if (!type || !description) {
            res.statusCode = 422
            message = "Description and type required!"
            throw new Error(message)
        }

        const id: string = generateId()
  
        await connection(postTableName)
           .insert({
              id,
              photo,
              description,
              type,
              author_id: tokenData!.id
           })
  
        res.status(201).send({ message })
  
     } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
  
        res.send({ message })
     }
}