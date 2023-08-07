export default function generateHomePage(){
    const home = document.createElement('section');
    home.setAttribute("id", "home-page");

    const heading = document.createElement('h2');
    heading.textContent = "AUTHENTIC SOUTH INDIAN BREAKFAST";
    home.appendChild(heading);

    const img = document.createElement('img');
    // img.src = 
    home.appendChild(img);

    const p = document.createElement('p');
    p.textContent = "BENGALURU, KARNATAKA, INDIA - 000000";
    home.appendChild(p);

    return home;
}