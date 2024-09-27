// Mi jellemzi a program állapotát?
// lista=[True, True,True, True,True, True,True, True,True]
//True - fel van kapcsolva a lámpa
//aktIndex - az az index, amelyik lámpára épp rákattintottam.

//getLista - visszaadja a listát, az aktuális állapottal

//szomszedokKapcsolasa(id) - megváltoztatja a listában az id elem értékét, és azok szomszédait is

export default class LightOnModell {
  #lista = [];

  constructor(n=3) {

    this.kezdetiAllapot(n);

  }
  getLista() {
    return this.#lista
  }
  szomszedokKapcsolasa(id) {
    //megváltoztatja a listában az aktuális elemet
    //this.#lista[id] = !this.#lista[id]
    //illetve a szomszédokat
    const n = Math.sqrt(this.#lista.length);
    const x = Math.floor(id / n);
    const y = id % n;

    // Az aktuális lámpa állapotának megváltoztatása
    this.#lista[id] = !this.#lista[id];
     // Szomszédos lámpák állapotának megváltoztatása
     const szomszedok = [
      { x: x - 1, y: y }, // fel
      { x: x + 1, y: y }, // le
      { x: x, y: y - 1 }, // balra
      { x: x, y: y + 1 }  // jobbra
    ];
    szomszedok.forEach(({ x, y }) => {
      if (x >= 0 && x < n && y >= 0 && y < n) {
        const szomszedId = x * n + y;
        this.#lista[szomszedId] = !this.#lista[szomszedId];
      }
    });
  }
  

  kezdetiAllapot(n) {

    for (let i = 0; i < n * n; i++) {
      this.#lista.push(Math.random() > 0.5)
    }

  }
}
