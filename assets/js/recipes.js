const recipesData = {
    'receita-1': {
        name: 'Filé de Tilápia Grelhado com Limão e Alcaparras',
        time: '20 min',
        portions: '2 porções',
        difficulty: 'Fácil',
        image: 'assets/images/FILÉ-DE-TILÁPIA-GRELHADO-COM-LIMÃO-E-ALCAPARRAS.webp',
        tip: 'Sirva com arroz branco e legumes salteados para uma refeição leve e equilibrada.',
        ingredients: [
            '2 filés de tilápia Riviera',
            'Suco de 1 limão',
            '1 colher (sopa) de manteiga',
            '1 colher (sopa) de azeite',
            '2 colheres (sopa) de alcaparras',
            'Sal e pimenta-do-reino a gosto',
            'Salsinha picada para finalizar'
        ],
        steps: [
            'Tempere os filés com sal, pimenta e suco de limão.',
            'Aqueça uma frigideira com azeite e manteiga.',
            'Grelhe os filés por cerca de 3 a 4 minutos de cada lado, até dourar.',
            'Adicione as alcaparras na frigideira e misture levemente.',
            'Finalize com salsinha e sirva imediatamente.'
        ]
    },
    'receita-2': {
        name: 'Tilápia ao Molho de Maracujá',
        time: '30 min',
        portions: '2 porções',
        difficulty: 'Fácil',
        image: 'assets/images/TILÁPIA-AO-MOLHO-DE-MARACUJÁ (1).webp',
        tip: 'O azedinho do maracujá combina perfeitamente com a suavidade da tilápia.',
        ingredients: [
            '2 filés de tilápia Riviera',
            'Polpa de 2 maracujás',
            '1/2 xícara de creme de leite',
            '1 colher (sopa) de mel',
            'Sal e azeite a gosto'
        ],
        steps: [
            'Tempere a tilápia e grelhe no azeite.',
            'Para o molho, leve a polpa e o mel ao fogo até reduzir.',
            'Misture o creme de leite e desligue.',
            'Regue os filés e sirva.'
        ]
    },
    'receita-3': {
        name: 'Tilápia à Parmegiana',
        time: '40 min',
        portions: '3 porções',
        difficulty: 'Média',
        image: 'assets/images/TILÁPIA-À-PARMEGIANA.webp',
        tip: 'Use um bom queijo muçarela para uma gratinação perfeita.',
        ingredients: [
            '3 filés de tilápia Riviera',
            'Ovos e farinha de rosca para empanar',
            'Molho de tomate caseiro',
            '200g de queijo muçarela',
            'Sal e orégano'
        ],
        steps: [
            'Empane os filés e frite-os.',
            'Coloque em um refratário, cubra com molho e queijo.',
            'Leve ao forno para gratinar.',
            'Finalize com orégano.'
        ]
    },
    'receita-4': {
        name: 'Tacos de Tilápia',
        time: '25 min',
        portions: '4 tacos',
        difficulty: 'Fácil',
        image: 'assets/images/TACOS-DE-TILÁPIA.webp',
        tip: 'Adicione coentro e limão fresco para um toque mexicano autêntico.',
        ingredients: [
            '2 filés de tilápia Riviera em tiras',
            'Tortilhas de milho ou trigo',
            'Repolho roxo fatiado',
            'Creme azedo ou maionese temperada',
            'Temperos mexicanos (páprica, cominho)'
        ],
        steps: [
            'Tempere a tilápia e grelhe rapidamente.',
            'Aqueça as tortilhas.',
            'Monte os tacos com o peixe, repolho e molho.',
            'Sirva com fatias de limão.'
        ]
    },
    'receita-6': {
        name: 'Tilápia ao Leite de Coco',
        time: '35 min',
        portions: '3 porções',
        difficulty: 'Fácil',
        image: 'assets/images/TILÁPIA-AO-LEITE-DE-COCO.webp',
        tip: 'Um prato clássico que lembra uma moqueca rápida.',
        ingredients: [
            '3 filés de tilápia Riviera',
            '200ml de leite de coco',
            'Pimentões coloridos e cebola',
            'Azeite de dendê (opcional)',
            'Coentro'
        ],
        steps: [
            'Refogue os vegetais no azeite.',
            'Acomode os peixes por cima.',
            'Despeje o leite de coco e cozinhe por 15 minutos.',
            'Finalize com coentro.'
        ]
    },
    'receita-7': {
        name: 'Tilápia ao Forno com Batatas',
        time: '40 min',
        portions: '3 porções',
        difficulty: 'Fácil',
        image: 'assets/images/TILÁPIA-AO-FORNO-COM-BATATAS.webp',
        tip: 'Corte as batatas em fatias finas para cozinharem junto com o peixe.',
        ingredients: [
            '3 filés de tilápia Riviera',
            '3 batatas médias fatiadas',
            'Azeite de oliva extra virgem',
            'Alecrim e alho',
            'Sal e pimenta'
        ],
        steps: [
            'Forre uma assadeira com as batatas.',
            'Coloque os filés por cima.',
            'Tempere com alho, alecrim e muito azeite.',
            'Asse em forno médio por 25-30 minutos.'
        ]
    },
    'receita-8': {
        name: 'Tilápia com Molho de Mostarda e Mel',
        time: '25 min',
        portions: '2 porções',
        difficulty: 'Fácil',
        image: 'assets/images/TILÁPIA-COM-MOLHO-DE-MOSTARDA-E-MEL.webp',
        tip: 'Equilibre o mel com a mostarda de acordo com seu gosto.',
        ingredients: [
            '2 filés de tilápia Riviera',
            '2 colheres de mostarda dijon ou amarela',
            '1 colher de mel',
            'Azeite e sal'
        ],
        steps: [
            'Grelhe os filés na frigideira.',
            'Misture a mostarda e o mel.',
            'Pincele o molho sobre o peixe nos minutos finais.',
            'Sirva com uma salada verde.'
        ]
    },
    'receita-9': {
        name: 'Tilápia ao Alho e Azeite',
        time: '20 min',
        portions: '2 porções',
        difficulty: 'Fácil',
        image: 'assets/images/TILÁPIA-AO-ALHO-E-AZEITE (1).webp',
        tip: 'O segredo é não deixar o alho queimar para não amargar.',
        ingredients: [
            '2 filés de tilápia Riviera',
            '4 dentes de alho fatiados',
            'Azeite de oliva em abundância',
            'Salsinha'
        ],
        steps: [
            'Tempere o peixe e grelhe.',
            'Em outra panela, doure o alho no azeite.',
            'Despeje o azeite com alho sobre o peixe.',
            'Finalize com salsinha.'
        ]
    },
    'receita-10': {
        name: 'Tilápia com Espaguete ao Alho e Óleo',
        time: '30 min',
        portions: '3 porções',
        difficulty: 'Fácil',
        image: 'assets/images/TILÁPIA-COM-ESPAGUETE-AO-ALHO-E-ÓLEO.webp',
        tip: 'Uma refeição completa e muito rápida.',
        ingredients: [
            '3 filés de tilápia Riviera em cubos',
            '250g de espaguete',
            'Alho, azeite e pimenta dedo-de-moça',
            'Sal e queijo parmesão'
        ],
        steps: [
            'Cozinhe o espaguete.',
            'Grelhe os cubos de tilápia temperados.',
            'Misture a massa com azeite, alho frito e o peixe.',
            'Sirva com parmesão.'
        ]
    }
};

function loadRecipe() {
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('id');

    if (recipeId && recipesData[recipeId]) {
        const recipe = recipesData[recipeId];

        // Atualiza Título da Página
        document.title = `Riviera Pescados | ${recipe.name}`;

        // Atualiza Breadcrumb e Títulos
        document.getElementById('recipe-breadcrumb').textContent = recipe.name;
        document.getElementById('recipe-title').textContent = recipe.name;

        // Atualiza Imagem
        if (recipe.image) {
            document.getElementById('recipe-image').src = recipe.image;
        }

        // Atualiza Infos
        document.getElementById('recipe-time').textContent = recipe.time;
        document.getElementById('recipe-portions').textContent = recipe.portions;
        document.getElementById('recipe-difficulty').textContent = recipe.difficulty;
        document.getElementById('recipe-tip').textContent = recipe.tip;

        // Atualiza Ingredientes
        const ingredientsList = document.getElementById('recipe-ingredients');
        ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

        // Atualiza Passos
        const stepsList = document.getElementById('recipe-steps');
        stepsList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');
    }
}

if (window.location.pathname.includes('receita-interna.html')) {
    document.addEventListener('DOMContentLoaded', loadRecipe);
}
