// pageLoad.js
import restaurantImage from "./assets/restaurant.jfif";

function loadPage() {
    const div = document.getElementById("content");

    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const p = document.createElement("p");

    h1.textContent = "My Restaurant";
    img.src = restaurantImage;
    p.textContent = "This isn't just any restaurant - it's an amazing restaurant.";

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
}

export {loadPage};

