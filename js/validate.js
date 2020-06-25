// Validieren der Logininformationen
function validateForm() {
    var eMail = document.forms["loginForm"]["emailLogin"].value;
    var suchmuster = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (!suchmuster.test(eMail)) {
        alert("Keine regulaere E-Mail!");
        return false;
    }
    if (eMail === "") {
        alert("E-Mail muss angegeben werden");
        return false;
    }
    var pw = document.forms["loginForm"]["pwLogin"].value;
    if (pw === "") {
        alert("Passwort muss angegeben werden");
        return false;
    }
}