import loadPage from "./page-load";
import generateHomePage from "./homePage";
import generateMenuPage from "./menuPage";
import generateContactPage from "./contactPage";
import './styles/index.css';

const removeSelectedClass = () => {
    const navBar = document.querySelectorAll('li.nav-element');
    navBar.forEach(li => li.classList.remove('selected'));
}

const addCurrentTabClass = (tab: HTMLLIElement) => {
    removeSelectedClass();
    tab.classList.add('selected');
}

export default function switchTabs(this: HTMLLIElement, ev: MouseEvent) {
    addCurrentTabClass(this);
    const main = document.querySelector('main');
    main.removeChild(main.firstChild);
    switch (this.value) {
        case 0:
            main.appendChild(generateHomePage());
            break;
        case 1:
            main.appendChild(generateMenuPage());
            break;
        case 2:
            main.appendChild(generateContactPage());
            break;
    }
}

loadPage();