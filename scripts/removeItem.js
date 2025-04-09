import {verificaListaVazia} from "./isListaVazia.js"
import {removeLocalStorage } from "./localStorage.js";

export function removeItem(lista_deItens, lista_item) {

  // removendo da localStorage
  let lista_conteudo = lista_item.querySelector(".lista-item-container p");
  removeLocalStorage(lista_conteudo.textContent);
  lista_deItens.removeChild(lista_item);
  verificaListaVazia(lista_deItens);
}