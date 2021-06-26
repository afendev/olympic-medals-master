//  const china = {
//      country: "China",
//      flag: "cn",
//      flag_url: "https://www.countryflags.io/cn/flat/24.png",
//      id: 2,
//      medal_gold: 27,
//      medal_silver: 23,
//      medal_bronze: 38
//  }
    const urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises"

    fetch(urlSite)
    .then(response => response.json())
    .then(data => tratarDadosMedalhas(data))



    let quadroMedalhas = document.querySelector(".quadro-medalhas")

    function criarTemplateLinha(
        colocacao,
        country,
        flag_url,
        medal_gold,
        medal_silver,
        medal_bronze
    ){

    // CRIANDO LINHA DO QUADRO
    let linha = document.createElement("div")

    // ADICIONANDO CLASSE PARA A DIV LINHA
    linha.classList.add("linha")
    
    // COLUNA RANK
    let colunaRank = criaColunaRank(`${colocacao}º`)
    let colunaCountry = criaColunaCountry(country, flag_url)
    let gold   = criaMedalGold(medal_gold)
    let silver = criaMedalSilver(medal_silver)
    let bronze = criaMedalBronze(medal_bronze)
    let totalMedalhas = (medal_gold + medal_silver + medal_bronze)
    console.log(totalMedalhas)
    let total  = criaMedalTotal(totalMedalhas)

    linha.appendChild(colunaRank)
    linha.appendChild(colunaCountry)
    linha.appendChild(gold)
    linha.appendChild(silver)
    linha.appendChild(bronze)
    linha.appendChild(total)

    quadroMedalhas.appendChild(linha)
    
}

//  criarTemplateLinha(
//      1,
//      china.country,
//      china.flag_url,
//      china.medal_gold,
//      china.medal_silver,
//      china.medal_bronze,
//  )

 function tratarDadosMedalhas(arrayPaises){
    let paisesOrdenados = ordenarPaises(arrayPaises)
        for ( let i = 0; i<paisesOrdenados.length; i++){
          let pais = paisesOrdenados[i]
          console.log(pais.country)
          console.log(pais.flag_url)
          console.log(pais.medal_gold)
          console.log(pais.medal_silver)
          console.log(pais.medal_bronze)
          
        criarTemplateLinha(
          i+1,
          pais.country,
          pais.flag_url,
          pais.medal_gold,
          pais.medal_silver,
          pais.medal_bronze,
        )
        }
        
 }

    function ordenarPaises(arrayPaises){
        let newArrayPaises = arrayPaises.map(somarTotal).sort((a,b) => b.medal_gold - a.medal_gold)
        return newArrayPaises
    }

    function somarTotal(pais){
        return pais
    }
    
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
    function criaColunaCountry(country, urlimagem) {

        // PRIMEIRA COLUNA DO COUNTRY
        let colunaCountry = document.createElement("div")
        colunaCountry.classList.add("coluna", "country")
    
        // CRIANDO SPAN TÍTULO COUNTRY
        let colunaCountryTitulo = document.createElement("span")
        colunaCountryTitulo.innerText = country
    
        // CRIANDO IMAGEM COUNTRY
        let colunaCountryImagem = document.createElement("img")
        colunaCountryImagem.src = urlimagem
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