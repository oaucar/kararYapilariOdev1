
let fistName = prompt("Adinizi Giriniz:")
let mrb = document.querySelector('p#merhaba')
fistName = fistName.toLowerCase()
fistName = fistName[0].toUpperCase()+ fistName.slice(1)
mrb.innerHTML = `Merhaba, ${fistName}! Hoş geldin!`
let timeNow = document.querySelector('p#dateAndTime')
let date  = new Date();
let y = date.getFullYear();
let m = String(date.getMonth() + 1).padStart(2, '0');
let d = String(date.getDate()).padStart(2, '0');

function time(){
    var dt = new Date();
    var sec = String(dt.getSeconds()).padStart(2, 0);
    var min = String(dt.getMinutes()).padStart(2,0);
    var hr = String(dt.getHours()).padStart(2, 0);
    var day = dt.getDay();
    let dayName;
    if (day == 1){
        dayName = "Pazartesi"
    } else if (day==2){
        dayName = "Salı"
    } else if (day==3){
        dayName = "Çarşamba"
    } else if (day==4){
        dayName = "Perşembe"
    } else if (day==5){
        dayName = "Cuma"
    } else if (day==6){
        dayName = "Cumartesi"
    } else if (day==7){
        dayName = "Pazar"
    }
    timeNow.innerHTML = `${d}:${m}:${y} ${hr}:${min}:${sec} ${dayName}`
}
setInterval(time,1000);
