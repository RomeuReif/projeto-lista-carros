const listaMarcas = document.getElementById("lista-marcas");
const buttonsMarcas = listaMarcas.querySelectorAll("button");
const listaCarros = document.getElementById("lista-carros")


// evento de click de quando clicar no botao de marcas e ativar
buttonsMarcas.forEach(button =>{
    button.addEventListener("click", function(){
        const marcaID = button.parentNode.id; // pega o id do button
        const marcaContainer = document.getElementById(marcaID + '-container');

        // adicionando a class hide para ocultar todos os container dos carros
        listaCarros.querySelectorAll(".carros-container").forEach(container => {
            container.classList.add("hide");
        });

        // removendo a classe hide para mostrar o container que foi clicado no button 
        marcaContainer.classList.remove("hide");


        // remove todas as classes active
        buttonsMarcas.forEach(btn => btn.classList.remove("active"));
        // adiciona a classe no botao clicado
        button.classList.toggle("active");
    })
});
