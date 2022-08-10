function getComputerChoice(){
    let list = ['paper', 'rock', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand;
}

function playRound(playerSelection, computerSelection){
    let cmp_score = 0;
    let ply_score = 0;
    
    if (computerSelection == playerSelection){
        cmp_score += 0;
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        ply_score++;
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        ply_score++;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        ply_score++;
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        cmp_score++;
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        cmp_score++;
    }
    else{
        cmp_score++;
    }

    if (cmp_score > ply_score){
        return 'You Lose!';
    }

    if (ply_score > cmp_score){
        return 'You Win!';
    }
}



function game(){
    for (var i = 0; i < 5; i++){
        var computerSelection = getComputerChoice();
        var playerSelection = prompt('Enter your choice: ');
        playerSelection = playerSelection.toLowerCase();
        playRound(computerSelection, playerSelection);
        document.getElementById('text').innerHTML = playRound(computerSelection, playerSelection);
    }
}
game()