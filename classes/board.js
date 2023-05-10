import Circle from "./circle.js";

let id = 0;

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
            circle.element.id = `${id}`;
            id++;
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
        let currentX = piece.currentX + cirkelTarget.x + piece.initialLeft;
        let currentY = piece.currentY + cirkelTarget.y + piece.initialTop;

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

        //controleren of alle punten in het bord ligt
        for(let i = 0 ; i < piece.circles.length ; i++){
            let x = cirkel.x + piece.posities[i][0]*100;
            let y = cirkel.y + piece.posities[i][1]*100;

            if(x > 400 || x < 0 || y > 400 || y < 0){
                console.log("Niet in het bord geplaatst");
                return;
            }

        }



        for(let i = 0 ; i < piece.circles.length ; i++){



            // circle = [0,0]
            let x = cirkel.x + piece.posities[i][0]*100;
            let y = cirkel.y + piece.posities[i][1]*100;
            console.log(`${x}`, `${y}`);



            for(let hallo of this.circles){
                if(x === hallo.x && y === hallo.y){
                    hallo.element.classList.add("taken");
                    hallo.element.style.backgroundColor = piece.color;
                }
            }

        }

        return true;

    }

    checkGame() {

        let didYouWin = true;

        this.circles.forEach(circle => {
            if(!(circle.element.classList.contains('taken') || circle.element.classList.contains('danger') )){
                didYouWin = false;
            }
        })

        return didYouWin;

    }


}

export default Board;