// Variable zum Speichern des Punktestandes
var highscore = 0;
// Variable zum Kontrollieren ob das Spiel gewonnen wurde
var checkWin = true;

// Initialisiert einen Spielstart
function start() {
    var zahl1 = getZufallszahl(0,15);
    setFeld(zahl1);
    
    zahl2 = getZufallszahl(0,15);
    if (zahl1 === zahl2) {
        zahl2 = getZufallszahl(0,15);
        setFeld(zahl2);
    } else {
        setFeld(zahl2);
    }
}

// Generiert ein neues Feld, von 2 oder 4.
function afterMove() {
    var zahl = getZufallszahl(0,15);
    while (document.getElementById("label" + zahl).className !== "leerLabel") {
        zahl = getZufallszahl(0,15);
    }
    setFeld(zahl);
}

// Zeigt dem Spieler den Punktestand an.
function setHighScore() {
    document.getElementById("highscore").innerHTML = highscore;
}

// Kontrolliert ob ein Spiel verloren ist.
function checkGameOver() {
    var check = false, check1= false, check2= false, check3= false, check4  = false;
    check1 = checkPosibleMoveUp();
    check2 = checkPosibleMoveLeft();
    check3 = checkPosibleMoveRight();
    check4 = checkPosibleMoveDown();
    if (!(check1 && check2 && check3 && check4)) {
        check = checkFieldFull();
    } 
    return check && !check1 && !check2 && !check3 && !check4;
}

// Zeigt dem Spieler an das er verloren hat.
function getGameOver() {
    var h1 = document.getElementById("h1ID");
    h1.innerHTML = "GameOver";
    h1.className = "gameover";
    check = confirm("You have !!lost!! new game?");
    if (check) {
        reset();
    }
}

// Zeigt dem Spieler an das er gewonnen hat.
function getWin() {
    var check = false;
    document.getElementById("h1ID").innerHTML = "Win";
    if (checkWin) {
        check = confirm("Congratulations you have !!won!! new game?");
        if (check) {
            reset();
        } else {
            checkWin = false;
        }
    }
}

// Kontrolliert ob ein Spiel gewonnen ist.
function checkForWin() {
    for (var i = 0, max = 16; i < max; i++) {
        if (document.getElementById("label" + i).innerHTML === "2048") {
            return true ;
        }
    }
}

// Kontrolliert ob das Spielfeld voll ist.
function checkFieldFull() {
    var check = true;
    for (var i = 0, max = 16; i < max; i++) {
        if (document.getElementById("label" + i).className === "leerLabel" ) {
            check = false;
        }
    }
    return check;
}

// Kontrolliert ob ein Spielzug nach oben möglich ist. 
function checkPosibleMoveUp() {
    var check = false;
    for (var i = 0, max = 4; i < max; i++) {
        if (document.getElementById("label" + i).className === "leerLabel" && 
            (document.getElementById("label" + ( 4 + i)).className !== "leerLabel" ||
            document.getElementById("label" + ( 8 + i)).className !== "leerLabel" ||
            document.getElementById("label" + (12 + i)).className !== "leerLabel" )) {
            check = true;
            return check;
        } else
        if (document.getElementById("label" + ( 4 + i)).className === "leerLabel" &&
            (document.getElementById("label" + ( 8 + i)).className !== "leerLabel" ||
            document.getElementById("label" + (12 + i)).className !== "leerLabel" )) {
            check = true;
            return check;
        } else 
        if (document.getElementById("label" + ( 8 + i)).className === "leerLabel" &&
            document.getElementById("label" + (12 + i)).className !== "leerLabel" ) {
            check = true;
            return check;
        } else 
        if ((document.getElementById("label" + i).innerHTML === document.getElementById("label" + ( 4 + i)).innerHTML &&
            document.getElementById("label" + i).className !== "leerLabel" && document.getElementById("label" + ( 4 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 4 + i)).innerHTML === document.getElementById("label" + ( 8 + i)).innerHTML &&
            document.getElementById("label" + ( 4 + i)).className !== "leerLabel" && document.getElementById("label" + ( 8 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 8 + i)).innerHTML === document.getElementById("label" + (12 + i)).innerHTML && 
            document.getElementById("label" + ( 8 + i)).className !== "leerLabel" && document.getElementById("label" + (12 + i)).className !== "leerLabel")) {
            check = true;
            return check;
        }
    }
    return check;
}

// Kontrolliert ob ein Spielzug nach links möglich ist.
function checkPosibleMoveLeft() {
    var check = false;
    for (var i = 0, max = 13; i < max; i += 4) {
        if (document.getElementById("label" + i).className === "leerLabel" && 
            (document.getElementById("label" + ( 1 + i)).className !== "leerLabel" ||
            document.getElementById("label" + ( 2 + i)).className !== "leerLabel" ||
            document.getElementById("label" + ( 3 + i)).className !== "leerLabel" )) {
            check = true;
            return check;
        } else
        if (document.getElementById("label" + ( 1 + i)).className === "leerLabel" &&
            (document.getElementById("label" + ( 2 + i)).className !== "leerLabel" ||
            document.getElementById("label" + ( 3 + i)).className !== "leerLabel" )) {
            check = true;
            return check;
        } else 
        if (document.getElementById("label" + ( 2 + i)).className === "leerLabel" &&
            document.getElementById("label" + ( 3 + i)).className !== "leerLabel" ) {
            check = true;
            return check;
        } else 
        if ((document.getElementById("label" + i).innerHTML === document.getElementById("label" + ( 1 + i)).innerHTML &&
            document.getElementById("label" + i).className !== "leerLabel" && document.getElementById("label" + ( 1 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 1 + i)).innerHTML === document.getElementById("label" + ( 2 + i)).innerHTML &&
            document.getElementById("label" + ( 1 + i)).className !== "leerLabel" && document.getElementById("label" + ( 2 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 2 + i)).innerHTML === document.getElementById("label" + ( 3 + i)).innerHTML &&
            document.getElementById("label" + ( 2 + i)).className !== "leerLabel" && document.getElementById("label" + ( 3 + i)).className !== "leerLabel")) {
            check = true;
            return check;
        }
    }
    return check;
}

// Kontrolliert ob ein Spielzug nach rechts möglich ist. 
function checkPosibleMoveRight() {
    var check = false;
    for (var i = 0, max = 13; i < max; i += 4) {
        if (document.getElementById("label" + ( 3 + i)).className === "leerLabel" && 
            (document.getElementById("label" + ( 2 + i)).className !== "leerLabel" ||
            document.getElementById("label" + ( 1 + i)).className !== "leerLabel" ||
            document.getElementById("label" + i).className !== "leerLabel" )) {
            check = true;
            return check;
        } else
        if (document.getElementById("label" + ( 2 + i)).className === "leerLabel" &&
            (document.getElementById("label" + ( 1 + i)).className !== "leerLabel" ||
            document.getElementById("label" + i).className !== "leerLabel" )) {
            check = true;
            return check;
        } else 
        if (document.getElementById("label" + ( 1 + i)).className === "leerLabel" &&
            document.getElementById("label" + i).className !== "leerLabel" ) {
            check = true;
            return check;
        } else 
        if ((document.getElementById("label" + ( 3 + i)).innerHTML === document.getElementById("label" + ( 2 + i)).innerHTML &&
            document.getElementById("label" + ( 3 + i)).className !== "leerLabel" && document.getElementById("label" + ( 2 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 2 + i)).innerHTML === document.getElementById("label" + ( 1 + i)).innerHTML &&
            document.getElementById("label" + ( 2 + i)).className !== "leerLabel" && document.getElementById("label" + ( 1 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 1 + i)).innerHTML === document.getElementById("label" + i).innerHTML &&
            document.getElementById("label" + ( 1 + i)).className !== "leerLabel" && document.getElementById("label" + i).className !== "leerLabel")) {
            check = true;
            return check;
        }
    }
    return check;
}

// Kontrolliert ob ein Spielzug nach unten möglich ist.
function checkPosibleMoveDown() {
    var check = false;
    for (var i = 0, max = 4; i < max; i++) {
        if (document.getElementById("label" + (12 + i)).className === "leerLabel" && 
            (document.getElementById("label" + ( 8 + i)).className !== "leerLabel" ||
            document.getElementById("label" + ( 4 + i)).className !== "leerLabel" ||
            document.getElementById("label" + i).className !== "leerLabel" )) {
            check = true;
            return check;
        } else
        if (document.getElementById("label" + ( 8 + i)).className === "leerLabel" &&
            (document.getElementById("label" + ( 4 + i)).className !== "leerLabel" ||
            document.getElementById("label" + i).className !== "leerLabel" )) {
            check = true;
            return check;
        } else 
        if (document.getElementById("label" + ( 4 + i)).className === "leerLabel" &&
            document.getElementById("label" + i).className !== "leerLabel" ) {
            check = true;
            return check;
        }else 
        if ((document.getElementById("label" + ( 8 + i)).innerHTML === document.getElementById("label" + (12 + i)).innerHTML &&
            document.getElementById("label" + ( 8 + i)).className !== "leerLabel" && document.getElementById("label" + (12 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + ( 4 + i)).innerHTML === document.getElementById("label" + ( 8 + i)).innerHTML &&
            document.getElementById("label" + ( 4 + i)).className !== "leerLabel" && document.getElementById("label" + ( 8 + i)).className !== "leerLabel") ||
            (document.getElementById("label" + i).innerHTML === document.getElementById("label" + ( 4 + i)).innerHTML &&
            document.getElementById("label" + i).className !== "leerLabel" && document.getElementById("label" + ( 4 + i)).className !== "leerLabel")) {
            check = true;
            return check;
        }
    }
    return check;
}

// Spielzug nach oben
function moveUp(){
    if (checkPosibleMoveUp()) {
        for (var i = 0, max = 4; i < max; i++) {
            var koordinaten = [0 +i, 4 +i, 8 +i, 12+i]; 
            var a = parseInt(document.getElementById("label" + koordinaten[0]).innerHTML);
            var b = parseInt(document.getElementById("label" + koordinaten[1]).innerHTML);
            var c = parseInt(document.getElementById("label" + koordinaten[2]).innerHTML);
            var d = parseInt(document.getElementById("label" + koordinaten[3]).innerHTML);

            displayPosition(changeAndMerge(a,b,c,d), koordinaten);
        }
        afterMove();
        if (checkForWin()) {
            getWin();
        }
        if (checkGameOver()) {
            getGameOver();
        }
    }
}

// Spielzug nach links
function moveLeft(){
    if (checkPosibleMoveLeft()) {
        for (var i = 0, max = 13; i < max; i += 4) {
            var koordinaten = [0 +i, 1 +i, 2 +i, 3 +i]; 
            var a = parseInt(document.getElementById("label" + koordinaten[0]).innerHTML);
            var b = parseInt(document.getElementById("label" + koordinaten[1]).innerHTML);
            var c = parseInt(document.getElementById("label" + koordinaten[2]).innerHTML);
            var d = parseInt(document.getElementById("label" + koordinaten[3]).innerHTML);

            displayPosition(changeAndMerge(a,b,c,d), koordinaten);
        }
        afterMove();
        if (checkForWin()) {
            getWin();
        }        
        if (checkGameOver()) {
            getGameOver();
        }
    }
}

// Spielzug nach rechts
function moveRight(){
    if (checkPosibleMoveRight()) {
        for (var i = 0, max = 13; i < max; i += 4) {
            var koordinaten = [3 +i, 2 +i, 1 +i, 0 +i]; 
            var a = parseInt(document.getElementById("label" + koordinaten[0]).innerHTML);
            var b = parseInt(document.getElementById("label" + koordinaten[1]).innerHTML);
            var c = parseInt(document.getElementById("label" + koordinaten[2]).innerHTML);
            var d = parseInt(document.getElementById("label" + koordinaten[3]).innerHTML);

            displayPosition(changeAndMerge(a,b,c,d), koordinaten);
        }
        afterMove();
        if (checkForWin()) {
            getWin();
        }        
        if (checkGameOver()) {
            getGameOver();
        }
    }
}

// Spielzug nach unten 
function moveDown(){
    if (checkPosibleMoveDown()) {
        for (var i = 0, max = 4; i < max; i++) {
            var koordinaten = [12 +i, 8 +i, 4 +i, 0+i]; 
            var a = parseInt(document.getElementById("label" + koordinaten[0]).innerHTML);
            var b = parseInt(document.getElementById("label" + koordinaten[1]).innerHTML);
            var c = parseInt(document.getElementById("label" + koordinaten[2]).innerHTML);
            var d = parseInt(document.getElementById("label" + koordinaten[3]).innerHTML);
            
            displayPosition(changeAndMerge(a,b,c,d), koordinaten);
        }
        afterMove();
        if (checkForWin()) {
            getWin();
        }        
        if (checkGameOver()) {
            getGameOver();
        }
    }
}

// Zurücksetzen der Anwendung
function reset() {
    for (var i = 0, max = 16; i < max; i++) {
        var label = document.getElementById("label" +i);
        label.innerHTML = 0;
        label.className = "leerLabel";
    }
    document.getElementById("h1ID").innerHTML = "2048";
    highscore = 0;
    checkWin = true;
    setHighScore();
    start();
}

// Generiert eine zufällige Zahl mit gleicher Verteilung.
function getZufallszahl(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// Entscheiden ob 2 oder 4
function get2or4(zahl) {
    if (zahl <= 93) {
        return 2;
    } else {
        return 4;
    }
}

// Zufälliges generieren einer Zahl (93% -> 2 / 7% -> 4)
function setFeld(zahl) {
    var label = document.getElementById("label" + zahl);
    var feldValue = get2or4(getZufallszahl(1,100));

    label.className = null;
    label.innerHTML = feldValue;
    label.className = "label" + feldValue;
}

// Hinzufügen der Elemente in das HTML Dokument
function displayPosition(arrayNumbers, koordinaten) {
    for (var i = 0, max = 4; i < max; i++) {
            var label = document.getElementById("label" + koordinaten[i]);
            label.innerHTML = arrayNumbers[i];
            if (arrayNumbers[i] === 0) {
                label.className = "leerLabel";
            } else {
                label.className = "label" + arrayNumbers[i];
            }
        } 
}

// Zusammenfügen und verschieben von Elementen 
function changeAndMerge(a,b,c,d) {
    var array = [parseInt(a),parseInt(b),parseInt(c),parseInt(d)];
    array = swapArrayElements(array);

    if (array[0] === array[1] && array[2] === array[3]) {
        array[0] += array[1];
        highscore += array[1];
        array[1] = 0;
        array[2] += array[3];
        highscore += array[3];
        array[3] = 0;
    } else if (array[0] === array[1]) {
        array[0] += array[1];
        highscore += array[1];
        array[1] = 0;
    } else if (array[1] === array[2]) {
        array[1] += array[2];
        highscore += array[2];
        array[2] = 0;
    } else if (array[2] === array[3]) {
        array[2] += array[3];
        highscore += array[3];
        array[3] = 0;
    }
    array = swapArrayElements(array);
    setHighScore();
    return array;
}

// Vertauschen von Elementen innerhalb des übergebenen Arrays Bsp. 4020 -> 4200
function swapArrayElements(array) {
    var temp;
    for (var i = 0, max = 4; i < max; i++) {
        if (array[0] === 0 && array[1] > 0 ) {
            temp = array[0];
            array[0] = array[1];
            array[1] = temp;
        } else if (array[1] === 0 && array[2] > 0) {
            temp = array[1];
            array[1] = array[2];
            array[2] = temp;
        } else if (array[2] === 0 && array[3] > 0 ) {
            temp = array[2];
            array[2] = array[3];
            array[3] = temp;
        }
    }
    return array;
} 

// Fügt einen EventListener für die Steuerung Pfeiltasten hinzu
document.addEventListener("keydown", event => {
    if (event.keyCode === 38) {
        moveUp();
        return ;
    } else if (event.keyCode === 37) {
        moveLeft();
        return ;
    } else if (event.keyCode === 39) {
        moveRight();
        return ;
    } else if (event.keyCode === 40) {
        moveDown();
        return ;
    }
});