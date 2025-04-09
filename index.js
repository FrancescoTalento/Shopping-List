import { addButao } from "./scripts/addCompra.js"
import { verificaListaVazia } from "./scripts/isListaVazia.js"
import { tarefasListJson, exibiItensLi } from "./scripts/localStorage.js";

// a lista de item em si
export let lista_deItens = document.querySelector("ul#lista-de-compras")

//butao de add e texto do item da lista
export let txt_addItem = document.querySelector("input.input-item")
let btn_addItem = document.querySelector("button.button-item")

// mostra os li que ja existem na localStorage
if (tarefasListJson.length > 0) {
    exibiItensLi();
    verificaListaVazia(lista_deItens);
}






btn_addItem.addEventListener("click",(event) =>{
    let lista_item = addButao(event)
    lista_deItens.appendChild(lista_item)
    
    verificaListaVazia(lista_deItens)
})
txt_addItem.addEventListener("keypress",(event) =>{
    let lista_item = addButao(event)
    lista_deItens.appendChild(lista_item)
    verificaListaVazia(lista_deItens)
})




