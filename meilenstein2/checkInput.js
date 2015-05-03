/**
 * Funktion, die prueft, ob eine Eingabe nur aus erlaubten Buchstaben besteht.
 * @param input Zu pruefende Eingabe
 * @returns {boolean} Gibt true zurueck, falls Eingabe den Anforderungen enstpricht oder false, falls dies nicht der Fall ist.
 */
function checkBuchstaben(input) {
    if (input == '') {
        alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
        return false;
    } else {
        // Eine Zeichenkette mit allen erlaubten Zeichen, in diesem Falle alle großen und kleinen Buchstaben.
        var korrekteZeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖabcdefghijklmnopqrstuvwxyzäüöß';
        // Variable zur Speicherung des aktuellen Zeichens beim Schleifendurchlauf.
        var zeichen;
        for (i = 0; i < input.length; i++) {
            // Speicherung des aktuellen Zeichens von input
            zeichen = input.charAt(i);
            /*
             Pruefung, ob dieses Zeichen in der Zeichenkette mit den erlaubten Zeichen enthalten ist.
             Falls nicht, ist indexOf -1.
             */
            if (korrekteZeichen.indexOf(zeichen) == -1) {
                alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
                return false;
            }
        }
    }
    return true;
}

/**
 * Funktion, die prueft, ob das eingegebenen Jahr den Anforderungen entspricht, also vierstellig ist und nicht groeßer als das aktuelle Jahr.
 * @param input Das eingegebene Jahr
 * @returns {boolean} Gibt true zurueck, falls das Jahr den Anforderungen entpricht und false, falls dies nicht der Fall ist.
 */
function checkJahr(input) {
    // Das aktuelle Datum wird in der Variable gespeichert.
    var datum = new Date();
    // Mit getFullYear wird das Jahr in der Variable gespeichert.
    var aktuellesJahr = datum.getFullYear();
    // Sofern die Eingabe kleiner als 1000 oder groeßer als das aktuelle Jahr, ist die Eingabe ungueltig.
    if (input < 1000 || input > aktuellesJahr) {
        return false;
    }
    return true;
}

/**
 * Funktion, die prueft, ob die Eingabe bei der Auflage den Anforderungen entspricht, also nicht negativ ist.
 * @param input Die eingegebene Auflage
 * @returns {boolean} Gibt true zurueck, falls die Auflage den Anforderungen entspricht und false, falls dies nicht der Fall ist.
 */
function checkAuflage(input) {
    // Wenn die Eingabe kleiner als 0 ist, ist diese Eingabe ungueltig.
    if (input < 0) {
        return false;
    }
    return true;
}

/**
 * Funktion, die prueft, ob die eingegebene ISBN den Anforderungen entspricht.
 * @param input Die eingegebene ISBN
 * @returns {boolean} Gibt true zurueck, falls die ISBN den Anforderungen entspricht und false, falls dies nicht der Fall ist.
 */
function checkISBN(input) {
    // Eine ISBN darf nicht laenger als 13 Stellen sein.
    if (input.length > 13) {
        return false
    }
    return true;
}

/**
 * Funktion, die prueft, ob der eingegebene Buchtitel den Anforderungen entspricht.
 * @param input Der eingegebene Buchtitel
 * @returns {boolean} Gibt true zurueck, falls der Buchtitel den Anforderungen entspricht und false, falls dies nicht der Fall ist.
 */
function checkBuchtitel(input) {
    // Eine Zeichenkette mit allen erlaubten Zeichen, also Buchstaben, Zahlen und Sonderzeichen.
    var korrekteZeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÜÖabcdefghijklmnopqrstuvwxyzäüöß' +
        '0123456789' +
        '!"§$%&/()=?*#.:@€- ';
    // Variable zur Speicherung des aktuellen Zeichens beim Schleifendurchlauf.
    var zeichen;
    for (i = 0; i < input.length; i++) {
        // Speicherung des aktuellen Zeichens von input
        zeichen = input.charAt(i);
        /*
         Pruefung, ob dieses Zeichen in der Zeichenkette mit den erlaubten Zeichen enthalten ist.
         Falls nicht, ist indexOf -1.
         */
        if (korrekteZeichen.indexOf(zeichen) == -1) {
            alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
            return false;
        }
    }
    return true;
}