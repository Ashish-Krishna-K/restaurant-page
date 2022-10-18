import HomeImage from '/images/idli-vada.webp';

const contentDiv = document.querySelector('#content');

const loadPage = () => {

    function createHeader() {

        const headerDiv = document.createElement('header');
        headerDiv.setAttribute('id', 'header');
        
        const homeBtnDiv = document.createElement('div');
        homeBtnDiv.setAttribute('id', 'home-button');
        homeBtnDiv.textContent = "Home";
        const menuBtnDiv = document.createElement('div');
        menuBtnDiv.setAttribute('id', 'menu-button');
        menuBtnDiv.textContent = "Menu";
        const contactBtnDiv = document.createElement('div');
        contactBtnDiv.setAttribute('id', 'contact-button');
        contactBtnDiv.textContent = "Contact";
        
        headerDiv.textContent = 'My Restaurant';
        headerDiv.appendChild(homeBtnDiv);
        headerDiv.appendChild(menuBtnDiv);
        headerDiv.appendChild(contactBtnDiv);

        contentDiv.appendChild(headerDiv);
    };

    function createBody() {

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
        locationElement.textContent = "Random address";

        main.appendChild(imageElement);
        main.appendChild(descElement);
        main.appendChild(locationElement);

        contentDiv.appendChild(main);

    };

    return {
        createHeader,
        createBody
    }
    
};

export { loadPage }