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
    return (attacker, defender);
}


// Function to simulate a fight between two characters
function goBattleBetweenTwoCharacters (attacker, defender) {

    const attackerAttack = attacker.xp + Math.floor(Math.random() * (attacker.weaponStrength +1));
    const defenderDefense = defender.xp + Math.floor(Math.random() * (defender.shieldPower +1));

    console.log(`!!! Fight between ${attacker.name} and ${defender.name} !!!`);
    console.log(`${attacker.name} attack with a score of ${attackerAttack} points.`);
    console.log(`${defender.name} defense with a score of ${defenderDefense} points.`);

    if (attackerAttack > defenderDefense) {
        const damage = attackerAttack - defenderDefense;
        defender.health -= damage;
        console.log(`${attacker.name} inflicts ${damage} damage points to ${defender.name}`);
        if (defender.health <= 0) {
            console.log(`!!!!!!! ${defender.name} is dead !!!!!!!`);
        }
    }  
}