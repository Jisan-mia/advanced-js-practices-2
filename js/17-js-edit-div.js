console.log("JS exercise: Editable div");

/*
You have to create a dive and inject it into a page wich contains heading.
Whenever someone clicks on the div, it should be conveted into an item. when user clicks away (blur). save the note into the lcoal storage
*/

function showInputBox(){
    document.querySelector('.edit-area').style.display = 'block';
} 




let addInputBtn = document.querySelector('#add-input-btn');
let count = 0;
addInputBtn.addEventListener('click', function(){
    let inputField = document.querySelector('#add-input');
    let li = document.createElement("li");
    li.innerText = inputField.value;
    
    
    let ul = document.querySelector('.edit-div-ul');
    ul.appendChild(li);
    
    count = count + 1;
    localStorage.setItem(count, li.innerText)

    inputField.value = ''
  
})


 
let ulchild = document.querySelector('.edit-div-ul');
ulchild.addEventListener('click', function(e){
    ulchild.removeChild(e.target)
})




