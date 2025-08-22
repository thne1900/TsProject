# TypeScript Project
## - Kunskapsverket

- Började mitt projektarbete med att starta upp ett nytt Angular-projekt (med namnet TsProject).
- Rensade bland uppstartsfilerna, med att ta bort demo-text och sådant som inte är relevant i projektet.
- Skapade ett repo till Github med samma projektnamn, för att kunna spara och sedan kunnas nås från webbtjänsten Netlify inför publicering. 
- Skapade de komponenter som jag tänker att mitt projekt ska innehålla, så som: home, courselist, schedule och notfound.
- Jag har tidigare tänkt ut att mitt färgtema ska gå i blå/lila toner för att jag upplever det färgvalet som inspererande, så den designen kommer jag utforma mitt projekt med. 
- Gjorde Paths av komponenterna i app.routes.ts.
- Därefter började jag med den globala designen, som ska vara genomgående på undersidorna, så som en header, innehållande en egentagen bild (bildbehandlad i Adobe Photoshop för att passa in i färgtemat.), logotyp som jag gjort i Adobe photoshop och navigeringsmenyn som jag skapat via routerLink och RouterLinkActive och en footer. 
- Började utforma html-dokumentet och css-filen på "home"-komponeneten som är webbplatsen startsida. Fyllde sidan med innehåll och inkluderade två bilder. 
- Bytte ut ursprungs faviconen till en egen, som jag utformat från logotypen och konverterat den till ett ico-format.
- Lade till JSON-filen: miun_courses.json, med de kurser som ska användas i projektet i mappen "Public". 
- För att få ut JSON-filen med dess data presenterad på sidan, la jag till i app.config.ts: provideHttpClient(). Därefter skapde jag en Service-mapp inkluderade en courses.service.ts fil. Från den filen använde jag httpClient för att göra anrop. Jag gjorde också ett interface som jag la i mappen Model, med namnet: courses-data.ts. Interfacet använder jag sedan tillsammans för att få ut datan som ska visas. 
- I courselist.component.ts skapade jag varibler en för ursprungslistan från interfacet, därefter varibaler som jag använder i funktioner för filtrering. 
- En funktion för att filtrerar ut ämnena i ämnesraden så att det valda ämnet med dess innehållande kurser presenteras på sida. 
- Även filtrering på när textinmatning sker i sökrutan på kurskod eller kursnamn. 
- Vid klick på någon av rubrikerna sorteras raden, och vid tryck igen, växlas sorteringsordningen.
- Ordnade så att url till kursplanen hamnade under en knapp "kursplan" och vid tryck på denna, öppnas kursplanen i nytt fönster. 
- Skapde en ny service, shedule.service, för att hantera tillägg av kurser till ramschemat. Vid tryck på knapp "Lägg till" hamnar den valda kursen på en ny sida "schedule", där den visas (i en liknande utformad tabell).
- Utformade också "lägg till"-knappen vid tillagd kurs, då visar knappen "Tillagd" och blir grön. 
- Hanterade så att antal kurser i listan visas på sidan för kurslistan. Vid valt kursämne ändras antalet till de antal kurser som finns inom det ämnet. 
- Gjorde så att de tillagda kurserna sparas i LocalStorage när de läggs till i ramschemat. Även vid borttagning sparas den aktuella listan av tillagda kurser samt att vid markering: favorit, sparas också vid ändring. 
- La till en funktion som visar ramschemats tillagda kurser med sammanlagda högskolepoäng. Vid ändring så uppdateras antal visade poäng. 
- Uformade komponenterna med styling och responsiv design, både globalt och lokalt på de olika komponenterna. Vid liten skärmenhet på sidorna: courselist och schedule, tog jag bort kolumnen för kursplanen, då det var svårt att få till en snygg utformning, utan att det skulle kännas ihoptryckt eller för liten text.
- Ordnade en länk nere i sidfoten som ska visa att en besökare har möjlighet att kunna skicka mejl. Dock finns ingen underliggande funktionalitet bakom utan enbart för den visuella upplevelsen. Mejladressen som jag lagt in går till min skolmejl.
- Skapade en fil _redirects som jag placerade i public-mappen, för att allt ska fungera vid publicering. Byggde ihop projektet och publicerade det på webbtjänsten Netlify. Kontrollerade så allt fungerade som tänkt.  
- Delat den publicerade webbplatsen till en person för återkoppling och feedback på arbetet. Rättade till småfel, la till en alertruta och ändrade design för bättre tillgänglighet. 

-EXTRA: 
- En extra komponent som representerar webbplatsens startsida. Där det går att läsa vad webbplatsen innehåller och erbjuder, med texter och bilder. 
- Skapade en stjärna (favorit) på de tillagda kurserna, som går att markera och avmarkera, för att kunna hantera sina favoritkurser. 
- La till en knapp (töm ditt ramschema) längs ned på sidan för ramschemat för att kunna ha möjligheten att tömma hela listan samtidigt.
 

## Skriven av: Thne1900, VT 2025.

### Källor:
#### Internet:
- https://v17.angular.io/guide/binding-syntax (2025-08-08)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map (2025-08-08)
- https://howtodoinjava.com/typescript/sets/ (2025-08-08) 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort (2025-08-08)
- https://stackoverflow.com/questions/21687907/typescript-sorting-an-array (2025-08-08)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice (2025-08-08)
- https://refine.dev/blog/typescript-keyof/#introduction (2025-08-09)
- https://developer.mozilla.org/en-US/docs/Web/API/Window/open (2025-08-09)
- https://www.webbdev-essentials.net/html-specialtecken-anvandbara-tecken-att-kanna-till-varfor-det-kan-vara-bra-att-kanna-till-dessa-och-hur-man-kodar-dem-med-html/ 2025-08-10.
- https://angular.dev/api/common/NgClass (2025-08-10)
- https://stackoverflow.com/questions/51536262/angular-6-saving-data-to-local-storage (2025-08-13)
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce (2025-08-14)

#### Bilder:
- Headerbilden: header.jpg (egentagen).
- Logotypen: loggo.png (egenskapad).
- Faviconen: favicon.ico (egenskapad)
- BILD Bok: Pixabay.(Internet) Clker-Free-Vector-Images.https://pixabay.com/sv/vectors/bok-st%C3%A4ngd-svart-tom-bibliotek-306468/ (2025-08-08.)
- BILD Abstrakt: Pixabay. (Internet) ArtTower. https://pixabay.com/sv/illustrations/visdom-b%C3%B6cker-utbildning-kunskap-6665661/ 2025-08-08.
- Bild Uppslagen bok: pixabay. (Internet) karolinagrabowska. https://pixabay.com/sv/photos/ny%C3%A5r-bakgrund-arrang%C3%B6r-kalender-791939/ 2025-08-08.
- Fontawesome (Icons, Internet) https://fontawesome.com/ 2025-08-07.


