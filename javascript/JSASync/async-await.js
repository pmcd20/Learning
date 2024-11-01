
async function PerformAsync(Callbackfunction) {
    try {

        let requestURL = (new Date().getSeconds() < 30)
            ? "https://httpstat.us/202"
            : "https://invalid-url";

        console.log(requestURL);
        let response = await fetch(requestURL);
        console.log(response.ok);

        if (!response.ok) {
            console.log('Response is not ok');
            Callbackfunction(false, response.status);
            return;
        }
        console.log('Response is ok');
        Callbackfunction(true, response.status);
    }

    catch (error) {
        console.log(error);
        Callbackfunction(false, error);
    }

}


const UpdateAsyncDisplay = (result, message) => {
    console.log(`Result is ${result}  and ${message}`);
    var resultElement = document.getElementById("asyncSuccessOrFailure");
    var resultMessageHolder = document.getElementById("asyncMessage");
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



PerformAsync(UpdateAsyncDisplay);