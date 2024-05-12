let interval;

function randomColor(){
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color +=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
const startInterval = () => {  
    if(!interval){
        interval = setInterval(ultimateBg, 1000);
        function ultimateBg(){
            document.body.style.backgroundColor = randomColor();
        }
    }  
    

    

}

const stopInterval = () => {
    clearInterval(interval);
    interval = null;
}

document.querySelector('#start').addEventListener('click', startInterval);
document.querySelector('#stop').addEventListener('click', stopInterval);