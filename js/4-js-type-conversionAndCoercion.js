console.log("JavaScript type conversion and coercion");

//Javascript type conversion and coercion

//any data types to string conversion
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));


let boolVar = String(true);
console.log(boolVar, (typeof boolVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr =String([1, 2, 3, 4, 5]);
console.log(arr.length, (typeof arr));


let i = new Date;
//console.log(i.toString());


//any data types to number
let str = Number('3254');
//str = Number('234d3')// NaN (Not a number)
//str = Number(true); //1
//str = Number(false)//0
str = Number([1, 2, 3, 4, 5, 6]);  // NaN

console.log(str, (typeof str));

let num =parseFloat('34.087');
console.log(num.toFixed(2), (typeof num));


//Type coercion
let myStr = Number('645');
let myNum = 34;
console.log(myStr + myNum)













