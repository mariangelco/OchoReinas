var reinasPorColocar = 8;
var reinasColocadas = 0;

// Función para inicializar el tablero
function inicializarTablero() {
  reinasColocadas = 0;
  reinasPorColocar = 8;
  var tablero = document.getElementById("tabla");
  tablero.innerHTML = ''; // Limpiar el contenido actual del tablero
  for (var i = 0; i < 8; i++) {
    var fila = tablero.insertRow(i);
    for (var j = 0; j < 8; j++) {
      var celda = fila.insertCell(j);
      celda.setAttribute("onclick", "colocarReina(this)");
    }
  }
}


function colocarReina(celda) {
  /*alert("Le dieron click a la celda"+celda);*/

  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /* Bloqueamos renglon */
      var tablero = document.getElementById("tabla");
      //alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          tablero.rows[renglon].cells[i].style.backgroundColor = "#750E21";
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          tablero.rows[i].cells[columna].style.backgroundColor = "#750E21";
        }
      }
      /* Recorremos diagonales */

      var r = renglon;
      var c = columna;

      while (r >= 0 && c < 8) {

        tablero.rows[r].cells[c].style.backgroundColor = "#750E21";
        r--;
        c++;
      }

      r = renglon;
      c = columna;

      while (c >= 0 && r < 8) {

        tablero.rows[r].cells[c].style.backgroundColor = "#750E21";
        r++;
        c--;
      }

      r = renglon;
      c = columna;

      while (r >= 0 && c >= 0) {
        tablero.rows[r].cells[c].style.backgroundColor = "#750E21";
        r--;
        c--;
      }

      r = renglon;
      c = columna;

      while (r < 8 && c < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#750E21";
        r++;
        c++;
      }

      reinasPorColocar--;
      reinasColocadas++;
    }

  } else {
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    /* Bloqueamos renglon */
    var tablero = document.getElementById("tabla");
    //alert(renglon + " " + columna);
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[renglon].cells[i].style.backgroundColor = "";
      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].style.backgroundColor = "";
    }
    reinasPorColocar++;
    reinasColocadas--;
  }
  document.getElementById("reinasColocar").innerHTML = "Reinas restantes: " + reinasPorColocar;
  document.getElementById("reinasColocadas").innerHTML = "<br>Reinas colocadas: " + reinasColocadas;

}

function solucion(valor) {
  reiniciarTablero();
  var celdas = document.getElementById("tabla");
  switch (valor) {
    case "0":
      reiniciarTablero();
      break;

    case "1":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[0].cells[4].style.backgroundColor = "#750E21";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style.backgroundColor = "#750E21";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style.backgroundColor = "#750E21";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[0].style.backgroundColor = "#750E21";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style.backgroundColor = "#750E21";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style.backgroundColor = "#750E21";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style.backgroundColor = "#750E21";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style.backgroundColor = "#750E21";

      reinasPorColocar = 0;
      reinasColocadas = 8;
      document.getElementById("reinasColocar").innerHTML = "Reinas restantes: " + reinasPorColocar;
      document.getElementById("reinasColocadas").innerHTML = "<br>Reinas colocadas: " + reinasColocadas;
      bloquearTablero();
      break;

    case "2":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[0].cells[4].style.backgroundColor = "#750E21";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style.backgroundColor = "#750E21";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style.backgroundColor = "#750E21";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[6].style.backgroundColor = "#750E21";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style.backgroundColor = "#750E21";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style.backgroundColor = "#750E21";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style.backgroundColor = "#750E21";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style.backgroundColor = "#750E21";

      reinasPorColocar = 0;
      reinasColocadas = 8;
      document.getElementById("reinasColocar").innerHTML = "Reinas restantes: " + reinasPorColocar;
      document.getElementById("reinasColocadas").innerHTML = "<br>Reinas colocadas: " + reinasColocadas;
      bloquearTablero();
      break;

    case "3":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[0].cells[3].style.backgroundColor = "#750E21";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style.backgroundColor = "#750E21";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[6].style.backgroundColor = "#750E21";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style.backgroundColor = "#750E21";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[5].style.backgroundColor = "#750E21";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style.backgroundColor = "#750E21";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style.backgroundColor = "#750E21";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style.backgroundColor = "#750E21";

      reinasPorColocar = 0;
      reinasColocadas = 8;
      document.getElementById("reinasColocar").innerHTML = "Reinas restantes: " + reinasPorColocar;
      document.getElementById("reinasColocadas").innerHTML = "<br>Reinas colocadas: " + reinasColocadas;
      bloquearTablero();
      break;

    default:
      alert("Esa opción no esta disponible");
      break;
  }
}

// Función para reiniciar el tablero
function reiniciarTablero() {
  inicializarTablero();
  reinasPorColocar = 8;
  reinasColocadas = 0;
  document.getElementById("reinasColocar").innerHTML = "Reinas restantes: " + reinasPorColocar;
  document.getElementById("reinasColocadas").innerHTML = "<br>Reinas colocadas: " + reinasColocadas;
}
// Manejador de evento para el botón de reiniciar
document.getElementById("resetButton").addEventListener("click", reiniciarTablero);

// Inicializar el tablero cuando se carga la página
window.onload = function () {
  inicializarTablero();

}

function bloquearTablero() {
  var tablero = document.getElementById("tabla");
  var celdas = tablero.getElementsByTagName("td");
  for (var i = 0; i < celdas.length; i++) {
      celdas[i].removeAttribute("onclick");
  }
}


