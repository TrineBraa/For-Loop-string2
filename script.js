//Modell
let totalVowels = '0';


//View
updateview()
function updateview() {
    document.getElementById("app").innerHTML =  /*HTML*/`
        <h1>Vowel Counter</h1>
        <br/>
        <Div id="showTheAmount"></Div>
        <br/>
        <input id="userInput" type="text"/>
        <br/>
        <button id="butnForVowel" onclick="checkVowels()">check Vowels</button>
    `;
}


//Controll
function checkVowels() {
    let sentenceInput = document.getElementById("userInput").value;
    totalVowels = countVowels(sentenceInput);
    document.getElementById("showTheAmount").innerHTML = `You have ${totalVowels} vowels in your sentence!`;
}

function countVowels(string) {
    let aCount = 0;
    let eCount = 0;
    let iCount = 0;
    let oCount = 0;
    let uCount = 0;
    let yCount = 0;
    let æCount = 0;
    let øCount = 0;
    let åCount = 0;

    for (let sentence = 0; sentence < string.length; sentence++) {
        const char = string[sentence].toLowerCase();
        if (char === 'a') { aCount++; }
        else if (char === 'e') { eCount++; }
        else if (char === 'i') { iCount++; }
        else if (char === 'o') { oCount++; }
        else if (char === 'u') { uCount++; }
        else if (char === 'y') { yCount++; }
        else if (char === 'æ') { æCount++; }
        else if (char === 'ø') { øCount++; }
        else if (char === 'å') { åCount++; }

    }
    return aCount + eCount + iCount + oCount + uCount + yCount + æCount + øCount + åCount;
}
