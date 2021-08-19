//You can always enter "quit" to exit the game
//Game should be saved after each move/interaction, or at least at key points.
'use strict';
const prompt = require('prompt-sync')();
const { Mage, Thief, Warrior } = require("./character");

console.log("Welcome to Dungeon Fortress.\n")
//***CHECK IF PLAYER ALREADY HAS AN EXISTING GAME SAVED***
//if (log.json == true){
    //[Continue last game] [Start a new game] [Exit]
// }
// else{
//    [Start a new game][Exit]
// }


function startNewGame(){
    const name = prompt('Enter your character name? ');
    function displayName(){
        console.log(`Welcome ${name}...`);
    }
    setTimeout(displayName, 400);

    function readStory(){
        console.log("You are currently in ... and your mission is to ...");
    }
    setTimeout(readStory, 1200);
}

startNewGame();



function selectCharacterClass(){
    const characterClass = prompt('Select your character class [Mage] [Warrior] [Thief]: '); //or write q for more information on the classes
    //check if characterClass matches any of the characters in the character.js character array
    // if (characterClassArray.includes(characterClass)){
    //     return true;
    // }
    // else{
    //     console.log("this class doesn't exist.")
    // }
    const magekras = new Thief();
    console.log(magekras);
    console.log("The output of this is: " + magekras.AD);

    console.log("Great choice! The " + characterClass + " is famous for it's strength in the kingdom!");
    console.log("Your starting attributes are (AD, HP, gold)");
    console.log("In order to acquire gold, you need to kill creatures that come your way.");
}


setTimeout(selectCharacterClass, 2300);


console.log("You have faced your first creature...");
// console.log("It's a "+ enemy[]) 


// let character = new Character()
// console.log("THis is priting :" + character);

//3. Start navigating (i.e. outside of the forest)
//choose route (continue right, continue left, rest/use a potion)
    // random enemy class appears with stats random (in range 1-10); RANDOM EASY ENEMY
    // fight or flee?
    // if you fight, you probably lose HP but you get EXP and possibly an item when you kill it.

    // var exp  = 0;
    // if (enemy==dead){
    //     PlayerExp = PlayerExp + currentCharacter.exp;
    // }
    // else(){
    //     console.log("...")
    // }



    //Decision Point: (1) FIGHT, (2) REST
        //if (1) FIGHT => generate enemy (and show stats)

            //                      """Example fight"""
            //Your stats: HP: 100, AD: 20, Gold: 150   |    Enemy stats: HP: 30, AD: 10
            //(a) attack (b) flee

            //Round 1: player attacks: enemy HP (30-20) = 10
            //Round 1: enemy attacks : player HP (100-10) = 90

            //Round 2: player attacks: enemy is killed (player HP: 90)

        //if (2) REST or (1)(b) flee => 
            //(1) regain 20 HP (Cost: 20G) (2) check stats (3) quit game (4) continue


// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//  }