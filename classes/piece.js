class Piece {

    constructor(circles, name, color, parent,posities) {
        this.selected = null;
        this.name = name;
        this.posities = posities;
        this.parent = parent;
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

    }

    onMouseDown(circle, event){
        this.selected = circle;
        event.preventDefault();
        this.isDragging = true;
        // eerst kijken waar het stukje zich bevind
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.initialLeft = this.element.offsetLeft;
        this.initialTop = this.element.offsetTop;

// bepaal de index van het geselecteerde bolletje in de cirkel array
        let indexCircle = this.circles.findIndex(circle => circle === this.selected);

// haal de positie array op voor het geselecteerde bolletje
        let positieArray = this.posities[indexCircle];

// haal de x- en y-coördinaten op uit de positie array
        let [x, y] = positieArray;

// verplaats alle posities zodat het geselecteerde bolletje op positie (0, 0) staat
        this.posities = this.posities.map(positie => [positie[0] - x, positie[1] - y]);


    }

    onMouseMove(event){
        event.preventDefault();
        if(this.isDragging) {

            this.element.style.opacity  = 0.8;

            // waar is de nieuwe postie van het stukje
            const deltaX = event.clientX - this.startX;
            const deltaY = event.clientY - this.startY;
            this.currentX =deltaX;
            this.currentY =deltaY;

            // de nieuwe positie van het stukje zetten
            this.element.style.left = `${this.currentX}px`;
            this.element.style.top = `${this.currentY}px`;

        }
    }


    onMouseUp(event){
        event.preventDefault();


        if(this.isDragging){
            let uitkomst = this.parent.drawPattern(this, this.selected);
            if(uitkomst){
                this.element.remove();
            } else {
                this.element.style.left = this.initialLeft + "px";
                this.element.style.top = this.initialTop + "px";

            }
        }

        this.isDragging = false;


        if(this.parent.checkGame()){
            console.log("u hebt gewonnen");
        }


    }



}

export default Piece;