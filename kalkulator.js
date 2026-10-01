function hitung(operator){
    let bil1 = Number(document.getElementById("bil1").value);
    let bil2 = Number(document.getElementById("bil2").value);
    let hasil;

    if (operator == '+') {
        hasil = bil1 + bil2;
    } 
    else if (operator == '-') {
        hasil = bil1 - bil2;
    } 
    else if (operator == '*') {
        hasil = bil1 * bil2;
    } 
    else if (operator == '/') {
        hasil = bil1 / bil2;
    }

    document.getElementById("output").value = hasil;
}