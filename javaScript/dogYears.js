//Project 2: Dog Years

//convert your age from “human years” to “dog years”:

// Create a variable representing my own age

let myAge = 28;

//Creating a variable represening the first two years of dogs

let earlyYears = 2 ;

//The first two years of a dog's life count as 10.5 dog years each

earlyYears *= 10.5;

//Subtract 2 years from myAge since we already accounted for the first two years

let laterYears = myAge - 2;

// Calculate the number of dog years accounted for by your later years
laterYears *= 4;

console.log(earlyYears, laterYears);

//Calculate my age in dog years

let myAgeInDogYears = earlyYears + laterYears;

//Insert my name and make it to a lowercase.
let myName = "Sathaphon".toLowerCase();

//output my name and age in human years and in dog years.

console.log(`My name is ${myName}. I am ${myAge} in human years which is ${myAgeInDogYears} years old in dog years.`);