# Kravspecifikation

## Funktionella krav

    1. Användaren ska kunna skriva in sitt användarnamn.
    2. Användaren ska ha möjlighet att välja mellan olika teman för att variera brickornas utseende.
    3. Användaren ska kunna välja hur många brickor som ska användas i datorns rad, men det ska bara vara möjlighet att välja 1 - 8 brickor. 
    4. Det ska finnas instruktioner som användaren kan följa för att förstå spellogiken. 
    5. Användaren ska kunna skapa en rad med brickor i gissningsraden som motsvarar exakt det antal som användaren valde innan spelet startades. 
    6. Efter att användaren skickat in sin gissning så ska ett resultat visas. 
    7. Om användaren gissade fel så ska användaren kunna välja mellan att ta bort alla brickor eller bara felaktiga och därefter kunna välja nya brickor. 
    8. Användaren ska kunna se hur många gissningar som har använts. 
    9. När användaren har lyckats placera alla brickor på rätt plats ska användaren bli informerad om det. 

### Ickefunktionella produktkrav (non-functional product requirements)

    Applikationen ska ha en användarvänlig design.

    Applikationen ska ha god prestanda och snabb laddningstid.

    Koden ska vara välstrukturerad och lätt att förstå.

### Organisationskrav (non-functional organizational requirements)

    Utvecklingen av applikationen sker med hjälp av Typescript, Javascript, HTML och CSS. 

### Versionshantering

    Versionshantering sköts med hjälp av Git och en gitignore-fil ser till att rätt filer hamnar på GitHub.

### Kodstandard

    Applikationen ska använda ESlint.

### Koddokumentation

    Dokumentation i README filformat för att det ska vara lätt att få en översikt över applikationen.

    Dokumentation väsentlig kod som klasser, funktioner och metoder ska ske och kompletteras med enskilda radkommentarer i de fall det behövs.

## Externa krav (non-functional external requirements)

### Etiska krav

    Applikationen ska inte skada någon individ fysiskt eller känslomässigt och den ska inte bryta mot några samhälleliga normer.

### Lagar & Standarder

    Applikationen ska följa lagar och standarder. Inga uppgifter om användarens användarnamn eller spelhistorik sparas i någon databas eller på någon server. 
