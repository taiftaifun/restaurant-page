import {navbar} from "./navbar";
import {home} from "./home";
import {menu} from "./menu";
import {contact} from "./contact";
navbar();
home();

// navbar functionality
const rootDiv = document.querySelector("#content");
const navbarBtns = Array.from(document.querySelectorAll("li"));
navbarBtns.forEach(btn => btn.addEventListener("click", navigate));

function purgeContent() {
    rootDiv.innerHTML = "";
}
function navigate(e) {
    purgeContent();
    const id = e.target.id;
    if(id == "home") {
        home();
    } else if(id == "menu") {
        menu();
    } else if(id == "contact") {
        contact();
    }
}