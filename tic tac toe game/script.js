console.log("welcome to tic tac toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("tring.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;


// function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0":"X"
}

// Reset A Game
const resetGame = () => {
    // Integrate Reset Game Code
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            isgameover = true 
            document.querySelector('.imgbox').getElementsByTagName('img') [0].style.width = "200px"    
        }

        // From here you can check for the draw if No cells are matched or not empty
    })

}

//game logic
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
             turn = changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText  =  "turn for " + turn;
            }
               
        }     
           
        
    })

})

//addonclick listener to reset button
reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    //turn = "x";
    isgameover = false
        document.getElementsByClassName("info")[0].innerText  =  "turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img') [0].style.width = "0"   
       
    

})



    