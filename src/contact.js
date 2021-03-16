function contact() {
    const rootDiv = document.querySelector("#content");

    let contact = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Contact";
    title.style.fontStyle = "italic";
    title.style.fontSize = "4rem";
    title.style.textAlign = "center";

    // telephone contact
    let telephone = document.createElement("p");
    telephone.innerHTML = "Telephone<br>+39 081 446 643";
    telephone.style.fontSize = "3rem";
    telephone.style.textAlign = "center";

    // address map from Google
    let map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12071.910891005742!2d14.2553176!3d40.8504129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd02ed67d632a4e4!2sGino%20e%20Toto%20Sorbillo!5e0!3m2!1sen!2spl!4v1615923582187!5m2!1sen!2spl"
    map.width = "600";
    map.height = "450";
    map.loading = "lazy";
    map.style.margin = "0 auto";
    map.style.display = "block";

    contact.appendChild(title);
    contact.appendChild(telephone);
    contact.appendChild(map);
    rootDiv.appendChild(contact);
    
}

export {
    contact
}