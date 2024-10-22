const botaoMostrarMais = document.querySelector('.btn-mostrar-mais');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(projetosInativos);


botaoMostrarMais.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
});