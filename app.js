//Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


//UI Elements
//When using querySelector use # for id and . for class
const UIgames = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI
minNum.textContent = min;
maxNum.textContent = max;

//Listen for Guess
guessBtn.addEventListener('click',function(){
    let guess = parseInt(guessInput.value);
    console.log(guess)

    //Validate input
    //To validate NaN use isNaN(guess)
    if(isNaN(guess)|| guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, color)
    }

    //Check if won
    if(guess === winningNum){
       gameOver(true,`${winningNum} is correct, YOU WINNNN!!!!`)
       guessBtn.value = "Play Again";
       guessBtn.addEventListener('click',function(){
        location.reload();
    })
    } else {
        //lose
        guessesLeft -= 1;
        if (guessesLeft==0){
          gameOver(false,`${guess} is incorrect, GAME OVER!, the correct number is ${winningNum}`)
          //Display Play Again
           guessBtn.value = "Play Again";

           guessBtn.addEventListener('click',function(){
               location.reload();
           })
           
        } else {
            //clear input

            guessInput.value = " " 
            // Change Border Color
            guessInput.style.borderColor = 'red';
            //Set Message
            setMessage(`${guess} is incorrect, TRY AGAIN!, you have ${guessesLeft} guesses left`,  'red')
        }
        
    }
});


function setMessage(msg,color){
    message.style.color = color
    message.textContent = msg;
}

function gameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';
     //Disable Input
     guessInput.disabled = true;
     // Change Border Color
     guessInput.style.borderColor = color;
     //Text color
     message.style.color = color;
     //Set Message
     setMessage(msg);
}