function myDisplay(second, strText) {
    document.getElementById('callbacktext').innerHTML = strText;
    document.getElementById('callbacksecond').innerHTML = second;

}

function GetHour(myCallback) {
    let second = new Date().getSeconds();
    let isOddorEven = second % 2 === 0 ? 'even' : 'odd';
    myCallback(second, isOddorEven);
}

window.addEventListener("load", function () {

    GetHour(myDisplay);
});