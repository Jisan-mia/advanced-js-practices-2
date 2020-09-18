console.log("html element selectors");
/*
element selectors:
1. Single element selector
3. Multi Element selector
*/

let element = document.getElementById('first-child');
//element = element.className;
//element = element.childNodes;
//element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Jisan Mia';
element.innerHTML = '<b> Jisan Mia </b>'
//console.log(element.innerText);


let sel = document.querySelector('#first-child');
sel = document.querySelector('.child');
sel = document.querySelector('h1');

sel.style.color = 'green'
//console.log(sel)


//2. Multi element selector
let elems = document.getElementsByClassName('child');
//console.log(elems[1])

elems = document.getElementsByTagName('div');

for(let i = 0; i < elems.length; i++){
    console.log(elems[i]);
    elems[i].style.color = 'gray'
}
//Array.from(elems).forEach(element => {
//    console.log(element);
//    element.style.color = 'blue'
//})

console.log(elems)

















