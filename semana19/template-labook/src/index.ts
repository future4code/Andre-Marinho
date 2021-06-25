import app from "./app"
import createPost from "./endpoints/posts/createPost"
import login from "./endpoints/users/login"
import signup from "./endpoints/users/signup"
import getPostById from "./endpoints/posts/getPostById"

app.post("/users/signup",signup) // cadastro
app.post("/users/login",login)  // login

app.post("/post/create",createPost) // criar post
app.get("/post/:id",getPostById) // pegar post pelo id

