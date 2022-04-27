/*
Montar a Vitrine de produtos consumindo as informações dos produtos em json atraves desse Link com uso de jQuery, React.js, Vue.js, ou Angular.

API/Endpoint/Web Service (local com dados disponíveis para leitura)
https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json */


/* fetch -> ler dados de uma API em JSON */

let url = `https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json`;

fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
    });

