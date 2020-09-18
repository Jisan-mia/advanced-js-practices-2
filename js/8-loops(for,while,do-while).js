console.log("For, while and do while loops");

//General Loops: for, while, do-while
/*
for (let i = 0; i < 20;i++){
    console.log(i);
}
*/

/*
//while loop
let j = 0;
while(j < 10){
   console.log(j);
    j++;
}
*/
/*

//do while loop
let k = 1;
do{
    console.log(k);
    if(k === 5){
        continue;
    }
    k++;
}while(k < 10)

*/

let arr = [2, 3, 5, 6, 9, 8];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
})
/*
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
*/

let obj = {
    name: "Jisan Mia",
    age: 18,
    type: 'Programmer',
    os: 'Windows'
}

for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}





















