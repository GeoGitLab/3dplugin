# MapStore 3D Volume Plugin per GeoNode

## Descrizione

Il **MapStore 3D Volume Plugin** è un'estensione per GeoNode che aggiunge funzionalità avanzate di calcolo volumetrico 3D utilizzando Cesium. Il plugin permette agli utenti di disegnare poligoni 3D sulla superficie terrestre e calcolare automaticamente volumi e aree.

## Caratteristiche Principali

- 🎯 **Disegno Poligoni 3D**: Interfaccia intuitiva per disegnare poligoni sulla superficie terrestre
- 📊 **Calcolo Volume**: Calcolo automatico del volume del poligono 3D
- 📏 **Calcolo Area**: Calcolo dell'area della superficie del poligono
- 🗺️ **Integrazione Cesium**: Funziona esclusivamente in modalità 3D con Cesium
- 📤 **Esportazione Risultati**: Possibilità di esportare i risultati dei calcoli
- 🔄 **Reset e Gestione**: Funzionalità di reset per iniziare nuovi calcoli

## Prerequisiti

- GeoNode con MapStore integrato
- Cesium 3D viewer abilitato
- Node.js (versione 14 o superiore)
- npm o yarn

## Installazione

### 1. Clonare il Repository

```bash
git clone <repository-url>
cd mapstore-3d-volume-plugin
```

### 2. Installare le Dipendenze

```bash
npm install
```

### 3. Compilare il Plugin

```bash
npm run build
```

Il file compilato sarà disponibile in `dist/mapstore-3d-volume-plugin.js`

### 4. Integrazione in GeoNode

#### Metodo 1: Integrazione Manuale

1. Copiare il file `dist/mapstore-3d-volume-plugin.js` nella directory dei plugin di GeoNode
2. Aggiungere il plugin alla configurazione di MapStore:

```javascript
// In plugins.js o configurazione simile
{
  name: 'VolumeCalculator',
  path: 'path/to/mapstore-3d-volume-plugin.js'
}
```

#### Metodo 2: Integrazione via npm

```bash
npm install mapstore-3d-volume-plugin
```

E importare nel codice:

```javascript
import VolumeCalculatorPlugin from 'mapstore-3d-volume-plugin';
```

## Utilizzo

### Interfaccia Utente

Il plugin aggiunge un pannello di controllo nell'interfaccia di MapStore con i seguenti elementi:

1. **Pulsante "Disegna Poligono"**: Avvia la modalità di disegno
2. **Pulsante "Calcola Area"**: Calcola l'area del poligono disegnato
3. **Pulsante "Reset"**: Cancella il poligono e i risultati

### Flusso di Lavoro

1. **Attivazione**: Il plugin è visibile solo in modalità Cesium 3D
2. **Disegno**: Cliccare su "Disegna Poligono" e disegnare sulla mappa
3. **Calcolo**: Utilizzare "Calcola Area" per ottenere i risultati
4. **Risultati**: I risultati vengono visualizzati nel pannello
5. **Reset**: Utilizzare "Reset" per iniziare un nuovo calcolo

### Funzionalità Avanzate

- **Calcolo Volume**: Il plugin calcola automaticamente il volume del poligono 3D
- **Calcolo Area**: Calcolo dell'area della superficie
- **Esportazione**: Possibilità di esportare i risultati in vari formati

## Sviluppo

### Struttura del Progetto

```
mapstore-3d-volume-plugin/
├── src/
│   ├── index.js                 # Entry point del plugin
│   ├── VolumeCalculatorPlugin.jsx  # Componente principale
│   └── components/              # Componenti aggiuntivi
├── dist/                        # File compilati
├── package.json                 # Dipendenze e configurazione
├── webpack.config.js           # Configurazione webpack
└── README.md                   # Questo file
```

### Script Disponibili

```bash
# Compilazione per produzione
npm run build

# Sviluppo con watch mode
npm run dev
```

### Dipendenze Principali

- **@mapstore/utils**: Utility MapStore
- **@mapstore/actions**: Azioni Redux per MapStore
- **@mapstore/reducers**: Reducer per lo stato
- **@mapstore/selectors**: Selettori per lo stato
- **@mapstore/components**: Componenti UI MapStore
- **cesium**: Libreria 3D per la visualizzazione
- **@turf/turf**: Calcoli geometrici
- **react-bootstrap**: Componenti UI

## Configurazione

### Personalizzazione Stile

Il plugin utilizza CSS personalizzabile. Modificare i file CSS per adattare l'aspetto:

```css
.volume-calculator-plugin {
  /* Stili personalizzati */
}

.volume-calculator-panel {
  /* Stili del pannello */
}
```

### Configurazione Webpack

Il file `webpack.config.js` è configurato per:
- Compilazione ES6+ e JSX
- Gestione CSS e asset
- Output UMD per compatibilità
- External dependencies per React e Cesium

## Risoluzione Problemi

### Problemi Comuni

1. **Plugin non visibile**: Verificare che sia in modalità Cesium 3D
2. **Errori di compilazione**: Verificare le versioni di Node.js e npm
3. **Dipendenze mancanti**: Eseguire `npm install` nuovamente

### Debug

Per il debug durante lo sviluppo:

```bash
npm run dev
```

Questo attiva la modalità watch che ricompila automaticamente alle modifiche.

## Contribuire

1. Fork del repository
2. Creare un branch per la feature (`git checkout -b feature/nuova-funzionalita`)
3. Commit delle modifiche (`git commit -am 'Aggiunta nuova funzionalità'`)
4. Push del branch (`git push origin feature/nuova-funzionalita`)
5. Creare una Pull Request

## Licenza

MIT License - vedi file LICENSE per i dettagli.

## Supporto

Per supporto tecnico o domande:
- Aprire una issue su GitHub
- Contattare il team di sviluppo
- Consultare la documentazione di MapStore e GeoNode

## Changelog

### v1.0.0
- Prima release del plugin
- Funzionalità di disegno poligoni 3D
- Calcolo volume e area
- Integrazione con Cesium
- Interfaccia utente completa