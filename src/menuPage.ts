const menuItems = [
    { itemName: "IDLI-VADA", itemImg: "" },
    { itemName: "DOSA", itemImg: "" },
    { itemName: "KHARA-BATH", itemImg: "" },
    { itemName: "LEMON-RICE", itemImg: "" },
    { itemName: "CHAI", itemImg: "" },
    { itemName: "FILTER-COFFEE", itemImg: "" },
]

export default function generateMenuPage() {
    const menu = document.createElement('section');
    menu.setAttribute("id", "menu-page");

    const container = document.createElement('ul');
    container.classList.add('menu-container');

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

