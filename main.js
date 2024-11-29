document.addEventListener('DOMContentLoaded', function(){
    const avatarGit = document.querySelector('#avatar');
    const nomeGit = document.querySelector('#nome');
    const usernameGit = document.querySelector('#username');
    const repositorioGit = document.querySelector('#repositorio');
    const seguidoresGit = document.querySelector('#seguidores');
    const seguindoGit = document.querySelector('#seguindo');
    const linkGit = document.querySelector('#link');

    fetch('https://api.github.com/users/Ceb0lo').then(function(res){
        return res.json();
    })
    .then(function(json){
        avatarGit.src = json.avatar_url;
        nomeGit.innerText = json.name;
        usernameGit.innerText = json.login;
        repositorioGit.innerText = json.public_repos;
        seguidoresGit.innerText = json.following;
        seguindoGit.innerText = json.followers;
        linkGit.href = json.html_url;
    })
    .catch(function(erro){
        alert('Desculpe, ocorreu um erro na conexão, tente voltar mais tarde ')
    })

})