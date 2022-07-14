
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));
function getSentence(arr,op) {

    const gap = " ";
    const punct = getPunct(op);
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        if ( i != arr.length-1 ) {
            str += arr[i] + gap; 
        } else {
            str += arr[i] + punct; 
        }
    }

    return str;
}

// Modul Punktuation
// output(getPunct("S"));
// output(getPunct("Q"));
// output(getPunct("E"));
// output(getPunct("#!2"));
function getPunct(op){
    switch (op) {
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return "#Error";  // TBA
    }
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}