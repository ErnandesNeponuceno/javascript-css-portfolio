const accordionData = [
    {
        title: "Formação Angular",
        date: "Digital Innovation One. Mai 2024. 37h.",
        content: `
            Compreensão dos fundamentos do Angular, sua 
            arquitetura e configuração do ambiente de desenvolvimento.
            TypeScript: Aprendizado da linguagem TypeScript, na qual o Angular é construído.
            Componentes e Templates: Criação e uso de componentes, e construção de templates.
            Data Binding e Diretivas: Exploração de data binding e uso de diretivas Angular.
            Serviços e Injeção de Dependência: Implementação de serviços e compreensão da injeção 
            de dependência.
            Roteamento e Navegação: Configuração e gerenciamento de roteamento e navegação em 
            aplicativos Angular.
            Cliente HTTP: Comunicação com serviços de backend usando o módulo cliente HTTP.
            Formulários: Trabalho com formulários baseados em templates e reativos.
            Tópicos Avançados: Otimização de desempenho, Angular CLI e estratégias de implantação.
        `
    },
    {
        title: "Formação JavaScript Developer",
        date: "Digital Innovation One. Jan 2024. 39h.",
        content: `
            Requisições Assíncronas (Async/Await):
            Implementação de requisições assíncronas com Async/Await para melhorar a eficiência e responsividade das aplicações.     
            Manipulação do DOM:
            Habilidade para manipular o DOM de forma eficaz, dinâmica e interativa.                          
            Utilização e Funcionamento de APIs:
            Integração e manipulação de dados externos através de APIs, compreendendo seu funcionamento e uso correto.
            Uso de Map e Join:
            Aplicação das funções Map e Join para iterar e manipular elementos de arrays de forma concisa.
            Método:
            Adoção de boas práticas na organização e estruturação do código para alcançar objetivos propostos.
            Funções:
            Utilização de funções para encapsular e reutilizar blocos de código, promovendo modularidade e manutenibilidade no desenvolvimento web.
        `
    },
    {
        title: "Impulso JavaScript Evolution",
        date: "Digital Innovation One. Ago 2024. 104h.",
        content: `
            Princípios de desenvolvimento de Software: 
            Introdução à programação e pensamento computacional. 
            Introdução ao git e GitHub.
            Fundamentos Web com HTML e CSS:
            Criação de Websites com HTML5 e CSS3.
            Posicionando elementos com Flexbox em CSS.
            Dominando a linguagem de programação com JavaScript: 
            Sintaxe básica e operadores em JavaScript.
            Funções.
            Debugging e error handling com JavaScript.
            Manipulação do D.O.M.
            Orientação a objetos.
            Introdução ao TypeScript: Explorando classes, tipos e interfaces.
            Desenvolvimento Web com React:
            Introdução ao ReactJs.
            Introdução do React Hooks.
            Banco de dados relacionais (SQL) e não relacionais (NoSQL)
            Introdução ao MongoDB e banco de dados NoSQL.
            Back-end: Criando API com NodeJs.
            Fundamentos de Node.js e Jest.
            Pirâmide de testes na prática explorando Jest e TDD.
            Microsserviços e integração com Node.js.
            Aplicando o Estilo Arquitetural REST com Node.js
            Criando uma API REST com Node.js e TypeORM.
            Integrando um Backend em Node.js com um Frontend em React.
            Desafios de projetos práticos. 
            Trabalhando com States e Effects no ReactJs.
        `
    },
    {
        title: "Transforma Tec 2024",
        date: "Digital Innovation One. Ago 2024. 81h.",
        content: `
            Trilha completa de HTML, JavaScript e CSS.
            Principios de Desenvolvimento de Software Colaborativo.
            Logica de programação.
            Versionamento de código com git e github.
            Construção de Páginas web com HTML, CSS e Javascript por meio de projetos praticos.
            Trabalhando com funções, objetos, classes, Arrays e estruturas de repetição com Javascript.
            Introdução ao consumo de API.
        `
    }
];

function createAccordionItem(item, isActive = false) {
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion__item';

    if (isActive) {
        accordionItem.classList.add('active');
    }

    accordionItem.innerHTML = `
        <button class="accordion__header">
            <span>${item.title}</span>
            <i class="bi bi-caret-down-fill"></i>
        </button>
        <div class="accordion__body">
            <p>${item.date}</p>
            <p>${item.content}</p>
        </div>
    `;
    return accordionItem;
}

function renderCursosItems(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 
    items.forEach((item, index) => {
        const accordionItem = createAccordionItem(item, index === 0); 
        container.appendChild(accordionItem);
    });
    
    const accordionItems = container.querySelectorAll(".accordion__item");
    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion__header");
        header.addEventListener("click", () => {
            const accordionItem = header.parentElement;
            const accordionActive = accordionItem.classList.contains("active");
            accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
        });
    });
}

renderCursosItems('accordion', accordionData);
