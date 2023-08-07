import switchTabs from "./logic";


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
    
    const homeTab = document.createElement('li');
    homeTab.setAttribute("id", "home-tab");
    homeTab.textContent = "HOME";
    homeTab.addEventListener("click", switchTabs);
    ul.appendChild(homeTab);
    
    const menuTab = document.createElement('li');
    menuTab.setAttribute("id", "menu-tab");
    menuTab.textContent = "MENU";
    menuTab.addEventListener("click", switchTabs);
    ul.appendChild(menuTab);
    
    const contactTab = document.createElement('li');
    contactTab.setAttribute("id", "contact-tab");
    contactTab.textContent = "CONTACT";
    contactTab.addEventListener("click", switchTabs);
    ul.appendChild(contactTab);
    
    nav.appendChild(ul);
    return nav
}

const createMain = ():HTMLElement => {
    return document.createElement('main');
}

const createFooter = ():HTMLElement => {
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