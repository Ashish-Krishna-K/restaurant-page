import { loadPage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

import '../dist/style.css';

const createPage = loadPage();

createPage.createHeader();

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

createPage.createHomePage();

homeButton.addEventListener('click', function(){
    createPage.removeContent();
    createPage.createHomePage();
    this.classList.add('current');
    menuButton.classList.remove('current');
    contactButton.classList.remove('current');
});
menuButton.addEventListener('click', function(){
    createPage.removeContent();
    createMenuPage();
    this.classList.add('current');
    homeButton.classList.remove('current');
    contactButton.classList.remove('current');
});
contactButton.addEventListener('click', function(){
    createPage.removeContent();
    createContactPage();
    this.classList.add('current');
    menuButton.classList.remove('current');
    homeButton.classList.remove('current');
});
