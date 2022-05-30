const buttonElements = document.querySelectorAll('button');
let row = 1;
let  letter =  1;
const wordForTheDay = 'Light';
const wordElements = document.querySelectorAll('.words-row');
let gameOver = false;
let guessedCorrectly = false;


buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        keypress(element.attributes["data-key"].value)
    });
});

function populateWord(key) {
    if (letter < 6) {
    wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
       letter += 1;
    }
}

function checkWord() {
   const letterElements = wordElements[row - 1].querySelectorAll('.word');
    let numofCorrectAlphabets = 0;

   letterElements.forEach((element, index) => {
    const indexofLetterInWordofTheDay = wordForTheDay.toLowerCase().indexOf
    (element.innerText.toLowerCase());

    if (indexofLetterInWordofTheDay === index) {
        numofCorrectAlphabets += 1;
        element.classList.add('word-green');
    } else if (indexofLetterInWordofTheDay > 0) {
        element.classList.add('word-yellow');
    } else {
        element.classList.add('word-grey');
    }

   });

   if(numofCorrectAlphabets === 5) {
       gameOver = true;
       guessedCorrectly = true;
       alert('Congratulations! You have guessed the word for the day.');
   } else if (row == 6){
       gameOver = true;
       alert('Better luck next time. The word was: ' + wordForTheDay);
   }
}


function enterWord() {
    if (letter < 6) {
        alert('Not enough letters');
    } else {
        checkWord();
        row += 1;
        letter = 1;
    }
}

function deleteLetter () {
   const letterElements = wordElements[row - 1].querySelectorAll('.word');
   

    for (let index = letterElements.length -1; index > 0; index--) {
        console.log(letterElements[index].innerText);
        const element = letterElements[index];
        if (element.innerText !== '') {
            console.log('here');
        element.innerText === '';
        letter -= 1;
        break;
        }
    }


}

function keypress(key) {
    if (!gameOver) {
    if (key.toLowerCase() === 'enter') {
     enterWord();
    } else if (key.toLowerCase() === 'del') {
        deleteLetter();
    } else {
        populateWord(key);
    }
}else {
    alert('Game over! please play again tomorrow and guess a new word.')
}

}