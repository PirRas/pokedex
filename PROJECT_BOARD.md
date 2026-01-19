# KANTISPORTS HUB – Project Board

Stand: Alles ist geplant, noch nichts umgesetzt.

## Board Spalten
- **To Do**: geplant, noch nicht begonnen
- **In Progress**: in Arbeit
- **Done**: abgeschlossen (Definition of Done erfüllt)

---

## To Do

### EPIC 1 – Setup und Grundstruktur
- [ ] Repo Struktur erstellen (index.html, styles.css, script.js, assets)
- [ ] Grundlayout: Topbar, Tabs, Container (HTML)
- [ ] Startseite gestalten (Hero, Features, Metriken)
- [ ] Dark Theme Designsystem (CSS Variablen, Buttons, Cards, Modals)

**Definition of Done (EPIC 1)**
- Seite laedt ohne Fehler
- Startseite wirkt professionell (dark, weiss, rot)
- Tabs sind sichtbar und klickbar (auch wenn Inhalt noch leer ist)

---

### EPIC 2 – Datenmodell und Konfiguration
- [ ] Datenmodell Spieler definieren (id, name, role, sport, image, general, stats)
- [ ] Datenmodell Sportarten definieren (label, sportStats, weights, generalWeight)
- [ ] Allgemeine Stats festlegen (pace, physic, jump, endurance, coordination)
- [ ] Demo Daten erstellen (mindestens 2 Students, 2 Teacher, mehrere Sportarten)

**Definition of Done (EPIC 2)**
- Spieler und Sportarten sind als JS Objekte/Arrays vorhanden
- Keine undefined Werte bei general oder stats
- Demo Daten reichen zum Testen aller Features

---

### EPIC 3 – Single Page Navigation
- [ ] Tabs Logik implementieren (active Tab, active Page)
- [ ] Sport Tabs dynamisch generieren (aus SPORTS Objekt)
- [ ] Sportseiten dynamisch erzeugen (Cards Container + Sort Controls)
- [ ] CTA Buttons auf Startseite (zum AOTK, zur ersten Sportart)

**Definition of Done (EPIC 3)**
- Kein Page Reload
- Klick auf Tabs wechselt Sections korrekt
- Neue Sportart fuegt automatisch Tab und Seite hinzu

---

### EPIC 4 – Rating System
- [ ] Normalisierung implementieren (0..1 pro Stat innerhalb Gruppe)
- [ ] Sport Overall berechnen (general + sportbezogene Stats)
- [ ] AOTK Score berechnen (nur allgemeine Stats)
- [ ] Recompute Funktion (alles neu berechnen nach Add Player / Add Sport)

**Definition of Done (EPIC 4)**
- OverallSport existiert pro Spieler
- aotkScoreOverall existiert pro Spieler
- Nach Aenderungen werden Werte konsistent aktualisiert

---

### EPIC 5 – Spieler anzeigen (Cards + Detail)
- [ ] Cards Rendering pro Sportseite (Name, Rolle, Overall, AOTK)
- [ ] Hover Ansicht (Schnellinfos: general + sportStats)
- [ ] Klick auf Card: Detail Modal oeffnen
- [ ] Detail Modal Inhalt (alle Stats, Overall, AOTK)

**Definition of Done (EPIC 5)**
- Cards sind sauber gerendert
- Hover zeigt mehr Infos
- Detail Modal funktioniert und zeigt korrekte Daten

---

### EPIC 6 – Sortieren und Filtern
- [ ] Sortierung nach Name (asc/desc)
- [ ] Sortierung nach OverallSport (asc/desc)
- [ ] Sortierung nach AOTK Score (asc/desc)
- [ ] Sortierung nach einzelnen Stats (sport_ und gen_)

**Definition of Done (EPIC 6)**
- Sort Controls funktionieren pro Sportseite
- Sortierung ist stabil und nachvollziehbar
- Keine JS Fehler bei missing Stats

---

### EPIC 7 – Vergleichmodus (Sportseiten)
- [ ] Vergleichmodus Toggle (AN/AUS)
- [ ] Zwei Spieler Auswahl (nur gleiche Sportart)
- [ ] Vergleich Modal mit Stat Balken (general + sportStats)
- [ ] Gewinner Logik und visuelles Feedback (Animation)

**Definition of Done (EPIC 7)**
- Auswahl funktioniert und ist klar markiert
- Vergleich zeigt korrekt normalisierte Balken
- Gewinner wird logisch korrekt ermittelt

---

### EPIC 8 – AOTK Seite (3 Rankings)
- [ ] AOTK Students berechnen und anzeigen (nur general Stats)
- [ ] AOTK Teacher berechnen und anzeigen (nur general Stats)
- [ ] Gesamt AOTK berechnen und anzeigen (nur general Stats)
- [ ] Ranking Liste aller Personen nach aotkScoreOverall

**Definition of Done (EPIC 8)**
- Drei Panels zeigen jeweils den korrekten Gewinner
- Ranking Liste stimmt mit Scores ueberein
- Klick auf Ranking Card oeffnet Detail

---

### EPIC 9 – Add Player (Schueler/Lehrer + Stats)
- [ ] Add Player Modal oeffnen/schliessen
- [ ] Rolle Auswahl (student/teacher)
- [ ] Sportart Auswahl (aus SPORTS dynamisch)
- [ ] Allgemeine Stat Felder anzeigen (fix)
- [ ] Sportbezogene Stat Felder anzeigen (abhängig von Sport)
- [ ] Validierung (Name, Sport, Zahlenfelder)
- [ ] Speichern: Spieler wird hinzugefuegt, recomputeAll, re-render

**Definition of Done (EPIC 9)**
- Spieler erscheint direkt in Sportseite und AOTK
- Scores werden automatisch aktualisiert
- Keine falschen oder fehlenden Pflichtdaten

---

### EPIC 10 – Add Sport (neue Sportarten)
- [ ] Add Sport Modal oeffnen/schliessen
- [ ] Eingabe: Sport Name + Sport Key
- [ ] Stat Definition: Name + Gewicht (dynamische Zeilen)
- [ ] Validierung (Key unique, mind. 1 Stat)
- [ ] Speichern: SPORTS erweitern, Tabs/Pages neu bauen, Sort Optionen updaten

**Definition of Done (EPIC 10)**
- Neue Sportart erscheint als Tab
- Neue Sportseite hat Sortierung fuer neue Stats
- Add Player Dropdown enthaelt neue Sportart

---

### EPIC 11 – Qualität und Abgabe
- [ ] Code Kommentare und klare Struktur (Funktionsblöcke)
- [ ] Fehlerhandling (leere Listen, min=max, falsche Eingaben)
- [ ] Responsive Check (Mobile Layout)
- [ ] README schreiben (Install, Nutzung, Features, Screenshots)
- [ ] Testplan (manuelle Tests, typische Use Cases)

**Definition of Done (EPIC 11)**
- README beschreibt Projekt klar
- Keine Console Errors bei normaler Nutzung
- Projekt ist praesentationsbereit

---

## In Progress
- (leer)

---

## Done
- (leer)

---

## Globale Definition of Done (DoD)
Ein Task gilt als DONE, wenn:
- Feature laeuft ohne Fehler
- UI aktualisiert ohne Seitenreload
- Logik ist nachvollziehbar (Kommentare + klare Variablennamen)
- Feature ist in mind. 2 realistischen Testszenarien geprueft
