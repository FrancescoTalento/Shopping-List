



export function editaItem(lista_item){
    //pego o item que o usuario digitou
    let item = lista_item.querySelector("div p")

    //criou um input text nas entrelinhas com a mesma coisa digita no p e substituo o p com este input para possibilitar edicao
    let itemTemporario = document.createElement("input")
    itemTemporario.type = "text"
    itemTemporario.classList.add("editaItem")

    //aplico o valor do p no input e substituo o p com o input para o usuario editar o item da lista
    itemTemporario.value = item.textContent
    item.replaceWith(itemTemporario)
    itemTemporario.focus()


    itemTemporario.addEventListener("keypress",executaEdicao)
    itemTemporario.addEventListener("blur",executaEdicao)
    
    function executaEdicao(event){
        if(event.key === "Enter" || event.type === "blur"){
            let novoItem = document.createElement("p")
            novoItem.textContent = itemTemporario.value
            itemTemporario.replaceWith(novoItem)
        }
    }
}