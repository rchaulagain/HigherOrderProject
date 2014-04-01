


function FirstReverse(paramFunction) {
    var reversedString;

    if (typeof paramFunction === "function") {
        var reversedString = paramFunction();
    }
    document.getElementById("outout1").innerHTML = reversedString;
}

function reversedString() {

    var name = " Michael";

    return name.split("").reverse();

    FirstReverse(reversedString);


    
function FirstFactorial(num) {

    if (num === 0) {
        return 1;
    }
    else { return num * FirstFactorial(num - 1); }
    

}


FirstFactorial(5);



function longestWord() {

    var string = "Man is Mortal";
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        var checkedLetters = "";
        for (var j = 0; j < str[i].length; j++) {
            if (/[a-zA-Z]/.test(str[i][j])) {
                checkedLetters += str[i][j];
            }
        }
        if (longest < checkedLetters.length) {
            longest = checkedLetters.length;
            word = checkedLetters;
        }
    }
    console.log(word);
}

longestWord();


function LetterChanges(str) {
    var iLetters = str.split('');
    var newStr = [];

    for (var i = 0; i < str.length; i++) {
        if (/[a-y]/ig.test(iLetters[i])) {
            newStr[i] = String.fromCharCode(iLetters[i].charCodeAt(0) + 1);
            if (/[aeiou]/ig.test(newStr[i])) {
                newStr[i] = newStr[i].toUpperCase();
            }
        } else if (/[z]/ig.test(iLetters[i])) {
            newStr[i] = "A";
        } else if (/[^A-Z]/ig.test(iLetters[i])) {
            newStr[i] = iLetters[i];
        }
    }

    return newStr.join('');

    console.log()
}


var str = "Let us have fun";

str = str.replace(/[a-z]/gi, function (char) {
    char = String.fromCharCode(char.charCodeAt(0) + 1);
    if (char == '{' || char == '[') char = 'a';
    if (/[aeiuo]/.test(char)) char = char.toUpperCase();
    return char;
    console.log(char);
});


function SimpleAdding(num) {

    var y = 0;
    for (var i = 1; i < num + 1; i++) {
        y = y + i;
    }
    return y;

}

SimpleAdding(12);




