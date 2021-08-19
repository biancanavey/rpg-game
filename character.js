'use strict';


class Character{
    constructor(AD, HP, gold){     
        this.gold = 0;
    }
    // get HP() {
    //     return this.HP;
    // }
    // get gold() {
    //     return this.gold;
    // }
}

class Mage extends Character{
    constructor(AD, HP, gold) {
        super(AD, HP, gold);
        this.AD = 40;
        this.HP = 100;
    }
    // get AD() {
    //     return this.AD;
    // }
    
}

class Warrior extends Character{
    constructor(AD, HP, gold) {
        super(AD, HP, gold);
        this.AD = 20;
        this.HP = 200;
        // this.gold = gold;
    }
}
// const magekras = new Mage();
// console.log(magekras);
// console.log("The output of this is: " + magekras.AD);


class Thief extends Character{
    constructor(AD, HP, gold) {
        super(AD, HP, gold);
        this.AD = 30;
        this.HP = 150;
    }
}


module.exports = {
    Mage,
    Warrior,
    Thief,
};

// import Inventory from './inventory';

// export default class Character {

//   constructor(name = '', inventory = new Inventory(), currentLocation = '', startLocation) {
//     this.name = name;
//     if (this.name === '') {
//       this.name = 'Character';
//     }
//     this.inventory = inventory;
//     if (this.currentlocation=== '') {
//       this.currentlocation = this.startlocation;
//     }
//     this.startlocation = startlocation;
//   }
//   enterlocation(location) {
//     const locationResult = location.enter(this.inventory.items);

//     if (roomResult[1] === false) {
//       // Player did not have required items to enter the room
//     } else {
//       // Entered room successfully
//       this.locationRoom = location.name;
//     }
//     // Return results text and whether or not player successfully entered room
//     return [locationResult[0], locationResult[1]];
//   }

//   getItem(item) {
//     this.inventory.addItem(item);
//     return this.inventory;
//   }

//   dropItem(item) {
//     this.inventory.dropItem(item);
//     return this.inventory;
//   }
// }

// module.exports = { Class };
