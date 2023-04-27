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
        this.element.classList.add(`circular`);


        this.element.style.position = 'absolute';
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

    }

    onMouseMove(event){
        event.preventDefault();
        if(this.isDragging) {

            this.element.style.opacity  = 0.8;

            // waar is de nieuwe postie van het stukje
            const deltaX = event.clientX - this.startX;
            const deltaY = event.clientY - this.startY;
            this.currentX = this.initialLeft + deltaX;
            this.currentY = this.initialTop + deltaY;

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


    }



}

export default Piece;