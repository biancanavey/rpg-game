// Essential:
// 1) Create the "battle" logic (HP tracking, X attacks Y and Y attacks X) //Lizzie and Ani
//XP to levels calculation (level * 100 * 1.6)
// 2) Make logic for choosing weak, medium or strong enemies based on character level // Lizzie and Ani
// 3) Write the game progress in a JSON file so that it can be retrieved //Bianca
// 4) Modify player class, create instance and adjust it based on user input from main.js //Kras


// -) If we have time, write logic for when items are dropped by enemies and define a few item options. if we want to keep it simple we can maybe just make enemies drop potions and gold.
// -) If we still have time, we can implement "special abilities" and "mana" for characters


//You can always enter "quit" to exit the game
//Game should be saved after each move/interaction, or at least at key points.
'use strict';
const prompt = require('prompt-sync')();
const { Mage, Thief, Warrior, calculateAD, calculateTotalHP, calculateLevel } = require("./character");
//const { Enemy, receiveAttack } = require('./enemy');
const { consumePotion } = require('./battle')
let character = "";
let activity = "";
let name = "";
let xp = 0;
// let player = ""
//checkJSON();


console.log("Welcome to Dungeon Fortress.\n")
startNewGame();
selectCharacterClass();
// setTimeout(selectCharacterClass, 2300);
console.log("In order to acquire gold, you need to kill creatures that you encounter along your way...");
console.log("...Use your gold to replenish your health and avoid dying as creatures get stronger.");
console.log("Let's begin your journey. You will learn the rest along the way.");
chooseActivity();


function startNewGame(){
    name = prompt('Enter your character name? ');
    // player.name = name;
    displayName();
    readStory();

    function displayName(){
        // console.log(`Welcome ${name}...`);
        console.log("Welcome " + name + " ...");
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
        character = new Mage(name);

    }
    else if(characterClass.toLowerCase() === "warrior"){
        character = new Warrior(name);

    }
    else if(characterClass.toLowerCase() === "thief"){
        character = new Thief(name);
    }
    else{
        console.log("Invalid class: " + characterClass + " doesn't exist or is spellt incorrectly.")
        selectCharacterClass();
    }

    console.log("Great choice! The " + character.type + " is famous for it's strength in the kingdom!");
    console.log("Your starting attributes are: \n[Character name: " + character.name + "] \n[Character class: " + character.type + "] \n[Attack Damage (AD): " + character.AD + "] \n[Health Points (HP): " + character.HP + "] \n[Experience Points (XP): " + character.XP + "] \n[Gold: "+ character.gold + "]");
}

//calling function
//receiveAttack(character.HP);


function chooseActivity(){
    console.log("What would you like to do now?")
    console.log("c - continue"); //80% chance of enemy, (15% chance of helper), 5% chance of nothing
    console.log("i - view inventory");
    console.log("s - check status (AD, HP, XP, level)"); //Attack Damage (AD): 20 
    console.log("r - consume a potion to recover HP (20G for 20HP)") 
    console.log("q - quit the game")
    activity = prompt();

    if (activity === "w"){
        console.log("You've encountered an enemy"); //could also encounter (2) nothing or (3) encounter a merchant/helper
        generateEnemy(); //generate enemy and print it's characteristics: Lizzie and Ani
        chooseFightAction();
    }
    else if(activity === "i"){
        viewInventory();
    }
    else if(activity === "s"){
        checkCharacterStatus();
    }
    else if(activity === "p"){
        //consumePotion(); //Kras - battle.js
    }
    else if(activity === "q"){
        quitGame(); //Bianca
    }
    else{
        console.log("The command " + activity + " is incorrect. Please use only letters without spaces or special characters");
        chooseActivity();
    }
}

function checkCharacterStatus(){
    //check status (AD, HP, XP, level)"); //Attack Damage (AD): 20 
    console.log("Your statistics are: ")
    console.log("Attack Damage (AD): :" + character.AD);
    console.log("Health Points (HP): " + character.HP);
    console.log("Experience Points (XP): " + character.XP);
    console.log("Level: " + calculateLevel(character.XP)); //can be calculated based on total experience.
    chooseActivity();
}


function chooseFightAction(){
    console.log("What would you like to do next?")
    console.log("a - attack");
    console.log("f - flee battle");
    console.log("p - consume potion (20G for 20HP)");
    action  = prompt();
    if(action === "a"){
        attack(); //Ani, Lizzie
    }
    else if(action==="f"){
        console.log("You've fled the fight")
        chooseActivity(); //done

    }
    else if(action==="p"){
        consumePotion(character.currentHP, gold); //Kras
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
    let choice = prompt("Are you sure you want to quit the game (your progress will be saved)? (Y/N): ")
    if(choice==="Y"){
        //save progress in JSON file
        console.log("game has exited")
        process.exit();
    }
    else{
        // continue; //might have to make it "chooseActivity()"
    }
}