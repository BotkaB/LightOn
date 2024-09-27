// pédányosítja a modellt, és a view: JatekTer 

import LightOnModell from "../modell/LightOnModell.js"
import JatekTer from "../view/Jatekter.js"
import Lampa from "../view/Lampa.js"

//feliratkozik a kapcsol sajáteseményünkre - itt fogja meghívogatni a modell tagfüggvényeit
export default class LightOnController {
    constructor() {
        //Létrehoz egy új példányt a LightOnModell osztályból, amely a játék állapotát kezeli.
        this.loModel = new LightOnModell()
       // let lista = this.loModel.getLista()
       //A HTML-ben található tartalom osztályú elemet választja ki, amely a játéktábla szülőeleme lesz.
        this.szuloElem = $(".tartalom")
       // new JatekTer(lista, this.szuloElem)
        //new Lampa(true, 0, this.szuloElem)
       // this.kapcsolEsemeny()
       //Az input mező és a gomb kiválasztása a HTML-ből.
        this.ujJatekGomb = $("#ujJatekGomb");
        this.tablaMeretInput = $("#tablaMeret");
    // Hozzárendel egy eseménykezelőt az “Új játék” gombhoz, amely meghívja a tablaMeretBeallit metódust.
        this.ujJatekGomb.on("click", () => this.tablaMeretBeallit());
       
       // Meghívja az init metódust, amely inicializálja a játékot.
        this.init();
    }

    init() {
        //Lekéri a játék állapotát tartalmazó listát a modellből.
        let lista = this.loModel.getLista();
        //Létrehoz egy új JatekTer példányt, amely megjeleníti a játéktáblát a HTML-ben.
        new JatekTer(lista, this.szuloElem);
        //Meghívja a kapcsolEsemeny metódust, amely beállítja az eseménykezelőt a lámpák kattintására.
        this.kapcsolEsemeny();
      }

    kapcsolEsemeny() {
        //Feliratkozik a kapcsol eseményre, amely akkor váltódik ki, amikor egy lámpára kattintanak.
        $(window).on("kapcsol", (event) => {
            //event.detail - hányadik elemre kattintottam
            //Meghívja a modell szomszedokKapcsolasa metódusát, amely megváltoztatja a kattintott lámpa és szomszédai állapotát.
            this.loModel.szomszedokKapcsolasa(event.detail)
            //Frissíti a játék állapotát tartalmazó listát.
            let lista = this.loModel.getLista()
            // Újra létrehozza a játéktáblát a frissített állapot alapján.
            new JatekTer(lista, this.szuloElem)
        })
    }

    tablaMeretBeallit() {
        // Lekéri az input mező értékét és számként értelmezi.
        const n = parseInt(this.tablaMeretInput.val());
        if (isNaN(n) || n <= 0) {
          alert("Kérjük, adjon meg egy érvényes számot!");
          return;
        }
        //Létrehoz egy új modellt a megadott mérettel.
        this.loModel = new LightOnModell(n);
        //Lekéri az új játék állapotát tartalmazó listát.
        let lista = this.loModel.getLista();
//Létrehoz egy új játéktáblát az új állapot alapján.
        new JatekTer(lista, this.szuloElem);
      }
    } 
    
    //a LightOnController csak akkor példányosítódjon, amikor az oldal teljesen 
    //betöltődött, így minden szükséges HTML elem elérhető lesz a JavaScript számára.
    $(function () {
        new LightOnController();
      }); 
      
   
