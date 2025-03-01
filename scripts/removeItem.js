import {verificaListaVazia} from "./isListaVazia.js"

export function removeItem(lista_deItens,lista_item){
    lista_deItens.removeChild(lista_item)
    verificaListaVazia(lista_deItens)
}