import { addButao } from "./scripts/addCompra.js"
import { verificaListaVazia } from "./scripts/isListaVazia.js"

//butao de add e texto do item da lista
export let txt_addItem = document.querySelector("input.input-item")
let btn_addItem = document.querySelector("button.button-item")


// a lista de item em si
export let lista_deItens = document.querySelector("ul#lista-de-compras")



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




