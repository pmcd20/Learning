let myPromise = new Promise(function (myResolve, myReject) {
    let currentSecond = new Date().getSeconds();

    if (currentSecond < 30) {
        myResolve({ result: true, message: "less then 30" })
    }
    else {
        myReject({ result: false, message: "equal or more than 30" })
    }
});

function UpdateDisplay(result, message) {
    var resultElement = document.getElementById("promiseSuccessOrFailure");
    var resultMessageHolder = document.getElementById("promisesecond");
    resultMessageHolder.innerHTML = message;

    if (result === true) {
        resultElement.innerHTML = "Success";
        resultElement.style.color = "green";

    }
    else {
        resultElement.innerHTML = "failed";
        resultElement.style.color = "red";
    }
}


window.addEventListener("load", function () {
    myPromise.then(
        function (data) { UpdateDisplay(data.result, data.message); },
        function (error) { UpdateDisplay(error.result, error.message); }
    );
});
