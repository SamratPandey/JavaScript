const form = document.querySelector('form');
let result = document.querySelector('#results');
let guid = document.querySelector('#weight-guide');


function calculateBMI(weight, height) {
    height = height / 100;

    let bmi = weight / (height * height);
    return bmi.toFixed(2); 
}


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let height = Number(document.querySelector("#height").value);
    let weight = Number(document.querySelector("#weight").value);
   
    let bmi  =  calculateBMI(weight, height);

    result.innerHTML = `<span>${bmi}</span>`;

    if(bmi>24.9){  
        guid.innerHTML = `<span>Overweight need to loose some weight</span>`;  
    }else if(bmi<18.6){
        guid.innerHTML = `<span>Under Weight need to put some weight</span>`;    
    }else{
        guid.innerHTML = `<span>Normal</span>`; 
    }

});

