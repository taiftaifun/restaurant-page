function contact() {
    const rootDiv = document.querySelector("#content");

    let contact = document.createElement("div");
    contact.textContent = "halko dupa co tam";

    rootDiv.appendChild(contact);
}

export {
    contact
}