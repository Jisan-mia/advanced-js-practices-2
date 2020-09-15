console.log("Javascript Arrays and Objects");

let marks = [35, 63, 65, 97, 87];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 85, [3,5]];

const arr = new Array(23, 125, 32, 'Orange');
//console.log(marks);
//console.log(mixed);
//console.log(fruits[0]);
//
//console.log(arr.length);
//console.log(Array.isArray("mixed"));

arr[0] = 'Jisan'
//console.log(arr);

//console.log(marks.indexOf(97));

//Mutating or modifying  arrays
//marks.push(50);
//marks.unshift(84)
//marks.pop();
//marks.shift();
//marks.splice(1, 2);
//marks.reverse();
let marks2 = [1, 2, 3];
marks = marks.concat(marks2);
//console.log(marks)


//object
let myObj = {
    'first name': 'Jisan', 
    lastName: 'Mia',
    age: 17,
    isActive: true,
    marks: [1,2, 3, 4]
}
console.log(myObj);
console.log(myObj.age);
console.log(myObj['first name']);
console.log(myObj['isActive']);



