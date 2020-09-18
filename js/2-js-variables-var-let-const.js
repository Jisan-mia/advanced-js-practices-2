console.log("js variables")
//variables
//var, let, const
var name = 'jisan';
var number = 45;
//var age;

console.log(name, number);

//Rules of variable decleration in Javascript
/*
1. Cannot start with number
2. Can star with letter, numbers, _ or $
3. are case sensitive
*/

var city = 'Dhaka';
city = 'Manikganj';
console.log(city);

const myName = 'Jisan Mia';
//myName = 'AJ' // can not reassign to constant variables
console.log(myName);


{
    let city = 'Sylet';
    city = 'Chittaganj';
    console.log(city);
}
console.log(city)



// We can change elemets of of const array and object but can  not redeclare/reassign it

const arr = [1, 2, 3, 4, 5];
//arr = [3, 5, 3, 1, 6]; // can't redecleare cosnt var
arr.push(55); // we can change cange const array
console.log(arr);


/*
Most common programming case types:

1. camelCase
2. kabab-case
3. snack_case
4. PascaleCase

*/





