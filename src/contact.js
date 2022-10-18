export function createContactPage() {
    
    const contentDiv = document.querySelector('#content');

    const main = document.createElement('main');
    main.setAttribute('id', 'contact-body');
    contentDiv.appendChild(main);

    const heading = document.createElement('h1');
    heading.setAttribute('id', 'contact-heading');
    heading.textContent = "Contact us"
    main.appendChild(heading);

    const phNumber = document.createElement('p');
    phNumber.setAttribute('id', 'phone-number');
    phNumber.textContent = "Call us at 080-123456"
    main.appendChild(phNumber);
    
    const emailAddress = document.createElement('p');
    emailAddress.setAttribute('id', 'email');
    emailAddress.textContent = "Email us at bhatthindimane@email.com";
    main.appendChild(emailAddress);
}