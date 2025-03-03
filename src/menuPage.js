import salmonImage from "./assets/salmon.jfif";

function loadMenuPage() {
    const contentDiv = document.getElementById('content');

    //create nested <div> containing menu items
    const contentMaterialDiv = document.createElement("div");
    contentMaterialDiv.classList.add('content-material');
    contentDiv.appendChild(contentMaterialDiv);

    /*
    create menu
    */
    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    contentMaterialDiv.appendChild(h1);

    //menu section 1
    const img1 = document.createElement('img');
    img1.src = salmonImage;
    contentMaterialDiv.appendChild(img1);

    const item1Desc = document.createElement('p');
    item1Desc.textContent = '$15.00 - savory, with a hint of tango';
    contentMaterialDiv.appendChild(item1Desc);

    //menu section 2
    
}

export {loadMenuPage};
