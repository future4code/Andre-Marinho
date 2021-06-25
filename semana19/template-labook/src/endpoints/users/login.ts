import {Request, Response} from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { compareHash } from "../../services/hashManager";
import { user, userTableName } from "../../types";

export default async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {
         let message = "Success!"
 
         const { email, password } = req.body
 
         if (!email || !password) {
            res.statusCode = 406
            message = '"email" and "password" must be provided'
            throw new Error(message)
         }
 
         const [user] = await connection(userTableName)
          .where({ email })
 
          
         const passwordIsCorrect: boolean = compareHash(password, user.password)
          
         if (!user || !passwordIsCorrect) {
            res.statusCode = 401
            message = "Invalid credentials"
            throw new Error(message)
         }

         const token: string = generateToken({
            id: user.id
         })
 
         res.status(200).send({ message, token })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
 
        res.send({ message })
    }
}
