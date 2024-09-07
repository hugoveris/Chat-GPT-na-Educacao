function Pesquisar () {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum documento encontrado</p>"
        return
    }

    console.log(campoPesquisa);

    campoPesquisa = campoPesquisa.toLowerCase ()
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for(let dado of dados) {
        titulo =  dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dados.link} target="_blank">Conteúdo explicativo</a></div>
            `;
            }
        }
    
        if(!resultados) {
            resultados = "<p>Palavra digitada errada ou não contém nos nossos arquivos</p>"
        }

    section.innerHTML = resultados
}

//console.log(dados)

