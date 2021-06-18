import  {Request, Response} from "express"
import connection from "../../connection"
import { postTableName } from "../../types"

export default async function getPostById(
    req: Request,
    res: Response
): Promise<void> {
    try {
        let message = "Success!"
 
       const { id } = req.params
 
       const [post] = await connection(postTableName)
          .where({ id })
 
       if (!post) {
          res.statusCode = 404
          message = "Post not found"
          throw new Error(message)
       }
 
       res.status(200).send({ message, post })
    } catch (error) {
        let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
}
