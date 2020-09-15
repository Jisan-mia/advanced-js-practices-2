console.log("JS strings: Properties, Method, Templete Literals");

const name = "Jisan";
const greeting = 'Good Morning ';
//console.log(greeting+name);

let html;
html = '<h1> this is heading </h1> ' +
        '<p> this is para </p>';

html = html.concat('this', ' str2')
console.log(html);
//console.log(html.length);
//console.log(html.toLowerCase());
//console.log(html.toUpperCase());
//console.log(html);

//console.log(html[1])
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(1));
console.log(html.endsWith('str2'));
console.log(html.includes(' fg'));
console.log(html.substring(1, 3));
console.log(html.slice(0, 4));
console.log(html.split(' '));
console.log(html.replace('this', 'it'))


let fruit1 = 'Orange';
let fruit2 = 'Apple'
let myHtml = `Hellow ${name} 
            <h1> This is "heading" </h1>
            <p> You like ${fruit1} and ${fruit2}

            `;

document.body.innerHTML = myHtml;

let grocery = ['egg', 'potato', 'meat'];
let ownHtml = `<h1> Grocery Elements </h1>
                <p> First buy ${grocery[0]}</p>
                <p> Second ${grocery[1]}</p>
                <p> Third buy ${grocery[2]}</p>
                `;


document.body.innerHTML = ownHtml;



                                            



















