import {dataFormatada} from "./dataFormatada.js"
import { atualizaLocalStorage } from "./localStorage.js";


export function editaItem(lista_item){
    //pega a a data do item
    let lista_data = lista_item.querySelector(".texto-data");
 
    
    
    //pego o item que o usuario digitou
    let item = lista_item.querySelector("div p")
    let valorAntigo = item.textContent

    //criou um input text nas entrelinhas com a mesma coisa digita no p e substituo o p com este input para possibilitar edicao
    let itemTemporario = document.createElement("input")
    itemTemporario.type = "text"
    itemTemporario.classList.add("editaItem")

    //aplico o valor do p no input e substituo o p com o input para o usuario editar o item da lista
    itemTemporario.value = valorAntigo
    item.replaceWith(itemTemporario)
    itemTemporario.focus()


    itemTemporario.addEventListener("keypress",executaEdicao)
    itemTemporario.addEventListener("blur",executaEdicao)
    
    function executaEdicao(event){
        if(event.key === "Enter" || event.type === "blur"){
            itemTemporario.removeEventListener("keypress", executaEdicao);
            itemTemporario.removeEventListener("blur", executaEdicao);

            let novoItem = document.createElement("p")
            novoItem.textContent = itemTemporario.value
            itemTemporario.replaceWith(novoItem)

            // atualiza a data do item
            lista_data.innerText = dataFormatada();

            // atualiza localStorage
            console.log(novoItem.textContent)
            atualizaLocalStorage(valorAntigo,novoItem.textContent, lista_data.innerText)
        }
    }
}