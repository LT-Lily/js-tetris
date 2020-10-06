document.addEventListener("DOMContentLoaded", () => { //fires when HTML content loaded and parsed
    const container = document.querySelector(".grid");
    for(var i = 0; i<200; i++){
        container.innerHTML += "<div>" + "</div>";
    }
    let squares = Array.from(document.querySelectorAll(".grid div"));//Array.from : collect all 200 divs, turn into array
    const displayScore = document.getElementById("score");
    const startBtn = document.getElementById("start-btn");
    const width = 10;
    
    //Tetrominoes

    
});