//Simulador de adivinanzas
alert ("Simulador interactivo de adivinanzas")
alert ("Tendras 5 intentos para adivinar cada una de las adivinanzas, al final te diran tu puntaje y el juego se Reiniciará")
alert ("¡Recorda responder solo con una palabra!")
    let respuestasCorrectas = 0;
    let JugarDeNuevo=true


     function verificarRespuesta(adivinanza, respuestaCorrecta) {
      if (adivinanza.toUpperCase() === respuestaCorrecta.toUpperCase()) {
        alert("¡Tu respuesta es correcta!");
        respuestasCorrectas++;
      } else {
        alert("Tu respuesta es incorrecta, ¡Sigue intentando!");
      }
    }
    

while (JugarDeNuevo){
     for (let i = 1; i <= 5; i++) {
      let Adivinanza = Number(prompt("Elige un número del 1 al 5 para seleccionar tu adivinanza"));
      switch (Adivinanza) {
        case 1:
          let Adivinanza1 = prompt("Tengo hojas, pero no soy un árbol. ¿Qué soy?");
          verificarRespuesta(Adivinanza1, "LIBRO");
          break;
        case 2:
          let Adivinanza2 = prompt("Tengo patas pero no puedo caminar. ¿Qué soy?");
          verificarRespuesta(Adivinanza2, "MESA");
          break;
        case 3:
          let Adivinanza3 = prompt("Soy una red de caminos sin fin, donde las arañas no tejen y los autos circulan sin descansar. ¿Qué soy?");
          verificarRespuesta(Adivinanza3, "INTERNET");
          break;
        case 4:
          let Adivinanza4 = prompt("Me enciendes y despierto, pero no estoy vivo. Soy una pantalla que muestra un mundo virtual y te sumerge en la fantasía. ¿Qué soy?");
          verificarRespuesta(Adivinanza4, "VIDEOJUEGO");
          break;
        case 5:
          let Adivinanza5 = prompt("Vengo de padres cantores, pero yo no soy cantor, llevo la ropa blanca y amarillo el corazón. ¿Quién soy?");
          verificarRespuesta(Adivinanza5, "HUEVO");
          break;
        default:
          alert("Opción inválida. Por favor, elige un número del 1 al 5.");
          break;
      }
    }
     alert("Tu puntaje de respuestas correctas es: " + respuestasCorrectas);

}
