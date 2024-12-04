// Destacar o menu ao passar o mouse
const menuItems = document.querySelectorAll("menu ul li a");

menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
        item.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});

// Botão de voltar ao topo
const topBtn = document.getElementById("topBtn");

// Mostrar o botão quando o usuário rolar a página
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Rolar para o topo ao clicar no botão
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
