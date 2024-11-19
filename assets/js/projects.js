const projects = [
    {
        coverSrc: "assets/img/projects/3.png",
        title: "Projeto Clínica Odonto +",
        description: "Site completo para uma clinica de odontologia.",
        features: [
            "Site completo com 4 páginas responsivas.",
            "Validação de campos de formularios.",
            "Utilização de Angular e TypeScript na criação de elementos inteligentes."
        ],
        technologies: [
            { src: "assets/img/tech/css.png", alt: "Logo CSS" },
            { src: "assets/img/tech/typescript.png", alt: "Logo Typescript" },
            { src: "assets/img/tech/angular.png", alt: "Logo Angular" }
        ],
        previewLink: "https://angular-typescript-css-site-clinica.vercel.app/home",
        repoLink: "https://github.com/ErnandesNeponuceno/angular-typescript-css-site-clinica"
    },
    {
        coverSrc: "assets/img/projects/1.png",
        title: "Cafeteria Del Grano",
        description: "Projeto de uma cafeteria com cardápio.",
        features: [
            "Exibição de diferentes tipos de cafés em cards.",
            "Carregamento dinâmico dos dados dos produtos a partir de um arquivo JSON.",
            "Modal para visualizar detalhes do produto ao clicar em um card."
        ],
        technologies: [
            { src: "assets/img/tech/css.png", alt: "Logo CSS" },
            { src: "assets/img/tech/javascript.png", alt: "Logo Javascript" },
            { src: "assets/img/tech/bootstrap.png", alt: "Logo Bootstrap" }
        ],
        previewLink: "https://javascript-bootstrap-css-cafeteria.vercel.app/",
        repoLink: "https://github.com/ErnandesNeponuceno/javascript-bootstrap-css-cafeteria"
    },
    {
        coverSrc: "assets/img/projects/2.png",
        title: "PlayStation Store",
        description: "Projeto de clone fiel da PS Store com Angular.",
        features: [
            "Clone fiel da página PS Store.",
            "Criação de elementos dinamicamente com a diretiva NgFor.",
            "Utilização da biblioteca Swiper."
        ],
        technologies: [
            { src: "assets/img/tech/angular.png", alt: "Logo Angular" },
            { src: "assets/img/tech/typescript.png", alt: "Logo Typescript" },
            { src: "assets/img/tech/css.png", alt: "Logo CSS" }
        ],
        previewLink: "https://angular-ps-store-smi3.vercel.app/",
        repoLink: "https://github.com/ErnandesNeponuceno/angular-ps-store"
    }
];

function createFeatureItem(feature) {
    return `<li class="card__item">${feature}</li>`;
}

function createTechnologyItem(tech) {
    return `
        <li class="technologies__item">
            <img class="technologies__logo" src="${tech.src}" alt="${tech.alt}">
        </li>
    `;
}

function createProjectCard(project, reverse = false) {
    return `
        <div class="projects__card ${reverse ? 'card__reverse' : ''}">
            <img class="card__cover" src="${project.coverSrc}" alt="">
            <div class="card__body">
                <h3 class="card__title">${project.title}</h3>
                <p class="card__description">${project.description}</p>
                <ul class="card__list">
                    ${project.features.map(createFeatureItem).join('')}
                </ul>
                <ul class="technologies__list">
                    ${project.technologies.map(createTechnologyItem).join('')}
                </ul>
                <div class="card__buttons">
                    <a href="${project.previewLink}">
                        <button class="btn btn--primary">
                            <span>PRÉVIA</span>
                            <i class="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                    <a href="${project.repoLink}">
                        <button class="btn">
                            <span>Repositório</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderProjects(containerId, projects) {
    const container = document.getElementById(containerId);
    container.innerHTML = projects.map((project, index) => createProjectCard(project, index % 2 !== 0)).join('');
}

renderProjects('projects-container', projects);
