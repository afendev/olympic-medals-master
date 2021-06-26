// div -> class linha *** ok
// div -> coluna especificar classe
// span
// div linha -> país + img+span

function criarTemplateLinha(){
    // CRIANDO LINHA DO QUADRO
    let linha = document.createElement("div")

    // ADICIONANDO CLASSE PARA A DIV LINHA
    linha.classList.add("linha")
    
    // COLUNAS
    
    // PRIMEIRA COLUNA DO RANK
    let colunaRank = document.createElement("div")
    colunaRank.classList.add("coluna", "coluna-rank")

    // SPAN TÍTULO RANK
    let colunaRankTitulo = document.createElement("span")
    colunaRankTitulo.innerText = "1º"
    
    colunaRank.appendChild(colunaRankTitulo)
    console.log(colunaRank)
    console.log(colunaRankTitulo)
}

criarTemplateLinha()

// continuar estudos a partir de 1h:26min