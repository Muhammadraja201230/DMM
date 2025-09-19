window.onload = function() {
// 1    
let hasil,limapuluh,lima;
// 2
let hasil1,seratusdualima;  
// 3
let hasil2,duaratustujuhlima;
// 4
let hasil3,limaratusenamdua;
// 5
let hasil4,seribuduapuluhempat             
document.getElementById("50dm").onclick = function () {
    limapuluh = 50;
    lima = 5;
    console.log(limapuluh);
    hasil = limapuluh + 5 + "DM!";
    console.log(hasil);
    hasil = document.getElementById("hasil-id").textContent = hasil;
};


 document.getElementById("125dm").onclick = function () {
    seratusdualima = 125 + "DM!";
    console.log(seratusdualima);
    hasil1 = seratusdualima;
    hasil1 = document.getElementById("hasil-id").textContent = hasil1;


};
 document.getElementById("275dm").onclick = function () {
    duaratustujuhlima = 275 + "DM!";
    console.log(duaratustujuhlima);
    hasil2 = duaratustujuhlima;
    hasil2 = document.getElementById("hasil-id").textContent = hasil2;


};
 document.getElementById("562dm").onclick = function () {
    limaratusenamdua = 562 + "DM!";
    console.log(limaratusenamdua);
    hasil3 = limaratusenamdua;
    hasil3 = document.getElementById("hasil-id").textContent = hasil3;


};
 document.getElementById("1024dm").onclick = function () {
    seribuduapuluhempat = 1024 + "DM!";
    console.log(seribuduapuluhempat);
    hasil4 = seribuduapuluhempat;
    hasil4 = document.getElementById("hasil-id").textContent = hasil4;


};
document.getElementById("idbtn").addEventListener("click", function() {
  document.getElementById("formsecion").style.display = "flex";
});
};
