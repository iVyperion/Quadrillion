import Circle from "./circle.js";
import {defineBoards, playPiece, makeLevelPiece} from "./level.js";


// stukjes upside down
let angle = 180;
let angle2 = 0;
const rotate2 = document.querySelector('#rotate2');
rotate2.addEventListener('click', ()=>{
    piecesArray.forEach(piece =>{
        console.log(piece.name);
        // stukjes fysiek roteren
        piece.element.style.transform = `rotateY(${angle}deg)`;

        console.log(angle2);

        // positie van het nulpunt veranderen als sutkje verticaal staat
        if(angle2 === 0 || angle2 === 180){


            piece.posities.forEach(positie => {
                let x = positie[0];
                let y = positie[1];

                let newX = -x;
                let newY = y;

                positie[0] = newX;
                positie[1] = newY;


            })
            const rotateCoordinatesClockwiseZ1 =  function(coordinates) {
                const center = new Circle(50, 50); // Assuming the center of rotation is (50, 50)

                // Iterate through each coordinate and calculate the new position
                const rotatedCoordinates = coordinates.map(circle => {
                    // Translate the coordinate relative to the center of rotation
                    const translatedX = circle.x - center.x;
                    const translatedY = circle.y - center.y;

                    // Apply rotation formula: x' = cos(theta) * x - sin(theta) * y, y' = sin(theta) * x + cos(theta) * y
                    const rotatedX = Math.cos(Math.PI) * translatedX - Math.sin(Math.PI) * translatedY;
                    const rotatedY = Math.sin(2*Math.PI) * translatedX + Math.cos(2*Math.PI) * translatedY;

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
        } else if(angle2 === 90 || angle2 === 270){

            piece.posities.forEach(positie => {
                let x = positie[0];
                let y = positie[1];

                let newX = x;
                let newY = -y;

                positie[0] = newX;
                positie[1] = newY;


            })
            const rotateCoordinatesClockwiseZ2 = function(coordinates) {
                const center = new Circle(50, 50); // Assuming the center of rotation is (50, 50)

                // Iterate through each coordinate and calculate the new position
                const rotatedCoordinates = coordinates.map(circle => {
                    // Translate the coordinate relative to the center of rotation
                    const translatedX = circle.x - center.x;
                    const translatedY = circle.y - center.y;

                    // Apply rotation formula: x' = cos(theta) * x - sin(theta) * y, y' = sin(theta) * x + cos(theta) * y
                    const rotatedX = Math.cos(2*Math.PI) * translatedX - Math.sin(2*Math.PI) * translatedY;
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

    if(angle === 180){
        angle = 0;
    } else{
        angle = angle +180;
    }


})

// roteren rond de as uit het scherm
const rotate = document.querySelector('#rotate');
rotate.addEventListener('click', () =>{
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
            piece[1] =  temp;

        })

        //het element roteren voor 90 graden
        for(let i = 1 ; i < piecesArray.length+1 ; i++){
            //const pieceElement = document.querySelector(`.piece${i}`);
            pieces.element.style.rotate = angle2 + "deg";

        }


    })

    if(angle2 === 360){
        angle2 = 0;
    }
});


const currentURL = window.location.href;

const url = new URL(currentURL);
const levelParam = url.searchParams.get('level');
const levelNumber = levelParam.replace('level', '');