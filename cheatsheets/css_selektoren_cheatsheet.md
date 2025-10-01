# CSS-Selektoren in JavaScript – Cheatsheet

## Grundlagen

### Einzelne Elemente
- `document.querySelector("div")` → Erstes `<div>`-Element  
- `document.querySelectorAll("div")` → Alle `<div>`-Elemente (NodeList)  

### ID-Selektor
- `document.querySelector("#meinElement")` → `<div id="meinElement">`  

### Klassen-Selektor
- `document.querySelector(".active")` → Erstes Element mit `class="active"`  
- `document.querySelectorAll(".active")` → Alle Elemente mit `class="active"`

### Attribut-Selektoren
- `document.querySelector('[type="text"]')` → Erstes `<input type="text">`  
- `document.querySelectorAll('[data-id]')` → Alle Elemente mit Attribut `data-id`

### Verschachtelte Selektoren
- `document.querySelector("ul li.active")` → Erstes `<li>` mit Klasse `active` innerhalb von `<ul>`  
- `document.querySelectorAll("section > p")` → Alle direkten `<p>`-Kinder von `<section>`

### Pseudoklassen
- `document.querySelector("li:first-child")` → Erstes `<li>` im Elterncontainer  
- `document.querySelector("li:last-child")` → Letztes `<li>`  
- `document.querySelector("li:nth-of-type(2)")` → Zweites `<li>`
- `document.querySelector("li:nth-child(2)")` → Zweites Kind, das ein `<li>` ist

### Kombinatoren

#### Nachfahr-Selektor (Leerzeichen)
- `div p` → Alle `<p>`-Elemente innerhalb eines `<div>`

#### Kind-Selektor (`>`)
- `div > p` → Nur direkte `<p>`-Kinder eines `<div>`

#### Nachbar-Selektor (`+`)
- `h1 + p` → Das erste `<p>` direkt nach einem `<h1>`

---

## Häufige Fehler

1. **Falscher Selektor**
   ```js
   document.querySelector("meinElement") // Falsch, fehlt "#"
   document.querySelector("#meinElement") // Richtig
   ```

2. **Verwechslung von `querySelector` und `querySelectorAll`**
   ```js
   document.querySelectorAll(".item").style.color = "red" // Fehler, NodeList
   Array.from(document.querySelectorAll(".item"))
     .forEach(el => el.style.color = "red") // Richtig
   ```

3. **Erwartung, dass `getElementById` ein CSS-Selektor akzeptiert**
   ```js
   document.getElementById("#meinElement") // Fehler, "#" unzulässig
   document.getElementById("meinElement")  // Richtig
   ```

4. **`NodeList` mit Array verwechseln**
   - `querySelectorAll` liefert **NodeList**, nicht echtes Array.
   - Lösung: `Array.from()` oder Spread-Operator `[...]`.

5. **Element vor DOM-Ladung suchen**
   ```js
   document.querySelector("#id") // Null, wenn Script im <head> steht
   document.addEventListener("DOMContentLoaded", () => {
     document.querySelector("#id") // Richtig
   })
   <script src="script.js" defer></script> // Ebenfalls richtig
   ```

6. **Mehrfach-ID**
   - IDs müssen eindeutig sein.  
   - `document.querySelector("#id")` liefert nur das erste, selbst wenn mehrere existieren.

---

## Vergleich mit älteren Methoden

- `getElementById("id")` → Schneller, aber nur ID.  
- `getElementsByClassName("class")` → HTMLCollection, live.  
- `getElementsByTagName("div")` → Alle `<div>`, HTMLCollection.  
- `querySelector(All)` → Flexibel mit CSS-Syntax, aber statische NodeList.
