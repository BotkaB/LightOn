// 1 lámpa megjelenítése constructor(ertek, index, szuloElem)
//1 div,
//ha rákattintok, kiváltódik a kapcsol esemény
//ekkor vissza kell tudni adni egy sorsámot, indexét.

export default class Lampa {
  //adattagok
  #ertek;
  #index;
  #szuloElem;
  //construktor -
  constructor(ertek, index, szuloElem) {
    this.#ertek = ertek;
    this.#index = index;
    this.#szuloElem = szuloElem;
  
    this.kiir();
   // this.lampaElem = $(".lampa:last");
   //közvetlenül a kapott szülőelemet 
   //használja a szín beállításához, így minden lámpa megfelelően beállítja a színét.
   this.lampaElem = this.#szuloElem;

    if (this.#ertek){
        this.lampaElem.addClass("fel")
    }else{
        this.lampaElem.addClass("le")
    }
  
    //console.log(this)
    this.esemenyKezelo();
  }
  //tagfüggvény
  kiir() {
    //egyetlen egy kép kíírása
    this.#szuloElem.append(`
              <div class="lampa ">                  
              </div>
              `);
  }

  //gombesemények kezelése
  esemenyKezelo() {
    this.lampaElem.on("click", () => {
      const e = new CustomEvent("kapcsol", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
