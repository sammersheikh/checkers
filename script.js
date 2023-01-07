// psuedocode:
// set up a click event when user clicks on checkers piece - done
// set up 2d array for checkers piece placement - done 
// when i click, console.log the 2d array coordinates - done
// add game piece position to array and create if statements outputting red or blue pieces
// show game pieces
//change the 2d array with active game piece
// highlight available tiles for piece to move when a piece is clicked

//even = black
//odd = white

/*----- constants -----*/

/*
For array:
    0 = blank space
    1 = red piece
    2 = blue piece
*/

// let gamePiece = document.createElement('div')

/*----- app's state (variables) -----*/

const gameBoard = [
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
]
// const gameBoard = [
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0],
// ]

let playerTurn = 1
let colIdx, rowIdx
// for (i = 0; i < gameBoard.length; i++) {
//     for (j = 0; j < gameBoard[i].length; j++) {
//         console.log(i[j])
//     }
// }
function traverseGameBoard() {
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            if (gameBoard[i][j] === 1) {
                console.log("red piece")
            } else if (gameBoard[i][j] === 2) {
                console.log("blue piece")
            }
        }
    }
 }
 traverseGameBoard()

/*----- cached element references -----*/

let tds = document.querySelectorAll('td')
let rows = document.querySelectorAll('tr')
let table = document.getElementsByName('table')

/*----- event listeners -----*/

document.querySelector('tbody').addEventListener('mouseover', function() {
    event.target.classList.add('highlight')
})

document.querySelector('tbody').addEventListener('mouseout', function() {
    event.target.classList.remove('highlight')
})

rows.forEach(function(row) {
    row.addEventListener('click', function() {
        rowIdx = row.className[3]
        rowIdx = parseInt(rowIdx)
        console.log(`row: ${rowIdx}, col: ${colIdx}`)
    })
})

tds.forEach(function(td) {
    td.addEventListener('click', function() {
        colIdx = td.className[3]
        colIdx = parseInt(colIdx)
        // console.log(`colIdx: ${colIdx}`)
        traverseGameBoard()
    })
})

/*----- functions -----*/

tds.forEach(function(td, idx) {

    if (idx < 8 || (idx > 15 && idx < 24) || (idx > 31 && idx < 40) || (idx > 47 && idx < 56)) {
        if (idx % 2 === 0) {
            td.classList.add('black')
        } else if (idx % 2 !== 0) {
            td.classList.add('white')
        }
    } else {
        if (idx % 2 === 0) {
            td.classList.add('white')
        } else if (idx % 2 !== 0) {
            td.classList.add('black')
        }
    }
})
blackPieces = document.getElementsByClassName('black')
// console.log(blackPieces)

tds.forEach(function(td, idx) {
    if (idx >= 0 && idx < 23 && td.className === 'black') {
        // console.log(idx, td)
        td.innerHTML = '<div class="redGamePiece"></div>'
    } else if (idx > 39 && idx < 63 && td.className === 'white') {
        td.innerHTML = '<div class="blueGamePiece"></div>'
    }
})
   
        // for (let i = 0; i < blackPieces.length; i++) {
        //     console.log(i)
        // }
    
// first commit of the year
// use chat gpt to help solve this problem
// second commit of the year
//dont give up
// never give up
//ever
// start adding features
