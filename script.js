// Import  de dados
import lista from "./lista.js"

// Query dos elementos HTML
const button = document.querySelector('#botao')
const list = document.querySelector('#list')
const resultado = document.querySelector('#result')
const tabela = document.querySelector('#table')


// Insert de valores no drop down dos fornecedores
const options = (lista.map((objeto) => `<option value="${objeto.nome}" id="${objeto.id}">${objeto.nome}</option>`)).join('')

list.innerHTML = options

// Criação da Tabela
function createTable(value) {
    return `
    <thead>
        <tr>
            <th>Horários</th>
        </tr>
    </thead>
    <tbody id="table">${value}
    </tbody>
    `
}

// Lógica dos eventos após clique e seleção do fornecedor
button.addEventListener("click", (e) => {
    e.preventDefault()

    // Capturando o valor do drop down em uma variável e mostrando na tela
    const resultList = list.value

    resultado.innerHTML = resultList

    list.innerHTML = options

    // Verificação do valor do drop down para puxar lista de horas correta
    function verificaFornecedor() {
        if (resultList === 'Cal Brasil') {
            const horarios = lista[1].horarios
            return horarios
        } else if (resultList === 'Imerys') {
            const horarios = lista[2].horarios
            return horarios
        } else if (resultList === 'Serra Branca') {
            const horarios = lista[3].horarios
            return horarios
        }
    }

    // Inserindo array de horas de fornecedor compatível
    const horarios = verificaFornecedor()


    //Criação da tabela de horas
    const linha = horarios.map((hora)=>`<tr><td>${hora}</td></tr>`).join('')

    tabela.innerHTML = createTable(linha)
})
