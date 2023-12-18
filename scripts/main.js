const listaMarcas = document.getElementById("lista-marcas");
const buttonsMarcas = listaMarcas.querySelectorAll("button");


// evento de click de quando clicar no botao de marcas e ativar
buttonsMarcas.forEach(button =>{
    button.addEventListener("click", function(){
        // remove todas as classes active
        buttonsMarcas.forEach(btn => btn.classList.remove("active"));
        // adiciona a classe no botao clicado
        button.classList.toggle("active");
    })
});
