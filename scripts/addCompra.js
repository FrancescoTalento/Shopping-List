import { txt_addItem, lista_deItens } from "../index.js";
import {dataFormatada} from "./dataFormatada.js"
import { removeItem } from "./removeItem.js";
import { editaItem } from "./editaItem.js";

import {
  tarefasListJson,
  addItemLocalStorage,
  atualizaLocalStorage,
  contadorItens,
} from "./localStorage.js";

export let idContador = contadorItens;
export function addButao(event){
    
    if(event.key === "Enter" || event.type === "click"){
      event.preventDefault();
      if (txt_addItem.value === "") {
        return alert("Escreva algo antes de add");
      }
      //impede a adicao de item repetidos
      
      let repetido = tarefasListJson.some(
        (itemT) => 
            itemT.descricao.toLowerCase() === txt_addItem.value.toLowerCase());
      if(repetido){
        txt_addItem.value = "";
        return alert("Nao pode item repetido, caso queria adiciona-lo mude a especificacao (ex: banana - EPA, banana - Sacolao")
      }

      let lista_conteudo = txt_addItem.value;

      txt_addItem.value = "";

      //Pai da div
      let lista_item = document.createElement("li");

      //Pai do input e p
      let lista_div = document.createElement("div");
      lista_div.classList.add("lista-item-container");

      let lista_input = document.createElement("input");
      lista_input.type = "checkbox";
      lista_input.id = `checkbox-${idContador++}`;

      let lista_texto = document.createElement("p");
      lista_texto.textContent = lista_conteudo;

      let btn_lixeira = document.createElement("p");
      btn_lixeira.innerText = "🗑️";
      btn_lixeira.classList.add("btnDireita");
      btn_lixeira.classList.add("btnFuncao");

      btn_lixeira.addEventListener("click", (event) => {
        removeItem(lista_deItens, lista_item);
      });

      let lista_data = document.createElement("p");
      lista_data.innerText = dataFormatada();
      lista_data.classList.add("texto-data");

      //add na localStorage
      addItemLocalStorage(lista_conteudo, lista_data.innerText);

      let btn_edita = document.createElement("p");
      btn_edita.innerText = "✏️";
      btn_edita.classList.add("btnFuncao");
      btn_edita.addEventListener("click", (event) => {
        editaItem(lista_item);
      });

      //add elementos filhos da div
      lista_div.appendChild(lista_input);
      lista_div.appendChild(lista_texto);
      lista_div.appendChild(btn_lixeira);
      lista_div.appendChild(btn_edita);

      //add a div na li
      lista_item.appendChild(lista_div);
      lista_item.appendChild(lista_data);

      txt_addItem.focus();
      return lista_item;

      //add tudo no fim na lista como um item de lista com todos os elmentos
    }
}

