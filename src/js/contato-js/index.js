document.querySelectorAll('.cartao').forEach(cartao => {
    const abas = cartao.querySelectorAll('.aba');
    const informacoes = cartao.querySelectorAll('.informacao');

    abas.forEach((aba, index) => {
        aba.addEventListener('click', () => {
            abas.forEach(aba => aba.classList.remove('selecionado'));
            informacoes.forEach(informacao => informacao.classList.remove('selecionado'));

            aba.classList.add('selecionado');
            informacoes[index].classList.add('selecionado');
        });
    });
});