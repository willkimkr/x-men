//const itemCiclope = document.getElementById('ciclope');//
//console.log(itemCiclope);//
const personagens = document.querySelectorAll('.personagem');
// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', ()=> {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behivior: 'smooth'});
        }

        // passo 3 - verificar se ja existe um pérsonagem selecionado , se sim, devemos remover a selecao dele 
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');


        // OABJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem , o nome e a descricao do personagem grande
        //
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informacoes nele

        const personagemPersonagemGrande = document.querySelector('.personagem-grande');


        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;

        personagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descricao do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    })
})
