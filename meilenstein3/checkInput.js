/**
 * Funktion, die prueft, ob eine Eingabe nur aus erlaubten Buchstaben besteht.
 * @param eingabe Zu pruefende Eingabe
 * @returns {boolean} Gibt true zurueck, falls Eingabe den Anforderungen enstpricht oder false, falls dies nicht der Fall ist.
 */
function checkBuchstaben(eingabe) {
    // Eine Zeichenkette mit allen erlaubten Zeichen, in diesem Falle alle großen und kleinen Buchstaben.
    var korrekteZeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖabcdefghijklmnopqrstuvwxyzäüöß';
    // Variable zur Speicherung des aktuellen Zeichens beim Schleifendurchlauf.
    var zeichen;
    for (i = 0; i < eingabe.length; i++) {
        // Speicherung des aktuellen Zeichens von eingabe
        zeichen = eingabe.charAt(i);
        /*
         Pruefung, ob dieses Zeichen in der Zeichenkette mit den erlaubten Zeichen enthalten ist.
         Falls nicht, ist indexOf -1.
         */
        if (korrekteZeichen.indexOf(zeichen) == -1) {
            return false;
        }
    }

    return true;
}

/**
 * Funktion, die prueft, ob das eingegebenen Jahr den Anforderungen entspricht, also vierstellig ist und nicht groeßer als das aktuelle Jahr.
 * @param jahr Das eingegebene Jahr
 * @returns {boolean} Gibt true zurueck, falls das Jahr den Anforderungen entpricht und false, falls dies nicht der Fall ist.
 */
function checkJahr(jahr) {
    // Das aktuelle Datum wird in der Variable gespeichert.
    var datum = new Date();
    // Mit getFullYear wird das Jahr in der Variable gespeichert.
    var aktuellesJahr = datum.getFullYear();
    // Sofern die Eingabe kleiner als 1000 oder groeßer als das aktuelle Jahr, ist die Eingabe ungueltig.
    if (jahr.length > 4 || jahr > aktuellesJahr || jahr <= 0) {
        return false;
    }
    return true;
}

/**
 * Funktion, die prueft, ob die Eingabe bei der Auflage den Anforderungen entspricht, also nicht negativ ist.
 * @param auflage Die eingegebene Auflage
 * @returns {boolean} Gibt true zurueck, falls die Auflage den Anforderungen entspricht und false, falls dies nicht der Fall ist.
 */
function checkAuflage(auflage) {
    // Wenn die Eingabe kleiner als 0 ist, ist diese Eingabe ungueltig.
    if (auflage < 0) {
        return false;
    }
    return true;
}

/**
 * Funktion, die prueft, ob die eingegebene ISBN den Anforderungen entspricht.
 * @param isbn Die eingegebene ISBN
 * @returns {boolean} Gibt true zurueck, falls die ISBN den Anforderungen entspricht und false, falls dies nicht der Fall ist.
 */
function checkISBN(isbn) {
    // Eine ISBN darf nicht laenger als 13 Stellen sein.
    if (isbn.length > 13) {
        return false
    }
    return true;
}

/**
 * Funktion, die prueft, ob der eingegebene Buchtitel den Anforderungen entspricht.
 * @param buchtitel Der eingegebene Buchtitel
 * @returns {boolean} Gibt true zurueck, falls der Buchtitel den Anforderungen entspricht und false, falls dies nicht der Fall ist.
 */
function checkBuchtitel(buchtitel) {
    // Eine Zeichenkette mit allen erlaubten Zeichen, also Buchstaben, Zahlen und Sonderzeichen.
    var korrekteZeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖabcdefghijklmnopqrstuvwxyzäüöß' +
        '0123456789' +
        '!"§$%&/()=?*#.:@€- ';
    // Variable zur Speicherung des aktuellen Zeichens beim Schleifendurchlauf.
    var zeichen;
    for (i = 0; i < buchtitel.length; i++) {
        // Speicherung des aktuellen Zeichens von buchtitel
        zeichen = buchtitel.charAt(i);
        /*
         Pruefung, ob dieses Zeichen in der Zeichenkette mit den erlaubten Zeichen enthalten ist.
         Falls nicht, ist indexOf -1.
         */
        if (korrekteZeichen.indexOf(zeichen) == -1) {
            return false;
        }
    }
    return true;
}

/**
 * Funktion, die ein Formularfeld, welches einen ungueltigen Inhalt beinhaltet, entsprechend markiert, damit
 * es als fehlerhaft erkennbar ist.
 * @param id Die ID des Formularfeldes, weches markiert werden muss.
 */
function markiereFormularfeldUngueltig(id) {
    // Das Formularfeld mit der ID wird mit einem roten Rahmen versehen.
    document.getElementById(id).style.borderColor = "red";
    // Der Rahmen des Formularfeldes mit dieser ID wird auf eine Breite von 5 Pixel gesetzt.
    //document.getElementById(id).style.borderWidth="5px";
    // Der Rahmen des Formularfeldes mit dieser ID soll "solid" sein.
    document.getElementById(id).style.borderStyle = "solid";
}

/**
 * Funktion, die den Fokus auf das Formularfeld mit der uebergebenen ID setzt.
 * @param id Die ID des Formularfeldes, welches den Fokus erhalten soll.
 */
function setzeFokusAufFormularfeld(id) {
    // Der Fokus wird auf das Formularfeld mit der ID gesetzt.
    document.getElementById(id).focus();
}

function checkFormularfeld(funktion, feld, fokusgesetzt) {
    var feldname = document.getElementById(feld).value;
    if (funktion == "checkAuflage") {
        if (checkAuflage(feldname) == false) {
            if (fokusgesetzt == 0) {
                setzeFokusAufFormularfeld(feld);
            }
            markiereFormularfeldUngueltig(feld);
            return false;
        }
        return true;
    } else if (funktion == "checkBuchtitel") {
        if(checkBuchtitel(feldname) == false){
            if (fokusgesetzt == 0) {
                setzeFokusAufFormularfeld(feld);
            }
            markiereFormularfeldUngueltig(feld);
            return false;
        }

    }
}