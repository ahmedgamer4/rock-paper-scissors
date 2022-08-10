function getComputerChoice(){
    let list = ['paper', 'rock', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand;
}

function playRound(playerSelection, computerSelection){
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    if (computerSelection == playerSelection){
        return 'Tie';
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        return 'You Win! paper beats rock';
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        return 'You Win! scissors beats paper';
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock'){
        return 'You Win! rock beats scissors';
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        return 'You Lose! scissors beats paper';
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        return 'You Lose! rock beats scissors';
    }
    else{
        return 'You Lose! paper beats rock'; 
    }

}