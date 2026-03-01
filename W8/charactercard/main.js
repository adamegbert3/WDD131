// NEED TO ADD CHANGING HTML FOR 
// CLASS: __________________
// LEVEL: __________________
// HEALTH: _________________

let health = 100
let level = 1
let characterClass = "Dinosaur Hippopotimus"

const stat = document.querySelectorAll("#stats p");
const attack = document.querySelector('#attacked')
const levelup = document.querySelector('#level_up')

function update() {
    stat[0].textContent = `Class: ${characterClass}`;
    stat[1].textContent = `Level: ${level}`;
    stat[2].textContent = `Health: ${health}`;
};

attack.addEventListener('click', function() {
    health = health - 20;
    if (health <= 0) {
    alert('YOU DIED!');
    }
    update();
});

levelup.addEventListener('click', function (){
    level = level + 1
    update();
});

update()

