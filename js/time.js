// Anzeigen der aktuellen Uhrzeit
function uhrzeit()
{
    var d = new Date(),
            h = d.getHours(),
            m = d.getMinutes(),
            s = d.getSeconds();
    m = fuehrendeNull(m);
    s = fuehrendeNull(s);
    document.getElementById('idZeit').innerHTML = h + ':' + m + ':' + s;
    setTimeout(uhrzeit, 500);
}

// Rückgabe einer Zahl < 10 mitführenden 0 für die Datumanzeige
function fuehrendeNull(zahl) 
{
    zahl = (zahl < 10 ? '0' : '' )+ zahl;  
    return zahl;
}

// Anzeige der aktuellen Datums
function datum() 
{
    var jetzt = new Date(),
        tag = jetzt.getDate(),
        tagZahl = jetzt.getDay(),
        wochentag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ],
        monatZahl = jetzt.getMonth(),
		monat = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September',    
                'Oktober','November','Dezember'],
	text;
	text = 'Heute ist ' + wochentag[tagZahl]	+ ', der ' + fuehrendeNull(tag) + '. ' + monat[monatZahl] + '.';
    document.getElementById('idDatumsAusgabe').innerHTML = text;	
}

// Rückgabe des Datums mit bestimmten Zeitstempel
function datumAnzeige(timestamp)
{
    var date = new Date((parseInt(timestamp)*1000)),
        tag = date.getDate(),
        tagZahl = date.getDay(),
        wochentag = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag' ],
        monatZahl = date.getMonth(),
            monat = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September',    
            'Oktober','November','Dezember'],
        text;
    text = wochentag[tagZahl]	+ ', der ' + fuehrendeNull(tag) + '. ' + monat[monatZahl] + '.';
    return text;
}