import HomeImage from './images/main.webp';

const contentDiv = document.querySelector('#content');

const loadPage = () => {

    function createHeader() {

        const headerDiv = document.createElement('header');
        headerDiv.setAttribute('id', 'header');

        const siteName = document.createElement('h1');
        siteName.setAttribute('id', 'site-name');
        siteName.textContent = "Bhat's Thindi Mane";

        const holderDiv = document.createElement('div');
        holderDiv.setAttribute('id', 'nav-bar');
        
        const homeBtnDiv = document.createElement('div');
        homeBtnDiv.setAttribute('id', 'home-button');
        homeBtnDiv.textContent = "Home";
        const menuBtnDiv = document.createElement('div');
        menuBtnDiv.setAttribute('id', 'menu-button');
        menuBtnDiv.textContent = "Menu";
        const contactBtnDiv = document.createElement('div');
        contactBtnDiv.setAttribute('id', 'contact-button');
        contactBtnDiv.textContent = "Contact";

        holderDiv.appendChild(homeBtnDiv);
        holderDiv.appendChild(menuBtnDiv);
        holderDiv.appendChild(contactBtnDiv);
        
        headerDiv.appendChild(siteName);
        headerDiv.appendChild(holderDiv);

        contentDiv.appendChild(headerDiv);
    };

    function createHomePage() {

        const main = document.createElement('main');
        main.setAttribute('id', 'home-body');

        const imageElement = document.createElement('img');
        imageElement.src = HomeImage;
        imageElement.alt = 'Idli Vada Image';
    
        const descElement = document.createElement('p');
        descElement.textContent = "Authentic South Indian Breakfast";
        descElement.setAttribute('id', 'intro-line');
    
        const locationElement = document.createElement('p');
        locationElement.setAttribute('id', 'address');
        locationElement.textContent = "Bengaluru, Karnataka, India - 000000";

        main.appendChild(descElement);
        main.appendChild(imageElement);
        main.appendChild(locationElement);

        contentDiv.appendChild(main);

    };

    function removeContent() {
        const content = document.querySelector('main');
        content.remove();
    }


    return {
        createHeader,
        createHomePage,
        removeContent
    }
    
};

export { loadPage }