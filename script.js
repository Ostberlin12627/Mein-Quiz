// Fragenpool
const fragenpool = [
    {
        frage: "Was ist die Hauptstadt von Frankreich?",
        antworten: ["Paris", "Berlin", "Rom", "Madrid"],
        korrekteAntwort: "Paris"
    },
    {
        frage: "Welche Farbe hat eine reife Banane?",
        antworten: ["Gelb", "Rot", "Grün", "Blau"],
        korrekteAntwort: "Gelb"
    },
];

// Variablen deklarieren
var randomFrage, randomAntworten, frage, antwort_a, antwort_b, antwort_c, antwort_d;

// Funktionen definieren
function mischeAntworten(antworten) {
    return antworten.slice().sort(function() { return 0.5 - Math.random() });
}

function ueberpruefeAntwort(frage, antwort) {
    return frage.korrekteAntwort === antwort;
}

function naechsteFrage() {
    var randomFrageIndex = Math.floor(Math.random() * fragenpool.length);
    return fragenpool[randomFrageIndex];
}

function naechsteFrageUndAnzeigen() {
    randomFrage = naechsteFrage();
    randomAntworten = mischeAntworten(randomFrage.antworten);
    frage = randomFrage.frage;
    antwort_a = randomAntworten[0];
    antwort_b = randomAntworten[1];
    antwort_c = randomAntworten[2];
    antwort_d = randomAntworten[3];
    document.getElementById("fragelabel").textContent = frage;
    document.getElementById("antwort_a").textContent = antwort_a;
    document.getElementById("antwort_b").textContent = antwort_b;
    document.getElementById("antwort_c").textContent = antwort_c;
    document.getElementById("antwort_d").textContent = antwort_d;
}

// Beispiel: Eine zufällige Frage aus dem Fragenpool auswählen
randomFrage = naechsteFrage();
randomAntworten = mischeAntworten(randomFrage.antworten);

// Antworten und Frage in HTML setzen
frage = randomFrage.frage;
antwort_a = randomAntworten[0];
antwort_b = randomAntworten[1];
antwort_c = randomAntworten[2];
antwort_d = randomAntworten[3];

document.getElementById("fragelabel").textContent = frage;
document.getElementById("antwort_a").textContent = antwort_a;
document.getElementById("antwort_b").textContent = antwort_b;
document.getElementById("antwort_c").textContent = antwort_c;
document.getElementById("antwort_d").textContent = antwort_d;

// Eventlistener für den Button hinzufügen
var button = document.getElementById("antwort_vergleichen");
button.addEventListener("click", function() {
  var selectedAntwort = document.querySelector('input[name="antwort"]:checked');

  if (selectedAntwort) {
    // Antwort überprüfen und entsprechende Meldung anzeigen
    switch(selectedAntwort.value) {
      case "A":
        if (ueberpruefeAntwort(randomFrage, antwort_a)) {
            alert("Die Antwort: " + antwort_a + " ist richtig!");
            naechsteFrageUndAnzeigen();
        } else {
            alert("Die Antwort: " + antwort_a + " ist falsch!");
        }
        break;
      case "B":
        if (ueberpruefeAntwort(randomFrage, antwort_b)) {
            alert("Die Antwort: " + antwort_b + " ist richtig!");
            naechsteFrageUndAnzeigen();
        } else {
            alert("Die Antwort: " + antwort_b + " ist falsch!");
        }
        break;
      case "C":
        if (ueberpruefeAntwort(randomFrage, antwort_c)) {
            alert("Die Antwort: " + antwort_c + " ist richtig!");
            naechsteFrageUndAnzeigen();
        } else {
            alert("Die Antwort: " + antwort_c + " ist falsch!");
        }
        break;
      case "D":
        if (ueberpruefeAntwort(randomFrage, antwort_d)) {
            alert("Die Antwort: " + antwort_d + " ist richtig!");
            naechsteFrageUndAnzeigen();
        } else {
            alert("Die Antwort: " + antwort_d + " ist falsch!");
        }
        break;
      default:
        alert("Nichts wurde ausgewählt");
    }
  } else {
    alert("Bitte wähle eine Antwort aus.");
  }
});
