let url = `https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json`;

/* $.ajax({
    url: url,
    method: "GET",
    dataType: "json"
}); */

$.get(url, function(resultado){
    $("#artigos").html(resultado);
})