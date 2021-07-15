import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  function Estudiar(evt) {
    window.location = "https://es.vuejs.org/v2/guide/";
  }
  function menu(evt) {
    window.location = "https://2jrdc.csb.app/";
  }

  function pla1(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla2(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla3(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla4(evt) {
    alert(
      "                                                                                                                                                                                                                                                                                                                                                                                                                                                  ♥♥♥ CORRECTO ♥♥♥"
    );
  }

  function pla5(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla6(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla7(evt) {
    alert(
      "                                                                                                                                                                                                                                                                                                                                                                                                                                                 ♥♥♥ CORRECTO ♥♥♥"
    );
  }
  function pla8(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }

  function pla9(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla10(evt) {
    alert(
      "                                                                                                                                                                                                                                                                                                                                                                                                                                                ♥♥♥ CORRECTO ♥♥♥"
    );
  }
  function pla11(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }
  function pla12(evt) {
    alert("► ¡¡RESPUESTA INCORRECTA!!");
  }

  return (
    <div>
      <h1>Preguntas de VUE :</h1>

      <p>( Seleccione las respuestas que crea correctas )</p>
      <p>■ ¿Quieres ir a una pagina para estudiar sobre VUE? ■</p>
      <button onClick={Estudiar}> - Porsupuesto que si - </button>
      <button onClick={menu}>Regresar al menu principal</button>
      <p></p>

      <p>1.-¿Qué es Vue.js?</p>
      <p></p>
      <p>a) una aplicacion que te enseña desde cero como es la programacion</p>
      <p>b) una herramienta que solo apoya a los usuarios en los codigos</p>
      <p>c) un programa de computacion que nesesita de mantenimiento</p>
      <p>d) es un framework progresivo para construir interfaces de usuario.</p>
      <button onClick={pla1}> A)</button>
      <button onClick={pla2}> B)</button>
      <button onClick={pla3}> C)</button>
      <button onClick={pla4}> D)</button>

      <p>2.-¿En qué se diferencia de otros frameworks monolíticos?</p>
      <p></p>
      <p>a) facil manejo para usuarios</p>
      <p>b) no tiene que usar librerias</p>
      <p>c) está diseñado desde cero</p>
      <p>d) surgio de un error</p>
      <button onClick={pla5}> A)</button>
      <button onClick={pla6}> B)</button>
      <button onClick={pla7}> C)</button>
      <button onClick={pla8}> D)</button>

      <p>3.-Puede hacer combinanciones con....</p>
      <p></p>
      <p>a) codigos de programacion y bases de datosn</p>
      <p>b) herramientas modernas y librerías de apoyo.</p>
      <p>c) programas independientesn</p>
      <p>d) librerias y paginas web modernasn</p>
      <button onClick={pla9}> A)</button>
      <button onClick={pla10}> B)</button>
      <button onClick={pla11}> C)</button>
      <button onClick={pla12}> D)</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
