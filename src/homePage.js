import restaurantImage from "./assets/restaurant.jfif";

function loadHomePage() {
    const contentDiv = document.getElementById("content");

    const contentMaterialDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");

    contentMaterialDiv.classList.add("content-material");

    h1.textContent = "My Restaurant";
    img.src = restaurantImage;
    p.textContent = "This isn't just any restaurant - it's an amazing restaurant.";

    contentDiv.appendChild(contentMaterialDiv);
    contentMaterialDiv.appendChild(h1);
    contentMaterialDiv.appendChild(img);
    contentMaterialDiv.appendChild(p);
}

export {loadHomePage};

