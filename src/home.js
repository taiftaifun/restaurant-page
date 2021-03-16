function home() {
    const rootDiv = document.querySelector("#content");
    const body = document.querySelector("body");
    const head = document.querySelector("head");

    // link the font
    let fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
    fontLink.rel = "stylesheet";

    // style the body
    body.style.backgroundColor = "rgb(255, 255, 223)";
    body.style.fontFamily = "Roboto";
    body.style.fontSize = "15px";

    // create and style the title
    let title = document.createElement("h1");
    title.textContent = "Sorbillo";
    title.style.fontStyle = "italic";
    title.style.fontSize = "4rem";
    title.style.textAlign = "center";

    // create and style the image
    let frontpageImage = document.createElement("img");
    frontpageImage.setAttribute("src", "https://media-cdn.tripadvisor.com/media/photo-s/15/f0/aa/f7/img-20190102-225818-largejpg.jpg");
    frontpageImage.style.borderRadius = "0.5rem";
    frontpageImage.style.margin = "0 auto";
    frontpageImage.style.width = "35%";
    frontpageImage.style.display = "block";

    // create and style some generic copy
    let copy = document.createElement("p");
    copy.innerHTML = ("Welcome to Sorbillo, one of the oldest pizzeria\
    in Naples, open since 1859<br>Drop by and taste our legendary margharita!");
    copy.style.fontSize = "1.5rem"
    copy.style.textAlign = "center";
    copy.style.width = "50%";
    copy.style.margin = "2rem auto";
        
    // append all elements
    head.appendChild(fontLink);
    rootDiv.appendChild(title);
    rootDiv.appendChild(frontpageImage);
    rootDiv.appendChild(copy);
}

export {
    home
}