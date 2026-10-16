# Dinamometria

Pagina web per la valutazione clinica della forza isometrica con dinamometro manuale (Muscle Meter, MAT).

**`index.html`** è la pagina. Si apre con doppio clic nel browser, senza installare niente. Calcola:
- picco e CV% delle prove;
- forza relativa (kgf/kg), LSI e deficit;
- rapporti H:Q ed ER/IR.

Confronta i risultati con le soglie del manuale e con la letteratura e genera il PDF per l'atleta, da scaricare o condividere (WhatsApp, Mail, AirDrop).

La pagina non salva niente e non invia niente a nessun server. I dati della seduta restano solo finché la pagina è aperta: prima di chiuderla scarica o condividi il PDF. Se vuoi confrontare con la visita precedente, inserisci a mano i valori nei campi "Visita precedente".

## Usarla sul telefono come app
1. Su GitHub apri **Settings → Pages → Build and deployment**. Scegli Source "Deploy from a branch", branch `main`, cartella `/ (root)`, e premi Save.
2. Dopo un paio di minuti la pagina è su https://furlinicola04-ux.github.io/Dinamometria/
3. Aprila sul telefono:
   - **iPhone (Safari)**: tasto Condividi → "Aggiungi alla schermata Home".
   - **Android (Chrome)**: menu ⋮ → "Installa app" (o "Aggiungi a schermata Home").

L'app si apre a schermo intero e funziona anche offline.

## Provare la pagina con dati estremi

`dev/break-ui.html` apre la pagina con un interruttore in basso: *Demo*, *Caso peggiore*, *Senza peso* e *Vuoto*. I dati sono in `dev/fixtures.js` e sono casi realistici, per esempio:
- una prova battuta senza virgola (235 invece di 23,5);
- un NRS di 12;
- un nome con lettere rumene e una nota con emoji nel PDF.

Ogni volta che cambi `index.html`, passa da tutti i casi per controllare che niente si rompa. È solo uno strumento di prova: l'app non lo usa e non lo mette nella cache offline.
