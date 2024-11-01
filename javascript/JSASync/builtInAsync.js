
window.addEventListener("load", function () {
    setInterval(displaySecond, 1000);
});

function displaySecond() {
    document.getElementById("lblsecond").innerHTML = new Date().getSeconds();
}