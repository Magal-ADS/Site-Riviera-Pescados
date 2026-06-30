const ASSET_VERSION = '20260617';

const productsData = {
    'file-400g': {
        name: 'Filé de Tilápia',
        heading: 'Filé de<br>Tilápia',
        weight: '400g',
        size: '400g',
        category: 'Filé',
        type: 'Tradicional',
        image: `assets/images/produtos/file-tilapia-400g.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/FT 02 - Riviera filé congelado 400g.pdf',
        description: 'Tilápia em filé sem pele, prática para refeições rápidas e porções individuais.',
        ingredients: 'Filé de tilápia sem pele e sem espinha. Não contém glúten.',
        nutrition: 'Porção de 100g: valor energético 90 kcal, proteínas 20 g, gorduras totais 1 g.',
        relatedRecipes: ['receita-1', 'receita-2', 'receita-3']
    },
    'file-800g': {
        name: 'Filé de Tilápia',
        heading: 'Filé de<br>Tilápia',
        weight: '800g',
        size: '800g',
        category: 'Filé',
        type: 'Tradicional',
        image: `assets/images/produtos/file-tilapia-800g.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/FT03 - Riviera filé congelado 800g.pdf',
        description: 'Tilápia em filé em embalagem família, com praticidade para o dia a dia.',
        ingredients: 'Filé de tilápia sem pele e sem espinha. Não contém glúten.',
        nutrition: 'Porção de 100g: valor energético 90 kcal, proteínas 20 g, gorduras totais 1 g.',
        relatedRecipes: ['receita-6', 'receita-7', 'receita-8']
    },
    'file-2kg': {
        name: 'Filé de Tilápia',
        heading: 'Filé de<br>Tilápia',
        weight: '2kg',
        size: '2kg',
        category: 'Filé',
        type: 'Tradicional',
        image: `assets/images/produtos/file-tilapia-2kg.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/FT04 - Riviera filé congelado 2kg.pdf',
        description: 'Opção econômica para maior volume, mantendo o padrão de qualidade Riviera.',
        ingredients: 'Filé de tilápia sem pele e sem espinha. Não contém glúten.',
        nutrition: 'Porção de 100g: valor energético 90 kcal, proteínas 20 g, gorduras totais 1 g.',
        relatedRecipes: ['receita-3', 'receita-9', 'receita-10']
    },
    'isca-400g': {
        name: 'Isca de Tilápia',
        heading: 'Isca de<br>Tilápia',
        weight: '400g',
        size: '400g',
        category: 'Isca',
        type: 'Tradicional',
        image: `assets/images/produtos/isca-tilapia-400g.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/ficha-tecnica-isca-400g.pdf',
        description: 'Iscas de tilápia selecionadas, práticas para preparo rápido e versátil.',
        ingredients: 'Iscas de tilápia. Não contém glúten.',
        nutrition: 'Porção de 100g: valor energético 110 kcal, proteínas 18 g, gorduras totais 3 g.',
        relatedRecipes: ['receita-4', 'receita-9', 'receita-10']
    },
    'tirinhas-250g': {
        name: 'Tirinhas de Tilápia',
        heading: 'Tirinhas de<br>Tilápia',
        weight: '250g',
        size: '250g',
        category: 'Tirinhas',
        type: 'Empanado',
        image: `assets/images/produtos/tirinhas-tilapia-250g.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/FT312 - Riviera tiras empanadas 250g.pdf',
        description: 'Tirinhas de tilápia super crocantes, prontas para preparo prático no dia a dia.',
        ingredients: 'Empanado a base de tilápia, pré-frito e congelado.',
        nutrition: 'Consulte a embalagem do produto para as informações nutricionais completas.',
        relatedRecipes: ['receita-11', 'receita-14', 'receita-15']
    },
    'file-tilapia-empanado-400g': {
        name: 'Filé de Tilápia Empanado',
        heading: 'Filé de Tilápia<br>Empanado',
        weight: '400g',
        size: '400g',
        category: 'Filé',
        type: 'Empanado',
        image: `assets/images/produtos/file-tilapia-empanado-400g.webp?v=${ASSET_VERSION}`,
        datasheet: null,
        description: 'Filé de tilápia empanado, super saboroso e pronto para preparo rápido.',
        ingredients: 'Filé de tilápia sem pele, temperado, empanado, pré-frito e congelado.',
        nutrition: 'Consulte a embalagem do produto para as informações nutricionais completas.',
        relatedRecipes: ['receita-5', 'receita-12', 'receita-13']
    },
    'granel-10kg': {
        name: 'Filé de Tilápia Granel',
        heading: 'Filé de Tilápia<br>Granel',
        weight: 'Pacote 10 kg',
        size: '10kg',
        category: 'Filé',
        type: 'Granel',
        image: `assets/images/produtos/file-tilapia-granel-10kg.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/FT09 - Riviera filé congelado 10kg.pdf',
        description: 'Opção em granel para operações de maior volume, com padrão Riviera.',
        ingredients: 'Filé de tilápia granel sem pele e sem espinha.',
        nutrition: 'Porção de 100g: valor energético 90 kcal, proteínas 20 g, gorduras totais 1 g.',
        relatedRecipes: ['receita-1', 'receita-6', 'receita-10']
    },
    'panga-granel-10kg': {
        name: 'Filé de Panga Granel',
        heading: 'Filé de Panga<br>Granel',
        weight: '10kg',
        size: '10kg',
        category: 'Filé',
        type: 'Granel',
        image: `assets/images/produtos/file-panga-granel-10kg.webp?v=${ASSET_VERSION}`,
        datasheet: 'assets/docs/FT191 - Riviera panga congelado 10kg.pdf',
        description: 'Filé de panga em embalagem granel, indicado para demandas de maior volume.',
        ingredients: 'Filé de panga congelado.',
        nutrition: 'Consulte a embalagem do produto para as informações nutricionais completas.',
        relatedRecipes: ['receita-2', 'receita-6', 'receita-8']
    }
};

function getProductsList() {
    return Object.entries(productsData).map(([id, product]) => ({ id, ...product }));
}

function buildProductCard(product) {
    return `
        <a href="produto-interna.html?id=${product.id}" class="product-card">
            <picture>
                <source srcset="${product.image}" type="image/webp">
                <img src="${product.image}" alt="${product.name} ${product.weight}" loading="lazy">
            </picture>
            <h4>${product.name}<br><strong>${product.weight}</strong></h4>
        </a>
    `;
}

function chunkProducts(products, chunkSize) {
    const chunks = [];

    for (let index = 0; index < products.length; index += chunkSize) {
        chunks.push(products.slice(index, index + chunkSize));
    }

    return chunks;
}

function renderProducts(products) {
    const catalogSection = document.querySelector('[data-products-catalog]');
    if (!catalogSection) return;

    if (!products.length) {
        catalogSection.innerHTML = `
            <div class="container products-empty-state">
                <p>Nenhum produto encontrado para os filtros selecionados.</p>
            </div>
        `;
        return;
    }

    const rowsMarkup = chunkProducts(products, 3)
        .map((row) => `
            <div class="catalog-row">
                <div class="container products-grid">
                    ${row.map(buildProductCard).join('')}
                </div>
            </div>
        `)
        .join('');

    catalogSection.innerHTML = rowsMarkup;
}

function populateFilter(select, products, key, placeholder) {
    if (!select) return;

    const values = [...new Set(products.map((product) => product[key]).filter(Boolean))];

    select.innerHTML = `
        <option value="">${placeholder}</option>
        ${values.map((value) => `<option value="${value}">${value}</option>`).join('')}
    `;
}

function filterProducts(products, filters) {
    return products.filter((product) => {
        const categoryMatch = !filters.category || product.category === filters.category;
        const sizeMatch = !filters.size || product.size === filters.size;
        const typeMatch = !filters.type || product.type === filters.type;

        return categoryMatch && sizeMatch && typeMatch;
    });
}

function getRelatedRecipes(product) {
    if (typeof recipesData === 'undefined' || !Array.isArray(product.relatedRecipes)) {
        return [];
    }

    return product.relatedRecipes
        .map((recipeId) => {
            const recipe = recipesData[recipeId];

            if (!recipe) return null;

            return {
                id: recipeId,
                ...recipe
            };
        })
        .filter(Boolean);
}

function renderRelatedRecipes(product) {
    const recipesContainer = document.querySelector('[data-related-recipes]');
    const recipesSection = document.querySelector('.related-recipes-section');

    if (!recipesContainer) return;

    const relatedRecipes = getRelatedRecipes(product);

    if (!relatedRecipes.length) {
        recipesContainer.innerHTML = '';

        if (recipesSection) {
            recipesSection.style.display = 'none';
        }

        return;
    }

    if (recipesSection) {
        recipesSection.style.display = '';
    }

    recipesContainer.innerHTML = relatedRecipes
        .map((recipe) => `
            <a href="receita-interna.html?id=${recipe.id}" class="recipe-card-item" style="text-decoration: none; color: inherit;">
                <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
                <h4>${recipe.name}</h4>
            </a>
        `)
        .join('');
}

function initProductsCatalog() {
    const catalogSection = document.querySelector('[data-products-catalog]');
    if (!catalogSection) return;

    const categorySelect = document.getElementById('product-filter-category');
    const sizeSelect = document.getElementById('product-filter-size');
    const typeSelect = document.getElementById('product-filter-type');
    const products = getProductsList();

    populateFilter(categorySelect, products, 'category', 'Categoria');
    populateFilter(sizeSelect, products, 'size', 'Tamanho');
    populateFilter(typeSelect, products, 'type', 'Tipo');

    const applyFilters = () => {
        const filteredProducts = filterProducts(products, {
            category: categorySelect ? categorySelect.value : '',
            size: sizeSelect ? sizeSelect.value : '',
            type: typeSelect ? typeSelect.value : ''
        });

        renderProducts(filteredProducts);
    };

    [categorySelect, sizeSelect, typeSelect]
        .filter(Boolean)
        .forEach((select) => select.addEventListener('change', applyFilters));

    renderProducts(products);
}

function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId && productsData[productId]) {
        const product = productsData[productId];

        document.title = `Riviera Pescados | ${product.name} ${product.weight}`;

        const breadcrumbStrong = document.querySelector('.breadcrumb-nav strong');
        if (breadcrumbStrong) breadcrumbStrong.textContent = `${product.name} ${product.weight}`;
        
        const breadcrumbCategory = document.getElementById('breadcrumb-category');
        if (breadcrumbCategory) breadcrumbCategory.textContent = product.name;

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

        renderRelatedRecipes(product);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initProductsCatalog();
    loadProduct();
});
