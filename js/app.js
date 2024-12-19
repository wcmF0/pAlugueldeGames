function jogosAlugados() {console.log(`Quantidade de Jogos Alugados = ${quantidadeAlugado}`)

}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    
 if (imagem.classList.contains("dashboard__item__img--rented")) {
    if (confirm(`Você deseja devolver o jogo ${nomeJogo.textContent} ?`)) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        quantidadeAlugado--;
    }
 } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        quantidadeAlugado++;
 }

 

jogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    quantidadeAlugado = document.querySelectorAll('.dashboard__item__img--rented').length;
    jogosAlugados();
})