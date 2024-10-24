# Testspecifikation

## 1 Lägga till användarnamn
**Krav: 1**

### 1.1 Registrering med ett korrekt användarnamn

1. Skriv in Kalle. 
2. Kontrollera att texten "Choose a theme for the game visas. 


### 1.2 Registrering med ett felaktigt användarnamn

1. Klicka på Submit utan att skriva in ett användarnamn. 
2. Kontrollera att ett felmeddelande visas.
3. Skriv in 5 och klicka på Submit. 
4. Kontrollera att ett felmeddelande visas.


## 2 Välja tema
**Krav: 2**
**Förutsättning - ett användarnamn är redan registrerat**

1. Klicka på animals. 
2. Kontrollera att texten "How many bricks would you like to play with" visas.


## 3 Välja antal brickor
**Krav: 3**
**Förutsättning - ett användarnamn och tema är redan registrerat**

### 1.1 Registrering med ett korrekt antal brickor

1. Skriv in 5 i rutan och klicka på "Start game".
2. Kontrollera att den översta raden innehåller 5 st tomma rutor.


### 1.1 Registrering med fel antal brickor

1. Skriv in g i rutan och klicka på "Start game".
2. Kontrollera att ett felmeddelande visas. 
3. Skriv in 15 i rutan och klicka på "Start game".
4. Kontrollera att ett felmeddelande visas. 


## 4 Visa instruktioner
**Krav: 4**
**Förutsättning - användarnamn, tema och antal brickor är registrerade**

1. Kontrollera att en text med instruktioner om hur man spelar spelet visas. 


## 5 Skapa och skicka in en gissningsrad
**Krav: 5**
**Förutsättning - användarnamn, tema och antal brickor är registrerade**

### 5.1 Komplett rad

1. Fyll den övre raden med brickor från den undre raden och klicka på check answer.
2. Kontrollera att samtliga rutor i den övre raden får färgade kantlinjer. 

### 5.2 Felaktig rad

1. Flytta bara en bricka från den undre raden och klicka på check answer
2. Kontrollera att ett felmeddelande visas som förklarar att man måste lägga till något i alla rutor. 


## 6 Visa resultat

**Krav: 6, 9**
**Förutsättning - Användaren har klickat på Check answer**

### 6.1 Gröna ramar runt alla brickor
1. Kontrollera att texten "Congratulations! You made it!" visas om alla brickor på den övre raden har gröna ramar.

### 6.2 Blandade färgor på brickorna
1. Kontrollera att texten "Wrong answer och instruktioner om färgerna" visas om brickorna på den övre raden har blandade färger på ramarna.
 

## 7 Ta bort brickor

**Krav: 7**
**Förutsättning - Användaren har klickat på Check answer och fått ett resultat**

### 7.1 Grön ram runt minst en bricka
1. Klicka på "clear wrong guesses".
2. Kontrollera att alla rutor i övre raden som inte har en grön ram töms och får en svart ram.
3. Kontrollera att det går att lägga till nya brickor i de tomma rutorna.  

### 7.2 Gula, röda eller blandade färger på ramarna
1. Klicka på "clear all".
2. Kontrollera att alla rutor i övre raden töms och får en svart ram.
3. Kontrollera att det går att lägga till nya brickor i de tomma rutorna.  


## 8 Visa antalet gissningar

**Krav: 8**
**Förutsättning - Användaren har klickat på Check answer och fått ett resultat**

1. Kontrollera att det finns en text uppe till höger på skärmen som visar hur många gånger användaren har gissat och att resultatet är 1 eller högre. 



