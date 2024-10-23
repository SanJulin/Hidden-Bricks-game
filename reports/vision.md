# Vision

### Bakgrund och problembeskrivning
Den här appen representerar ett lättspelat Mastermindliknande spel där spelaren ska försöka lista ut vilka brickor som datorn har i sin rad på så få omgångar som möjligt. I den understa raden finns åtta brickor som alla tillhör ett tema som spelaren har valt. Spelaren ska flytta upp 5 brickor till den övre raden. När spelaren är nöjd med sin gissning jämför datorn spelarens gissning med sin egen rad. Om rätt bricka ligger på rätt plats så får brickan en grön ram. Om en bricka finns med i datorns rad, men ligger på fel plats så får brickan en gul ram och om brickan inte finns med alls så får den en röd ram. Spelaren kan sen välja mellan att rensa hela raden eller bara ta bort felaktiga brickor innan nästa försök. Tanken med spelet att det ska vara snabbspelat spel som tränar minnet och är lätt att förstå för spelare i alla åldrar.

### Baskrav/Egenskaper/Features/Unique Selling Points
Spelet liknar Mastermind, men erbjuder större valfrihet för spelaren som i den här varianten kan skriva in sitt namn, välja vilket tema de vill ha på brickorna (djur, färger, flaggor, filmer eller yrken) och hur många brickor de vill att datorn ska ha i sin hemliga rad (1 - 8 brickor). Efter varje runda får spelaren information om sitt resultat och om hur många rundor som har krävts.

### Användar/mål-grupper 
Appen riktar sig till alla som vill spela ett snabbspelat spel där man får chans att träna minnet. Tanken är att spelare i alla åldrar ska kunna spela då man inte behöver kunna läsa för att spela. 

### Marknad
Spelet är på engelska och kan därför användas av spelare i de flesta delar av världen. 

### Beskriv konkurrerande och liknande system.
Det finns stora likheter mellan appen och flera mastermindliknande spel som exempelvis MasterMind Classic och FunnyGames mastermind, men i den här versionen så går det att välja mellan flera olika teman och även hur många brickor man vill att datorn ska ha i sin rad. En annan skillnad är att man bara ser resultatet av sin senaste gissning vilket innebär att minnet får lite extra träning. 

### Teknik
Appen är skriven i Typescript och Javascript med HTML och CSS för styling samt Vite för att lokal körning i webbläsaren. För driftsättning har Netlify använts. 