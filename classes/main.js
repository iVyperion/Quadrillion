import Board from './board.js';
import Piece from "./piece.js";
import Circle from "./circle.js";

//arrays aanmeken voor de pieces
//piece 1
const circles1 = [new Circle(25, 25), new Circle(75, 25), new Circle(25, 75)];
//piece2
const circles2 = [new Circle(25, 75), new Circle(75, 75), new Circle(75, 25), new Circle(125, 25)];
//piece3
const circles3 = [new Circle(75, 25), new Circle(25, 75), new Circle(75, 75), new Circle(75, 125), new Circle(75, 175)];
//piece4
const circles4 = [new Circle(75, 25), new Circle(25, 75), new Circle(75, 75), new Circle(75, 125), new Circle(125, 125)]
//piece5
const circles5 = [new Circle(25, 25), new Circle(25, 75), new Circle(25, 125), new Circle(25, 175), new Circle(75, 175)]
//piece6
const circles6 = [new Circle(25, 25), new Circle(25, 75), new Circle(25, 125), new Circle(75, 125), new Circle(75, 175)]
//piece7
const circles7 = [new Circle(75, 25), new Circle(125, 25), new Circle(25, 75), new Circle(75, 75), new Circle(25, 125)]
//piece8
const circles8 = [new Circle(25, 25), new Circle(75, 25), new Circle(75, 75), new Circle(75, 125), new Circle(125, 125)]
//piece9
const circles9 = [new Circle(25, 25), new Circle(25, 75), new Circle(25, 125), new Circle(75, 125), new Circle(125, 125)]
//piece10
const circles10 = [new Circle(25, 25), new Circle(75, 25), new Circle(25, 75)]
//piece11
const circles11 = [new Circle(25, 25), new Circle(25, 75), new Circle(25, 125), new Circle(75, 75), new Circle(75, 125)]
//piece12
const circles12 = [new Circle(25, 25), new Circle(25, 75), new Circle(75, 75), new Circle(125, 75), new Circle(25, 125)]
//piece13
const circles13 = [new Circle(25, 25), new Circle(75, 25), new Circle(25, 75), new Circle(25, 125), new Circle(75, 125)]


// het grootte bord definen
const gameBoard1 = document.querySelector('.gameboard1');
const gameBoard2 = document.querySelector('.gameboard2');
const gameBoard3 = document.querySelector('.gameboard3');
const gameBoard4 = document.querySelector('.gameboard4');

// bord nummer 1 aanmaken
const gameboard1 = new Board(gameBoard1, 0, 0, [[1, 3]]);
gameboard1.drawBoard(gameBoard1, 1);

//bord nummer 2 aanmaken
const gameboard2 = new Board(gameBoard2, 200, 0, [[0, 0], [3, 0]]);
gameboard2.drawBoard(gameBoard2, 2);

//bord nummer 3 aamaken
const gameboard3 = new Board(gameBoard3, 400, 0, [[1, 0], [3, 3]]);
gameboard3.drawBoard(gameBoard3, 3);

//bord nummer 4 aanmaken
const gameboard4 = new Board(gameBoard4, 600, 0, [[1, 2], [3, 3]]);
gameboard4.drawBoard(gameBoard4, 4);

let boardArray = [gameboard1, gameboard2, gameboard3, gameboard4];

//piece 1 aanmaken
const piece = new Piece(circles1, "piece1", "darkred", gameboard1, [[0, 0], [1, 0], [0, 1]]);
document.querySelector('.options-container').appendChild(piece.element);

//piece 2 aanmaken
const piece2 = new Piece(circles2, 'piece2', 'blue', gameboard1, [[0, 1], [1, 1], [1, 0], [2, 0]]);
document.querySelector('.options-container').appendChild(piece2.element);

//piece 3 aanmaken
const piece3 = new Piece(circles3, 'piece3', 'yellow', gameboard1, [[1, 0], [0, 1], [1, 1], [1, 2], [1, 3]]);
document.querySelector('.options-container').appendChild(piece3.element);

//piece4 aanmaken
const piece4 = new Piece(circles4, "piece4", 'orange', gameboard1, [[1, 0], [0, 1], [1, 1], [1, 2], [2, 2]]);
document.querySelector('.options-container').appendChild(piece4.element);

//piece5 aanmaken
const piece5 = new Piece(circles5, "piece5", 'red', gameboard1, [[0, 0], [0, 1], [0, 2], [0, 3], [1, 3]]);
document.querySelector('.options-container').appendChild(piece5.element);

//piece6 aanmaken
const piece6 = new Piece(circles6, "piece6", 'pink', gameboard1, [[0, 0], [0, 1], [0, 2], [1, 2], [1, 3]]);
document.querySelector('.options-container').appendChild(piece6.element);
//piece7 aanmaken
const piece7 = new Piece(circles7, "piece7", 'purple', gameboard1, [[1, 0], [2, 0], [0, 1], [1, 1], [0, 2]]);
document.querySelector('.options-container').appendChild(piece7.element);

//piece8 aanmaken
const piece8 = new Piece(circles8, "piece8", 'blue', gameboard1, [[0, 0], [1, 0], [1, 1], [1, 2], [2, 2]]);
document.querySelector('.options-container').appendChild(piece8.element);

//piece9 aanmaken
const piece9 = new Piece(circles9, "piece9", 'cyan', gameboard1, [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]]);
document.querySelector('.options-container').appendChild(piece9.element);

//piece1 10 aanmaken
const piece10 = new Piece(circles10, "piece10", 'lightblue', gameboard1, [[0, 0], [1, 0], [0, 1]]);
document.querySelector('.options-container').appendChild(piece10.element);

//piece1 11 aanmaken
const piece11 = new Piece(circles11, "piece11", 'lightgreen', gameboard1, [[0, 0], [0, 1], [0, 2], [1, 1], [1, 2]]);
document.querySelector('.options-container').appendChild(piece11.element);

//piece1 12 aanmaken
const piece12 = new Piece(circles12, "piece12", 'darkgreen', gameboard1, [[0, 0], [0, 1], [0, 2], [1, 1], [2, 1]]);
document.querySelector('.options-container').appendChild(piece12.element);

//piece1 13 aanmaken
const piece13 = new Piece(circles13, "piece13", 'green', gameboard1, [[0, 0], [1, 0], [0, 1], [0, 2], [1, 2]]);
document.querySelector('.options-container').appendChild(piece13.element);

//array met alle stukjes
export let piecesArray = [piece, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9, piece10, piece11, piece12, piece13];
let circlesArray = [circles1, circles2];

// stukjes upside down
let angle = 180;
let angle2 = 0;
const rotate2 = document.querySelector('#rotate2');
rotate2.addEventListener('click', () => {
    piecesArray.forEach(piece => {
        console.log(piece.name);
        // stukjes fysiek roteren
        piece.element.style.transform = `rotateY(${angle}deg)`;

        console.log(angle2);

        // positie van het nulpunt veranderen als sutkje verticaal staat
        if (angle2 === 0 || angle2 === 180) {


            piece.posities.forEach(positie => {
                let x = positie[0];
                let y = positie[1];

                let newX = -x;
                let newY = y;

                positie[0] = newX;
                positie[1] = newY;


            })
            function rotateCoordinatesClockwise(coordinates) {
                const center = new Circle(50, 50); // Assuming the center of rotation is (50, 50)

                // Iterate through each coordinate and calculate the new position
                const rotatedCoordinates = coordinates.map(circle => {
                    // Translate the coordinate relative to the center of rotation
                    const translatedX = circle.x - center.x;
                    const translatedY = circle.y - center.y;

                    // Apply rotation formula: x' = cos(theta) * x - sin(theta) * y, y' = sin(theta) * x + cos(theta) * y
                    const rotatedX = Math.cos(Math.PI) * translatedX - Math.sin(Math.PI) * translatedY;
                    const rotatedY = Math.sin(2 * Math.PI) * translatedX + Math.cos(2 * Math.PI) * translatedY;

                    // Translate the coordinate back to its original position
                    const newX = rotatedX + center.x;
                    const newY = rotatedY + center.y;

                    // Return the new Circle object with rotated coordinates
                    circle.x = newX;
                    circle.y = newY;
                });

                return rotatedCoordinates;
            }

            // runt 2 keer eens bekijken
            rotateCoordinatesClockwise(piece.circles);
        } else if (angle2 === 90 || angle2 === 270) {

            piece.posities.forEach(positie => {
                let x = positie[0];
                let y = positie[1];

                let newX = x;
                let newY = -y;

                positie[0] = newX;
                positie[1] = newY;


            })
            function rotateCoordinatesClockwise(coordinates) {
                const center = new Circle(50, 50); // Assuming the center of rotation is (50, 50)

                // Iterate through each coordinate and calculate the new position
                const rotatedCoordinates = coordinates.map(circle => {
                    // Translate the coordinate relative to the center of rotation
                    const translatedX = circle.x - center.x;
                    const translatedY = circle.y - center.y;

                    // Apply rotation formula: x' = cos(theta) * x - sin(theta) * y, y' = sin(theta) * x + cos(theta) * y
                    const rotatedX = Math.cos(2 * Math.PI) * translatedX - Math.sin(2 * Math.PI) * translatedY;
                    const rotatedY = Math.sin(Math.PI) * translatedX + Math.cos(Math.PI) * translatedY;

                    // Translate the coordinate back to its original position
                    const newX = rotatedX + center.x;
                    const newY = rotatedY + center.y;

                    // Return the new Circle object with rotated coordinates
                    circle.x = newX;
                    circle.y = newY;
                });

                return rotatedCoordinates;
            }

            // runt 2 keer eens bekijken
            rotateCoordinatesClockwise(piece.circles);
        }

    })

    if (angle === 180) {
        angle = 0;
    } else {
        angle = angle + 180;
    }


})

// roteren rond de as uit het scherm
const rotate = document.querySelector('#rotate');
rotate.addEventListener('click', () => {
    angle2 = angle2 + 90;
    piecesArray.forEach(pieces => {


        function rotateCoordinatesClockwise(coordinates) {
            const center = new Circle(50, 50); // Assuming the center of rotation is (50, 50)

            // Iterate through each coordinate and calculate the new position
            const rotatedCoordinates = coordinates.map(circle => {
                // Translate the coordinate relative to the center of rotation
                const translatedX = circle.x - center.x;
                const translatedY = circle.y - center.y;

                // Apply rotation formula: x' = cos(theta) * x - sin(theta) * y, y' = sin(theta) * x + cos(theta) * y
                const rotatedX = Math.cos(Math.PI / 2) * translatedX - Math.sin(Math.PI / 2) * translatedY;
                const rotatedY = Math.sin(Math.PI / 2) * translatedX + Math.cos(Math.PI / 2) * translatedY;

                // Translate the coordinate back to its original position
                const newX = rotatedX + center.x;
                const newY = rotatedY + center.y;

                // Return the new Circle object with rotated coordinates
                circle.x = newX;
                circle.y = newY;
            });

            return rotatedCoordinates;
        }

        // runt 2 keer eens bekijken
        rotateCoordinatesClockwise(pieces.circles);



        // coordinaten van de cirkels in de stukjes veranderen
        pieces.posities.forEach(piece => {
            let temp = piece[0];
            piece[0] = - piece[1];
            piece[1] = temp;

        })

        //het element roteren voor 90 graden
        for (let i = 1; i < piecesArray.length + 1; i++) {
            //const pieceElement = document.querySelector(`.piece${i}`);
            pieces.element.style.rotate = angle2 + "deg";

        }


    })

    if (angle2 === 360) {
        angle2 = 0;
    }
})



export default boardArray;