import Circle from "./circle.js";

class Board{
    constructor(board) {
        this.element = board;
        this.circles = [];
        this.width = 600;
        this.height = 600;
        let x = 50;
        let y = 50;
        for(let i = 0 ; i < 16 ; i++){
            // controleren of er een nieuwe lijn moet gestart worden
            if(i === 4 || i === 8 || i === 12){
                x = 50;
                y += 100;
            }

            // cirle aanmaken en toevoegen aan array
            const circle = new Circle(x, y);
            this.circles.push(circle);

            // de x-coordinaat updaten
            x += 100;
        }


    }

    drawBoard (container, id){
        this.element.classList.add(`board${id}`);
        this.circles.forEach(circle => {
            circle.draw(container);

        });
    }


    drawPattern(piece , cirkelTarget){
        //positie bepalen van het stukje
        let currentX = piece.currentX + cirkelTarget.x;
        let currentY = piece.currentY + cirkelTarget.y;

        let boardRect = this.element.getBoundingClientRect();
        let boardX = boardRect.left;
        let boardY = boardRect.top;


        // nu zoeken naar het dichtbijzijnde cirkel
        let cirkel = null;
        for(let _cirkel of this.circles){
            let {element } = _cirkel;
            let cirkelRect = element.getBoundingClientRect();
            let cirkelX = cirkelRect.left;
            let cirkelY = cirkelRect.top;

            if(currentX > cirkelX && currentX < cirkelX + 100 && currentY > cirkelY && currentY < cirkelY + 100){
                cirkel = _cirkel;
            }

        }


        if(!cirkel){
            return;
        }


        // het patroon plaatsen
        console.log("patroon plaatsen");
        console.log(`target cirkel: x${cirkel.x}, y${cirkel.y}`);

        for(let i = 0 ; i < 4 ; i++){


            // circle = [0,0]
            let x = cirkelTarget.x + piece.posities[i][0]*100;
            let y = cirkelTarget.y + piece.posities[i][1]*100;
            console.log(cirkelTarget.x, cirkelTarget.y);
            console.log(`${x}`, `${y}`);


            for(let hallo of this.circles){
                if(x === hallo.x && y === hallo.y){
                    hallo.element.classList.add("taken");
                }
            }

        }

        return true;

    }


}

export default Board;