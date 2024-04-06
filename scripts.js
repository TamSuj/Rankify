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

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

const Artist = {
  img: String,
  name: String,
  rank: Number,
  genre: String,
  followers: Number,
  url: String,
};

// This is an array of strings (artist titles)
let titles = [];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  response.artists.forEach((artist) => {
    titles.push(artist.name);

    const newCard = templateCard.cloneNode(true);
    editCardContent(newCard, artist);
    cardContainer.appendChild(newCard); // Add new card to the container
  });
}

function editCardContent(card, artist) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = artist.name;

  const cardImage = card.querySelector("img");
  cardImage.src = artist.images[0].url;
  cardImage.alt = artist.name + "Image";

  const cardFollowers = card.querySelector(".card-follower-count");
  cardFollowers.textContent = "Followers: " + artist.followers.total;

  const cardGenre = card.querySelector(".card-genre ul");
  cardGenre.innerHTML = "";

  // Parse through the genres array and add them to the card as list items
  artist.genres.forEach((genre) => {
    const genreItem = document.createElement("li");
    genreItem.textContent = genre;
    cardGenre.appendChild(genreItem);
  });

  const cardLink = card.querySelector(".card-link a");
  cardLink.href = artist.external_urls.spotify;

  console.log("new card added for:", artist.name);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function externalLinkAlert() {
  console.log("External URL clicked");
  alert("We're taking you to the external site");
}

// Sorting artist according to their rank (DES/ASC)
function sortBy(order) {
  if (order === "ASC") {
    // ascending order
  } else if (order === "DES") {
    // descending order
  } else {
    console.error("Invalid order");
  }
  // something here
  showCards(); // Call showCards again to refresh
}
function filterGenre(type) {
  if (type === "POP") {
    // Pop genre
  } else if (type === "R&B") {
    // R&B genre
  } else if (type === "KPOP") {
    // KPOP genre
  } else if (type === "ROCK") {
    // Rock genre
  } else {
    console.error("Invalid genre");
  }
  // something here
  showCards(); // Call showCards again to refresh
}

const response = {
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1WgXqy2Dd70QQOU7Ay074N",
      },
      followers: {
        href: null,
        total: 1500000,
      },
      genres: ["Pop", "Electronic"],
      href: "https://api.spotify.com/v1/artists/0fA0VVWsXO9YnASrzqfmYu",
      id: "0fA0VVWsXO9YnASrzqfmYu",
      images: [
        {
          url: "https://media.freemalaysiatoday.com/wp-content/uploads/2022/02/aurora.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "Aurora",
      popularity: 85,
      type: "artist",
      uri: "spotify:artist:0fA0VVWsXO9YnASrzqfmYu",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6zFYqv1mOsgBRQbae3JJ9e",
      },
      followers: {
        href: null,
        total: 2200000,
      },
      genres: ["Indie Pop", "Alternative"],
      href: "https://api.spotify.com/v1/artists/6zFYqv1mOsgBRQbae3JJ9e",
      id: "6zFYqv1mOsgBRQbae3JJ9e",
      images: [
        {
          url: "https://images.squarespace-cdn.com/content/v1/5a355fe7914e6bb1202ca3e0/1628619907296-DBZ3O75NYY67AT0X7W3C/byOpheliaMikkelsonJones.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "Lorde",
      popularity: 88,
      type: "artist",
      uri: "spotify:artist:6zFYqv1mOsgBRQbae3JJ9e",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
      },
      followers: {
        href: null,
        total: 65000000,
      },
      genres: ["Pop", "R&B"],
      href: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
      id: "1uNFoZAHBGtllmzznpCI3s",
      images: [
        {
          url: "https://www.rollingstone.com/wp-content/uploads/2023/03/GettyImages-1235241426-1.jpg?w=1581&h=1054&crop=1",
          height: 300,
          width: 300,
        },
      ],
      name: "Justin Bieber",
      popularity: 93,
      type: "artist",
      uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
    },
  ],
};
