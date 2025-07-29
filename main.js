const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");
lettersArray.forEach((letter) => {
    let span = document.createElement("span");
    span.className = "letter-box";
    let letterText = document.createTextNode(letter);
    span.appendChild(letterText);
    lettersContainer.appendChild(span);
})

const words = {
    Programming: ["C", "r", "javascript", "php", "py hon", "fortren", "scala", "mysql", "go"],
    People: ["hla", "ahmed", "samy", "samah", "deema", "heba", "hadeel", "raghda", "islam", "salam"],
    Country: ["syria", "palestine", "egypt", "saudia", "qatar", "france", "indonesia", "bahrain"],
    Moves: ["prestige", "inception", "parasite", "whiplash", "memento", "coco", "up"]
}

let keys = Object.keys(words);

let randomNumber = Math.floor(Math.random() * keys.length);

let randomName = keys[randomNumber];

let randomValue = words[randomName];

let randomValueValue = Math.floor(Math.random() * randomValue.length);

let randomword = randomValue[randomValueValue]


let categoryName = document.querySelector(".category span");
categoryName.innerHTML = randomName;

let letterGuess = document.querySelector(".letters-guess");
let letterGuessArray = Array.from(randomword.toLowerCase());


letterGuessArray.forEach((letter) => {
    let span = document.createElement("span");
    if (letter === " ") {
        span.className = "with-space";
    }
    letterGuess.appendChild(span)
});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let draw = document.querySelector(".hang-draw");
let inputWordArray = [];
let inputWord;

document.addEventListener("click", (e) => {
    let theStatus = false;

    if (e.target.className === "letter-box") {

        e.target.classList.add("clicked");

        let clickedLetter = e.target.innerHTML.toLowerCase();

        letterGuessArray.forEach((wordLetter, wordIndex) => {

            if (clickedLetter == wordLetter) {

                theStatus = true;

                guessSpans.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex) {

                        span.innerHTML = wordLetter;

                        inputWordArray[wordIndex] = wordLetter;

                    }
                }
                )
            }

        }
        )
        inputWord = inputWordArray.join("");

        if (theStatus !== true) {

            wrongAttempts++;

            draw.classList.add(`wrong-${wrongAttempts}`);

            document.getElementById("fail").play();

            if (wrongAttempts == 8) {

                lettersContainer.classList.add("finished");

                gameOver();
            }
        } else {
            document.getElementById("success").play();
        }
    }
    if (inputWord == randomword) {
        gameSuccess();
    }
})

function gameOver() {
    let div = document.createElement("div");
    div.className = "popup";
    let txt = document.createTextNode(`Game Over, The Word is "${randomword}"`);
    div.appendChild(txt);
    document.body.appendChild(div)
}

function gameSuccess() {
    let div = document.createElement("div");
    div.className = "success";
    let txt = document.createTextNode(`Great! Your Success`);
    div.appendChild(txt);
    document.body.appendChild(div)
}