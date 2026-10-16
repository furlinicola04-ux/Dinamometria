# Formato del registro CSV

Il registro (`registro_dinamometria.csv`, modello in [`data/modello_valutazioni.csv`](../data/modello_valutazioni.csv)) contiene tutte le valutazioni fatte con il Muscle Meter (MAT), che misura in **kg**. Si apre con Excel: separatore punto e virgola, decimali con la virgola, codifica UTF-8.

Se apri il registro con Excel e lo risalvi, Excel cambia le date in GG/MM/AAAA e spesso salva il file in Windows-1252 invece che in UTF-8. La pagina se ne accorge all'import: riporta le date ad AAAA-MM-GG e rilegge correttamente ° e lettere accentate. Il registro che scarichi dalla pagina torna sempre nel formato giusto.

## Una riga per atleta, data, distretto e lato
È il formato "lungo" (*tidy data*):
- la pagina trova da sola la seduta precedente dello stesso atleta e distretto e la usa come "visita precedente";
- tutte le sedute stanno nello stesso file, così si vedono le curve di recupero;
- per la tesi si importa così com'è in Excel (tabelle pivot), Jamovi, SPSS o R senza doverlo rimodellare.

## Colonne
| Colonna | Contenuto | Perché serve |
|---|---|---|
| id_atleta | codice anonimo (es. R01) | privacy: il nome resta fuori dal registro (finisce solo nel PDF) |
| data | AAAA-MM-GG | ordina le sedute e permette il confronto nel tempo |
| peso_kg | peso del giorno | forza relativa (kgf/kg) = picco ÷ peso |
| sesso | M/F | sceglie i riferimenti di letteratura |
| distretto | quad, ham, add, abd, hf, pf, er, ir | gli stessi codici della pagina |
| lato_leso | dx/sx, vuoto per lo squeeze bilaterale | indica quale lato è il numeratore dell'LSI |
| lato | dx, sx o bil | lato misurato in questa riga |
| prova_1_kg … prova_3_kg | valori letti sul MAT | la pagina usa il picco e calcola il CV% |
| posizione | setup usato | la riproducibilità dipende da un setup identico tra sedute |
| dolore_0_10 | NRS durante il test | il dolore inibisce la forza e la fa sottostimare |
| note | libero | |

## Come si usa
1. Apri `index.html` nel browser e premi **Importa CSV** per caricare il registro.
2. Scrivi il codice atleta e premi **Carica atleta dal registro**: peso, lato leso e valori della visita precedente si compilano da soli.
3. Inserisci le prove e premi **Salva seduta e scarica CSV**: scarichi il registro completo aggiornato, che sostituisce il file vecchio. Se salvi due volte la stessa seduta (stesso atleta e data), la seconda sostituisce la prima.
