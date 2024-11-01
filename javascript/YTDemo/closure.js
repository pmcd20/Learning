//Closures -- scope
//https://www.youtube.com/watch?v=1S8SBDhA7HA&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=1

//global scope 
//lexical scope - part of closer - access to parent
//!!need parent to close!! for closure
//when a function is defined but not executed  - 

let x = 1;

const parentFunc = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    //child function

    const childFunc = () => {
        console.log(x+=5);
        console.log(myValue+=1);
    }

    return childFunc;  
}

const result = parentFunc();

console.log(result);

result();
result();

console.log(x)
//console.log(myValue); //Uncaught Reference error 

//Second Part IIFE Immediatly Invoked Function Expression

const privateCounter = ((orig) => {
let count = 0;
console.log(`initial value: ${count}`)
console.log(orig)
return (inVal) => {
    count +=1; 
    console.log(count)
    console.log(inVal)
    console.log(orig)
}
    
})('initial Param');

privateCounter('Param on the first function call');
privateCounter('Param on the second function call');

var temp = privateCounter;
console.log(temp);




const credits = ( (num) => {

    let credits = num;
    console.log(`initial credits value is ${credits}`)
    return () => {
        credits-=1;
        if (credits > 0) console.log(`playing game - ${credits} credits remaining `);

        if (credits <= 0) console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();


const world = () => {
let bar = 'initial bar opened'
let  hour = 1;
console.log(bar);

return () => {

    console.log('still serving');
    console.log(hour+= 1);
}
};


const valueee = world();

valueee();
valueee();







