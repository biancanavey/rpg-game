class Enemy{
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){ //most shouldn't give items, but 1 in 5-10
        this.enemyHealth = enemyHealth;
        this.enemyAttack = enemyAttack;
        this.goldReward = goldReward;
        this.itemReward = itemReward;

    }
}

class Pixie extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 10;
        enemyAttack = 5; 
        this.itemReward = null;
        this.goldReward = 10;
        this.type = weak;
 
    }
}
class Gnome extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 25;
        enemyAttack = 7; 
        this.itemReward = null;
        this.goldReward = 25;
        this.type = weak;
 
    }
}

class Goblin extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
       super(enemyAttack, enemyHealth, goldReward, itemReward);
            enemyHealth = 15;
            enemyAttack = 10; 
            this.itemReward = null;
            this.goldReward = 30;
            this.type = weak;
 
    }
}

class Gremlin extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 40;
        enemyAttack = 15; 
        this.itemReward = null;
        this.goldReward = 80;
        this.type = medium;
 
    }
}

class Centaur extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 50;
        enemyAttack = 27; 
        this.itemReward = null;
        this.goldReward = 100;
        this.type = medium;
 
    }
}

class Elf extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 60;
        enemyAttack = 20; 
        this.itemReward = null;
        this.goldReward = 150;
        this.type = medium;
 
    }
}

class Dragon extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 100;
        enemyAttack = 30; 
        this.itemReward = null;
        this.goldReward = 300;
        this.type = strong;
 
    }
}
class Wizard extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 90;
        enemyAttack = 30; 
        this.itemReward = null;
        this.goldReward = 250;
        this.type = strong;
 
    }
}
class Troll extends Enemy {
    constructor(enemyAttack, enemyHealth, goldReward, itemReward){
        super(enemyAttack, enemyHealth, goldReward, itemReward);
        enemyHealth = 80;
        enemyAttack = 26; 
        this.itemReward = null;
        this.goldReward = 200;
        this.type = strong;
 
    }
}


easyEnemies = [Pixie, Goblin, Gnome];
mediumEnemies = [Elf, Gremlin, Centaur];
strongEnemies = [Dragon, Wizard, Troll];

