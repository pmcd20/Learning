//https://www.youtube.com/watch?v=TnhCX0KkPqs

console.log('Promises');

//how to create a  promise
//state1 = Pending state, then resolve or rejected.
function getWeather() {
    return new Promise(function (resolve, reject) {
       //async logic 
       setTimeout(function(){
        resolve('Cloudy')
       },500) 
    })
}


function getWeatherIcon(weather){
return new Promise(function (resolve, reject){
    //async logic 
    setTimeout(function(){
        switch(weather){
            case 'Sunny': resolve('☀'); break;
            case 'Cloudy': resolve('☁'); break;
            case 'Rainy': resolve('🌧'); break;
            default: reject('No icon found');


        }
       },500) 
})
}


function onSuccess(data) {
    console.log(`Success ${data}`)
}

function onError(error) {
    console.log(`Error:  ${error}`)
}

 getWeather()
 .then(getWeatherIcon)
 .then(onSuccess)
 .catch(onError)
 .finally(() => console.log('Promotion function completed'))




