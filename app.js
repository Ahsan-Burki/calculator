var numberOfBtn = document.querySelectorAll('.button').length;
var display = document.querySelector('.display');

for (let i = 0; i < numberOfBtn; i++) {
    document.querySelectorAll('.button')[i].addEventListener("click", function () {
    display.innerHTML += this.innerHTML;
    })
}
function clearDisplay() {
    display.innerHTML = "";
}
function evaluateExp() {
    display.innerHTML = eval(display.innerHTML);

}

function delSingleNum() {
    display.innerHTML = display.innerHTML.slice(0,-1);
}