# Site-Riviera-Pescados

🐟 Projeto: Riviera Pescados - Web App Institucional
🎯 Visão Geral
O projeto é um website institucional moderno, responsivo e modular desenvolvido para a marca "Riviera Pescados". O objetivo foi criar uma vitrine digital de alta performance para apresentar produtos, receitas, blog e a história da empresa, com foco absoluto na experiência do usuário (UX) e em uma interface do usuário (UI) refinada e fiel ao protótipo do Figma.

🛠️ Stack Tecnológico
O projeto foi construído no modelo "Vanilla" (puro), focado em performance extrema e carregamento rápido, sem depender de frameworks pesados:

HTML5: Semântico e acessível.

CSS3 (Modular): Utilização avançada de CSS Grid, Flexbox, Custom Properties (Variáveis) e animações/keyframes.

JavaScript (Vanilla ES6): Manipulação de DOM e consumo da Fetch API.

FontAwesome: Biblioteca CDN para ícones vetoriais.

🏗️ Arquitetura e Engenharia do Front-end
A maior força deste projeto é a sua arquitetura. Para evitar duplicação de código e facilitar a manutenção, aplicamos conceitos de componentização:

Injeção Dinâmica de Componentes: O Cabeçalho (Header) e o Rodapé (Footer/Newsletter) foram isolados em arquivos .html separados. O JavaScript (main.js) usa a Fetch API para carregar e injetar esses pedaços nas páginas principais automaticamente.

CSS Modularizado: Em vez de um arquivo gigante e difícil de ler, o estilo foi quebrado em responsabilidades: variáveis globais, componentes reutilizáveis e arquivos específicos para cada página. Todos são centralizados no style.css através da regra @import.

Active State Dinâmico: O JavaScript lê a URL atual do navegador e pinta a linha amarela embaixo do link correto no menu, sem precisar fazer isso na mão em cada arquivo.

📂 Estrutura de Arquivos (Directory Tree)
/riviera-pescados
├── index.html           # Página inicial (Hero, Destaques)
├── produtos.html        # Catálogo de produtos com grid cortado e filtros
├── receitas.html        # Grid de receitas com cards flutuantes
├── quem-somos.html      # História, Mapa e Grid de Missão/Visão/Valores
├── contato.html         # Grid focado com SAC em largura total (CSS Grid)
├── blog.html            # Artigos com imagens padronizadas em proporção 4:3
│
├── /components/         # Fragmentos de HTML (Injeção via JS)
│   ├── header.html      # Menu de navegação e Logo
│   └── footer.html      # Newsletter e Rodapé em 4 colunas
│
├── /assets/
│   ├── /js/
│   │   └── main.js      # Lógica de injeção e menu ativo
│   │
│   ├── /css/
│   │   ├── style.css        # Maestro (Importa os outros CSS)
│   │   ├── variables.css    # Cores (Root), Fontes e Scroll suave
│   │   ├── components.css   # Estilos de Header, Footer e Botões
│   │   ├── home.css         # Estilos exclusivos da Home
│   │   ├── produtos.css     # Estilos exclusivos do Catálogo
│   │   ├── receitas.css     # Estilos exclusivos das Receitas
│   │   ├── quem-somos.css   # Estilos exclusivos da Bio
│   │   ├── contato.css      # Estilos exclusivos de Contato
│   │   └── blog.css         # Estilos exclusivos do Blog
│   │
│   ├── /images/         # Banners, fotos, ícones e logo
│   └── /fonts/          # (Opcional) Fontes customizadas

✨ Principais Funcionalidades Visuais (UI/UX)
Logo "Vazada" (Overlapping): A logomarca da Riviera quebra o limite do cabeçalho e flutua por cima dos banners usando margin-bottom negativo e z-index, criando profundidade com drop-shadow.

Microinterações: Botões que levantam ao passar o mouse, sombras que se intensificam (efeito 3D nos cards), fotos com zoom suave e sublinhado animado no menu.

Design Responsivo (Mobile-First adaptado): Todas as páginas quebram perfeitamente em telas de celular e tablets, transformando grids de 3 ou 4 colunas em layouts verticais fáceis de rolar.

Layouts Complexos com CSS Grid: Criação rápida de layouts difíceis, como o card de "SAC" que ocupa toda a extensão inferior na página de contato (grid-column: 1 / -1).
