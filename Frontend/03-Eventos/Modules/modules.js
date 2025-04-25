export const Esvalidar = (event) => {
  event.preventDefault();

  let campos = [...event.target].filter((hijo) => {
    return hijo.hasAttribute('required');
  });
  
  console.log(campos);

  campos.forEach((campo) => {
    if (campo.value.trim() === "") {
      let siguienteElemento = campo.nextElementSibling;

      if (!siguienteElemento || siguienteElemento.className !== "span") {
        let span = document.createElement('span');
        span.textContent = "¡¡¡Este campo es obligatorio!!!";
        span.classList.add('span');
        campo.insertAdjacentElement('afterend', span);
        campo.classList.add('borde-rojo');
      }
    }

    switch (campo.tagName) {
      case 'SELECT':
        campo.classList.add('borde-rojo');
        break;
    
      default:
        break;
    }
  });
  
  // const inputs = document.querySelectorAll('form input[required]');
  // console.log(inputs);
  
}