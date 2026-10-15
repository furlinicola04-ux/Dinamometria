# Dinamometria

Pagina web per la valutazione clinica della forza isometrica con dinamometro manuale (Muscle Meter, MAT) e per l'analisi dei dati raccolti.

- **`index.html`**: la pagina. Si apre con doppio clic nel browser, senza installare niente. Calcola picco e CV% delle prove, forza relativa (kgf/kg), LSI, deficit, rapporti H:Q ed ER/IR, li confronta con le soglie del manuale e con la letteratura e genera il PDF per l'atleta.
- **Registro CSV**: la pagina importa e salva un registro con tutte le sedute, da cui ricava la visita precedente e lo storico di ogni distretto. Formato descritto in [`docs/formato_dati.md`](docs/formato_dati.md), modello in [`data/modello_valutazioni.csv`](data/modello_valutazioni.csv).

I dati restano sul computer: la pagina non invia niente a nessun server.
