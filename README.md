#restaurant-page

A basic webpage with tab-switch type of navigation built as part of [The Odin Project's]() JavaScript source to practice using Webpack. 

*This project was initially built during my first run of the odin project, during my second run i'm reworking all the projects however this time I have a better understanding due to having more knowledge. For all my reworks, I have chose to use typescript as a practice. For this rework I have chose to retain the original assets and design, only adding a little bit of flair using CSS transitions.*

## The UI

Fairly simple, it's a basic single page webpage, with a tab-switch type of navigation to navigate through 3 pages, and some CSS transitions to make it prettier.

## The script

Since this is a practice for using ES6 modules, the overall script is split into multiple modules.

### index.ts

The main/index script, it controls the total rendering and the tab-switching logic. It has the **removeSelectedClass** and **addCurrentTabClass** helper fucntions which does what the name describes, the acutal tabSwitch logic is inside the **switchTabs** function which is exported, as it's used as the event listener

Finally it calls the **loadPage** function to render the inital page.

### page-load.ts

The page-load module contains the overall skeleton of the webpage and also exposes the function which renders the page on initial page load.
We first declare the **createHeader**, **createNavbar**, **createMain**, **createFooter** functions to generate the respective HTML elements, and then in the exported **loadPage** function we will call these functions and append it to the content div.

### homePage.ts

This is straight forward, we first import the image used in the homepage, and then in the **generateHomePage** function we create a section, containing a h2 heading, an img tag where the src is set to the imported image and also a p element and return this section.

### menuPage.ts

This modules involves some logic to avoid duplication of code. First we import all the images, then we create the menuItems array. This array holds the objects corresponding to each menu item, the object in turn holds the item name and the imported image (it's basically a variable holding the url to the image, hence it's typed as string)

The generateMenuPage function will create a section holding the menu container, it loops through menuItems array passing each itemName and itemUrl to the **createMenuItem** function and appends the li element returned by that function to the container and returns the menu-section.

### contactPage.ts

Finally we have the super basic contactPage module, it simply exports the **generateContactPage** function, which in turn returns a section holding the required h2 and p elements

### declaration.d.ts

This file was required to make the webpack importing of the images work as expected.