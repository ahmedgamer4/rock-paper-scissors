function getComputerChoice(){
    let list = ['paper', 'rock', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand;
}

function playRound(){
    let cmp_score = 0;
    let ply_score = 0;
    let buttons = document.querySelectorAll('button');
    let button_name = "";
    for (let i = 0; i < 5; i++){
        buttons.forEach(button => {
            button.addEventListener('click', e => {
                button_name = e.target.id;
            
                if (button_name === getComputerChoice()){
                    return 'tie';
                }
                else if (button_name === "paper" && getComputerChoice() === "rock"){
                    ply_score++;
                }
                else if (button_name === 'scissors' && getComputerChoice() === "paper"){
                    ply_score++;
                }
                else if (button_name === "rock" && getComputerChoice() === "scissors"){
                    ply_score++;
                }
                else if (button_name === "rock" && getComputerChoice() === 'paper'){
                    cmp_score++;
                }
                else if (button_name === "scissors" && getComputerChoice() === 'rock'){
                    cmp_score++;
                }
                else{
                    cmp_score++;
                }

                console.log(cmp_score);
                console.log(ply_score);
            });
        });
    }
}



/*function game(){
    for (var i = 0; i < 5; i++){
        var computerSelection = getComputerChoice();
        //var playerSelection = prompt('Enter your choice: ');
        playerSelection = playerSelection.toLowerCase();
        playRound(computerSelection, playerSelection);
        document.getElementById('text').innerHTML = playRound(computerSelection, playerSelection);
    }
    playerSelection, computerSelection
}
game()*/

playRound()