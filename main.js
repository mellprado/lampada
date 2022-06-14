const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");
var lampIsBroken = false;

function lampOn() {
    if (lampIsBroken) return;
    lamp.src = "./img/ligada.jpg";
}

function lampOff() {
    if (lampIsBroken) return;
    lamp.src = "./img/desligada.jpg";
}

function lampBroken() {
    lamp.src = "./img/quebrada.jpg";
    lampIsBroken = true;
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("dblclick", lampBroken);
