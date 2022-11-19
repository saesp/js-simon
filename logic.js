

// Visualizzare in pagina 5 numeri casuali;

// Func crea num random 
function randomNumFunc(numMinFunc, numMaxFunc){
    let randomF = Math.floor(Math.random()*(numMaxFunc - numMinFunc + 1) + numMinFunc);

    return randomF;
}

// crea num random x 4 volte
const arrRandNum = [];
for (let i = 1; i <= 4; i++){
    let randomNum = randomNumFunc(1, 100);
    arrRandNum.push(" " + randomNum);
}

// numeri in pagina
console.log(arrRandNum);
const textRandNum = document.querySelector("h2");
textRandNum.innerHTML = arrRandNum;
const textTimer = document.getElementById("timer-text");
textTimer.innerHTML = "Memorizza e attendi 5 secondi";

// attivo timer 5 sec
const timer = setTimeout(timerFunc, 5000); 
// tolgo numeri pagina
function timerFunc(){
    textRandNum.innerHTML = "";
    textTimer.innerHTML = "Inserisci i numeri che hai visto uno alla volta e nel giusto ordine";
}

// user deve inserire, uno alla volta, i numeri che ha visto precedentemente
const inputNum = document.getElementById("input-num");
const buttonNum = document.getElementById("button-num");
const arrNumUser = [];

// creare button
buttonNum.addEventListener("click",  
    function (){
        if (arrNumUser.length < 3){
            arrNumUser.push(" " + inputNum.value);
            console.log(arrNumUser);
            inputNum.value = "";
        } else if (arrNumUser.length < 4){
            arrNumUser.push(" " + inputNum.value);

            document.getElementById("num-user").innerHTML = `Numeri inseriti: ${arrNumUser}`;
            console.log("Numeri inseriti:", arrNumUser);

            document.querySelector(".num-pc").innerHTML = `Numeri da indovinare: ${arrRandNum}`; 
            console.log("Numeri da indovinare:", arrRandNum);

            const textResult = document.querySelector("h3");
            let arraysEqual = arraysEqualFunc(arrRandNum, arrNumUser);
            if (arraysEqual == true){
                textResult.innerHTML = "Hai indovinato tutti i numeri, hai vinto!";
                textResult.style.color = "green";
                console.log("Hai indovinato tutti i numeri, hai vinto!");
                textTimer.innerHTML = "";
            } else {
                textResult.innerHTML = "Non hai indovinato tutti i numeri, hai perso!";
                textResult.style.color = "red";
                console.log("Non hai indovinato tutti i numeri, hai perso!");
                textTimer.innerHTML = "";
            }
        }
    }
)

// Func Arrays uguali(?) 
function arraysEqualFunc(a, b) {
    if (a == b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] != b[i]) return false;
    }
    return true;
}








