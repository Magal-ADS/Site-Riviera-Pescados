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
        });

    // Carrega o Footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
