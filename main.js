const wordContainer = document.querySelector('.word-container');
const startButton = document.querySelector('.start-button');
const wordLength = document.querySelector('.word-length');
const letterInput = document.querySelector('.letter-input');
const guessInput = document.querySelector('.guess-input');
const checkButton = document.querySelector('.check-button');
const guessButton = document.querySelector('.guess-button');
const letterContainer = document.querySelector('.letter-container');
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
let wordArr = [];
let usedLetterArr = [];
let myStr; 
let wrongLetterCount = 0;

const startGame = () => {
    wrongLetterCount = 0;
    wordArr.length = 0;
    usedLetterArr.length = 0;
    myStr = "";
    letterInput.value = "";
    guessInput.value = "";
    letterContainer.innerHTML = "";
    // fetch random word from dictionary api
    fetch("https://random-word-api.herokuapp.com/word")
    .then(data => {
        return data.json();
    })
    .then(res => {
        wordContainer.innerHTML = "";
        myStr = res.toString();
        [...myStr].forEach(letter => {
            const upperCase = letter.toUpperCase();
            wordArr.push(upperCase);
            let individualLetter = document.createElement("p");
            individualLetter.classList.add("letter");
            wordContainer.appendChild(individualLetter);
            individualLetter.innerText = upperCase;
        })
        wordLength.innerText = `Word Length: ${wordArr.length}`;
    })
}
startButton.addEventListener('click', startGame);

const checkLetter = () => {
    const letterInputUC = letterInput.value.toUpperCase();
    if (wordArr.length != 0 && letterInput.value != " " && letterInput.value != "") {
        if (usedLetterArr.includes(letterInputUC)) {
            alert('You already used that letter!'); 
        } else {
            usedLetterArr.push(letterInputUC);
            let usedLetterEl = document.createElement("p");
            usedLetterEl.innerText = letterInputUC;
            letterContainer.appendChild(usedLetterEl);
            wordArr.forEach((val, i) => {
                if (val == letterInputUC) {
                    wordContainer.childNodes[i].style.color = 'black';
                }
            });
            if (wordArr.includes(letterInputUC)) {
                return null
            } else {
                wrongLetterCount++;
                if (wrongLetterCount === 1) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                } else if (wrongLetterCount === 2) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                } else if (wrongLetterCount === 3) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                } else if (wrongLetterCount === 4) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                } else if (wrongLetterCount === 5) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                    drawLine(ctx, [220, 50], [280, 50], 'black', 5);
                    drawLine(ctx, [223, 50], [223, 105], 'black', 5);
                    drawLine(ctx, [277, 50], [277, 105], 'black', 5);
                    drawLine(ctx, [220, 103], [280, 103], 'black', 5);
                } else if (wrongLetterCount === 6) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                    drawLine(ctx, [220, 50], [280, 50], 'black', 5);
                    drawLine(ctx, [223, 50], [223, 105], 'black', 5);
                    drawLine(ctx, [277, 50], [277, 105], 'black', 5);
                    drawLine(ctx, [220, 103], [280, 103], 'black', 5);
                    drawLine(ctx, [250, 103], [250, 225], 'black', 5);
                } else if (wrongLetterCount === 7) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                    drawLine(ctx, [220, 50], [280, 50], 'black', 5);
                    drawLine(ctx, [223, 50], [223, 105], 'black', 5);
                    drawLine(ctx, [277, 50], [277, 105], 'black', 5);
                    drawLine(ctx, [220, 103], [280, 103], 'black', 5);
                    drawLine(ctx, [250, 103], [250, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [200, 225], 'black', 5);
                } else if (wrongLetterCount === 8) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                    drawLine(ctx, [220, 50], [280, 50], 'black', 5);
                    drawLine(ctx, [223, 50], [223, 105], 'black', 5);
                    drawLine(ctx, [277, 50], [277, 105], 'black', 5);
                    drawLine(ctx, [220, 103], [280, 103], 'black', 5);
                    drawLine(ctx, [250, 103], [250, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [200, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [297, 225], 'black', 5);
                } else if (wrongLetterCount === 9) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                    drawLine(ctx, [220, 50], [280, 50], 'black', 5);
                    drawLine(ctx, [223, 50], [223, 105], 'black', 5);
                    drawLine(ctx, [277, 50], [277, 105], 'black', 5);
                    drawLine(ctx, [220, 103], [280, 103], 'black', 5);
                    drawLine(ctx, [250, 103], [250, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [200, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [297, 225], 'black', 5);
                    drawLine(ctx, [250, 222], [200, 350], 'black', 5);
                } else if (wrongLetterCount === 10) {
                    drawLine(ctx, [20, 390], [400, 390], 'black', 5);
                    drawLine(ctx, [50, 0], [50, 390], 'black', 5);
                    drawLine(ctx, [50, 3], [250, 3], 'black', 5);
                    drawLine(ctx, [250, 0], [250, 50], 'black', 5);
                    drawLine(ctx, [220, 50], [280, 50], 'black', 5);
                    drawLine(ctx, [223, 50], [223, 105], 'black', 5);
                    drawLine(ctx, [277, 50], [277, 105], 'black', 5);
                    drawLine(ctx, [220, 103], [280, 103], 'black', 5);
                    drawLine(ctx, [250, 103], [250, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [200, 225], 'black', 5);
                    drawLine(ctx, [250, 120], [297, 225], 'black', 5);
                    drawLine(ctx, [250, 222], [200, 350], 'black', 5);
                    drawLine(ctx, [250, 222], [297, 350], 'black', 5);
                }
            }
            letterInput.value = "";
        }
    }
    
}
checkButton.addEventListener('click', checkLetter);

const checkWord = () => {
    if (guessInput.value == myStr) {
        wordArr.forEach((val, i) => {
                wordContainer.childNodes[i].style.color = 'rgb(22, 184, 22)';
        });
    } else {
        alert('Wrong answer!')
    }
}
guessButton.addEventListener('click', checkWord);

const drawLine = (ctx, begin, end, stroke = 'black', width = 1) => {
    if (stroke) {
        ctx.strokeStyle = stroke;
    }
    if (width) {
        ctx.lineWidth = width;
    }
    ctx.beginPath();
    ctx.moveTo(...begin);
    ctx.lineTo(...end);
    ctx.stroke();
}