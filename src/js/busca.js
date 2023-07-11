let palavraBusca;


function busca(value) {
    palavraBusca = value;
}

const buscaInput = document.getElementById('busca');
buscaInput.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        let query = new URLSearchParams();
        query.append("palavraBusca", palavraBusca);
        location.href = window.location.href.includes('src/html') ? "../pesquisa.html?" + query.toString() : "../src/pesquisa.html?" + query.toString();

    }
});