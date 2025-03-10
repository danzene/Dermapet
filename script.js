document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".anuncio-slider");
    let index = 0;
    const totalAnuncios = document.querySelectorAll(".anuncio").length;

    function mudarAnuncio() {
        // Move o slider para o próximo anúncio
        slider.style.transform = `translateX(-${index * 100}%)`;

        // Aguarda 3 segundos para exibir o anúncio centralizado
        setTimeout(() => {
            index = (index + 1) % totalAnuncios;
            mudarAnuncio();
        }, 3000); // Tempo que o anúncio fica parado antes de continuar
    }

      //Iniciar animação
    mudarAnuncio();
});



   // Initialize Swiper 

    var swiper = new Swiper(".slide-info", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
