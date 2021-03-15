function navbar() {
    const body = document.querySelector("body");    
    const navbar = document.querySelector("#navbar");
    navbar.style.display = "flex";
    navbar.style.flexDirection = "row";
    navbar.style.fontSize = "2rem";
    navbar.style.justifyContent = "flex-end";
    navbar.style.marginRight = "2rem";

    // create and style tabs
    const home = document.createElement("li");
    home.id = "home";
    home.textContent = "Home";
    home.style.listStyleType = "none";
    home.style.margin = "0.5rem 1rem";
    home.style.cursor = "pointer";
    const menu = document.createElement("li");
    menu.textContent = "Menu";
    menu.id = "menu";
    menu.style.listStyleType = "none";
    menu.style.margin = "0.5rem 1rem";
    menu.style.cursor = "pointer";
    const contact = document.createElement("li");
    contact.textContent = "Contact";
    contact.id = "contact";
    contact.style.listStyleType = "none";
    contact.style.margin = "0.5rem 1rem";
    contact.style.cursor = "pointer";

    // append children
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
}

export {
    navbar
}