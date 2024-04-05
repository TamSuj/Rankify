/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

import { response } from "./resources/response.js";
const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

let Artist = {
    img: String,
    name: String,
    rank: Number,
    genre: String,
    followers: Number,
    url: String,
}

// This is an array of strings (artist titles)
let titles = [
    "Fresh Prince of Bel Air",
    "Curb Your Enthusiasm",
    "East Los High"
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    response.artists.forEach(artist => {
        const newCard = templateCard.cloneNode(true);
        editCardContent(newCard, artist)
        cardContainer.appendChild(newCard); // Add new card to the container 
    });
}

function editCardContent(card, artist) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = artist.name;

    const cardRank = card.rank
    cardRank.textContent = artist.rank

    const cardDetail = card.getElementById("card-description")
    cardDetail.link.textContent = artist.external_urls.spotify
    cardDetail.followerCount.textContent = artist.followers
    cardDetail.genres.textContent = artist.genres

    const cardImage = card.querySelector("img");
    cardImage.src = artist.images.url;
    cardImage.alt = artist.name + "image";

    console.log("new card added for:", artist.name, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function externalLinkAlert() {
    console.log("External URL clicked")
    alert("We're taking you to the external site");
}

// Sorting artist according to their rank (DES/ASC)
function sortByRank() {
    // something here
    showCards(); // Call showCards again to refresh
}
