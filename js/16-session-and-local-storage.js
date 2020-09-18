console.log('Session storage and local storage.')


let impArray = ['pyaz', 'bhindi', 'egg']

//Sets/add a key value pair inside localStorage
localStorage.setItem('Name', 'Jisan');
localStorage.setItem('Name2', 'Jihad');
localStorage.setItem('sabji', JSON.stringify(impArray));

//clears the entire localStorage
//localStorage.clear();

//Clear a particular key-value pair
localStorage.removeItem("Name2")


//Retrive an item form localStorage
let name = localStorage.getItem("Name");
name = JSON.parse(localStorage.getItem("sabji"));
console.log(name)


//session storage
sessionStorage.setItem('sessionName', 'sJisan');
sessionStorage.setItem('sessionName2', 'sJihad');
sessionStorage.setItem('sessionsabji', JSON.stringify(impArray));


























