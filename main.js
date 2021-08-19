//You can always enter "quit" to exit the game
//Game should be saved after each move/interaction, or at least at key points.
'use strict';
const prompt = require('prompt-sync')();
const { Mage, Thief, Warrior } = require("./character");
let character = ""
let activity = ""

console.log("Welcome to Dungeon Fortress.\n")

//***CHECK IF PLAYER ALREADY HAS AN EXISTING GAME SAVED***
function checkGameStatus(){
    //if (log.json == true){
        //options: [Continue last game] [Start a new game] [Exit]
    // }
    // else{
    //    options: [Start a new game][Exit]
    // }
}

function startNewGame(){
    const name = prompt('Enter your character name? ');
    function displayName(){
        console.log(`Welcome ${name}...`);
    }
    // setTimeout(displayName, 400);

    function readStory(){
        console.log("You are currently in ... and your mission is to ...");
    }
    // setTimeout(readStory, 1200);
}

function selectCharacterClass(){
    const characterClass = prompt('Select your character class [Mage] [Warrior] [Thief]: '); //or write q for more information on the classes
    
    //cheap solution but hey, works for now :D -- should ideally search through the classes in character.js
    if(characterClass.toLowerCase() === "mage"){
        character = new Mage();

    }
    else if(characterClass.toLowerCase() === "warrior"){
        character = new Warrior();

    }
    else if(characterClass.toLowerCase() === "thief"){
        character = new Thief();
    }
    else{
        console.log("Invalid class: " + characterClass + " doesn't exist or is spellt incorrectly.")
        selectCharacterClass();
    }

    console.log("Great choice! The " + character.type + " is famous for it's strength in the kingdom!");
    console.log("Your starting attributes are: \n[AD: " + character.AD + "], \n[HP: " + character.HP + "], \n[Gold: "+ character.gold + "]");
}



console.log("In order to acquire gold, you need to kill creatures that you encounter along your way...");

console.log("...Use your gold to replenish your health and avoid dying as creatures get stronger.");

console.log("Let's begin your journey. You will learn the rest along the way.");


function chooseActivity(){
    console.log("What would you like to do next?")
    console.log("w - continue walking");
    console.log("i - view inventory");
    console.log("s - check status (AD, HP, XP, level)");
    console.log("r - consume a potion to recover HP")
    console.log("q - quit the game")
    activity = prompt();

    if (activity === "w"){
        console.log("You've encountered an enemy"); //could also encounter (2) nothing or (3) encounter a merchant/helper
        generateEnemy();
        chooseFightAction();
    }
    else if(activity === "i"){
        viewInventory();
    }
    else if(activity === "s"){
        checkCharacterStatus();
    }
    else if(activity === "r"){
        recoverHP();
    }
    else if(activity === "q"){
        quitGame();
    }
    else{
        console.log("The command " + activity + " is incorrect. Please use only letters without spaces or special characters");
        chooseActivity();
    }
}


function chooseFightAction(){
    console.log("What would you like to do next?")
    console.log("a - attack");
    console.log("f - flee battle");
    action  = prompt();
    if(action === "a"){
        attack();
    }
    else if(action==="f"){
        flee();
    }
    else{
        "incorrect command";
    }
}

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

function quitGame(){
    choice = prompt("Are you sure you want to quit the game (your progress will be saved)? (Y/N): ")
    if(choice==="Y"){
        //save progress in JSON file
        process.exit();
    }
    else{
        continue; //might have to make it "chooseActivity()"
    }
}


startNewGame();
selectCharacterClass();
// setTimeout(selectCharacterClass, 2300);
chooseActivity();