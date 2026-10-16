/* Dati di prova per dev/break-ui.html. Entrano nella pagina dagli stessi punti dei dati veri:
   i campi del modulo e l'import del registro CSV. Non fanno parte dell'app. */
(function(){
"use strict";
const HEAD = "id_atleta;data;peso_kg;sesso;distretto;lato_leso;lato;prova_1_kg;prova_2_kg;prova_3_kg;posizione;dolore_0_10;note";
const QUAD = "Seduto, ginocchio a 60°, cinghia sopra i malleoli";
const iso = (d) => d.toISOString().slice(0,10);
const daysAgo = n => { const d = new Date(); d.setDate(d.getDate()-n); return iso(d); };
const itShort = isoD => isoD.split("-").reverse().join("/");

/* Registro con una sola seduta precedente, come esce dalla pagina */
function oneSession(id, date, fmtDate){
  const D = fmtDate ? fmtDate(date) : date;
  return [HEAD,
    `${id};${D};118,5;M;quad;dx;dx;33;33;34;${QUAD};2;`,
    `${id};${D};118,5;M;quad;dx;sx;52;55;54;${QUAD};0;`,
    `${id};${D};118,5;M;ham;dx;dx;22;23;22;Prono, ginocchio a 30°, cinghia sopra i malleoli;;`,
    `${id};${D};118,5;M;ham;dx;sx;30;31;29;Prono, ginocchio a 30°, cinghia sopra i malleoli;;`,
    `${id};${D};118,5;M;add;;bil;44;46;45;Supino, anche e ginocchia a 45°, spinta bilaterale;;`
  ].join("\r\n") + "\r\n";
}
/* Registro passato da Excel: più sedute, date gg/mm/aaaa e file salvato in Windows-1252 */
function excelRegistry(){
  const id = "RUG-U23-014", rows = [HEAD];
  [120, 75, 40, 12].forEach((n,k)=>{
    const D = itShort(daysAgo(n)), base = 30 + k*4;
    rows.push(`${id};${D};118,5;M;quad;dx;dx;${base};${base+1};${base};${QUAD};;`);
    rows.push(`${id};${D};118,5;M;quad;dx;sx;54;55;53;${QUAD};;`);
  });
  return rows.join("\r\n") + "\r\n";
}
/* Registro di tre stagioni: 40 atleti, 30 sedute ciascuno, tutti i distretti */
function bigRegistry(){
  const rows = [HEAD], dists = ["quad","ham","abd","hf","pf","er","ir"];
  for(let a=1;a<=40;a++){
    const id = "R" + String(a).padStart(2,"0");
    for(let s=0;s<30;s++){
      const D = daysAgo(1100 - s*35 - a);
      dists.forEach(d=>{
        rows.push(`${id};${D};90;M;${d};dx;dx;30;31;32;;;`);
        rows.push(`${id};${D};90;M;${d};dx;sx;34;35;33;;;`);
      });
      rows.push(`${id};${D};90;M;add;;bil;44;45;46;;;`);
    }
  }
  return rows.join("\r\n") + "\r\n";
}

window.FIXTURES = {
  demo: {
    label: "Demo",
    athId: "R01", weight: "85", sex: "M",
    csv: oneSession("R01", daysAgo(30)).replace(/118,5/g,"85").replace(/;33;33;34;/,";34;35;36;"), load: true,
    d: {
      quad: {side:"dx", l:["38","40","39"], s:["45","46","47"], lpain:"1"},
      ham:  {side:"dx", l:["24","25","24"], s:["28","27","28"]},
      add:  {v:["44","46","45"], base:"46"}
    },
    name: "Marco Rossi", note: "Continua con gli esercizi a casa tre volte a settimana."
  },
  worst: {
    label: "Caso peggiore",
    athId: "RUG-U23-014", weight: "118,5", sex: "M",
    csv: oneSession("RUG-U23-014", daysAgo(21)), load: true,
    d: {
      /* media 33,333… nella visita precedente; dolore alto; posizione lunga scritta a mano */
      quad: {side:"dx", l:["33","33","34"], s:["52,5","55","54"], lpain:"7",
             pos:"Seduto su lettino alto, schienale a 90°, ginocchio a 60° misurato col goniometro, cinghia 2 cm sopra i malleoli, mani al petto"},
      /* errore di battitura reale: 235 al posto di 23,5 */
      ham:  {side:"dx", l:["22","24","235"], s:["30","31","29"]},
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
  empty: {
    label: "Vuoto",
    csv: HEAD + "\r\n", csvName: "registro_vuoto.csv", load: false, d: {}
  },
  excel: {
    label: "Registro da Excel",
    athId: "RUG-U23-014", weight: "", sex: "M",
    csv: excelRegistry(), csvEncoding: "win1252", csvName: "registro_dinamometria.csv", load: true,
    d: { quad: {side:"dx", l:["44","45","46"], s:["54","55","53"]} }
  },
  big: {
    label: "Registro grande",
    athId: "R07", weight: "", sex: "M",
    csv: bigRegistry(), load: true,
    d: { quad: {side:"dx", l:["38","40","39"], s:["45","46","47"]} }
  }
};
window.FIXTURE_ORDER = ["demo","worst","empty","excel","big"];
})();
