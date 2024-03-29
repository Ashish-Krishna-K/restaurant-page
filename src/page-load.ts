import switchTabs from "./index";
import generateHomePage from "./homePage";


const createHeader = (): HTMLElement => {
    const header = document.createElement('header');

    const heading = document.createElement('h1');
    heading.textContent = "BHAT'S THINDI MANE";

    header.appendChild(heading);
    header.appendChild(createNavbar());
    return header;
}

const createNavbar = (): HTMLElement => {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.classList.add('nav-bar');

    const homeTab = document.createElement('li');
    homeTab.setAttribute("id", "home-tab");
    homeTab.classList.add('nav-element', 'selected');
    homeTab.textContent = "HOME";
    // we'll grab this value when it's clicked and use it to determine
    // which page to render.
    homeTab.value = 0;
    homeTab.addEventListener("click", switchTabs);
    ul.appendChild(homeTab);

    const menuTab = document.createElement('li');
    menuTab.setAttribute("id", "menu-tab");
    menuTab.classList.add('nav-element');
    menuTab.textContent = "MENU";
    menuTab.value = 1;
    menuTab.addEventListener("click", switchTabs);
    ul.appendChild(menuTab);

    const contactTab = document.createElement('li');
    contactTab.setAttribute("id", "contact-tab");
    contactTab.classList.add('nav-element');
    contactTab.textContent = "CONTACT";
    contactTab.value = 2;
    contactTab.addEventListener("click", switchTabs);
    ul.appendChild(contactTab);

    nav.appendChild(ul);
    return nav
}

const createMain = (): HTMLElement => {
    const main = document.createElement('main');
    // createMain is called only on the initial page load, and by default
    // we want the homePage to be rendered.
    main.appendChild(generateHomePage());
    return main;
}

const createFooter = (): HTMLElement => {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const link = document.createElement('a');

    link.setAttribute("href", `https://github.com/Ashish-Krishna-K`);
    link.textContent = 'Ashish-Krishna-K';

    p.textContent = 'Project by '
    p.appendChild(link);

    footer.append(p);
    return footer;
}

export default function loadPage() {
    const contentDiv = document.querySelector('div#content');

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createFooter());
}