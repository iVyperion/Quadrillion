import Board from './board.js';
import Piece from "./piece.js";
import Circle from "./circle.js";


const gameBoard = document.querySelector('.gameboard');
const gameboard = new Board(gameBoard, 1);

gameboard.drawBoard(gameBoard, 1);


//piece 1 aanmaken
const circles1 = [new Circle(50, 50), new Circle(150, 50), new Circle(50, 150)];
const piece = new Piece(circles1, "piece1", "green", gameboard, [ [0,0] ,[1,0] ,[0,1] ]);
document.querySelector('.options-container').appendChild(piece.element);

//piece 2 aanmaken
const circles2 = [ new Circle(50, 150), new Circle(150,150), new Circle(150, 50), new Circle(250, 50)];
const piece2 = new Piece(circles2, 'piece2', 'blue', gameboard, [[0,1], [1,1], [1,0], [2,0]]);
document.querySelector('.options-container').appendChild(piece2.element);

//piece 3 aanmaken
const circles3 = [ new Circle(150, 50), new Circle(50,150), new Circle(150, 150), new Circle(150, 250), new Circle(150,350)];
const piece3 = new Piece(circles3, 'piece3', 'yellow', gameboard, [[1,0], [0,1], [1,1], [1,2], [1,3]]);
document.querySelector('.options-container').appendChild(piece3.element);