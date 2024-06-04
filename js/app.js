/*-------------------------------- Constants --------------------------------*/
// let's store the nine elemnents of the squares

const squareEls = document.querySelectorAll('.sqr');
console.log(squareEls);

// let's store the element that displays the game's status

const messageEl = document.querySelector('#message');
console.log(messageEl);

/*---------------------------- Variables (state) ----------------------------*/
/*a. Use a variable named board to represent the state of the squares on the board.*/

let board = ['', '', '', '', '', '', '', '',''];

/*------------------------ Cached Element References ------------------------*/
/*b. Use a variable named turn to track whose turn it is.*/

let turn = 'X';

/*c. Use a variable named winner to represent if anyone has won yet.*/

let winner = false;

/*d. Use a variable named tie to represent if the game has ended in a tie.*/

let tie = false;

/*-------------------------------- Functions --------------------------------*/

// let's use a function to initialize the game state

function init () {
    console.log('game initialized');
    render();
}


// call init function when board loads

init();
// let's create a render function
function render () {
    updateBoard();
    updateMessage();
    console.log('render');
}

/*----------------------------- Event Listeners -----------------------------*/

//let's create a function => updateBoard

function updateBoard() {
    board.forEach((square, index) => {
        if (square === 'X') {
            squareEls[index].style.backgroundColor = 'blue'
        } else (square === 'O'); {
            squareEls[index].style.backgroundColor = 'red'
        }

    })
}

   // let's create a function called updateMessage
   // let's set Message for both 'winner' and 'tie'

   function updateMessage() { 
    if (!winner && !tie) {
        messageEl.textContent =`it's players ${turn} turn`
    } else if (!winner && tie) {
        messageEl.textContent = `it's tie`
    } else {
        messageEl.textContent = `Congratulations ${turn} you have won!`
    }
   }
   // let's create the array winningCombos constant
   const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
   ];
   //the remaining winning combinations on the 'bottom', 'left column', middle column', right column, diagonal, and diagonal from the top right to the bottom left column on the board
   const remainWinningCombos = [
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
   ];
   // let's create  a function to handle a player when button clicked
   function handleClick(event) {
    const squareEls = document.getElementById('game-board');
    squareEls.addEventListener('click', handleClick);
    return null;
   }
   // option 1
   squareEls.forEach(squareEl =>{
    squareEl.addEventListener('click', handleClick);
   })
// let's implement the handleClick function

const withHandleClick = (event) => {
    const squareIndex = parseInt(event.target.id);

    if(squareEls[squareIndex] === 'X' || squareEls[squareIndex] === '0' || winner) {
        console.log(winner);
    }
}
// let's deal with the checkFortie() concept (function => value)

// check if there are any empty spaces left on the board

let isTie = true;
for (let i = 0; i < squareEls.length; i++) 
    if (squareEls === '0' || tie) {
        console.log(tie);
    }

    // with a function called switchPlayerTurn

    function switchPlayerTurn() {
        if (winner) {
            console.log(winner)
        } else {
          if (turn === 'X') {
            turn = 'O';
          } else {
            turn = 'X';
          }
        }
        render();
    }
    const resetBtnEl = document.getElementById('reset');
    resetBtnEl.addEventListener('click', function() {
        console.log('Reset button clicked');
        init();
    });







