# Javascript - Grisspelet   

Du använder dig av DOM:en för att interagera med HTML/CSS. Du använder enbart Vanilla JavaScript (inget ramverk/bibliotek). 

Du får en färdig html att utgå ifrån, men där du är fri att ändra. Du stylar i CSS efter egna prefrenser. 

## Spelregler

* Spelet har två deltagare där vardera spelar var sin omgång.
* För varje omgång "kastar" den ena spelaren tärning genom att klicka "SLÅ TÄRNING". Man får kasta tärning så många gånger man vill. Varje kast adderas till OMGÅNGSPOÄNG.  
* MEN, om en deltagare slår en 1:a går alla poäng i den omgången förlorade. Efter det är det andra spelarens tur.
* En spelare kan välja att stanna och välja "HÅLL POÄNG". Då adderas poängen i OMGÅNGSPOÄNG till den TOTAL:a poängen. Efter det är det andra spelarens tur.
* Den spelare som når först 100 poäng på "TOTAL POÄNG" vinner spelet. Då ska det stå "VINNARE" istället för spelarens namn. Dä är tillståndet gameover och man kan inte spela vidare, endast klicka "NYTT SPEL" där en ny spelomgång initieras.


## Extra
Ändra spelets regler genom att lägga till de här förutsättningarna.

1. En spelare förlorar hela sin poängsumma om två 6:or slås direkt efter varandra. Efter det är det andra spelarens tur. (Tips: Spara alltid föregående tärningskast i en separat variabel)
2. Lägg till ett inputfält i HTML där man kan ändra antal poäng för att vinna spelet.


## Bra att veta


### Använda addEventListener för attt lyssna på händelser och trigga funktioner

För att koppla ett element som reagerar på musklick måste du först hämta elementet i DOM 
och sedan anropa metoden addEventListener().

Exempelvis börja med "SLÅ TÄRNING".

    // Hämtar element i DOM
    const btnRoll = document.querySelector('.btn-roll');

    // Funktionen som körs när knappen klickas
    function rollDice() {
      // Det här kommer hända när användaren klickar på "SLÅ TÄRNING"

    }
    
    // LÄgg till en lyssnare för eventet 'click' som kör funktionen rollDice när det inträffar
    btnRoll.addEventListener('click', rollDice);

Läs mer om Events och add EventListeners här: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://www.w3schools.com/jsref/met_element_addeventlistener.asp

I huudsak använder du 'click' som event, men det finns många att välja på. För att ändra vinst poängen i ett inputfält kan du istället använda 'change'. Alla olika typer av events som finns hittar du här: https://developer.mozilla.org/en-US/docs/Web/Events

### Slumpa fram tal
För att slumpa fram tal i Javascript använder du Math.random(), men justerar så att du får ett tal mellan 1 och 6.

### Byta bild
Byta bild kan du göra med anropa DOM-element med .src
Exempelvis: dice1.src = 'img/dice-6.png'
Kom ihåg att du kan manipulera strängar med variabler för att spara ner på kod!

### Ändra klass för att ändra style
Kom ihåg att du kan toggla klasser med classList.toggle(). Exempelvis lämpligt för att byta aktiv spelare (class='active')

### Annat
* Andra metoder du kommer behöva är .textContent()

* Använd en bool-variabel om spelet är gameover eller inte 

# Exempel
![Grisspelet](https://github.com/chasacademy-sandra-larsson/js--pig-game/blob/main/screen.png)



