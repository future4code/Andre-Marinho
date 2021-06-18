import { sign, verify } from "jsonwebtoken";
import {config} from 'dotenv';
import { authenticationData } from "../types";

config()

const {JWT_KEY, JWT_EXPIRES_IN} = process.env

export const generateToken = (
    payload: authenticationData
 ): string => sign(
     payload,
     JWT_KEY!,
     {
        expiresIn: JWT_EXPIRES_IN
     }
)

export const getTokenData = (
    token: string
 ): authenticationData | null => {
    try {
        const {id} = verify(token, JWT_KEY!) as authenticationData
     
        return { id }
        
    } catch (error) {
        return null
    }

 }