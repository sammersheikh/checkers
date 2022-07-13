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

/*----- cached element references -----*/

/*----- event listeners -----*/
$('td').on('click', function() {
    alert('piece clicked!')
})

let counter = 1
$('.toggleH1').on("click", function() {
    if (counter === 1) {
        $('h1').hide()
        counter *= -1
    } else if (counter === -1) {
        $('h1').show()
        counter *= -1
    }
    console.log(counter)
})

/*----- functions -----*/
