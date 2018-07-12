//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
function randomNumber(){
    console.log(Math.floor(Math.random() *21+1));
}
randomNumber();
function randomLetter(){
    console.log(alphabet[(Math.floor(Math.random()*26+1))]);
}
randomLetter();
function randomFood(){
    console.log(foods[(Math.floor(Math.random()*5+1))]);
}
randomFood();
function randomstudent(){
    console.log(students[(Math.floor(Math.random()*6+1))]);
}
randomstudent();
function randomGroup(){
    randomstudent(randomstudent(randomstudent()))
}
randomGroup();
