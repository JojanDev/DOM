let ws = window;

let header = document.querySelectorAll('header h1');
let main = document.querySelectorAll('main p');
let body = document.querySelector('body');

let scripts = document.scripts;
let imgs = document.images;
let styles = document.styleSheets;

let card = document.querySelectorAll('div.cards > div.card');

let cards = document.querySelector('div.cards');

console.log("padre" , cards.parentElement);
console.log("hermano", cards.previousElementSibling);


let elemento = document.querySelector('#elementos2');
// elemento.textContent = "Nuevo texto";
elemento.innerHTML = '<p> Texto nuevo </p>';
console.clear();


const clase = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      body.classList.add('bg-red');
      resolve();
    }, 6000);
  })
  
  console.log(body.classList);
}

clase();


