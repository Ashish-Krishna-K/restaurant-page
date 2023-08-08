import loadPage from "./page-load";
import generateHomePage from "./homePage";
import generateMenuPage from "./menuPage";
import generateContactPage from "./contactPage";
import './styles/index.css';

const removeSelectedClass = () => {
    // remove selected class from all the tabs
    const navBar = document.querySelectorAll('li.nav-element');
    navBar.forEach(li => li.classList.remove('selected'));
}

const addCurrentTabClass = (tab: HTMLLIElement) => {
    // remove the current selected class
    removeSelectedClass();
    tab.classList.add('selected');
}

export default function switchTabs(this: HTMLLIElement, ev: MouseEvent) {
    // Selected tab should be assigned with selected class
    addCurrentTabClass(this);
    const main = document.querySelector('main');
    // below class adds an opacity of 0 to give it an appearance
    // of fading away
    main.classList.add('render-animation');
    // the rendering is synced with opacity transition to give it 
    // appearance of fading in
    setTimeout(() => {
        // remove current content of main
        main.removeChild(main.firstChild);
        // render correct page based on selected tab's value
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
        main.classList.remove('render-animation');
    }, 500);
}

// render the inital page.
loadPage();