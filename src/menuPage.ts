import idlivada from './images/idli-vada.webp';
import dosa from './images/dosa.webp';
import kharabath from './images/khara-bath.jpg';
import lemonrice from './images/lemon-rice.jpg';
import chai from './images/chai.jpg';
import filterCoffee from './images/filter-coffee.webp';

// An array of objects corresponding to the menu item, each object
// contains the menu item name and the corresponding image for the 
// menu item, we will loop through this array and pass the data to 
// the createMenuItem function which will return an element 
// corresponding to the menu item
const menuItems = [
    { itemName: "IDLI-VADA", itemImg: idlivada },
    { itemName: "DOSA", itemImg: dosa },
    { itemName: "KHARA-BATH", itemImg: kharabath },
    { itemName: "LEMON-RICE", itemImg: lemonrice },
    { itemName: "CHAI", itemImg: chai },
    { itemName: "FILTER-COFFEE", itemImg: filterCoffee },
]

export default function generateMenuPage() {
    const menu = document.createElement('section');
    menu.setAttribute("id", "menu-page");

    const container = document.createElement('ul');
    container.classList.add('menu-container');

    // loop through the menuItems array passing each object to the
    // createMenuItem function and append the element returned by that
    // function to the container.
    menuItems.forEach(item => {
        const { itemName, itemImg } = item;
        container.appendChild(createMenuItem(itemName, itemImg));
    })

    menu.appendChild(container);
    return menu;
}

const createMenuItem = (itemName: string, imgUrl: string) => {
    const li = document.createElement('li');
    li.classList.add('menu-item');

    const itemNameHeading = document.createElement('h3');
    itemNameHeading.textContent = itemName;
    li.appendChild(itemNameHeading);

    const itemImg = document.createElement('img');
    itemImg.src = imgUrl;
    li.appendChild(itemImg);

    return li;
}

