import { boardArray } from "./level.js";
import { startTimer, stopTimer, postScore } from "./helpers.js";
class Piece {


    constructor(circles, name, color, parent, posities) {
        this._selected = null;
        this.name = name;
        this.posities = posities;
        this.color = color;
        this.circles = circles;
        this.element = document.createElement('div');
        this.element.classList.add(`${name}`);
        this.element.classList.add(`piece`);


        this.circles.forEach(circle => {
            circle.element.style.backgroundColor = this.color;
            circle.element.addEventListener('mousedown', this.onMouseDown.bind(this, circle))
            circle.element.style.cursor = 'move';
            this.element.appendChild(circle.element);
        });


        // toevoegen van de eventlisteners voor het draggen

        document.addEventListener('mousemove', this.onMouseMove.bind(this));
        document.addEventListener('mouseup', this.onMouseUp.bind(this));

        //variabelen een eerste waarde geven
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.initialLeft = 0;
        this.initialTop = 0;
        this.end = true;

    }




    onMouseDown(circle, event) {

        //this.posities.forEach(positie=>{
        //console.log("voor x: " + positie[0], "voor y: " + positie[1]);
        //})

        this._selected = circle;

        console.log("this.selected x: " + this._selected.x, "this.selected y: " + this._selected.y);



        event.preventDefault();
        this.isDragging = true;
        // eerst kijken waar het stukje zich bevind
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.initialLeft = this.element.offsetLeft;
        this.initialTop = this.element.offsetTop;

        // bepaal de index van het geselecteerde bolletje in de cirkel array
        let indexCircle = this.circles.findIndex(circle => circle === this._selected);

        // haal de positie array op voor het geselecteerde bolletje
        let positieArray = this.posities[indexCircle];

        // haal de x- en y-coördinaten op uit de positie array
        let [x, y] = positieArray;

        // verplaats alle posities zodat het geselecteerde bolletje op positie (0, 0) staat
        this.posities = this.posities.map(positie => [positie[0] - x, positie[1] - y]);


        //this.posities.forEach(positie=>{
        //console.log("na x: " + positie[0], "na y: " + positie[1]);
        //})
    }

    onMouseMove(event) {
        event.preventDefault();
        if (this.isDragging) {

            this.element.style.opacity = 0.8;

            // waar is de nieuwe postie van het stukje
            const deltaX = event.clientX - this.startX;
            const deltaY = event.clientY - this.startY;
            this.currentX = deltaX;
            this.currentY = deltaY;

            // de nieuwe positie van het stukje zetten
            this.element.style.left = `${this.currentX}px`;
            this.element.style.top = `${this.currentY}px`;


        }
    }


    onMouseUp(event) {
        event.preventDefault();

        if (this.isDragging) {

            let uitHetBord = false;

            let bordIndex = -1;

            // eerste kijken op welk bord we hem moeten plaatsen
            for (let i = 0; i < boardArray.length; i++) {
                let x = boardArray[i].element.getBoundingClientRect().left;
                let y = boardArray[i].element.getBoundingClientRect().top;

                if (event.clientX > x && event.clientX < x + boardArray[i].width && event.clientY > y && event.clientY < y + boardArray[i].height) {
                    bordIndex = i;
                    uitHetBord = true;
                }

            }
            if (uitHetBord) {
                let uitkomst = boardArray[bordIndex].drawPattern(this, this._selected);
                console.log(uitkomst);
                if (uitkomst) {
                    this.element.remove();
                } else {
                    console.log('Stukje word terug gezet naar de vorige postitie')
                    this.element.style.left = 0 + "px";
                    this.element.style.top = 0 + 'px';
                }
            } else {
                console.log('Stukje word terug gezet naar de vorige postitie')
                this.element.style.left = 0 + "px";
                this.element.style.top = 0 + 'px';
            }

        }

        this.isDragging = false;

        let didYouWin = true;

        boardArray.forEach(board => {
            board.circles.forEach(circle => {
                if (!circle.element.classList.contains('taken')) {
                    didYouWin = false;
                }
            });
        });
        let finish = localStorage.getItem('isMouseUp');
        if (didYouWin) {
            console.log(finish)
            if (finish == "false") {
                console.log('hier')
                localStorage.setItem('isMouseUp', "true");
                stopTimer(localStorage.getItem('timerid'));
                let person = window.prompt('You won! please enter your name:');
                localStorage.setItem('name', person);
                console.log(person, didYouWin);
                postScore(person, localStorage.getItem('timervalue'));
                window.location.href = `levels.html`;
            }
        
        }


    }


}

export default Piece;