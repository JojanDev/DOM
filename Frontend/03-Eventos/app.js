//Importaciones

import { Esvalidar } from "./Modules/modules.js";

//Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const documento = document.querySelector('[name = "documento"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name = "contrasena"]');
const ciudad = document.querySelector('[name = "ciudades"]');

const sexo = document.querySelectorAll('[name = "sexo"]');

const politicas = document.querySelector('[name = "politicas"]');
const boton = document.querySelector("#btn_validar");

export const campos = [
  nombre,
  apellido,
  telefono,
  documento,
  usuario,
  contrasena,
  ciudad,
];

const teclasEspeciales = [
  "Backspace",
  "Tab",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "Delete",
];

//Funciones

const validarTexto = (event) => {
  const key = event.key;
  const regex = /\D/;

  if (!regex.test(key) || event.target.value.length >= 10) {
    event.preventDefault();
  }
};

const validarNumero = (event) => {
  const key = event.key;
  const regex = /\d/;
  if (!regex.test(key) && !teclasEspeciales.includes(key)) {
    event.preventDefault();
  }
};

const validarCiudad = () => {
  if (ciudad.selectedIndex != 0) {
    
  }
}

const validarCampos = (event) => {
  event.preventDefault();

  let camposVacios = [];
  let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  campos.forEach((campo) => {
    if (campo.value.trim() == "") {
      let campoRojo = document.querySelector(`[name = "${campo.name}"]`);
      let siguienteElemento = campoRojo.nextElementSibling;
      camposVacios.push(campo.name);

      if (
        !siguienteElemento.className === "span" ||
        siguienteElemento.className == ""
      ) {
        let span = document.createElement("span");
        span.textContent = "¡¡¡Este campo es obligatorio!!!";
        span.classList.add("span");
        campoRojo.after(span);
        campoRojo.classList.add("borde-rojo");
      }
    }
  });

  let mensaje = "";

  if (camposVacios.length > 1) {
    mensaje = `Los siguientes campos son obligatorios: \n- ${camposVacios.join(
      "\n - "
    )}\n`;
  } else if (camposVacios.length == 1) {
    mensaje = `El siguiente campo es obligatorio: \n- ${camposVacios[0]}\n`;
  }

  if (!regexContrasena.test(contrasena.value)) {
    mensaje +=
      "\nLa contraseña debe tener al menos 8 caracteres, una mayúscula, un número y caracter especial";
  }

  if (mensaje != "") {
    alert(mensaje);
  } else {
    alert("Formulario enviado correctamente");
  }
};

const limpiar = (e) => {
  if (e.target.value !== "" || e.target.name == 'ciudades' != 0) {
    e.target.classList.remove("borde-rojo");
    if (e.target.nextElementSibling.className == "span") {
      e.target.nextElementSibling.remove();
    }
  }
};

//Eventos

addEventListener("DOMContentLoaded", (event) => {
  if (!politicas.checked) boton.setAttribute("disabled", "");
});

politicas.addEventListener("change", () => {
  if (politicas.checked) boton.removeAttribute("disabled");
  else boton.setAttribute("disabled", "");
});

nombre.addEventListener("keydown", validarTexto);
apellido.addEventListener("keydown", validarTexto);
telefono.addEventListener("keydown", validarNumero);
documento.addEventListener("keydown", validarNumero);

nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);
telefono.addEventListener("blur", limpiar);
documento.addEventListener("blur", limpiar);
usuario.addEventListener("blur", limpiar);
contrasena.addEventListener("blur", limpiar);

formulario.addEventListener("submit", Esvalidar);

//------------------------------------------------------------------------

let tabla = document.createElement("table");
let header_tabla = document.createElement("thead");

{
  /* <table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
</table> */
}
