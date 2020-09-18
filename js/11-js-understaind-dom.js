console.log('Understanding DOM and create website layout')
let a = document;
a = document.all;
//a = document.body;
//a = document.forms[0];

//Array.from(a).forEach(function(element){
//    console.log(element)
//})

//a = document.links[0].href;
//a = document.images;
//a = document.scripts;
let text = 'code'
let link = document.links;
Array.from(link).forEach(function(element){
    let x = element.href;
    if(x.includes(text)){
        console.log(x);
    }
})










































