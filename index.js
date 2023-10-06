// Iteration 1: Names and Input
let hacker1 = "Ana";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Filipa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker2.length < hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let hacker1All = "";

for (let i = 0; i < hacker1.length; i++){
hacker1All = " " + hacker1All + hacker1[i].toUpperCase();
}

console.log(hacker1All); 


let hacker2Reversed = "";

for (let i = hacker2.length-1; i>=0; i--){
    hacker2Reversed = hacker2Reversed + hacker2[i];
}
console.log(hacker2Reversed);



if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?");
}