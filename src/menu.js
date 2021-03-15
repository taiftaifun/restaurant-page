function menu() {
    const rootDiv = document.querySelector("#content");

    let menu = document.createElement("div");
    menu.textContent = "kurwiszon dupiszon!";

    rootDiv.appendChild(menu);
}

export {
    menu
}