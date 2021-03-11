// post = {
//     titulo: [],
//     autor: [],
//     conteudo: [] 
// }
let arrayObjetoPosts = []

function adiciona() {
    const containerDePosts = document.getElementById("container-de-posts")
    const tituloPost = document.getElementById("titulo-post")
    const autorPost = document.getElementById("autor-post")
    const conteudoPost = document.getElementById("conteudo-post")
    // let arrayObjetoPosts = []

    post = {
        titulo: "",
        autor: "",
        conteudo: "" 
    }

    post.titulo = tituloPost.value
    post.autor = autorPost.value
    post.conteudo = conteudoPost.value
    
    arrayObjetoPosts.push(post)

    containerDePosts.innerHTML += `<p> Título: ${tituloPost.value}</p>`
    containerDePosts.innerHTML += `<p> Autor: ${autorPost.value}</p>`
    containerDePosts.innerHTML += `<p> Conteúdo: ${conteudoPost.value}</p>` 
    tituloPost.value = ""
    autorPost.value = ""
    conteudoPost.value = ""
}




