import {
    quotes
} from "./quotes.js"

import {
    colors
} from "./colors.js"


const button = document.querySelector(".btn")
const quoteText = document.querySelector(".quote")
const authorText = document.querySelector(".author")
const card = document.querySelector(".color")

let maxQuotes = quotes.length;
let maxColors = colors.length;

function randomize() {
    let randomInt = Math.floor(Math.random() * maxQuotes);
    let randomColor = Math.floor(Math.random() * maxColors);

    quoteText.innerHTML = quotes[randomInt].quote;
    authorText.innerHTML = quotes[randomInt].author;

    quoteText.innerHTML = quotes[randomInt].quote;
    authorText.innerHTML = quotes[randomInt].author;
    card.style.background = colors[randomColor];
}


randomize();


button.addEventListener("click", randomize)