// Classe POST
class Posts { 
    constructor(authorPost, postTitle, postText, postDate) {
        this.authorPost = authorPost
        this.postTitle = postTitle
        this.postDate = postDate
        this.postText = postText
        this.comments = []
        
    }
}

let dbPosts = []

// Variáveis de Post
const authorPost, postTitle, postDate, postText

authorPost = document.getElementById('input-author').value

postTitle = document.getElementById('input-title').value

postDate = new Date()

postText = document.getElementById('input-text').value

// Função para salvar postsDatabase em localStorage

function savePostsToLocalStorage() {

    const postsJSON = JSON.stringify(dbPosts);
    localStorage.setItem('dbPosts', postsJSON);

}

// Função para carregar dbPosts de localStorage
function loadPostsFromLocalStorage() {
    const postsJSON = localStorage.getItem('dbPosts');
    if (postsJSON) {
        const postsArray = JSON.parse(postsJSON);
        dbPosts
    }
}





// Classe Comentário

class Comment {
    constructor(authorComment, textComment, commentDate, post){
        this.authorComment = authorComment
        this.textComment = textComment
        this.commentDate = commentDate
        this.post = post
    }
}

let dbComment = []

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

    const newPost = new Posts(authorPost, postTitle, postText, postDate)

    dbPosts.push(newPost)
    savePostsToLocalStorage()


}

// Fazer o append do novo post

function appendPost() {

    const conteinerPost = document.createElement('div');
    conteinerPost.className = 'conteiner-post';

    const sectionPost = document.getElementById('section-post');
    sectionPost.appendChild(conteinerPost);

    const divTitlePost = document.createElement('h1');
    divTitlePost.className = 'post-title'
    conteinerPost.appendChild(divTitlePost)
    divTitlePost.textContent = postTitle

    const divAuthorPost = document.createElement('h2');
    divAuthorPost.className = 'post-author'
    conteinerPost.appendChild(divAuthorPost)
    divAuthorPost.textContent = authorPost

    const divDatePost = document.createElement('p');
    divDatePost.className = 'post-date'
    conteinerPost.appendChild(divDatePost)
    divDatePost.textContent = postDate

    const divTextPost = document.createElement('p');
    divTextPost.className = 'post-text'
    conteinerPost.appendChild(divTextPost)
    divTextPost.textContent = postText

   
}



// Adicionar Comentário botão 
const btnComment = document.addEventListener('click', addComment)

function addComent() {
    const newComment = new Comment(authorComment, textComment, commentDate, newPost)

    dbComment.push(newComment)
    saveCommentToLocalStorage()

}

// Função de salvar comentário no local storage

function saveCommentToLocalStorage() {

    const commentJSON = JSON.stringify(dbComment);
    localStorage.setItem('dbComment', commentJSON);
    
} 
    // Função para carregar dbcomment

function loadCommentFromLocalStorage() {
    const commentJSON = localStorage.getItem('dbComment');
    if (commentJSON) {
        const commentArray = JSON.parse(commentJSON);
        dbComment
    }
}













// adiciona comentário ao atributo comentário da classe post e faz um append a div do post


// Função de Dados do autor