//arrays aanmeken voor de pieces
//piece 1
import Circle from "./circle.js";
import Board from "./board.js";
import Piece from "./piece.js";
//piece2
const circles2 = [ new Circle(25, 75), new Circle(75,75), new Circle(75, 25), new Circle(125, 25)];
//piece3
const circles3 = [ new Circle(75, 25), new Circle(25,75), new Circle(75, 75), new Circle(75, 125), new Circle(75,175)];
//piece4
const circles4 = [new Circle(75,25), new Circle(25,75), new Circle(75,75), new Circle(75,125), new Circle(125,125)]
//piece5
const circles5 = [new Circle(25,25), new Circle(25,75), new Circle(25,125), new Circle(25,175), new Circle(75,175)]
//piece6
const circles6 = [new Circle(25,25), new Circle(25,75), new Circle(25,125), new Circle(75,125), new Circle(75,175)]
//piece7
const circles7 = [new Circle(75,25), new Circle(125,25), new Circle(25,75), new Circle(75,75), new Circle(25,125)]
//piece8
const circles8 = [new Circle(25,25), new Circle(75,25), new Circle(75,75), new Circle(75,125), new Circle(125,125)]
//piece9
const circles9 = [new Circle(25,25), new Circle(25,75), new Circle(25,125), new Circle(75,125), new Circle(125,125)]
//piece10
const circles10 = [new Circle(25,25), new Circle(75,25), new Circle(25,75)]
//piece11
const circles11 = [new Circle(25,25), new Circle(25,75), new Circle(25,125), new Circle(75,75), new Circle(75,125)]
//piece12
const circles12 = [new Circle(25,25), new Circle(25,75), new Circle(75,75), new Circle(125,75), new Circle(25,125)]
//piece13
const circles13 = [new Circle(25,25), new Circle(75,25), new Circle(25,75), new Circle(25,125), new Circle(75,125)]



// het grootte bord definen
const gameBoard1 = document.querySelector('.gameboard1');
const gameBoard2 = document.querySelector('.gameboard2');
const gameBoard3 = document.querySelector('.gameboard3');
const gameBoard4 = document.querySelector('.gameboard4');




export const defineBoards = function (boardPoints, dangerZone) {

    let boardList = [];

    let id = 1;
    boardPoints.forEach(point => {
        const gameboard = document.querySelector('.gameboard' + id);
        const aaron = new Board(gameboard, point[0], point[1], dangerZone[id-1] )
        aaron.drawBoard(gameboard, id);

        boardList.push(aaron);

        id++;

    });


    return boardList;
}






export const playPiece = function (pieces , boardArray) {

    let pieceList = [];


    pieces.forEach(piece => {
        switch (piece) {
            case 'piece1':
                const piece1 = new Piece(circles1, 'piece1', 'darkred', boardArray[0], [[0,0], [1,0], [0,1]]);
                pieceList.push(piece1);
                document.querySelector('.options-container').appendChild(piece1.element);
                break;
            case 'piece2':
                const piece2 = new Piece(circles2, 'piece2', 'blue',boardArray[0], [[0,1], [1,1], [1,0], [2,0]]);
                pieceList.push(piece2);
                document.querySelector('.options-container').appendChild(piece2.element);
                break;
            case 'piece3':
                const piece3 = new Piece(circles3, 'piece3', 'yellow', boardArray[0], [[1,0], [0,1], [1,1], [1,2], [1,3]]);
                pieceList.push(piece3);
                document.querySelector('.options-container').appendChild(piece3.element);
                break;
            case 'piece4':
                const piece4 = new Piece(circles4, 'piece4', 'orange', boardArray[0], [[1,0], [0,1], [1,1], [1,2], [2,2]]);
                pieceList.push(piece4);
                document.querySelector('.options-container').appendChild(piece4.element);
                break;
            case 'piece5':
                const piece5 = new Piece(circles5, 'piece5', 'red', boardArray[0], [[0,0], [0,1], [0,2], [0,3], [1,3]]);
                pieceList.push(piece5);
                document.querySelector('.options-container').appendChild(piece5.element);
                break;
            case 'piece6':
                const piece6 = new Piece(circles6, 'piece6', 'pink', boardArray[0], [[0,0], [0,1], [0,2], [1,2], [1,3]]);
                pieceList.push(piece6);
                document.querySelector('.options-container').appendChild(piece6.element);
                break;
            case 'piece7':
                const piece7 = new Piece(circles7, 'piece7', 'purple', boardArray[0], [[1,0], [2,0], [0,1], [1,1], [0,2]]);
                pieceList.push(piece7);
                document.querySelector('.options-container').appendChild(piece7.element);
                break;
            case 'piece8':
                const piece8 = new Piece(circles8, 'piece8', 'blue', boardArray[0], [[0,0], [1,0], [1,1], [1,2], [2,2]]);
                pieceList.push(piece8);
                document.querySelector('.options-container').appendChild(piece8.element);
                break;
            case 'piece9':
                const piece9 = new Piece(circles9, 'piece9', 'cyan', boardArray[0], [[0,0], [0,1], [0,2], [1,2], [2,2]]);
                pieceList.push(piece9);
                document.querySelector('.options-container').appendChild(piece9.element);
                break;
            case 'piece10':
                const piece10 = new Piece(circles10, 'piece10', 'lightblue', boardArray[0], [[0,0], [1,0], [0,1]]);
                pieceList.push(piece10);
                document.querySelector('.options-container').appendChild(piece10.element);
                break;
            case 'piece11':
                const piece11 = new Piece(circles11, 'piece11', 'lightgreen', boardArray[0], [[0,0], [0,1], [0,2], [1,1], [1,2]]);
                pieceList.push(piece11);
                document.querySelector('.options-container').appendChild(piece11.element);
                break;
            case 'piece12':
                const piece12 = new Piece(circles12, 'piece12', 'darkgreen', boardArray[0], [[0,0], [0,1], [0,2], [1,1], [2,1]]);
                pieceList.push(piece12);
                document.querySelector('.options-container').appendChild(piece12.element);
                break;
            case 'piece13':
                const piece13 = new Piece(circles13, 'piece13', 'green', boardArray[0], [[0,0], [1,0], [0,1], [0,2], [1,2]]);
                pieceList.push(piece13);
                document.querySelector('.options-container').appendChild(piece13.element);
                break;
            default:
                break;
        }




    });


    return pieceList;
}





export const makeLevelPiece = function (ids, color) {
    ids.forEach(point => {
        const circle = document.getElementById(point);
        console.log(circle);
        circle.style.backgroundColor = color;
        circle.classList.add('taken');
    })
}


export const makeDangerPiece = function (ids) {
    ids.forEach(point => {
        const circle = document.getElementById(point);
        circle.style.backgroundColor = 'black';
        circle.classList.add('taken');
    })
}




export const boardArray =  defineBoards([[0, 0], [200, 0], [400, 0], [600, 0]], [[],[],[],[],[]]);


