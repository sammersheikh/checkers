// psuedocode:
// set up a click event when user clicks on checkers piece
// highlight available tiles for piece to move when a piece is clicked
// set up 2d array for checkers piece placement

/*----- constants -----*/
/*----- app's state (variables) -----*/

const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
]

let playerTurn = 1

/*----- cached element references -----*/

let tds = document.querySelectorAll('td')

/*----- event listeners -----*/


/*----- functions -----*/

tds.forEach(function(td, idx) {

    if (idx < 8 || (idx > 15 && idx < 24) || (idx > 31 && idx < 40) || (idx > 47 && idx < 56)) {
        if (idx % 2 === 0) {
            td.classList.add('even')
        } else if (idx % 2 !== 0) {
            td.classList.add('odd')
        }
    } else {
        if (idx % 2 === 0) {
            td.classList.add('odd')
        } else if (idx % 2 !== 0) {
            td.classList.add('even')
        }
    }
})
