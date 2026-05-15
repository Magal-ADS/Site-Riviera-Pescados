document.addEventListener("DOMContentLoaded", () => {
    // Carrega o Header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Marca o link ativo dinamicamente
            const currentPage = window.location.pathname.split("/").pop() || 'index.html';
            const navLinks = document.querySelectorAll('.main-nav a');
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref === currentPage) {
                    link.classList.add('active');
                }
            });

            // Lógica do Menu Mobile
            const menuToggle = document.querySelector('.mobile-menu-toggle');
            const mainNav = document.querySelector('.main-nav');

            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', () => {
                    menuToggle.classList.toggle('active');
                    mainNav.classList.toggle('active');
                    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
                });

                // Fecha o menu ao clicar em um link
                navLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        menuToggle.classList.remove('active');
                        mainNav.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    });
                });
            }
        });

    // Carrega o Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Inicializa o Swiper da Home se existir
    if (document.querySelector('.hero-swiper')) {
        new Swiper('.hero-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
    }

    // Inicializa o Swiper de Receitas se existir
    if (document.querySelector('.recipes-swiper')) {
        new Swiper('.recipes-swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.recipes-next',
                prevEl: '.recipes-prev',
            },
            autoplay: {
                delay: 6000,
            },
        });
    }

    // Inicializa o Swiper de Qualidade (Quem Somos)
    if (document.querySelector('.quality-swiper')) {
        new Swiper('.quality-swiper', {
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.quality-pagination',
                clickable: true,
            },
        });
    }
});
