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
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            button_name = e.target.id;
        });
    });

    
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