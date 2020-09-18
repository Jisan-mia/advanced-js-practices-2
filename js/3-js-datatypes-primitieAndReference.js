console.log("Javascript datatypes")
//Primitive data types

//String
let name = 'Jisan';
console.log("my string is "+ name);
console.log(typeof(name));

//numbers
let number = 34;
console.log("number is " + number + ' date type is '+typeof(number));

//boolean
let isDoneDinner = true;
console.log("Have I done my dinner= " + isDoneDinner + " data type is "+ typeof(isDoneDinner));

//null
let nullVar = null;
console.log("data type of nullVar is "+ typeof(nullVar));


//undefined
let undef = undefined;
console.log("data type of undef is "+ undef);

//Reference Data Types

//Arrays
let myArr = [1, 2, 3, 4,5, false, 'string']
console.log('Data type is ' + typeof(myArr));

//Object Literals
let marks = {
    Jisan: 89,
    Jihad: 58,
    Shawon: 80
}

console.log(typeof marks);

//functions
function nameFunc () {
    
}
console.log(typeof nameFunc);


//Dates
let date = new Date();
console.log(date, (typeof date));





