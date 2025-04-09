import { removeItem } from "./removeItem.js";
import { editaItem } from "./editaItem.js";
import { txt_addItem, lista_deItens } from "../index.js";

export let tarefasListJson = JSON.parse(localStorage.getItem("items")) || [];

export let contadorItens = 0;
export function exibiItensLi() {
  tarefasListJson.forEach((item) => {
    let lista_conteudo = item.descricao;

    //txt_addItem.value = "";

    //Pai da div
    let lista_item = document.createElement("li");

    //Pai do input e p
    let lista_div = document.createElement("div");
    lista_div.classList.add("lista-item-container");

    let lista_input = document.createElement("input");
    lista_input.type = "checkbox";
    lista_input.id = `checkbox-${contadorItens++}`;

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
    lista_data.innerText = item.horario; //dataformatada
    lista_data.classList.add("texto-data");

    // //add na localStorage
    // addItemLocalStorage(lista_conteudo, lista_data.innerText);

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

    //txt_addItem.focus();
    lista_deItens.appendChild(lista_item);
    //return lista_item;
  });
}

export function criaItemJson(item, data) {
  let itemJson = {
    descricao: item,
    horario: data,
  };
  return itemJson;
}

export function addItemLocalStorage(item, data) {
  let itemJson = criaItemJson(item, data);
  //vejo se o item ja existe
  let exists = tarefasListJson.some(
    (itemT) => itemT.descricao === itemJson.descricao
  );

  if (exists) {
    alert("Nao pode Item repetido");
    return;
    // impedir de add na lista visual
  }
  // adiciono o item ao localStorage
  tarefasListJson.push(itemJson);
  localStorage.setItem("items", JSON.stringify(tarefasListJson));
}

export function atualizaLocalStorage(valorAntigo, novoValor, data) {
  //vejo se o item a ser atualizado existe
  const index = tarefasListJson.findIndex(
    (itemT) => itemT.descricao === valorAntigo
  );
  //caso exista atualizo o localStorage com o novo itemJSON
  if (index !== -1) {
    tarefasListJson[index].descricao = novoValor;
    tarefasListJson[index].horario = data;
    localStorage.setItem("items", JSON.stringify(tarefasListJson));
  }
}

export function removeLocalStorage(lista_conteudo) {
  let index = tarefasListJson.findIndex(
    (value) => value.descricao === lista_conteudo
  );

  if (index !== -1) {
    tarefasListJson.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(tarefasListJson));
  }
}
