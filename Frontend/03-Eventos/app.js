//Importaciones


//Variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name = "nombre"]');
const apellido = document.querySelector('[name = "apellido"]');
const telefono = document.querySelector('[name = "telefono"]');
const documento = document.querySelector('[name = "documento"]');
const usuario = document.querySelector('[name = "usuario"]');
const contrasena = document.querySelector('[name = "contrasena"]');

//Funciones
const validar = (event) => {
  event.preventDefault();
  
  if (nombre.value == "") {
    alert("Favor llenar el nombre");
    nombre.focus();
  }
}

//Eventos
formulario.addEventListener('submit', validar);

//------------------------------------------------------------------------

let tabla = document.createElement('table');
let header_tabla = document.createElement('thead');


{/* <table>
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
</table> */}