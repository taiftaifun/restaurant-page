function frontpage() {
    const rootDiv = document.querySelector("#content");
    let dupadiv = document.createElement("div");
    dupadiv.textContent = "dupiszon";
    rootDiv.appendChild(dupadiv);
    let frontpageImage = document.createElement("img");
    frontpageImage.setAttribute("src", "https://warsawfoodie.pl/wp-content/uploads/2020/07/spaccanapoli_2.png");
    rootDiv.appendChild(frontpageImage);
}

export {
    frontpage
}