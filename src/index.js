import "./styles.css";
import { loadHomePage } from "./homePage";
import { loadMenuPage } from "./menuPage";

loadHomePage();

//add event listeners to each button in the header navbar to load the corresponding page
document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", () => {
        //wipe out the contents of <div> #content
        const contentDiv = document.getElementById("content");
        contentDiv.textContent = '';

        //load a different page
        if (element.textContent === 'Menu') {
            loadMenuPage();
        } else if (element.textContent === 'Home') {
            loadHomePage();
        }
    });
});
