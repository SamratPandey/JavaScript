const form = document.querySelector('.form');
const randomNumber = Math.floor(Math.random()*100);

let gusessField = document.querySelector('#guessField');
let remainGuess = document.querySelector('.lastResult');
let prevGuessField = document.querySelector('.guesses');

let prevGuess=[];
let gusessCount = 1;


const displayMassage = (massage) => {
    let massageArea = document.querySelector('.lowOrHi');
    massageArea.textContent = massage;
}

const updatePreGusess = (gusess) =>{
 prevGuess.push(gusess);
 prevGuessField.textContent = prevGuess;
}

const updateRemainingGusess = () =>{
    if(gusessCount === 10){
        displayMassage(`Game over randam number is ${randomNumber}`);
    }else{  
        let remain = Number(remainGuess.textContent) - gusessCount;
        remainGuess.textContent = remain; 
    }
} 

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(isNaN(gusessField.value)){
        displayMassage(`Please Enter a number`);
    }else{
        if(gusessField.value < 1){
            displayMassage(`Please Enter a numberless greater than 1`);
        }else if(gusessField.value > 100){
            displayMassage(`Please Enter a numberless greater than 1`);
        }
        updatePreGusess(gusessField.value);
        updateRemainingGusess(); 
    }
   
});




