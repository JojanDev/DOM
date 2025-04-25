//Importaciones

//Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const documento = document.querySelector('[name = "documento"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name = "contrasena"]');

const campos = [nombre, apellido, telefono, documento, usuario, contrasena];

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
  const regex = /^[\D]*$/i;
  if (!regex.test(key)) {
    event.preventDefault();
  }
};

const validarNumero = (event) => {
  const key = event.key;
  const regex = /^[\d]*$/;
  if (!regex.test(key) && !teclasEspeciales.includes(key)) {
    event.preventDefault();
  }
};

const validarCampos = (event) => {
  event.preventDefault();

  let camposVacios = [];
  let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  campos.forEach((campo) => {
    if (campo.value.trim() == "") {
      camposVacios.push(campo.name);
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

//Eventos
nombre.addEventListener("keydown", validarTexto);
apellido.addEventListener("keydown", validarTexto);
telefono.addEventListener("keydown", validarNumero);
documento.addEventListener("keydown", validarNumero);

formulario.addEventListener("submit", validarCampos);

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
