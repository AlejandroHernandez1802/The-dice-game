
/* Getting the new value for the player 01 */
let player01NewNumber = Math.floor(Math.random()*6)+1;
console.log(player01NewNumber);
let player02NewNumber = Math.floor(Math.random()*6)+1;
console.log(player02NewNumber);

/*Changing the image depending on the player number*/

    //Player 01
    document.querySelector(".player01-image").setAttribute("src", `./images/dice${player01NewNumber}.png`)

    //Player 02
    document.querySelector(".player02-image").setAttribute("src", `./images/dice${player02NewNumber}.png`)

/*Setting the message for the player who won*/

if(player01NewNumber > player02NewNumber){
    document.querySelector(".decision").textContent = "Decision: Maria wins!";
}
else if(player02NewNumber > player01NewNumber){
    document.querySelector(".decision").textContent = "Decision: Alejandro wins!";
}
else{
    document.querySelector(".decision").textContent = "Decision: It's a draw!";
}
