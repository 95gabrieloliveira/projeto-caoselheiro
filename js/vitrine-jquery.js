let url = `produtos.json`;
const conteudo = $('#conteudo');

$.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    success: function(resposta){
        console.log(resposta);

        /* loop para cada produto */
        $.each(resposta.products, function(indice, produto){
            console.log(produto.productName);
            console.log(produto.descriptionShort);
            // console.log(produto.photo); // erro, fora do ar

            // 1) criar um elemento
            let artigo = $("<article>"); 

            // 2) montar o conteúdo
            artigo.html(`
                <h3>${produto.productName}</h3>
                <p>${produto.descriptionShort}</p>
                <img src="https://picsum.photos/400/200?random=1" alt="">
            `);

            // 3) colocar no DOM
            conteudo.append(artigo);
        })
    }
});

