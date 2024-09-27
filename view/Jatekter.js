//kap egy listát a constructor(lista, szuloElem)
//példányosítja a lámpákat (9db)

import Lampa from "./Lampa.js";
export default class JatekTer {
  #lista = []; //privát adattag
  #taroloElem;
  constructor(lista, taroloELEM) {
    this.#lista = lista;
    this.#taroloElem = taroloELEM;
    this.#taroloElem.empty();
    this.kiir();
  }

  kiir() {
    const n = Math.sqrt(this.#lista.length);
  

    
  let tabla = `<table id="tabla">`;
    for (let i = 0; i < n; i++) {
      tabla += "<tr>";
      for (let j = 0; j < n; j++) {
        const index = i * n + j;
        tabla += `<td><div id="lampa-${index}" class="lampa" data-index="${index}"></div></td>`;
      }
      tabla += "</tr>";
    }
    tabla += "</table>";
    this.#taroloElem.append(tabla);

    this.#lista.forEach((ertek, index) => {
      new Lampa(ertek, index, $(`#lampa-${index}`));
    });
  }

 
}
