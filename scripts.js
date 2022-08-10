function getComputerChoice(){
    let list = ['paper', 'rock', 'scissors'];
    const rand = list[Math.floor(Math.random() * list.length)];
    return rand;
}