const productsData = {
    'file-400g': {
        name: 'File de Tilapia',
        heading: 'File de<br>Tilapia',
        weight: '400g',
        image: 'assets/images/produtos/file-tilapia-400g.webp',
        datasheet: 'assets/docs/ficha-tecnica-file-400g.pdf',
        description: 'Tilapia em file sem pele, pratica para refeicoes rapidas e porcoes individuais.',
        ingredients: 'File de tilapia sem pele e sem espinha. Nao contem gluten.',
        nutrition: 'Porcao de 100g: valor energetico 90 kcal, proteinas 20 g, gorduras totais 1 g.'
    },
    'file-800g': {
        name: 'File de Tilapia',
        heading: 'File de<br>Tilapia',
        weight: '800g',
        image: 'assets/images/produtos/file-tilapia-800g.webp',
        datasheet: 'assets/docs/ficha-tecnica-800g.pdf',
        description: 'Tilapia em file em embalagem familia, com praticidade para o dia a dia.',
        ingredients: 'File de tilapia sem pele e sem espinha. Nao contem gluten.',
        nutrition: 'Porcao de 100g: valor energetico 90 kcal, proteinas 20 g, gorduras totais 1 g.'
    },
    'file-2kg': {
        name: 'File de Tilapia',
        heading: 'File de<br>Tilapia',
        weight: '2kg',
        image: 'assets/images/produtos/file-tilapia-2kg.webp',
        datasheet: 'assets/docs/ficha-tecnica-2kg.pdf',
        description: 'Opcao economica para maior volume, mantendo o padrao de qualidade Riviera.',
        ingredients: 'File de tilapia sem pele e sem espinha. Nao contem gluten.',
        nutrition: 'Porcao de 100g: valor energetico 90 kcal, proteinas 20 g, gorduras totais 1 g.'
    },
    'isca-400g': {
        name: 'Isca de Tilapia',
        heading: 'Isca de<br>Tilapia',
        weight: '400g',
        image: 'assets/images/produtos/isca-tilapia-400g.webp',
        datasheet: 'assets/docs/ficha-tecnica-isca-400g.pdf',
        description: 'Iscas de tilapia selecionadas, praticas para preparo rapido e versatil.',
        ingredients: 'Iscas de tilapia. Nao contem gluten.',
        nutrition: 'Porcao de 100g: valor energetico 110 kcal, proteinas 18 g, gorduras totais 3 g.'
    },
    'tirinhas-250g': {
        name: 'Tirinhas de Tilapia',
        heading: 'Tirinhas de<br>Tilapia',
        weight: '250g',
        image: 'assets/images/produtos/tirinhas-tilapia-250g.webp',
        datasheet: null,
        description: 'Tirinhas de tilapia super crocantes, prontas para preparo pratico no dia a dia.',
        ingredients: 'Empanado a base de tilapia, pre-frito e congelado.',
        nutrition: 'Consulte a embalagem do produto para as informacoes nutricionais completas.'
    },
    'file-tilapia-empanado-400g': {
        name: 'File de Tilapia Empanado',
        heading: 'File de Tilapia<br>Empanado',
        weight: '400g',
        image: 'assets/images/produtos/file-tilapia-empanado-400g.webp',
        datasheet: null,
        description: 'File de tilapia empanado, super saboroso e pronto para preparo rapido.',
        ingredients: 'File de tilapia sem pele, temperado, empanado, pre-frito e congelado.',
        nutrition: 'Consulte a embalagem do produto para as informacoes nutricionais completas.'
    },
    'granel-10kg': {
        name: 'File de Tilapia Granel',
        heading: 'File de Tilapia<br>Granel',
        weight: 'Pacote 10 kg',
        image: 'assets/images/produtos/file-tilapia-granel-10kg.webp',
        datasheet: 'assets/docs/ficha-tecnica-10kg.pdf',
        description: 'Opcao em granel para operacoes de maior volume, com padrao Riviera.',
        ingredients: 'File de tilapia granel sem pele e sem espinha.',
        nutrition: 'Porcao de 100g: valor energetico 90 kcal, proteinas 20 g, gorduras totais 1 g.'
    },
    'panga-granel-10kg': {
        name: 'File de Panga Granel',
        heading: 'File de Panga<br>Granel',
        weight: '10kg',
        image: 'assets/images/produtos/file-panga-granel-10kg.webp',
        datasheet: null,
        description: 'File de panga em embalagem granel, indicado para demandas de maior volume.',
        ingredients: 'File de panga congelado.',
        nutrition: 'Consulte a embalagem do produto para as informacoes nutricionais completas.'
    }
};

function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId && productsData[productId]) {
        const product = productsData[productId];

        document.title = `Riviera Pescados | ${product.name} ${product.weight}`;

        const breadcrumbStrong = document.querySelector('.breadcrumb-nav strong');
        if (breadcrumbStrong) breadcrumbStrong.textContent = `${product.name} ${product.weight}`;

        const productImg = document.querySelector('.product-image-box img');
        if (productImg) {
            productImg.src = product.image;
            productImg.alt = `${product.name} ${product.weight}`;
        }

        const downloadBtn = document.querySelector('.btn-download-pdf');
        const downloadSection = document.querySelector('.product-download-section');
        if (downloadBtn && product.datasheet) {
            downloadBtn.href = product.datasheet;
        }
        if (downloadSection) {
            downloadSection.style.display = product.datasheet ? '' : 'none';
        }

        const h1 = document.querySelector('.product-text-info h1');
        if (h1) h1.innerHTML = product.heading || product.name;

        const weight = document.querySelector('.product-weight');
        if (weight) weight.textContent = product.weight;

        const desc = document.querySelector('.product-description');
        if (desc) desc.textContent = product.description;

        const accordions = document.querySelectorAll('.accordion-content p');
        if (accordions.length >= 2) {
            accordions[0].textContent = product.ingredients;
            accordions[1].textContent = product.nutrition;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadProduct);
