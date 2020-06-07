function populateState() {
    const stateSelect = document.querySelector('select[name=state]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then( res => res.json())
    .then( states => {        
        for( const state of states ) {
            stateSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`    
        }
    })
}


populateState()


function getCities(event) {
    const citySelect = document.querySelector('select[name=city]')
    const stateNameInput = document.querySelector('input[name=stateName]')

    const stateId = event.target.value

    const stateIndexOfSelected = event.target.selectedIndex 
    stateNameInput.value = event.target.options[stateIndexOfSelected].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`

    citySelect.disabled = true
    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>'
        
    fetch(url)
    .then( res => res.json())
    .then( cities => {
        for( const city of cities ) {
            citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`    
        }
        citySelect.disabled = false

    })

}


document
    .querySelector("select[name=state]")
    .addEventListener("change",getCities)

// Itens de coleta

// pegar todos os li`s

const itemsToColect = document.querySelectorAll(".items-grid li")
const inputItems =  document.querySelector('input[name=items]')


for( const item of itemsToColect) {
    item.addEventListener("click", handleSelectedItem)
}



let selectedItems = []


function handleSelectedItem(event) {
    const itemLi = event.target

    

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")


    const itemId = event.target.dataset.id

    //verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex((item) => {
        const itemFound = item === itemId
        return itemFound
    })

    //se já estiver selecionado, tirar da selecao

    if(alreadySelected >= 0) {
        //tirar da selecao
        const filteredItems = selectedItems.filter(item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent
        })

        selectedItems = filteredItems
    } else {
        //se não estiver selecionado, 
        //adicionar à seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os itens selecionados
    inputItems.value = selectedItems
}