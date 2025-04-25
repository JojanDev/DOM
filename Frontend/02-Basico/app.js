let padre = document.querySelector('.container');
let node = document.createElement('h2');
node.textContent = "Titulo de segundo nivel";
let texto = document.createTextNode("Palabra para el nodo de texto");
padre.appendChild(node);
padre.appendChild(texto); 

let lista = document.querySelector('#list');

let css = document.createElement('li');
let js = document.createElement('li');
let html = document.createElement('li');

html.classList.add('item');
css.classList.add('item');
js.classList.add('item');

css.textContent = "CSS";
html.textContent = "HTML";
js.textContent = "JS";

lista.append(html, css, js);

let caard = document.querySelector('.card');
let lista_card = document.querySelector('#list');
let titulo = document.createElement('h2');
titulo.textContent = "Titulo de la card";

// card.appendChild(titulo);
caard.insertBefore(titulo, lista_card);

let beforebgin = document.createElement('li');
beforebgin.classList.add('item', 'before');
beforebgin.textContent = "Nuevo contenido antes de la lista";

let afterbgin = document.createElement('li');
afterbgin.classList.add('item');
afterbgin.textContent = "Texto ubicado al inicio de la lista";

let beforeend = document.createElement('li');
beforeend.classList.add('item', 'before');
beforeend.textContent = "Nuevo contenido ubicado al final"

let afterend = document.createElement('li');
afterend.classList.add('item');
afterend.textContent = "Nuevo contenido despues de la lista";

lista_card.insertAdjacentElement('beforebegin', beforebgin);
lista_card.insertAdjacentElement('beforeend', beforeend);
lista_card.insertAdjacentElement('afterbegin', afterbgin);
lista_card.insertAdjacentElement('afterend', afterend);

let card_dias = document.querySelector('#dias');

const dias = [
  {
    id: 1,
    nombre: "Lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  },
  {
    id: 2,
    nombre: "Martes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  },
  {
    id: 3,
    nombre: "Miercoles",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  },
  {
    id: 3,
    nombre: "Jueves",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  },
  {
    id: 4,
    nombre: "Viernes",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  }
  ,
  {
    id: 5,
    nombre: "Sabado",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  }
  ,
  {
    id: 6,
    nombre: "Domingo",
    img: "https://picsum.photos/640/360",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nihil?"
  }
]

console.log(dias);

let cards = document.querySelector('.cards');
dias.map(({ id, nombre, img, parrafo}) => {
  let card = document.createElement('div');
  let card_header = document.createElement('div');
  let card_title = document.createElement('h2');
  let card__body = document.createElement('div');
  let card_img = document.createElement('img');
  let card__paragraph = document.createElement('p');
  
  card.classList.add('card');
  card_header.classList.add('card__header');
  card_title.classList.add('card__title');
  card__body.classList.add('card__body');
  card_img.classList.add('card__img');
  card__paragraph.classList.add('card__paragraph');

  card_title.textContent = nombre;
  card__paragraph.textContent = parrafo;
  card_img.setAttribute('src', img);

  card.append(card_header, card__body);
  card__body.append(card_img, card__paragraph);
  card_header.append(card_title);

  cards.append(card);
}
);
