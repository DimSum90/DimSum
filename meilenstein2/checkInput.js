function checkBuchstaben(input) {
    if (input == '') {
        alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
        return false;
    } else {
        var korrekteZeichen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var position;
        for(i=0;i<input.length;i++){
            position = input.charAt(i);
            if(korrekteZeichen.indexOf(position) == -1){
                alert('Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben');
                return false;
            }
        }
    }
    return true;
}