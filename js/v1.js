/*
1) Leeres Array zum Speichern der aufgedeckten Karten (openedCards)
2) Karten richtig erzeugen (type)[1,1,2,2,3,3,4,4.........8,8]
3) Karten mischen (shuffle)
4) Karten zum Deck hinzufügen
5) Klick Eventhandler


6) Kartenlogik:
    6.1) prüfen ob karte bereits found + 
    prüfen wie viele Karten bereits aufgedeckt sind? (0,1,2)
    6.2) wenn weniger als 2 -> aufdecken
    6.3) Erkennen ob zwei gleiche Karten 
    aufgedeckt wurden -> wenn gleich -> found; wenn nicht gleich -> verdecken
*/


const numberCards = 16
let openedCards = []
let cardTypes=[]
for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}
cardTypes = shuffle(cardTypes)
let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}

function flipp(event){
    if(!this.classList.contains('found'))
        openCard(this)
    //this.classList.toggle('flipped')
}
function openCard(c){
    alert(c.innerHTML)
}

function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}





