# Moment 2 - NodeJs & Gulp
#### DT173G Webbutveckling III Mittuniversitetet
---
## Automatisering
Med hjälp av *NodeJs* och *Gulp* kan man automatisera flera arbetsmoment som ingår när man skapar en webbplats. På så sätt sparar man en massa tid och energi på små överflödiga uppgifter (så som komprimering av bilder, kod och andra filer) genom att låta dessa uppgifter  skötas automatiskt istället.

Det finns gott om möjligheter och olika alternativ med automatisering och vilka plugins det finns att använda sig av. För den här webbplatsen har jag valt att använda följande Gulp plugins:

### Gulp Concat
Denna använder jag för att slå ihop mina CSS- och JavaScript-filer. Ibland kan kännas mer organiserat att ha sin kod uppdelad i flera filer. Istället för att ha all CSS-kod i en enda stor fil som blir svår att navigera igenom så kan man istället låta det vara uppdelat i flera (likaså med JavaScript). Men i syfte för diskutrymme och laddningstid så är det inte att rekommendera att göra så. Då kan man istället låta Gulp Concat ta alla dessa filer och slå ihop dem, för att sedan skapa en komprimerad kopia som blir den version man sedan publicerar.

[Gulp Concat](https://www.npmjs.com/package/gulp-concat "https://www.npmjs.com/package/gulp-concat")

### Gulp Uglify & Gulp Uglify CSS
Ett annat sätt att spara diskutrymme och förkorta laddningstider är att minska ner koden så mycket som möjligt - ta bort onödiga tecken, förkorta variabelnamn, ta bort kommenater, osv. Med Gulp Uglify kan man automatiskt konvertera om sin JavaScript-kod och CSS-kod till att bli så liten och ihopklämd som möjligt.

[Gulp Uglify](https://www.npmjs.com/package/gulp-uglify "https://www.npmjs.com/package/gulp-uglify"), 
[Gulp Uglify CSS](https://www.npmjs.com/package/gulp-uglifycss "https://www.npmjs.com/package/gulp-uglifycss")

### Gulp Imagemin
Webbplatsen jag har gjort i den här uppgiften innehåller ett mindre galleri. Därför tyckte jag det var lämptligt att även ha ett plugin på plats som komprimerar filstorleken på bilder.

[Gulp Imagemin](https://www.npmjs.com/package/gulp-imagemin "https://www.npmjs.com/package/gulp-imagemin")

---
## Manual
Det här systemet bygger på två uppsättningar av kataloger - en döpt till *src* (den som laddas ner från detta repository) och en döpt till *pub* (den som publiceras mot webbserver). Det är enbart i katalogen *src* vi arbetar med. Katalogen *pub* är en katalog som styrs helt av automatiseringsprocessen. De *tasks* som finns på plats kopierar HTML-dokument från *src* till *pub*, komprimerar och konkatenerar JavaScript-filer och CSS-filer, samt komprimerar filstorlek på bilder. Dessa uppgifter genomförs så fort systemet upptäcker att en förändring har skett, så det är inget vi måste aktivera manuellt.

### Installation
För att komma igång och arbeta med denna webbplats behöver man först klona det. Det gör man genom att i kommandoprompten skriva följande:
```
git clone https://github.com/maby0801/dt173g_moment2.git
```
Nästa steg är att installera alla plugins som behövs för att automatiseringen ska fungera. I filen *package-lock.json* finns all information som systemet behöver för att veta vilka dessa plugins är, så allt man behöver göra är att i kommandoprompten skriva följande:
```
npm install
```
Därefter räcker det med att skriva in kommandot *gulp* i kommandoprompten så börjar automatiseringen att köra och kommer automatiskt märka när filer i systemet ändras.
