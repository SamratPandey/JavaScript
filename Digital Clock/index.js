const timeDisplay = document.querySelector('#clock');


setInterval(() =>{
    let timeNow = new Date();
    timeDisplay.innerHTML = timeNow.toLocaleTimeString();
},1000)

