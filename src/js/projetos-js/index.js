const botaoMostrarMais = document.querySelector('.btn-mostrar-mais');
const botaoMostrarMenos = document.querySelector('.btn-mostrar-menos');
const projetos = document.querySelectorAll('.projeto');
let quantidadePorClique = 5;
let projetosMostrados = 0;

const mostrarMaisProjetos = () => {
    const projetosRestantes = Array.from(projetos).slice(projetosMostrados, projetosMostrados + quantidadePorClique);

    projetosRestantes.forEach(projeto => {
        projeto.classList.add('ativo');
    });

    projetosMostrados += projetosRestantes.length;

    if (projetosMostrados >= projetos.length) {
        botaoMostrarMais.classList.add('remover');
    }

    botaoMostrarMenos.classList.remove('remover');
};

const mostrarMenosProjetos = () => {
    const projetosParaEsconder = Array.from(projetos).slice(projetosMostrados - quantidadePorClique, projetosMostrados);

    projetosParaEsconder.forEach(projeto => {
        projeto.classList.remove('ativo');
    });

    projetosMostrados -= projetosParaEsconder.length;

    if (projetosMostrados <= 0) {
        projetosMostrados = 0;
    }

    if (projetosMostrados < projetos.length) {
        botaoMostrarMais.classList.remove('remover');
    }

    if (projetosMostrados <= quantidadePorClique) {
        botaoMostrarMenos.classList.add('remover');
    }
};

const inicializarProjetos = () => {
    const projetosIniciais = Array.from(projetos).slice(0, quantidadePorClique);

    projetosIniciais.forEach(projeto => {
        projeto.classList.add('ativo');
    });

    projetosMostrados = quantidadePorClique;

    if (projetosMostrados >= projetos.length) {
        botaoMostrarMais.classList.add('remover');
    }
};

botaoMostrarMais.addEventListener('click', mostrarMaisProjetos);
botaoMostrarMenos.addEventListener('click', mostrarMenosProjetos);

botaoMostrarMenos.classList.add('remover');

inicializarProjetos();
