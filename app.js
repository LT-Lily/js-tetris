document.addEventListener("DOMContentLoaded", () => { //fires when HTML content loaded and parsed
    const container = document.querySelector(".grid");
    for(var i = 0; i<200; i++){
        container.innerHTML += "<div>" + "</div>";
    }
    let squares = Array.from(document.querySelectorAll(".grid div"));//Array.from : collect all 200 divs, turn into array
    const displayScore = document.getElementById("score");
    const startBtn = document.getElementById("start-btn");
    const width = 10;
    
    //Tetrominoes L Z t o I
    const tetroL = [
        [1, width+1, width*2+1, 2], // 1 rotation
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
      ]
    
    const tetroZ = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
         [width+1, width+2,width*2,width*2+1]
  ]
    const tetrot = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    const tetroO = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    const tetroI = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

    const theTetros = [tetroL, tetroZ, tetrot, tetroO, tetroI];

    //draw tetris shapes
    let currentPosition = 4;
    let currentRotation = 0; //every random shape always starts at FIRST rotation

    //select random tetromino
    // Math.random --> gives random number from array length
    // Math.floor rounds to nearest int
    let random = Math.floor(Math.random()*theTetros.length);

    let current = theTetros[random][currentRotation];
    console.log(current);

    //draw first rotation in first shape
    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add("tetromino");
        })
    }

    function undraw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.remove("tetromino");
        })
    }

    draw();
});