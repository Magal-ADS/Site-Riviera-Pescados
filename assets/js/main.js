document.addEventListener("DOMContentLoaded", () => {
    // Players minimalistas para os vídeos da seção de redes sociais.
    document.querySelectorAll('.social-item').forEach((item) => {
        const video = item.querySelector('video');
        const playButton = item.querySelector('.social-video-play');

        if (!video || !playButton) return;

        const playVideo = () => {
            video.play().catch(() => item.classList.remove('is-playing'));
        };

        playButton.addEventListener('click', playVideo);
        video.addEventListener('click', () => video.paused ? playVideo() : video.pause());
        video.addEventListener('play', () => item.classList.add('is-playing'));
        video.addEventListener('pause', () => item.classList.remove('is-playing'));
        video.addEventListener('ended', () => item.classList.remove('is-playing'));
    });
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

    // Função para exibir alerta customizado (Toast)
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.textContent = message;
        
        // Estilos inline para não depender de alterações no CSS externo
        toast.style.position = 'fixed';
        toast.style.bottom = '30px';
        toast.style.right = '30px';
        toast.style.backgroundColor = type === 'success' ? 'var(--azul-escuro, #1B2945)' : '#ef4444';
        toast.style.color = type === 'success' ? 'var(--amarelo, #FFC107)' : '#ffffff';
        toast.style.padding = '16px 24px';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
        toast.style.fontFamily = 'var(--fonte-padrao, "Segoe UI", sans-serif)';
        toast.style.fontWeight = 'bold';
        toast.style.fontSize = '1rem';
        toast.style.zIndex = '9999';
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        toast.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'; // Efeito bounce

        document.body.appendChild(toast);

        // Animação de entrada
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        }, 10);

        // Animação de saída e remoção
        setTimeout(() => {
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }

    // Lógica Global de Envio de Formulários para Webhook
    const formRiviera = document.querySelector('.riviera-form-box form');

    if (formRiviera) {
        formRiviera.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const submitBtn = formRiviera.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.textContent : 'Enviar';

            if (submitBtn) {
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
            }

            const formData = new FormData(formRiviera);
            const data = Object.fromEntries(formData.entries());

            if (data.logradouro) {
                data.endereco = [
                    [data.logradouro, data.numero].filter(Boolean).join(', '),
                    data.complemento,
                    data.bairro,
                    [data.cidade, data.estado].filter(Boolean).join(' - '),
                    data.cep ? `CEP ${data.cep}` : ''
                ].filter(Boolean).join(', ');
            }

            fetch('https://webhook.weagles.com.br/webhook/f44e290e-369d-4da5-b481-09f6ab2e6768', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    showToast('Mensagem enviada com sucesso!', 'success');
                    formRiviera.reset();
                } else {
                    showToast('Erro ao enviar (Status ' + response.status + '). Tente novamente.', 'error');
                }
            })
            .catch(error => {
                console.error('Erro de requisição:', error);
                showToast('Falha na conexão. Verifique sua internet.', 'error');
            })
            .finally(() => {
                if (submitBtn) {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                }
            });
        });
    }
});
