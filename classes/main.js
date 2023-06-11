import Circle from "./circle.js";
import { playPiece, makeLevelPiece, makeDangerPiece } from "./level.js";
import { boardArray } from "./level.js";
import { startTimer } from "./helpers.js";


localStorage.setItem('isMouseUp', "false");
let timerid = startTimer()
localStorage.setItem('timerid', timerid);


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
            const rotateCoordinatesClockwiseZ1 = function (coordinates) {
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

            rotateCoordinatesClockwiseZ1(piece.circles);
        } else if (angle2 === 90 || angle2 === 270) {

            piece.posities.forEach(positie => {
                let x = positie[0];
                let y = positie[1];

                let newX = x;
                let newY = -y;

                positie[0] = newX;
                positie[1] = newY;


            })
            const rotateCoordinatesClockwiseZ2 = function (coordinates) {
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
            rotateCoordinatesClockwiseZ2(piece.circles);
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
});


const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
    location.reload();
})




const currentURL = window.location.href;

const url = new URL(currentURL);
const levelParam = url.searchParams.get('level');
const levelNumber = levelParam.replace('level', '');

console.log(levelNumber);


let piecesArray = [];



if (levelNumber === '1') {
    piecesArray = playPiece(['piece11', 'piece13', 'piece9',], boardArray[0]);




    makeLevelPiece([0, 1, 2, 3, 4], 'red');
    makeLevelPiece([8, 9, 12], 'lightblue');
    makeLevelPiece([5, 6, 7, 10, 14], 'green');
    makeLevelPiece([15, 11, 24, 20, 21], 'purple');
    makeLevelPiece([28, 29, 30, 31, 25], 'yellow');
    makeLevelPiece([27, 40, 44, 45, 46], 'pink');
    makeLevelPiece([17, 18, 22, 23, 26], 'orange');
    makeLevelPiece([32, 36, 37, 41], 'darkred');
    makeLevelPiece([38, 42, 43, 56, 60], 'darkblue');

    makeDangerPiece([13, 16, 19, 33, 47, 57, 63]);
} else if (levelNumber === '2') {


    piecesArray = playPiece(['piece11', 'piece12', 'piece13'], boardArray[0]);

    makeLevelPiece([0, 4, 8, 12, 13], 'red');
    makeLevelPiece([2, 6, 7], 'lightblue');
    makeLevelPiece([28, 29, 25, 26, 22], 'purple');
    makeLevelPiece([17, 18, 19, 23, 32], 'yellow');
    makeLevelPiece([1, 5, 9, 10, 14], 'pink');
    makeLevelPiece([16, 20, 24, 11, 21], 'orange');
    makeLevelPiece([27, 31, 40, 36], 'darkred');
    makeLevelPiece([33, 34, 38, 42, 43], 'darkblue');
    makeLevelPiece([37, 41, 45, 46, 47], 'cyan');

    makeDangerPiece([3, 15, 30, 44, 39, 60, 53])

} else if (levelNumber === '3') {


    piecesArray = playPiece(['piece3', 'piece6', 'piece5', 'piece2', 'piece7'], boardArray[0]);

    makeLevelPiece([18, 19, 23, 27, 26], 'lightgreen');
    makeLevelPiece([32, 33, 34, 36, 40], 'lightblue');
    makeLevelPiece([44, 45, 41, 37, 38], 'blue');
    makeLevelPiece([39, 43, 47, 46, 60], 'lightgreen');
    makeLevelPiece([49, 53, 52, 54, 56], 'orange');
    makeLevelPiece([63, 62, 61, 59, 58], 'cyan');
    makeLevelPiece([51, 50, 55], 'lightblue');



    makeDangerPiece([1, 28, 31, 42, 35, 48, 57])

} else if (levelNumber === '4') {


    piecesArray = playPiece(['piece10', 'piece13', 'piece2', 'piece6', 'piece12', 'piece7', 'piece9'], boardArray[0]);

    makeLevelPiece([0, 1, 4, 5, 8], 'lightgreen');
    makeLevelPiece([2, 3, 6, 10, 9], 'darkblue');
    makeLevelPiece([15, 14, 13, 12, 11], 'red');
    makeLevelPiece([28, 29, 30, 31, 25], 'yellow');
    makeLevelPiece([44, 41, 40, 42, 37], 'orange');


    makeDangerPiece([7, 16, 24, 45, 46, 60, 58])

}

else if (levelNumber === '5') {


    piecesArray = playPiece(['piece2', 'piece3', 'piece4', 'piece5', 'piece6', 'piece7', 'piece8', 'piece9', 'piece10', 'piece11', 'piece12', 'piece13'], boardArray[0]);

    makeLevelPiece([18, 19, 22], 'lightblue');



    makeDangerPiece([12, 7, 16, 28, 44, 37, 49])

}













