const icon = document.getElementById("icon");
const darkMode = document.querySelector('#darkmode');

darkMode.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark');
    icon.src = document.documentElement.classList.contains("dark")
    ? "/moon.svg" 
    : "/gashito.svg"; 

})


//// Change text colors. 

function f_text_colors() {
    const text_colors = document.querySelectorAll(".text_colors"); 

    if (text_colors.length === 0) return;

    const hora = new Date().getHours();
    const esDia = hora >= 6 && hora < 18;

    text_colors.forEach(elemento => {
        elemento.style.display = "inline-block";

        elemento.classList.remove("dia", "noche");

        elemento.classList.add(esDia ? "dia" : "noche");
    })

}
document.addEventListener("DOMContentLoaded", f_text_colors);


// Desplazar barra al medio cuando la pagina recarga

window.onload = function () {
    const scrollContainer = document.getElementById('scrollContainer');
    const secondCard = scrollContainer.querySelector('.card:nth-child(2)');
    
    if (secondCard) {
        // Calcular el desplazamiento necesario para centrar la segunda card
        const offset = secondCard.offsetLeft - (scrollContainer.clientWidth / 2) + (secondCard.clientWidth / 2);
        scrollContainer.scrollLeft = offset;
    }
};
