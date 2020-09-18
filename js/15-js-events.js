console.log('javascript events');

/*
document.getElementById('heading').addEventListener('click', function(e){
    console.log("cliked on the heading")
    let variable = e.targe;
    variable = e.target.className;
    variable = e.target.classList;
    
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable)
//    location.href = 'google.com';
    
})*/


/*
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('mousedown', func3);
btn.addEventListener('dblclick', func2);

function func1(e){
    console.log("Thanks", e);
    e.preventDefault();
}

function func2(e){
    console.log("Thanks its double click", e);
    e.preventDefault();
}

function func3(e){
//    console.log("Thanks its mousedown", e);
    e.preventDefault();
}

*/


//document.querySelector('#heading').addEventListener('mouseenter', function(){
//    console.log("MouseEntered")
//})
//document.querySelector('#heading').addEventListener('mouseleave', function(){
//    console.log("MouseLeaved")
//})

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, 185)`
    console.log("you triggered mouse move event")
})

























