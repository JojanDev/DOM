import { campos } from "../app.js";

const agregarError = (campo) => {
  let span = document.createElement("span");
  span.textContent = "¡¡¡Este campo es obligatorio!!!";
  span.classList.add("span");
  campo.insertAdjacentElement("afterend", span);
  campo.classList.add("borde-rojo");
}

const validarSexo = (campos) => {
  campos.forEach(campo => {
    if (campo.checked)
      return true;
  });
}

let objeto = {};

export const Esvalidar = (event) => {
  event.preventDefault();

  const checkboxs = [...event.target].filter((elemento) => {
    if (elemento.name == 'habilidades[]')  return elemento.checked;
  });

  objeto['lenguajes'] = checkboxs.map((campo) =>  campo.value);

  const radios = [...event.target].filter((elemento) => elemento.type == 'radio');
  
  const campo_radio = radios.find((radio) => radio.checked) || [];

  let hermano = radios[0].parentElement.parentElement.nextElementSibling;
  
  if (campo_radio.length === 0 && hermano.className !== 'span') {
    agregarError(radios[0].parentElement.parentElement);
  } else if (campo_radio.length != 0) {
    objeto['genero'] = campo_radio.value;
    if (hermano.className == "span") {
      hermano.remove();
      radios[0].parentElement.parentElement.classList.remove("borde-rojo");

    }
  }
  

  let camposVacios = [];
  let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  campos.forEach((campo) => {
    let siguienteElemento = campo.nextElementSibling;

    switch (campo.tagName) {
      case "SELECT":
        if (campo.selectedIndex == 0 && !siguienteElemento) {
          agregarError(campo);
        }

        if (campo.selectedIndex != 0) {
          if (siguienteElemento && siguienteElemento.className == "span") {
            siguienteElemento.remove();
            campo.classList.remove("borde-rojo");

          }
        }
        break;
      case "INPUT":
        // console.log(siguienteElemento.className !== "span");
        
        if (campo.value.trim() === "") {
          camposVacios.push(campo.name);
          if (!siguienteElemento || siguienteElemento.className !== "span") {
          agregarError(campo);
          }
        }
        break;
      default:
        break;
    }
    objeto[campo.getAttribute('name')] = campo.value;
  });

  let mensaje = "";

  if (camposVacios.length > 1) {
    mensaje = `Los siguientes campos son obligatorios: \n- ${camposVacios.join(
      "\n - "
    )}\n`;
  } else if (camposVacios.length == 1) {
    mensaje = `El siguiente campo es obligatorio: \n- ${camposVacios[0]}\n`;
  }

  if (!regexContrasena.test(campos[campos.length - 2].value)) {
    mensaje +=
      "\n- La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y caracter especial";
  }

  let contenedorHabilidades = document.querySelector('.form__habilidades');
  let minimo = contenedorHabilidades.dataset.habilidades;

  if (checkboxs.length < minimo) {
    mensaje +=
      "\n- Seleccione al menos 3 habiliadades";
  }

  // console.log(campos[campos.length - 1].selectedIndex);

  if (campos[campos.length - 1].selectedIndex === 0) {
    mensaje += "\nDebe seleccionar una opción válida.";
  }

  if (mensaje != "") {
    alert(mensaje);
  } else {
    alert("Formulario enviado correctamente");
    event.target.reset();
    console.log("Datos enviados:", objeto);
  }

};
