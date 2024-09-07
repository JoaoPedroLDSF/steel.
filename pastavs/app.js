function pesquisar() {
        // Obtém a seção onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");

        let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

        console.log(campoPesquisa);

        // Se campoPesquisa for uma string sem nada
        if (campoPesquisa == "") {

        section.innerHTML = "<p>Nada foi encontrado</p>"
        return


    }


    campoPesquisa = campoPesquisa.toLowerCase();


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado da lista
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()


        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado
            resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;

        }
        //então, faça....

        console.log(dado.titulo.includes(campoPesquisa))


    }

    if(!resultados){

      resultados = "<p>Nada foi encontrado</p>"

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}