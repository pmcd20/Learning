//this

const thisDemo = () => {

  const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; //person object
    },
    giveMePerson: function() {
      return this;
    }
  };

  console.log(person);
  console.log(person.fullName());

  let x = this;

  console.log(x); //window object

  function myFunction() {
    return this; // window object 
  }

  let y = myFunction();

  console.log(y);

  console.log(event);

  console.log(person.giveMePerson());


  const car = {
    name: "BMW",
    year: 2014,
    mydesc: function() {
      return `My  ${this.name} is ${Math.abs(new Date().getFullYear() - this.year)} years old`
    }

  };

  const appliance = {
    name: "Washing Machine",
    year: 2015
  }

  console.log(car.mydesc());

  console.log(car.mydesc.bind(appliance)());

}




//maps

const mapDemo = () => {


  // creating a map

  const fruits = new Map([
    ["apples", 500],
    ["bananas",300],
    ["oranges",200]
  ]);

  fruits.set("pears", 600);

  //change value

  fruits.set("apples", 100);

  console.log(fruits.get("apples"));

  console.log(fruits.size);

  fruits.delete("apples");

  console.log(fruits.has("apples"));

  for (const [key,value] of fruits.entries())
  {
    console.log(`The value of ${key} is ${value}`)
  }



}




//sets

const setDemo = () => {

const letters = new Set(["a","b","c","d","e"])
console.log(letters);

letters.add("g");
letters.add("a");

console.log(letters);

letters.forEach((value,index,array) => {
  console.log(`the value ${value}  is at index ${index} in the array ${array}`)
 
})


console.log(letters.values());

let text = "";
for (const x of letters.values()) {
  text += x;
}

console.log(text);

console.log(letters.size);

};





//loops

const loopDemo = () => {


  //for loop

  for (let i = 1; i <= 5; i++){
    console.log(`Valus is ${i}`)
  }

  //for in is for obhect looping

  const person = {
    firstName: 'John',
    LastName: 'Smith',
    Age: 34,
    Hobbies: ['Basketball','Reading','Music']
  };

  for (key in person)
  {
    console.log(`key is ${key} and value is ${person[key]} 
    and type is ${typeof(person[key])}`);
  }

  console.log(`this ${typeof(person.Hobbies)} is array? : ${Array.isArray(person.Hobbies)}`);

//Array foreach - callback function 

person.Hobbies.forEach((value, index, array) => {
  console.log(`the value ${value}  is at index ${index} in the array ${array}`)
  });


  //iterable object uses For of loops -> arrays, strings, maps etc

  const cars = ['BMW','Volvo','Mini'];

  for (let x of cars){
    console.log(x);
  }

  //over a string

  for (let x of cars[1]){
    console.log(x)
  }


  //While Loop
let i = 0;
  while (i < 3){
    console.log(i);
    i++;
  }

  //do while - run at least once before checking condition
  let iv = 100;
do {
 console.log(iv);
 iv++;
  } 

while (iv < 50)


//continue and break



for (let n = 0; n <= 20; n++)
{
 if (n % 7 === 0) continue;

  console.log(`Value of n is ${n}`);

  if (n == 13) {break;}
}



}











//Boolean & Comparisons

const boolCompDemo = () => {

  console.log(Boolean(10 > 9))
  console.log((10 > 9))

  let x = 2;
  console.log(Boolean(x)); //truthy - falsy

  //Everything Without a "Value" is False
  console.log(Boolean(''));

//Comparisons

console.log((7 >= 8) ? "Greater or equal" : "lesser")

 let a= 5, b = 6;

 

console.log(a < 10 && b > 1);
console.log(a < 4 || b > 4);

//not is reverse if true then it become false. If false then become true
console.log(!(a < 4 || b > 4));
console.log(!(3 < 2));

let name;  //can be = null also 
console.log(name);
let test = 'something'
let result = name ?? test;
console.log(result);


//optional Chain operator

const car = {};


console.log(car?.name);
console.log(car?.name == undefined);

car.name = "BMW";
console.log(car?.name);






};


//Maths

const mathsDemo = () => 
{
  //maths object is static
  
  console.log(Math.PI);

  console.log(Math.round(Math.PI + 0.5)); //nearest integer

  console.log(Math.ceil(Math.PI)); //next integer
  console.log(Math.floor(Math.PI)); //previos  integer
  console.log(Math.trunc(Math.PI + 0.5)) // current integer


  console.log(Math.pow(8,2)); 

  console.log(Math.sqrt(64)); 

  console.log(Math.abs(-55)); //turn neg value into positive

  //get the min value of an array 

  const scores = [25,40,20,55];

  console.log(Math.min(...scores));
  console.log(Math.max(...scores));

  //Random

  console.log(Math.random())

  //between 1 and 10
  console.log(Math.trunc(Math.random() * 10) + 1 )














}






//Dates
const datesDemo = () => {
 
  const d = new Date();
  console.log(d);
  
  const dd = new Date('2022-01-31');
  console.log(dd);

  const ddd = new Date(2022,0,30,1,59,0); //notice month Jan = 0
  
  console.log(ddd);

console.log(new Date('2023-03'));


let msec = Date.parse('1986-01-27');
console.log(msec);

console.log(new Date(msec));

const exampleDate = new Date('2016-07-09 12:10:59.999Z');
console.log(exampleDate);

console.log(
  `Day is ${exampleDate.getDate()}
  Weekday as a number is ${exampleDate.getDay()}
  Month is ${exampleDate.getMonth()}`

)

exampleDate.setFullYear('2023');
console.log(exampleDate);


  




}

















//arr iteration
const arrIteration = () => {

const numbers  = [15,1,58,24,100];

let myWord = "";

numbers.forEach((value,index,array) => {
 myWord += `|${value}`;
})


console.log(myWord);

const numbers2 = numbers.map((value, index) => {

  if (index === 2) return value * 4;
  return value * 2;
})

console.log(numbers2);


const numbers3 = numbers.filter((value) => {
return value < 30;
});

console.log(numbers3);

//reduce

const sum = numbers.reduce((preVal, curVal,index,arr) => {
  console.log(preVal);
  return  preVal + curVal;
}, 100); // 100 being the initial value

console.log(sum);

const numbers5 = [2,4,7,8,10];

let count = 0;
let musthave = 3;
const isEven = numbers5.every((value,index,arr) => {
  return value % 2 === 0;

});

console.log(isEven);

const isSomeEven = numbers5.some((value,index,arr) => {
  return value % 2 === 0;

});

console.log(isSomeEven);


console.log(numbers5.indexOf(7));

const findFirstOdd = numbers5.find((value) => {
return value % 2 !== 0;
});

console.log(findFirstOdd);


const findindexFirstOdd = numbers5.findIndex((value) => {
  return value % 2 !== 0;
  });
  
  console.log(findindexFirstOdd);

  let feeling = "i am thirsty in a world of opportunities";

  console.log(Array.from(feeling));


  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const keys = fruits.keys();
  const f = fruits.entries();

  

    for (let i of keys) {
      console.log(i);
    }

    for (let i of f){

      const [myKey, myval] = i;
      console.log(`the key ${myKey} and the values in ${myval}`)
      console.log(i);
    }


console.log(fruits.includes("Mango"));


//array spread

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dev"];

const year = [...q1,...q2,...q3,...q4];

console.log(year);

let randem = [...year, "biggi"];
console.log(randem);

randem = [...randem, "sminkie","snonkie"];
console.log(randem);


const myName = ["Paul",undefined,0, "", "Dellly"];

console.log(myName.join(' '));



const myNameFilter = myName.filter((name) => name || name === 0
);
console.log(myNameFilter);

console.log(myNameFilter.join(' '));

//learn falsy values

}

// //callback function 

// function completed(value)
// {
//   console.log(`You have completed ${value}`);
// }

// function myTask(strTask, myFun)
// {
//   console.log(`the task you are on ${strTask}`);
//   myFun(strTask);
  
// }

// myTask("Javascript", completed);
























//extra Arrays

const arrExtra = () => {

const countries = ['Ireland', 'England','Scotland','Wales','Italy','France'];

console.log(countries.sort());
console.log(countries.reverse());

//sort numbers

const myNum = [1,10,20,25,100];

console.log(myNum.sort(function(a,b) {return a - b}));


const cars = [
  {type:"volvo", year:2016},
  {type:"BMW",year:2001},
  {type:"Saab",year:2010}
];

console.log(cars.sort(function(a,b) {return a.year - b.year}))

};


// more arrays
const arrMore = () => {

//Array Methods
  const fruits = ['apple','banana','pear'];
  console.log(fruits.length);
  console.log(fruits.toString());
  console.log(fruits.join('|'));

  console.log(fruits.pop());
  console.log(fruits);
  console.log(fruits.push('Stawberries'));
  console.log(fruits);

  console.log(fruits.shift());
  console.log(fruits);
  console.log(fruits.unshift('peaches'));
  console.log(fruits);

  const vegtables = ['cabbage','potato','carrots'];

  const fruitVeg = fruits.concat(vegtables);
  console.log(fruitVeg.toString());

  const myArr = [
    ['Polo','Golf'],
    ['A6','A4'],
    ['Corrola','Avensis']
  ];

  const newArr = myArr.flat();

  console.log(newArr);

  newArr.splice(0,0,'Tiguan','HorseBox');

  console.log(newArr);

  const vw  = newArr.slice(0,4);
  console.log(vw);


}


//Arrays
const myFunc = (value) => {
  console.log(value);
  }


const arrDemo = () => {

  const cars = ['BMW','Volvo','Seat'];
  console.log(cars);
  console.log(cars.toString());

  console.log(cars.length);
  console.log(cars.sort());
  console.log(cars[1]);
  console.log(cars[cars.length - 1]);

  for (let i = 0; i < cars.length; i++){
console.log(`the car we are now working on is ${cars[i]}`);
  }

  cars.forEach(myFunc);

  

  cars.push("Audi");
  console.log(cars.toString());

  console.log(cars instanceof Array);


}

//number properties

const numProps = () => {

  let x = Number.EPSILON;
  console.log(x)

   x = Number.MAX_VALUE;
  console.log(x);

  x = Number.MAX_SAFE_INTEGER;
  console.log(x);

  x = Number.POSITIVE_INFINITY;
  console.log(x);

  x = Number.NEGATIVE_INFINITY;
  console.log(x);

  x = Number.NaN;
  console.log(x);

   
};

//numbers
const numbersJS = () => {


  let x = 100 / "Random";
  console.log(isNaN(x));

  console.log(typeof(x))

  let y = 2/0;
  console.log(`${y} is type of ${typeof(y)}`)
  y = y - 1;
  console.log(`${y} is type of ${typeof(y)}`)

 //number methods

 let num = 546.5050991;

 console.log(num.toString());

 console.log(num.toExponential(2));

 console.log(num.toFixed(2));

 console.log(num.toPrecision(10));


 console.log((10 + num).valueOf());

 console.log( Number("10.33"));

 console.log(Number(new Date("1970-01-01")));

 console.log(Number.isInteger(10));





};



//String Templates
const StringTemp = () => {
  let text = `He's often called "Johnny"`;
  console.log(text);


  let text2 = 
  `I don't 
know what is about 
to happen`

  console.log(text2);

  //interpolation

  let mycar = "Aud A6"
  let currentprice = 8000;


  console.log(`that is a nice ${mycar} and you bought if for ${currentprice} and selling for ${currentprice - 1000}` );



}

//String search
const StringSearch = () =>{
  let text = "Please locate where 'locate' occurs!";

  console.log(text);
  console.log(text.indexOf("locate"));
  console.log(text.indexOf("locate", 10));

  console.log(text.lastIndexOf("locate"));


  console.log(text.search(/Locate/i, 15));

  let textnew = "The rain in SPAIN stays mainly in the plain";
  console.log(textnew.match("ain"));

  console.log(textnew.match(/ain/g));
  console.log(textnew.match(/ain/gi));


  console.log(Array.from(textnew.matchAll(/ain/gi)));

console.log(textnew.includes("rain"));

console.log(textnew.includes("rain", 5)); //cehck if it exist at position 5






}


//call an event
function displayDate(ev, name, rc) {
    document.getElementById("demo").innerHTML = Date();
    console.log(ev);
    console.log(this);
    console.log(name);
    console.log(typeof(rc));

  }


  //String Methods
  const StringsPlay = function()  {

    let myStr = "This is my string";
    console.log(myStr);
    console.log(myStr.length);

    console.log(myStr.slice(1,7));
    console.log(myStr.substring(1,7))


    console.log(myStr.slice(7)); //slice forwards
    console.log(myStr.slice(-7)); //slice backwords


    console.log(myStr.slice(-7,-2));



    console.log(myStr.replace("string", "word"));

    //case Sensetive ignore


    console.log(myStr.replace(/STRING/i, "new World"));


    let demo = "the world revolves around the world";

    console.log(demo.replace(/WORLD/gi,"light"));
    console.log(demo.replaceAll("world","light"));

    console.log(demo.toUpperCase());

    console.log(myStr.concat(" ", demo));

    let crazyWord = "      sdsd     ";
    console.log(crazyWord.trim());
    console.log(crazyWord.trimStart());
    console.log(crazyWord.trimEnd());

    let text = "5";
    console.log(text.padStart(4,"0"));
    console.log(text.padStart(4,"x"));


    //chars
    console.log(demo.charAt(2));
    console.log(demo.charCodeAt(2));
    console.log(demo[2]);

    console.log(demo.split(' '));

    console.log(demo.endsWith("World"));















  }



;