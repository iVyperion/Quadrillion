import Circle from "./circle.js";
import boardArray from "./main.js";

let id = 0;

class Board{
    constructor(board, xBord, yBord, positieDanger) {
        this.positieDanger = positieDanger;
        this.element = board;
        this.circles = [];
        this.width =300;
        this.height = 300;
        this.xBord = xBord;
        this.yBord = yBord;
        let x = 25;
        let y = 25;
        for(let i = 0 ; i < 16 ; i++){
            // controleren of er een nieuwe lijn moet gestart worden
            if(i === 4 || i === 8 || i === 12){
                x = 25;
                y += 50;
            }

            // cirle aanmaken en toevoegen aan array
            const circle = new Circle(x, y);
            circle.element.id = `${id}`;
            id++;
            this.circles.push(circle);

            this.positieDanger.forEach(danger=>{
                if(circle.x === danger[0]*50 +25 && circle.y === danger[1]*50+25){
                    circle.element.classList.contains('taken');
                    circle.element.style.backgroundColor  = 'black';
                }
            })

            // de x-coordinaat updaten
            x += 50;
        }

        //danger zones bepalen



    }

    drawBoard (container, id){
        this.element.classList.add(`board${id}`);
        this.circles.forEach(circle => {
            circle.draw(container);
        });

        // positie van het bord vaststellen
        this.element.style.top = this.yBord + "px";
        this.element.style.left = this.xBord + "px";
        this.element.style.position = 'absolute';
    }


    drawPattern(piece , cirkelTarget){
        //positie bepalen van het stukje
        let currentX = piece.currentX + cirkelTarget.x + piece.initialLeft;
        let currentY = piece.currentY + cirkelTarget.y + piece.initialTop;

        console.log("current x: " + currentX, "current y: " + currentY);

        let boardRect = this.element.getBoundingClientRect();
        let boardX = boardRect.left;
        let boardY = boardRect.top;


        let cirkel = null;
        for(let _cirkel of this.circles){
            let {element } = _cirkel;
            let cirkelRect = element.getBoundingClientRect();
            let cirkelX = cirkelRect.left;
            let cirkelY = cirkelRect.top;


            if(currentX >= cirkelX && currentX <= cirkelX + 50 && currentY >= cirkelY && currentY <= cirkelY + 50){
                cirkel = _cirkel;
            }

        }


        if(!cirkel){
            return;
        }


        let drawArray = [];
        let nieuweBord;

        // het patroon plaatsen
        //console.log("patroon plaatsen");
        //console.log(`target cirkel: x${cirkel.x}, y${cirkel.y}`);


        // door alle cirkels van het stukje lopen
        for(let i = 0 ; i < piece.circles.length ; i++){

            // circle = [0,0]
            let x = cirkel.x + piece.posities[i][0]*50;
            let y = cirkel.y + piece.posities[i][1]*50;
            console.log(x, y)


            // eerst kijken of het stukje in het bord word geplaatst

            if(x > 200 || x < 0 || y > 200 || y < 0){
                console.log("een bollete ligt buiten het bord")
            }
            if(x < 0){
                for(let i = 0 ; i < boardArray.length-1 ; i++){
                    let bordX = boardArray[i].xBord;
                    if(bordX < this.xBord && bordX >= this.xBord-200){
                        console.log("een bolletje ligt links buiten het bord");
                        nieuweBord = boardArray[i];
                        // lopen door alle bolletjes van het bord
                        nieuweBord.circles.forEach(circle => {
                            if(circle.x === x + 200 && circle.y === y){
                                circle.element.classList.add("taken");
                                circle.element.style.backgroundColor = piece.color;
                            }
                        })
                    }

                }

            } else if(x > 200){
                for(let i = 0 ; i < boardArray.length ; i++){
                    console.log("loopen om te kijken of het rechts ligt")
                    let bordX = boardArray[i].xBord;
                    console.log("bordX: " +bordX, "this.xbord: " +this.xBord);
                    if(bordX > this.xBord && bordX <= this.xBord+200){
                        console.log("een bolletje ligt rechts buiten het bord");
                        nieuweBord = boardArray[i];
                        // lopen door alle bolletjes van het bord
                        nieuweBord.circles.forEach(circle => {
                            if(circle.x === x - 200 && circle.y === y){
                                circle.element.classList.add("taken");
                                circle.element.style.backgroundColor = piece.color;
                            }
                        })
                    }
                }
            } else if(y < 0 ){
                for(let i = 0 ; i < boardArray.length ; i++){
                    let bordY = boardArray[i].yBord;
                    console.log("bordY: " +bordY, "this.ybord: " +this.yBord);
                    if(bordY < this.yBord && bordY >= this.yBord-200){
                        console.log("een bolletje ligt boven het bord");
                        nieuweBord = boardArray[i];
                        // lopen door alle bolletjes van het bord
                        nieuweBord.circles.forEach(circle => {
                            if(circle.x === x && circle.y === y + 200){
                                circle.element.classList.add("taken");
                                circle.element.style.backgroundColor = piece.color;
                            }
                        })
                    }
                }
            } else if(y > this.yBord){
                for(let i = 0 ; i < boardArray.length ; i++){
                    let bordY = boardArray[i].yBord;
                    console.log("bordY: " +bordY, "this.ybord: " +this.yBord);
                    if(bordY > this.yBord && bordY <= this.yBord+200){
                        console.log("een bolletje ligt onder het bord");
                        nieuweBord = boardArray[i];
                        // lopen door alle bolletjes van het bord
                        nieuweBord.circles.forEach(circle => {
                            if(circle.x === x&& circle.y === y -200){
                                circle.element.classList.add("taken");
                                circle.element.style.backgroundColor = piece.color;
                            }
                        })
                    }
                }
            }


            //kijken of er een cirkel op het bord dezelfde positie heeft dan de positie van de cirkle van het stukje
            for(let i = 0 ; i < this.circles.length ; i++){
                if(this.circles[i].x === x && this.circles[i].y === y){
                    // kijken of er de cirkel al geen stukje staat
                    if(this.circles[i].element.classList.contains("taken")){
                        return;
                    }
                    drawArray.push(this.circles[i]);
                }
            }

        }

        // the drawarray tekenen
        drawArray.forEach(circle =>{
            circle.element.classList.add("taken");
            circle.element.style.backgroundColor = piece.color;
        })

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