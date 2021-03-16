function menu() {
    const rootDiv = document.querySelector("#content");

    let menu = document.createElement("div");
    let title = document.createElement("h1");
    title.textContent = "Menu";
    title.style.fontStyle = "italic";
    title.style.fontSize = "4rem";
    title.style.textAlign = "center";

    let dishes = document.createElement("img");
    dishes.src = "https://b.zmtcdn.com/data/menus/759/16301759/44fc2562372fdd85a09a38cb9aa4def3.jpg";
    dishes.style.margin = "0 auto";
    dishes.style.display = "block";

    menu.appendChild(title);
    menu.appendChild(dishes);
    rootDiv.appendChild(menu);
}

export {
    menu
}