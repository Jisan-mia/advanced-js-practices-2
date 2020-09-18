console.log("Createing removing and replacing elements in js");

//creating an element dynamically
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text)


element.className = 'ulChild';
element.id = 'createUi';
element.setAttribute('title', 'mytitle')
//element.innerText = 'created child'

let ul = document.querySelector('ul.ulClass');
ul.appendChild(element);

//console.log(ul)
//console.log(element)

//replacing an element dynamically
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let text_node = document.createTextNode('created text node for elem2');
elem2.appendChild(text_node);

element.replaceWith(elem2);

//replace child
ul.replaceChild(element, document.getElementById('fli'))
//remove child
ul.removeChild(document.getElementById('lli'))

let pr = elem2.getAttribute('class');
elem2.removeAttribute('id')
//console.log(elem2, pr)

//quick quiz
//create an heading element with text as go to codewithJisan and create an a tag ouside it with href = "//codewithjisan"


let elem3 = document.createElement('h1');
let elem3_text_node = document.createTextNode('I am Jisan Mia');
elem3.appendChild(elem3_text_node);

let container = document.querySelector('.container');
container.appendChild(elem3);

let a = document.createElement('a');
a.href = '//codewithjisan.com';
console.log(a)
let elem4_text_node = document.createTextNode('Link');
a.appendChild(elem4_text_node);

container.appendChild(a)









