# Dinamometria

Pagina web per la valutazione clinica della forza isometrica con dinamometro manuale (Muscle Meter, MAT) e per l'analisi dei dati raccolti.

- **`index.html`**: la pagina. Si apre con doppio clic nel browser, senza installare niente. Calcola picco e CV% delle prove, forza relativa (kgf/kg), LSI, deficit, rapporti H:Q ed ER/IR, li confronta con le soglie del manuale e con la letteratura e genera il PDF per l'atleta.
- **Registro CSV**: la pagina importa e salva un registro con tutte le sedute, da cui ricava la visita precedente e lo storico di ogni distretto. Formato descritto in [`docs/formato_dati.md`](docs/formato_dati.md), modello in [`data/modello_valutazioni.csv`](data/modello_valutazioni.csv).

I dati restano sul computer: la pagina non invia niente a nessun server.

## Usarla sul telefono come app
1. Su GitHub: **Settings → Pages → Build and deployment**, Source "Deploy from a branch", branch `main`, cartella `/ (root)`, Save.
2. Dopo un paio di minuti la pagina è su https://furlinicola04-ux.github.io/Dinamometria/
3. Aprila sul telefono:
   - **iPhone (Safari)**: tasto Condividi → "Aggiungi alla schermata Home".
   - **Android (Chrome)**: menu ⋮ → "Installa app" (o "Aggiungi a schermata Home").

L'app si apre a schermo intero e funziona anche offline. Il registro CSV si importa e si salva dai file del telefono (app File / Download).

## Provare la pagina con dati estremi

`dev/break-ui.html` apre la pagina con un interruttore in basso: *Demo*, *Caso peggiore*, *Vuoto*, *Registro da Excel* e *Registro grande*. I dati sono in `dev/fixtures.js` e sono casi realistici: una prova battuta senza virgola (235 invece di 23,5), un registro risalvato da Excel, un nome con lettere rumene nel PDF, 18.000 righe di registro. Ogni volta che cambi `index.html`, passa da tutti e cinque per controllare che niente si rompa. È solo uno strumento di prova: l'app non lo usa e non lo mette nella cache offline.

