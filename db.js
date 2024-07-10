// Classe POST
class dbPosts { 
    constructor(authorPost, postTitle, postText, postDate) {
        this.authorPost = authorPost
        this.postTitle = postTitle
        this.postDate = postDate
        this.postText = postText
        this.comments = []
        
    }
}

// Variáveis de Post
const authorPost, postTitle, postDate, postText

authorPost = document.getElementById('input-author').value

postTitle = document.getElementById('input-title').value

postDate = new Date()

postText = document.getElementById('input-text').value


// Classe Comentário

class dbComment {
    constructor(authorComment, textComment, commentDate, post){
        this.authorComment = authorComment
        this.textComment = textComment
        this.commentDate = commentDate
        this.post = post
    }
}

// Variáveis de Comentários

const authorComment, textComment, commentDate

authorComment = document.getElementById('input-author-comment').value

textComment = document.getElementById('input-text-comment').value

commentDate = new Date()


// Classe autor recebe títulos de posts número de posts e número de comentários

class dbAuthor {
    constructor (authorName, qtPosts, qtComments){
        this.authorName = authorName
        this.posts = []
        this.qtPosts = qtPosts
        this.qtComments = qtComments
    }
}


// Função de toda vez que enviar post, adicionar mais um nos contadores de posts e comments do autor do post
//  if not exists autor, criar um autor novo




// Botão Adicionar Post, recebe função auxiliar de atualização de dados do autor

const btnAddPost = document.getElementById("btnAddPost")
btnAddPost.addEventListener("click", addPost)

function addPost(){
    const newPost = new dbPosts(authorPost, )
    


}

function appendPost() {



}



// Adicionar Comentário botão 
// adiciona comentário ao atributo comentário da classe post e faz um append a div do post


// Função de Dados do autor