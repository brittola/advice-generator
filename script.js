let adviceId = document.querySelector('#outAdviceId span');
let outAdvice = document.getElementById('outAdvice');
let btGenerate = document.getElementById('btGenerate');

const API = "https://api.adviceslip.com/advice";

function makeRequest(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    
    return request.responseText;
}

function generateAdvice(){
    let obj = JSON.parse(makeRequest(API)).slip;
    adviceId.textContent = obj.id;
    outAdvice.textContent = `"${obj.advice}"`;
}

btGenerate.addEventListener('click', generateAdvice);

generateAdvice();