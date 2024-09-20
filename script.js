const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector(".toggle-btn");

// Adiciona um comportamento interativo a um botão (toggleBtn) que, ao ser clicado, alterna (ativa ou desativa) uma classe chamada "active" no elemento sidebar. sempre que o botão for clicado, a função dentro desse evento será executada. classList: Refere-se à lista de classes CSS do elemento sidebar. O .toggle("active"): Este método adiciona a classe "active" se ela não estiver presente e remove a classe "active" se ela já estiver presente. Ou seja, ele alterna a presença da classe "active" no elemento. 

// O código verifica se o elemento sidebar já possui a classe "active".
// Se não possui, a classe "active" é adicionada, aplicando os estilos CSS associados a essa classe.
// Se já possui, a classe "active" é removida, revertendo para o estado anterior (sem a classe "active").

// Esse código é uma maneira simples e eficiente de alternar visibilidade ou estilo de um elemento ao clicar em um botão,

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})