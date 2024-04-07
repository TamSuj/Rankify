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

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //Credit: Stackoverflow
}

function editCardContent(card, artist) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = artist.name;

  const cardImage = card.querySelector("img");
  cardImage.src = artist.images[0].url;
  cardImage.alt = artist.name + " Image";

  const cardRank = card.querySelector(".card-rank ul");
  cardRank.innerHTML = "";
  const rankItem = document.createElement("li");
  rankItem.textContent = "#" + artist.popularity;
  cardRank.appendChild(rankItem);

  const cardFollowers = card.querySelector(".card-follower-count");
  cardFollowers.textContent =
    "Followers: " + formatNumber(artist.followers.total);

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
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function externalLinkAlert() {
  console.log("External URL clicked");
  alert("We're taking you to the external site");
}

// Sorting artist according to their rank (DES/ASC)
function sortBy(order) {
  switch (order) {
    case "NAME_ASC":
      response.artists.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "NAME_DESC":
      response.artists.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "POPULARITY":
      response.artists.sort((a, b) => a.popularity - b.popularity);
      break;
    default:
      alert("Invalid order");
      console.error("Invalid order");
  }

  showCards(); // Call showCards again to refresh
}
function filterGenre(type) {
  let filteredList = [];

  if (type === "POP") {
    filteredList = response.artists.filter((artist) =>
      artist.genres.includes("Pop"),
    );
  } else if (type === "R&B") {
    filteredList = response.artists.filter((artist) =>
      artist.genres.includes("R&B"),
    );
  } else if (type === "KPOP") {
    filteredList = response.artists.filter((artist) =>
      artist.genres.includes("K-pop"),
    );
  } else if (type === "ROCK") {
    filteredList = response.artists.filter((artist) =>
      artist.genres.includes("Rock"),
    );
  } else if (type === "EDM") {
    filteredList = response.artists.filter((artist) =>
      artist.genres.includes("EDM"),
    );
  } else if (type === "ELECTRONIC") {
    filteredList = response.artists.filter((artist) =>
      artist.genres.includes("Electronic"),
    );
  } else if (type === "ALL") {
    filteredList = response.artists;
  } else {
    console.error("Invalid genre");
  }
  // something here
  updateCards(filteredList);
}

function updateCards(cardList) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  cardList.forEach((artist) => {
    titles.push(artist.name);

    const newCard = templateCard.cloneNode(true);
    editCardContent(newCard, artist);
    cardContainer.appendChild(newCard); // Add new card to the container
  });
}

function searchByName(name) {
  let nameSearched = document.getElementById("search-box").value;

  let filteredList = response.artists.filter((artist) =>
    artist.name.toLowerCase().includes(nameSearched.toLowerCase()),
  );

  if (filteredList.length === 0) alert("No artist found");
  else updateCards(filteredList);
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
      popularity: 55,
      type: "artist",
      uri: "spotify:artist:6zFYqv1mOsgBRQbae3JJ9e",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s",
      },
      followers: {
        href: null,
        total: 35000000,
      },
      genres: ["Pop", "R&B", "EDM"],
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
      popularity: 19,
      type: "artist",
      uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3Y6XU1eeMTMf8DbXgH9fv3",
      },
      followers: {
        href: null,
        total: 300000,
      },
      genres: ["Rock", "Indie Rock"],
      href: "https://api.spotify.com/v1/artists/3Y6XU1eeMTMf8DbXgH9fv3",
      id: "3Y6XU1eeMTMf8DbXgH9fv3",
      images: [
        {
          url: "https://m.media-amazon.com/images/M/MV5BYjdmY2YzNTItMmNhMi00MGExLTg1MmYtYTNlNzQwYTNiZGZiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "The Strokes",
      popularity: 1080,
      type: "artist",
      uri: "spotify:artist:3Y6XU1eeMTMf8DbXgH9fv3",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H",
      },
      followers: {
        href: null,
        total: 5500000,
      },
      genres: ["Pop", "R&B"],
      href: "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
      id: "5pKCCKE2ajJHZ9KAiaK11H",
      images: [
        {
          url: "https://i8.amplience.net/i/naras/GettyImages-1436969511.jpg?w=821&sm=c",
          height: 300,
          width: 300,
        },
      ],
      name: "Rihanna",
      popularity: 48,
      type: "artist",
      uri: "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5pKCCKE2ajJHZ9KAiaK11H",
      },
      followers: {
        href: null,
        total: 12500000,
      },
      genres: ["Pop", "K-pop"],
      href: "https://api.spotify.com/v1/artists/5pKCCKE2ajJHZ9KAiaK11H",
      id: "5pKCCKE2ajJHZ9KAiaK11H",
      images: [
        {
          url: "https://4kwallpapers.com/images/wallpapers/lisa-blackpink-thai-singer-asian-girl-k-pop-singer-3840x2160-3232.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "Lisa",
      popularity: 39,
      type: "artist",
      uri: "spotify:artist:5pKCCKE2ajJHZ9KAiaK11H",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d",
      },
      followers: {
        href: null,
        total: 1200000,
      },
      genres: ["K-pop"],
      href: "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",
      id: "1dfeR4HaWDbWqFHLkxsg1d",
      images: [
        {
          url: "https://6.soompi.io/wp-content/uploads/image/20230611150713_Jennie-1.jpg?s=900x600&e=t",
          height: 300,
          width: 300,
        },
      ],
      name: "Jennie",
      popularity: 92,
      type: "artist",
      uri: "spotify:artist:1dfeR4HaWDbWqFHLkxsg1d",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0FUVtG48rOGP9vVbFVGSgM",
      },
      followers: {
        href: null,
        total: 800000,
      },
      genres: ["K-pop"],
      href: "https://api.spotify.com/v1/artists/0FUVtG48rOGP9vVbFVGSgM",
      id: "0FUVtG48rOGP9vVbFVGSgM",
      images: [
        {
          url: "https://revistakoreain.com.br/wp-content/uploads/2022/04/Wonwoo-capa-1.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "Wonwoo",
      popularity: 150,
      type: "artist",
      uri: "spotify:artist:0FUVtG48rOGP9vVbFVGSgM",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4dpARuHxo51G3z768sgnrY",
      },
      followers: {
        href: null,
        total: 62000000,
      },
      genres: ["Pop", "R&B", "Funk"],
      href: "https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY",
      id: "4dpARuHxo51G3z768sgnrY",
      images: [
        {
          url: "https://www.khaosodenglish.com/wp-content/uploads/2024/01/246784523_10159868580947244_3075184647967836834_n-e1705463221321-696x464.jpeg",
          height: 300,
          width: 300,
        },
      ],
      name: "Bruno Mars",
      popularity: 32,
      type: "artist",
      uri: "spotify:artist:4dpARuHxo51G3z768sgnrY",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
      },
      followers: {
        href: null,
        total: 13000000,
      },
      genres: ["Pop", "Country", "Synth-pop"],
      href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
      id: "06HL4z0CvFAxyc27GXpf02",
      images: [
        {
          url: "https://media.npr.org/assets/img/2023/09/22/gettyimages-1250380030_slide-b7fd7fe615d89250cc78d56d4715c5af94355909.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "Taylor Swift",
      popularity: 8,
      type: "artist",
      uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr",
      },
      followers: {
        href: null,
        total: 20000000,
      },
      genres: ["Pop", "Jazz", "R&B"],
      href: "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
      id: "7n2wHs1TKAczGzO7Dd2rGr",
      images: [
        {
          url: "https://ew.com/thmb/ZQtnNJ4skaFbcGnZ4kZNfvKavhI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/JohnLegend_05_1161_G-a3119dc02563460d8e6545605b5da004.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "John Legend",
      popularity: 23,
      type: "artist",
      uri: "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6KImCVD70vtIoJWnq6nGn3",
      },
      followers: {
        href: null,
        total: 30000000,
      },
      genres: ["Pop", "Rock", "Indie"],
      href: "https://api.spotify.com/v1/artists/6KImCVD70vtIoJWnq6nGn3",
      id: "6KImCVD70vtIoJWnq6nGn3",
      images: [
        {
          url: "https://people.com/thmb/oYknHfU00T-5IJKaRP09XEcYgsU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/ed-sheeran-burn-exhibition-031523-1-732c6e09160745108c0e8a4fe1f4c52a.jpg",
          height: 300,
          width: 300,
        },
      ],
      name: "Ed Sheeran",
      popularity: 21,
      type: "artist",
      uri: "spotify:artist:6KImCVD70vtIoJWnq6nGn3",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
      },
      followers: {
        href: null,
        total: 15000000,
      },
      genres: ["Pop", "Rap", "Hip Hop"],
      href: "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
      id: "0L8ExT028jH3ddEcZwqJJ5",
      images: [
        {
          url: "https://theshaderoom.com/wp-content/uploads/2023/11/Muva-Tingz-Nicki-Minaj-Graces-Her-First-Cover-Of-American-Vogue-Speaks-On-Overcoming-Mom-Guilt-Self-Acceptance.jpg?w=1024",
          height: 300,
          width: 300,
        },
      ],
      name: "Nicki Minaj",
      popularity: 25,
      type: "artist",
      uri: "spotify:artist:0L8ExT028jH3ddEcZwqJJ5",
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5",
      },
      followers: {
        href: null,
        total: 1250000,
      },
      genres: ["Pop", "R&B"],
      href: "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
      id: "0L8ExT028jH3ddEcZwqJJ5",
      images: [
        {
          url: "https://i8.amplience.net/i/naras/IMG_2721",
          height: 300,
          width: 300,
        },
      ],
      name: "NIKI",
      popularity: 90,
      type: "artist",
      uri: "spotify:artist:0L8ExT028jH3ddEcZwqJJ5",
    },
  ],
};
