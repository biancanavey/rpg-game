'use strict';
const { Character } = require("./character");
import {Character} from './character';


//please unhighlight after highlighting and copying, cuz it makes it hard to see and edit for others


class Enemy{
    constructor(name, enemyAttack, enemyHealth, goldReward, itemReward, type){
        this.name = name;
        this.enemyHealth = enemyHealth;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemReward = itemReward;
        this.type = type;  
        }
}

//okay yeah, I think we need to make subclasses of easy, medium and hard enemy cuz it makes it easier to edit the XP and gold they provide.

class EasyEnemy extends Enemy{
    constructor(name, enemyAttack, enemyHealth, goldReward=5, itemTier=1, type="easy", XP=80){
        this.name = name;
        this.enemyHealth = enemyHealth;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemTier = itemTier; //have low probability (like 5-10%)
        this.type = type;
        this.XP = XP;
    }
}

class MediumEnemy extends Enemy{
    constructor(name, enemyAttack, enemyHealth, goldReward=10, itemTier=2, type="medium", XP=300){
        this.name = name;
        this.enemyHealth = enemyHealth;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemTier = itemTier; //have low probability (like 5-10%)
        this.type = type;
        this.XP = XP;
    }
}

class HardEnemy extends Enemy{
    constructor(name, enemyAttack, enemyHealth, goldReward=20, itemTier=3, type="hard", XP=500){
        this.name = name;
        this.enemyHealth = enemyHealth;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemTier = itemTier; //have low probability (like 5-10%)
        this.type = type;
        this.XP = XP;
    }
}



// oh no an [insert name] is attacking you
let pixie = new Enemy('pixie', 5, 10, 10, null, 'weak');

let gnome = new Enemy('gnome', 7, 10, 25, null, 'weak');

let goblin = new Enemy('goblin', 10, 15, 30, null, 'weak');

//return all enemies which are easy?
//loop through all enemies and return easy ones

//access easyEnemies array

//access dictionary with all enemies but just pick easy ones



// class Pixie extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 10;
//         this.enemyAttack = 5; 
//         this.itemReward = null;
//         this.goldReward = 10;
//         this.type = 'weak';
 
//     }
// }

// class Gnome extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 25;
//         this.enemyAttack = 7; 
//         this.itemReward = null;
//         this.goldReward = 25;
//         this.type = 'weak';
 
//     }
// }

// class Goblin extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//        super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//             this.enemyHealth = 15;
//             this.enemyAttack = 10; 
//             this.itemReward = null;
//             this.goldReward = 30;
//             this.type = 'weak';
 
//     }
// }
let gremlin = new Enemy('gremlin', 15, 40, 80, 'medium');
let centaur = new Enemy('centaur', 27, 50, 100, null, 'medium ');
let elf = new Enemy('elf', 20, 60, )

// class Gremlin extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         enemyHealth = 40;
//         enemyAttack = 15; 
//         this.itemReward = null;
//         this.goldReward = 80;
//         this.type = 'medium';
 
//     }
// }

// class Centaur extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 50;
//         this.enemyAttack = 27; 
//         this.itemReward = null;
//         this.goldReward = 100;
//         this.type = 'medium';
 
//     }
// }

// class Elf extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 60;
//         this.enemyAttack = 20; 
//         this.itemReward = null;
//         this.goldReward = 150;
//         this.type = 'medium';
 
//     }
// }

// class Dragon extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 100;
//         this.enemyAttack = 30; 
//         this.itemReward = null;
//         this.goldReward = 300;
//         this.type = 'strong';
 
//     }
// }
// class Wizard extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 90;
//         this.enemyAttack = 30; 
//         this.itemReward = null;
//         this.goldReward = 250;
//         this.type = 'strong';
 
//     }
// }
// class Troll extends Enemy {
//     constructor(enemyAttack, enemyHealth, goldReward, itemReward, type){
//         super(enemyAttack, enemyHealth, goldReward, itemReward, type);
//         this.enemyHealth = 80;
//         this.enemyAttack = 26; 
//         this.itemReward = null;
//         this.goldReward = 200;
//         this.type = 'strong';
 
//     }
// }
// battle sequence
// 1) Create the "battle" logic (HP tracking, X attacks Y and Y attacks X) //Lizzie and Ani


let easyEnemies = [pixie, goblin, gnome]; //if player between level 1-4 //give 15XP * level
// let mediumEnemies = [Elf, Gremlin, Centaur]; //if player between level 5-9 //give 20XP * level
// let strongEnemies = [Dragon, Wizard, Troll]; // if player level 10+ //give //give 





let num = Math.floor(Math.random()*easyEnemies.length);
console.log(easyEnemies[num]);
let currentEnemy = easyEnemies[num];


function doAttack() {
    
    return currentEnemy.enemyHealth = currentEnemy.enemyHealth - 5;
    console.log(currentEnemy.enemyHealth);;
      
};

function receiveAttack(character){
    return character.HP = character.HP - currentEnemy.enemyAttack;
    console.log(character.HP);
};


function generateEnemy(character) {
    while (character.HP > 0 && currentEnemy.enemyHealth > 0){
        recieveAttack();
        console.log("Oh no! You've taken a hit from " + currentEnemy.name + ". Now's your chance to fight back!");
        // prompt()
        doAttack();
        console.log('Well done!! The fight continues...');
    }
};

module.exports = {
    Enemy,
    receiveAttack
};

