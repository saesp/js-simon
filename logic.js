// Visualizzare in pagina 5 numeri casuali;
// Da lì parte un timer di 30 secondi;

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente;
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;


const textRandNum = document.querySelector("h2");
const arrRandNum = [];

// Visualizzare in pagina 5 numeri casuali;
// Fun crea num random x 5 volte
function randomNumFun(numMinFun, numMaxFun){
    let randomF = Math.floor(Math.random()*(numMaxFun - numMinFun + 1) + numMinFun);

    return randomF;
}

for (let i = 1; i <= 5; i++){
    let randomNum = randomNumFun(1, 1000);
    arrRandNum.push(randomNum);
}

// numeri in pagina
console.log(arrRandNum);
textRandNum.innerHTML = arrRandNum;

// attivo timer 30 sec
const timer = setTimeout(timerFun, 2000);

// tolgo numeri pagina
function timerFun(){
    textRandNum.innerHTML = "";
}

// user deve inserire, uno alla volta, i numeri che ha visto precedentemente
const inputNum = document.getElementById("input-num");
const buttonNum = document.getElementById("button-num");
const arrNumUser = [];
const textNumUser = document.querySelector("h3");

function onButtonClick(){
    if (arrNumUser.length < 5){
        arrNumUser.push(inputNum.value);
        console.log(arrNumUser);
        inputNum.value = "";
    }

    console.log(arrNumUser.length);
    textNumUser.innerHTML = `Numeri inseriti: ${arrNumUser}`;
}
buttonNum.addEventListener("click", onButtonClick);









