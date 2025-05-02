import { campos } from "../app.js";

export const Esvalidar = (event) => {
  event.preventDefault();

  let camposVacios = [];
  let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;

  campos.forEach((campo) => {
    if (campo.value.trim() === "") {
      let siguienteElemento = campo.nextElementSibling;
      camposVacios.push(campo.name);

      if (!siguienteElemento || siguienteElemento.className !== "span") {
        let span = document.createElement("span");
        span.textContent = "¡¡¡Este campo es obligatorio!!!";
        span.classList.add("span");
        campo.insertAdjacentElement("afterend", span);
        campo.classList.add("borde-rojo");
      }
    }

    // switch (campo.tagName) {
    //   case "SELECT":
    //     campo.classList.add("borde-rojo");
    //     break;

    //   default:
    //     break;
    // }
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
      "\nLa contraseña debe tener al menos 8 caracteres, una mayúscula, un número y caracter especial";
  }

  console.log(campos[campos.length - 1].selectedIndex);

  if (campos[campos.length - 1].selectedIndex === 0) {
    mensaje += "\nDebe seleccionar una opción válida.";
  }

  if (mensaje != "") {
    alert(mensaje);
  } else {
    alert("Formulario enviado correctamente");

    const datos = {};
    campos.forEach((campo) => {
      datos[campo.name] = campo.value;

      campo.value = "";

      campo.classList.remove("borde-rojo");

      if (campo.tagName === "SELECT") {
        campo.selectedIndex = 0;
      }

      const span = campo.nextElementSibling;
      if (span && span.classList.contains("span")) {
        span.remove();
      }
    });

    console.log("Datos enviados:", datos);
  }
  // const inputs = document.querySelectorAll('form input[required]');
  // console.log(inputs);
};
