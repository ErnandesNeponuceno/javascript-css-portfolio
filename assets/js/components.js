const menuData = [
    { text: "Home", href: "#home", icon: "bi bi-house-door" },
    { text: "Projetos", href: "#projetos", icon: "bi bi-window-stack" },
    { text: "Sobre", href: "#sobre", icon: "bi bi-person" },
    { text: "Contato", href: "#contato", icon: "bi bi-envelope" }
];

const technologies = [
    { src: "assets/img/tech/css.png", alt: "Logo CSS" },
    { src: "assets/img/tech/javascript.png", alt: "Logo Javascript" },
    { src: "assets/img/tech/angular.png", alt: "Logo Angular" },
    { src: "assets/img/tech/typeScript.png", alt: "Logo TypeScript" },
    { src: "assets/img/tech/bootstrap.png", alt: "Logo Bootstrap" },
    { src: "assets/img/tech/salesforce.png", alt: "Logo Salesforce" },
    { src: "assets/img/tech/tailwind.png", alt: "Logo Tailwind" }
];


function createMenuItem(item, isActive = false) {
    const menuItem = document.createElement('li');
    menuItem.className = 'menu__item';

    const link = document.createElement('a');
    link.className = 'menu__link';
    if (isActive) {
        link.classList.add('active');
    }
    link.href = item.href;
    link.innerHTML = `
    <i class="menu__icon ${item.icon}"></i>
    <span class="menu__text">${item.text}</span>
    `;

    menuItem.appendChild(link);
    return menuItem;
}

function renderMenuItems(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 
    items.forEach((item, index) => {
        const menuItem = createMenuItem(item, index === 0); 
        container.appendChild(menuItem);
    });
    
    const menuLinks = container.querySelectorAll(".menu__link");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

function createTechnologyItem(tech) {
    return `
    <li class="technologies__item">
        <img class="technologies__logo" src="${tech.src}" alt="${tech.alt}">
    </li>
    `;
}

renderMenuItems('menu-container', menuData);
renderMenuItems('menu-mobile-container', menuData);

function createTechnologyItem(tech) {
    return `
    <li class="technologies__item">
        <img class="technologies__logo" src="${tech.src}" alt="${tech.alt}">
    </li>
    `;
}
const techList = document.getElementById('technologies-container');
techList.innerHTML = technologies.map(createTechnologyItem).join('');