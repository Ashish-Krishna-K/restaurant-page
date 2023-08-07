export default function generateContactPage() {
    const contact = document.createElement('section');
    contact.setAttribute("id", "contact-page");

    const heading = document.createElement('h2');
    heading.textContent = "CONTACT US";
    contact.appendChild(heading);

    const phone = document.createElement('p');
    phone.textContent = "CALL US AT 080-123456";
    contact.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "EMAIL US AT BHATTHINDIMANE@EMAIL.COM";
    contact.appendChild(email);

    return contact;
}