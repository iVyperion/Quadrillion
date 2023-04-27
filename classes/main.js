import Board from './board.js';
import Piece from "./piece.js";
import Circle from "./circle.js";


const gameBoard = document.querySelector('.gameboard');
const gameboard = new Board(gameBoard, 1);

gameboard.drawBoard(gameBoard, 1);


const pieces = [];

const circles1 = [new Circle(50, 50), new Circle(150, 50), new Circle(50, 150)];
pieces.push(circles1);

const circles2 = [ new Circle(50, 150), new Circle(150,150), new Circle(150, 50), new Circle(250, 50)];
pieces.push(circles2);

//const piece = new Piece(circles1, "vierkant", "green", gameboard, [ [0,0] ,[1,0] ,[0,1] ]);
//document.querySelector('.options-container').appendChild(piece.element);

const piece2 = new Piece(circles2, 'tetris', 'blue', gameboard, [[0,1], [1,1], [1,0], [2,0]]);
document.querySelector('.options-container').appendChild(piece2.element);




