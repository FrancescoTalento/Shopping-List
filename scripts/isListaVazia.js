


export function verificaListaVazia(lista_deItens){
    let mensagemDeListaVazia = document.querySelector(".mensagem-lista-vazia")
    let quantidadeDeCompras = lista_deItens.children
    if(quantidadeDeCompras.length === 0){
        mensagemDeListaVazia.style.display = "block"
    }else{
        mensagemDeListaVazia.style.display = "none"
    }
}