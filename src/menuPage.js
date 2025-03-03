import salmonImage from "./assets/salmon.jfif";
import fishTacoImg from "./assets/fish-taco.jfif";

function loadMenuPage() {
    const contentDiv = document.getElementById('content');

    //create nested <div> containing menu items
    const contentMaterialDiv = document.createElement("div");
    contentMaterialDiv.classList.add('content-material');
    contentDiv.appendChild(contentMaterialDiv);

    /*
    build menu
    */

    //menu header
    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    contentMaterialDiv.appendChild(h1);

    //build menu card 1

    //attach menu card to menu
    const menuItem1Div = document.createElement("div");
    menuItem1Div.classList.add("menu-card");
    contentMaterialDiv.appendChild(menuItem1Div);

    //create image and description
    const img1 = document.createElement('img');
    img1.src = salmonImage;
    const item1Desc = document.createElement('p');
    item1Desc.textContent = '$15.00 - savory, with a hint of tango';

    //attach image and description to card
    menuItem1Div.appendChild(img1);
    menuItem1Div.appendChild(item1Desc);


    //build menu card 2

    //attach menu card to menu
    const menuItem2Div = document.createElement("div");
    menuItem2Div.classList.add("menu-card");
    contentMaterialDiv.appendChild(menuItem2Div);

    //create image and description
    const img2 = document.createElement('img');
    const item2Desc = document.createElement('p');
    item2Desc.textContent = '$12.00 - one of our finer items';
    img2.src = fishTacoImg;

    //attach image and description to card
    menuItem2Div.appendChild(img2);
    menuItem2Div.appendChild(item2Desc);
}

export {loadMenuPage};
