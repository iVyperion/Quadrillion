const dragDivs = document.getElementsByClassName('test_piece');
const game_board = document.getElementById('game_board');
let dragX, dragY;
window.onload = addEventListeners;

function addEventListeners() {
    Array.from(dragDivs).forEach((div) => {
        div.addEventListener('dragstart', (e) => {
            dragX = e.clientX - div.offsetLeft;
            dragY = e.clientY - div.offsetTop;
        });
    
        div.addEventListener('drag', (e) => {
            div.style.left = e.clientX - dragX + 'px';
            div.style.top = e.clientY - dragY + 'px';
        });

        div.addEventListener('dragend', (e) => {
            e.preventDefault();
            if (e.game_board.classList.contains('game_board')) {
                
            }
        });
    });
}




