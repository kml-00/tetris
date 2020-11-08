
const score = document.getElementById("#score");
const startButton= document.getElementById('#startBtn');
let gameSquareArray = Array.from(document.querySelectorAll('.game-grid div'));

// two translation
const iTetromino=
[
    [-1,0,1,2],
    [1,11,21,31],
    
];
// one translation
const oTetromino=
[
    [0,1,10,11],
    
];
// four translation
const tTetromino=
[
    [0,1,2,11],
    [1,11,21,12],
    [1,11,21,10],
    [1,10,11,12]
];
// four translation
const lTetromino=
[
    
    [0,1,11,21],
    [2,10,11,12],
    [0,10,20,21],
    [0,1,2,10]
    
];
// four translation
const jTetromino=
[
    [0,10,20,19],
    [0,1,2,12],
    [0,10,20,1],
    [0,10,11,12]
    
];
// two translation
const sTetromino=
[
    [0,1,9,10],
    [0,10,11,21],
    
];
// two translation
const zTetromino=
[
    [0,1,11,12],
    [1,11,10,20],
    
];

const theTetrominoes=[iTetromino,oTetromino,tTetromino,lTetromino,jTetromino,sTetromino,zTetromino];
let randomTetromino =Math.floor(Math.random()*theTetrominoes.length);

let currentPosition = 4;
let current = theTetrominoes[randomTetromino][0];

function draw() {

    current.forEach(index => {
        gameSquareArray[currentPosition + index].classList.add('tetrominos');
    })
}

draw();



