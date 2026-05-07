const productsData = {
    'file-400g': {
        name: 'Filé de Tilápia',
        weight: '400g',
        image: 'assets/images/File de Tilapia 400g.webp',
        datasheet: 'assets/docs/ficha-tecnica-file-400g.pdf',
        description: 'Tilápia é fonte de proteínas e possui baixo índice de gordura. O corte de 400g é ideal para refeições rápidas e individuais.',
        ingredients: 'Filé de tilápia sem pele e sem espinha. Não contém glúten.',
        nutrition: 'Porção de 100g: Valor Energético 90kcal, Proteínas 20g, Gorduras Totais 1g.'
    },
    'file-800g': {
        name: 'Filé de Tilápia',
        weight: '800g',
        image: 'assets/images/File de Tilapia 800g.webp',
        datasheet: 'assets/docs/ficha-tecnica-800g.pdf',
        description: 'Tilápia é fonte de proteínas e possui baixo índice de gordura. Pacote família com 800g de pura qualidade.',
        ingredients: 'Filé de tilápia sem pele e sem espinha. Não contém glúten.',
        nutrition: 'Porção de 100g: Valor Energético 90kcal, Proteínas 20g, Gorduras Totais 1g.'
    },
    'file-2kg': {
        name: 'Filé de Tilápia',
        weight: '2KG',
        image: 'assets/images/File de Tilapia 2Kg (2).webp',
        datasheet: 'assets/docs/ficha-tecnica-2kg.pdf',
        description: 'Ideal para quem busca economia e praticidade no dia a dia. Tilápia fresca e selecionada em embalagem de 2kg.',
        ingredients: 'Filé de tilápia sem pele e sem espinha. Não contém glúten.',
        nutrition: 'Porção de 100g: Valor Energético 90kcal, Proteínas 20g, Gorduras Totais 1g.'
    },
    'isca-400g': {
        name: 'Isca de Tilápia',
        weight: '400g',
        image: 'assets/images/Isca de Tilapia 400g.webp',
        datasheet: 'assets/docs/ficha-tecnica-isca-400g.pdf',
        description: 'Iscas de tilápia selecionadas, prontas para o preparo. Crocantes por fora e macias por dentro.',
        ingredients: 'Iscas de tilápia selecionadas. Não contém glúten.',
        nutrition: 'Porção de 100g: Valor Energético 110kcal, Proteínas 18g, Gorduras Totais 3g.'
    },
    'granel-10kg': {
        name: 'Filé de Tilápia Granel',
        weight: 'Pacote 10 kg',
        image: 'assets/images/Filé de Tilápia Granel 10 kg.webp',
        datasheet: 'assets/docs/ficha-tecnica-10kg.pdf',
        description: 'Solução corporativa e para grandes famílias. Tilápia granel com o selo de qualidade Riviera.',
        ingredients: 'Filé de tilápia granel sem pele e sem espinha.',
        nutrition: 'Porção de 100g: Valor Energético 90kcal, Proteínas 20g, Gorduras Totais 1g.'
    }
};

function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId && productsData[productId]) {
        const product = productsData[productId];

        // Atualiza Título da Página
        document.title = `Riviera Pescados | ${product.name} ${product.weight}`;

        // Atualiza Breadcrumb
        const breadcrumbStrong = document.querySelector('.breadcrumb-nav strong');
        if (breadcrumbStrong) breadcrumbStrong.textContent = `${product.name} ${product.weight}`;

        // Atualiza Imagem
        const productImg = document.querySelector('.product-image-box img');
        if (productImg) {
            productImg.src = product.image;
            productImg.alt = `${product.name} ${product.weight}`;
        }

        // Atualiza Link da Ficha Técnica
        const downloadBtn = document.querySelector('.btn-download-pdf');
        if (downloadBtn && product.datasheet) {
            downloadBtn.href = product.datasheet;
        }

        // Atualiza Textos
        const h1 = document.querySelector('.product-text-info h1');
        if (h1) h1.innerHTML = product.name.replace(' ', '<br>');

        const weight = document.querySelector('.product-weight');
        if (weight) weight.textContent = product.weight;

        const desc = document.querySelector('.product-description');
        if (desc) desc.textContent = product.description;

        // Atualiza Accordions
        const accordions = document.querySelectorAll('.accordion-content p');
        if (accordions.length >= 2) {
            accordions[0].textContent = product.ingredients;
            accordions[1].textContent = product.nutrition;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadProduct);
