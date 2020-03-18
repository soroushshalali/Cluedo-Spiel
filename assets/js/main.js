let roomsArray = ["Conservatory ", "Dining Room ", "Kitchen ", "Guest House ", "Patio", "Ballroom"];
let weaponsArray = [" pistol", "trophy", "knife", "dumbbell ", "bat", "axe "];
let suspectsArray = [
    {
        Name: 'mrGreen ',
        age: 34,
        occupation: 'Football player ',
    },
    {
        Name: 'drOrchid',
        age: 31,
        occupation: 'Scientist',
    },
    {
        Name: 'profPlum',
        age: 54,
        occupation: 'Actor',
    },
    {
        Name: 'missScarlet',
        age: 32,
        occupation: 'Designer',
    },
    {
        Name: 'mrsPeacock',
        age: 29,
        occupation: 'programer',
    },
    {
        Name: 'mrMustard ',
        age: 43,
        occupation: 'Entrepreneur',
    },

];

let random1, random2, random3;

randomNum = () => {
    random1 = Math.floor(Math.random() * 6);
    random2 = Math.floor(Math.random() * 6);
    random3 = Math.floor(Math.random() * 6);
}


document.getElementById("play").addEventListener("click", () => {
    randomNum();
    console.log(random3);
    document.getElementById("show").innerHTML = `in: ${roomsArray[random1]} durch ${weaponsArray[random2]} bei ${suspectsArray[random3].Name} <br>` + `<img src="assets/img/${random3}.jpg" alt="">`;

})