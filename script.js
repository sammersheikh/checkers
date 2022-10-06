// psuedocode:
// set up a click event when user clicks on checkers piece
// highlight available tiles for piece to move when a piece is clicked
// set up 2d array for checkers piece placement
// when i click, console.log the 2d array coordinates

//even = black
//odd = white

/*----- constants -----*/

// let gamePiece = document.createElement('div')

/*----- app's state (variables) -----*/

const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
]
// for (i = 0; i < gameBoard.length; i++) {
//     for (j = 0; j < gameBoard[i].length; j++) {
//         console.log(i[j])
//     }
// }
function traverseGameBoard() {
gameBoard.forEach(function(arr, rowIdx) {
    arr.forEach(function(piece, colIdx) {
        // console.log(arr[piece])

    })
}) 
}


let playerTurn = 1
let colIdx, rowIdx

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
        // console.log(rowIdx)
    })
})

tds.forEach(function(td, idx) {
    td.addEventListener('click', function() {
        colIdx = td.className[3]
        colIdx = parseInt(colIdx)
        console.log(rowIdx + ', ' + colIdx)
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
    
