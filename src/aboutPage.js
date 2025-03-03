function loadAboutPage() {
    const page = document.getElementById('content');

    //attach about card to page
    const aboutCard = document.createElement("div");
    aboutCard.classList.add('content-material');
    page.appendChild(aboutCard);

    //fill about card with header
    const h1 = document.createElement("h1");
    h1.textContent = "About";
    aboutCard.appendChild(h1);

    //fill about card with description
    const about1Desc = document.createElement("p");
    about1Desc.textContent = "Founded in 1998, our restaurant has been a cornerstone of coastal dining, offering the freshest seafood sourced directly from local fishermen and sustainable fisheries. Nestled along the waterfront, we take pride in serving a menu that celebrates the ocean’s bounty, from succulent lobster and buttery scallops to perfectly grilled fish and signature chowders. At the heart of our restaurant is a passion for quality, hospitality, and the simple joy of a well-prepared meal. Our chefs craft each dish with care, using time-honored recipes alongside innovative culinary techniques to bring out the natural flavors of the sea. Whether you're here for a casual bite, a romantic dinner, or a gathering with friends and family, we strive to create an unforgettable dining experience. With a warm, inviting atmosphere and stunning views, our restaurant is more than just a place to eat—it’s a destination for seafood lovers. Join us and savor the taste of the ocean, one bite at a time.";
    aboutCard.appendChild(about1Desc);
}

export {loadAboutPage};