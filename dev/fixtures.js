/* Dati di prova per dev/break-ui.html. Entrano nella pagina dagli stessi punti dei dati veri: i campi del modulo.
   Non fanno parte dell'app. */
(function(){
"use strict";
window.FIXTURES = {
  demo: {
    label: "Demo",
    weight: "85", sex: "M",
    d: {
      quad: {side:"dx", l:["38","40","39"], s:["45","46","47"], lp:"35", sp:"46", lpain:"1"},
      ham:  {side:"dx", l:["24","25","24"], s:["28","27","28"]},
      add:  {v:["44","46","45"], base:"46"}
    },
    name: "Marco Rossi", note: "Continua con gli esercizi a casa tre volte a settimana."
  },
  worst: {
    label: "Caso peggiore",
    weight: "118,5", sex: "M",
    d: {
      /* visita precedente quasi uguale (LSI stabile); dolore alto */
      quad: {side:"dx", l:["33","33","34"], s:["52,5","55","54"], lp:"33,3", sp:"53,7", lpain:"7"},
      /* errore di battitura reale: 235 al posto di 23,5 */
      ham:  {side:"dx", l:["22","24","235"], s:["30","31","29"], lp:"22,3", sp:"30"},
      /* lato "leso" più forte del sano */
      abd:  {side:"sx", l:["28","29","27"], s:["22","21","23"]},
      /* una sola prova, solo sul leso */
      hf:   {side:"dx", l:["31,5","",""], s:["","",""]},
      /* flessori plantari: valori alti, tipici con cinghia */
      pf:   {side:"dx", l:["118","135","128,5"], s:["152","160","158,5"]},
      er:   {side:"dx", l:["8,5","9","8"], s:["13","12,5","13,5"]},
      /* NRS fuori scala: 12 invece di 2 */
      ir:   {side:"dx", l:["14","15","14,5"], s:["16","17","16,5"], lpain:"12"},
      add:  {v:["45,5","47","46"], base:"52"}
    },
    name: "Ștefan-Alexandru Țăranu",
    note: "Ottimo lavoro! 💪 Prossime 3 settimane: squat bulgaro 4×8, Nordic 3×6 → poi rivalutiamo. Se senti dolore > 3/10 fermati e scrivimi. Ricorda: l’obiettivo è l’LSI ≥ 90% prima del rientro in campo… “piano piano”."
  },
  noweight: {
    label: "Senza peso",
    weight: "", sex: "F",
    d: { quad: {side:"sx", l:["30","31","29"], s:["36","35","37"]}, add: {v:["38","40","39"]} }
  },
  empty: { label: "Vuoto", d: {} }
};
window.FIXTURE_ORDER = ["demo","worst","noweight","empty"];
})();
