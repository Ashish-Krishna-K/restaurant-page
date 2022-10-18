import idli from './images/idli-vada.webp';
import dosa from './images/dosa.webp';
import kharaBath from './images/khara-bath.jpg';
import lemonRice from './images/lemon-rice.jpg';
import chai from './images/chai.jpg';
import coffee from './images/filter-coffee.webp';

export function createMenuPage() {

    const contentDiv = document.querySelector('#content');
    
    const main = document.createElement('main');
    main.setAttribute('id', 'menu-body');
    contentDiv.appendChild(main);

    const idliDiv = new MenuCard('idli-vada', idli);
    idliDiv.createCard();
    const dosaDiv = new MenuCard('dosa', dosa);
    dosaDiv.createCard();
    const kharaBathDiv = new MenuCard('khara-bath', kharaBath);
    kharaBathDiv.createCard();
    const lemonRiceDiv = new MenuCard('lemon-rice', lemonRice);
    lemonRiceDiv.createCard();
    const chaiDiv = new MenuCard('chai', chai);
    chaiDiv.createCard();
    const coffeeDiv = new MenuCard('filter-coffee', coffee);
    coffeeDiv.createCard();
}


class MenuCard {
    constructor (name, image) {
        this.name = name;
        this.imageURL = image;
    }
    createCard () {
        const menuItem = document.createElement('div');
        menuItem.setAttribute('id', this.name);

        const title = document.createElement('p');
        title.textContent = this.name;

        const itemImage = document.createElement('img');
        itemImage.src = this.imageURL;
        itemImage.alt = this.name;

        menuItem.appendChild(title);
        menuItem.appendChild(itemImage);

        document.querySelector('#menu-body').appendChild(menuItem);
    }
}