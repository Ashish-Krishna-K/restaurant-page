import loadPage from "./page-load";
import generateHomePage from "./homePage";
import generateMenuPage from "./menuPage";
import generateContactPage from "./contactPage";

export default function switchTabs(this: HTMLLIElement, ev: MouseEvent) {
    const main = document.querySelector('main');
    removeSelectedClass();
    this.classList.add('selected');
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

const removeSelectedClass = () => {
    const navBar = document.querySelectorAll('li.nav-element');
    navBar.forEach(li => li.classList.remove('selected'));
}

loadPage();