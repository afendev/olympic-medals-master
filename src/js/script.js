// div -> class linha *** ok
// div -> coluna especificar classe
// span
// div linha -> país + img+span

    let quadroMedalhas = document.querySelector(".quadro-medalhas")

function criarTemplateLinha(){

    // CRIANDO LINHA DO QUADRO
    let linha = document.createElement("div")

    // ADICIONANDO CLASSE PARA A DIV LINHA
    linha.classList.add("linha")
    
    // COLUNA RANK
    let colunaRank = criaColunaRank("1º")
    let colunaCountry = criaColunaCountry("Brasil")
    let gold   = criaMedalGold("10")
    let silver = criaMedalSilver("10")
    let bronze = criaMedalBronze("10")
    let total  = criaMedalTotal("30")

    linha.appendChild(colunaRank)
    linha.appendChild(colunaCountry)
    linha.appendChild(gold)
    linha.appendChild(silver)
    linha.appendChild(bronze)
    linha.appendChild(total)

    quadroMedalhas.appendChild(linha)
    console.log(linha)
}
criarTemplateLinha()

    
    // FUNÇÃO QUE CRIA A COLUNA RANK
    function criaColunaRank(rank) {

    // PRIMEIRA COLUNA DO RANK
    let colunaRank = document.createElement("div")
    colunaRank.classList.add("coluna", "coluna-rank")

    // CRIANDO SPAN TÍTULO RANK
    let colunaRankTitulo = document.createElement("span")
    colunaRankTitulo.innerText = rank
    colunaRank.appendChild(colunaRankTitulo)

    return colunaRank
}

    // FUNÇÃO QUE CRIA A COLUNA COUNTRY
    function criaColunaCountry(country) {

        // PRIMEIRA COLUNA DO COUNTRY
        let colunaCountry = document.createElement("div")
        colunaCountry.classList.add("coluna", "country")
    
        // CRIANDO SPAN TÍTULO COUNTRY
        let colunaCountryTitulo = document.createElement("span")
        colunaCountryTitulo.innerText = country
    
        // CRIANDO IMAGEM COUNTRY
        let colunaCountryImagem = document.createElement("img")
        colunaCountryImagem.src = "https://www.countryflags.io/br/flat/24.png"
        colunaCountryImagem.alt = country
        colunaCountry.appendChild(colunaCountryImagem)
        colunaCountry.appendChild(colunaCountryTitulo)
        
        return colunaCountry
    }
 
    // FUNÇÃO QUE CRIA A COLUNA MEDAL GOLD
    function criaMedalGold(gold) {

        // PRIMEIRA COLUNA DO RANK
        let coluna = document.createElement("div")
        coluna.classList.add("coluna", "medal_gold")
    
        // CRIANDO SPAN TÍTULO RANK
        let colunaTitulo = document.createElement("span")
        colunaTitulo.innerText = gold
        coluna.appendChild(colunaTitulo)
    
        return coluna
    }
    
    // FUNÇÃO QUE CRIA A COLUNA MEDAL SILVER
    function criaMedalSilver(silver) {

        // PRIMEIRA COLUNA DO RANK
        let coluna = document.createElement("div")
        coluna.classList.add("coluna", "medal_silver")
    
        // CRIANDO SPAN TÍTULO RANK
        let colunaTitulo = document.createElement("span")
        colunaTitulo.innerText = silver
        coluna.appendChild(colunaTitulo)
    
        return coluna
    }

    // FUNÇÃO QUE CRIA A COLUNA MEDAL BRONZE
    function criaMedalBronze(bronze) {

        // PRIMEIRA COLUNA DO RANK
        let coluna = document.createElement("div")
        coluna.classList.add("coluna", "medal_bronze")
    
        // CRIANDO SPAN TÍTULO RANK
        let colunaTitulo = document.createElement("span")
        colunaTitulo.innerText = bronze
        coluna.appendChild(colunaTitulo)
    
        return coluna
    }

        // FUNÇÃO QUE CRIA A COLUNA MEDAL TOTAL
        function criaMedalTotal(total) {

            // PRIMEIRA COLUNA DO RANK
            let colunaTotal = document.createElement("div")
            colunaTotal.classList.add("coluna", "total")
        
            // CRIANDO SPAN TÍTULO RANK
            let colunaTotalTitulo = document.createElement("span")
            colunaTotalTitulo.innerText = total
            colunaTotal.appendChild(colunaTotalTitulo)
        
            return colunaTotal
        }