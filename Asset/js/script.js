// Definition of characters with their attributes
const characters = [
    {
        name:"Alban",
        health: 50,
        xp: Math.floor(Math.random() * 10) +1,
        weaponStrength: Math.floor(Math.random() * 10) +1,
        shieldPower: Math.floor(Math.random() * 10) +1,
    },
    {
        name:"Gildas",
        health: 50,
        xp: Math.floor(Math.random() * 10) +1,
        weaponStrength: Math.floor(Math.random() * 10) +1,
        shieldPower: Math.floor(Math.random() * 10) +1,
    },
    {
        name:"Franckie",
        health: 50,
        xp: Math.floor(Math.random() * 10) +1,
        weaponStrength: Math.floor(Math.random() * 10) +1,
        shieldPower: Math.floor(Math.random() * 10) +1,
    },
    {
        name:"Oyanna",
        health: 50,
        xp: Math.floor(Math.random() * 10) +1,
        weaponStrength: Math.floor(Math.random() * 10) +1,
        shieldPower: Math.floor(Math.random() * 10) +1,
    },
]
// Function for find two charaters on random 
function getcharterAttackerAndDefender (array) {
    let attacker = Math.floor(Math.random() * characters.length);
    let defender = Math.floor(Math.random() * characters.length);
    while (defender === attacker ) {
        defender = Math.floor(Math.random() * characters.length);
    }
    return [attacker, defender];
}
// console.log(getcharterAttackerAndDefender(characters))


// Function to simulate a fight between two characters
function goBattleBetweenTwoCharacters ([attacker, defender]) {

    const attackerAttack = characters[attacker].xp + Math.floor(Math.random() * (characters[attacker].weaponStrength +1));
    const defenderDefense = characters[defender].xp + Math.floor(Math.random() * (characters[defender].shieldPower +1));
    
    console.log(`!!! Fight between ${characters[attacker].name} and ${characters[defender].name} !!!`);
    console.log(`${characters[attacker].name} attack with a score of ${attackerAttack} points.`);
    console.log(`${characters[defender].name} defense with a score of ${defenderDefense} points.`);

    if (attackerAttack > defenderDefense) {
        characters[defender].health -= attackerAttack;
        console.log(`${characters[attacker].name} inflicts ${attackerAttack} damage points to ${characters[defender].name}`);
        if (characters[defender].health <= 0) {
            console.warn (`!!!!!!! ${characters[defender].name} is dead !!!!!!!`);
            characters.splice([defender], 1);
        }
    } 
    else {
        return(`${characters[attacker].name} failed to inflcts damage to ${characters[defender].name}`);
    }
}
while (characters.length > 1) {
console.log(goBattleBetweenTwoCharacters(getcharterAttackerAndDefender(characters)));
console.table(characters);
}
console.log(`the winner is : ${characters[0].name}!!!!!!!!!!`);